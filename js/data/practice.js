// IELTS 練習內容（全部原創練習題，非官方真題）
// 閱讀：tfng = True/False/Not Given；gap = 填字（答案可多個寫法）；mcq = 選擇題（a = 正確選項 index）
NE.reading = [
  {
    id: 'r-shift', title: 'Shift Work and Sleep', zh: '輪班工作與睡眠', mins: 15,
    paras: [
      "Millions of people around the world work outside the usual nine-to-five day. Nurses, police officers, factory workers and airline staff often work at night or on rotating shifts. While society depends on these workers, scientists have become increasingly concerned about the effects of irregular hours on their health.",
      "The main problem is the body clock, known scientifically as the circadian rhythm. This internal system, controlled by a small area of the brain, tells the body when to feel alert and when to feel sleepy. It is strongly influenced by light. When a person works at night and tries to sleep during the day, the body clock and the daily schedule no longer match.",
      "As a result, many shift workers sleep for fewer hours and experience lighter, more broken sleep. Daytime noise, sunlight and family responsibilities all make it harder to rest. Over time, lack of sleep can affect concentration and mood, and researchers have linked long-term night work to a higher risk of problems such as obesity, type 2 diabetes and heart disease.",
      "Tiredness at work is also a safety issue. Studies of healthcare staff suggest that errors are more likely towards the end of long night shifts, and the drive home after a night shift can be dangerous for drowsy workers.",
      "However, there are ways to reduce the harm. Experts recommend keeping the bedroom dark and quiet, using blackout curtains, and avoiding caffeine in the hours before sleep. Short naps before or during a night shift may improve alertness. Employers can also help by designing rotas that move forward – from morning to afternoon to night – rather than backwards, as this is generally easier for the body to adjust to."
    ],
    qs: [
      { t: 'tfng', q: "Light has a strong effect on the body clock.", a: 'T', why: "B 段：It is strongly influenced by light." },
      { t: 'tfng', q: "Most shift workers sleep better during the day than at night.", a: 'F', why: "C 段講佢哋瞓得少同易醒（lighter, more broken sleep），同題目相反。" },
      { t: 'tfng', q: "Long-term night work has been linked to a higher risk of diabetes.", a: 'T', why: "C 段：linked long-term night work to a higher risk of … type 2 diabetes。" },
      { t: 'tfng', q: "Nurses make more mistakes than police officers on night shifts.", a: 'NG', why: "文章冇比較護士同警察嘅錯誤 → Not Given。文章冇講 ≠ False。" },
      { t: 'tfng', q: "Experts recommend drinking coffee just before going to sleep.", a: 'F', why: "E 段：avoiding caffeine in the hours before sleep，同題目相反。" },
      { t: 'tfng', q: "Most hospitals now use forward-rotating rotas.", a: 'NG', why: "E 段只係話僱主「可以」咁做，冇講大部分醫院已經用。" },
      { t: 'gap', q: "The body clock is controlled by a small area of the ______.", a: ['brain'], why: "B 段：controlled by a small area of the brain。" },
      { t: 'gap', q: "Experts suggest using ______ curtains to keep the bedroom dark.", a: ['blackout'], why: "E 段：using blackout curtains。" },
      { t: 'mcq', q: "According to paragraph D, when are errors more likely?", c: ["At the start of a shift", "Towards the end of long night shifts", "During daytime shifts", "After a short nap"], a: 1, why: "D 段：errors are more likely towards the end of long night shifts。" }
    ]
  },
  {
    id: 'r-hands', title: 'The Doctor Who Asked Colleagues to Wash Their Hands', zh: '叫同事洗手嘅醫生', mins: 15,
    paras: [
      "In the 1840s, the Vienna General Hospital had two maternity clinics. Women who gave birth in the first clinic, where medical students and doctors worked, died from a disease called childbed fever far more often than women in the second clinic, which was run by midwives. The difference was so well known that some women begged to be admitted to the second clinic.",
      "A young Hungarian doctor, Ignaz Semmelweis, was determined to find out why. He examined many possible explanations, including overcrowding and the position of women during birth, but none of them explained the difference between the two clinics.",
      "In 1847, a colleague of Semmelweis died after being cut accidentally during an autopsy, and his illness looked very similar to childbed fever. Semmelweis concluded that doctors and students, who often came directly from examining dead bodies, were carrying 'particles' on their hands to women in labour. Midwives did not perform autopsies, which explained why their clinic was safer.",
      "Semmelweis ordered all staff to wash their hands in a chlorinated lime solution before examining patients. The death rate in the first clinic fell dramatically, to a level similar to that of the midwives' clinic.",
      "Surprisingly, many senior doctors rejected his ideas. Some were offended by the suggestion that doctors themselves were causing deaths, and Semmelweis could not explain scientifically how the 'particles' caused disease. He died in 1865, and it was only after the work of Louis Pasteur and Joseph Lister on germs that his ideas became widely accepted. Today, hand hygiene is considered one of the most effective ways to prevent infection in hospitals."
    ],
    qs: [
      { t: 'tfng', q: "Women were more likely to die in the clinic run by midwives.", a: 'F', why: "A 段：第一診所（醫生同醫學生）死亡率高得多，唔係助產士嗰間。" },
      { t: 'tfng', q: "Semmelweis was originally from Hungary.", a: 'T', why: "B 段：A young Hungarian doctor。Hungarian = 匈牙利人（同義改寫）。" },
      { t: 'tfng', q: "Overcrowding was found to be the main cause of the deaths.", a: 'F', why: "B 段：none of them explained the difference，即係擠迫唔係原因。" },
      { t: 'tfng', q: "Semmelweis's colleague died after an injury during an autopsy.", a: 'T', why: "C 段：died after being cut accidentally during an autopsy。cut = injury。" },
      { t: 'tfng', q: "The midwives washed their hands more often than the doctors.", a: 'NG', why: "文章話助產士唔做解剖，但冇講佢哋洗手多唔多。" },
      { t: 'tfng', q: "Semmelweis could explain exactly how the particles caused disease.", a: 'F', why: "E 段：could not explain scientifically how the 'particles' caused disease。" },
      { t: 'gap', q: "Staff washed their hands in a chlorinated ______ solution.", a: ['lime'], why: "D 段：a chlorinated lime solution。" },
      { t: 'gap', q: "His ideas were accepted after research on ______ by Pasteur and Lister.", a: ['germs', 'germ'], why: "E 段：the work of Louis Pasteur and Joseph Lister on germs。" },
      { t: 'mcq', q: "Why did some senior doctors reject Semmelweis's ideas?", c: ["Hand washing was too expensive", "They did not like being blamed for deaths", "The death rate did not change", "The midwives disagreed with him"], a: 1, why: "E 段：offended by the suggestion that doctors themselves were causing deaths。" }
    ]
  },
  {
    id: 'r-robots', title: 'Robots in Elderly Care', zh: '安老院嘅機械人', mins: 15,
    paras: [
      "Many developed countries face the same challenge: the number of older people is growing, while the number of young people available to work as carers is falling. Japan, which has one of the oldest populations in the world, has been especially active in testing robots to help in care homes.",
      "Care robots come in many forms. Some are designed to lift patients from a bed to a wheelchair, reducing back injuries among staff. Others remind residents to take their medication or encourage them to do simple exercises. A few, shaped like animals, are used to comfort people with dementia and reduce feelings of loneliness.",
      "Supporters argue that robots can take over physically demanding or repetitive tasks, giving human carers more time for conversation and emotional support. Robots do not get tired, and they can work through the night without a break.",
      "Critics, however, point out that the machines are often expensive to buy and maintain, and that staff need training to use them. Some older people find the technology confusing or even frightening. There are also ethical concerns: if robots replace human contact, residents may feel more isolated, not less.",
      "Most experts agree that robots should support, rather than replace, human carers. The most successful projects so far have involved staff and residents in choosing and testing the technology, and have treated robots as tools to improve care, not as a way to cut costs."
    ],
    qs: [
      { t: 'tfng', q: "Japan has one of the oldest populations in the world.", a: 'T', why: "A 段原文。" },
      { t: 'tfng', q: "Lifting robots can help prevent back injuries among care staff.", a: 'T', why: "B 段：reducing back injuries among staff。" },
      { t: 'tfng', q: "Animal-shaped robots are mainly used in children's hospitals.", a: 'F', why: "B 段：用嚟安撫認知障礙症患者，唔係兒童醫院。" },
      { t: 'tfng', q: "All older people enjoy using care robots.", a: 'F', why: "D 段：Some older people find the technology confusing or even frightening。題目有 All 要特別小心。" },
      { t: 'tfng', q: "Care robots cost less than employing human carers.", a: 'NG', why: "D 段只講機械人貴，冇同請人嘅成本比較 → Not Given。" },
      { t: 'tfng', q: "Successful projects involved staff in choosing the technology.", a: 'T', why: "E 段：involved staff and residents in choosing and testing the technology。" },
      { t: 'gap', q: "Some robots remind residents to take their ______.", a: ['medication', 'medicine'], why: "B 段：remind residents to take their medication。" },
      { t: 'gap', q: "Critics worry that residents may feel more ______.", a: ['isolated'], why: "D 段：residents may feel more isolated。" },
      { t: 'mcq', q: "What is the main conclusion of the passage?", c: ["Robots will soon replace most carers", "Robots should support human carers", "Robots are too expensive to use", "Only Japan should use care robots"], a: 1, why: "E 段：robots should support, rather than replace, human carers。" }
    ]
  }
];

