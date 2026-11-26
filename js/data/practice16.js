// IELTS 練習擴充（十六）：補較少嘅文法類別（原創，醫護情境）
(function () {
  const G = NE.grammar;
  const g = (cat, q, c, a, why) => { if (!G.some(x => x.q === q)) G.push({ cat, q, c, a, why }); };
  // 情態動詞
  g('modal', 'Patients ___ eat or drink for six hours before surgery.', ['mustn\'t', 'don\'t have to', 'needn\'t', 'might not'], 0, '禁止用 mustn\'t。');
  g('modal', '___ I take your blood pressure now?', ['Must', 'May', 'Would', 'Should to'], 1, '禮貌請求許可用 May I…?');
  g('modal', 'You ___ have called the doctor earlier — the child was clearly unwell.', ['should', 'must', 'can', 'will'], 0, '過去應該做但冇做：should have + p.p.');
  g('modal', 'He ___ have taken the medicine; the packet is still full.', ['must', 'can\'t', 'should', 'would'], 1, '有證據嘅否定推測：can\'t have + p.p.');
  g('modal', 'The test results ___ be ready by this afternoon, but I\'m not sure.', ['must', 'might', 'have to', 'shall'], 1, '唔肯定嘅可能性用 might / may / could。');
  g('modal', '___ you like me to explain the procedure again?', ['Do', 'Would', 'Will', 'Shall'], 1, '禮貌提出：Would you like…?');
  g('modal', 'You ___ wear gloves when handling body fluids. It\'s the policy.', ['have to', 'could', 'might', 'needn\'t'], 0, '規定用 have to / must。');
  g('modal', 'Staff ___ to attend fire training every year.', ['must', 'are required', 'should', 'can'], 1, 'be required to + V（正式寫法）。');
  g('modal', 'When I was a student, I ___ stay up late studying.', ['would', 'will', 'must', 'shall'], 0, '過去習慣可以用 would / used to。');
  g('modal', 'You ___ worry; the results are normal.', ['mustn\'t', 'needn\'t', 'can\'t', 'shouldn\'t have'], 1, '唔需要：needn\'t / don\'t need to。');
  // 比較
  g('comp', 'The new ward is ___ than the old one.', ['more spacious', 'spaciouser', 'most spacious', 'more spaciouser'], 0, '多音節形容詞：more + adj。');
  g('comp', 'This is ___ shift I have ever worked.', ['the busier', 'the busiest', 'busiest', 'the most busy'], 1, 'busy → the busiest（y 變 iest）。');
  g('comp', 'The more you practise, ___ you become.', ['the more confident', 'more confident', 'the most confident', 'confident'], 0, '「越…越…」：The more…, the more…');
  g('comp', 'Her English is improving ___ than mine.', ['fast', 'faster', 'fastest', 'more fastly'], 1, 'fast 比較級 faster。');
  g('comp', 'The number of admissions was ___ higher in 2025 than in 2015.', ['very', 'significantly', 'most', 'more'], 1, '修飾比較級用 significantly / much / far，唔用 very。');
  g('comp', 'Hong Kong has ___ nurses per person than Japan.', ['less', 'fewer', 'little', 'least'], 1, '可數名詞用 fewer；不可數用 less。');
  g('comp', 'The figure for 2020 was twice ___ the figure for 2000.', ['than', 'as high as', 'higher as', 'as higher than'], 1, '倍數：twice as + adj + as。');
  // 條件句
  g('cond', 'If a child ___ a fever, the nurse checks the temperature every four hours.', ['has', 'had', 'will have', 'would have'], 0, '第零條件句（一般事實）：If + 現在式, 現在式。');
  g('cond', 'If I were you, I ___ ask for help.', ['will', 'would', 'am', 'had'], 1, '提建議：If I were you, I would…');
  g('cond', 'Had the nurse not noticed the rash, the child ___ seriously ill.', ['will become', 'would have become', 'becomes', 'became'], 1, '倒裝第三條件句：Had + 主語 + p.p., would have + p.p.');
  g('cond', 'You can visit ___ you wash your hands first.', ['unless', 'provided that', 'although', 'despite'], 1, 'provided that = 只要。');
  g('cond', 'If she had studied harder, she ___ a nurse now.', ['would be', 'would have been', 'will be', 'is'], 0, '混合條件句：過去條件 → 現在結果：would be。');
  // 被動
  g('pass', 'All medicines must ___ by two nurses.', ['check', 'be checked', 'checked', 'be checking'], 1, '情態動詞被動：must be + p.p.');
  g('pass', 'The new guidelines have just ___.', ['published', 'been published', 'publish', 'be published'], 1, '現在完成被動：have been + p.p.');
  g('pass', 'He had his blood ___ this morning.', ['take', 'taken', 'taking', 'to take'], 1, '使役：have something + p.p.（由其他人做）。');
  // 連接詞
  g('link', 'The ward was short-staffed. ___, patient care remained safe.', ['Even so', 'Because', 'So that', 'Due to'], 0, '轉折用 Even so / Nevertheless。');
  g('link', '___ to the shortage of beds, some patients waited in A&E.', ['Owing', 'Because', 'Since', 'As'], 0, 'Owing to / Due to + 名詞。');
  g('link', 'She studied every evening ___ she could pass IELTS.', ['so that', 'because of', 'despite', 'unless'], 0, '目的：so that + 子句。');
  g('link', 'Night shifts are tiring; ___, they are often better paid.', ['on the other hand', 'as a result', 'for example', 'in addition to'], 0, '對比：on the other hand。');
  // 句子結構
  g('struct', '___ the patient\'s condition, the doctor decided to operate.', ['Considered', 'Having considered', 'To considering', 'Consider'], 1, '分詞片語：Having + p.p. 表示先完成嘅動作。');
  g('struct', 'It was the night nurse ___ noticed the change.', ['who', 'which', 'what', 'whom'], 0, '強調句：It was … who…');
  g('struct', 'What worries parents most ___ the waiting time.', ['are', 'is', 'were', 'be'], 1, 'What 子句做主語用單數。');
  g('struct', 'Only after the test results came back ___ the diagnosis.', ['we knew', 'did we know', 'we did know', 'knew we'], 1, 'Only after … 放句首要倒裝：did we know。');
  // 關係子句
  g('rel', 'Nurses, ___ work is demanding, deserve better pay.', ['who', 'whose', 'which', 'that'], 1, '所屬：whose work。');
  g('rel', 'The reason ___ I chose paediatrics is that I love children.', ['which', 'why', 'where', 'what'], 1, 'the reason why…');
  g('rel', 'Everything ___ she said was helpful.', ['what', 'that', 'who', 'where'], 1, 'everything / anything 後用 that，唔用 what。');
})();
