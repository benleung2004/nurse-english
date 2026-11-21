// 所有內容資料嘅共用 helper。每張卡：en 英文、zh 中文、def 英文解釋、ex 例句、exZh 例句中文、note 中文解釋/提示
window.NE = { decks: [], cards: [], ielts: {} };
NE.deck = function (id, name, zh, cat, icon, opts, rows) {
  NE.decks.push(Object.assign({ id, name, zh, cat, icon }, opts));
  rows.forEach(r => NE.cards.push({
    id: id + ':' + r[0], d: id, en: r[0], zh: r[1], def: r[2] || '',
    ex: r[3] || '', exZh: r[4] || '', note: r[5] || ''
  }));
};