// 聽力：lines = 對話（sp 唔同講者用唔同聲），qs = 填表（a = 接受嘅答案）
NE.listening = [
  {
    id: 'l-clinic', title: 'Booking a clinic appointment', zh: '打電話預約診所', part: 'Section 1 填表',
    lines: [
      ['A', "Good morning, Riverside Health Clinic. How can I help you?"],
      ['B', "Hi, I'd like to make an appointment to see a doctor, please."],
      ['A', "Of course. Are you a new patient?"],
      ['B', "Yes, I am."],
      ['A', "Could I have your surname, please?"],
      ['B', "It's Fong. F, O, N, G."],
      ['A', "Thank you. And your first name?"],
      ['B', "Karen."],
      ['A', "What's your date of birth?"],
      ['B', "The fourteenth of March, two thousand and three."],
      ['A', "And a contact phone number?"],
      ['B', "It's nine eight seven six, five four three two."],
      ['A', "Thanks. What's the reason for your visit?"],
      ['B', "I've had a bad cough for about two weeks."],
      ['A', "I see. We have an appointment with Doctor Patel on Thursday at ten forty-five. Is that OK?"],
      ['B', "Thursday is fine, but is there anything in the afternoon? I work in the morning."],
      ['A', "Let me check. Yes, there's one at three fifteen."],
      ['B', "Perfect, I'll take that."],
      ['A', "Great. Please arrive ten minutes early to fill in a form, and bring your ID card."],
      ['B', "Thank you very much."]
    ],
    qs: [
      { q: "Surname", a: ['fong'] },
      { q: "Date of birth", a: ['14 march 2003', 'march 14 2003', '14 3 2003', '14 03 2003'] },
      { q: "Phone number", a: ['98765432'] },
      { q: "Reason for visit: a bad ______", a: ['cough'] },
      { q: "Doctor's name: Dr ______", a: ['patel'] },
      { q: "Day of appointment", a: ['thursday'] },
      { q: "Time of appointment", a: ['3:15', '15:15', 'three fifteen', 'quarter past three'], why: "10:45 係陷阱：佢之後改咗下晝 3:15。IELTS 好鍾意先講一個答案再改。" },
      { q: "Bring your ______", a: ['id card', 'id'] }
    ]
  },
  {
    id: 'l-ward', title: 'Welcome to the ward', zh: '病房簡介（探病須知）', part: 'Section 2 獨白',
    lines: [
      ['A', "Good afternoon, everyone, and welcome to Ward 7. My name is Sarah, and I'm the nurse in charge this afternoon. I'd like to explain a few things about the ward."],
      ['A', "Visiting hours are from twelve noon to eight p.m. every day, but we ask that no more than two visitors come to the bedside at one time."],
      ['A', "Please clean your hands with the alcohol gel at the entrance every time you come in and leave."],
      ['A', "Patients' meals are served at eight in the morning, twelve thirty, and six in the evening. If you would like to bring food from home, please check with a nurse first, because some patients are on special diets."],
      ['A', "The ward's quietest time is between two and three p.m., when patients are encouraged to rest, so we ask visitors not to come during this hour."],
      ['A', "If you have any questions about a patient's treatment, the doctors usually do their ward round at nine thirty a.m. You can also call the nurses' station on two six one five, four four eight zero."],
      ['A', "Finally, please don't leave valuables such as money or jewellery at the bedside. Thank you."]
    ],
    qs: [
      { q: "Ward number", a: ['7', 'seven'] },
      { q: "Visiting hours end at ______ p.m.", a: ['8', 'eight', '8:00', '20:00'] },
      { q: "Maximum visitors at the bedside", a: ['2', 'two'] },
      { q: "Clean hands with alcohol ______", a: ['gel'] },
      { q: "Evening meal is at ______ p.m.", a: ['6', 'six', '6:00', '18:00'] },
      { q: "Rest time: 2 to ______ p.m.", a: ['3', 'three', '3:00', '15:00'] },
      { q: "Doctors' ward round time (a.m.)", a: ['9:30', 'nine thirty', 'half past nine'] },
      { q: "Nurses' station phone", a: ['26154480'] }
    ]
  },
  {
    id: 'l-pharm', title: 'At the pharmacy', zh: '藥房取藥', part: 'Section 1 筆記',
    lines: [
      ['A', "Hello, I have your prescription here. This is amoxicillin. It's an antibiotic."],
      ['B', "How often do I take it?"],
      ['A', "Take one capsule three times a day, about eight hours apart."],
      ['B', "Should I take it with food?"],
      ['A', "You can take it with or without food, but if it upsets your stomach, take it after meals."],
      ['B', "How long do I need to take it for?"],
      ['A', "For seven days. It's important to finish the whole course, even if you feel better."],
      ['B', "Are there any side effects?"],
      ['A', "Some people get mild diarrhoea. If you notice a rash or any swelling of your face, stop taking it and see a doctor immediately."],
      ['B', "Can I drink alcohol?"],
      ['A', "It's best to avoid alcohol until you finish the course."],
      ['B', "OK. And where should I keep it?"],
      ['A', "Keep it in a cool, dry place, below twenty-five degrees."]
    ],
    qs: [
      { q: "Type of medicine", a: ['antibiotic', 'an antibiotic'] },
      { q: "Number of capsules each time", a: ['1', 'one'] },
      { q: "Times per day", a: ['3', 'three'] },
      { q: "Number of days", a: ['7', 'seven'] },
      { q: "If stomach is upset, take it after ______", a: ['meals', 'meal'] },
      { q: "Stop if rash or ______ of the face", a: ['swelling'] },
      { q: "Avoid ______ until the course ends", a: ['alcohol'] },
      { q: "Store below ______ degrees", a: ['25', 'twenty five'] }
    ]
  }
];

