// 🧩 文法題選項修正：避免正確答案明顯長過其他選項
(function () {
  const F = (q, c, a) => (NE.grammar || []).filter(x => x.q === q && x.c[x.a] === c[a] && c.length === 4).forEach(g => { g.c = c; g.a = a; });
  F('I ___ as a nurse for three years now.', ['work', 'worked', 'have been working', 'had been working'], 2);
  F('I ___ on this ward since 2024.', ['work', 'am working', 'have been working', 'had been working'], 2);
  F('By next year, I ___ my nursing degree.', ['finish', 'will have finished', 'am finishing', 'would have finished'], 1);
  F('Had the nurse not noticed the rash, the child ___ seriously ill.', ['will become', 'would have become', 'will have become', 'became'], 1);
  F('You ___ fast before this test; you can eat normally.', ['mustn\'t', 'don\'t have to', 'must', 'shouldn\'t'], 1);
  F('Staff ___ to attend fire training every year.', ['must', 'are required', 'have required', 'are requiring'], 1);
  F('The number of admissions was ___ higher in 2025 than in 2015.', ['very', 'significantly', 'considerable', 'more'], 1);
  F('You can visit ___ you wash your hands first.', ['unless', 'provided that', 'although', 'even though'], 1);
  // 文法題選項唔會洗牌，原本七成答案喺 B：按題目固定將正確答案放去 A–D 其中一個位置
  (NE.grammar || []).forEach(g => { if (!Array.isArray(g.c) || g.c.length !== 4) return;
    const pos = [...g.q].reduce((h, ch) => (h * 31 + ch.charCodeAt(0)) >>> 0, 11) % 4; const ans = g.c[g.a];
    const arr = g.c.filter((_, k) => k !== g.a); arr.splice(pos, 0, ans); g.c = arr; g.a = pos; });
})();
