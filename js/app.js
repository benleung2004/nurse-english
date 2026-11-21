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
    'ielts-speak': '#db2777', mine: '#f59e0b'
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
  const DEFAULTS = { name: '', dailyGoal: 20, newPerDay: 10, maxReview: 100, zhMode: 'tap', accent: 'en-GB', rate: 0.9, theme: 'auto', decks: null, remind: '21:00', hideInstall: false };
  function load() {
    let d = {};
    try { d = JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { d = {}; }
    return {
      settings: Object.assign({}, DEFAULTS, d.settings), cards: d.cards || {}, log: d.log || {},
      custom: d.custom || [], stars: d.stars || {}, drafts: d.drafts || {}, counters: Object.assign({ speak: 0, essay: 0 }, d.counters)
    };
  }
  let S = load();
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { toast('儲存失敗：' + e.message); } }
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

  function dueCount(deck) {
    const t = today();
    return ALL.filter(c => (!deck || c.d === deck) && S.cards[c.id] && S.cards[c.id].due <= t).length;
  }
  function newLeftToday() { return Math.max(0, S.settings.newPerDay - (logToday().n || 0)); }
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
    const due = ALL.filter(c => (!opts.deck || c.d === opts.deck) && S.cards[c.id] && S.cards[c.id].due <= t)
      .sort((a, b) => S.cards[a.id].due < S.cards[b.id].due ? -1 : 1).slice(0, S.settings.maxReview).map(c => c.id);
    const nNew = opts.newCount != null ? opts.newCount : newLeftToday();
    const news = pickNew(opts.deck ? [opts.deck] : enabledDecks(), nNew);
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
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  const norm = s => fill(s).toLowerCase().replace(/\(.*?\)/g, '').replace(/[^a-z0-9' ]/g, ' ').split(/\s+/).filter(Boolean);
  function practiceSay(target, out) {
    if (!SR) { out.innerHTML = '<span class="muted">呢個瀏覽器唔支援語音辨識（iPhone 請用 Safari），可以撳 🔊 跟住讀。</span>'; return; }
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

  // ===== 錄音（口語練習自己聽返）=====
  let REC = null;
  async function toggleRecord() {
    const box = $('#recBox');
    if (REC && REC.mr.state === 'recording') { REC.mr.stop(); return; }
    if (!navigator.mediaDevices || !window.MediaRecorder) { toast('呢部機唔支援錄音'); return; }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mr = new MediaRecorder(stream); const chunks = [];
      REC = { mr, stream };
      mr.ondataavailable = e => chunks.push(e.data);
      mr.onstop = () => {
        stream.getTracks().forEach(t => t.stop());
        const url = URL.createObjectURL(new Blob(chunks, { type: mr.mimeType }));
        if (box) box.innerHTML = `<p class="small muted">聽返自己講：留意停頓、時態、發音</p><audio controls src="${url}" style="width:100%"></audio>`;
        const b = $('#recBtn'); if (b) b.innerHTML = '🎙️ 再錄';
      };
      mr.start();
      if (box) box.innerHTML = '<span class="rec"></span> 錄音中…撳「停止」完成';
      const b = $('#recBtn'); if (b) b.innerHTML = '⏹️ 停止';
    } catch (e) { toast('未能使用咪高峰：' + e.message); }
  }
  function stopRecording() { if (REC && REC.mr.state === 'recording') REC.mr.stop(); REC = null; }

  // ===== 學習 session =====
  let SES = null;
  function startSession(opts) {
    const q = buildQueue(opts || {});
    if (!q.length) { toast(opts && opts.deck ? '呢個字庫暫時冇卡要學 🎉' : '暫時冇卡要溫 🎉'); return; }
    SES = { queue: q, i: 0, revealed: false, showZh: false, hint: false, seen: new Set(), good: 0, again: 0, anim: 'enter' };
    location.hash = '#study';
  }
  function grade(g) {
    const id = SES.queue[SES.i]; const prev = S.cards[id];
    S.cards[id] = nextState(prev, g);
    const L = logToday();
    if (!SES.seen.has(id)) { SES.seen.add(id); if (!prev) L.n++; else L.r++; }
    if (g === 0) { SES.again++; SES.queue.splice(Math.min(SES.i + 4, SES.queue.length), 0, id); } else SES.good++;
    SES.i++; SES.revealed = false; SES.showZh = false; SES.hint = false; SES.anim = 'enter';
    save(); checkGoal(); render();
  }

  // ===== 畫面 =====
  const V = {};

  V.home = () => {
    const L = logToday(), act = activity(L), goal = S.settings.dailyGoal;
    const due = dueCount(), nl = Math.min(newLeftToday(), pickNew(enabledDecks(), newLeftToday()).length);
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
      <h1>${greet}${S.settings.name ? '，' + esc(S.settings.name) : ''} 👋</h1></div>
      <a class="btn icon-btn" href="#settings" aria-label="設定">⚙️</a>
    </div>
    <div class="card hero">
      <div class="goal">
        ${ring(act, goal)}
        <div class="grow">
          <div class="streak"><span class="flame">🔥</span> ${st} 日連續</div>
          <div class="muted small">今日進度 ${act} / ${goal}　${L.goalHit ? '✅ 已達標' : ''}</div>
          <div class="muted small">待溫習 ${due} · 新字 ${nl}</div>
        </div>
      </div>
      <div style="margin-top:14px">
      ${due + nl > 0
        ? `<button class="btn-white btn-big btn-block pulse" data-act="startToday">開始今日學習 →</button>`
        : `<div class="row"><div class="grow"><b>今日嘅卡已完成 ✨</b></div><button class="btn-white" data-act="extraNew">+5 新字</button></div>`}
      </div>
    </div>
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
    <div class="card quote" style="margin-top:12px">
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
    const showZh = S.settings.zhMode === 'always' || SES.showZh;
    const p = SES.i / SES.queue.length * 100;
    const prev = S.cards[c.id];
    const isNew = !prev;
    let front, back = '';
    if (dk.say) {
      front = `<div class="small muted">試下用英文講：</div><div class="term sentence">${esc(fill(c.zh))}</div><div class="small muted">情境：${esc(c.def)}</div>`;
      if (SES.revealed) back = `<div class="fade-in"><div class="row" style="align-items:flex-start"><div class="term sentence grow" style="color:${dc}">${esc(fill(c.en))}</div>${spk(speakText(c))}</div></div>`;
    } else {
      front = `<div class="row" style="align-items:flex-start"><div class="term grow">${esc(c.en)}</div>${spk(speakText(c))}</div>
        ${dk.abbr ? '<div class="small muted">呢個縮寫代表咩？</div>' : dk.roots ? '<div class="small muted">呢個字根／字首字尾係咩意思？</div>' : ''}
        ${!SES.revealed ? (SES.hint ? `<div class="zh fade-in">${esc(c.zh)}</div>` : `<div><button class="reveal-zh" data-act="hint">💡 唔肯定？睇中文提示</button></div>`) : ''}`;
      if (SES.revealed) back = `<div class="fade-in" style="display:flex;flex-direction:column;gap:10px">
        <div class="def"><b>${esc(c.def)}</b></div>
        ${showZh ? `<div class="zh">${esc(c.zh)}</div>` : `<div><button class="reveal-zh" data-act="showZh">顯示中文 🀄</button></div>`}
        ${c.ex ? `<div class="ex"><div class="row" style="align-items:flex-start;flex-wrap:nowrap"><div class="grow">${esc(c.ex)}</div>${dk.roots ? '' : spk(c.ex)}</div>${showZh && c.exZh ? `<div class="zhline">${esc(c.exZh)}</div>` : ''}</div>` : ''}
      </div>`;
    }
    const extra = SES.revealed ? `
      ${c.note ? `<div class="note">💬 ${esc(fill(c.note))}</div>` : ''}
      <div class="row small">
        <button class="chip" data-act="star" data-id="${esc(c.id)}">${S.stars[c.id] ? '⭐ 已收藏' : '☆ 收藏'}</button>
        ${!dk.roots ? `<button class="chip" data-act="say" data-text="${esc(speakText(c))}">🎤 跟讀</button>` : ''}
        <a class="chip btn" href="${esc(dictUrl(dk.roots ? speakText(c) : c.en))}" target="_blank" rel="noopener">🔎 字典</a>
      </div>
      <div id="sayOut" class="heard"></div>` : '';
    const grades = SES.revealed ? `<div class="grades">
      ${[['唔記得', 0], ['難', 1], ['記得', 2], ['好易', 3]].map(([t, g]) => `<button class="g${g}" data-act="grade" data-g="${g}">${t}<small>${ivLabel(nextState(prev, g).i)}</small></button>`).join('')}
      </div>` : `<button class="btn-primary btn-big btn-block" data-act="reveal">${dk.say ? '睇答案' : '揭曉答案'} 👀</button>`;
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
      <div class="grid2"><button class="btn-primary" data-act="extraNew">再學 5 個新字</button>
      <button class="btn-accent" data-act="quiz" data-kind="learned">做個小測驗</button></div>
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
    const groups = CATS.map(([cat, title]) => {
      const ds = DECKS.filter(d => d.cat === cat);
      return `<h2>${title}</h2>` + ds.map(deckRow).join('');
    }).join('');
    const starred = ALL.filter(c => S.stars[c.id]);
    return `<div class="row between"><h1>📚 字庫</h1><button class="btn-accent" data-act="addWord">＋ 加生字</button></div>
      <input id="libSearch" type="search" placeholder="搵字（英文／中文）" value="${esc(V._libq || '')}" style="margin:10px 0">
      <div id="libRes">${res}</div>
      ${starred.length ? `<div class="card tight deckrow" data-act="openStarred" style="--dc-soft:rgba(255,193,7,.2)"><div class="ic">⭐</div><div class="grow"><b>收藏</b><div class="small muted">${starred.length} 個</div></div><span>›</span></div>` : ''}
      ${groups}`;
  };
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
  const spellable = c => /^[a-zA-Z' -]{3,24}$/.test(c.en) && !deckOf(c).abbr && !deckOf(c).say;
  function startQuiz(kind, deck) {
    const t = today();
    let pool;
    if (kind === 'deck') pool = ALL.filter(c => c.d === deck);
    else if (kind === 'weak') pool = ALL.filter(c => S.stars[c.id] || (S.cards[c.id] && S.cards[c.id].l > 0));
    else if (kind === 'abbr') pool = ALL.filter(c => c.d === 'abbr');
    else if (kind === 'spell') pool = ALL.filter(c => S.cards[c.id] && spellable(c));
    else if (kind === 'listen') pool = ALL.filter(c => S.cards[c.id] && !deckOf(c).roots);
    else if (kind === 'all') pool = ALL.filter(c => enabledDecks().includes(c.d));
    else pool = ALL.filter(c => S.cards[c.id]);
    if (kind === 'spell' && pool.length < 5) pool = ALL.filter(spellable);
    if (pool.length < 4) {
      if (kind === 'weak') { toast('暫時冇弱項 👍 試下快速測驗'); return; }
      toast('已學嘅字未夠，用全部字庫出題');
      pool = ALL.filter(c => enabledDecks().includes(c.d));
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
    QZ = { qs, i: 0, score: 0, answered: false, wrong: [], kind, deck, t };
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
      ${c.note ? `<div class="small" style="margin-top:4px">💬 ${esc(fill(c.note))}</div>` : ''}</div>
      <button class="btn-primary btn-block" style="margin-top:10px" data-act="nextQ">${QZ.i + 1 < QZ.qs.length ? '下一題 →' : '睇結果'}</button>` : '';
    return `<div class="row" style="flex-wrap:nowrap;margin-bottom:12px"><button class="icon-btn" data-act="exitQuiz">✕</button>
      <div class="progress grow"><div style="width:${QZ.i / QZ.qs.length * 100}%"></div></div><span class="small muted">${QZ.i + 1}/${QZ.qs.length}</span></div>
      <div class="card flash ${QZ.answered ? '' : 'enter'}" style="--dc:${color(c.d)};min-height:0"><span class="deck-tag">${esc(dk.icon)} ${esc(dk.zh)}</span>${prompt}</div>
      ${body}${fb}`;
  };
  function answer(ok, picked, typed) {
    const q = QZ.qs[QZ.i]; QZ.answered = true; QZ.ok = ok; QZ.picked = picked; QZ.typed = typed;
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
    const tabs = [['speak', '🎤 口語'], ['write', '✍️ 寫作'], ['vocab', '📘 字彙'], ['tips', '💡 貼士']];
    let body = '';
    if (IEL.tab === 'speak') body = speakHtml();
    else if (IEL.tab === 'write') body = writeListHtml();
    else if (IEL.tab === 'vocab') body = `${DECKS.filter(d => d.cat === 'ielts').map(deckRow).join('')}
      <h2>🔗 連接詞速查</h2>${linkingHtml()}`;
    else body = tipsHtml();
    return `<h1>🎓 <span class="grad-text">IELTS</span> 溫習</h1>
      <p class="muted small">題目為原創練習題（健康／工作話題為主），唔係官方真題。</p>
      <div class="tabs" style="margin:12px 0">${tabs.map(([k, t]) => `<button class="chip ${IEL.tab === k ? 'on' : ''}" data-act="ieltsTab" data-tab="${k}">${t}</button>`).join('')}</div>
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
        <div class="small muted" id="timerLabel">${TIMER ? esc(TIMER.label) : '計時器'}</div>
        <div class="timer" id="timerDisp">${Math.floor(secs / 60)}:${pad(secs % 60)}</div>
        <div class="grid2" style="margin-top:8px">
          ${P === 2 ? `<button class="btn-primary" data-act="p2go">⏱️ 準備 1 分鐘</button>` : `<button class="btn-primary" data-act="tgo" data-s="${secs}">⏱️ 開始作答</button>`}
          <button class="btn-accent" id="recBtn" data-act="rec">🎙️ 錄音</button>
        </div>
        <div id="recBox" style="margin-top:10px"></div>
      </div>
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
      <details class="card tight"><summary>✅ 交之前自我檢查</summary>${checks.map((c, i) => `<label class="row" style="color:var(--text);font-weight:500;margin:6px 0"><input type="checkbox" id="ck${i}"> ${esc(c)}</label>`).join('')}</details>
      ${sample ? `<details class="card tight"><summary>📄 參考範文（寫完先睇！）</summary><p class="small muted">${esc(sample.note)}</p><div class="essay">${esc(sample.text)}</div></details>` : ''}
      <button class="btn-primary btn-block" data-act="essayDone" data-id="${esc(id)}">✅ 完成呢篇</button>
      <p class="small muted center">想有人幫你改？可以將文章 copy 去俾老師或者 AI 批改，對照上面評分準則。</p>`;
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
      <div class="grid3" style="margin-top:12px">
        ${[['🔥', st, '連續日數'], ['🏆', ls, '最長連續'], ['📖', learned, '已學'], ['💎', mastered, '熟記（21日+）'], ['🎯', qt ? Math.round(q / qt * 100) + '%' : '–', '30日測驗準確'], ['⏰', tomorrow, '明日到期']]
        .map(([i, n, l]) => `<div class="card tile" style="margin:0"><div>${i}</div><div class="n">${n}</div><div class="l">${l}</div></div>`).join('')}
      </div>
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
        <label>每日新字數量</label>${sel('newPerDay', [[5, '5'], [10, '10'], [15, '15'], [20, '20'], [30, '30']])}
        <label>中文翻譯顯示</label>${sel('zhMode', [['tap', '撳先顯示（先試自己諗英文意思）'], ['always', '一揭卡就顯示']])}
        <label>英文口音</label>${sel('accent', [['en-GB', '🇬🇧 英式（IELTS 常用）'], ['en-AU', '🇦🇺 澳洲'], ['en-US', '🇺🇸 美式']])}
        <label>讀音速度：<span id="rateV">${s.rate}</span></label><div class="row" style="flex-wrap:nowrap"><input type="range" min="0.6" max="1.1" step="0.05" data-set="rate" value="${s.rate}"><button class="chip" data-act="speak" data-text="Please take a deep breath in, and out.">🔊 試聽</button></div>
        <label>外觀</label>${sel('theme', [['auto', '跟手機'], ['light', '淺色'], ['dark', '深色']])}
      </div>
      <h2>新字來源（揀想學嘅字庫）</h2>
      <div class="card">${CATS.map(([cat, t]) => `<div class="small muted" style="margin-top:6px">${t}</div>` + DECKS.filter(d => d.cat === cat).map(d => `<label class="row" style="color:var(--text);font-weight:500;margin:8px 0"><input type="checkbox" data-deck-toggle="${esc(d.id)}" ${en.includes(d.id) ? 'checked' : ''}> ${esc(d.icon)} ${esc(d.zh)}</label>`).join('')).join('')}</div>
      <h2>⏰ 每日提醒</h2>
      <div class="card"><p class="small">下載一個每日重複嘅日曆提醒（.ics），加入 iPhone／Android 日曆，到鐘就會彈通知。</p>
        <div class="row" style="flex-wrap:nowrap"><input type="time" data-set="remind" value="${esc(s.remind)}"><button class="btn-primary" data-act="ics">下載提醒</button></div></div>
      <h2>💾 備份</h2>
      <div class="card"><p class="small">學習記錄只存喺呢部手機。換機或清 Safari 資料前，記得匯出備份。</p>
        <div class="grid2"><button class="btn-ghost" data-act="export">⬇️ 匯出備份</button><button class="btn-ghost" data-act="import">⬆️ 匯入備份</button></div>
        <input type="file" id="importFile" accept="application/json,.json" class="hidden">
        <button class="btn-ghost btn-block" style="margin-top:10px;color:var(--bad)" data-act="reset">重設所有學習記錄</button></div>
      <p class="small muted center">Made with ❤️ · 內容 ${NE.cards.length} 張卡 · 資料只存喺本機</p>`;
  };

  // ===== 路由 =====
  function render() {
    const raw = (location.hash || '#home').slice(1); const [r, arg] = raw.split('/');
    const route = V[r] ? r : 'home';
    if (route !== 'quizrun' && route !== 'study') { if (window.speechSynthesis) speechSynthesis.cancel(); }
    document.body.classList.toggle('focus', ['study', 'quizrun', 'write'].includes(route));
    const tabFor = { deck: 'library', quizrun: 'quiz', write: 'ielts', settings: 'home', study: 'home' }[route] || route;
    document.querySelectorAll('.tabbar a').forEach(a => a.classList.toggle('on', a.dataset.tab === tabFor));
    $('#app').innerHTML = V[route](arg ? decodeURIComponent(arg) : undefined);
    after(route);
  }
  let lastRoute = '';
  function after(route) {
    if (route !== lastRoute) { window.scrollTo(0, 0); if (lastRoute === 'ielts' || lastRoute === 'write') { stopTimer(); stopRecording(); } lastRoute = route; }
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
    startToday: () => startSession({}),
    extraNew: () => startSession({ newCount: 5, deck: null }),
    learnOne: el => { closeModal(); startSession({ ids: [el.dataset.id] }); },
    studyDeck: el => startSession({ deck: el.dataset.deck, newCount: 10 }),
    hint: () => { SES.hint = true; render(); },
    reveal: () => { SES.revealed = true; SES.anim = 'flip'; render(); },
    showZh: () => { SES.showZh = true; render(); },
    grade: el => grade(Number(el.dataset.g)),
    exitStudy: () => { SES = null; location.hash = '#home'; },
    star: el => { const id = el.dataset.id; if (S.stars[id]) delete S.stars[id]; else S.stars[id] = 1; save(); el.textContent = S.stars[id] ? '⭐ 已收藏' : '☆ 收藏'; el.classList.add('shake'); setTimeout(() => el.classList.remove('shake'), 400); },
    hideInstall: () => { S.settings.hideInstall = true; save(); render(); },
    detail: el => openModal(detailHtml(BY[el.dataset.id])),
    closeModal: () => closeModal(),
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
    quiz: el => startQuiz(el.dataset.kind, el.dataset.deck),
    quizDeckGo: () => startQuiz('deck', $('#quizDeck').value),
    quizAgain: () => startQuiz(QZ.kind, QZ.deck),
    exitQuiz: () => { QZ = null; location.hash = '#quiz'; },
    qhint: () => { QZ.hint = true; render(); },
    pick: el => { const q = QZ.qs[QZ.i]; answer(el.dataset.id === q.id, el.dataset.id); },
    spellGo: () => {
      const v = ($('#spellIn').value || '').trim(); if (!v) return;
      const c = BY[QZ.qs[QZ.i].id]; const n = s => s.toLowerCase().replace(/[^a-z]/g, '');
      answer(n(v) === n(c.en), null, v);
    },
    nextQ: () => { QZ.i++; QZ.answered = false; QZ.hint = false; QZ.typed = null; render(); },
    ieltsTab: el => { IEL.tab = el.dataset.tab; stopTimer(); stopRecording(); render(); },
    part: el => { IEL.part = Number(el.dataset.p); stopTimer(); render(); },
    nextSpeak: () => { IEL.idx[IEL.part] = (IEL.idx[IEL.part] || 0) + 1 + Math.floor(Math.random() * 3); stopTimer(); stopRecording(); render(); },
    task: el => { IEL.task = Number(el.dataset.t); render(); },
    tgo: el => startTimer(Number(el.dataset.s), '作答中…'),
    p2go: () => startTimer(60, '準備時間（寫低關鍵字）', () => { toast('🎤 開始講！2 分鐘'); startTimer(120, '講緊…（最少講夠 1 分鐘）'); }),
    rec: () => toggleRecord(),
    speakDone: () => { S.counters.speak++; logToday().ex += 3; save(); checkGoal(); toast('👏 練完一題！+3'); A.nextSpeak(); },
    essayDone: el => {
      const id = el.dataset.id; const d = S.drafts[id] || { text: '' }; const w = NE.ielts.writing.find(x => x.id === id);
      const wc = countWords(d.text), target = w.task === 2 ? 250 : 150;
      if (wc < 30) return toast('寫多少少先撳完成 ✍️');
      if (wc < target && !confirm(`得 ${wc} 字（要求 ${target}），考試會扣分。都當完成？`)) return;
      if (!d.done) { S.counters.essay++; logToday().ex += 10; }
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
    export: () => download('nurse-english-backup-' + today() + '.json', JSON.stringify(S, null, 1), 'application/json'),
    import: () => $('#importFile').click(),
    reset: () => {
      if (!confirm('確定清除所有學習記錄？（建議先匯出備份）')) return;
      if (!confirm('真係確定？呢個動作冇得還原。')) return;
      const keep = S.settings; S = load(); S.cards = {}; S.log = {}; S.custom = []; S.stars = {}; S.drafts = {}; S.counters = { speak: 0, essay: 0 }; S.settings = keep;
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
  });
  document.addEventListener('change', e => {
    const t = e.target;
    if (t.dataset.set) {
      const k = t.dataset.set; const num = ['dailyGoal', 'newPerDay', 'rate'].includes(k);
      S.settings[k] = num ? Number(t.value) : t.value; save();
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
    if (location.hash === '#study' && SES && !e.target.closest('input,textarea')) {
      if (e.key === ' ' && !SES.revealed) { e.preventDefault(); A.reveal(); }
      else if (SES.revealed && '1234'.includes(e.key)) grade(Number(e.key) - 1);
    }
  });

  // ===== 啟動 =====
  if (navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(() => {});
  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) navigator.serviceWorker.register('sw.js').catch(() => {});
  render();
})();