// 文法：香港考生常犯錯誤（c = 選項，a = 正確 index，why = 中文解釋）
NE.grammar = [
  { cat: 'art', q: "She works as ___ enrolled nurse.", c: ['a', 'an', 'the', '—'], a: 1, why: "enrolled 以元音「e」音開頭，用 an。講職業要用 a/an：She is a nurse." },
  { cat: 'art', q: "___ elderly often need more medical care.", c: ['An', 'The', 'A', '—'], a: 1, why: "the + 形容詞 = 一類人：the elderly 長者、the poor 窮人。" },
  { cat: 'art', q: "I read ___ interesting article about nursing.", c: ['a', 'an', 'the', '—'], a: 1, why: "interesting 以元音音開頭，用 an；第一次提及、唔特定嘅嘢用 a/an。" },
  { cat: 'art', q: "___ smoking is harmful to health.", c: ['The', 'A', '—', 'An'], a: 2, why: "泛指一件事（不可數、一般概念）唔使冠詞。" },
  { cat: 'art', q: "This is one of ___ most important issues today.", c: ['a', 'the', '—', 'an'], a: 1, why: "最高級（most …）前面要用 the。" },
  { cat: 'tense', q: "The number of nurses ___ from 2000 to 2020.", c: ['increases', 'has increased', 'increased', 'is increasing'], a: 2, why: "過去完結嘅時間（2000–2020）用過去式。Task 1 圖表常見。" },
  { cat: 'tense', q: "I ___ as a nurse for three years now.", c: ['work', 'worked', 'have worked', 'am working'], a: 2, why: "由過去一直持續到現在（for three years now）用現在完成式。" },
  { cat: 'tense', q: "Yesterday the patient ___ his medication.", c: ['refuse', 'refuses', 'refused', 'has refused'], a: 2, why: "yesterday = 過去時間，用過去式。口語 Part 2 講經歷要記住用過去式。" },
  { cat: 'tense', q: "By 2050, the population ___ significantly.", c: ['will age', 'ages', 'aged', 'has aged'], a: 0, why: "講將來預測用 will。" },
  { cat: 'tense', q: "When I arrived, the doctor ___ the patient.", c: ['examines', 'was examining', 'has examined', 'examine'], a: 1, why: "一件事進行中，另一件事發生：過去進行式 + 過去式。" },
  { cat: 'sva', q: "The number of patients ___ increasing.", c: ['are', 'is', 'were', 'be'], a: 1, why: "The number of … 用單數動詞；A number of … 先用複數。" },
  { cat: 'sva', q: "Everyone ___ the right to healthcare.", c: ['have', 'has', 'are having', 'having'], a: 1, why: "everyone / everybody / each 用單數動詞。" },
  { cat: 'sva', q: "The information in these reports ___ useful.", c: ['are', 'is', 'were', 'have'], a: 1, why: "information 不可數，用單數。" },
  { cat: 'sva', q: "One of my colleagues ___ to Australia.", c: ['have moved', 'has moved', 'are moving', 'move'], a: 1, why: "主語係 One（一個），唔係 colleagues，用單數。" },
  { cat: 'sva', q: "Nurses who work at night ___ more tired.", c: ['often feels', 'often feel', 'is often feeling', 'often feeling'], a: 1, why: "主語 Nurses 係複數；中間嘅 who work at night 唔影響。" },
  { cat: 'count', q: "There is strong ___ that exercise improves mood.", c: ['evidences', 'evidence', 'an evidence', 'many evidence'], a: 1, why: "evidence 不可數：唔加 s、唔用 an、用 much/a lot of。" },
  { cat: 'count', q: "Can you give me some ___ about the treatment?", c: ['informations', 'information', 'an information', 'many information'], a: 1, why: "information、advice、equipment、research 都係不可數。" },
  { cat: 'count', q: "The hospital bought new ___.", c: ['equipments', 'equipment', 'an equipment', 'many equipment'], a: 1, why: "equipment 不可數。要數就講 pieces of equipment。" },
  { cat: 'count', q: "There are ___ people waiting in A&E.", c: ['much', 'a lot of', 'a great deal of', 'an amount of'], a: 1, why: "people 可數複數：用 many / a lot of；much / a great deal of 用喺不可數。" },
  { cat: 'count', q: "She gave me some useful ___.", c: ['advices', 'advice', 'an advice', 'advise'], a: 1, why: "advice（名詞，不可數）；advise 係動詞。" },
  { cat: 'prep', q: "I am responsible ___ six patients.", c: ['of', 'for', 'to', 'with'], a: 1, why: "responsible for … 負責。" },
  { cat: 'prep', q: "Smoking has a negative impact ___ health.", c: ['to', 'for', 'on', 'at'], a: 2, why: "impact on / effect on。" },
  { cat: 'prep', q: "She is good ___ communicating with patients.", c: ['in', 'at', 'on', 'for'], a: 1, why: "good at + V-ing。" },
  { cat: 'prep', q: "The patient was admitted ___ Monday.", c: ['in', 'at', 'on', 'by'], a: 2, why: "星期／日期用 on；月份年份用 in；時間用 at。" },
  { cat: 'prep', q: "This problem is common ___ older people.", c: ['in', 'at', 'with', 'to'], a: 0, why: "common in / among + 人群。" },
  { cat: 'comp', q: "Prevention is ___ than cure.", c: ['good', 'better', 'best', 'more good'], a: 1, why: "good → better → best。" },
  { cat: 'comp', q: "Healthcare is ___ expensive than it was 20 years ago.", c: ['much', 'more', 'most', 'very'], a: 1, why: "長形容詞比較級：more + adj + than。" },
  { cat: 'comp', q: "The figure was ___ in 2020 than in 2000.", c: ['high', 'higher', 'highest', 'more high'], a: 1, why: "短形容詞加 -er。" },
  { cat: 'pass', q: "The medication ___ twice a day.", c: ['gives', 'is given', 'is giving', 'give'], a: 1, why: "藥唔會自己給，用被動：be + p.p.。Task 1 流程圖成日用。" },
  { cat: 'pass', q: "The patient ___ to the ICU last night.", c: ['transferred', 'was transferred', 'has transfer', 'transferring'], a: 1, why: "病人被轉送：過去被動 was + p.p.。" },
  { cat: 'pass', q: "Hands should ___ before touching a patient.", c: ['wash', 'washed', 'be washed', 'washing'], a: 2, why: "情態動詞 + be + p.p.：should be washed。" },
  { cat: 'word', q: "Exercise is ___ for mental health.", c: ['benefit', 'beneficial', 'benefits', 'beneficially'], a: 1, why: "be 後面要形容詞：beneficial。" },
  { cat: 'word', q: "The number of patients rose ___.", c: ['significant', 'significance', 'significantly', 'signify'], a: 2, why: "修飾動詞 rose 要用副詞 -ly。" },
  { cat: 'word', q: "There was a ___ increase in costs.", c: ['dramatically', 'dramatic', 'drama', 'dramatise'], a: 1, why: "修飾名詞 increase 要用形容詞。" },
  { cat: 'word', q: "Nurses play an ___ role in healthcare.", c: ['importance', 'important', 'importantly', 'import'], a: 1, why: "修飾名詞 role 用形容詞 important。" },
  { cat: 'word', q: "Many people cannot ___ private healthcare.", c: ['afford', 'affordable', 'affordability', 'affording'], a: 0, why: "cannot 後面要原形動詞。" }
];
NE.grammarCats = { art: '冠詞 a/an/the', tense: '時態', sva: '主謂一致', count: '可數／不可數', prep: '介詞', comp: '比較級', pass: '被動式', word: '詞性' };

