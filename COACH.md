# 護士英文：交俾 Claude Code 分析同調整嘅指引

用戶（Ben）會講「睇佢 log」／「睇佢意見」／「幫佢調整練習」→ 跟以下步驟。學習者係 Ben 女朋友：23 歲，香港登記護士（EN），目標 IELTS 6.0–6.5，同時要識工作用嘅醫護英文。

## 1. 攞最新資料
手機連接咗同步嘅話，資料喺**私人** repo `benleung2004/nurse-english-data` 嘅 `data/progress.json`：

```bash
mkdir -p logs && gh api repos/benleung2004/nurse-english-data/contents/data/progress.json -H "Accept: application/vnd.github.raw" > logs/progress-$(date +%F).json
```

失敗（未連接同步）就叫 Ben 喺佢手機「設定 → 匯出備份」，將 `nurse-english-backup-*.json` 放入 `logs/`。**唔好改 `nurse-english-data` 入面嘅資料**，嗰度只係手機寫入。

## 2. 讀資料（次序）
1. `feedback`：佢寫嘅意見（`id`、`cat` bug/hard/easy/want/other、`text`、`ctx` = 關於邊張卡嘅 id、`route`）。對照 `js/data/coach.js` 嘅 `replies`，搵未回覆嘅。
2. `summary`（App 自動計，最近 30 日）：`strengths`、`weaknesses`（按字庫準確率）、`quizTypes`（英→中／中→英／聽力／串字準確率）、`mostMissed`、`pronunciation`、`speaking`、`essays`、`activeDays`。
3. `events`（最多 4000 個，`t` = 時間戳）：
   - `study`：`id` 卡、`g` 0 唔記得／1 難／2 記得／3 好易、`nw` 新卡、`ms` 揭卡前諗咗幾耐
   - `quiz`：`id`、`ty` mcZh/mcEn/listen/spell、`ok`、`a` 佢答咗咩（串字係打嘅字，選擇題係揀咗嘅卡 id）、`ms`
   - `say`：跟讀 `tx` 目標、`h` 語音辨識聽到嘅、`sc` 0–1
   - `speak`：IELTS 口語 `p` Part、`q` 題目、`rec` 有冇錄音
   - `essay`：`id` 題目、`wc` 字數
   - `recall`：學習卡揭答案前佢講／打嘅答案（`a`）同相似度 `sc`
   - `read`／`listen`：`id` 練習、`sc`/`n` 分數、`wrong` 錯題（聽力含佢填咗咩）、閱讀 `types` 各題型分數
   - `dict`：聽寫 `tx` 原句、`a` 佢打咗咩、`acc`
   - `gram`：文法 `g`（`NE.grammar` index）、`cat`、`ok`、`a` 揀咗咩
   - `para`：改寫 `a` 佢寫咗咩、`self` 自評
   - `ai`：Gemini 評分 `kind` essay/speak/para/say、`input` 佢原文（口語係語音轉文字）、`band`／`score`、`res` 完整回覆（改正、建議）。**睇佢嘅口語同寫作原文就喺呢度**，可以核對 AI 評分合唔合理
   - `mock`：佢記低嘅模擬考分數 `L`/`R`/`W`/`S`（band）同備註 `n`
4. `mocks`（Cambridge 模擬考分數列表，睇進度）、`roadmap`（備考路線圖已剔嘅項目：`<階段>:<項目>` 或每週項目 `<階段>:<項目>@<星期一日期>` = 完成日期）。路線圖內容喺 `js/data/roadmap.js`，可以按佢進度調整。
5. `drafts`：IELTS 作文全文（`text`、`done` 完成日期）→ 可以按 IELTS 四項準則批改，估 band，列出常犯文法錯誤。
6. `log`（每日 n 新字／r 溫習／qt 測驗題數／q 答啱／ex 口語寫作分、`goalHit`）、`cards`（每張卡 SRS：`i` 間隔日數、`l` 唔記得次數、`due`）、`settings`、`custom`（佢自己加嘅生字 = 工作上遇到嘅字，好有參考價值）。

## 3. 分析報告（繁體中文，香港口語，簡短）
- 學習習慣：活躍日數、連續日數、每日幾點學、有冇達標
- 強項／弱項：按字庫、按題型（例如串字弱 = 寫作會扣分；聽力弱 = 要多聽）
- 常錯嘅字同錯法：睇 `quiz.a` 搵規律（例如串錯 -ae-/-e-、混淆 hypo/hyper）
- IELTS：口語、寫作練習量；作文有嘅話就批改
- 佢嘅意見：逐條講點處理
- 提出 1–3 個**細**改動，等 Ben 批准先改

## 4. 可以點調整
- **今期重點 + 回覆意見** → `js/data/coach.js`：
  - `updated`：日期
  - `plan.message`：一兩句鼓勵 + 今期重點（佢會喺首頁見到，用香港口語，親切）
  - `plan.focus`：`{ label, act: 'quiz', kind: 'spell'|'listen'|'abbr'|'weak'|'learned'|'all' }` 或 `{ label, act: 'quiz', kind: 'deck', deck: '<deck id>' }` 或 `{ label, act: 'deck', deck: '<deck id>' }`
  - `replies`：`{ '<feedback id>': '回覆內容' }`（佢喺意見箱見到）
- **內容**：錯字、中文唔啱、加新字／新句 → `js/data/*.js`（每行 `[英文, 中文, 英文解釋, 例句, 例句中文, 中文提示]`）。佢自己加嘅常見生字可以考慮加入正式字庫。**唔好改現有卡嘅英文（`en`）**，因為卡 id = 字庫 + 英文，改咗佢嘅學習記錄會斷。
- **IELTS 題目** → `js/data/ielts.js`（口語、寫作）；閱讀、聽力、文法、改寫、collocation → `js/data/practice.js`。佢弱嘅文法類別可以加多啲題；閱讀／聽力每篇做完可以加新篇（原創，唔好抄官方真題）
- **AI 評分提示詞** → `js/app.js` 嘅 `AI_PROMPTS`；型號自動揀（`AI_PREF`）
- **難度**：新字數量、每日目標係佢自己喺設定改，唔好喺 code 強制改；可以喺 `plan.message` 建議。
- **功能**：`js/app.js`

## 5. 改完
0. **加咗或者改咗功能，一定要同時更新使用說明**：`js/app.js` 嘅 `V.help`（佢喺 app 首頁 ❓ 睇到）
1. `sw.js` 嘅 `CACHE_VERSION` +1
2. `node --check js/app.js`，再用內置瀏覽器 preview（launch.json 嘅 `nurse-english`，port 8796）手機尺寸檢查
3. Ben 批准先 commit / push（GitHub Pages 約 1 分鐘更新）

## 未做（等 Ben 決定）
- 完整模擬考（40 題閱讀／聽力計時）：要寫大量原創內容
- 真人錄音聽力：而家用手機 TTS 讀，同真考試聲音唔同
- 發音評分：AI 只睇到語音轉文字，評唔到發音

## 私隱
- `logs/` 已寫入 `.gitignore`，**唔好上載**；作文同意見只可以喺本機睇
- Repo 係 public：唔好將佢嘅名、log 內容、作文寫入 code 或 commit message
- `coach.js` 嘅 `plan.message` 同 `replies` 都會公開喺網上：只寫學習建議，唔好引用佢意見原文或者個人資料
