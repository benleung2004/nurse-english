// 所有內容資料嘅共用 helper。每張卡：en 英文、zh 中文、def 英文解釋、ex 例句、exZh 例句中文、note 中文解釋/提示
window.NE = { decks: [], cards: [], ielts: {} };
// 護理科目（字庫用 opts.grp 分組；字庫頁按呢個次序顯示）
NE.subjects = [['paed', '👶 兒科'], ['cardio', '❤️ 心血管'], ['resp', '🫁 呼吸系統'], ['gi', '🍽️ 消化系統'], ['renal', '💧 腎科及泌尿科'], ['neuro', '🧠 腦神經科'], ['endo', '🩸 內分泌及糖尿病'], ['ortho', '🦴 骨科'], ['skin', '🩹 皮膚及傷口'], ['haemonc', '🎗️ 血液及腫瘤科']];
NE.deck = function (id, name, zh, cat, icon, opts, rows) {
  NE.decks.push(Object.assign({ id, name, zh, cat, icon }, opts));
  rows.forEach(r => NE.cards.push({
    id: id + ':' + r[0], d: id, en: r[0], zh: r[1], def: r[2] || '',
    ex: r[3] || '', exZh: r[4] || '', note: r[5] || ''
  }));
};
