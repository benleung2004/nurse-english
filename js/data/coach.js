// Claude 分析完佢嘅 log 之後更新呢個檔（見 COACH.md）
// plan：首頁「📌 今期重點」；replies：回覆意見箱（key = 意見 id）
NE.coach = {
  updated: '',
  plan: {
    message: '',
    // 例：{ label: '串字練習 10 題', act: 'quiz', kind: 'spell' } 或 { label: '溫藥物字庫', act: 'deck', deck: 'meds' }
    focus: []
  },
  replies: {}
};
