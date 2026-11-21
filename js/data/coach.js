// Claude 分析完佢嘅 log 之後更新呢個檔（見 COACH.md）
// plan：首頁「📌 今期重點」；replies：回覆意見箱（key = 意見 id）
NE.coach = {
  updated: '2026-11-21',
  plan: {
    message: '加咗 263 張進階卡：臨床評估、進階程序、藥理、進階疾病、感染控制、長者護理，仲有病房日常句同同事溝通句。基本字太易嘅話，先由呢幾個字庫開始！學習卡依家係 4 揀 1，快好多 💪',
    // 例：{ label: '串字練習 10 題', act: 'quiz', kind: 'spell' } 或 { label: '溫藥物字庫', act: 'deck', deck: 'meds' }
    focus: [
      { label: '🔍 臨床評估（進階）', act: 'deck', deck: 'adv-assess' },
      { label: '⚗️ 藥理', act: 'deck', deck: 'adv-pharm' },
      { label: '🏨 病房日常句子', act: 'deck', deck: 'ph-ward' }
    ]
  },
  replies: {}
};
