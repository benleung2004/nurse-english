'use strict';
(function () {
  // ===== 基本工具 =====
  const $ = s => document.querySelector(s);
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const pad = n => String(n).padStart(2, '0');
  const fmt = d => d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
  const today = () => fmt(new Date());
  const addDays = (ds, n) => { const [y, m, d] = ds.split('-').map(Number); return fmt(new Date(y, m - 1, d + n)); };
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const hashStr = s => { let h = 0; for (const c of s) h = (h * 31 + c.charCodeAt(0)) | 0; return Math.abs(h); };

  const DECK_COLORS = {
    vital: '#12a39a', body: '#ef5a5a', symptoms: '#f59e0b', conditions: '#8b5cf6', care: '#0ea5e9', meds: '#ff5c8a',
    equip: '#64748b', abbr: '#3b82f6', roots: '#22b07d', 'ph-patient': '#12a39a', 'ph-pain': '#ef5a5a',
    'ph-handover': '#7c3aed', 'ph-family': '#ff8a3d', 'ielts-health': '#16a34a', 'ielts-awl': '#2563eb',
    'ielts-speak': '#db2777', mine: '#f59e0b',
    'adv-assess': '#0d9488', 'adv-proc': '#0284c7', 'adv-pharm': '#e11d48', 'adv-cond': '#7c3aed', 'adv-safety': '#ea580c',
    'adv-geri': '#65a30d', 'ph-ward': '#0891b2', 'ph-team': '#c026d3',
    'ielts-speak7': '#be185d', 'ielts-write7': '#4f46e5', 'ielts-topics': '#059669'
  };
  const CATS = [['medical', '🩺 醫護字彙'], ['talk', '💬 實用句子（中→英）'], ['ielts', '🎓 IELTS'], ['mine', '⭐ 我的生字']];
  const QUOTES = [
    ['Small steps every day lead to big results.', '每天一小步，累積成大進步。'],
    ['You take care of patients every day. Today, take care of your English too.', '你每日照顧病人，今日都照顧下自己嘅英文。'],
    ['Mistakes are proof that you are trying.', '犯錯證明你正在努力。'],
    ['Progress, not perfection.', '追求進步，唔使完美。'],
    ['Fifteen minutes a day is enough to change your future.', '每日十五分鐘，足以改變將來。'],
    ['Every word you learn helps a patient feel understood.', '你學識嘅每個字，都令病人更被明白。'],
    ['You are braver than you think.', '你比自己想像中更勇敢。'],
    ['Consistency beats intensity.', '持之以恆勝過一時拼搏。'],
    ['Your future self will thank you.', '將來嘅你會多謝今日嘅自己。'],
    ['Learning English is a marathon, not a sprint.', '學英文係馬拉松，唔係短跑。'],
    ['A little progress each day adds up to big results.', '每日少少進步，加埋就係大成果。'],
    ['I am proud of you. Keep going! ❤️', '我為你驕傲，繼續加油！❤️']
  ];

  // ===== 資料儲存（只存喺手機 localStorage） =====
  const KEY = 'nurse-english-v1';
  const DEFAULTS = { name: '', dailyGoal: 20, newPerDay: 10, maxReview: 100, zhMode: 'tap', accent: 'en-GB', rate: 0.9, theme: 'auto', decks: null, remind: '21:00', hideInstall: false, examDate: '', examType: 'ac', target: '6.5', seenHelp: false, newIelts: 10, advFirst: true, sentPrompt: true, seenUpdate: '' };
  function load() {
    let d = {};
    try { d = JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { d = {}; }
    return {
      settings: Object.assign({}, DEFAULTS, d.settings), cards: d.cards || {}, log: d.log || {},
      custom: d.custom || [], stars: d.stars || {}, drafts: d.drafts || {}, counters: Object.assign({ speak: 0, essay: 0 }, d.counters),
      events: d.events || [], feedback: d.feedback || [], roadmap: d.roadmap || {}, mocks: d.mocks || [], reports: d.reports || [], weekly: d.weekly || []
    };
  }
  let S = load();
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { toast('儲存失敗：' + e.message); } scheduleSync(); }
  // 詳細記錄（俾 Claude 分析強弱項）：k = study / quiz / say / speak / essay
  const MAX_EVENTS = 4000;
  function logEv(o) { S.events.push(Object.assign({ t: Date.now() }, o)); if (S.events.length > MAX_EVENTS) S.events.splice(0, S.events.length - MAX_EVENTS); }

  // ===== 同步去私人 GitHub repo（token 只存喺呢部機，唔會匯出）=====
  const SYNC_KEY = 'ne_sync', SYNC_PATH = 'data/progress.json', DEFAULT_REPO = 'benleung2004/nurse-english-data';
  let SY = {};
  try { SY = JSON.parse(localStorage.getItem(SYNC_KEY) || '{}') || {}; } catch (e) { SY = {}; }
  const saveSY = () => { try { localStorage.setItem(SYNC_KEY, JSON.stringify(SY)); } catch (e) { /* 冇得存就算 */ } };
  const syncReady = () => !!(SY.repo && SY.token);
  let syncTimer = null, syncing = false, syncAgain = false;
  function scheduleSync() { if (!syncReady()) return; clearTimeout(syncTimer); syncTimer = setTimeout(() => syncNow(false), 5000); }
  const b64enc = s => { const b = new TextEncoder().encode(s); let bin = ''; for (let i = 0; i < b.length; i += 0x8000) bin += String.fromCharCode.apply(null, b.subarray(i, i + 0x8000)); return btoa(bin); };
  function ghFetch(opts) {
    opts = opts || {};
    return fetch(`https://api.github.com/repos/${SY.repo}/contents/${SYNC_PATH}`, Object.assign({ cache: 'no-store' }, opts, {
      headers: Object.assign({ Authorization: `Bearer ${SY.token}`, Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28' }, opts.headers || {})
    }));
  }
  const CLAUDE_DIR = 'data/claude-reports';
  async function ghGet(path) {
    const r = await fetch(`https://api.github.com/repos/${SY.repo}/contents/${path}`, { cache: 'no-store', headers: { Authorization: `Bearer ${SY.token}`, Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28' } });
    if (r.status === 404) return null; if (!r.ok) throw new Error('GitHub 回應 ' + r.status); return r.json();
  }
  const b64dec = s => new TextDecoder().decode(Uint8Array.from(atob(s.replace(/\s/g, '')), ch => ch.charCodeAt(0)));
  // 手機係唯一資料來源：只上載，唔會由 repo 覆蓋手機資料
  async function syncNow(manual) {
    if (!syncReady()) { if (manual) toast('未連接同步'); return; }
    if (!navigator.onLine) { if (manual) toast('而家離線，有網會自動同步'); return; }
    if (syncing) { syncAgain = true; return; }
    syncing = true; clearTimeout(syncTimer);
    try {
      let ok = false;
      for (let attempt = 0; attempt < 3 && !ok; attempt++) {
        const head = await ghFetch();
        if (head.status === 401 || head.status === 403) throw new Error('auth');
        if (!head.ok && head.status !== 404) throw new Error('GitHub 回應 ' + head.status);
        const sha = head.ok ? (await head.json()).sha : null;
        const body = { message: 'sync ' + today(), content: b64enc(JSON.stringify(exportData(), null, 1)) };
        if (sha) body.sha = sha;
        const r = await ghFetch({ method: 'PUT', body: JSON.stringify(body) });
        if (r.status === 409 || r.status === 422) continue;
        if (r.status === 401 || r.status === 403 || r.status === 404) throw new Error('auth');
        if (!r.ok) throw new Error('GitHub 回應 ' + r.status);
        ok = true;
      }
      if (!ok) throw new Error('同步衝突，稍後再試');
      SY.lastSync = Date.now(); SY.lastError = ''; saveSY();
      if (manual) toast('☁️ 已同步');
    } catch (e) {
      SY.lastError = e.message === 'auth' ? 'Token 無效、過期，或者冇呢個 repo 嘅權限' : (e.message === 'Failed to fetch' ? '連唔到 GitHub' : e.message);
      saveSY(); if (manual) toast('同步失敗：' + SY.lastError);
    } finally {
      syncing = false; const st = document.getElementById('syncStatus'); if (st) st.textContent = syncStatusText();
      if (syncAgain) { syncAgain = false; scheduleSync(); }
    }
  }
  function syncStatusText() {
    if (!syncReady()) return '未連接：資料只存喺呢部手機';
    if (SY.lastError) return '⚠️ ' + SY.lastError;
    if (SY.lastSync) { const d = new Date(SY.lastSync); return `☁️ 已同步 ${d.getMonth() + 1}/${d.getDate()} ${pad(d.getHours())}:${pad(d.getMinutes())}`; }
    return '☁️ 已連接，未同步';
  }
  window.addEventListener('online', () => scheduleSync());
  // 離開 app（轉 app／鎖機）時即刻上載，確保 Ben 睇到最新
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden' && syncReady()) syncNow(false); });

  // ===== 強項／弱項分析（App 顯示 + 匯出俾 Claude）=====
  const QTYPE = { mcZh: '英→中選擇', mcEn: '中／解釋→英選擇', listen: '聽力', spell: '串字' };
  function insights(days) {
    const since = Date.now() - (days || 30) * 864e5;
    const ev = S.events.filter(e => e.t >= since);
    const byType = {}, byDeck = {}, miss = {};
    const add = (o, k, ok) => { const x = o[k] || (o[k] = { n: 0, ok: 0 }); x.n++; if (ok) x.ok++; };
    ev.forEach(e => {
      const c = BY[e.id];
      if (e.k === 'quiz') { add(byType, e.ty, e.ok); if (c) add(byDeck, c.d, e.ok); if (!e.ok) miss[e.id] = (miss[e.id] || 0) + 1; }
      if (e.k === 'study' && !e.nw) { if (c) add(byDeck, c.d, e.g >= 2); if (e.g === 0) miss[e.id] = (miss[e.id] || 0) + 1; }
    });
    const rate = x => x.n ? Math.round(x.ok / x.n * 100) : null;
    const decks = Object.keys(byDeck).filter(k => byDeck[k].n >= 5 && DECKMAP[k]).map(k => ({ deck: k, name: DECKMAP[k].zh, n: byDeck[k].n, pct: rate(byDeck[k]) })).sort((a, b) => b.pct - a.pct);
    const types = Object.keys(byType).map(k => ({ type: k, name: QTYPE[k] || k, n: byType[k].n, pct: rate(byType[k]) })).filter(x => x.n >= 3).sort((a, b) => b.pct - a.pct);
    const says = ev.filter(e => e.k === 'say');
    const avgPct = (k, f) => { const xs = ev.filter(e => e.k === k); return xs.length ? { n: xs.length, pct: Math.round(xs.reduce((s, e) => s + f(e), 0) / xs.length * 100) } : null; };
    const gcat = {}; ev.filter(e => e.k === 'gram').forEach(e => add(gcat, e.cat, e.ok));
    const ai = ev.filter(e => e.k === 'ai' && e.band);
    const aiBy = {}; ai.forEach(e => { (aiBy[e.kind] = aiBy[e.kind] || []).push(e.band); });
    const skills = {
      reading: avgPct('read', e => e.sc / e.n), listening: avgPct('listen', e => e.sc / e.n),
      dictation: avgPct('dict', e => e.acc), recall: avgPct('recall', e => e.sc),
      grammar: Object.keys(gcat).map(k => ({ cat: k, name: (NE.grammarCats || {})[k] || k, n: gcat[k].n, pct: rate(gcat[k]) })).sort((a, b) => a.pct - b.pct),
      aiBands: Object.keys(aiBy).map(k => ({ kind: k, n: aiBy[k].length, avg: Math.round(aiBy[k].reduce((a, b) => a + b, 0) / aiBy[k].length * 2) / 2 }))
    };
    return {
      skills,
      days: days || 30,
      strengths: decks.filter(d => d.pct >= 80).slice(0, 3),
      weaknesses: decks.filter(d => d.pct < 70).slice(-3).reverse(),
      decks, quizTypes: types,
      mostMissed: Object.keys(miss).filter(id => BY[id]).sort((a, b) => miss[b] - miss[a]).slice(0, 15).map(id => ({ id, en: fill(BY[id].en), zh: BY[id].zh, misses: miss[id] })),
      pronunciation: says.length ? { tries: says.length, avg: Math.round(says.reduce((s, e) => s + e.sc, 0) / says.length * 100) } : null,
      speaking: ev.filter(e => e.k === 'speak').length, essays: ev.filter(e => e.k === 'essay').length,
      activeDays: new Set(ev.map(e => fmt(new Date(e.t)))).size
    };
  }
  function exportData() {
    return {
      app: 'nurse-english', exportedAt: new Date().toISOString(), contentVersion: NE.cards.length,
      summary: insights(30), settings: S.settings, counters: S.counters, feedback: S.feedback,
      log: S.log, cards: S.cards, stars: S.stars, custom: S.custom, drafts: S.drafts, events: S.events,
      roadmap: S.roadmap, mocks: S.mocks, reports: S.reports, weekly: S.weekly
    };
  }
  function logToday() { const t = today(); return S.log[t] || (S.log[t] = { n: 0, r: 0, q: 0, qt: 0, ex: 0 }); }
  const activity = L => L ? (L.n || 0) + (L.r || 0) + (L.qt || 0) + (L.ex || 0) : 0;

  // ===== 卡片索引 =====
  let ALL = [], BY = {}, DECKS = [], DECKMAP = {};
  function rebuild() {
    DECKS = NE.decks.concat([{ id: 'mine', name: 'My words', zh: '我的生字', cat: 'mine', icon: '⭐' }]);
    DECKMAP = {}; DECKS.forEach(d => { DECKMAP[d.id] = d; });
    ALL = NE.cards.concat(S.custom.map(c => Object.assign({}, c, { d: 'mine' })));
    BY = {}; ALL.forEach(c => { BY[c.id] = c; });
  }
  rebuild();
  const deckOf = c => DECKMAP[c.d] || {};
  const color = id => DECK_COLORS[id] || '#12a39a';
  const fill = s => String(s || '').replace(/\{name\}/g, S.settings.name || 'Amy');
  // 兩條線分開：🩺 護理英文（醫護字、病房句子、自己加嘅字）同 🎓 IELTS
  const TRACKS = { nurse: { name: '護理英文', icon: '🩺', cats: ['medical', 'talk', 'mine'] }, ielts: { name: 'IELTS', icon: '🎓', cats: ['ielts'] } };
  const trackOfDeck = id => (DECKMAP[id] && DECKMAP[id].cat === 'ielts') ? 'ielts' : 'nurse';
  const trackOf = c => trackOfDeck(c.d);
  // 佢話基本醫護字已經識：護理新字先出進階字庫同句子，出完先輪到基本字
  const BASIC_NURSE = ['vital', 'body', 'symptoms', 'conditions', 'care', 'meds', 'equip', 'abbr', 'roots'];
  const trackDecks = t => enabledDecks().filter(id => trackOfDeck(id) === t);
  const enabledDecks = () => (S.settings.decks || DECKS.map(d => d.id)).filter(id => DECKMAP[id]);
  function speakText(c) {
    const dk = deckOf(c);
    if (dk.roots) return c.ex.split(':')[0];
    if (dk.abbr) return c.en + '. ' + c.def.replace(/\(.*?\)/g, '');
    return fill(c.en).replace(/\(.*?\)/g, '').replace(/\//g, ' ').trim();
  }
  function dictUrl(text) {
    const t = fill(text).trim();
    if (/\s/.test(t) && t.split(/\s+/).length > 3) return 'https://translate.google.com/?sl=en&tl=zh-TW&text=' + encodeURIComponent(t);
    return 'https://dictionary.cambridge.org/dictionary/english-chinese-traditional/' + encodeURIComponent(t.toLowerCase().replace(/\s+/g, '-'));
  }
  function stateOf(id) {
    const s = S.cards[id];
    if (!s) return ['new', '新'];
    if (s.i >= 21) return ['master', '熟記'];
    return ['learn', '學緊'];
  }

  // ===== 間隔重複（簡化 SM-2）：0 唔記得 / 1 難 / 2 記得 / 3 好易 =====
  function nextState(prev, g) {
    const s = prev ? Object.assign({}, prev) : { i: 0, e: 2.5, r: 0, l: 0, first: today() };
    if (g === 0) { s.i = 0; s.e = Math.max(1.3, s.e - 0.2); s.l = (s.l || 0) + 1; }
    else if (g === 1) { s.i = s.i ? Math.max(s.i + 1, Math.round(s.i * 1.2)) : 1; s.e = Math.max(1.3, s.e - 0.15); }
    else if (g === 2) { s.i = s.i ? Math.max(s.i + 1, Math.round(s.i * s.e)) : 1; }
    else { s.i = s.i ? Math.max(s.i + 2, Math.round(s.i * s.e * 1.3)) : 3; s.e += 0.15; }
    if (g > 0) s.r = (s.r || 0) + 1;
    s.due = addDays(today(), s.i); s.last = today();
    return s;
  }
  function ivLabel(i) { return i === 0 ? '再嚟' : i < 30 ? i + '日' : Math.round(i / 30) + '個月'; }

  function dueCount(deck, track) {
    const t = today();
    return ALL.filter(c => (!deck || c.d === deck) && (!track || trackOf(c) === track) && S.cards[c.id] && S.cards[c.id].due <= t).length;
  }
  function newLeftToday(track) {
    const L = logToday(); const ni = L.ni || 0;
    if (track === 'ielts') return Math.max(0, (S.settings.newIelts || 0) - ni);
    return Math.max(0, S.settings.newPerDay - ((L.n || 0) - ni));
  }
  function newIdsFor(track, n) {
    const ds = trackDecks(track);
    if (track === 'nurse' && S.settings.advFirst) {
      const first = pickNew(ds.filter(id => !BASIC_NURSE.includes(id)), n);
      return first.concat(pickNew(ds.filter(id => BASIC_NURSE.includes(id)), n - first.length));
    }
    return pickNew(ds, n);
  }
  function pickNew(deckIds, n) {
    if (n <= 0) return [];
    const lists = deckIds.map(id => ALL.filter(c => c.d === id && !S.cards[c.id]));
    const out = []; let k = hashStr(today()) % Math.max(1, lists.length);
    while (out.length < n && lists.some(l => l.length)) {
      const l = lists[k % lists.length]; if (l.length) out.push(l.shift().id); k++;
    }
    return out;
  }
  function buildQueue(opts) {
    if (opts.ids) return opts.ids.slice();
    const t = today();
    const due = ALL.filter(c => (!opts.deck || c.d === opts.deck) && (!opts.track || trackOf(c) === opts.track) && S.cards[c.id] && S.cards[c.id].due <= t)
      .sort((a, b) => S.cards[a.id].due < S.cards[b.id].due ? -1 : 1).slice(0, S.settings.maxReview).map(c => c.id);
    const tr = opts.track || 'nurse';
    const nNew = opts.newCount != null ? opts.newCount : newLeftToday(tr);
    const news = opts.deck ? pickNew([opts.deck], nNew) : newIdsFor(tr, nNew);
    const q = []; let a = 0, b = 0;
    while (a < due.length || b < news.length) {
      for (let k = 0; k < 3 && a < due.length; k++) q.push(due[a++]);
      if (b < news.length) q.push(news[b++]);
    }
    return q;
  }

  // ===== 連續日數 =====
  function goalHit(day) { const L = S.log[day]; return !!(L && (L.goalHit || activity(L) >= S.settings.dailyGoal)); }
  function streak() {
    let d = today(), n = 0;
    if (!goalHit(d)) d = addDays(d, -1);
    while (goalHit(d)) { n++; d = addDays(d, -1); }
    return n;
  }
  function longestStreak() {
    const days = Object.keys(S.log).filter(goalHit).sort();
    let best = 0, cur = 0, prev = null;
    days.forEach(d => { cur = prev && addDays(prev, 1) === d ? cur + 1 : 1; best = Math.max(best, cur); prev = d; });
    return best;
  }
  function checkGoal() {
    const L = logToday();
    if (!L.goalHit && activity(L) >= S.settings.dailyGoal) {
      L.goalHit = true; save();
      setTimeout(() => { confetti(); toast('🎉 今日目標完成！連續 ' + streak() + ' 日'); }, 250);
    }
  }

  // ===== 讀音（TTS）、跟讀（語音辨識）=====
  let voices = [];
  function loadVoices() { try { voices = speechSynthesis.getVoices(); } catch (e) { voices = []; } }
  if ('speechSynthesis' in window) { loadVoices(); speechSynthesis.onvoiceschanged = loadVoices; }
  function speak(text, btn, rate) {
    if (!('speechSynthesis' in window)) { toast('呢部機唔支援讀音'); return; }
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    const acc = S.settings.accent;
    u.lang = acc;
    const v = voices.find(v => v.lang.replace('_', '-') === acc) || voices.find(v => v.lang.startsWith('en'));
    if (v) u.voice = v;
    u.rate = rate || S.settings.rate;
    if (btn) { btn.classList.add('playing'); u.onend = u.onerror = () => btn.classList.remove('playing'); }
    speechSynthesis.speak(u);
  }
  // iPhone／iPad 嘅網頁語音辨識（特別係加咗去主畫面）會卡死成個 app，所以 iOS 唔用：
  // 句子用鍵盤 🎤 輸入；IELTS 口語用錄音 + AI 聽
  const IOS = /iPhone|iPad|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const SR = IOS ? null : (window.SpeechRecognition || window.webkitSpeechRecognition);
  // iPhone 打字／語音會用彎引號 ’，要先統一，否則 That’s 會被拆開計錯
  const norm = s => fill(s).toLowerCase().replace(/[\u2018\u2019\u02BC`´]/g, "'").replace(/\(.*?\)/g, '').replace(/[^a-z0-9' ]/g, ' ').replace(/(^|\s)'|'(?=\s|$)/g, ' ').split(/\s+/).filter(Boolean).flatMap(unContract);
  // 縮寫同全寫當一樣：that's = that is、don't = do not（語音辨識有時會寫全寫）
  function unContract(w) {
    const x = { "can't": 'can not', cannot: 'can not', "won't": 'will not', "shan't": 'shall not', "let's": 'let us' }[w];
    if (x) return x.split(' ');
    let m;
    if ((m = w.match(/^(.+)n't$/))) return [m[1], 'not'];
    if ((m = w.match(/^(.+)'(re|ll|ve|m|d)$/))) return [m[1], { re: 'are', ll: 'will', ve: 'have', m: 'am', d: 'would' }[m[2]]];
    if ((m = w.match(/^(it|that|he|she|what|there|here|who|where|how|this)'s$/))) return [m[1], 'is'];
    return [w];
  }
  function practiceSay(target, out) {
    if (!SR) { out.innerHTML = `<span class="muted">${IOS ? 'iPhone：撳 🔊 聽，跟住大聲讀。想 AI 聽你發音，去 IELTS → 🎤 口語錄音。' : '呢個瀏覽器唔支援語音辨識，可以撳 🔊 跟住讀。'}</span>`; return; }
    const r = new SR(); r.lang = S.settings.accent; r.interimResults = false; r.maxAlternatives = 3;
    out.innerHTML = '<span class="rec"></span> 聽緊…請讀出嚟';
    r.onresult = e => {
      const tw = norm(target); let best = { sc: 0, txt: '' };
      for (const alt of e.results[0]) {
        const hw = norm(alt.transcript); const pool = hw.slice(); let hit = 0;
        tw.forEach(w => { const k = pool.indexOf(w); if (k >= 0) { hit++; pool.splice(k, 1); } });
        const sc = tw.length ? hit / tw.length : 0; if (sc >= best.sc) best = { sc, txt: alt.transcript };
      }
      const msg = best.sc >= 0.85 ? '👍 好準！' : best.sc >= 0.5 ? '🙂 幾好，再試一次會更好' : '💪 再試多次';
      out.innerHTML = `<b>${msg}</b> <span class="muted">聽到：「${esc(best.txt)}」</span>`;
      logEv({ k: 'say', tx: fill(target).slice(0, 80), sc: Math.round(best.sc * 100) / 100, h: best.txt.slice(0, 80) }); save();
      if (best.sc >= 0.85) confetti(40);
    };
    r.onerror = e => { out.innerHTML = '<span class="muted">聽唔到（' + esc(e.error) + '），請再試／檢查咪高峰權限</span>'; };
    try { r.start(); } catch (e) { out.textContent = '未能開始錄音'; }
  }

  // ===== UI 小工具 =====
  let toastT;
  function toast(msg) { const t = $('#toast'); t.textContent = msg; t.classList.remove('hidden'); t.style.animation = 'none'; void t.offsetWidth; t.style.animation = ''; clearTimeout(toastT); toastT = setTimeout(() => t.classList.add('hidden'), 2600); }
  function openModal(html) { $('#sheet').innerHTML = html; $('#modal').classList.remove('hidden'); }
  function closeModal() { $('#modal').classList.add('hidden'); }
  $('#modal').addEventListener('click', e => { if (e.target.id === 'modal') closeModal(); });
  function ripple(el, e) {
    if (!(el.tagName === 'BUTTON' || el.classList.contains('btn'))) return;
    const r = el.getBoundingClientRect(); const d = Math.max(r.width, r.height);
    const sp = document.createElement('span'); sp.className = 'ripple';
    sp.style.cssText = `width:${d}px;height:${d}px;left:${(e.clientX || r.left + r.width / 2) - r.left - d / 2}px;top:${(e.clientY || r.top + r.height / 2) - r.top - d / 2}px`;
    el.appendChild(sp); setTimeout(() => sp.remove(), 600);
  }
  function confetti(count) {
    const cv = $('#confetti'); const ctx = cv.getContext('2d');
    cv.width = innerWidth; cv.height = innerHeight;
    const cols = ['#12c2b2', '#3b82f6', '#8b5cf6', '#ff6b9a', '#ff9f5a', '#ffd166'];
    const ps = Array.from({ length: count || 140 }, () => ({
      x: innerWidth / 2 + (Math.random() - .5) * 80, y: innerHeight * .35, vx: (Math.random() - .5) * 14, vy: -Math.random() * 14 - 4,
      s: Math.random() * 7 + 4, c: cols[Math.floor(Math.random() * cols.length)], r: Math.random() * 6, vr: (Math.random() - .5) * .3
    }));
    let f = 0;
    (function tick() {
      ctx.clearRect(0, 0, cv.width, cv.height);
      ps.forEach(p => { p.vy += .35; p.vx *= .99; p.x += p.vx; p.y += p.vy; p.r += p.vr; ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r); ctx.fillStyle = p.c; ctx.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2); ctx.restore(); });
      if (++f < 150) requestAnimationFrame(tick); else ctx.clearRect(0, 0, cv.width, cv.height);
    })();
  }
  function ring(val, max) {
    const R = 40, C = 2 * Math.PI * R, p = Math.min(1, max ? val / max : 0);
    return `<svg class="ring" viewBox="0 0 96 96"><circle class="bg" cx="48" cy="48" r="${R}"/><circle class="fg" cx="48" cy="48" r="${R}" stroke-dasharray="${C}" stroke-dashoffset="${C}" data-off="${C * (1 - p)}" transform="rotate(-90 48 48)"/><text x="48" y="55" text-anchor="middle">${Math.round(p * 100)}%</text></svg>`;
  }
  const spk = (text, extra) => `<button class="speak" data-act="speak" data-text="${esc(text)}" aria-label="讀出" ${extra || ''}>🔊</button>`;
  function applyTheme() { const t = S.settings.theme; if (t === 'auto') delete document.documentElement.dataset.theme; else document.documentElement.dataset.theme = t; }
  applyTheme();

  // ===== 計時器 =====
  let TIMER = null;
  function startTimer(sec, label, onDone) {
    stopTimer();
    TIMER = { end: Date.now() + sec * 1000, label, onDone };
    TIMER.iv = setInterval(tickTimer, 250); tickTimer();
  }
  function stopTimer() { if (TIMER) clearInterval(TIMER.iv); TIMER = null; }
  function tickTimer() {
    const el = $('#timerDisp'); if (!TIMER) return;
    const left = Math.max(0, Math.ceil((TIMER.end - Date.now()) / 1000));
    if (el) { el.textContent = Math.floor(left / 60) + ':' + pad(left % 60); el.classList.toggle('low', left <= 10); const lb = $('#timerLabel'); if (lb) lb.textContent = TIMER.label; }
    if (left <= 0) {
      const done = TIMER.onDone; stopTimer(); beep();
      if (navigator.vibrate) navigator.vibrate(300);
      if (done) done(); else toast('⏰ 時間到');
    }
  }
  function beep() { try { const a = new (window.AudioContext || window.webkitAudioContext)(); const o = a.createOscillator(); const g = a.createGain(); o.frequency.value = 880; o.connect(g); g.connect(a.destination); g.gain.setValueAtTime(.2, a.currentTime); g.gain.exponentialRampToValueAtTime(.001, a.currentTime + .6); o.start(); o.stop(a.currentTime + .6); } catch (e) { /* 冇聲都唔緊要 */ } }

  // ===== 口語錄音：一撳開始（錄音 + 計時），講完／時間到自動停，交俾 AI 聽 =====
  let REC = null;
  async function spkStart(secs) {
    if (REC) return;
    if (!navigator.mediaDevices || !window.MediaRecorder) { toast('呢部機唔支援錄音，可以用下面打字／iPhone 鍵盤 🎤'); return; }
    let stream;
    try { stream = await navigator.mediaDevices.getUserMedia({ audio: true }); }
    catch (e) { toast('未能使用咪高峰：請喺設定允許 Safari 用咪高峰'); return; }
    const mr = new MediaRecorder(stream); const chunks = [];
    REC = { mr, stream, t0: Date.now(), discard: false };
    mr.ondataavailable = e => { if (e.data && e.data.size) chunks.push(e.data); };
    mr.onstop = () => {
      stream.getTracks().forEach(t => t.stop());
      const r = REC; REC = null; stopTimer();
      if (!r || r.discard) return;
      const blob = new Blob(chunks, { type: mr.mimeType || 'audio/mp4' }); const dur = (Date.now() - r.t0) / 1000;
      IEL.audio = { url: URL.createObjectURL(blob), blob, dur };
      if (location.hash === '#ielts' && IEL.tab === 'speak') render();
      if (dur < 4) { toast('太短喇，最少講幾句先'); return; }
      aiSpeakAudio();
    };
    mr.start();
    IEL.audio = null;
    startTimer(secs, '🔴 錄緊音…講完撳「講完」', () => spkStop());
    render();
  }
  function spkStop() { if (REC && REC.mr.state === 'recording') REC.mr.stop(); }
  // 句子卡：錄音俾 AI 聽（同 IELTS 口語分開）
  let CREC = null;
  async function cardRecToggle() {
    if (CREC) { if (CREC.mr.state === 'recording') CREC.mr.stop(); return; }
    if (!navigator.mediaDevices || !window.MediaRecorder) { toast('呢部機唔支援錄音'); return; }
    let stream; try { stream = await navigator.mediaDevices.getUserMedia({ audio: true }); } catch (e) { toast('未能使用咪高峰：請喺設定允許 Safari 用咪高峰'); return; }
    stopDictate();
    const mr = new MediaRecorder(stream); const chunks = []; const pos = SES && SES.i;
    CREC = { mr, t0: Date.now(), discard: false };
    mr.ondataavailable = e => { if (e.data && e.data.size) chunks.push(e.data); };
    mr.onstop = async () => {
      stream.getTracks().forEach(t => t.stop()); const r = CREC; CREC = null; clearTimeout(r.cap);
      if (r.discard || !SES || SES.i !== pos) return;
      const dur = (Date.now() - r.t0) / 1000;
      if (dur < 1.5) { toast('太短喇，再講一次'); render(); return; }
      const blob = new Blob(chunks, { type: mr.mimeType || 'audio/mp4' });
      SES.rec = { audio: 1, url: URL.createObjectURL(blob) }; SES.revealed = true; SES.anim = 'flip'; render();
      const c = BY[SES.queue[SES.i]];
      let audio, mime = 'audio/wav';
      try { audio = await toWavB64(blob); } catch (e) { audio = b64(new Uint8Array(await blob.arrayBuffer())); mime = (blob.type || 'audio/mp4').split(';')[0]; }
      runAI('sayAudio', { ctx: c.def, zh: fill(c.zh), model: fill(c.en), audio, mime, dur: Math.round(dur) }, 'aiSayBox', c.id);
    };
    mr.start(); CREC.cap = setTimeout(() => { if (CREC && CREC.mr.state === 'recording') CREC.mr.stop(); }, 30000);
    render();
  }
  function stopCardRec() { if (CREC) { CREC.discard = true; if (CREC.mr.state === 'recording') CREC.mr.stop(); else CREC = null; } }
  function stopRecording() { if (REC) { REC.discard = true; if (REC.mr.state === 'recording') REC.mr.stop(); else REC = null; } }
  // iPhone 錄出嚟係 mp4/aac；轉做 16kHz 單聲道 WAV，Gemini 一定食到，檔案亦細
  async function toWavB64(blob) {
    const AC = window.AudioContext || window.webkitAudioContext; const ac = new AC();
    const buf = await blob.arrayBuffer();
    const audio = await new Promise((res, rej) => { const p = ac.decodeAudioData(buf, res, rej); if (p && p.then) p.then(res, rej); });
    if (ac.close) ac.close();
    const rate = 16000; const len = Math.ceil(audio.duration * rate);
    const off = new (window.OfflineAudioContext || window.webkitOfflineAudioContext)(1, len, rate);
    const src = off.createBufferSource(); src.buffer = audio; src.connect(off.destination); src.start();
    const d = (await off.startRendering()).getChannelData(0);
    const v = new DataView(new ArrayBuffer(44 + d.length * 2));
    const w = (o, str) => { for (let i = 0; i < str.length; i++) v.setUint8(o + i, str.charCodeAt(i)); };
    w(0, 'RIFF'); v.setUint32(4, 36 + d.length * 2, true); w(8, 'WAVE'); w(12, 'fmt '); v.setUint32(16, 16, true); v.setUint16(20, 1, true); v.setUint16(22, 1, true);
    v.setUint32(24, rate, true); v.setUint32(28, rate * 2, true); v.setUint16(32, 2, true); v.setUint16(34, 16, true); w(36, 'data'); v.setUint32(40, d.length * 2, true);
    for (let i = 0; i < d.length; i++) { const x = Math.max(-1, Math.min(1, d[i])); v.setInt16(44 + i * 2, x < 0 ? x * 0x8000 : x * 0x7FFF, true); }
    return b64(new Uint8Array(v.buffer));
  }
  function b64(bytes) { let s = ''; for (let i = 0; i < bytes.length; i += 0x8000) s += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000)); return btoa(s); }
  async function aiSpeakAudio() {
    const box = $('#aiSpkBox'); if (!IEL.audio) return;
    if (!aiReady()) { if (box) box.innerHTML = `<div class="note">🤖 要 AI 聽你講同評分，先去 <a href="#settings">設定 → AI 評分</a> 貼上 AI key。而家可以撳上面 ▶️ 聽返自己。</div>`; return; }
    if (box) box.innerHTML = '<div class="card center small">🎧 準備錄音檔…</div>';
    let audio, mime = 'audio/wav';
    try { audio = await toWavB64(IEL.audio.blob); }
    catch (e) { audio = b64(new Uint8Array(await IEL.audio.blob.arrayBuffer())); mime = (IEL.audio.blob.type || 'audio/mp4').split(';')[0]; }
    const list = NE.ielts.speaking[IEL.part]; const it = list[(IEL.idx[IEL.part] || 0) % list.length];
    const q = IEL.part === 2 ? it.q + ' You should say: ' + it.b.join(', ') : it;
    runAI('speakAudio', { part: IEL.part, q, audio, mime, dur: Math.round(IEL.audio.dur) }, 'aiSpkBox', 'p' + IEL.part + ':' + (IEL.part === 2 ? it.q : it).slice(0, 60));
  }

  // ===== 🎙️ AI 模擬口試官：Part 1 → 2 → 3，AI 讀題、聽答案、追問，最後出報告 =====
  let MOCK = null, MREC = null;
  const pickN = (xs, n) => xs.slice().sort(() => Math.random() - .5).slice(0, n);
  function mockStart() {
    if (!aiReady() || aiProv() !== 'qwen') return toast('模擬口試要先喺設定揀「阿里雲 Qwen」同貼 key');
    const sp = NE.ielts.speaking; const cue = pickN(sp['2'], 1)[0];
    MOCK = { stage: 'q', qs: pickN(sp['1'], 4).map(q => ({ part: 1, q })).concat([{ part: 2, q: cue.q, b: cue.b }]), i: 0, p3: 0, cue, busy: '', err: '' };
    location.hash = '#mock'; render(); setTimeout(mockSay, 400);
  }
  const mockCur = () => MOCK && MOCK.qs[MOCK.i];
  function mockSay() { const c = mockCur(); if (!c) return; speak(c.part === 2 ? 'Now I am going to give you a topic. You have one minute to prepare. ' + c.q : c.q, null, 0.9); }
  async function mockRec() {
    if (MREC) { if (MREC.mr.state === 'recording') MREC.mr.stop(); return; }
    if (!navigator.mediaDevices || !window.MediaRecorder) return toast('呢部機唔支援錄音');
    let stream; try { stream = await navigator.mediaDevices.getUserMedia({ audio: true }); } catch (e) { return toast('未能使用咪高峰：請喺設定允許用咪高峰'); }
    if (window.speechSynthesis) speechSynthesis.cancel(); stopTimer();
    const mr = new MediaRecorder(stream); const chunks = []; const c = mockCur(); const max = c.part === 2 ? 120 : 60;
    MREC = { mr, t0: Date.now() };
    mr.ondataavailable = e => { if (e.data && e.data.size) chunks.push(e.data); };
    mr.onstop = async () => {
      stream.getTracks().forEach(t => t.stop()); const r = MREC; MREC = null; stopTimer();
      if (!MOCK || r.discard) return;
      const dur = Math.round((Date.now() - r.t0) / 1000);
      if (dur < 3) { toast('太短喇，再答一次'); render(); return; }
      const blob = new Blob(chunks, { type: mr.mimeType || 'audio/mp4' });
      MOCK.busy = '🎧 考官聽緊你講…'; render(); progStart('mockG', 'say');
      try {
        let audio, mime = 'audio/wav';
        try { audio = await toWavB64(blob); } catch (e) { audio = b64(new Uint8Array(await blob.arrayBuffer())); mime = (blob.type || 'audio/mp4').split(';')[0]; }
        const text = await qwenAsr({ mime, data: audio }, 40000);
        if (!text) throw new Error('聽唔到你講嘢，近啲咪高峰再答一次');
        c.a = text; c.dur = dur; c.wpm = Math.round(text.split(/\s+/).length / dur * 60); MOCK.err = '';
        await mockNext();
      } catch (e) { if (MOCK) MOCK.err = e.message; }
      progStop(); if (!MOCK) return; MOCK.busy = ''; render();
      if (MOCK && MOCK.stage === 'q' && !MOCK.err) setTimeout(mockSay, 300);
    };
    mr.start(); startTimer(max, c.part === 2 ? '🔴 講夠 1–2 分鐘' : '🔴 答完撳「答完」', () => { if (MREC && MREC.mr.state === 'recording') MREC.mr.stop(); });
    render();
  }
  async function mockNext() {
    const c = mockCur();
    if (c.part === 3) MOCK.p3++;
    if (MOCK.i + 1 < MOCK.qs.length) { MOCK.i++; return; }
    if (c.part === 2 || (c.part === 3 && MOCK.p3 < 4)) {
      MOCK.busy = '🤔 考官諗緊下一條問題…'; render(); progStart('mockG', 'say');
      const hist = MOCK.qs.filter(x => x.part >= 2).map(x => 'Q: ' + x.q + '\nA: ' + x.a).join('\n');
      const r = await aiCall(`You are an IELTS Speaking examiner running Part 3 (two-way discussion). The Part 2 topic was: "${MOCK.cue.q}".
Conversation so far:
${hist}
Ask ONE natural Part 3 question: a more abstract, general question about society linked to the topic. If her last answer was short or vague, ask a follow-up that pushes her to explain, compare or give reasons. Do not repeat earlier questions. Reply with JSON only: {"question": "..."}`, 'say');
      MOCK.qs.push({ part: 3, q: String(r.question || 'Why do you think that is?') }); MOCK.i++; return;
    }
    MOCK.stage = 'scoring'; render(); await mockScore();
  }
  async function mockScore() {
    const all = MOCK.qs.map(x => `[Part ${x.part}] Q: ${x.q}${x.b ? ' (You should say: ' + x.b.join('; ') + ')' : ''}\nA (${x.dur}s, ${x.wpm} words/min): ${x.a}`).join('\n\n');
    const prompt = `${AI_ROLE}
This is a full IELTS Speaking mock test (Part 1, 2 and 3). Answers are speech-recognition transcripts with duration and speaking rate (normal fluent speech is about 120–160 words per minute; very short answers or long Part 2 under 60 seconds limit Fluency). You cannot hear her, so estimate Pronunciation conservatively from recognition errors and speaking rate, and say so in that criterion's evidence.
${STRICT}
${NE.rubricText('speaking')}
TEST:
${all}
Return JSON: {"band": overall band = average of the 4 criteria rounded to nearest 0.5, ${REPORT_JSON(['Fluency and Coherence', 'Lexical Resource', 'Grammatical Range and Accuracy', 'Pronunciation'])}, "summary": "2-3 sentences in Chinese", "corrections": [{"wrong": "exact words she said", "right": "better English", "why": "Chinese"} max 8], "better": "a band-7 model answer to her Part 2 topic in English, about 180 words, using her ideas"}`;
    setTimeout(() => progStart('mockS', 'essay'), 50);
    try {
      const res = await aiCall(prompt, 'essay').finally(progStop);
      const rid = 'r' + Date.now(); const q = 'Part 2: ' + MOCK.cue.q;
      S.reports.push({ id: rid, t: Date.now(), kind: 'mock', task: null, part: null, q, input: MOCK.qs.map(x => `[P${x.part}] ${x.q}\n→ ${x.a}`).join('\n\n').slice(0, 6000), dur: MOCK.qs.reduce((a, x) => a + (x.dur || 0), 0), res });
      logEv({ k: 'ai', kind: 'mock', ref: 'mock', band: typeof res.band === 'number' ? res.band : null, score: null, input: q, res });
      logToday().ex += 8; save(); checkGoal();
      MOCK = null; location.hash = '#report/' + rid;
      if ((res.band || 0) >= 6.5) confetti(80);
    } catch (e) { MOCK.stage = 'q'; MOCK.err = '評分失敗：' + e.message + '（撳「再評分」）'; MOCK.retry = true; render(); }
  }
  function mockView() {
    if (!MOCK) return `<div class="row" style="flex-wrap:nowrap"><a class="btn icon-btn" href="#ielts">‹</a><h1 class="grow">🎙️ AI 模擬口試</h1></div>
      <div class="card"><p>好似真 IELTS 口試咁：AI 考官讀出問題，你錄音回答。</p>
        <ul class="small" style="margin:6px 0 10px 18px"><li><b>Part 1</b>：4 條日常問題（每條答 20–30 秒）</li><li><b>Part 2</b>：題目卡，1 分鐘準備，講 1–2 分鐘</li><li><b>Part 3</b>：考官根據你講嘅內容追問 4 條深入問題</li></ul>
        <p class="small muted">全程大約 12–15 分鐘，要安靜地方。完成後會出完整報告（跟官方評分準則），自動儲存。用大約 9–10 次 AI。</p>
        <button class="btn-primary btn-big btn-block" data-act="mockStart">開始模擬口試 →</button></div>`;
    if (MOCK.stage === 'scoring') return `<div class="card center" style="padding:24px"><div style="font-size:48px">📝</div><h2>考官評分中…</h2><p class="small muted">大約 20–40 秒，唔好離開呢頁</p></div>${progHtml('mockS', '📝 寫緊完整報告')}`;
    const c = mockCur(); const total = MOCK.qs.filter(x => x.part === 1).length + 1 + 4; const n = MOCK.i + 1;
    const recording = !!MREC;
    return `<div class="row" style="flex-wrap:nowrap;margin-bottom:10px"><button class="icon-btn" data-act="mockQuit">✕</button><div class="progress grow"><div style="width:${(n - 1) / total * 100}%"></div></div><span class="small muted">${n}/${total}</span></div>
      <div class="card" style="border-top:6px solid #8b5cf6"><span class="pill">Part ${c.part}</span>
        <div class="row" style="align-items:flex-start;margin-top:8px"><div class="grow" style="font-size:19px;font-weight:700">${esc(c.q)}</div><button class="speak" data-act="mockSay">🔊</button></div>
        ${c.b ? `<div class="small" style="margin-top:6px">You should say:<ul style="margin:4px 0 0 18px">${c.b.map(x => `<li>${esc(x)}</li>`).join('')}</ul></div>` : ''}
      </div>
      <div class="card center"><div id="timerLabel" class="small muted">${recording ? '' : c.part === 2 ? '先準備 1 分鐘（可以略過），之後撳開始講' : '聽完問題就撳開始答'}</div><div id="timerDisp" class="score" style="font-size:40px">${recording ? '' : '–'}</div>
        ${MOCK.busy ? progHtml('mockG', MOCK.busy) : MOCK.retry ? `<button class="btn-primary btn-block" data-act="mockRescore">再評分</button>` : `
          ${c.part === 2 && !recording && !MOCK.prep ? `<button class="btn-ghost btn-block" data-act="mockPrep">⏱️ 開始 1 分鐘準備</button>` : ''}
          <button class="btn-primary btn-big btn-block" style="margin-top:8px${recording ? ';background:var(--bad)' : ''}" data-act="mockRec">${recording ? '⏹️ 答完' : '🔴 開始答'}</button>`}
        ${MOCK.err ? `<div class="fb no" style="margin-top:8px">${esc(MOCK.err)}</div>` : ''}</div>
      ${MOCK.qs.slice(0, MOCK.i).filter(x => x.a).length ? `<details class="subj"><summary class="small">之前答咗嘅（${MOCK.qs.slice(0, MOCK.i).length}）</summary>${MOCK.qs.slice(0, MOCK.i).map(x => `<p class="small"><b>${esc(x.q)}</b><br><span class="muted">${esc(x.a || '')}</span></p>`).join('')}</details>` : ''}`;
  }

  // ===== 學習 session =====
  let SES = null;
  function startSession(opts) {
    const q = buildQueue(opts || {});
    if (!q.length) { toast(opts && opts.deck ? '呢個字庫暫時冇卡要學 🎉' : '暫時冇卡要溫 🎉'); return; }
    SES = { queue: q, i: 0, revealed: false, showZh: false, hint: false, seen: new Set(), good: 0, again: 0, anim: 'enter', track: (opts && opts.track) || (opts && opts.deck ? trackOfDeck(opts.deck) : 'nurse') };
    location.hash = '#study';
  }
  function grade(g) {
    stopCardRec();
    const id = SES.queue[SES.i]; const prev = S.cards[id];
    S.cards[id] = nextState(prev, g);
    logEv({ k: 'study', id, g, nw: prev ? 0 : 1, ms: Date.now() - (SES.shownAt || Date.now()) });
    const L = logToday();
    if (!SES.seen.has(id)) { SES.seen.add(id); if (!prev) { L.n++; if (trackOf(BY[id]) === 'ielts') L.ni = (L.ni || 0) + 1; } else L.r++; }
    if (g === 0) { SES.again++; SES.queue.splice(Math.min(SES.i + 4, SES.queue.length), 0, id); } else SES.good++;
    SES.i++; SES.revealed = false; SES.showZh = false; SES.hint = false; SES.rec = null; SES.typed = ''; SES.ch = null; SES.anim = 'enter';
    save(); checkGoal(); render();
  }

  // ===== 畫面 =====
  const V = {};

  // ===== 🔔 更新通知 =====
  const hasNewUpdate = () => !!(NE.updates && NE.updates.length && NE.updates[0].id !== S.settings.seenUpdate);
  function showUpdates() {
    const U = NE.updates || [];
    openModal(`<div class="row between"><h2 style="margin:0">🔔 App 更新</h2><button class="icon-btn" data-act="closeModal">✕</button></div>
      ${U.map((u, i) => `<div class="card tight" style="margin-top:10px;${i === 0 ? 'border-left:5px solid var(--accent)' : ''}"><div class="row between"><b>${esc(u.title)}</b><span class="small muted">${esc(u.id)}</span></div>
        ${u.items.map(x => `<p class="small" style="margin:6px 0">• ${esc(x)}</p>`).join('')}</div>`).join('')}
      <p class="small muted">有咩想改，用首頁「💌 意見箱」話俾 Ben 知。</p>
      <button class="btn-primary btn-block" data-act="closeModal">知道喇 👍</button>`);
    if (U.length) { S.settings.seenUpdate = U[0].id; save(); }
  }
  let updPopped = false;
  function trackCard(t, c) {
    const T = TRACKS[t]; const left = c.d + c.n;
    const head = `<div class="row between"><h2 style="margin:0">${T.icon} ${T.name}</h2><span class="small muted">溫習 ${c.d} · 新字 ${c.n}</span></div>`;
    const start = left > 0
      ? `<button class="btn-primary btn-block ${t === 'nurse' ? 'pulse' : ''}" style="margin-top:10px" data-act="startToday" data-track="${t}">開始${T.name}字卡（${left} 張）→</button>`
      : `<div class="row" style="margin-top:10px"><div class="grow small"><b>今日${T.name}字卡完成 ✨</b></div><button class="btn-ghost" data-act="extraNew" data-track="${t}">+5 新字</button></div>`;
    if (t === 'nurse') return `<div class="card" style="border-left:5px solid #12a39a">${head}
      <p class="small muted" style="margin:4px 0 0">工作用：醫護字、病房句子、同同事溝通${S.settings.advFirst ? ' · 先學進階字' : ''}</p>${start}
      <div class="row" style="margin-top:8px"><button class="chip" data-act="quiz" data-kind="learned" data-track="nurse">✏️ 測驗</button><button class="chip" data-act="quiz" data-kind="weak" data-track="nurse">🎯 弱項</button><button class="chip" data-act="quiz" data-kind="spell" data-track="nurse">⌨️ 串字</button><a class="chip btn" href="#library">📚 字庫</a></div></div>`;
    return `<div class="card" style="border-left:5px solid #3b82f6">${head}
      <p class="small muted" style="margin:4px 0 0">考試用：IELTS 字彙、口語、寫作、閱讀、聽力</p>${start}
      ${examCard(true)}</div>`;
  }
  V.home = () => {
    const L = logToday(), act = activity(L), goal = S.settings.dailyGoal;
    const tc = t => { const d = dueCount(null, t), n = newIdsFor(t, newLeftToday(t)).length; return { d, n }; };
    const TN = tc('nurse'), TI = tc('ielts');
    const h = new Date().getHours();
    const greet = h < 12 ? '早晨' : h < 18 ? '午安' : '晚安';
    const wd = ['日', '一', '二', '三', '四', '五', '六'][new Date().getDay()];
    const q = QUOTES[hashStr(today() + 'q') % QUOTES.length];
    const pool = ALL.filter(c => ['medical', 'ielts'].includes(deckOf(c).cat) && !deckOf(c).say && !deckOf(c).abbr && !deckOf(c).roots);
    const unseen = pool.filter(c => !S.cards[c.id]);
    const src = unseen.length ? unseen : pool;
    const w = src[hashStr(today()) % src.length];
    const st = streak();
    const standalone = matchMedia('(display-mode: standalone)').matches || navigator.standalone;
    return `
    <div class="hello">
      <div><div class="muted small">${new Date().getMonth() + 1}月${new Date().getDate()}日 星期${wd}</div>
      <h1>${greet}${S.settings.name ? '，' + esc(S.settings.name) : ''} 👋</h1>
      <a href="#settings" class="pill" style="text-decoration:none;${syncReady() && !SY.lastError ? '' : 'background:rgba(239,90,90,.14);color:var(--bad)'}">${esc(syncReady() ? syncStatusText() : '☁️ 未連接同步：撳呢度設定')}</a></div>
      <div class="row" style="flex-wrap:nowrap;gap:8px"><button class="icon-btn" data-act="showUpdates" aria-label="更新通知" style="position:relative">🔔${hasNewUpdate() ? '<span style="position:absolute;top:4px;right:4px;width:10px;height:10px;border-radius:50%;background:var(--bad);box-shadow:0 0 0 2px var(--surface)"></span>' : ''}</button><a class="btn icon-btn" href="#help" aria-label="使用說明">❓</a><a class="btn icon-btn" href="#settings" aria-label="設定">⚙️</a></div>
    </div>
    ${!S.settings.seenHelp ? `<div class="card tight" style="border-left:5px solid var(--accent)"><b>👋 第一次用？</b><p class="small">睇 1 分鐘使用說明，知道每日做咩、點樣用。</p>
      <div class="row"><a class="btn btn-accent" href="#help">📖 睇使用說明</a><button class="btn-ghost" data-act="hideWelcome">唔使喇</button></div></div>` : ''}
    <div class="card hero">
      <div class="goal">
        ${ring(act, goal)}
        <div class="grow">
          <div class="streak"><span class="flame">🔥</span> ${st} 日連續</div>
          <div class="muted small">今日進度 ${act} / ${goal}　${L.goalHit ? '✅ 已達標' : ''}</div>
          <div class="muted small">🩺 護理 ${TN.d + TN.n} 張 · 🎓 IELTS ${TI.d + TI.n} 張</div>
        </div>
      </div>
    </div>
    ${trackCard('nurse', TN)}
    ${trackCard('ielts', TI)}
    ${w ? `<div class="card wotd">
      <div class="row between"><span class="pill" style="background:var(--grad-warm);color:#fff">📅 今日一字</span><span class="small muted">${esc(deckOf(w).icon)} ${esc(deckOf(w).zh)}</span></div>
      <div class="row" style="margin-top:8px"><div class="grow"><div style="font-size:24px;font-weight:800">${esc(w.en)}</div><div style="color:${color(w.d)};font-weight:700">${esc(w.zh)}</div></div>${spk(speakText(w))}</div>
      <p class="small">${esc(w.def)}</p>
      ${w.ex ? `<div class="ex small">${esc(w.ex)}<div class="zhline">${esc(w.exZh)}</div></div>` : ''}
      ${!S.cards[w.id] ? `<button class="btn-ghost btn-block" style="margin-top:10px" data-act="learnOne" data-id="${esc(w.id)}">➕ 而家學呢個字</button>` : ''}
    </div>` : ''}
    <div class="grid4">
      <button class="action" data-act="quiz" data-kind="learned"><span class="ico c-blue">✏️</span>快速測驗</button>
      <button class="action" data-act="quiz" data-kind="weak"><span class="ico c-pink">🎯</span>弱項特訓</button>
      <a class="btn action" href="#ielts"><span class="ico c-purple">🎤</span>IELTS</a>
      <button class="action" data-act="addWord"><span class="ico c-orange">＋</span>加生字</button>
    </div>
    <div style="height:12px"></div>
    ${coachCard()}
    <a class="card tight deckrow" href="#feedback" style="color:inherit;text-decoration:none;--dc-soft:rgba(255,107,154,.16)"><div class="ic">💌</div>
      <div class="grow"><b>意見箱</b><div class="small muted">有咩想改、唔明、錯字，寫低俾 Ben${Object.keys((NE.coach || {}).replies || {}).some(id => S.feedback.some(f => f.id === id)) ? ' · 有回覆 💬' : ''}</div></div><span>›</span></a>
    <div class="card quote">
      <div class="small muted">💌 今日鼓勵</div>
      <p style="font-weight:700;margin-top:4px">${esc(q[0])}</p><p class="small muted">${esc(q[1])}</p>
    </div>
    ${!standalone && !S.settings.hideInstall ? `<div class="card tight small">
      📲 <b>加到主畫面</b>：iPhone 用 Safari 撳「分享」→「加至主畫面」，用起嚟似 app，學習記錄亦唔會被清走。
      <button class="btn-ghost" style="min-height:32px;padding:4px 10px;margin-top:6px" data-act="hideInstall">知道了</button></div>` : ''}`;
  };

  V.study = () => {
    if (!SES) { setTimeout(() => { location.hash = '#home'; }); return ''; }
    if (SES.i >= SES.queue.length) return studyDone();
    const c = BY[SES.queue[SES.i]]; const dk = deckOf(c); const dc = color(c.d);
    if (SES.curPos !== SES.i) { SES.curPos = SES.i; SES.shownAt = Date.now(); }
    const showZh = S.settings.zhMode === 'always' || SES.showZh;
    const p = SES.i / SES.queue.length * 100;
    const prev = S.cards[c.id];
    const isNew = !prev;
    let front, back = '';
    const recallBox = SES.revealed ? '' : `<div class="row" style="flex-wrap:nowrap;margin-top:4px"><input id="recallIn" value="${esc(SES.typed || '')}" autocomplete="off" autocapitalize="${dk.say ? 'sentences' : 'none'}" placeholder="${dk.say ? '🎤 講出嚟或者打英文…' : '打中文意思（可選）'}">
      <button class="speak" data-act="dictate" data-target="recallIn" data-lang="${dk.say ? 'en' : 'zh'}" aria-label="講">🎤</button></div>
      <div class="small muted">${dk.say ? '先自己講／打，再對答案，會有分數' : '答咗先揭，會幫你對答案'}</div>
      ${dk.say && aiReady() ? (CREC ? `<button class="btn-accent btn-block" style="margin-top:8px" data-act="sayRec"><span class="rec"></span> 講完，交俾 AI 聽</button>`
        : `<button class="btn-ghost btn-block" style="margin-top:8px" data-act="sayRec">🎙️ 錄音俾 AI 聽（評讀音同意思）</button>`) : ''}`;
    // 字卡：4 揀 1 中文意思（唔使打字、唔使 AI）
    if (!dk.say && (!SES.ch || SES.ch.pos !== SES.i)) SES.ch = { pos: SES.i, ids: makeChoices(c, 'mcZh') };
    const mcBox = dk.say ? '' : `<div class="small muted" style="margin-top:4px">${SES.revealed ? '' : '揀啱嘅中文意思：'}</div><div class="choices">${SES.ch.ids.map(id => {
      let cls = ''; if (SES.revealed) { if (id === c.id) cls = 'right'; else if (SES.rec && id === SES.rec.picked) cls = 'wrong'; }
      return `<button class="${cls}" data-act="recPick" data-id="${esc(id)}" ${SES.revealed ? 'disabled' : ''}>${esc(BY[id].zh)}</button>`;
    }).join('')}</div>`;
    let recallRes = '';
    if (SES.revealed && SES.rec && SES.rec.audio) {
      recallRes = `${SES.rec.url ? `<audio controls src="${SES.rec.url}" style="width:100%"></audio>` : ''}<div id="aiSayBox"></div>`;
    } else if (SES.revealed && SES.rec && SES.rec.mc) {
      recallRes = `<div class="fb ${SES.rec.ok ? 'ok' : 'no'} small"><b>${SES.rec.ok ? '✅ 啱！' : '❌ 唔啱，記住正確答案'}</b>${SES.rec.ok ? '' : '　建議揀「唔記得」'}</div>`;
    } else if (SES.revealed && SES.rec) {
      const R = SES.rec;
      recallRes = R.m
        ? `<div class="fb ${R.sc >= .85 ? 'ok' : 'no'} small"><b>你講：</b>${esc(R.v)}<br><b>${Math.round(R.sc * 100)}%</b>　${R.m.words.map((w, i) => `<span style="${R.m.near && R.m.near.has(i) ? 'color:var(--warn)' : R.m.hit.has(i) ? 'color:var(--good)' : 'color:var(--bad);text-decoration:underline;font-weight:800'}">${esc(w)}</span>`).join(' ')}
           ${R.m.near && R.m.near.size ? '<div class="small muted" style="margin-top:4px">🟡 黃色 = 語音辨識聽成另一個字，但讀音好似，當你啱</div>' : ''}
           ${R.sc >= .95 ? '<div style="margin-top:6px"><b>✅ 完全正確！</b></div></div>' : `<div class="row" style="margin-top:6px"><button class="chip" data-act="aiSay" data-id="${esc(c.id)}">🤖 我講法唔同，問 AI 啱唔啱</button></div></div><div id="aiSayBox"></div>`}`
        : `<div class="fb ${R.sc >= .6 ? 'ok' : 'no'} small"><b>你答：</b>${esc(R.v)}　→　${R.sc >= .6 ? '✅ 接近' : '🤔 再睇清楚'}（${Math.round(R.sc * 100)}%）</div>`;
    }
    if (dk.say) {
      front = `<div class="small muted">試下用英文講：</div><div class="term sentence">${esc(fill(c.zh))}</div><div class="small muted">情境：${esc(c.def)}</div>${recallBox}`;
      if (SES.revealed) back = `<div class="fade-in"><div class="row" style="align-items:flex-start"><div class="term sentence grow" style="color:${dc}">${esc(fill(c.en))}</div>${spk(speakText(c))}</div></div>`;
    } else {
      front = `<div class="row" style="align-items:flex-start"><div class="term grow">${esc(c.en)}</div>${spk(speakText(c))}</div>
        ${dk.abbr ? '<div class="small muted">呢個縮寫代表咩？</div>' : dk.roots ? '<div class="small muted">呢個字根／字首字尾係咩意思？</div>' : ''}
        ${mcBox}`;
      if (SES.revealed) back = `<div class="fade-in" style="display:flex;flex-direction:column;gap:10px">
        <div class="def"><b>${esc(c.def)}</b></div>
        ${c.ex ? `<div class="ex"><div class="row" style="align-items:flex-start;flex-wrap:nowrap"><div class="grow">${esc(c.ex)}</div>${dk.roots ? '' : spk(c.ex)}</div>${c.exZh ? `<div class="zhline">${esc(c.exZh)}</div>` : ''}</div>` : ''}
      </div>`;
    }
    const extra = SES.revealed ? `
      ${recallRes}
      ${c.note ? `<div class="note">💬 ${esc(fill(c.note))}</div>` : ''}
      <div class="row small">
        <button class="chip" data-act="star" data-id="${esc(c.id)}">${S.stars[c.id] ? '⭐ 已收藏' : '☆ 收藏'}</button>
        ${!dk.roots ? `<button class="chip" data-act="say" data-text="${esc(speakText(c))}">🎤 跟讀</button>` : ''}
        <a class="chip btn" href="${esc(dictUrl(dk.roots ? speakText(c) : c.en))}" target="_blank" rel="noopener">🔎 字典</a>
        <button class="chip" data-act="openFb" data-ctx="${esc(c.id)}">💌 意見</button>
      </div>
      <div id="sayOut" class="heard"></div>
      ${sentHtml(c, dk, isNew)}` : '';
    const grades = SES.revealed ? `<div class="grades">
      ${[['唔記得', 0], ['難', 1], ['記得', 2], ['好易', 3]].map(([t, g]) => `<button class="g${g}" data-act="grade" data-g="${g}">${t}<small>${ivLabel(nextState(prev, g).i)}</small></button>`).join('')}
      </div>` : dk.say ? `<button class="btn-primary btn-big btn-block" data-act="reveal">睇答案 👀</button>`
        : `<button class="btn-ghost btn-block" data-act="reveal">唔識，直接睇答案 👀</button>`;
    const anim = SES.anim; SES.anim = '';
    return `
    <div class="row" style="flex-wrap:nowrap;margin-bottom:12px">
      <button class="icon-btn" data-act="exitStudy" aria-label="離開">✕</button>
      <div class="progress grow"><div style="width:${p}%"></div></div>
      <span class="small muted">${SES.i + 1}/${SES.queue.length}</span>
    </div>
    <div class="card flash ${anim}" style="--dc:${dc}">
      <div class="row between"><span class="deck-tag">${esc(dk.icon)} ${esc(dk.zh)}</span>${isNew ? '<span class="pill new">新字</span>' : `<span class="pill">溫習</span>`}</div>
      ${front}${back}${extra}
    </div>
    ${grades}
    ${SES.revealed ? '<p class="small muted center">誠實揀：唔記得嘅字今日會再出現，記得嘅會隔幾日再溫</p>' : ''}`;
  };
  function sentHtml(c, dk, isNew) {
    if (dk.say || dk.roots || dk.abbr || !aiReady()) return '';
    if (SES.sentSkip === c.id) return '';
    const open = SES.sentFor === c.id || (isNew && S.settings.sentPrompt !== false);
    if (!open) return `<button class="chip" data-act="sentOpen" data-id="${esc(c.id)}">✍️ 用呢個字造句（AI 改）</button>`;
    return `<div class="card tight" style="margin:0"><div class="row between"><b>✍️ 用「${esc(c.en)}」造一句</b><button class="chip" data-act="sentSkip" data-id="${esc(c.id)}">略過</button></div>
      ${SES.sentRes && SES.sentResFor === c.id ? '' : `<textarea id="sentIn" rows="2" placeholder="例如工作上會講嘅一句…" style="margin-top:6px"></textarea>
      <button class="btn-primary btn-block" style="margin-top:6px" data-act="sentGo" data-id="${esc(c.id)}">🤖 AI 幫我改</button>`}
      <div id="aiSentBox">${SES.sentRes && SES.sentResFor === c.id ? aiResultHtml(SES.sentRes, '') : ''}</div></div>`;
  }
  function studyDone() {
    setTimeout(() => confetti(), 200);
    const n = SES.seen.size;
    return `<div class="card hero center" style="padding:28px 16px">
      <div style="font-size:54px">🎉</div><h1>做得好！</h1>
      <p class="muted">今次學咗／溫咗 ${n} 張卡</p>
      <div class="grid3" style="margin-top:14px">
        <div><div style="font-size:26px;font-weight:800">${SES.good}</div><div class="small muted">記得</div></div>
        <div><div style="font-size:26px;font-weight:800">${SES.again}</div><div class="small muted">要再溫</div></div>
        <div><div style="font-size:26px;font-weight:800">${streak()}</div><div class="small muted">連續日數</div></div>
      </div></div>
      <div class="grid2"><button class="btn-primary" data-act="extraNew" data-track="${SES.track}">再學 5 個新字</button>
      <button class="btn-accent" data-act="quiz" data-kind="learned" data-track="${SES.track}">做個小測驗</button></div>
      <a class="btn btn-ghost btn-block" style="margin-top:10px" href="#home">返首頁</a>`;
  }

  // ===== 字庫 =====
  V.library = () => {
    const q = (V._libq || '').trim().toLowerCase();
    let res = '';
    if (q) {
      const hits = ALL.filter(c => (fill(c.en) + ' ' + c.zh + ' ' + c.def).toLowerCase().includes(q)).slice(0, 60);
      res = `<div class="card"><div class="small muted">搵到 ${hits.length} 個</div>${cardList(hits)}</div>`;
    }
    const subj = (NE.subjects || []).map(([g, title]) => {
      const ds = DECKS.filter(d => d.grp === g); if (!ds.length) return '';
      const n = ALL.filter(c => ds.some(d => d.id === c.d)).length; const also = subjAlso(g);
      const alsoRow = also.length ? `<div class="card tight deckrow" data-act="openSubjAlso" data-grp="${g}"><div class="ic">📎</div><div class="grow"><b>其他字庫相關字</b><div class="small muted">${also.length} 個（喺基本／進階字庫學）</div></div><span>›</span></div>` : '';
      return `<details class="subj"><summary><b>${title}</b> <span class="small muted">${ds.length} 個字庫 · ${n + also.length} 張</span></summary>${ds.map(deckRow).join('')}${alsoRow}</details>`;
    }).join('');
    const groups = (subj ? `<h2>📖 按科目</h2>${subj}` : '') + CATS.filter(([cat]) => TRACKS.nurse.cats.includes(cat)).map(([cat, title]) => {
      const ds = DECKS.filter(d => d.cat === cat && !d.grp);
      return ds.length ? `<h2>${title}</h2>` + ds.map(deckRow).join('') : '';
    }).join('');
    const starred = ALL.filter(c => S.stars[c.id]);
    const nq = [['learned', '⚡', '已學快測'], ['weak', '🎯', '弱項特訓'], ['spell', '⌨️', '串字'], ['listen', '🎧', '聽力'], ['abbr', '🔤', '縮寫挑戰'], ['all', '🎲', '全部隨機']];
    return `<div class="row between"><h1>🩺 護理英文</h1><button class="btn-accent" data-act="addWord">＋ 加生字</button></div>
      <p class="small muted">工作用嘅醫護英文。IELTS 字彙喺「🎓 IELTS → 字彙」。</p>
      <button class="btn-primary btn-block" data-act="startToday" data-track="nurse">開始護理字卡（溫習 ${dueCount(null, 'nurse')} · 新字 ${newIdsFor('nurse', newLeftToday('nurse')).length}）→</button>
      <h2>✏️ 測驗</h2><p class="small muted">答錯嘅字會自動加入溫習，仲要照住打 2 次。</p>
      <div class="grid3" style="gap:8px">${nq.map(([k, ic, t]) => `<button class="btn-ghost" style="flex-direction:column;min-height:64px;font-size:13px" data-act="quiz" data-kind="${k}" data-track="nurse"><span style="font-size:20px">${ic}</span>${t}</button>`).join('')}</div>
      <h2>📚 字庫</h2>
      <input id="libSearch" type="search" placeholder="搵字（英文／中文）" value="${esc(V._libq || '')}" style="margin:10px 0">
      <div id="libRes">${res}</div>
      ${starred.length ? `<div class="card tight deckrow" data-act="openStarred" style="--dc-soft:rgba(255,193,7,.2)"><div class="ic">⭐</div><div class="grow"><b>收藏</b><div class="small muted">${starred.length} 個</div></div><span>›</span></div>` : ''}
      ${groups}`;
  };
  function subjAlso(g) { const ids = new Set(((NE.subjAlso || {})[g] || []).concat((NE.ieltsAlso || {})[g] || [])); return ALL.filter(c => ids.has(c.id)); }
  function deckRow(d) {
    const cs = ALL.filter(c => c.d === d.id);
    const seen = cs.filter(c => S.cards[c.id]).length, mast = cs.filter(c => S.cards[c.id] && S.cards[c.id].i >= 21).length;
    const tot = cs.length || 1; const dc = color(d.id);
    return `<a class="card tight deckrow" href="#deck/${encodeURIComponent(d.id)}" style="color:inherit;text-decoration:none;--dc:${dc};--dc-soft:${dc}22">
      <div class="ic">${esc(d.icon)}</div>
      <div class="grow"><div class="row between"><b>${esc(d.zh)}</b><span class="small muted">${seen}/${cs.length}</span></div>
      <div class="small muted">${esc(d.name)}</div>
      <div class="bar"><div class="m" style="width:${mast / tot * 100}%"></div><div class="s" style="width:${(seen - mast) / tot * 100}%"></div></div></div></a>`;
  }
  function cardList(cs) {
    if (!cs.length) return '<p class="muted small">未有內容</p>';
    return `<ul class="list">${cs.map(c => { const [k, t] = stateOf(c.id); return `<li data-act="detail" data-id="${esc(c.id)}">
      <div class="grow"><div class="en">${esc(fill(c.en))}</div><div class="small muted">${esc(fill(c.zh))}</div></div>
      ${S.stars[c.id] ? '⭐' : ''}<span class="pill ${k}">${t}</span></li>`; }).join('')}</ul>`;
  }
  V.deck = (id) => {
    const d = DECKMAP[id]; if (!d) return '<p>搵唔到字庫</p>';
    const cs = ALL.filter(c => c.d === id); const dc = color(id);
    const seen = cs.filter(c => S.cards[c.id]).length; const due = dueCount(id);
    return `<div class="row" style="flex-wrap:nowrap"><a class="btn icon-btn" href="#library">‹</a><h1 class="grow">${esc(d.icon)} ${esc(d.zh)}</h1></div>
      <p class="muted small">${esc(d.name)} · 共 ${cs.length} 個 · 學咗 ${seen} · 到期 ${due}${d.say ? ' · 呢個字庫係「睇中文→講英文」練習' : ''}</p>
      <div class="grid2" style="margin:10px 0 12px">
        <button class="btn-primary" style="background:${dc}" data-act="studyDeck" data-deck="${esc(id)}">${due ? '溫習 + ' : ''}學 10 個</button>
        <button class="btn-ghost" data-act="quiz" data-kind="deck" data-deck="${esc(id)}">✏️ 測驗呢個字庫</button>
      </div>
      ${id === 'mine' ? '<button class="btn-accent btn-block" data-act="addWord" style="margin-bottom:12px">＋ 加生字（工作上聽到唔識嘅字）</button>' : ''}
      <div class="card">${cardList(cs)}</div>`;
  };
  function detailHtml(c) {
    const dk = deckOf(c); const s = S.cards[c.id]; const [k, t] = stateOf(c.id);
    return `<div class="row" style="align-items:flex-start;flex-wrap:nowrap"><div class="grow"><div class="small" style="color:${color(c.d)};font-weight:700">${esc(dk.icon)} ${esc(dk.zh)}</div>
      <div style="font-size:24px;font-weight:800">${esc(fill(c.en))}</div></div>${spk(speakText(c))}</div>
      <div style="font-size:19px;font-weight:700;color:${color(c.d)};margin:6px 0">${esc(fill(c.zh))}</div>
      ${c.def ? `<p>${dk.say ? '情境：' : ''}${esc(c.def)}</p>` : ''}
      ${c.ex ? `<div class="ex">${esc(c.ex)} ${dk.roots ? '' : spk(c.ex)}${c.exZh ? `<div class="zhline">${esc(c.exZh)}</div>` : ''}</div>` : ''}
      ${c.note ? `<div class="note" style="margin-top:10px">💬 ${esc(fill(c.note))}</div>` : ''}
      <p class="small muted"><span class="pill ${k}">${t}</span> ${s ? '下次溫習：' + s.due + (s.l ? ' · 唔記得過 ' + s.l + ' 次' : '') : ''}</p>
      <div id="sayOut" class="heard"></div>
      <div class="row">
        <button class="chip" data-act="star" data-id="${esc(c.id)}">${S.stars[c.id] ? '⭐ 已收藏' : '☆ 收藏'}</button>
        ${!dk.roots ? `<button class="chip" data-act="say" data-text="${esc(speakText(c))}">🎤 跟讀</button>` : ''}
        <a class="chip btn" href="${esc(dictUrl(dk.roots ? speakText(c) : c.en))}" target="_blank" rel="noopener">🔎 查字典／翻譯</a>
        <button class="chip" data-act="learnOne" data-id="${esc(c.id)}">📖 而家學</button>
        <button class="chip" data-act="openFb" data-ctx="${esc(c.id)}">💌 意見</button>
        ${c.d === 'mine' ? `<button class="chip" data-act="editWord" data-id="${esc(c.id)}">✏️ 修改</button><button class="chip" data-act="delWord" data-id="${esc(c.id)}">🗑️ 刪除</button>` : ''}
      </div>
      <button class="btn-ghost btn-block" style="margin-top:14px" data-act="closeModal">關閉</button>`;
  }
  function wordForm(c) {
    c = c || {};
    return `<h2 style="margin-top:0">${c.id ? '✏️ 修改生字' : '＋ 加生字'}</h2>
      <p class="small muted">工作上聽到唔識嘅字或句子，記低佢，之後會自動安排溫習。</p>
      <label>英文 *</label><input id="f_en" value="${esc(c.en)}" placeholder="e.g. cannula" autocapitalize="none">
      <div class="row" style="margin-top:6px"><button class="chip" data-act="lookup">🔎 Cambridge 字典</button><button class="chip" data-act="translate">🌐 Google 翻譯</button></div>
      <label>中文意思</label><input id="f_zh" value="${esc(c.zh)}" placeholder="e.g. 靜脈導管">
      <label>英文解釋（可選）</label><input id="f_def" value="${esc(c.def)}">
      <label>例句（可選）</label><input id="f_ex" value="${esc(c.ex)}">
      <label>筆記／中文解釋（可選）</label><input id="f_note" value="${esc(c.note)}" placeholder="e.g. 喺邊度聽到、點用">
      <div class="grid2" style="margin-top:16px"><button class="btn-ghost" data-act="closeModal">取消</button><button class="btn-primary" data-act="saveWord" data-id="${esc(c.id || '')}">儲存</button></div>`;
  }

  // ===== 測驗 =====
  let QZ = null;
  const spellable = c => /^[a-zA-Z' -]{3,24}$/.test(c.en) && !deckOf(c).abbr && !deckOf(c).say && !deckOf(c).roots;
  const copyNeed = c => deckOf(c).say ? 1 : 2; // 答錯要抄幾次
  function startQuiz(kind, deck, track) {
    const t = today();
    let pool;
    if (kind === 'deck') pool = ALL.filter(c => c.d === deck);
    else if (kind === 'weak') pool = ALL.filter(c => S.stars[c.id] || (S.cards[c.id] && S.cards[c.id].l > 0));
    else if (kind === 'abbr') pool = ALL.filter(c => c.d === 'abbr');
    else if (kind === 'spell') pool = ALL.filter(c => S.cards[c.id] && spellable(c));
    else if (kind === 'listen') pool = ALL.filter(c => S.cards[c.id] && !deckOf(c).roots);
    else if (kind === 'all') pool = ALL.filter(c => enabledDecks().includes(c.d));
    else pool = ALL.filter(c => S.cards[c.id]);
    if (track && kind !== 'deck') pool = pool.filter(c => trackOf(c) === track);
    if (kind === 'spell' && pool.length < 5) pool = ALL.filter(c => spellable(c) && (!track || trackOf(c) === track));
    if (pool.length < 4) {
      if (kind === 'weak') { toast('暫時冇弱項 👍 試下快速測驗'); return; }
      toast('已學嘅字未夠，用全部字庫出題');
      pool = ALL.filter(c => enabledDecks().includes(c.d) && (!track || trackOf(c) === track));
    }
    const tts = 'speechSynthesis' in window;
    const qs = shuffle(pool).slice(0, 10).map(c => {
      const dk = deckOf(c); let types;
      if (kind === 'spell') types = ['spell'];
      else if (kind === 'listen') types = tts ? ['listen'] : ['mcZh'];
      else if (dk.say) types = tts ? ['mcEn', 'mcEn', 'listen'] : ['mcEn'];
      else { types = ['mcZh', 'mcEn']; if (spellable(c)) types.push('spell'); if (tts && !dk.roots) types.push('listen'); }
      const type = types[Math.floor(Math.random() * types.length)];
      return { id: c.id, type, choices: type === 'spell' ? [] : makeChoices(c, type) };
    });
    QZ = { qs, i: 0, score: 0, answered: false, wrong: [], kind, deck, t, copy: 0, track };
    location.hash = '#quizrun';
  }
  function makeChoices(c, type) {
    const key = type === 'mcEn' ? 'en' : 'zh';
    let pool = ALL.filter(x => x.d === c.d && x.id !== c.id);
    if (pool.length < 3) pool = ALL.filter(x => deckOf(x).cat === deckOf(c).cat && !!deckOf(x).say === !!deckOf(c).say && x.id !== c.id);
    const seen = new Set([c[key]]); const out = [c.id];
    for (const x of shuffle(pool)) { if (out.length >= 4) break; if (!seen.has(x[key])) { seen.add(x[key]); out.push(x.id); } }
    return shuffle(out);
  }
  V.quiz = () => `
    <h1>✏️ 測驗</h1><p class="muted small">做錯嘅字會自動加入今日溫習，同埋放入「弱項」。</p>
    <div class="grid2" style="margin-top:12px">
      ${[['learned', '⚡', '已學字快測', '10 題混合', 'c-blue'], ['weak', '🎯', '弱項特訓', '錯過／收藏嘅字', 'c-pink'], ['spell', '⌨️', '串字練習', '聽讀音打出個字', 'c-green'], ['listen', '🎧', '聽力', '聽英文揀意思', 'c-purple'], ['abbr', '🔤', '縮寫挑戰', 'BP、PRN、NBM…', 'c-orange'], ['all', '🎲', '全部隨機', '包括未學嘅字', 'c-teal']]
      .map(([k, ic, t, s, cl]) => `<button class="card" style="flex-direction:column;align-items:flex-start;margin:0;text-align:left" data-act="quiz" data-kind="${k}"><span class="action" style="padding:0;border:0;box-shadow:none;background:none"><span class="ico ${cl}">${ic}</span></span><b>${t}</b><span class="small muted">${s}</span></button>`).join('')}
    </div>
    <h2>揀字庫測驗</h2>
    <select id="quizDeck">${DECKS.map(d => `<option value="${esc(d.id)}">${esc(d.icon)} ${esc(d.zh)}</option>`).join('')}</select>
    <button class="btn-primary btn-block" style="margin-top:10px" data-act="quizDeckGo">開始</button>`;
  V.quizrun = () => {
    if (!QZ) { setTimeout(() => { location.hash = '#quiz'; }); return ''; }
    if (QZ.i >= QZ.qs.length) return quizDone();
    const q = QZ.qs[QZ.i]; const c = BY[q.id]; const dk = deckOf(c);
    if (QZ.shownPos !== QZ.i) { QZ.shownPos = QZ.i; QZ.shownAt = Date.now(); }
    let prompt = '', body = '';
    if (q.type === 'mcZh') prompt = `<div class="small muted">中文意思係？</div><div class="row" style="flex-wrap:nowrap"><div class="term grow">${esc(c.en)}</div>${spk(speakText(c))}</div>`;
    else if (q.type === 'mcEn') prompt = dk.say
      ? `<div class="small muted">邊句英文係呢個意思？</div><div class="term sentence">${esc(fill(c.zh))}</div>`
      : `<div class="small muted">邊個字符合呢個解釋？</div><div class="def" style="font-size:19px;font-weight:700">${esc(c.def)}</div>${QZ.hint ? `<div class="zh fade-in">${esc(c.zh)}</div>` : `<div><button class="reveal-zh" data-act="qhint">💡 中文提示</button></div>`}`;
    else if (q.type === 'listen') prompt = `<div class="small muted">聽讀音，揀啱嘅意思</div><div class="center"><button class="speak" style="width:84px;height:84px;font-size:36px" data-act="speak" data-text="${esc(speakText(c))}" id="autoSpeak">🔊</button></div>`;
    else prompt = `<div class="small muted">聽讀音，串出呢個字</div><div class="row"><button class="speak" data-act="speak" data-text="${esc(speakText(c))}" id="autoSpeak">🔊</button><button class="chip" data-act="speakSlow" data-text="${esc(speakText(c))}">🐢 慢啲</button></div>
      <div class="def">${esc(c.def)}</div><div class="zh">${esc(c.zh)}</div>`;
    if (q.type === 'spell') {
      body = QZ.answered ? '' : `<input id="spellIn" autocomplete="off" autocapitalize="none" spellcheck="false" placeholder="打英文…"><button class="btn-primary btn-block" style="margin-top:10px" data-act="spellGo">提交</button>`;
    } else {
      const key = q.type === 'mcEn' ? 'en' : 'zh';
      body = `<div class="choices">${q.choices.map(id => {
        let cls = ''; if (QZ.answered) { if (id === q.id) cls = 'right'; else if (id === QZ.picked) cls = 'wrong'; }
        return `<button class="${cls}" data-act="pick" data-id="${esc(id)}" ${QZ.answered ? 'disabled' : ''}>${esc(fill(BY[id][key]))}</button>`;
      }).join('')}</div>`;
    }
    const fb = QZ.answered ? `<div class="fb ${QZ.ok ? 'ok' : 'no'}" style="margin-top:12px">
      <b>${QZ.ok ? '✅ 啱！' : '❌ 唔啱'}</b>${QZ.typed != null && !QZ.ok ? ` 你打咗：「${esc(QZ.typed)}」` : ''}<br>
      <b>${esc(fill(c.en))}</b> — ${esc(fill(c.zh))}<br><span class="small">${dk.say ? '' : esc(c.def)}</span>
      ${c.note ? `<div class="small" style="margin-top:4px">💬 ${esc(fill(c.note))}</div>` : ''}
      ${!QZ.ok && !QZ.expRes ? `<div style="margin-top:8px"><button class="chip" data-act="aiExplain">🤔 點解錯？問 AI</button></div>` : ''}</div>
      <div id="aiExpBox">${QZ.expRes ? aiResultHtml(QZ.expRes, '') : ''}</div>
      ${!QZ.ok ? (() => { const need = copyNeed(c); const done = QZ.copy >= need;
        return `<div class="card tight" style="margin-top:10px"><div class="row between"><b>✍️ 打 ${need} 次正確答案，記實佢</b><span>${'✅'.repeat(Math.min(QZ.copy, need))}${'⬜'.repeat(Math.max(0, need - QZ.copy))}</span></div>
          <div class="term" style="font-size:20px;margin:6px 0">${esc(fill(c.en))}</div>
          ${done ? '<div class="small" style="color:var(--good)"><b>👍 做得好，記住咗！</b></div>' : `<div class="row" style="flex-wrap:nowrap"><input id="copyIn" autocomplete="off" autocapitalize="none" spellcheck="false" placeholder="照住打一次…"><button class="btn-primary" data-act="copyGo">✓</button></div>`}</div>`; })() : ''}
      <div class="row" style="margin-top:10px;flex-wrap:nowrap"><button class="btn-primary grow" data-act="nextQ" ${!QZ.ok && QZ.copy < copyNeed(c) ? 'disabled style="opacity:.5"' : ''}>${QZ.i + 1 < QZ.qs.length ? '下一題 →' : '睇結果'}</button>
      ${!QZ.ok && QZ.copy < copyNeed(c) ? '<button class="chip" data-act="copySkip">略過</button>' : ''}
      <button class="chip" data-act="openFb" data-ctx="${esc(c.id)}" aria-label="對呢題有意見">💌</button></div>` : '';
    return `<div class="row" style="flex-wrap:nowrap;margin-bottom:12px"><button class="icon-btn" data-act="exitQuiz">✕</button>
      <div class="progress grow"><div style="width:${QZ.i / QZ.qs.length * 100}%"></div></div><span class="small muted">${QZ.i + 1}/${QZ.qs.length}</span></div>
      <div class="card flash ${QZ.answered ? '' : 'enter'}" style="--dc:${color(c.d)};min-height:0"><span class="deck-tag">${esc(dk.icon)} ${esc(dk.zh)}</span>${prompt}</div>
      ${body}${fb}`;
  };
  function answer(ok, picked, typed) {
    const q = QZ.qs[QZ.i]; QZ.answered = true; QZ.ok = ok; QZ.picked = picked; QZ.typed = typed;
    logEv({ k: 'quiz', id: q.id, ty: q.type, ok: ok ? 1 : 0, a: typed != null ? typed : picked, ms: Date.now() - (QZ.shownAt || Date.now()) });
    const L = logToday(); L.qt++;
    if (ok) { QZ.score++; L.q++; }
    else {
      QZ.wrong.push(q.id);
      const s = S.cards[q.id];
      if (s) { s.due = today(); s.l = (s.l || 0) + 1; s.i = Math.min(s.i, 1); }
      else S.cards[q.id] = Object.assign(nextState(null, 0), { due: today() });
    }
    save(); render(); checkGoal();
    if (!ok && navigator.vibrate) navigator.vibrate(80);
  }
  function quizDone() {
    const pct = Math.round(QZ.score / QZ.qs.length * 100);
    if (pct >= 80) setTimeout(() => confetti(), 200);
    const msg = pct === 100 ? '完美！🏆' : pct >= 80 ? '好叻呀！🌟' : pct >= 50 ? '唔錯，繼續努力 💪' : '唔緊要，錯咗先記得牢 ❤️';
    return `<div class="card hero center" style="padding:28px 16px"><div class="score">${QZ.score}/${QZ.qs.length}</div><h1>${msg}</h1><p class="muted">準確率 ${pct}%</p></div>
      ${QZ.wrong.length ? `<div class="card"><h3>要再溫嘅字（已加入今日溫習）</h3>${cardList(QZ.wrong.map(id => BY[id]))}</div>` : ''}
      <div class="grid2"><button class="btn-primary" data-act="quizAgain">再嚟一次</button><a class="btn btn-ghost" href="#home">返首頁</a></div>`;
  }

  // ===== IELTS =====
  const IEL = { tab: 'speak', part: 1, idx: {}, task: 2 };
  V.ielts = () => {
    const tabs = [['speak', '🎤 口語'], ['write', '✍️ 寫作'], ['read', '📖 閱讀'], ['listen', '🎧 聽力'], ['gram', '🧩 文法'], ['para', '🔁 改寫'], ['vocab', '📘 字彙'], ['tips', '💡 貼士']];
    let body = '';
    if (IEL.tab === 'speak') body = speakHtml();
    else if (IEL.tab === 'write') body = writeListHtml();
    else if (IEL.tab === 'read') body = `<p class="small muted">每篇約 15 分鐘。交卷後有答案解釋同估分。</p>` + NE.reading.map(r => `<a class="card tight" href="#read/${r.id}" style="display:block;color:inherit;text-decoration:none">
        <div class="row between"><b>${esc(r.title)}</b>${lastScore('read', r.id) ? `<span class="pill master">上次 ${lastScore('read', r.id)}</span>` : '<span class="pill new">未做</span>'}</div>
        <div class="small muted">${esc(r.zh)} · ${r.qs.length} 題 · T/F/NG、填字、選擇</div></a>`).join('');
    else if (IEL.tab === 'listen') body = `<button class="card tight deckrow" data-act="goDict" style="width:100%;text-align:left;--dc-soft:rgba(139,92,246,.16)"><div class="ic">✍️</div><div class="grow"><b>聽寫練習</b><div class="small muted">聽一句打一句，練聽力同串字（無限句）</div></div><span>›</span></button>
      <h2>對話填表</h2>` + NE.listening.map(r => `<a class="card tight" href="#listen/${r.id}" style="display:block;color:inherit;text-decoration:none">
        <div class="row between"><b>${esc(r.title)}</b>${lastScore('listen', r.id) ? `<span class="pill master">上次 ${lastScore('listen', r.id)}</span>` : '<span class="pill new">未做</span>'}</div>
        <div class="small muted">${esc(r.zh)} · ${esc(r.part)} · ${r.qs.length} 題</div></a>`).join('') +
      `<p class="small muted">讀音用手機內置聲音，同真考試錄音唔同。建議每星期都做一份官方練習卷（見「貼士」）。</p>`;
    else if (IEL.tab === 'gram') body = gramHtml();
    else if (IEL.tab === 'para') body = paraHtml();
    else if (IEL.tab === 'vocab') body = `<div class="card tight"><b>🎓 IELTS 字卡同測驗</b>
        <button class="btn-primary btn-block" style="margin-top:8px" data-act="startToday" data-track="ielts">開始 IELTS 字卡（溫習 ${dueCount(null, 'ielts')} · 新字 ${newIdsFor('ielts', newLeftToday('ielts')).length}）→</button>
        <div class="row" style="margin-top:8px"><button class="chip" data-act="quiz" data-kind="learned" data-track="ielts">✏️ 測驗</button><button class="chip" data-act="quiz" data-kind="weak" data-track="ielts">🎯 弱項</button><button class="chip" data-act="quiz" data-kind="spell" data-track="ielts">⌨️ 串字</button><button class="chip" data-act="quiz" data-kind="listen" data-track="ielts">🎧 聽力</button></div></div>
      ${(NE.ieltsTopics || []).length ? '<h2>🌏 話題字彙（按話題）</h2>' : ''}${(NE.ieltsTopics || []).map(([g, title]) => {
        const ds = DECKS.filter(d => d.grp === g); if (!ds.length) return '';
        const n = ALL.filter(c => ds.some(d => d.id === c.d)).length; const also = subjAlso(g);
        const alsoRow = also.length ? `<div class="card tight deckrow" data-act="openSubjAlso" data-grp="${g}"><div class="ic">📎</div><div class="grow"><b>其他字庫相關字</b><div class="small muted">${also.length} 個</div></div><span>›</span></div>` : '';
        return `<details class="subj"><summary><b>${title}</b> <span class="small muted">${n + also.length} 張</span></summary>${ds.map(deckRow).join('')}${alsoRow}</details>`;
      }).join('')}
      <h2>📚 其他 IELTS 字庫</h2>${DECKS.filter(d => d.cat === 'ielts' && !d.grp).map(deckRow).join('')}
      <h2>🔗 連接詞速查</h2>${linkingHtml()}`;
    else body = tipsHtml();
    return `<h1>🎓 <span class="grad-text">IELTS</span> 溫習</h1>
      <p class="muted small">題目為原創練習題（健康／工作話題為主），唔係官方真題。</p>
      <a class="card tight deckrow" href="#reports" style="display:flex;color:inherit;text-decoration:none"><div class="ic">📈</div><div class="grow"><b>我嘅 AI 報告</b><div class="small muted">${S.reports.length} 份 · 睇分數走勢、逐項評分、匯出 PDF</div></div><span>›</span></a>
      <a class="card tight deckrow" href="#mock" style="display:flex;color:inherit;text-decoration:none"><div class="ic">🎙️</div><div class="grow"><b>AI 模擬口試（Part 1→2→3）</b><div class="small muted">AI 考官讀題、聽你答、追問，最後出完整報告</div></div><span>›</span></a>
      <div class="tabs" style="margin:12px 0">${tabs.map(([k, t]) => `<button class="chip ${IEL.tab === k ? 'on' : ''}" data-act="ieltsTab" data-tab="${k}"><span class="ti">${t.split(' ')[0]}</span>${t.split(' ')[1]}</button>`).join('')}</div>
      ${body}`;
  };
  function speakHtml() {
    const P = IEL.part, list = NE.ielts.speaking[P];
    const i = (IEL.idx[P] == null ? hashStr(today()) : IEL.idx[P]) % list.length; IEL.idx[P] = i;
    const item = list[i];
    const qText = P === 2 ? item.q : item;
    const secs = P === 1 ? 40 : P === 2 ? 120 : 60;
    return `<div class="row">${[1, 2, 3].map(p => `<button class="chip ${P === p ? 'on' : ''}" data-act="part" data-p="${p}">Part ${p}</button>`).join('')}</div>
      <p class="small muted">${P === 1 ? 'Part 1：日常問題，每題答 2–3 句（約 30–40 秒）' : P === 2 ? 'Part 2：1 分鐘準備，講 1–2 分鐘' : 'Part 3：深入討論，講意見 + 原因 + 例子（約 1 分鐘）'}</p>
      <div class="card" style="border-top:6px solid #8b5cf6">
        <div class="row" style="align-items:flex-start;flex-wrap:nowrap"><div class="cue grow">${esc(qText)}
        ${P === 2 ? `<div class="small muted" style="margin-top:6px">You should say:</div><ul>${item.b.map(b => `<li>${esc(b)}</li>`).join('')}</ul>` : ''}</div>${spk(P === 2 ? item.q + ' You should say: ' + item.b.join(', ') : qText)}</div>
        ${P === 2 ? `<details><summary>💡 中文提示 + 有用字</summary><p class="small">${esc(item.tip)}</p><div class="row">${item.v.map(v => `<span class="pill">${esc(v)}</span>`).join('')}</div></details>` : ''}
      </div>
      <div class="card center">
        <div class="small muted" id="timerLabel">${TIMER ? esc(TIMER.label) : P === 2 ? '先準備 1 分鐘，再講 2 分鐘' : '撳開始，大聲答題'}</div>
        <div class="timer" id="timerDisp">${Math.floor(secs / 60)}:${pad(secs % 60)}</div>
        ${REC ? `<button class="btn-accent btn-big btn-block" data-act="spkStop" style="margin-top:8px"><span class="rec"></span> 講完，交俾 AI 評分</button>`
          : `<div class="grid2" style="margin-top:8px;${P === 2 ? '' : 'grid-template-columns:1fr'}">
              ${P === 2 ? `<button class="btn-ghost" data-act="p2go">⏱️ 準備 1 分鐘</button>` : ''}
              <button class="btn-primary btn-big" data-act="spkGo" data-s="${secs}">🎙️ ${IEL.audio ? '再答一次' : '開始作答'}</button></div>`}
        <p class="small muted" style="margin-top:8px">撳一下就開始錄音同計時；講完撳「講完」或者時間到，AI 會聽你錄音：寫低你講咗咩、估 Band、指出文法同發音問題。</p>
        ${IEL.audio ? `<audio controls src="${IEL.audio.url}" style="width:100%;margin-top:6px"></audio>
          <button class="chip" data-act="spkRetryAI" style="margin-top:6px">🤖 再叫 AI 評一次</button>` : ''}
        <div id="aiSpkBox" style="text-align:left"></div>
      </div>
      <details class="card"><summary>⌨️ 唔想錄音？打字評分</summary>
        <p class="small muted">可以打字，或者用 iPhone 鍵盤嘅 🎤 講（會變文字）。AI 只會評用字同文法，評唔到發音。</p>
        <textarea id="spkText" placeholder="打你嘅答案…" style="min-height:110px;margin-top:8px">${esc(IEL.spk || '')}</textarea>
        <button class="btn-primary btn-block" style="margin-top:8px" data-act="aiSpeak">🤖 AI 評分（文字）</button>
        <div id="aiSpkTxtBox"></div></details>
      <div class="grid2"><button class="btn-ghost" data-act="nextSpeak">🔀 換一題</button><button class="btn-primary" data-act="speakDone">✅ 練完呢題</button></div>
      <a class="btn btn-ghost btn-block" style="margin-top:10px" href="#deck/ielts-speak">🗣️ 溫習口語實用句</a>`;
  }
  function writeListHtml() {
    const T = IEL.task;
    const items = NE.ielts.writing.filter(w => w.task === T);
    return `<div class="row">${[2, 1].map(t => `<button class="chip ${T === t ? 'on' : ''}" data-act="task" data-t="${t}">Task ${t}${t === 2 ? '（文章）' : '（圖表）'}</button>`).join('')}</div>
      <p class="small muted">${T === 2 ? '40 分鐘 · 最少 250 字' : '20 分鐘 · 最少 150 字'}。草稿會自動儲存喺手機。</p>
      ${items.map(w => { const d = S.drafts[w.id]; const wc = d ? countWords(d.text) : 0; return `<a class="card tight" href="#write/${w.id}" style="display:block;color:inherit;text-decoration:none">
        <div class="row between"><span class="pill">${esc(NE.ielts.structures[w.type].name)}</span>${d && d.done ? '<span class="pill master">✅ 完成</span>' : wc ? `<span class="pill learn">草稿 ${wc} 字</span>` : ''}</div>
        <p style="margin-top:6px">${esc(w.q.length > 140 ? w.q.slice(0, 140) + '…' : w.q)}</p></a>`; }).join('')}`;
  }
  const countWords = t => (String(t).trim().match(/[A-Za-z0-9'’-]+/g) || []).length;
  function linkingHtml() {
    return NE.ielts.linking.map(g => `<div class="card tight"><b>${esc(g.g)}</b><div class="row" style="margin-top:6px">${g.w.map(w => `<span class="pill">${esc(w)}</span>`).join('')}</div></div>`).join('');
  }
  function tipsHtml() {
    const I = NE.ielts;
    const crit = (arr) => arr.map(([k, v]) => `<li><b>${esc(k)}</b><br><span class="small muted">${esc(v)}</span></li>`).join('');
    return `${I.tips.map(([t, d]) => `<div class="card tight"><h3>${esc(t)}</h3><p class="small">${esc(d)}</p></div>`).join('')}
      <h2>評分準則（各佔 25%）</h2>
      <div class="card"><h3>✍️ 寫作</h3><ul style="padding-left:18px;margin:0">${crit(I.criteria.writing)}</ul></div>
      <div class="card"><h3>🎤 口語</h3><ul style="padding-left:18px;margin:0">${crit(I.criteria.speaking)}</ul></div>
      <h2>🔗 官方／免費資源</h2>
      <div class="card">${I.links.map(([t, u]) => `<p><a href="${esc(u)}" target="_blank" rel="noopener">${esc(t)} ↗</a></p>`).join('')}
      <p class="small muted">閱讀同聽力建議用官方練習卷做，計時做，再對答案。</p></div>`;
  }
  V.write = (id) => {
    const w = NE.ielts.writing.find(x => x.id === id); if (!w) return '<p>搵唔到題目</p>';
    const st = NE.ielts.structures[w.type]; const d = S.drafts[id] || { text: '' };
    const target = w.task === 2 ? 250 : 150; const mins = w.task === 2 ? 40 : 20;
    const sample = NE.ielts.sample.id === id ? NE.ielts.sample : null;
    const checks = w.task === 2
      ? ['有冇答晒題目所有部分？', '開首段有冇清楚講立場？', '每段有冇一個中心句？', '有冇例子支持論點？', '有冇用唔同嘅連接詞？', '結論有冇重申立場？', '字數夠 250？', '檢查時態、單複數、串字']
      : ['有冇寫 overview（主要趨勢）？', '有冇引用數字？', '有冇作比較？', '有冇避免個人意見？', '字數夠 150？', '檢查時態（過去年份用過去式）'];
    return `<div class="row" style="flex-wrap:nowrap"><a class="btn icon-btn" href="#ielts">‹</a><h1 class="grow">✍️ Task ${w.task}</h1></div>
      <div class="card" style="border-top:6px solid #3b82f6"><span class="pill">${esc(st.name)}</span><p style="font-weight:600">${esc(w.q)}</p>
      ${w.table ? `<table class="data"><tr>${w.table.head.map(h => `<th>${esc(h)}</th>`).join('')}</tr>${w.table.rows.map(r => `<tr>${r.map(x => `<td>${esc(x)}</td>`).join('')}</tr>`).join('')}</table><p class="small muted">（虛構數據，練習用）</p>` : ''}
      ${w.steps ? `<ol>${w.steps.map(s => `<li>${esc(s)}</li>`).join('')}</ol>` : ''}
      <details><summary>🧭 文章結構建議</summary><ol class="small">${st.parts.map(p => `<li>${esc(p)}</li>`).join('')}</ol></details>
      <details><summary>🔗 連接詞速查</summary>${linkingHtml()}</details></div>
      <div class="card center tight"><div class="row between"><span class="small muted" id="timerLabel">${TIMER ? esc(TIMER.label) : mins + ' 分鐘計時'}</span><span class="timer" id="timerDisp" style="font-size:28px">${mins}:00</span>
      <button class="chip" data-act="tgo" data-s="${mins * 60}">⏱️ 開始</button></div></div>
      <textarea id="essay" data-id="${esc(id)}" placeholder="喺度寫…（自動儲存）" spellcheck="true">${esc(d.text)}</textarea>
      <div class="row between small" style="margin:6px 0 10px"><span id="wc" class="muted">${countWords(d.text)} / ${target} 字</span><span class="muted">${d.t ? '已儲存' : ''}</span></div>
      <button class="btn-accent btn-block" data-act="aiEssay" data-id="${esc(id)}">🤖 AI 批改（估 Band + 改錯 + 建議）</button>
      <div id="aiEssayBox">${d.ai ? `<p class="small muted center" style="margin-top:8px">上次 AI 批改：${esc(new Date(d.ai.at).toLocaleString('zh-HK'))}</p>` + aiResultHtml(d.ai.res) : ''}</div>
      <div style="height:10px"></div>
      <details class="card tight"><summary>✅ 交之前自我檢查</summary>${checks.map((c, i) => `<label class="row" style="color:var(--text);font-weight:500;margin:6px 0"><input type="checkbox" id="ck${i}"> ${esc(c)}</label>`).join('')}</details>
      ${sample ? `<details class="card tight"><summary>📄 參考範文（寫完先睇！）</summary><p class="small muted">${esc(sample.note)}</p><div class="essay">${esc(sample.text)}</div></details>` : ''}
      <button class="btn-primary btn-block" data-act="essayDone" data-id="${esc(id)}">✅ 完成呢篇</button>
      <p class="small muted center">AI 批改後，按「改正」自己改一次再批改，進步最快。</p>`;
  };

  // ===== 進度 =====
  V.stats = () => {
    const learned = Object.keys(S.cards).filter(id => BY[id]).length;
    const mastered = Object.keys(S.cards).filter(id => BY[id] && S.cards[id].i >= 21).length;
    let q = 0, qt = 0; for (let k = 0; k < 30; k++) { const L = S.log[addDays(today(), -k)]; if (L) { q += L.q || 0; qt += L.qt || 0; } }
    const tomorrow = ALL.filter(c => S.cards[c.id] && S.cards[c.id].due <= addDays(today(), 1)).length;
    const st = streak(), ls = longestStreak();
    // 熱圖：12 星期
    const days = []; for (let k = 83; k >= 0; k--) days.push(addDays(today(), -k));
    const [sy, sm, sd] = days[0].split('-').map(Number);
    const pre = new Date(sy, sm - 1, sd).getDay(); // 第一欄由星期日開始對齊
    const cells = Array(pre).fill('<div style="visibility:hidden"></div>').concat(days.map(d => {
      const a = activity(S.log[d]); const g = S.settings.dailyGoal;
      const lv = a === 0 ? '' : a < g / 2 ? 'l1' : a < g ? 'l2' : 'l3';
      return `<div class="${lv} ${goalHit(d) ? 'goalmet' : ''}" title="${d}：${a}"></div>`;
    })).join('');
    const badges = [['🌱', '第一張卡', learned >= 1], ['🔥', '連續 3 日', ls >= 3], ['⚡', '連續 7 日', ls >= 7], ['👑', '連續 30 日', ls >= 30],
      ['📚', '學咗 50 個', learned >= 50], ['🎓', '學咗 200 個', learned >= 200], ['💎', '熟記 50 個', mastered >= 50], ['✍️', '第一篇作文', S.counters.essay >= 1], ['🎤', '口語 10 題', S.counters.speak >= 10]];
    const weak = ALL.filter(c => S.cards[c.id] && S.cards[c.id].l > 0).sort((a, b) => S.cards[b.id].l - S.cards[a.id].l).slice(0, 12);
    return `<h1>📈 進度</h1>
      <a class="card tight deckrow" href="#coach" style="display:flex;color:inherit;text-decoration:none"><div class="ic">📊</div><div class="grow"><b>學習報告</b><div class="small muted">AI 週報 · Claude 詳細分析 · 寫作口語報告喺「🎓 IELTS → 📈」</div></div><span>›</span></a>
      <div class="grid3" style="margin-top:12px">
        ${[['🔥', st, '連續日數'], ['🏆', ls, '最長連續'], ['📖', learned, '已學'], ['💎', mastered, '熟記（21日+）'], ['🎯', qt ? Math.round(q / qt * 100) + '%' : '–', '30日測驗準確'], ['⏰', tomorrow, '明日到期']]
        .map(([i, n, l]) => `<div class="card tile" style="margin:0"><div>${i}</div><div class="n">${n}</div><div class="l">${l}</div></div>`).join('')}
      </div>
      <h2>🧭 強項同弱項</h2>${insightCard()}
      <h2>🗓️ 最近 12 星期</h2>
      <div class="card"><div class="heat">${cells}</div><p class="small muted" style="margin-top:8px">顏色越深學得越多，粉紅框 = 達標日</p></div>
      <h2>🏅 成就</h2>
      <div class="card row" style="justify-content:space-around">${badges.map(([i, t, ok]) => `<div class="badge ${ok ? 'got' : ''}"><div class="b">${i}</div>${t}</div>`).join('')}</div>
      <h2>📚 各字庫</h2>${DECKS.map(deckRow).join('')}
      ${weak.length ? `<h2>🎯 最常唔記得</h2><div class="card">${cardList(weak)}<button class="btn-accent btn-block" style="margin-top:10px" data-act="quiz" data-kind="weak">弱項特訓</button></div>` : ''}`;
  };

  // ===== 設定 =====
  V.settings = () => {
    const s = S.settings; const en = enabledDecks();
    const sel = (key, opts) => `<select data-set="${key}">${opts.map(([v, t]) => `<option value="${v}" ${String(s[key]) === String(v) ? 'selected' : ''}>${t}</option>`).join('')}</select>`;
    return `<div class="row" style="flex-wrap:nowrap"><a class="btn icon-btn" href="#home">‹</a><h1 class="grow">⚙️ 設定</h1></div>
      <div class="card">
        <label>你嘅英文名（用喺句子練習，例如自我介紹）</label><input data-set="name" value="${esc(s.name)}" placeholder="e.g. Amy">
        <label>每日目標（學／溫／測驗共幾多張）</label>${sel('dailyGoal', [[10, '10 — 輕鬆'], [20, '20 — 標準'], [30, '30 — 認真'], [50, '50 — 衝刺']])}
        <label>🩺 護理英文：每日新字</label>${sel('newPerDay', [[0, '0（暫停）'], [5, '5'], [10, '10'], [15, '15'], [20, '20'], [30, '30']])}
        <label>🩺 護理新字次序</label>${sel('advFirst', [['true', '先學進階字同句子（基本字已識）'], ['false', '全部字庫輪住出']])}
        <label>✍️ 學新字後造句（AI 改）</label>${sel('sentPrompt', [['true', '新字自動出造句框（可以略過）'], ['false', '唔自動出，要自己撳']])}
        <label>🎓 IELTS：每日新字</label>${sel('newIelts', [[0, '0（暫停）'], [5, '5'], [10, '10'], [15, '15'], [20, '20'], [30, '30']])}
        <label>中文翻譯顯示</label>${sel('zhMode', [['tap', '撳先顯示（先試自己諗英文意思）'], ['always', '一揭卡就顯示']])}
        <label>英文口音</label>${sel('accent', [['en-GB', '🇬🇧 英式（IELTS 常用）'], ['en-AU', '🇦🇺 澳洲'], ['en-US', '🇺🇸 美式']])}
        <label>讀音速度：<span id="rateV">${s.rate}</span></label><div class="row" style="flex-wrap:nowrap"><input type="range" min="0.6" max="1.1" step="0.05" data-set="rate" value="${s.rate}"><button class="chip" data-act="speak" data-text="Please take a deep breath in, and out.">🔊 試聽</button></div>
        <label>外觀</label>${sel('theme', [['auto', '跟手機'], ['light', '淺色'], ['dark', '深色']])}
      </div>
      <h2>🎯 IELTS 目標</h2>
      <div class="card">
        <label>考試日期（首頁會倒數）</label><input type="date" data-set="examDate" value="${esc(s.examDate)}">
        <label>考試類別</label>${sel('examType', [['ac', 'Academic（學術）'], ['gt', 'General Training（一般）']])}
        <label>目標分數</label>${sel('target', [['5.5', '5.5'], ['6', '6.0'], ['6.5', '6.5'], ['7', '7.0']])}
      </div>
      <a class="btn btn-ghost btn-block" href="#help" style="margin-top:12px">📖 使用說明</a>
      <h2>新字來源（揀想學嘅字庫）</h2>
      <div class="card">${CATS.map(([cat, t]) => `<div class="small muted" style="margin-top:6px">${t}</div>` + DECKS.filter(d => d.cat === cat).map(d => `<label class="row" style="color:var(--text);font-weight:500;margin:8px 0"><input type="checkbox" data-deck-toggle="${esc(d.id)}" ${en.includes(d.id) ? 'checked' : ''}> ${esc(d.icon)} ${esc(d.zh)}</label>`).join('')).join('')}</div>
      <h2>⏰ 每日提醒</h2>
      <div class="card"><p class="small">下載一個每日重複嘅日曆提醒（.ics），加入 iPhone／Android 日曆，到鐘就會彈通知。</p>
        <div class="row" style="flex-wrap:nowrap"><input type="time" data-set="remind" value="${esc(s.remind)}"><button class="btn-primary" data-act="ics">下載提醒</button></div></div>
      <h2>🤖 AI 評分</h2>
      <div class="card"><p class="small">寫作、口語錄音、句子錄音、改寫都可以叫 AI 評分同改錯。Key 只存喺呢部手機。</p>
        <p class="small muted">⚠️ 錄音同文字會傳去 AI 公司處理：唔好講／寫病人資料或者個人私隱。</p>
        <label>AI 供應商</label><select id="aiProvIn"><option value="qwen" ${aiProv() === 'qwen' ? 'selected' : ''}>阿里雲 Qwen（建議：香港用得、聽到錄音、好平）</option><option value="gemini" ${aiProv() === 'gemini' ? 'selected' : ''}>Google Gemini（香港用唔到）</option></select>
        <p class="small" id="aiStatus" style="font-weight:700">${aiReady() ? '✅ 已設定：' + (aiProv() === 'qwen' ? 'Qwen' + (AIC.qModel ? '（' + esc(AIC.qModel) + '）' : '') : 'Gemini' + (AIC.models ? '（' + esc(AIC.models[0]) + '）' : '')) : '未設定'}</p>
        <label>API key</label><input id="aiKeyIn" type="password" autocomplete="off" autocapitalize="none" placeholder="${aiReady() ? '已設定（想換先填）' : 'sk-…（由 Ben 提供）'}">
        <div class="grid2" style="margin-top:10px"><button class="btn-primary" data-act="aiSave">儲存並測試</button>${aiReady() ? '<button class="btn-ghost" data-act="aiRemove">移除</button>' : '<span></span>'}</div>${aiUsageHtml()}</div>
      <h2>☁️ 同步俾 Ben 睇（可選）</h2>
      <div class="card"><p class="small">連接之後，學習記錄同意見箱會自動上載去 Ben 嘅<b>私人</b> GitHub repo，佢可以叫 Claude 分析你嘅強弱項、調整練習。Token 只存喺呢部手機。</p>
        <p class="small" id="syncStatus" style="font-weight:700">${esc(syncStatusText())}</p>
        <label>Repo</label><input id="syRepo" value="${esc(SY.repo || DEFAULT_REPO)}" autocapitalize="none" autocomplete="off">
        <label>GitHub Token</label><input id="syToken" type="password" autocomplete="off" autocapitalize="none" placeholder="${SY.token ? '已設定（想換先填）' : '由 Ben 提供'}">
        <div class="grid2" style="margin-top:10px"><button class="btn-primary" data-act="connectSync">${SY.token ? '儲存並同步' : '連接'}</button><button class="btn-ghost" data-act="syncNowBtn" ${syncReady() ? '' : 'disabled'}>立即同步</button></div>
        ${SY.token ? '<button class="btn-ghost btn-block" style="margin-top:8px" data-act="disconnectSync">喺呢部機中斷同步</button>' : ''}</div>
      <h2>💾 備份</h2>
      <div class="card"><p class="small">學習記錄只存喺呢部手機。換機或清 Safari 資料前，記得匯出備份。未連接同步的話，亦可以將匯出檔案傳俾 Ben 分析。</p>
        <div class="grid2"><button class="btn-ghost" data-act="export">⬇️ 匯出備份</button><button class="btn-ghost" data-act="import">⬆️ 匯入備份</button></div>
        <input type="file" id="importFile" accept="application/json,.json" class="hidden">
        <button class="btn-ghost btn-block" style="margin-top:10px;color:var(--bad)" data-act="reset">重設所有學習記錄</button></div>
      <p class="small muted center">Made with ❤️ · 內容 ${NE.cards.length} 張卡 · 資料只存喺本機</p>`;
  };

  // ===== IELTS 練習：閱讀／聽力／聽寫／文法／改寫 =====
  const normAns = s => String(s == null ? '' : s).toLowerCase()
    .replace(/(\d)\.(\d)/g, '$1:$2').replace(/(\d)\s*(am|pm|a\.m\.|p\.m\.)/g, '$1').replace(/(\d)(st|nd|rd|th)\b/g, '$1')
    .replace(/\b(the|of|dr|doctor)\b/g, ' ').replace(/[^a-z0-9: ]/g, ' ').replace(/\s+/g, ' ').trim();
  const ansOk = (v, list) => { const a = normAns(v); if (!a) return false; return list.some(x => { const b = normAns(x); return a === b || a.replace(/ /g, '') === b.replace(/ /g, ''); }); };
  function bandFor(kind, ok, total) {
    const raw = Math.round(ok / total * 40);
    return (NE.bandTable[kind].find(([min]) => raw >= min) || [0, 3.5])[1];
  }
  const lastScore = (k, id) => { const e = S.events.filter(x => x.k === k && x.id === id).pop(); return e ? `${e.sc}/${e.n}` : ''; };
  const TF = { T: 'True', F: 'False', NG: 'Not Given' };

  let RD = null;
  V.read = id => {
    const P = NE.reading.find(r => r.id === id); if (!P) return '<p>搵唔到文章</p>';
    if (!RD || RD.id !== id) RD = { id, ans: {}, done: false };
    const res = RD.done ? RD.res : null;
    const qHtml = P.qs.map((q, i) => {
      const r = res && res[i]; const mark = r ? (r.ok ? '✅' : '❌') : `${i + 1}.`;
      let input;
      if (q.t === 'tfng') input = `<div class="row">${['T', 'F', 'NG'].map(v => `<button class="chip ${RD.ans[i] === v ? 'on' : ''}" data-act="rdAns" data-i="${i}" data-v="${v}" ${RD.done ? 'disabled' : ''}>${TF[v]}</button>`).join('')}</div>`;
      else if (q.t === 'gap') input = `<input data-rq="${i}" value="${esc(RD.ans[i] || '')}" autocapitalize="none" autocomplete="off" placeholder="ONE WORD ONLY" ${RD.done ? 'disabled' : ''}>`;
      else input = `<div class="choices">${q.c.map((c, k) => `<button class="${RD.ans[i] === String(k) ? 'right' : ''}" style="${RD.ans[i] === String(k) && !RD.done ? 'border-color:var(--primary2)' : ''}" data-act="rdAns" data-i="${i}" data-v="${k}" ${RD.done ? 'disabled' : ''}>${'ABCD'[k]}. ${esc(c)}</button>`).join('')}</div>`;
      const fb = r ? `<div class="fb ${r.ok ? 'ok' : 'no'} small" style="margin-top:6px">答案：<b>${esc(q.t === 'tfng' ? TF[q.a] : q.t === 'gap' ? q.a[0] : 'ABCD'[q.a] + '. ' + q.c[q.a])}</b><br>${esc(q.why)}</div>` : '';
      return `<div style="margin:14px 0"><div style="font-weight:600;margin-bottom:6px">${mark} ${esc(q.q)}</div>${input}${fb}</div>`;
    }).join('');
    const n = P.qs.length;
    return `<div class="row" style="flex-wrap:nowrap"><a class="btn icon-btn" href="#ielts" data-act="goIelts" data-tab="read">‹</a><h1 class="grow" style="font-size:20px">📖 ${esc(P.title)}</h1></div>
      <p class="small muted">${esc(P.zh)} · 建議 ${P.mins} 分鐘 · 先睇題目再搵答案</p>
      ${res ? `<div class="card hero center"><div class="score">${RD.score}/${n}</div><p>按比例估算約 <b>Band ${bandFor('reading', RD.score, n)}</b>（題目少，只供參考）</p></div>` : `<div class="card center tight"><div class="row between"><span class="small muted" id="timerLabel">${P.mins} 分鐘計時</span><span class="timer" id="timerDisp" style="font-size:26px">${P.mins}:00</span><button class="chip" data-act="tgo" data-s="${P.mins * 60}">⏱️ 開始</button></div></div>`}
      <div class="card">${P.paras.map((p, i) => `<p><b style="color:var(--primary2)">${'ABCDEFG'[i]}</b>　${esc(p)}</p>`).join('')}</div>
      <div class="card"><h3>Questions</h3>
        <details class="small"><summary>💡 True / False / Not Given 點分？</summary>
        <p><b>True</b>：文章意思一樣（通常用咗同義詞）<br><b>False</b>：文章講咗相反<br><b>Not Given</b>：文章根本冇講。唔好用自己常識判斷！</p></details>
        ${qHtml}</div>
      ${RD.done ? `<div class="grid2"><button class="btn-ghost" data-act="rdReset">🔁 重做</button><a class="btn btn-primary" href="#ielts" data-act="goIelts" data-tab="read">返閱讀列表</a></div>` : `<button class="btn-primary btn-big btn-block" data-act="rdSubmit">交卷 ✅</button>`}`;
  };

  let LS = null;
  V.listen = id => {
    const P = NE.listening.find(r => r.id === id); if (!P) return '<p>搵唔到練習</p>';
    if (!LS || LS.id !== id) LS = { id, ans: {}, done: false };
    const n = P.qs.length;
    return `<div class="row" style="flex-wrap:nowrap"><a class="btn icon-btn" href="#ielts" data-act="goIelts" data-tab="listen">‹</a><h1 class="grow" style="font-size:20px">🎧 ${esc(P.title)}</h1></div>
      <p class="small muted">${esc(P.zh)} · ${esc(P.part)} · 開始前先睇晒題目，估下要填咩（名？數字？時間？）</p>
      ${LS.done ? `<div class="card hero center"><div class="score">${LS.score}/${n}</div><p>按比例估算約 <b>Band ${bandFor('listening', LS.score, n)}</b>（只供參考）</p></div>` : ''}
      <div class="card center">
        <div class="grid2"><button class="btn-primary btn-big" data-act="lsPlay" id="lsPlayBtn">▶️ 播放</button><button class="btn-ghost btn-big" data-act="lsStop">⏹️ 停</button></div>
        <p class="small muted" style="margin-top:8px">真考試只播一次。第一次試下只聽一次先答，之後先重聽。</p></div>
      <div class="card"><h3>填寫答案（ONE WORD AND/OR A NUMBER）</h3>
      ${P.qs.map((q, i) => { const r = LS.done && LS.res[i]; return `<label style="color:var(--text)">${r ? (r.ok ? '✅' : '❌') : (i + 1) + '.'} ${esc(q.q)}</label>
        <input data-lq="${i}" value="${esc(LS.ans[i] || '')}" autocapitalize="none" autocomplete="off" ${LS.done ? 'disabled' : ''}>
        ${r && !r.ok ? `<div class="small" style="color:var(--bad)">答案：${esc(q.a[0])}${q.why ? '　' + esc(q.why) : ''}</div>` : r && q.why ? `<div class="small muted">${esc(q.why)}</div>` : ''}`; }).join('')}
      </div>
      ${LS.done ? `<details class="card tight"><summary>📄 睇對白（邊度聽漏咗？）</summary>${P.lines.map(([sp, t]) => `<p class="small"><b>${sp === 'A' ? '🅰️' : '🅱️'}</b> ${esc(t)}</p>`).join('')}</details>
        <div class="grid2"><button class="btn-ghost" data-act="lsReset">🔁 重做</button><a class="btn btn-primary" href="#ielts" data-act="goIelts" data-tab="listen">返聽力列表</a></div>`
        : `<button class="btn-primary btn-big btn-block" data-act="lsSubmit">交卷 ✅</button>`}`;
  };
  function playLines(lines, btn) {
    if (!('speechSynthesis' in window)) { toast('呢部機唔支援讀音'); return; }
    speechSynthesis.cancel(); loadVoices();
    const acc = S.settings.accent;
    let pool = voices.filter(v => v.lang.replace('_', '-') === acc); if (!pool.length) pool = voices.filter(v => v.lang.startsWith('en'));
    const vA = pool[0], vB = pool.find(v => v !== vA) || vA;
    lines.forEach(([sp, text], k) => {
      const u = new SpeechSynthesisUtterance(text); u.lang = acc; u.rate = S.settings.rate;
      const v = sp === 'A' ? vA : vB; if (v) u.voice = v;
      if (sp === 'B' && vB === vA) u.pitch = 1.35;
      if (k === lines.length - 1) u.onend = u.onerror = () => btn && btn.classList.remove('playing');
      speechSynthesis.speak(u);
    });
    if (btn) btn.classList.add('playing');
  }

  // 聽寫：由卡嘅例句同實用句隨機抽
  let DC = null;
  function newDict() {
    const pool = [];
    ALL.forEach(c => { const dk = deckOf(c); if (dk.roots || dk.abbr) return; if (dk.say) pool.push(fill(c.en)); else if (c.ex) pool.push(c.ex); });
    DC = { text: pool[Math.floor(Math.random() * pool.length)], done: false, count: (DC ? DC.count : 0) };
  }
  // 讀音相似：語音辨識成日將 their 聽成 there、hospital 聽成 hospitals，呢啲當你讀啱（黃色）
  function soundKey(w) {
    let k = w.replace(/'/g, '').replace(/ph/g, 'f').replace(/ck/g, 'k').replace(/c(?=[eiy])/g, 's').replace(/[cq]/g, 'k').replace(/x/g, 'ks').replace(/z/g, 's')
      .replace(/gh/g, '').replace(/^kn/, 'n').replace(/^wr/, 'r').replace(/^wh/, 'w').replace(/dg/g, 'j');
    k = k[0] + k.slice(1).replace(/[aeiouyhw]/g, '');
    return k.replace(/(.)\1+/g, '$1');
  }
  function lev(a, b) {
    const d = Array.from({ length: b.length + 1 }, (_, i) => i);
    for (let i = 1; i <= a.length; i++) { let prev = d[0]; d[0] = i; for (let j = 1; j <= b.length; j++) { const t = d[j]; d[j] = Math.min(d[j] + 1, d[j - 1] + 1, prev + (a[i - 1] === b[j - 1] ? 0 : 1)); prev = t; } }
    return d[b.length];
  }
  function soundAlike(a, b) {
    if (a === b) return true; const L = Math.min(a.length, b.length);
    if (L >= 3 && soundKey(a) === soundKey(b)) return true;
    return L >= 4 && a[0] === b[0] && lev(a, b) <= (L >= 7 ? 2 : 1);
  }
  function lcsMark(target, typed, fuzzy) {
    const a = norm(target), b = norm(typed);
    const eq = (x, y) => x === y || (fuzzy && soundAlike(x, y));
    const dp = Array.from({ length: a.length + 1 }, () => Array(b.length + 1).fill(0));
    for (let i = a.length - 1; i >= 0; i--) for (let j = b.length - 1; j >= 0; j--) dp[i][j] = eq(a[i], b[j]) ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
    const hit = new Set(), near = new Set(); let i = 0, j = 0;
    while (i < a.length && j < b.length) { if (eq(a[i], b[j])) { hit.add(i); if (a[i] !== b[j]) near.add(i); i++; j++; } else if (dp[i + 1][j] >= dp[i][j + 1]) i++; else j++; }
    return { words: a, hit, near, acc: a.length ? hit.size / a.length : 0 };
  }
  V.dict = () => {
    if (!DC) newDict();
    let res = '';
    if (DC.done) {
      const m = DC.m;
      res = `<div class="fb ${m.acc >= .9 ? 'ok' : 'no'}" style="margin-top:12px"><b>${Math.round(m.acc * 100)}%</b>　${m.words.map((w, i) => `<span style="${m.hit.has(i) ? 'color:var(--good)' : 'color:var(--bad);text-decoration:underline;font-weight:800'}">${esc(w)}</span>`).join(' ')}
        <div class="small" style="margin-top:6px">原句：${esc(DC.text)}</div></div>
        <button class="btn-primary btn-block" style="margin-top:10px" data-act="dcNext">下一句 →</button>`;
    }
    return `<div class="row" style="flex-wrap:nowrap"><a class="btn icon-btn" href="#ielts" data-act="goIelts" data-tab="listen">‹</a><h1 class="grow">✍️ 聽寫</h1><span class="pill">今次 ${DC.count} 句</span></div>
      <p class="small muted">聽一句，打晒出嚟。練聽力同串字（IELTS 聽力串錯字冇分）。紅色 = 漏咗或者串錯。</p>
      <div class="card center"><div class="grid2"><button class="btn-primary btn-big" data-act="dcPlay">🔊 播放</button><button class="btn-ghost btn-big" data-act="dcSlow">🐢 慢速</button></div></div>
      <textarea id="dcIn" placeholder="聽到乜就打乜…" autocapitalize="sentences" style="min-height:100px" ${DC.done ? 'disabled' : ''}>${esc(DC.typed || '')}</textarea>
      ${DC.done ? res : `<button class="btn-primary btn-block" style="margin-top:10px" data-act="dcCheck">對答案</button>`}`;
  };

  // 文法
  let GQ = null;
  function gramHtml() {
    const stats = {}; S.events.filter(e => e.k === 'gram').forEach(e => { const x = stats[e.cat] || (stats[e.cat] = { n: 0, ok: 0 }); x.n++; if (e.ok) x.ok++; });
    if (!GQ) return `<p class="small muted">香港考生最常錯嘅文法：冠詞、時態、單複數、不可數名詞。每題都有中文解釋。</p>
      <button class="btn-primary btn-big btn-block" data-act="gramStart" data-cat="">🧩 隨機 10 題</button>
      <h2>揀類別</h2><div class="card">${Object.entries(NE.grammarCats).map(([k, t]) => { const s = stats[k];
        return `<div class="row between" style="margin:6px 0"><button class="chip" data-act="gramStart" data-cat="${k}">${esc(t)}</button><span class="small ${s ? '' : 'muted'}">${s ? Math.round(s.ok / s.n * 100) + '%（' + s.n + ' 題）' : '未做'}</span></div>`; }).join('')}</div>`;
    if (GQ.i >= GQ.qs.length) {
      const wrong = GQ.log.filter(x => !x.ok);
      return `<div class="card hero center"><div class="score">${GQ.score}/${GQ.qs.length}</div><p>${GQ.score >= 8 ? '文法好穩陣！🌟' : '錯嘅地方睇清楚解釋 💪'}</p></div>
        ${wrong.length ? `<div class="card"><h3>要留意</h3>${wrong.map(x => { const g = NE.grammar[x.g]; return `<p class="small"><b>${esc(g.q.replace('___', '【' + g.c[g.a] + '】'))}</b><br><span class="muted">${esc(g.why)}</span></p>`; }).join('')}</div>` : ''}
        <div class="grid2"><button class="btn-primary" data-act="gramStart" data-cat="${esc(GQ.cat)}">再嚟 10 題</button><button class="btn-ghost" data-act="gramExit">返回</button></div>`;
    }
    const gi = GQ.qs[GQ.i], g = NE.grammar[gi];
    return `<div class="row" style="flex-wrap:nowrap;margin-bottom:10px"><button class="icon-btn" data-act="gramExit">✕</button><div class="progress grow"><div style="width:${GQ.i / GQ.qs.length * 100}%"></div></div><span class="small muted">${GQ.i + 1}/${GQ.qs.length}</span></div>
      <div class="card flash enter" style="min-height:0;--dc:#8b5cf6"><span class="deck-tag">🧩 ${esc(NE.grammarCats[g.cat])}</span><div class="term sentence">${esc(g.q)}</div></div>
      <div class="choices">${g.c.map((c, k) => { let cls = ''; if (GQ.answered) { if (k === g.a) cls = 'right'; else if (k === GQ.picked) cls = 'wrong'; }
        return `<button class="${cls}" data-act="gramPick" data-k="${k}" ${GQ.answered ? 'disabled' : ''}>${esc(c)}</button>`; }).join('')}</div>
      ${GQ.answered ? `<div class="fb ${GQ.picked === g.a ? 'ok' : 'no'}" style="margin-top:12px">${GQ.picked === g.a ? '✅ 啱！' : '❌ 唔啱'}<br>${esc(g.why)}</div>
        <button class="btn-primary btn-block" style="margin-top:10px" data-act="gramNext">下一題 →</button>` : ''}`;
  }

  // 改寫
  let PP = { i: null, shown: false };
  function paraHtml() {
    if (PP.i == null) PP.i = hashStr(today() + 'p') % NE.paraphrase.length;
    const p = NE.paraphrase[PP.i];
    return `<p class="small muted">用唔同嘅字同句式講同一個意思。寫作開首段要改寫題目，閱讀答案亦成日係原文嘅同義改寫。</p>
      <div class="card" style="border-top:6px solid #22b07d"><div class="small muted">改寫呢句：</div><div class="cue" style="margin-top:4px">${esc(p.src)}</div></div>
      <div class="row" style="flex-wrap:nowrap;align-items:flex-start"><textarea id="paraIn" placeholder="用你自己嘅方法改寫…（可以撳 🎤 講）" style="min-height:90px">${esc(PP.typed || '')}</textarea>
      <button class="speak" data-act="dictate" data-target="paraIn" data-lang="en">🎤</button></div>
      <button class="btn-accent btn-block" style="margin-top:8px" data-act="aiPara">🤖 AI 評分我嘅改寫</button><div id="aiParaBox"></div>
      ${PP.shown ? `<div class="card fade-in" style="margin-top:10px"><h3>參考改寫</h3>${p.m.map(x => `<p>• ${esc(x)}</p>`).join('')}
        <h3 style="margin-top:8px">關鍵替換</h3>${p.k.map(([a, b]) => `<p class="small"><span class="pill">${esc(a)}</span> → <b>${esc(b)}</b></p>`).join('')}
        <div class="note" style="margin-top:8px">💡 ${esc(p.tip)}</div></div>
        <div class="grid2"><button class="btn-ghost" data-act="paraRate" data-v="0">😅 要再練</button><button class="btn-primary" data-act="paraRate" data-v="1">👍 我寫得似</button></div>`
        : `<button class="btn-primary btn-block" style="margin-top:10px" data-act="paraShow">睇參考答案</button>`}`;
  }

  // ===== 講嘢轉文字（iPhone Safari 內置語音辨識，免費）=====
  let DICT = null;
  function dictateInto(el, lang, btn) {
    if (DICT) { DICT.r.stop(); return; }
    if (!SR) { toast(IOS ? '撳鍵盤右下／左下嘅 🎤 講，講完撳鍵盤 ⌨️' : '呢個瀏覽器唔支援，可以直接打字'); el.focus(); return; }
    const r = new SR(); r.lang = lang; r.continuous = true; r.interimResults = true;
    const base = el.value ? el.value.trim() + ' ' : '';
    DICT = { r, btn };
    if (btn) { btn.classList.add('playing'); btn.dataset.old = btn.innerHTML; btn.innerHTML = '⏹️'; }
    r.onresult = e => { let txt = ''; for (const res of e.results) txt += res[0].transcript; el.value = base + txt; el.dispatchEvent(new Event('input', { bubbles: true })); };
    r.onerror = e => { if (e.error !== 'aborted' && e.error !== 'no-speech') toast('語音辨識：' + e.error); };
    r.onend = () => { if (btn) { btn.classList.remove('playing'); btn.innerHTML = btn.dataset.old || '🎤'; } DICT = null; };
    try { r.start(); } catch (e) { DICT = null; toast('未能開始錄音'); }
  }
  function stopDictate() { if (DICT) { try { DICT.r.stop(); } catch (e) { /* 已停 */ } DICT = null; } }

  // ===== AI 評分（Google Gemini 免費 API，key 只存喺呢部機）=====
  const AI_KEY = 'ne_ai';
  let AIC = {}; try { AIC = JSON.parse(localStorage.getItem(AI_KEY) || '{}') || {}; } catch (e) { AIC = {}; }
  const saveAIC = () => { try { localStorage.setItem(AI_KEY, JSON.stringify(AIC)); } catch (e) { /* 冇得存 */ } };
  const aiReady = () => !!AIC.key;
  const AI_KIND = { weekly: '每週學習報告', explain: '錯題解釋', sentence: '造句', essay: '寫作', speak: '口語', speakAudio: '口語（錄音）', sayAudio: '句子（錄音）', para: '改寫', say: '句子講法' };
  const AI_PREF = ['gemini-3.8-flash', 'gemini-3.6-flash', 'gemini-3-flash', 'gemini-3.5-flash-lite', 'gemini-3.1-flash-lite', 'gemini-2.5-flash'];
  async function aiPickModels() {
    const r = await fetchT('https://generativelanguage.googleapis.com/v1beta/models?pageSize=200', { headers: { 'x-goog-api-key': AIC.key } }, 8000);
    if (r.status === 400 || r.status === 401 || r.status === 403) throw new Error('API key 無效');
    if (!r.ok) throw new Error('Gemini 回應 ' + r.status);
    const names = ((await r.json()).models || []).filter(m => (m.supportedGenerationMethods || []).includes('generateContent')).map(m => m.name.replace('models/', ''));
    const flash = names.filter(n => /^gemini-[\d.]+-flash(-lite)?$/.test(n));
    const ordered = AI_PREF.filter(n => names.includes(n)).concat(flash.filter(n => !AI_PREF.includes(n)).sort().reverse());
    if (!ordered.length) throw new Error('搵唔到可用嘅 Flash 型號');
    AIC.models = ordered.slice(0, 6); saveAIC(); return AIC.models;
  }
  // fetch 加超時：之前冇超時，網絡或者型號慢就會一直等
  async function fetchT(url, opts, ms) {
    const ac = new AbortController(); const t = setTimeout(() => ac.abort(), ms);
    try { return await fetch(url, Object.assign({}, opts, { signal: ac.signal })); }
    catch (e) { throw e.name === 'AbortError' ? Object.assign(new Error('timeout'), { timeout: true }) : e; }
    finally { clearTimeout(t); }
  }
  // 短題（句子、改寫）要快：用 Lite 型號、唔開「思考」、限制長度
  const AI_LIMIT = { weekly: { ms: 60000, tok: 1800 }, explain: { ms: 15000, tok: 600, fast: true }, sentence: { ms: 15000, tok: 600, fast: true }, speakAudio: { ms: 80000, tok: 3800 }, sayAudio: { ms: 25000, tok: 900, fast: true }, say: { ms: 10000, tok: 500, fast: true }, para: { ms: 10000, tok: 600, fast: true }, speak: { ms: 45000, tok: 2800 }, essay: { ms: 90000, tok: 4800 } };
  function thinkCfg(m, fast) {
    if (/^gemini-2\.5-flash/.test(m)) return { thinkingBudget: 0 };
    if (/^gemini-3/.test(m)) return { thinkingLevel: fast ? 'minimal' : 'low' };
    return null;
  }
  // ===== AI 用量（Google 唔會話剩幾多，所以喺手機自己數；免費額度喺美國太平洋時間半夜重置）=====
  const ptDay = () => new Date().toLocaleDateString('en-CA', { timeZone: 'America/Los_Angeles' });
  function aiUse(m) {
    if (!AIC.usage || AIC.usage.day !== ptDay()) AIC.usage = { day: ptDay(), m: {} };
    return AIC.usage.m[m] || (AIC.usage.m[m] = { n: 0, tok: 0 });
  }
  function aiResetText() {
    const p = new Intl.DateTimeFormat('en-GB', { timeZone: 'America/Los_Angeles', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).format(new Date()).split(':').map(Number);
    const left = 24 * 60 - (p[0] * 60 + p[1]); const at = new Date(Date.now() + left * 60000);
    return `約 ${Math.floor(left / 60)} 小時 ${left % 60} 分後（香港時間 ${pad(at.getHours())}:00）`;
  }
  function aiUsageHtml(short) {
    if (!aiReady()) return '';
    if (aiProv() === 'qwen') {
      const u = qUse(); const T = AIC.qTot; const tot = T.in + T.out;
      const left = Math.max(0, QWEN_FREE - tot); const cost = (T.in * QWEN_PRICE.in + T.out * QWEN_PRICE.out) / 1e6;
      if (short) return `<p class="small muted" style="margin-top:6px">📊 今日用咗 ${u.n} 次 AI · 免費額度估計剩 ${Math.round(left / QWEN_FREE * 100)}% · <a href="#settings">睇用量</a></p>`;
      return `<div class="card tight" style="margin-top:10px"><b>📊 AI 用量（Qwen）</b>
        <div class="row between small" style="margin:4px 0"><span>今日</span><span>${u.n} 次 · ${u.tok.toLocaleString()} token</span></div>
        <div class="row between small" style="margin:4px 0"><span>由 ${esc(T.since)} 起總共</span><span>${tot.toLocaleString()} token</span></div>
        <div class="row between small" style="margin:4px 0"><span>免費額度（100 萬 token，90 日）</span><b style="color:${left < 100000 ? 'var(--warn)' : 'var(--good)'}">估計剩 ${left.toLocaleString()}</b></div>
        <div class="row between small" style="margin:4px 0"><span>如果要俾錢，大約</span><span>US$${cost.toFixed(3)}（約 HK$${(cost * 7.8).toFixed(2)}）</span></div>
        <p class="small muted" style="margin-top:6px">App 只計呢部手機用嘅量。最準：<a href="https://modelstudio.console.alibabacloud.com/" target="_blank" rel="noopener">阿里雲 Model Studio ↗</a></p></div>`;
    }
    aiUse('_'); delete AIC.usage.m._;
    const ms = (AIC.models || []).slice(); Object.keys(AIC.usage.m).forEach(m => { if (!ms.includes(m)) ms.push(m); });
    const total = Object.values(AIC.usage.m).reduce((a, u) => a + u.n, 0);
    if (short) {
      const full = ms.filter(m => aiUse(m).full).length;
      return `<p class="small muted" style="margin-top:6px">📊 今日用咗 ${total} 次 AI${full ? ` · ${full} 個型號已爆額` : ''} · <a href="#settings">睇用量</a></p>`;
    }
    const rows = ms.map(m => { const u = aiUse(m); const lim = (AIC.limits || {})[m];
      const st = u.full ? '<b style="color:var(--bad)">今日已爆額</b>' : lim ? `<b style="color:${lim - u.n <= 3 ? 'var(--warn)' : 'var(--good)'}">估計剩 ${Math.max(0, lim - u.n)} 次</b>` : '<span class="muted">未知上限</span>';
      return `<div class="row between small" style="margin:4px 0"><span>${esc(m.replace('gemini-', ''))}</span><span>用咗 ${u.n}${lim ? '/' + lim : ''} 次 · ${st}</span></div>`; }).join('');
    return `<div class="card tight" style="margin-top:10px"><b>📊 今日 AI 用量</b>
      ${rows || '<p class="small muted">今日未用過</p>'}
      <p class="small muted" style="margin-top:6px">今日總共 ${total} 次。${aiResetText()}重置。<br>Google 唔會直接話剩幾多次，所以 app 自己數；第一次爆額時會記低 Google 講嘅上限，之後就估到剩幾多。一個型號爆額會自動轉用下一個。<br>
      官方用量：<a href="https://aistudio.google.com/usage" target="_blank" rel="noopener">Google AI Studio ↗</a>（用開 key 嗰個 Google 帳號登入）</p></div>`;
  }
  // ===== AI 供應商：Qwen（阿里雲，香港用得、聽到錄音）或 Gemini（香港用唔到）=====
  const aiProv = () => AIC.provider || (AIC.key && AIC.key.startsWith('AIza') ? 'gemini' : 'qwen');
  const QWEN_URL = 'https://dashscope-intl.aliyuncs.com/compatible-mode/v1/chat/completions';
  // omni 聽到錄音；帳號未驗證時只有 character 型號有免費額度，錄音就先用 ASR 轉文字
  const QWEN_MODELS = ['qwen3.8-omni-flash', 'qwen3.5-omni-flash', 'qwen-plus-character', 'qwen-flash-character'];
  const QWEN_ASR_URL = 'https://dashscope-intl.aliyuncs.com/api/v1/services/aigc/multimodal-generation/generation';
  const QWEN_ASR = 'qwen-audio-3.1-asr-flash';
  const qBad = () => { const d = today(); if (!AIC.qBad || AIC.qBad.day !== d) AIC.qBad = { day: d, m: [] }; return AIC.qBad.m; };
  async function qwenAsr(media, ms) {
    const ac = new AbortController(); const timer = setTimeout(() => ac.abort(), ms);
    try {
      const fmt = media.mime === 'audio/wav' ? 'wav' : (media.mime.split('/')[1] || 'mp3').replace('mpeg', 'mp3');
      const r = await fetch(QWEN_ASR_URL, { method: 'POST', signal: ac.signal, headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + AIC.key },
        body: JSON.stringify({ model: QWEN_ASR, input: { messages: [{ role: 'user', content: [{ type: 'input_audio', input_audio: { data: 'data:' + media.mime + ';base64,' + media.data } }] }] }, parameters: fmt === 'wav' ? { format: 'wav', sample_rate: '16000' } : { format: fmt } }) });
      const t = await r.text(); let j = {}; try { j = JSON.parse(t); } catch (e) { /* 唔係 JSON */ }
      if (!r.ok) throw Object.assign(new Error('錄音轉文字失敗（' + (j.code || r.status) + '）'), { fatal: r.status === 401 });
      const o = j.output || {}; const c = o.choices && o.choices[0] && o.choices[0].message && o.choices[0].message.content;
      const txt = (o.text || (o.sentence && o.sentence.text) || (Array.isArray(c) ? c.map(x => x.text || '').join(' ') : c) || '').trim();
      if (j.usage) { const u = qUse(); u.tok += j.usage.total_tokens || 0; }
      return txt;
    } catch (e) {
      if (e.name === 'AbortError') throw new Error('錄音轉文字太慢（超時），再試一次');
      throw e;
    } finally { clearTimeout(timer); }
  }
  const QWEN_FREE = 1000000; // 新帳號每個型號 100 萬 token（90 日）
  const QWEN_PRICE = { in: 0.15, out: 0.47 }; // US$／100 萬 token（qwen3.8-omni-flash 國際版）
  function qUse() {
    const d = today(); if (!AIC.qDay || AIC.qDay.day !== d) AIC.qDay = { day: d, n: 0, tok: 0 };
    if (!AIC.qTot) AIC.qTot = { in: 0, out: 0, since: d }; return AIC.qDay;
  }
  async function aiCall(prompt, kind, media) {
    if (!aiReady()) throw new Error('未設定 AI（設定 → AI 評分）');
    if (!navigator.onLine) throw new Error('要有網先用到 AI');
    return aiProv() === 'qwen' ? qwenCall(prompt, kind, media) : geminiCall(prompt, kind, media);
  }
  // ===== AI 進度條：按時間 + 已收到嘅內容估算 0–100% =====
  let AIPROG = null;
  const progHtml = (id, label) => `<div class="card aiprog"><div class="row between small"><span id="${id}L">${label}</span><b id="${id}P">0%</b></div><div class="progress" style="margin-top:6px"><div id="${id}B" style="width:0%"></div></div><div class="small muted" id="${id}S" style="margin-top:4px">0 秒</div></div>`;
  function progStart(id, kind, label) {
    const L = AI_LIMIT[kind] || AI_LIMIT.speak; const expSec = L.fast ? 5 : L.tok > 3000 ? 30 : 15; const expChars = L.tok * 2.6;
    progStop(); AIPROG = { id, t0: Date.now(), got: 0 };
    AIPROG.iv = setInterval(() => {
      const P = AIPROG; if (!P) return; const sec = (Date.now() - P.t0) / 1000;
      const byTime = 1 - Math.exp(-sec / expSec * 1.6); const byText = Math.min(1, P.got / expChars);
      const pct = Math.min(97, Math.round((P.got ? .35 + .65 * Math.max(byText, byTime * .6) : byTime * .4) * 100));
      const b = document.getElementById(id + 'B'), t = document.getElementById(id + 'P'), st = document.getElementById(id + 'S');
      if (b) b.style.width = pct + '%'; if (t) t.textContent = pct + '%';
      if (st) st.textContent = Math.round(sec) + ' 秒 · ' + (P.got ? 'AI 寫緊報告…' : 'AI 睇緊你嘅內容…');
      if (label) { const l = document.getElementById(id + 'L'); if (l && l.textContent !== label) l.textContent = label; }
    }, 300);
  }
  function progStop() { if (AIPROG) { clearInterval(AIPROG.iv); const b = document.getElementById(AIPROG.id + 'B'), t = document.getElementById(AIPROG.id + 'P'); if (b) b.style.width = '100%'; if (t) t.textContent = '100%'; } AIPROG = null; }
  async function qwenCall(prompt, kind, media) {
    const L = AI_LIMIT[kind] || AI_LIMIT.speak;
    const bad = qBad(); const models = QWEN_MODELS.filter(m => !bad.includes(m));
    let last = '', heard = null;
    for (const m of models) {
      const content = []; let text = prompt;
      if (media && m.includes('omni')) content.push({ type: 'input_audio', input_audio: { data: 'data:;base64,' + media.data, format: media.mime === 'audio/wav' ? 'wav' : (media.mime.split('/')[1] || 'mp3').replace('mp4', 'm4a') } });
      else if (media) {
        if (heard === null) heard = await qwenAsr(media, L.ms);
        if (!heard) throw new Error('聽唔到你講嘢：錄大聲啲、近啲再試');
        text += `\n\nIMPORTANT: no audio is attached. Speech recognition turned her recording into: "${heard}". Use exactly this as "transcript". You cannot hear her: only list a word in "pron" if the recognition clearly mis-heard it (a sign it was mispronounced), and judge Pronunciation mainly from that.`;
      }
      content.push({ type: 'text', text });
      const ac = new AbortController(); const timer = setTimeout(() => ac.abort(), L.ms);
      try {
        const r = await fetch(QWEN_URL, { method: 'POST', signal: ac.signal, headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + AIC.key },
          body: JSON.stringify({ model: m, messages: [{ role: 'user', content }], stream: true, stream_options: { include_usage: true }, modalities: ['text'], max_tokens: L.tok, temperature: 0.3 }) });
        if (!r.ok) {
          const t = await r.text().catch(() => '');
          if (r.status === 401 || /InvalidApiKey/i.test(t)) throw Object.assign(new Error('API key 無效（要用 Singapore 地區嘅 key）'), { fatal: true });
          const code = ((t.match(/"code"\s*:\s*"([^"]+)"/) || [])[1] || r.status) + '';
          if (/Arrearage|overdue/i.test(t)) throw Object.assign(new Error('阿里雲戶口未俾錢或者未驗證付款方式（' + code + '）'), { fatal: true });
          if (/Unpurchased/i.test(t)) { bad.push(m); saveAIC(); last = '阿里雲型號未開通：帳號驗證完先用得（' + code + '）'; continue; }
          if (/FreeTierOnly|free tier/i.test(t)) { last = m + ' 免費額度用完，而你開咗「免費額度用完即停」（' + code + '）'; continue; }
          if (r.status === 429) { last = '用得太密，等一分鐘再試'; continue; }
          if (r.status === 404 || /model.*(not|exist)|InvalidModel/i.test(t)) { last = '型號唔存在'; continue; }
          last = 'Qwen 回應 ' + code; continue;
        }
        const reader = r.body.getReader(); const dec = new TextDecoder(); let buf = '', txt = '', usage = null;
        for (;;) {
          const { value, done } = await reader.read(); if (done) break;
          buf += dec.decode(value, { stream: true }); const lines = buf.split('\n'); buf = lines.pop();
          for (const ln of lines) {
            if (!ln.startsWith('data:')) continue;
            const d = ln.slice(5).trim(); if (!d || d === '[DONE]') continue;
            try { const j = JSON.parse(d); const c = j.choices && j.choices[0]; if (c && c.delta && c.delta.content) { txt += c.delta.content; if (AIPROG) AIPROG.got = txt.length; } if (j.usage) usage = j.usage; } catch (e) { /* 唔完整 */ }
          }
        }
        const u = qUse(); u.n++;
        if (usage) { u.tok += usage.total_tokens || 0; AIC.qTot.in += usage.prompt_tokens || 0; AIC.qTot.out += usage.completion_tokens || 0; }
        AIC.qModel = m; saveAIC();
        const jsonTxt = (txt.match(/\{[\s\S]*\}/) || [''])[0];
        try { const out = JSON.parse(jsonTxt); out._model = m; return out; } catch (e) { last = 'AI 回覆格式有問題，再試一次'; }
      } catch (e) {
        if (e.fatal) throw e;
        last = e.name === 'AbortError' ? 'AI 太慢（超時），試下再撳一次' : '網絡有問題';
      } finally { clearTimeout(timer); }
    }
    throw new Error(last || 'AI 暫時用唔到');
  }
  async function geminiCall(prompt, kind, media) {
    const L = AI_LIMIT[kind] || AI_LIMIT.speak;
    let models = AIC.models && AIC.models.length ? AIC.models : await aiPickModels();
    if (L.fast) models = models.filter(m => /lite/.test(m)).concat(models.filter(m => !/lite/.test(m)));
    let last = '';
    const avail = models.filter(m => !aiUse(m).full); if (avail.length) models = avail;
    for (const m of models) {
      const gen = { temperature: 0.3, responseMimeType: 'application/json', maxOutputTokens: L.tok };
      let tc = AIC.noThink && AIC.noThink[m] ? null : thinkCfg(m, L.fast);
      let r;
      for (let attempt = 0; attempt < 2; attempt++) {
        const body = { contents: [{ role: 'user', parts: (media ? [{ inline_data: { mime_type: media.mime, data: media.data } }] : []).concat([{ text: prompt }]) }], generationConfig: tc ? Object.assign({ thinkingConfig: tc }, gen) : gen };
        try {
          r = await fetchT(`https://generativelanguage.googleapis.com/v1beta/models/${m}:generateContent`, {
            method: 'POST', headers: { 'Content-Type': 'application/json', 'x-goog-api-key': AIC.key }, body: JSON.stringify(body)
          }, L.ms);
        } catch (e) { r = null; last = e.timeout ? 'AI 太慢（超時），試下再撳一次' : '網絡有問題'; break; }
        if (r.status === 400 && tc) {
          const t = await r.text();
          if (/API_KEY|api key/i.test(t)) throw new Error('API key 無效或冇權限');
          AIC.noThink = Object.assign({}, AIC.noThink, { [m]: 1 }); saveAIC(); tc = null; continue; // 呢個型號唔支援思考設定，唔加再試
        }
        break;
      }
      if (!r) continue;
      if (r.status === 429) {
        const t = await r.text().catch(() => '');
        const daily = /PerDay/i.test(t); const lim = Number((t.match(/"quotaValue"\s*:\s*"?(\d+)/) || [])[1]) || null;
        const u = aiUse(m); if (daily) { u.full = Date.now(); if (lim) AIC.limits = Object.assign({}, AIC.limits, { [m]: lim }); } else u.rpm = Date.now(); saveAIC();
        last = daily ? `今日免費額度用完（${aiResetText()}重置）` : '用得太密，等一分鐘再試'; continue;
      }
      if (r.status === 404) { last = '型號唔存在'; AIC.models = null; saveAIC(); continue; }
      if (r.status === 400 || r.status === 401 || r.status === 403) throw new Error('API key 無效或冇權限');
      if (!r.ok) { last = 'Gemini 回應 ' + r.status; continue; }
      const j = await r.json();
      const u = aiUse(m); u.n++; u.tok += ((j.usageMetadata || {}).totalTokenCount || 0); saveAIC();
      const txt = (((j.candidates || [])[0] || {}).content || { parts: [] }).parts.map(p => p.text || '').join('');
      try { const out = JSON.parse(txt.replace(/^```(json)?|```$/g, '').trim()); out._model = m; return out; } catch (e) { last = 'AI 回覆格式有問題，再試一次'; }
    }
    throw new Error(last || 'AI 暫時用唔到');
  }
  const AI_ROLE = 'You are a friendly, honest IELTS examiner and English tutor for a 23-year-old Hong Kong enrolled nurse aiming for IELTS band 6.0–6.5. Explanations must be in Traditional Chinese characters (繁體字, Hong Kong Cantonese style, e.g. 你嘅、係、唔; NEVER Simplified Chinese), simple and encouraging. Corrections and model answers must be in English. Be accurate about IELTS band descriptors; do not inflate scores. Reply with JSON only.';
  const REPORT_JSON = (crit, extra) => `"criteria": {${crit.map(c => `"${c}": band`).join(', ')}}, "detail": [${crit.map(c => `{"name": "${c}", "band": band, "evidence": "Chinese: which descriptor level her work matches and why, quoting her exact words", "good": "Chinese: what she did well for this criterion", "improve": "Chinese: the specific change needed to reach the next band", "example": "her words → improved English"}`).join(', ')}], "next": ["Chinese: the 3 most important things to practise next, most important first"]${extra || ''}`;
  const STRICT = 'Mark STRICTLY against the descriptors below like a trained IELTS examiner: give each criterion the highest band whose positive features are ALL present; do not reward effort or inflate; use 0.5 steps only for the overall band.';
  const AI_PROMPTS = {
    weekly: (d) => `${AI_ROLE}
Write a short weekly learning report for her from this app data (last 7 days). Be specific: use the numbers, deck names and words given. Be honest but encouraging.
Exam date: ${d.exam || 'not set'}; target band: ${d.target}.
DATA: ${d.data}
Return JSON: {"summary": "Chinese, 2-3 sentences overview of this week", "strengths": ["Chinese, specific" max 3], "improve": ["Chinese, specific weak areas with numbers" max 4], "plan": ["Chinese: concrete daily actions for next week, e.g. which deck, which IELTS skill, how many minutes" max 5], "focusWords": ["English words she keeps getting wrong" max 8], "encourage": "Chinese, one warm sentence"}`,
    explain: (d) => `${AI_ROLE}
She is learning English vocabulary for nursing work and IELTS. Target: "${d.en}" = ${d.zh} (${d.def}).
Quiz type: ${d.type}. Her wrong answer: "${d.wrong}"${d.wrongZh ? ' (= ' + d.wrongZh + ')' : ''}.
Explain briefly why her answer is wrong and how the two differ, give a memory trick, and two short example sentences using the target in a hospital or IELTS context.
Return JSON: {"summary": "Chinese, 2-3 sentences: why it is wrong and the difference", "tip": "Chinese memory trick (word parts, sound, picture or a hospital situation)", "examples": ["English sentence", "English sentence"]}`,
    sentence: (d) => `${AI_ROLE}
She has just learned "${d.en}" (${d.zh}; ${d.def}). Her own sentence: "${d.text}".
Check if the word is used with the right meaning, grammar and collocation. Be encouraging; small mistakes are fine to fix.
Return JSON: {"score": 0-10, "ok": true if the word is used correctly, "summary": "Chinese, 1-2 sentences", "corrections": [{"wrong": "...", "right": "...", "why": "Chinese"} max 3], "better": "her sentence improved, in English", "examples": ["one more natural example using the word"]}`,
    essay: (d) => `${AI_ROLE}
Assess this IELTS Academic Writing Task ${d.task} response (minimum ${d.task === 2 ? 250 : 150} words; it has ${d.wc} words).
Question: ${d.q}
${d.extra || ''}
Response:
"""${d.text}"""
${STRICT}
${NE.rubricText(d.task === 2 ? 'writing2' : ['writing1', 'writing2'])}
${d.task === 1 ? '(For Task 1 use Task Achievement instead of Task Response; the other 3 criteria are the same as Task 2.)' : ''}
Return JSON: {"band": overall band = average of the 4 criteria rounded to nearest 0.5, ${REPORT_JSON([d.task === 2 ? 'Task Response' : 'Task Achievement', 'Coherence and Cohesion', 'Lexical Resource', 'Grammatical Range and Accuracy'])}, "summary": "2-3 sentences in Chinese", "strengths": ["Chinese", ...max 3], "improve": ["specific Chinese advice", ...max 4], "corrections": [{"wrong": "exact phrase from the text", "right": "corrected English", "why": "short Chinese reason"} ...max 8 most important], "better": "one improved version of her weakest paragraph in English"}`,
    speak: (d) => `${AI_ROLE}
This is a speech-to-text transcript of her spoken answer to IELTS Speaking Part ${d.part}. Speech recognition may contain small errors; ignore punctuation and obvious recognition mistakes. You cannot hear pronunciation, so do not score it.
Question: ${d.q}
Transcript: """${d.text}"""
${STRICT}
${NE.rubricText('speaking')}
Return JSON: {"band": estimated band from fluency, vocabulary and grammar only (number, 0.5 steps), ${REPORT_JSON(['Fluency and Coherence', 'Lexical Resource', 'Grammatical Range and Accuracy'])}, "summary": "Chinese", "strengths": ["Chinese" max 3], "improve": ["Chinese" max 3], "corrections": [{"wrong": "...", "right": "...", "why": "Chinese"} max 6], "better": "a natural band-7 answer to the same question in English, about ${d.part === 2 ? 180 : 60} words, using her ideas"}`,
    para: (d) => `${AI_ROLE}
She is practising paraphrasing for IELTS. Original: "${d.src}"
Her paraphrase: "${d.text}"
Return JSON: {"score": 0-10, "sameMeaning": true/false, "summary": "Chinese: does it keep the meaning, how different is the wording", "corrections": [{"wrong": "...", "right": "...", "why": "Chinese"} max 4], "better": "one strong paraphrase in English"}`,
    speakAudio: (d) => `${AI_ROLE}
The attached audio (${d.dur} seconds) is her spoken answer to IELTS Speaking Part ${d.part}. Listen carefully.
Question: ${d.q}
First transcribe exactly what she said (keep her grammar mistakes, mark long pauses as "..."). Then assess like an IELTS examiner, including pronunciation from the audio. If the audio is silent or not English, say so in summary and give band 0.
${STRICT}
${NE.rubricText('speaking')}
Return JSON: {"transcript": "...", "band": overall band = average of the 4 criteria rounded to nearest 0.5, ${REPORT_JSON(['Fluency and Coherence', 'Lexical Resource', 'Grammatical Range and Accuracy', 'Pronunciation'])}, "summary": "2-3 sentences in Chinese", "strengths": ["Chinese" max 3], "improve": ["Chinese" max 3], "corrections": [{"wrong": "exact words she said", "right": "better English", "why": "Chinese"} max 6], "pron": [{"word": "word she mispronounced", "tip": "Chinese tip on how to say it"} max 5], "better": "a natural band-7 answer to the same question in English, about ${d.part === 2 ? 180 : 60} words, using her ideas"}`,
    sayAudio: (d) => `${AI_ROLE}
Situation for a nurse in Hong Kong: "${d.ctx}". She wanted to say (Chinese): "${d.zh}". Model English: "${d.model}".
The attached audio (${d.dur} seconds) is her saying it. Listen carefully.
1) Transcribe exactly what she said. 2) Judge the MEANING: other correct, polite wordings are fine; do not punish small differences from the model. 3) Judge PRONUNCIATION: she has a Hong Kong accent, which is fine; only flag words that would be hard for a patient or colleague to understand.
Return JSON: {"transcript": "...", "score": 0-10, "ok": true if the meaning is right and understandable, "summary": "Chinese, 1-2 sentences", "corrections": [{"wrong": "...", "right": "...", "why": "Chinese"} max 3], "pron": [{"word": "...", "tip": "Chinese tip"} max 4], "better": "most natural version in English"}`,
    say: (d) => `${AI_ROLE}
Situation for a nurse in Hong Kong: "${d.ctx}". She wanted to say (Chinese): "${d.zh}". Model English: "${d.model}".
What she said (speech-to-text or typed): "${d.text}"
Is her sentence correct, natural and polite enough for a hospital? Other correct wordings are fine.
Return JSON: {"score": 0-10, "ok": true/false, "summary": "Chinese", "corrections": [{"wrong": "...", "right": "...", "why": "Chinese"} max 4], "better": "most natural version in English"}`
  };
  async function runAI(kind, data, boxId, ref) {
    const box = document.getElementById(boxId); if (!box) return;
    if (!aiReady()) { box.innerHTML = `<div class="note">🤖 未設定 AI。去 <a href="#settings">設定 → AI 評分</a> 貼上 AI key（Ben 會幫你）。</div>`; return; }
    const t0 = Date.now(); const fastK = (AI_LIMIT[kind] || {}).fast;
    box.innerHTML = progHtml(boxId + 'G', '🤖 AI 處理中（' + (fastK ? '通常 2–5 秒' : '通常 10–30 秒') + '）');
    progStart(boxId + 'G', kind); const tick = 0;
    try {
      const res = await aiCall(AI_PROMPTS[kind](data), kind, data.audio ? { mime: data.mime, data: data.audio } : null).finally(() => { clearInterval(tick); progStop(); });
      logEv({ k: 'ai', kind, ref: ref || '', band: typeof res.band === 'number' ? res.band : null, score: typeof res.score === 'number' ? res.score : null, input: String(data.audio ? '[錄音 ' + data.dur + ' 秒] ' + (res.transcript || '') : data.text).slice(0, 3000), res });
      if (kind === 'essay' && S.drafts[ref]) S.drafts[ref].ai = { at: Date.now(), res };
      let rid = '';
      if (kind === 'explain' && QZ) QZ.expRes = res;
      if (kind === 'weekly') { S.weekly.push({ id: 'w' + Date.now(), t: Date.now(), res }); if (S.weekly.length > 60) S.weekly.splice(0, S.weekly.length - 60); }
      if (kind === 'sentence' && SES) SES.sentRes = res;
      if (REPORT_KINDS[kind]) {
        rid = 'r' + Date.now();
        S.reports.push({ id: rid, t: Date.now(), kind, task: data.task || null, part: data.part || null, q: String(data.q || '').slice(0, 600), input: String(data.audio ? (res.transcript || '') : data.text || '').slice(0, 4000), dur: data.dur || null, res });
        if (S.reports.length > 300) S.reports.splice(0, S.reports.length - 300);
      }
      logToday().ex += 3; save(); checkGoal();
      const b = document.getElementById(boxId); if (b) b.innerHTML = aiResultHtml(res, rid);
      if ((res.band || 0) >= 6.5 || (res.score || 0) >= 8) confetti(60);
    } catch (e) { const b = document.getElementById(boxId); if (b) b.innerHTML = `<div class="fb no">🤖 ${esc(e.message)}</div>`; }
  }
  const REPORT_KINDS = { essay: '✍️ 寫作', speak: '🎤 口語（打字）', speakAudio: '🎤 口語（錄音）', mock: '🎙️ 模擬口試' };
  const bandColor = b => b >= 7 ? 'var(--good)' : b >= 6 ? 'var(--primary)' : b >= 5 ? 'var(--warn)' : 'var(--bad)';
  function reportTable(r) {
    if (!r.detail || !r.detail.length) return '';
    const lvl = b => b >= 7 ? '好' : b >= 6 ? '中上' : b >= 5 ? '要加強' : '弱';
    return `<h3 style="margin-top:12px">📋 逐項評分（跟 IELTS 官方準則）</h3>
    <table class="data"><tr><th>評分項目</th><th style="text-align:center">分數</th><th>評價</th></tr>${r.detail.map(x => `<tr><td>${esc(x.name)}</td><td style="text-align:center"><b style="color:${bandColor(+x.band)}">${esc(x.band)}</b></td><td class="small" style="color:${bandColor(+x.band)}">${lvl(+x.band)}</td></tr>`).join('')}</table>
    ${r.detail.map(x => `<div class="rcrit" style="border-left:5px solid ${bandColor(+x.band)}"><div class="row between"><b>${esc(x.name)}</b><b style="font-size:20px;color:${bandColor(+x.band)}">${esc(x.band)}</b></div>
      ${x.evidence ? `<div class="small muted" style="margin:4px 0">${esc(x.evidence)}</div>` : ''}
      ${x.good ? `<p class="small" style="margin:6px 0">✅ <b>做得好：</b>${esc(x.good)}</p>` : ''}
      ${x.improve ? `<p class="small" style="margin:6px 0">🔧 <b>要改善：</b>${esc(x.improve)}</p>` : ''}
      ${x.example ? `<div class="ex small">${esc(x.example)}</div>` : ''}</div>`).join('')}
    ${r.next && r.next.length ? `<h3 style="margin-top:12px">🎯 下一步最重要</h3><ol class="small" style="margin:4px 0 0 18px">${r.next.map(x => `<li style="margin:4px 0">${esc(x)}</li>`).join('')}</ol>` : ''}`;
  }
  function aiResultHtml(r, rid) {
    const head = typeof r.band === 'number' ? `<div class="score" style="font-size:44px">Band ${esc(r.band)}</div>` : typeof r.score === 'number' ? `<div class="score" style="font-size:44px">${esc(r.score)}/10</div>` : '';
    const crit = r.criteria ? Object.entries(r.criteria).map(([k, v]) => `<div class="row between small" style="margin:3px 0"><span>${esc(k)}</span><b>${esc(v)}</b></div>`).join('') : '';
    const list = (t, xs) => xs && xs.length ? `<h3 style="margin-top:10px">${t}</h3>${xs.map(x => `<p class="small" style="margin:4px 0">• ${esc(x)}</p>`).join('')}` : '';
    return `<div class="card fade-in" style="border-top:6px solid #8b5cf6"><div class="center">${head}</div>
      ${r.transcript ? `<h3 style="margin-top:6px">📝 AI 聽到你講</h3><div class="ex small">${esc(r.transcript)}</div>` : ''}
      ${r.summary ? `<p>${esc(r.summary)}</p>` : ''}${r.detail && r.detail.length ? reportTable(r) : crit + list('💪 做得好', r.strengths) + list('🎯 點樣改進', r.improve)}
      ${r.corrections && r.corrections.length ? `<h3 style="margin-top:10px">✏️ 改正</h3>${r.corrections.map(c => `<p class="small" style="margin:6px 0"><span style="color:var(--bad);text-decoration:line-through">${esc(c.wrong)}</span> → <b style="color:var(--good)">${esc(c.right)}</b><br><span class="muted">${esc(c.why)}</span></p>`).join('')}` : ''}
      ${r.pron && r.pron.length ? `<h3 style="margin-top:10px">🗣️ 發音要留意</h3>${r.pron.map(x => `<p class="small" style="margin:6px 0"><b>${esc(x.word)}</b> ${spk(x.word)}<br><span class="muted">${esc(x.tip)}</span></p>`).join('')}` : ''}
      ${r.plan && r.plan.length ? `<h3 style="margin-top:10px">🗓️ 下星期計劃</h3><ol class="small" style="margin:4px 0 0 18px">${r.plan.map(x => `<li style="margin:4px 0">${esc(x)}</li>`).join('')}</ol>` : ''}
      ${r.focusWords && r.focusWords.length ? `<h3 style="margin-top:10px">🎯 重點溫習字</h3><div class="row">${r.focusWords.map(w => `<span class="pill">${esc(w)}</span>`).join('')}</div>` : ''}
      ${r.encourage ? `<div class="note" style="margin-top:10px">💖 ${esc(r.encourage)}</div>` : ''}
      ${r.tip ? `<div class="note" style="margin-top:10px">💡 ${esc(r.tip)}</div>` : ''}
      ${r.examples && r.examples.length ? `<h3 style="margin-top:10px">📝 例句</h3>${r.examples.map(x => `<div class="ex small" style="margin:6px 0">${esc(x)} ${spk(x)}</div>`).join('')}` : ''}
      ${r.better ? `<h3 style="margin-top:10px">⭐ 參考寫法</h3><div class="ex small">${esc(r.better)} ${spk(r.better)}</div>` : ''}
      ${rid ? `<div class="grid2 no-print" style="margin-top:12px"><a class="btn btn-ghost" href="#report/${rid}">📄 完整報告／PDF</a><a class="btn btn-ghost" href="#reports">📈 所有報告</a></div><p class="small muted no-print">✅ 報告已自動儲存${syncReady() ? '，並會同步去 GitHub 備份' : ''}。</p>` : ''}
      ${typeof r.band === 'number' ? '<p class="small muted" style="margin-top:8px">AI 評分只供參考，同真考官可能有差距（±0.5–1）。</p>' : ''}${aiUsageHtml(true)}</div>`;
  }

  // ===== 學習報告（App AI 簡短版 + Claude 詳細版）=====
  function weeklyData() {
    const ins = insights(7); const since = Date.now() - 7 * 864e5;
    const reps = S.reports.filter(x => x.t >= since).map(x => ({ kind: x.kind, band: x.res.band, criteria: x.res.criteria }));
    let n = 0, r = 0, ex = 0; for (let k = 0; k < 7; k++) { const L = S.log[addDays(today(), -k)]; if (L) { n += L.n || 0; r += L.r || 0; ex += L.ex || 0; } }
    return JSON.stringify({ newCards: n, reviews: r, practice: ex, activeDays: ins.activeDays, strongDecks: ins.strengths, weakDecks: ins.weaknesses, quizTypes: ins.quizTypes, mostMissed: ins.mostMissed.slice(0, 10).map(x => x.en + ' (' + x.zh + ') x' + x.misses), skills: ins.skills, aiReports: reps, totalLearned: Object.keys(S.cards).length });
  }
  const mdHtml = md => {
    const lines = md.replace(/\r/g, '').split('\n'); let out = '', inList = false, tbl = [];
    const inline = t => esc(t).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/`(.+?)`/g, '<code>$1</code>');
    const flushT = () => { if (tbl.length) { const rows = tbl.filter(r => !/^\s*\|?\s*:?-{2,}/.test(r)).map(r => r.replace(/^\s*\||\|\s*$/g, '').split('|').map(x => x.trim()));
      out += `<div style="overflow-x:auto"><table class="data">${rows.map((r, i) => `<tr>${r.map(x => i ? `<td>${inline(x)}</td>` : `<th>${inline(x)}</th>`).join('')}</tr>`).join('')}</table></div>`; tbl = []; } };
    lines.forEach(l => {
      if (/^\s*\|/.test(l)) { if (inList) { out += '</ul>'; inList = false; } tbl.push(l); return; } flushT();
      const h = l.match(/^(#{1,3})\s+(.*)/); const li = l.match(/^\s*[-*]\s+(.*)/);
      if (li) { if (!inList) { out += '<ul class="small" style="margin:4px 0 8px 18px">'; inList = true; } out += `<li style="margin:3px 0">${inline(li[1])}</li>`; return; }
      if (inList) { out += '</ul>'; inList = false; }
      if (h) out += `<h${h[1].length + 1} style="margin-top:12px">${inline(h[2])}</h${h[1].length + 1}>`; else if (l.trim()) out += `<p class="small">${inline(l)}</p>`;
    });
    if (inList) out += '</ul>'; flushT(); return out;
  };
  V.mock = mockView;
  V.coach = () => {
    const W = S.weekly.slice().reverse();
    return `<div class="row" style="flex-wrap:nowrap"><a class="btn icon-btn" href="#stats">‹</a><h1 class="grow">📊 學習報告</h1></div>
      <div class="card"><b>🤖 AI 簡短週報</b><p class="small muted">App 入面嘅 AI 會睇你最近 7 日嘅紀錄：強項、弱項、下星期點做。大約 10–30 秒。</p>
        <button class="btn-primary btn-block" data-act="weeklyGo">生成今個星期嘅報告</button><div id="aiWeekBox"></div></div>
      ${W.length ? `<h2>之前嘅週報</h2>${W.map(x => `<details class="subj"><summary><b>${repDate(x.t)}</b> <span class="small muted">${esc((x.res.summary || '').slice(0, 40))}…</span></summary>${aiResultHtml(x.res, '')}</details>`).join('')}` : ''}
      <div class="card" style="margin-top:14px"><b>🧠 Claude 詳細報告</b><p class="small muted">Ben 叫 Claude 詳細分析你嘅紀錄之後，報告會出現喺度（儲存喺你嘅私人 GitHub）。</p><div id="claudeList">${syncReady() ? '載入中…' : '要先喺「設定 → 同步」連接 GitHub 先睇到。'}</div></div>`;
  };
  async function loadClaudeList() {
    const el = $('#claudeList'); if (!el || !syncReady()) return;
    try {
      const xs = (await ghGet(CLAUDE_DIR) || []).filter(x => x.type === 'file' && /\.md$/.test(x.name)).sort((a, b) => b.name.localeCompare(a.name));
      el.innerHTML = xs.length ? xs.map(x => `<a class="card tight" href="#creport/${encodeURIComponent(x.name)}" style="display:block;color:inherit;text-decoration:none;margin:6px 0">🧠 <b>${esc(x.name.replace(/\.md$/, ''))}</b></a>`).join('') : '<p class="small muted">暫時未有。</p>';
    } catch (e) { el.innerHTML = `<p class="small muted">載入唔到：${esc(e.message)}</p>`; }
  }
  V.creport = name => `<div class="row no-print" style="flex-wrap:nowrap"><a class="btn icon-btn" href="#coach">‹</a><h1 class="grow">🧠 ${esc(name.replace(/\.md$/, ''))}</h1><button class="btn-accent" data-act="printReport">🖨️ PDF</button></div><div class="card" id="creportBody">載入中…</div>`;
  async function loadClaudeReport(name) {
    const el = $('#creportBody'); if (!el) return;
    try { const f = await ghGet(CLAUDE_DIR + '/' + name); el.innerHTML = f && f.content ? mdHtml(b64dec(f.content)) : '搵唔到報告'; }
    catch (e) { el.innerHTML = `載入唔到：${esc(e.message)}`; }
  }

  // ===== AI 報告紀錄 =====
  const repTitle = x => (REPORT_KINDS[x.kind] || x.kind) + (x.task ? ' Task ' + x.task : x.part ? ' Part ' + x.part : '');
  const repDate = t => { const d = new Date(t); return fmt(d) + ' ' + String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0'); };
  function trendSvg(xs) {
    if (xs.length < 2) return '<p class="small muted">做多 2 次就會見到進步圖。</p>';
    const W = 320, H = 120, lo = 3, hi = 9, px = i => 20 + i * (W - 30) / (xs.length - 1), py = b => H - 15 - (b - lo) / (hi - lo) * (H - 30);
    const pts = xs.map((b, i) => px(i) + ',' + py(b)).join(' ');
    return `<svg viewBox="0 0 ${W} ${H}" style="width:100%;max-width:480px">${[5, 6, 7, 8].map(b => `<line x1="20" x2="${W - 10}" y1="${py(b)}" y2="${py(b)}" stroke="var(--line)"/><text x="2" y="${py(b) + 4}" font-size="10" fill="var(--muted)">${b}</text>`).join('')}
      <polyline points="${pts}" fill="none" stroke="var(--primary)" stroke-width="2.5"/>${xs.map((b, i) => `<circle cx="${px(i)}" cy="${py(b)}" r="3.5" fill="${bandColor(b)}"/>`).join('')}</svg>`;
  }
  function critCompare(list) {
    const names = [...new Set(list.flatMap(x => Object.keys(x.res.criteria || {})))]; if (!names.length) return '';
    const avg = (xs, n) => { const v = xs.map(x => +((x.res.criteria || {})[n])).filter(v => !isNaN(v)); return v.length ? (v.reduce((a, b) => a + b, 0) / v.length).toFixed(1) : '–'; };
    const first = list.slice(0, 3), last = list.slice(-3);
    return `<table class="data"><tr><th>評分項目</th><th>頭 3 次平均</th><th>最近 3 次平均</th></tr>${names.map(n => { const a = avg(first, n), b = avg(last, n); const up = b !== '–' && a !== '–' ? (+b - +a) : 0;
      return `<tr><td>${esc(n)}</td><td>${a}</td><td><b style="color:${up > 0 ? 'var(--good)' : up < 0 ? 'var(--bad)' : 'inherit'}">${b}${up > 0 ? ' ↑' : up < 0 ? ' ↓' : ''}</b></td></tr>`; }).join('')}</table>`;
  }
  V.reports = () => {
    const R = S.reports.slice().reverse();
    const grp = [['✍️ 寫作', S.reports.filter(x => x.kind === 'essay')], ['🎤 口語', S.reports.filter(x => x.kind !== 'essay')]];
    return `<div class="row" style="flex-wrap:nowrap"><a class="btn icon-btn" href="#ielts">‹</a><h1 class="grow">📈 我嘅 AI 報告</h1></div>
      <p class="small muted">每次寫作／口語 AI 評分都會自動儲存喺度${syncReady() ? '，同埋同步去 GitHub 備份' : ''}。撳入去可以睇完整報告同匯出 PDF。</p>
      ${grp.map(([t, xs]) => xs.length ? `<div class="card"><b>${t}：分數走勢（${xs.length} 次）</b>${trendSvg(xs.map(x => +x.res.band).filter(b => !isNaN(b)))}${critCompare(xs)}</div>` : '').join('')}
      ${R.length ? R.map(x => `<a class="card tight" href="#report/${x.id}" style="display:block;color:inherit;text-decoration:none"><div class="row between"><b>${esc(repTitle(x))}</b><b style="color:${bandColor(+x.res.band)}">${x.res.band != null ? 'Band ' + esc(x.res.band) : ''}</b></div>
        <div class="small muted">${repDate(x.t)} · ${esc(x.q.slice(0, 80))}${x.q.length > 80 ? '…' : ''}</div></a>`).join('') : '<div class="card center muted">未有報告。去「🎓 IELTS → 寫作／口語」做一題，撳 AI 批改就會有。</div>'}`;
  };
  V.report = id => {
    const x = S.reports.find(r => r.id === id); if (!x) return '<p>搵唔到報告</p><a href="#reports">返回</a>';
    return `<div class="row no-print" style="flex-wrap:nowrap"><a class="btn icon-btn" href="#reports">‹</a><h1 class="grow">📄 報告</h1><button class="btn-accent" data-act="printReport">🖨️ PDF</button></div>
      <div class="card"><div class="row between"><b>${esc(repTitle(x))}</b><span class="small muted">${repDate(x.t)}</span></div>
        ${S.settings.name ? `<div class="small muted">考生：${esc(S.settings.name)}</div>` : ''}
        <h3 style="margin-top:8px">題目</h3><p class="small">${esc(x.q)}</p>
        <h3>${x.kind === 'essay' ? '你嘅作文' : '你講嘅內容（文字）'}${x.dur ? '（' + x.dur + ' 秒）' : ''}</h3><div class="ex small" style="white-space:pre-wrap">${esc(x.input)}</div></div>
      ${aiResultHtml(x.res, '')}
      <p class="small muted no-print">PDF：撳右上「🖨️ PDF」→ iPhone 揀「分享」或「列印」→ 用兩隻手指放大預覽 → 分享 → 儲存到「檔案」。</p>`;
  };

  // ===== 考試倒數 + 今日任務 =====
  const WEEK_PLAN = {
    1: [['📖 閱讀 1 篇', 'read', 1, 'read']],
    2: [['🎧 聽力 1 段', 'listen', 1, 'listen'], ['✍️ 聽寫 5 句', 'dict', 5, 'dict']],
    3: [['✍️ 寫作 1 篇', 'essay', 1, 'write']],
    4: [['🎤 口語 2 題', 'speak', 2, 'speak'], ['🔁 改寫 3 句', 'para', 3, 'para']],
    5: [['🧩 文法 10 題', 'gram', 10, 'gram']],
    6: [['📖 閱讀 1 篇', 'read', 1, 'read'], ['🎧 聽力 1 段', 'listen', 1, 'listen']],
    0: [['🎯 弱項特訓', 'quiz', 10, 'weak'], ['🎤 口語 1 題', 'speak', 1, 'speak']]
  };
  function todayCount(k) { const t = today(); return S.events.filter(e => e.k === k && fmt(new Date(e.t)) === t).length; }
  function examCard(inner) {
    const s = S.settings; const t = today();
    const days = s.examDate ? Math.round((new Date(s.examDate) - new Date(t)) / 864e5) : null;
    const tasks = WEEK_PLAN[new Date().getDay()].slice();
    if (days != null && days >= 0 && days <= 14) tasks.push(['⚡ 衝刺：多做 1 篇閱讀', 'read', 2, 'read']);
    const row = ([label, k, need, go]) => {
      const done = todayCount(k) >= need;
      const prog = `<span class="small muted">${Math.min(todayCount(k), need)}/${need}</span>`;
      const act = go === 'weak' ? 'data-act="quiz" data-kind="weak" data-track="ielts"' : go === 'dict' ? 'data-act="goDict"' : `data-act="goIelts" data-tab="${go}"`;
      return `<button class="btn-ghost btn-block" style="justify-content:space-between;margin-top:6px;${done ? 'opacity:.6' : ''}" ${act}><span>${done ? '✅' : '⬜'} ${esc(label)}</span>${prog}</button>`;
    };
    return `<div ${inner ? 'style="margin-top:12px"' : 'class="card" style="border-left:5px solid #3b82f6"'}>
      <div class="row between"><b>🗓️ 今日 IELTS 任務</b>${days != null ? `<span class="pill" style="background:var(--grad);color:#fff">${days > 0 ? 'IELTS 倒數 ' + days + ' 日' : days === 0 ? '今日考試！加油 💪' : '考完喇 🎉'}</span>` : `<a class="small" href="#settings">設定考試日期 →</a>`}</div>
      <div class="row between small"><span class="muted">目標 Band ${esc(s.target)} · ${s.examType === 'gt' ? 'General Training' : 'Academic'}</span><a href="#plan"><b>🗺️ 備考路線圖 →</b></a></div>
      ${tasks.map(row).join('')}</div>`;
  }

  // ===== 備考路線圖 =====
  function weekKey() { const d = new Date(); d.setDate(d.getDate() - ((d.getDay() + 6) % 7)); return fmt(d); } // 星期一開始
  function rmKey(ph, it) { return ph.type === 'weekly' ? `${ph.id}:${it.id}@${weekKey()}` : `${ph.id}:${it.id}`; }
  function rmNow() {
    const s = S.settings; if (!s.examDate) return 'prep';
    const days = Math.round((new Date(s.examDate) - new Date(today())) / 864e5);
    if (days < 0) return null; if (days === 0) return 'day'; if (days <= 14) return 'final';
    const diag = NE.roadmap.find(p => p.id === 'diag');
    if (diag && diag.items.some(it => !S.roadmap[rmKey(diag, it)])) return 'diag';
    return days <= 42 ? 'mock' : 'skills';
  }
  V.plan = () => {
    const now = rmNow(); const s = S.settings;
    const days = s.examDate ? Math.round((new Date(s.examDate) - new Date(today())) / 864e5) : null;
    const once = NE.roadmap.filter(p => p.type === 'once'); let all = 0, done = 0;
    once.forEach(p => p.items.forEach(it => { all++; if (S.roadmap[rmKey(p, it)]) done++; }));
    const itemBtn = (p, it) => {
      const on = !!S.roadmap[rmKey(p, it)];
      const go = it.link ? `<a class="chip btn" href="${esc(it.link)}" target="_blank" rel="noopener">開 ↗</a>`
        : it.go ? (it.go[0] === '#' ? `<a class="chip btn" href="${esc(it.go)}">去 ›</a>` : `<button class="chip" data-act="goIelts" data-tab="${esc(it.go)}">去 ›</button>`) : '';
      return `<div class="row" style="flex-wrap:nowrap;align-items:flex-start;margin-top:8px">
        <button class="btn-ghost grow" style="justify-content:flex-start;text-align:left;min-height:44px;${on ? 'opacity:.6' : ''}" data-act="rmTick" data-k="${esc(rmKey(p, it))}">${on ? '✅' : '⬜'} <span style="margin-left:6px;${on ? 'text-decoration:line-through' : ''}">${esc(it.t)}</span></button>${go}</div>`;
    };
    const phase = p => {
      const n = p.items.filter(it => S.roadmap[rmKey(p, it)]).length; const cur = p.id === now;
      return `<details class="card" ${cur ? 'open' : ''} style="${cur ? 'border:2px solid #8b5cf6' : ''}">
        <summary><b>${p.icon} ${esc(p.title)}</b> ${cur ? '<span class="pill" style="background:var(--grad);color:#fff">而家做呢個</span>' : ''}
        <span class="small muted" style="float:right">${n}/${p.items.length}${p.type === 'weekly' ? ' 本星期' : ''}</span></summary>
        <p class="small muted" style="margin-top:6px">⏰ ${esc(p.when)}${p.type === 'weekly' ? ' · 每星期一重新開始' : ''}<br>💡 ${esc(p.tip)}</p>
        ${p.items.map(it => itemBtn(p, it)).join('')}</details>`;
    };
    const band = v => { const n = parseFloat(v); return isNaN(n) ? '–' : n; };
    const mocks = S.mocks.slice().reverse();
    return `<div class="row" style="flex-wrap:nowrap"><a class="btn icon-btn" href="#home">‹</a><h1 class="grow">🗺️ 備考路線圖</h1></div>
      <div class="card hero center"><div class="small">${days == null ? '未設定考試日期' : days > 0 ? `IELTS 倒數 <b>${days}</b> 日` : days === 0 ? '今日考試！加油 💪' : '考完喇 🎉'} · 目標 Band ${esc(s.target)}</div>
        <div class="progress" style="margin-top:10px"><div style="width:${all ? done / all * 100 : 0}%"></div></div>
        <div class="small" style="margin-top:6px">一次性任務完成 ${done}/${all}${days == null ? ' · <a href="#settings" style="color:inherit"><b>設定考試日期 →</b></a>' : ''}</div></div>
      <p class="small muted">大約 10–12 星期：App 每日練 ＋ Cambridge 真題。做完撳一下就剔，再撳取消。</p>
      ${NE.roadmap.map(phase).join('')}
      <div class="card"><h3>📊 模擬考分數</h3><p class="small muted">每次做完 Cambridge 真題記低，睇下有冇進步（填 band，例如 6 或 6.5；冇做嗰項留空）。</p>
        <div class="grid2" style="grid-template-columns:repeat(4,1fr);gap:6px">${['L 聽力', 'R 閱讀', 'W 寫作', 'S 口語'].map(x => `<input id="mk${x[0]}" inputmode="decimal" placeholder="${x}" style="min-width:0">`).join('')}</div>
        <input id="mkN" placeholder="備註（例如：Cambridge 18 Test 2）" style="margin-top:6px">
        <button class="btn-primary btn-block" style="margin-top:8px" data-act="mkAdd">記低</button>
        ${mocks.length ? `<table style="width:100%;margin-top:10px;font-size:14px;text-align:center"><tr><th>日期</th><th>L</th><th>R</th><th>W</th><th>S</th></tr>
          ${mocks.map(m => `<tr><td>${esc(m.d.slice(5))}</td><td>${band(m.L)}</td><td>${band(m.R)}</td><td>${band(m.W)}</td><td>${band(m.S)}</td></tr>${m.n ? `<tr><td colspan="5" class="small muted" style="text-align:left">${esc(m.n)}</td></tr>` : ''}`).join('')}</table>` : ''}</div>`;
  };

  // ===== 使用說明 =====
  V.help = () => {
    const sec = (icon, title, body, open) => `<details class="card tight" ${open ? 'open' : ''}><summary>${icon} ${title}</summary><div class="small" style="line-height:1.7">${body}</div></details>`;
    return `<div class="row" style="flex-wrap:nowrap"><a class="btn icon-btn" href="#home">‹</a><h1 class="grow">📖 使用說明</h1></div>
      <p class="muted small">呢個 app 幫你每日學醫護英文，同埋準備 IELTS（目標 6.0–6.5）。每日大約 15–20 分鐘就夠。</p>
      ${sec('🚀', '第一次用：3 步設定', `
        1. <b>加到主畫面</b>：Safari 撳「分享」→「加至主畫面」。咁樣用起嚟似 app，記錄亦唔會被清走。<br>
        2. <b>設定</b>（首頁右上 ⚙️）：填你嘅英文名、每日目標、口音（IELTS 建議英式）、<b>IELTS 考試日期同目標分數</b>。<br>
        3. 撳首頁「<b>開始護理英文字卡</b>」或者「<b>開始 IELTS 字卡</b>」，試做第一輪。`, true)}
      ${sec('☀️', '每日應該做咩？', `
        首頁兩張卡跟住做就得：<br>
        • 每日：🩺 護理英文字卡 + 🎓 IELTS 字卡（各約 5–10 分鐘）<br>
        • IELTS 卡入面有 <b>🗓️ 今日 IELTS 任務</b>：<br>
        • 星期一：閱讀　星期二：聽力 + 聽寫　星期三：寫作　星期四：口語 + 改寫　星期五：文法　星期六：閱讀 + 聽力　星期日：弱項特訓 + 口語<br>
        做完一項會自動打 ✅。完成每日目標會有彩紙 🎉，連續日數 🔥 會加。`)}
      ${sec('📚', '學習卡點用？（唔好淨係睇！）', `
        • 字卡：先睇英文，喺 <b>4 個中文意思入面揀一個</b>，即刻知啱定錯，再睇英文解釋同例句。完全唔識就撳「唔識，直接睇答案」。<br>
        • 「實用句子」字庫相反：先睇中文，<b>用英文講出嚟</b>：iPhone 撳格仔，再撳鍵盤上嘅 🎤 講（或者直接打）。揭答案會逐個字對，綠色 = 啱，🟡 黃色 = 辨識聽錯但讀音好似（當你啱），紅色 = 漏咗／錯咗。講法唔同可以撳「🤖 問 AI」。<br>
        • 想知自己<b>讀得準唔準</b>：撳「🎙️ 錄音俾 AI 聽」，講完撳「講完」。AI 會直接聽你把聲：寫低佢聽到咩、意思啱唔啱（唔同講法都得）、邊個字讀得唔清楚。每次用 1 次 AI 額度。<br>
        • 記住：<b>自己諗、自己講</b>先會記得，淨係睇答案好快會唔記得。<br>
        • 揭咗之後<b>誠實揀</b>：唔記得（今日會再出）／難／記得／好易（會隔耐啲先再出）。<br>
        • 🔊 聽讀音　🎤 跟讀（電腦會評；iPhone 就聽完跟住讀）　🔎 查字典　☆ 收藏　💌 對呢張卡有意見。<br>
        • 護理新字會自動先出進階字。想揀特定字庫：去「🩺 護理」頁：🔍 臨床評估、🧪 進階程序、⚗️ 藥理、🧬 進階疾病、🛡️ 感染控制、🧓 長者護理，同埋 🏨 病房日常句子、👩‍⚕️ 同同事溝通。入去字庫頁撳「學 10 個」就得。<br>
        • 「📖 按科目」：每個科目（例如 👶 兒科）撳開有幾個字庫，連實用句。`)}
      ${sec('✏️', '測驗', `
        護理測驗喺「🩺 護理」頁；IELTS 測驗喺「🎓 IELTS → 字彙」。有快測、弱項特訓、串字、聽力、縮寫挑戰。<b>答錯嘅字會自動加入今日溫習</b>，所以錯咗唔緊要，錯咗先記得牢。<br>答錯之後要<b>照住打 2 次正確答案</b>（句子 1 次）先去下一題，手打一次記得快好多；趕時間可以撳「略過」。`)}
      ${sec('🎓', 'IELTS 練習', `
        「IELTS」分頁：<br>
        • 🎤 <b>口語</b>：Part 1/2/3 題目。撳「🎙️ 開始作答」就同時錄音同計時，講完撳「講完」（或者時間到自動停），<b>AI 會聽你把聲</b>：寫低你講咗咩、估 Band（四項，包括發音）、改文法、指出邊個字讀得唔準，再俾 Band 7 參考答案。Part 2 可以先撳「準備 1 分鐘」，準備完會自動開始錄音。唔想錄音可以打字評分。<br>
        • ✍️ <b>寫作</b>：Task 1/2 題目，計時 + 字數 + 自動儲存草稿 + 結構建議。寫完撳「🤖 AI 批改」：估 Band（四項準則）、改錯、建議點改進。<br>
        • 📖 <b>閱讀</b>：True/False/Not Given、填字、選擇題，交卷有解釋同估分。<br>
        • 🎧 <b>聽力</b>：聽對話填表（真考試只播一次）＋ ✍️ 聽寫（聽一句打一句，練串字）。<br>
        • 🧩 <b>文法</b>：香港人最常錯嘅文法，每題有中文解釋。<br>
        • 🔁 <b>改寫</b>：用唔同字講同一個意思，寫作同閱讀都用到。寫完可以叫 🤖 AI 評分。<br>
        • 📘 <b>字彙</b>：健康話題字、學術詞彙、常用搭配，同埋 <b>Band 7 程度</b>：🎙️ 口語高分表達、🖋️ 寫作高分句型、🌏 話題字彙（教育、環境、科技、工作、城市、罪案、文化）。真考試唔止考健康，所以每個話題都要識。<br>
        • 💡 <b>貼士</b>：評分準則、溫習方法、官方免費練習連結。<br>
        • 口語、寫作題目包括教育、環境、科技、工作、城市等常考話題。<br>
        估分只係按比例估算，題目少，只供參考。題目係按 IELTS 官方題型原創，唔係真題。`)}
      ${sec('🩺', '護理英文 同 🎓 IELTS：兩條線分開', `
        • 首頁有兩張卡：<b>🩺 護理英文</b>（工作用：醫護字、病房句子、同同事溝通）同 <b>🎓 IELTS</b>（考試用：字彙、口語、寫作、閱讀、聽力）。各自有「開始字卡」，溫習同新字分開計。<br>
        • 下面 tab：「🩺 護理」= 醫護字庫同測驗；「🎓 IELTS」= 所有 IELTS 練習，IELTS 字卡同測驗喺「字彙」。<br>
        • 設定可以分開揀兩條線每日新字幾多個；護理新字預設先學進階字同句子（基本字已識）。<br>
        • 右上角 🔔：App 有更新會出紅點，撳入去睇改咗咩。`)}
      ${sec('🗺️', '備考路線圖（由而家到考試）', `首頁「今日任務」右上角撳「🗺️ 備考路線圖」：<br>
        • 分 6 個階段：準備 → 摸底 → 補技巧 → 模擬考 → 衝刺 → 考試當日。App 會按考試日期標示「而家做呢個」。<br>
        • 做完一項撳一下就 ✅，再撳取消。「補技巧」同「模擬考」係每星期一重新開始。<br>
        • 每次做完 Cambridge 真題，喺「📊 模擬考分數」記低 L/R/W/S，睇進度；Ben 亦會睇到。`)}
      ${sec('🎙️', 'AI 模擬口試點用？', `「🎓 IELTS」頂部撳「AI 模擬口試」。AI 考官會讀出問題（🔊 可以再聽），你撳「🔴 開始答」講，講完撳「⏹️ 答完」。<br>• Part 1：4 條日常問題；Part 2：題目卡，可以先準備 1 分鐘，講 1–2 分鐘；Part 3：考官根據你講嘅內容追問 4 條。<br>• 完成後出完整報告（4 項評分），自動儲存喺「📈 我嘅 AI 報告」。全程大約 12–15 分鐘，用大約 10 次 AI。`)}
      ${sec('🤔', '測驗錯咗點算？', `答錯之後撳「🤔 點解錯？問 AI」：AI 會解釋點解錯、兩個字有咩分別、記憶貼士同例句。`)}
      ${sec('✍️', '造句練習係咩？', `學新字時，翻轉張卡會出「用呢個字造一句」。寫完撳「🤖 AI 幫我改」，AI 會話你用得啱唔啱同改好。唔想做就撳「略過」；設定入面可以關咗自動出。`)}
      ${sec('📊', '學習報告喺邊？', `「📈 進度」頂部撳「學習報告」：<br>• 🤖 AI 簡短週報：一撳就分析最近 7 日嘅強項、弱項同下星期計劃。<br>• 🧠 Claude 詳細報告：Ben 叫 Claude 詳細分析之後，報告會出現喺度（要連接同步）。`)}
      ${sec('📈', 'AI 報告點睇？', `寫作同口語用 AI 批改之後，AI 會跟 IELTS 官方評分準則逐項評分：每項有分數、做得好、要改善同例子，最後有「下一步最重要」3 件事。<br>• 每份報告自動儲存喺「🎓 IELTS → 📈 我嘅 AI 報告」，有分數走勢圖同每項進步比較。<br>• 已連接同步嘅話，報告會一齊備份去 GitHub。<br>• 想要 PDF：入報告撳「🖨️ PDF」→ 分享 → 儲存到「檔案」。`)}
      ${sec('🤖', 'AI 評分點設定？', `設定 → 「AI 評分」：供應商揀「阿里雲 Qwen」，貼上 Ben 俾你嘅 key（sk- 開頭），撳「儲存並測試」。見到 ✅ 就用得。<br>
        • Qwen 香港用得，亦聽得到你錄音（口語、句子讀音）。新帳號有 100 萬 token 免費（大約幾千次評分），之後都好平。<br>
        • <b>設定 → AI 評分</b> 下面有「📊 AI 用量」：今日用咗幾多次、免費額度估計剩幾多、如果俾錢大約幾錢。<br>
        • 句子卡講啱咗會直接顯示「✅ 完全正確」，唔使用 AI；講法唔同先撳 🤖 問 AI（通常 2–5 秒）。超過 10 秒會自動停，再撳一次就得。<br>
        • AI 分數只供參考（同真考官可能差 0.5–1 分），最有用係睇「改正」同「點樣改進」。<br>
        • 唔好喺練習入面寫病人名或者私人資料。`)}
      ${sec('⭐', '加自己嘅生字', `返工聽到唔識嘅字？撳首頁「加生字」，打英文（可以撳 Cambridge 字典或者 Google 翻譯查中文），儲存後會自動安排溫習。`)}
      ${sec('📈', '睇進度同強弱項', `「進度」分頁：連續日數、已學／熟記字數、測驗準確率、12 星期熱圖、成就徽章，同埋 <b>🧭 強項同弱項</b>（按字庫同題型計）。`)}
      ${sec('💌', '意見箱：想改咩話俾 Ben 知', `首頁「意見箱」或者每張卡嘅「💌 意見」：錯字、太難太易、想加咩功能都可以寫。Ben 會叫 Claude 睇你嘅意見同學習記錄，再改 app。回覆會喺意見箱顯示，首頁亦會有「📌 今期重點」。`)}
      ${sec('☁️', '同步同備份', `• 設定 → 「同步俾 Ben 睇」：貼上 Ben 俾你嘅 token，學習記錄會自動上載去 Ben 嘅私人資料庫，佢先睇到你嘅強弱項。<br>
        • 唔想同步：設定 → 「匯出備份」，將檔案傳俾 Ben。<br>
        • 換機前一定要匯出備份。`)}
      ${sec('⏰', '每日提醒', `設定 → 每日提醒：揀時間，撳「下載提醒」，加入 iPhone 日曆，每日到鐘會彈通知。`)}
      <p class="small muted center">有新功能時，呢頁會一齊更新。</p>`;
  };

  // ===== 意見箱 =====
  const FB_CATS = [['bug', '🐞 有問題／錯字'], ['hard', '😵 太難'], ['easy', '😴 太易'], ['want', '💡 想要新功能'], ['other', '💬 其他']];
  function feedbackForm(ctx, inline) {
    const c = ctx && BY[ctx];
    return `${inline ? '' : '<h2 style="margin-top:0">💌 寫意見俾 Ben</h2>'}
      <p class="small muted">有咩唔明、錯字、太難太易、想加咩，都可以寫。Ben 會叫 Claude 睇完再改 app。</p>
      ${c ? `<div class="ex small">關於：<b>${esc(fill(c.en))}</b> — ${esc(fill(c.zh))}</div>` : ''}
      <div class="row" style="margin:10px 0">${FB_CATS.map(([k, t], i) => `<button class="chip ${i === (c ? 0 : 3) ? 'on' : ''}" data-act="fbCat" data-cat="${k}">${t}</button>`).join('')}</div>
      <textarea id="fbText" placeholder="例如：呢個字嘅中文唔啱／想多啲聽力練習／Part 2 題目太難…" style="min-height:120px"></textarea>
      ${inline ? `<button class="btn-primary btn-block" style="margin-top:12px" data-act="fbSend" data-ctx="">送出 💌</button>`
        : `<div class="grid2" style="margin-top:12px"><button class="btn-ghost" data-act="closeModal">取消</button><button class="btn-primary" data-act="fbSend" data-ctx="${esc(ctx || '')}">送出 💌</button></div>`}`;
  }
  V.feedback = () => {
    const list = S.feedback.slice().reverse(); const R = (NE.coach && NE.coach.replies) || {};
    return `<div class="row" style="flex-wrap:nowrap"><a class="btn icon-btn" href="#home">‹</a><h1 class="grow">💌 意見箱</h1></div>
      <div class="card">${feedbackForm('', true)}</div>
      <p class="small muted">${syncReady() ? '已連接同步：送出後 Ben 可以直接睇到。' : '未連接同步：Ben 要喺「設定 → 匯出」攞資料先睇到。'}</p>
      <h2>我寫過嘅意見</h2>
      ${list.length ? list.map(f => {
        const c = f.ctx && BY[f.ctx]; const cat = FB_CATS.find(x => x[0] === f.cat); const rep = R[f.id];
        return `<div class="card tight"><div class="row between"><span class="pill">${esc(cat ? cat[1] : f.cat)}</span><span class="small muted">${esc(new Date(f.t).toLocaleDateString('zh-HK'))}</span></div>
          ${c ? `<div class="small muted" style="margin-top:6px">關於：${esc(fill(c.en))}</div>` : ''}
          <p>${esc(f.text)}</p>
          ${rep ? `<div class="note">💬 回覆：${esc(rep)}</div>` : '<div class="small muted">⏳ 等緊處理</div>'}</div>`;
      }).join('') : '<p class="muted small">未有意見</p>'}`;
  };
  function coachCard() {
    const P = NE.coach && NE.coach.plan; if (!P || (!P.message && !(P.focus || []).length)) return '';
    return `<div class="card" style="border-left:5px solid #8b5cf6"><div class="row between"><b>📌 今期重點</b>${NE.coach.updated ? `<span class="small muted">${esc(NE.coach.updated)}</span>` : ''}</div>
      ${P.message ? `<p class="small">${esc(P.message)}</p>` : ''}
      <div class="row">${(P.focus || []).map(f => f.act === 'deck'
        ? `<a class="chip btn" href="#deck/${encodeURIComponent(f.deck)}">${esc(f.label)}</a>`
        : `<button class="chip" data-act="quiz" data-kind="${esc(f.kind)}" ${f.deck ? `data-deck="${esc(f.deck)}"` : ''}>${esc(f.label)}</button>`).join('')}</div></div>`;
  }
  function insightCard() {
    const I = insights(30); const K = I.skills;
    const skillRows = [['📖 閱讀', K.reading], ['🎧 聽力', K.listening], ['✍️ 聽寫', K.dictation], ['🗣️ 主動回想（講／打答案）', K.recall]].filter(x => x[1]);
    const skillHtml = skillRows.length || K.grammar.length || K.aiBands.length ? `<h3 style="margin-top:10px">🎓 IELTS 技能</h3>
      ${skillRows.map(([t, x]) => `<div class="row between small" style="margin:4px 0"><span>${t}（${x.n} 次）</span><b style="color:${x.pct >= 80 ? 'var(--good)' : x.pct >= 60 ? 'var(--warn)' : 'var(--bad)'}">${x.pct}%</b></div>`).join('')}
      ${K.grammar.map(g => `<div class="row between small" style="margin:4px 0"><span>🧩 ${esc(g.name)}（${g.n} 題）</span><b style="color:${g.pct >= 80 ? 'var(--good)' : g.pct >= 60 ? 'var(--warn)' : 'var(--bad)'}">${g.pct}%</b></div>`).join('')}
      ${K.aiBands.map(a => `<div class="row between small" style="margin:4px 0"><span>🤖 AI 評分：${esc(AI_KIND[a.kind] || a.kind)}（${a.n} 次）</span><b>Band ${a.avg}</b></div>`).join('')}` : '';
    if (!I.decks.length && !I.quizTypes.length && !skillHtml) return `<div class="card small muted">做多幾次溫習同測驗（每個字庫最少 5 次），呢度就會顯示你嘅強項同弱項。</div>`;
    const row = (x, label) => `<div class="row between small" style="margin:4px 0"><span>${esc(label)}</span><b style="color:${x.pct >= 80 ? 'var(--good)' : x.pct >= 60 ? 'var(--warn)' : 'var(--bad)'}">${x.pct}%</b></div>`;
    return `<div class="card">
      ${I.strengths.length ? `<h3>💪 強項</h3>${I.strengths.map(x => row(x, x.name)).join('')}` : ''}
      ${I.weaknesses.length ? `<h3 style="margin-top:10px">🎯 要加強</h3>${I.weaknesses.map(x => row(x, x.name)).join('')}` : ''}
      ${I.quizTypes.length ? `<h3 style="margin-top:10px">✏️ 測驗題型</h3>${I.quizTypes.map(x => row(x, x.name + `（${x.n} 題）`)).join('')}` : ''}
      ${skillHtml}
      ${I.pronunciation ? `<p class="small muted" style="margin-top:8px">🎤 跟讀 ${I.pronunciation.tries} 次，平均準確 ${I.pronunciation.avg}%</p>` : ''}
      <p class="small muted">最近 30 日 · 溫習評「記得／好易」同測驗答啱都計做啱</p></div>`;
  }

  // ===== 路由 =====
  function render() {
    stopDictate();
    const raw = (location.hash || '#home').slice(1); const [r, arg] = raw.split('/');
    const route = V[r] ? r : 'home';
    if (REC && route !== 'ielts') { stopRecording(); stopTimer(); }
    if (MREC && route !== 'mock') { MREC.discard = true; if (MREC.mr.state === 'recording') MREC.mr.stop(); stopTimer(); }
    if (CREC && route !== 'study') stopCardRec();
    if (!['quizrun', 'study', 'listen', 'dict', 'mock'].includes(route)) { if (window.speechSynthesis) speechSynthesis.cancel(); }
    document.body.classList.toggle('focus', ['study', 'quizrun', 'write', 'read', 'listen', 'dict', 'mock'].includes(route));
    const tabFor = { deck: DECKMAP[arg] && trackOfDeck(arg) === 'ielts' ? 'ielts' : 'library', quiz: 'library', quizrun: QZ && QZ.track === 'ielts' ? 'ielts' : 'library', write: 'ielts', read: 'ielts', listen: 'ielts', dict: 'ielts', reports: 'ielts', report: 'ielts', mock: 'ielts', coach: 'stats', creport: 'stats', settings: 'home', study: 'home', feedback: 'home', help: 'home', plan: 'home' }[route] || route;
    document.querySelectorAll('.tabbar a').forEach(a => a.classList.toggle('on', a.dataset.tab === tabFor));
    $('#app').innerHTML = V[route](arg ? decodeURIComponent(arg) : undefined);
    after(route);
  }
  let lastRoute = '';
  function after(route) {
    if (route === 'coach') loadClaudeList();
    if (route === 'creport') { const a = (location.hash.split('/')[1] || ''); loadClaudeReport(decodeURIComponent(a)); }
    if (route === 'home' && !updPopped && S.settings.seenHelp && hasNewUpdate()) { updPopped = true; setTimeout(() => { if (location.hash === '' || location.hash === '#home') { showUpdates(); render(); } }, 700); }
    if (route !== lastRoute) {
      window.scrollTo(0, 0);
      if (['ielts', 'write', 'read'].includes(lastRoute) && !(lastRoute === 'ielts' && route === 'ielts')) { stopTimer(); stopRecording(); }
      if (['listen', 'dict'].includes(lastRoute) && window.speechSynthesis) speechSynthesis.cancel();
      lastRoute = route;
    }
    requestAnimationFrame(() => document.querySelectorAll('.ring .fg').forEach(c => { c.style.strokeDashoffset = c.dataset.off; }));
    const as = $('#autoSpeak'); if (as && QZ && !QZ.answered) setTimeout(() => speak(as.dataset.text, as), 300);
    const si = $('#spellIn'); if (si) si.focus();
    if (TIMER) tickTimer();
  }
  window.addEventListener('hashchange', render);

  // ===== 動作 =====
  const A = {
    speak: el => speak(el.dataset.text, el),
    speakSlow: el => speak(el.dataset.text, null, 0.6),
    say: el => practiceSay(el.dataset.text, $('#sayOut')),
    startToday: el => startSession({ track: (el && el.dataset.track) || 'nurse' }),
    extraNew: el => startSession({ newCount: 5, deck: null, track: (el && el.dataset.track) || 'nurse' }),
    learnOne: el => { closeModal(); startSession({ ids: [el.dataset.id] }); },
    studyDeck: el => startSession({ deck: el.dataset.deck, newCount: 10 }),
    hint: () => { SES.hint = true; render(); },
    showUpdates: () => { showUpdates(); render(); },
    sayRec: () => cardRecToggle(),
    recPick: el => {
      if (SES.revealed) return;
      const c = BY[SES.queue[SES.i]]; const ok = el.dataset.id === c.id;
      SES.rec = { mc: 1, ok, picked: el.dataset.id };
      logEv({ k: 'recall', id: c.id, sc: ok ? 1 : 0, a: el.dataset.id, mc: 1, ms: Date.now() - (SES.shownAt || Date.now()) }); save();
      SES.revealed = true; SES.anim = ''; render();
    },
    reveal: () => {
      stopDictate();
      const inp = $('#recallIn'); const v = inp ? inp.value.trim() : '';
      SES.rec = null;
      if (v) {
        const c = BY[SES.queue[SES.i]];
        if (deckOf(c).say) { const m = lcsMark(fill(c.en), v, true); SES.rec = { v, m, sc: m.acc }; }
        else {
          const zh = (c.zh.match(/[一-鿿]/g) || []); const typed = v;
          const hit = zh.filter(ch => typed.includes(ch)).length;
          SES.rec = { v, sc: zh.length ? hit / zh.length : 0 };
        }
        logEv({ k: 'recall', id: c.id, sc: Math.round(SES.rec.sc * 100) / 100, a: v.slice(0, 160) }); save();
      }
      SES.typed = ''; SES.revealed = true; SES.anim = 'flip'; render();
    },
    dictate: el => { const t = document.getElementById(el.dataset.target); if (t) dictateInto(t, el.dataset.lang === 'zh' ? 'zh-HK' : S.settings.accent, el); },
    aiSpeak: () => {
      const text = ($('#spkText').value || '').trim(); if (countWords(text) < 5) return toast('講多少少先（最少一兩句）');
      const list = NE.ielts.speaking[IEL.part]; const it = list[(IEL.idx[IEL.part] || 0) % list.length];
      const q = IEL.part === 2 ? it.q + ' You should say: ' + it.b.join(', ') : it;
      stopDictate(); runAI('speak', { part: IEL.part, q, text }, 'aiSpkTxtBox', 'p' + IEL.part + ':' + (IEL.part === 2 ? it.q : it).slice(0, 60));
    },
    aiEssay: el => {
      const id = el.dataset.id; const w = NE.ielts.writing.find(x => x.id === id); const d = S.drafts[id] || { text: '' };
      const wc = countWords(d.text); if (wc < 40) return toast('寫多啲先（最少一段）先批改');
      const extra = w.table ? 'Data: ' + [w.table.head].concat(w.table.rows).map(r => r.join(' | ')).join('; ') : w.steps ? 'Steps: ' + w.steps.join(' → ') : '';
      runAI('essay', { task: w.task, q: w.q, extra, text: d.text, wc }, 'aiEssayBox', id);
    },
    aiPara: () => {
      const v = ($('#paraIn').value || '').trim(); if (!v) return toast('寫低你嘅改寫先');
      PP.typed = v; runAI('para', { src: NE.paraphrase[PP.i].src, text: v }, 'aiParaBox', 'para' + PP.i);
    },
    aiSave: () => {
      const prov = $('#aiProvIn').value; const k = ($('#aiKeyIn').value || '').trim();
      if (prov !== aiProv() && !k) return toast('轉供應商要貼返新嘅 API key');
      if (!k && !AIC.key) return toast('請貼上 API key');
      if (k) { AIC.key = k.replace(/^Bearer\s+/i, ''); AIC.models = null; AIC.qModel = null; } AIC.qBad = null; AIC.provider = prov; saveAIC();
      const out = $('#aiStatus'); out.textContent = '測試緊…（約 5 秒）';
      const test = prov === 'qwen' ? qwenCall('Reply with JSON only: {"ok": true}', 'say').then(() => 'Qwen（' + AIC.qModel + '）') : aiPickModels().then(ms => ms[0]);
      test.then(n => { out.textContent = '✅ 已連接：' + n; toast('🤖 AI 已連接'); }).catch(e => { out.textContent = '⚠️ ' + e.message; });
    },
    aiRemove: () => { if (!confirm('喺呢部機移除 AI key？')) return; AIC = {}; saveAIC(); render(); },
    aiSay: el => { const c = BY[el.dataset.id]; runAI('say', { ctx: c.def, zh: fill(c.zh), model: fill(c.en), text: SES.rec.v }, 'aiSayBox', c.id); },
    showZh: () => { SES.showZh = true; render(); },
    grade: el => grade(Number(el.dataset.g)),
    exitStudy: () => { SES = null; location.hash = '#home'; },
    star: el => { const id = el.dataset.id; if (S.stars[id]) delete S.stars[id]; else S.stars[id] = 1; save(); el.textContent = S.stars[id] ? '⭐ 已收藏' : '☆ 收藏'; el.classList.add('shake'); setTimeout(() => el.classList.remove('shake'), 400); },
    hideInstall: () => { S.settings.hideInstall = true; save(); render(); },
    detail: el => openModal(detailHtml(BY[el.dataset.id])),
    closeModal: () => closeModal(),
    openSubjAlso: el => { const g = el.dataset.grp; const t = ((NE.subjects || []).concat(NE.ieltsTopics || []).find(s => s[0] === g) || [, ''])[1];
      openModal(`<h2 style="margin-top:0">📎 ${esc(t)}：其他字庫相關字</h2><p class="small muted">呢啲字喺基本／進階字庫入面，溫習會跟返原本字庫。</p>${cardList(subjAlso(g))}<button class="btn-ghost btn-block" style="margin-top:12px" data-act="closeModal">關閉</button>`); },
    weeklyGo: () => runAI('weekly', { data: weeklyData(), exam: S.settings.examDate, target: S.settings.target, text: '' }, 'aiWeekBox', 'week'),
    mockStart: () => mockStart(),
    mockSay: () => mockSay(),
    mockRec: () => mockRec(),
    mockPrep: () => { MOCK.prep = 1; render(); startTimer(60, '📝 準備緊…時間到會響', () => toast('準備時間完，撳開始講')); },
    mockRescore: () => { MOCK.retry = false; MOCK.err = ''; MOCK.stage = 'scoring'; render(); mockScore(); },
    mockQuit: () => { if (!confirm('離開模擬口試？今次進度會冇咗。')) return; if (MREC) { MREC.discard = true; if (MREC.mr.state === 'recording') MREC.mr.stop(); } stopTimer(); MOCK = null; location.hash = '#ielts'; },
    printReport: () => setTimeout(() => window.print(), 100),
    openStarred: () => openModal(`<h2 style="margin-top:0">⭐ 收藏</h2>${cardList(ALL.filter(c => S.stars[c.id]))}<button class="btn-ghost btn-block" style="margin-top:12px" data-act="closeModal">關閉</button>`),
    addWord: () => openModal(wordForm()),
    editWord: el => openModal(wordForm(S.custom.find(c => c.id === el.dataset.id))),
    lookup: () => { const v = $('#f_en').value.trim(); if (!v) return toast('先打英文'); window.open('https://dictionary.cambridge.org/dictionary/english-chinese-traditional/' + encodeURIComponent(v.toLowerCase().replace(/\s+/g, '-')), '_blank', 'noopener'); },
    translate: () => { const v = $('#f_en').value.trim(); if (!v) return toast('先打英文'); window.open('https://translate.google.com/?sl=en&tl=zh-TW&text=' + encodeURIComponent(v), '_blank', 'noopener'); },
    saveWord: el => {
      const en = $('#f_en').value.trim(); if (!en) { $('#f_en').classList.add('shake'); return toast('英文唔可以空白'); }
      const data = { en, zh: $('#f_zh').value.trim(), def: $('#f_def').value.trim(), ex: $('#f_ex').value.trim(), exZh: '', note: $('#f_note').value.trim() };
      const id = el.dataset.id;
      if (id) Object.assign(S.custom.find(c => c.id === id), data);
      else S.custom.push(Object.assign({ id: 'mine:' + Date.now() }, data));
      save(); rebuild(); closeModal(); toast(id ? '已更新 ✏️' : '已加入「我的生字」⭐'); render();
    },
    delWord: el => {
      const id = el.dataset.id; if (!confirm('刪除呢個生字？（連埋佢嘅學習記錄）')) return;
      S.custom = S.custom.filter(c => c.id !== id); delete S.cards[id]; delete S.stars[id];
      save(); rebuild(); closeModal(); render(); toast('已刪除');
    },
    rmTick: el => { const k = el.dataset.k; if (S.roadmap[k]) delete S.roadmap[k]; else { S.roadmap[k] = today(); confetti(25); } save(); render(); },
    mkAdd: () => {
      const v = x => { const n = parseFloat(($('#mk' + x).value || '').trim()); return n >= 0 && n <= 9 ? Math.round(n * 2) / 2 : null; };
      const m = { d: today(), L: v('L'), R: v('R'), W: v('W'), S: v('S'), n: ($('#mkN').value || '').trim().slice(0, 80) };
      if ([m.L, m.R, m.W, m.S].every(x => x == null)) return toast('最少填一項分數（0–9）');
      S.mocks.push(m); logEv({ k: 'mock', L: m.L, R: m.R, W: m.W, S: m.S, n: m.n }); save(); render(); toast('已記低 👍');
    },
    goIelts: el => { IEL.tab = el.dataset.tab; GQ = null; if (location.hash === '#ielts') render(); else location.hash = '#ielts'; },
    goDict: () => { location.hash = '#dict'; },
    rdAns: el => { RD.ans[el.dataset.i] = el.dataset.v; render(); },
    rdSubmit: () => {
      const P = NE.reading.find(r => r.id === RD.id);
      const blank = P.qs.filter((q, i) => RD.ans[i] == null || RD.ans[i] === '').length;
      if (blank && !confirm(`仲有 ${blank} 題未答，交卷？`)) return;
      RD.res = P.qs.map((q, i) => ({ ok: q.t === 'gap' ? ansOk(RD.ans[i], q.a) : String(RD.ans[i]) === String(q.a) }));
      RD.score = RD.res.filter(r => r.ok).length; RD.done = true; stopTimer();
      const types = {}; P.qs.forEach((q, i) => { const x = types[q.t] || (types[q.t] = [0, 0]); x[1]++; if (RD.res[i].ok) x[0]++; });
      logEv({ k: 'read', id: P.id, sc: RD.score, n: P.qs.length, types, wrong: RD.res.map((r, i) => r.ok ? null : i).filter(x => x != null) });
      logToday().ex += 5; save(); checkGoal(); render(); window.scrollTo(0, 0);
      if (RD.score / P.qs.length >= .8) confetti();
    },
    rdReset: () => { RD = null; render(); },
    lsPlay: el => playLines(NE.listening.find(r => r.id === LS.id).lines, el),
    lsStop: () => { if (window.speechSynthesis) speechSynthesis.cancel(); const b = $('#lsPlayBtn'); if (b) b.classList.remove('playing'); },
    lsSubmit: () => {
      const P = NE.listening.find(r => r.id === LS.id);
      LS.res = P.qs.map((q, i) => ({ ok: ansOk(LS.ans[i], q.a) }));
      LS.score = LS.res.filter(r => r.ok).length; LS.done = true; A.lsStop();
      logEv({ k: 'listen', id: P.id, sc: LS.score, n: P.qs.length, wrong: P.qs.map((q, i) => LS.res[i].ok ? null : { i, a: LS.ans[i] || '' }).filter(Boolean) });
      logToday().ex += 5; save(); checkGoal(); render(); window.scrollTo(0, 0);
      if (LS.score / P.qs.length >= .8) confetti();
    },
    lsReset: () => { LS = null; render(); },
    dcPlay: el => speak(DC.text, el),
    dcSlow: () => speak(DC.text, null, 0.65),
    dcCheck: () => {
      const v = ($('#dcIn').value || '').trim(); if (!v) return toast('聽完打低先對答案');
      DC.typed = v; DC.m = lcsMark(DC.text, v); DC.done = true; DC.count++;
      logEv({ k: 'dict', tx: DC.text.slice(0, 100), a: v.slice(0, 100), acc: Math.round(DC.m.acc * 100) / 100 });
      logToday().ex += 1; save(); checkGoal(); render();
    },
    dcNext: () => { newDict(); render(); setTimeout(() => { const b = document.querySelector('[data-act=dcPlay]'); if (b) speak(DC.text, b); }, 300); },
    gramStart: el => {
      const cat = el.dataset.cat || '';
      const idx = NE.grammar.map((g, i) => i).filter(i => !cat || NE.grammar[i].cat === cat);
      GQ = { qs: shuffle(idx).slice(0, 10), i: 0, score: 0, answered: false, cat, log: [] }; IEL.tab = 'gram';
      if (location.hash !== '#ielts') location.hash = '#ielts'; else render();
    },
    gramPick: el => {
      const k = Number(el.dataset.k), gi = GQ.qs[GQ.i], ok = k === NE.grammar[gi].a;
      GQ.answered = true; GQ.picked = k; if (ok) GQ.score++; GQ.log.push({ g: gi, ok });
      logEv({ k: 'gram', g: gi, cat: NE.grammar[gi].cat, ok: ok ? 1 : 0, a: NE.grammar[gi].c[k] });
      logToday().ex += 1; save(); checkGoal(); render();
      if (!ok && navigator.vibrate) navigator.vibrate(80);
    },
    gramNext: () => { GQ.i++; GQ.answered = false; render(); if (GQ.i >= GQ.qs.length && GQ.score >= 8) confetti(); },
    gramExit: () => { GQ = null; render(); },
    paraShow: () => { const v = ($('#paraIn').value || '').trim(); if (!v) { $('#paraIn').classList.add('shake'); return toast('試下自己寫先 ✍️'); } PP.typed = v; PP.shown = true; render(); const t = $('#paraIn'); if (t) t.value = v; },
    paraRate: el => {
      logEv({ k: 'para', i: PP.i, self: Number(el.dataset.v), a: (PP.typed || '').slice(0, 160) });
      logToday().ex += 2; save(); checkGoal();
      PP = { i: (PP.i + 1) % NE.paraphrase.length, shown: false }; render(); toast(el.dataset.v === '1' ? '👍 好！下一句' : '💪 繼續練');
    },
    hideWelcome: () => { S.settings.seenHelp = true; save(); render(); },
    openFb: el => openModal(feedbackForm(el.dataset.ctx || '')),
    fbCat: el => { el.parentElement.querySelectorAll('.chip').forEach(b => b.classList.toggle('on', b === el)); },
    fbSend: el => {
      const box = el.closest('.sheet, .card') || document; const ta = box.querySelector('#fbText');
      const text = (ta.value || '').trim(); if (!text) { ta.classList.add('shake'); return toast('寫少少嘢先送出'); }
      const on = box.querySelector('[data-act=fbCat].on');
      S.feedback.push({ id: 'fb' + Date.now(), t: Date.now(), cat: on ? on.dataset.cat : 'other', text, ctx: el.dataset.ctx || '', route: location.hash.slice(1) });
      save(); closeModal(); toast('💌 已送出，多謝！'); if (location.hash === '#feedback') render();
      if (syncReady()) syncNow(false);
    },
    connectSync: () => {
      const repo = $('#syRepo').value.trim(), tok = $('#syToken').value.trim();
      if (!/^[\w.-]+\/[\w.-]+$/.test(repo)) return toast('repo 格式：用戶名/repo名');
      if (!tok && !SY.token) return toast('請貼上 GitHub token');
      SY.repo = repo; if (tok) SY.token = tok; SY.lastError = ''; saveSY(); syncNow(true).then(render);
    },
    syncNowBtn: () => syncNow(true).then(render),
    disconnectSync: () => { if (!confirm('喺呢部機中斷同步？（唔會刪除任何資料）')) return; delete SY.token; SY.lastError = ''; saveSY(); render(); toast('已中斷'); },
    quiz: el => startQuiz(el.dataset.kind, el.dataset.deck, el.dataset.track),
    quizDeckGo: () => startQuiz('deck', $('#quizDeck').value),
    quizAgain: () => startQuiz(QZ.kind, QZ.deck, QZ.track),
    exitQuiz: () => { QZ = null; location.hash = '#quiz'; },
    qhint: () => { QZ.hint = true; render(); },
    pick: el => { const q = QZ.qs[QZ.i]; answer(el.dataset.id === q.id, el.dataset.id); },
    spellGo: () => {
      const v = ($('#spellIn').value || '').trim(); if (!v) return;
      const c = BY[QZ.qs[QZ.i].id]; const n = s => s.toLowerCase().replace(/[^a-z]/g, '');
      answer(n(v) === n(c.en), null, v);
    },
    nextQ: () => { const c = BY[QZ.qs[QZ.i].id]; if (QZ.answered && !QZ.ok && QZ.copy < copyNeed(c)) return; QZ.i++; QZ.answered = false; QZ.hint = false; QZ.typed = null; QZ.copy = 0; QZ.expRes = null; render(); },
    sentOpen: el => { SES.sentFor = el.dataset.id; render(); setTimeout(() => { const t = $('#sentIn'); if (t) t.focus(); }, 50); },
    sentSkip: el => { SES.sentSkip = el.dataset.id; render(); },
    sentGo: el => {
      const c = BY[el.dataset.id]; const text = ($('#sentIn').value || '').trim();
      if (text.split(/\s+/).length < 3) return toast('寫一句完整句子先（最少 3 個字）');
      SES.sentResFor = c.id; SES.sentRes = null;
      runAI('sentence', { en: fill(c.en), zh: fill(c.zh), def: c.def, text }, 'aiSentBox', c.id);
    },
    aiExplain: () => {
      const q = QZ.qs[QZ.i]; const c = BY[q.id]; const w = QZ.picked && BY[QZ.picked];
      const T = { mcZh: '睇英文揀中文', mcEn: '睇解釋揀英文', listen: '聽讀音揀意思', spell: '聽讀音串字' }[q.type] || q.type;
      runAI('explain', { en: fill(c.en), zh: fill(c.zh), def: c.def, type: T, wrong: q.type === 'spell' ? (QZ.typed || '') : w ? fill(w.en) : '', wrongZh: w ? fill(w.zh) : '' }, 'aiExpBox', c.id);
    },
    copyGo: () => {
      const inp = $('#copyIn'); const c = BY[QZ.qs[QZ.i].id]; const v = (inp.value || '').trim(); if (!v) return;
      const n = x => norm(x).join(' ');
      if (n(v) === n(fill(c.en))) { QZ.copy = (QZ.copy || 0) + 1; logEv({ k: 'copy', id: c.id, n: QZ.copy }); save(); render(); const ni = $('#copyIn'); if (ni) ni.focus(); }
      else { inp.classList.remove('shake'); void inp.offsetWidth; inp.classList.add('shake'); toast('未啱，對住上面再打'); }
    },
    copySkip: () => { QZ.copy = 99; A.nextQ(); },
    ieltsTab: el => { IEL.tab = el.dataset.tab; stopTimer(); stopRecording(); render(); },
    part: el => { IEL.part = Number(el.dataset.p); stopTimer(); stopRecording(); IEL.audio = null; render(); },
    nextSpeak: () => { IEL.spk = ''; IEL.audio = null; IEL.idx[IEL.part] = (IEL.idx[IEL.part] || 0) + 1 + Math.floor(Math.random() * 3); stopTimer(); stopRecording(); render(); },
    task: el => { IEL.task = Number(el.dataset.t); render(); },
    spkGo: el => spkStart(Number(el.dataset.s)),
    spkStop: () => spkStop(),
    spkRetryAI: () => aiSpeakAudio(),
    p2go: () => {
      // 先攞咪高峰權限（要喺撳掣嗰下攞，iPhone 先肯），準備完自動開始錄音
      if (navigator.mediaDevices) navigator.mediaDevices.getUserMedia({ audio: true }).then(st => st.getTracks().forEach(t => t.stop())).catch(() => {});
      startTimer(60, '準備時間（寫低關鍵字）', () => { toast('🎤 開始講！最少 1 分鐘'); spkStart(120); }); },
    speakDone: () => {
      const list = NE.ielts.speaking[IEL.part]; const it = list[(IEL.idx[IEL.part] || 0) % list.length];
      logEv({ k: 'speak', p: IEL.part, q: (IEL.part === 2 ? it.q : it).slice(0, 100), rec: IEL.audio ? 1 : 0 }); IEL.audio = null;
      S.counters.speak++; logToday().ex += 3; save(); checkGoal(); toast('👏 練完一題！+3'); A.nextSpeak(); },
    essayDone: el => {
      const id = el.dataset.id; const d = S.drafts[id] || { text: '' }; const w = NE.ielts.writing.find(x => x.id === id);
      const wc = countWords(d.text), target = w.task === 2 ? 250 : 150;
      if (wc < 30) return toast('寫多少少先撳完成 ✍️');
      if (wc < target && !confirm(`得 ${wc} 字（要求 ${target}），考試會扣分。都當完成？`)) return;
      if (!d.done) { S.counters.essay++; logToday().ex += 10; }
      logEv({ k: 'essay', id, wc, task: w.task });
      d.done = today(); S.drafts[id] = d; save(); stopTimer(); checkGoal(); confetti(); toast('🎉 完成一篇！+10');
    },
    ics: () => {
      const [hh, mm] = (S.settings.remind || '21:00').split(':');
      const d = addDays(today(), 0).replace(/-/g, '');
      const url = location.href.split('#')[0];
      const ics = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Nurse English//ZH', 'BEGIN:VEVENT', 'UID:nurse-english-daily-' + Date.now(),
        'DTSTAMP:' + new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z', `DTSTART:${d}T${hh}${mm}00`, 'DURATION:PT15M', 'RRULE:FREQ=DAILY',
        'SUMMARY:📚 護士英文 15 分鐘', 'DESCRIPTION:打開 app 完成今日目標！ ' + url, 'URL:' + url,
        'BEGIN:VALARM', 'ACTION:DISPLAY', 'DESCRIPTION:學英文時間到 💪', 'TRIGGER:-PT0M', 'END:VALARM', 'END:VEVENT', 'END:VCALENDAR'].join('\r\n');
      download('nurse-english-reminder.ics', ics, 'text/calendar');
    },
    export: () => download('nurse-english-backup-' + today() + '.json', JSON.stringify(exportData(), null, 1), 'application/json'),
    import: () => $('#importFile').click(),
    reset: () => {
      if (!confirm('確定清除所有學習記錄？（建議先匯出備份）')) return;
      if (!confirm('真係確定？呢個動作冇得還原。')) return;
      const keep = S.settings; S = load(); S.cards = {}; S.log = {}; S.custom = []; S.stars = {}; S.drafts = {}; S.counters = { speak: 0, essay: 0 }; S.events = []; S.settings = keep;
      save(); rebuild(); toast('已重設'); location.hash = '#home'; render();
    }
  };
  function download(name, text, type) {
    const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([text], { type })); a.download = name;
    document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
  }

  document.addEventListener('click', e => {
    const el = e.target.closest('[data-act]'); if (!el) return;
    ripple(el, e);
    const fn = A[el.dataset.act]; if (fn) { e.preventDefault(); fn(el, e); }
  });
  document.addEventListener('input', e => {
    const t = e.target;
    if (t.id === 'libSearch') { V._libq = t.value; const q = t.value.trim().toLowerCase(); const box = $('#libRes');
      if (!q) { box.innerHTML = ''; return; }
      const hits = ALL.filter(c => (fill(c.en) + ' ' + c.zh + ' ' + c.def).toLowerCase().includes(q)).slice(0, 60);
      box.innerHTML = `<div class="card"><div class="small muted">搵到 ${hits.length} 個</div>${cardList(hits)}</div>`; }
    if (t.id === 'essay') {
      const id = t.dataset.id; S.drafts[id] = Object.assign(S.drafts[id] || {}, { text: t.value, t: Date.now() });
      const w = NE.ielts.writing.find(x => x.id === id); const wc = countWords(t.value);
      $('#wc').textContent = wc + ' / ' + (w.task === 2 ? 250 : 150) + ' 字'; clearTimeout(A._st); A._st = setTimeout(save, 500);
    }
    if (t.dataset.set === 'rate') $('#rateV').textContent = t.value;
    if (t.dataset.rq != null && RD) RD.ans[t.dataset.rq] = t.value;
    if (t.dataset.lq != null && LS) LS.ans[t.dataset.lq] = t.value;
    if (t.id === 'dcIn' && DC) DC.typed = t.value;
    if (t.id === 'recallIn' && SES) SES.typed = t.value;
    if (t.id === 'spkText') IEL.spk = t.value;
    if (t.id === 'paraIn') PP.typed = t.value;
  });
  document.addEventListener('change', e => {
    const t = e.target;
    if (t.dataset.set) {
      const k = t.dataset.set; const num = ['dailyGoal', 'newPerDay', 'newIelts', 'rate'].includes(k);
      S.settings[k] = num ? Number(t.value) : (k === 'advFirst' || k === 'sentPrompt') ? t.value === 'true' : t.value; save();
      if (k === 'theme') applyTheme();
      if (k === 'dailyGoal') { const L = logToday(); if (activity(L) < S.settings.dailyGoal) L.goalHit = false; save(); }
      toast('已儲存');
    }
    if (t.dataset.deckToggle) {
      const set = new Set(enabledDecks()); if (t.checked) set.add(t.dataset.deckToggle); else set.delete(t.dataset.deckToggle);
      if (!set.size) { t.checked = true; return toast('最少揀一個字庫'); }
      S.settings.decks = [...set]; save();
    }
    if (t.id === 'importFile' && t.files[0]) {
      const fr = new FileReader();
      fr.onload = () => {
        try {
          const d = JSON.parse(fr.result);
          if (!d || typeof d !== 'object' || !d.cards || !d.settings) throw new Error('唔係呢個 app 嘅備份檔');
          if (!confirm('匯入會取代而家嘅學習記錄，確定？')) return;
          localStorage.setItem(KEY, JSON.stringify(d)); S = load(); rebuild(); applyTheme(); toast('✅ 匯入成功'); render();
        } catch (err) { toast('匯入失敗：' + err.message); }
      };
      fr.readAsText(t.files[0]); t.value = '';
    }
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Enter' && e.target.id === 'spellIn') { e.preventDefault(); A.spellGo(); }
    if (e.key === 'Enter' && e.target.id === 'copyIn') { e.preventDefault(); A.copyGo(); }
    if (location.hash === '#study' && SES && !e.target.closest('input,textarea')) {
      if (e.key === ' ' && !SES.revealed) { e.preventDefault(); A.reveal(); }
      else if (SES.revealed && '1234'.includes(e.key)) grade(Number(e.key) - 1);
    }
  });

  // ===== 啟動 =====
  if (navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(() => {});
  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) navigator.serviceWorker.register('sw.js').catch(() => {});
  if (syncReady()) setTimeout(() => syncNow(false), 2000);
  render();
})();
