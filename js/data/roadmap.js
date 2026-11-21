// IELTS 備考路線圖（大約 10–12 星期）。Claude 睇完 log 可以改呢度。
// type: 'once' 做一次就剷；'weekly' 每星期重新剔
// go：撳咗會去 app 邊度（ielts 分頁名 / route）
NE.roadmap = [
  {
    id: 'prep', icon: '🧭', title: '開始前準備', when: '而家', type: 'once',
    tip: '先搞掂考試同工具，之後就可以專心練。',
    items: [
      { id: 'book', t: '報名 IELTS（揀 Academic 或 General Training；建議電腦考試，大約 3–5 日出成績）', link: 'https://ielts.org/take-a-test/booking-your-test' },
      { id: 'date', t: '喺 app「設定 → IELTS 目標」填考試日期同目標分數', go: '#settings' },
      { id: 'books', t: '準備 Cambridge IELTS 真題書（Academic，最新 3–4 本，例如 17–20）' },
      { id: 'sync', t: '連接同步同 AI key（Ben 會幫你）', go: '#settings' },
      { id: 'manual', t: '睇一次使用說明', go: '#help' },
    ]
  },
  {
    id: 'diag', icon: '🔍', title: '第 1 星期：摸底', when: '第 1 星期', type: 'once',
    tip: '用一套真題知道自己而家幾多分，計時做，唔好查字典。做完喺下面「模擬考分數」記低。',
    items: [
      { id: 'L', t: '聽力 1 份（30 分鐘，只聽一次）' },
      { id: 'R', t: '閱讀 1 份（60 分鐘，3 篇）' },
      { id: 'W', t: '寫作 Task 1 + Task 2（60 分鐘），打入 app 叫 🤖 AI 批改', go: 'write' },
      { id: 'S', t: '口語：Part 1、2、3 各錄音一題，用 🤖 AI 評分', go: 'speak' },
      { id: 'score', t: '喺下面記低摸底分數' },
    ]
  },
  {
    id: 'skills', icon: '🛠️', title: '第 2–6 星期：補技巧', when: '考試前 6 星期以上', type: 'weekly',
    tip: '重點係 IELTS 題型同技巧，唔係死背。每日 30–40 分鐘 app ＋ 每星期幾份真題。',
    items: [
      { id: 'daily', t: '每日做完首頁「🗓️ 今日任務」（最少 5 日）' },
      { id: 'cR', t: 'Cambridge 閱讀 1 份（計時），錯題睇解釋', go: 'read' },
      { id: 'cL', t: 'Cambridge 聽力 1 份（計時），錯嘅字串一次', go: 'listen' },
      { id: 'w2', t: '寫 2 篇作文（1 篇 Task 1、1 篇 Task 2），交 AI 批改，跟住改', go: 'write' },
      { id: 'sp', t: '口語練 5 題，最少 1 題 Part 2（講夠 2 分鐘）', go: 'speak' },
      { id: 'v7', t: '溫 IELTS 高分字庫（口語、寫作句型、話題字彙）', go: 'vocab' },
    ]
  },
  {
    id: 'mock', icon: '⏱️', title: '第 7–10 星期：模擬考', when: '考試前 3–6 星期', type: 'weekly',
    tip: '每星期一套完整真題，好似真考試咁計時。之後花時間睇錯題：錯喺字彙、理解定時間不夠？',
    items: [
      { id: 'full', t: '完整模擬考 1 套（聽力 → 閱讀 → 寫作，中間唔停）' },
      { id: 'log', t: '喺下面記低今次分數' },
      { id: 'review', t: '錯題逐條睇，生字用「＋加生字」加入 app', go: '#home' },
      { id: 'w1', t: '再寫 1 篇 Task 2，交 AI 批改', go: 'write' },
      { id: 'sp2', t: '口語 Part 2 + Part 3 練 3 組', go: 'speak' },
    ]
  },
  {
    id: 'final', icon: '🏁', title: '最後 2 星期：衝刺', when: '考試前 2 星期內', type: 'once',
    tip: '唔好再學太多新嘢，鞏固同保持狀態。最新嗰本真題留返最後做。',
    items: [
      { id: 'm1', t: '最後模擬考 1：全新真題，計時' },
      { id: 'm2', t: '最後模擬考 2：全新真題，計時' },
      { id: 'spd', t: '每日口語 15 分鐘（大聲講，唔好淨係諗）', go: 'speak' },
      { id: 'tpl', t: '溫熟寫作結構同高分句型', go: 'tips' },
      { id: 'place', t: '確認考場地址、時間、交通（預早 30 分鐘到）' },
      { id: 'id', t: '準備報名時用嘅身份證明文件（護照／身份證）' },
      { id: 'rest', t: '考前一日休息，早啲瞓' },
    ]
  },
  {
    id: 'day', icon: '🎯', title: '考試當日提醒', when: '考試當日', type: 'once',
    tip: '冷靜，跟平時練習咁做就得。',
    items: [
      { id: 'L1', t: '聽力：題目先睇，留意串字同單數／複數' },
      { id: 'R1', t: '閱讀：每篇大約 20 分鐘，唔識就跳，最後一定要填晒' },
      { id: 'W1', t: '寫作：Task 2 先寫（40 分鐘），Task 1 一定要有 overview' },
      { id: 'S1', t: '口語：答長啲、舉例，聽唔明可以叫考官再講一次' },
    ]
  }
];