// 改寫訓練：寫作開首段同閱讀搵同義詞都靠呢個
NE.paraphrase = [
  { src: "The number of elderly people is increasing.", m: ["The proportion of older people is rising.", "There is a growing number of senior citizens."], k: [['elderly people', 'older people / senior citizens'], ['increasing', 'rising / growing']], tip: "改名詞 + 改動詞，或者改句子結構（there is …）。" },
  { src: "Many nurses leave their jobs after a few years.", m: ["A large number of nurses quit the profession after only a short time.", "It is common for nurses to resign within a few years."], k: [['many', 'a large number of'], ['leave their jobs', 'quit the profession / resign'], ['a few years', 'a short time']], tip: "It is common for … to … 係好用嘅句式。" },
  { src: "Governments should spend more money on preventing illness.", m: ["More public funding should be invested in disease prevention.", "Authorities ought to allocate more resources to preventing disease."], k: [['governments', 'authorities / the state'], ['spend money on', 'invest in / allocate resources to'], ['illness', 'disease']], tip: "動詞變名詞（preventing → prevention）都係改寫方法。" },
  { src: "Smoking is bad for your health.", m: ["Smoking is harmful to health.", "Smoking has a detrimental effect on people's health."], k: [['bad for', 'harmful to / detrimental to']], tip: "避免 bad、good 呢啲簡單字，用 harmful、beneficial。" },
  { src: "Technology has changed healthcare a lot.", m: ["Technology has transformed healthcare significantly.", "Healthcare has been greatly affected by technological advances."], k: [['changed', 'transformed / affected'], ['a lot', 'significantly / greatly']], tip: "改用被動式都係改寫。" },
  { src: "Some people think that healthcare should be free.", m: ["It is argued by some that medical services ought to be provided at no cost.", "Certain people believe healthcare should be free of charge."], k: [['some people think', 'it is argued by some / certain people believe'], ['free', 'at no cost / free of charge']], tip: "開首段改寫題目必用。" },
  { src: "Children today do not do enough exercise.", m: ["Young people nowadays are not physically active enough.", "Modern children lack sufficient physical activity."], k: [['children', 'young people'], ['today', 'nowadays'], ['do not do enough exercise', 'are not physically active enough / lack sufficient physical activity']], tip: "lack + 名詞（冇 of）。" },
  { src: "Working long hours can cause stress.", m: ["Long working hours may lead to stress.", "Stress can result from working excessive hours."], k: [['cause', 'lead to / result in'], ['can', 'may']], tip: "A causes B = A leads to B = B results from A。" },
  { src: "It is important to wash your hands.", m: ["Hand hygiene is essential.", "It is crucial that people clean their hands."], k: [['important', 'essential / crucial / vital']], tip: "important 有好多同義詞，輪流用。" },
  { src: "The graph shows the number of hospital beds.", m: ["The chart illustrates how many hospital beds there were.", "The graph gives information about the quantity of hospital beds."], k: [['shows', 'illustrates / gives information about / compares'], ['the number of', 'how many / the quantity of']], tip: "Task 1 第一句一定要改寫，唔好抄題目。" },
  { src: "Doctors and nurses are very busy.", m: ["Medical staff have a heavy workload.", "Healthcare professionals are under considerable pressure."], k: [['doctors and nurses', 'medical staff / healthcare professionals'], ['very busy', 'have a heavy workload / under pressure']], tip: "用總稱代替逐個講。" },
  { src: "People are living longer than before.", m: ["Life expectancy has increased.", "People now have a longer lifespan than in the past."], k: [['living longer', 'life expectancy has increased / longer lifespan']], tip: "用學術名詞（life expectancy）分數更高。" }
];

// Collocation 字庫（Lexical Resource 由 5 升到 6.5 嘅關鍵）
NE.deck('ielts-colloc', 'IELTS: Collocations', 'IELTS 常用搭配', 'ielts', '🔗', {}, [
  ["raise awareness of", "提高對…的意識", "make more people know about something", "Schools should raise awareness of healthy eating.", "學校應提高大眾對健康飲食的意識。"],
  ["play a vital role in", "在…擔當重要角色", "be very important in something", "Nurses play a vital role in patient care.", "護士在病人護理中擔當重要角色。"],
  ["pose a threat to", "對…構成威脅", "be a danger to something", "Obesity poses a serious threat to public health.", "肥胖對公共衞生構成嚴重威脅。"],
  ["have a detrimental effect on", "對…有害", "harm something", "Lack of sleep has a detrimental effect on health.", "缺乏睡眠對健康有害。"],
  ["take measures to", "採取措施去…", "do things to solve a problem", "The government must take measures to reduce smoking.", "政府必須採取措施減少吸煙。"],
  ["address the issue of", "處理…問題", "deal with a problem", "Hospitals need to address the issue of staff shortages.", "醫院需要處理人手短缺的問題。"],
  ["meet the demand for", "滿足…的需求", "provide enough of something", "More nurses are needed to meet the demand for elderly care.", "需要更多護士以滿足安老服務的需求。"],
  ["place a burden on", "為…帶來負擔", "make something difficult for someone", "An ageing population places a heavy burden on the healthcare system.", "人口老化為醫療制度帶來沉重負擔。"],
  ["lead a healthy lifestyle", "過健康的生活", "live in a healthy way", "It is not easy to lead a healthy lifestyle when working shifts.", "輪班工作時要過健康生活並不容易。"],
  ["take responsibility for", "為…負責", "accept that something is your duty", "Individuals should take responsibility for their own health.", "個人應為自己的健康負責。"],
  ["make a significant contribution to", "對…有重大貢獻", "help something a lot", "Foreign nurses make a significant contribution to the health service.", "外籍護士對醫療服務有重大貢獻。"],
  ["have access to", "能夠使用／獲得", "be able to use or get something", "Everyone should have access to basic healthcare.", "人人都應能獲得基本醫療服務。"],
  ["a growing number of", "越來越多的", "more and more", "A growing number of young people suffer from anxiety.", "越來越多年輕人受焦慮困擾。"],
  ["a wide range of", "各種各樣的", "many different kinds", "Nurses perform a wide range of tasks.", "護士負責各種各樣的工作。"],
  ["reach a peak", "達到高峰", "reach the highest point", "Admissions reached a peak in January.", "入院人數在一月達到高峰。"],
  ["remain stable", "保持穩定", "stay the same", "The figure remained stable between 2010 and 2015.", "數字在2010至2015年間保持穩定。"],
  ["a sharp increase", "急劇上升", "a sudden large rise", "There was a sharp increase in flu cases.", "流感個案急劇上升。"],
  ["a gradual decline", "逐漸下降", "a slow fall", "The graph shows a gradual decline in smoking rates.", "圖表顯示吸煙率逐漸下降。"],
  ["strike a balance between", "在…之間取得平衡", "find a good middle point", "It is hard to strike a balance between work and family.", "很難在工作與家庭之間取得平衡。"],
  ["under pressure", "承受壓力", "feeling stressed because of demands", "Frontline staff are under constant pressure.", "前線人員經常承受壓力。"],
  ["cope with", "應付", "deal successfully with something difficult", "She learned to cope with night shifts.", "她學會應付夜更。"],
  ["suffer from", "患有；受…困擾", "have an illness or problem", "Many elderly people suffer from chronic diseases.", "很多長者患有慢性疾病。"],
  ["seek medical advice", "求醫", "ask a doctor for help", "You should seek medical advice if symptoms continue.", "如果徵狀持續，應該求醫。"],
  ["make progress", "取得進步", "improve", "She has made great progress in English.", "她的英文有很大進步。"],
  ["gain experience", "累積經驗", "get experience", "Working in a hospital helps nurses gain experience.", "在醫院工作幫助護士累積經驗。"],
  ["job satisfaction", "工作滿足感", "how happy you are with your job", "Low pay reduces job satisfaction.", "薪酬低會降低工作滿足感。"],
  ["work-life balance", "工作與生活平衡", "time for both work and personal life", "Shift work makes work-life balance difficult.", "輪班工作令工作與生活難以平衡。"],
  ["long-term consequences", "長遠後果", "effects that last a long time", "Poor diet can have long-term consequences.", "不良飲食會帶來長遠後果。"]
]);

// 估分對照（Academic 閱讀／聽力 40 題，常見參考換算，只供估算）
NE.bandTable = {
  reading: [[39, 9], [37, 8.5], [35, 8], [33, 7.5], [30, 7], [27, 6.5], [23, 6], [19, 5.5], [15, 5], [13, 4.5], [10, 4], [0, 3.5]],
  listening: [[39, 9], [37, 8.5], [35, 8], [32, 7.5], [30, 7], [26, 6.5], [23, 6], [18, 5.5], [16, 5], [13, 4.5], [11, 4], [0, 3.5]]
};
