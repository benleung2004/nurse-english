// IELTS 練習擴充（十五）：閱讀 3 篇、聽力 3 段（原創練習材料）
(function () {
  const R = NE.reading, L = NE.listening;

  R.push({ id: 'r-night-light', title: 'Hospitals at Night', zh: '夜間醫院', mins: 18, paras: [
    'Hospitals never close, yet patients and staff often describe nights on the ward as noisy and disruptive. Alarms, conversations, footsteps and bright lights can make it difficult for patients to sleep, even though rest is important for recovery.',
    'Studies measuring noise levels on wards have found that they frequently exceed recommended limits. Equipment alarms are a major source, and many of these alarms do not require any action, a problem known as "alarm fatigue" when staff become less responsive to them.',
    'Several simple measures can improve sleep. These include dimming lights at a set time, offering eye masks and earplugs, closing doors where safe, and grouping routine observations so that patients are woken less often.',
    'Night-time is also when some patients are at greater risk. Fewer staff are on duty, and deterioration may be harder to notice in a dark room. For this reason, guidance stresses that observations must not be skipped simply to avoid waking a patient who is unwell.',
    'For nurses, night work brings its own challenges, including fatigue and disrupted sleep. Hospitals that provide rest areas, protected breaks and healthy food options at night report better staff wellbeing.'
  ], qs: [
    { t: 'tfng', q: 'Noise on wards often exceeds recommended limits.', a: 'T', why: 'B 段：frequently exceed recommended limits。' },
    { t: 'tfng', q: 'All alarms on wards require action.', a: 'F', why: 'B 段：many of these alarms do not require any action。' },
    { t: 'tfng', q: 'Observations should be skipped at night for sleeping patients who are unwell.', a: 'F', why: 'D 段：must not be skipped。' },
    { t: 'tfng', q: 'Earplugs are more effective than eye masks.', a: 'NG', why: '文章冇比較。' },
    { t: 'gap', q: 'Staff becoming less responsive to alarms is called alarm ______.', a: ['fatigue'], why: 'B 段："alarm fatigue"。' },
    { t: 'gap', q: '______ routine observations means patients are woken less.', a: ['grouping'], why: 'C 段：grouping routine observations。' },
    { t: 'mcq', q: 'Why may night-time be risky for some patients?', c: ['Visitors are noisy', 'Fewer staff and deterioration harder to notice', 'Food is unavailable', 'Doctors go home'], a: 1, why: 'D 段：Fewer staff … harder to notice。' }
  ] });

  R.push({ id: 'r-water', title: 'Water Scarcity', zh: '水資源短缺', mins: 18, paras: [
    'Although water covers most of the Earth\'s surface, only a small fraction is fresh water that is easily accessible for human use. As populations grow and climates change, many regions face increasing pressure on their water supplies.',
    'Agriculture is by far the largest user of fresh water worldwide, accounting for around 70 per cent of withdrawals. Inefficient irrigation methods can waste large amounts, while growing certain crops in dry regions places additional strain on rivers and underground supplies.',
    'Cities also face challenges. Ageing pipes may leak a significant proportion of treated water before it reaches homes. Some cities have responded by investing in leak detection, recycling wastewater for non-drinking purposes and desalination, which removes salt from seawater.',
    'Desalination is effective but expensive and energy-intensive, and the salty waste it produces can harm marine life if not managed carefully. For this reason, experts generally recommend reducing demand and improving efficiency before building new plants.',
    'At a household level, small changes such as fixing dripping taps, taking shorter showers and using water-efficient appliances can reduce consumption. Public awareness campaigns have successfully lowered use in some cities during droughts.'
  ], qs: [
    { t: 'tfng', q: 'Most of the Earth\'s water is easily accessible fresh water.', a: 'F', why: 'A 段：only a small fraction。' },
    { t: 'tfng', q: 'Agriculture uses around 70 per cent of fresh water withdrawals.', a: 'T', why: 'B 段：around 70 per cent。' },
    { t: 'tfng', q: 'Hong Kong relies mainly on desalination.', a: 'NG', why: '文章冇講香港。' },
    { t: 'gap', q: 'Removing salt from seawater is called ______.', a: ['desalination'], why: 'C 段：desalination。' },
    { t: 'gap', q: 'Desalination is expensive and energy-______.', a: ['intensive'], why: 'D 段：energy-intensive。' },
    { t: 'gap', q: 'Wastewater can be recycled for non-______ purposes.', a: ['drinking'], why: 'C 段：non-drinking purposes。' },
    { t: 'mcq', q: 'What do experts recommend before building new desalination plants?', c: ['Raising prices only', 'Reducing demand and improving efficiency', 'Using more water in farming', 'Building more pipes'], a: 1, why: 'D 段：reducing demand and improving efficiency。' }
  ] });

  R.push({ id: 'r-reflection', title: 'Reflective Practice in Nursing', zh: '護理反思實踐', mins: 18, paras: [
    'Reflective practice is the process of thinking carefully about one\'s experiences in order to learn from them. In nursing, it is considered an essential skill and is often a formal part of education and professional registration.',
    'Several models guide reflection. One of the best known has six stages: describing what happened, exploring feelings, evaluating what was good and bad, analysing why, drawing conclusions and creating an action plan. Other models use simpler questions, such as "What? So what? Now what?"',
    'Reflection can take place alone, for example by writing a journal, or in groups, such as clinical supervision sessions where nurses discuss challenging situations with colleagues. Group reflection can reduce feelings of isolation and allow nurses to learn from each other.',
    'Critics argue that reflection sometimes becomes a box-ticking exercise, especially when it is assessed. Nurses may write what they think examiners want to read rather than honestly exploring their thoughts. Lack of time on busy wards is another barrier.',
    'Despite these concerns, many nurses report that reflection helps them make sense of difficult events, improve their practice and manage stress. Some researchers suggest that it may also contribute to resilience and reduce burnout.'
  ], qs: [
    { t: 'tfng', q: 'Reflective practice is part of some nursing registration requirements.', a: 'T', why: 'A 段：formal part of … professional registration。' },
    { t: 'tfng', q: 'All reflective models have six stages.', a: 'F', why: 'B 段：Other models use simpler questions。' },
    { t: 'tfng', q: 'Group reflection may reduce feelings of isolation.', a: 'T', why: 'C 段：can reduce feelings of isolation。' },
    { t: 'gap', q: 'A simple model asks "What? So what? Now ______?"', a: ['what'], why: 'B 段："What? So what? Now what?"。' },
    { t: 'gap', q: 'Group reflection may take place in clinical ______ sessions.', a: ['supervision'], why: 'C 段：clinical supervision sessions。' },
    { t: 'gap', q: 'Lack of ______ is a barrier on busy wards.', a: ['time'], why: 'D 段：Lack of time。' },
    { t: 'mcq', q: 'What criticism of reflection is mentioned?', c: ['It takes too little time', 'It can become a box-ticking exercise', 'It is only for doctors', 'It increases burnout'], a: 1, why: 'D 段：box-ticking exercise。' }
  ] });

  L.push({ id: 'l-study-group', title: 'Joining an IELTS study group', zh: '參加 IELTS 溫習小組', part: 'Section 1 填表', lines: [
    ['A', 'Hi, is this the IELTS study group for healthcare workers?'], ['B', 'Yes, it is. Are you interested in joining?'],
    ['A', 'I am. When do you meet?'], ['B', 'Every Thursday evening from 7:30 to 9, at the community centre in Kowloon Tong.'],
    ['A', 'Is there a fee?'], ['B', 'It\'s free, but we ask members to contribute 20 dollars a month for printing.'],
    ['A', 'What do you practise?'], ['B', 'Mainly speaking and writing. Each week, two members bring a Task 2 essay for feedback.'],
    ['A', 'How many people are in the group?'], ['B', 'About twelve, mostly nurses and a couple of physiotherapists.'],
    ['A', 'Do I need a certain level?'], ['B', 'We recommend at least band 5.5. Can I take your email to send the schedule?']
  ], qs: [
    { q: 'Meeting day', a: ['thursday'] }, { q: 'Start time', a: ['7:30', '7.30', '19:30'] },
    { q: 'Location: community centre in Kowloon ______', a: ['tong'] }, { q: 'Monthly contribution (dollars)', a: ['20', 'twenty'] },
    { q: 'Main skills practised: speaking and ______', a: ['writing'] }, { q: 'Number of members (about)', a: ['12', 'twelve'] },
    { q: 'Recommended minimum band', a: ['5.5'] }
  ] });

  L.push({ id: 'l-flu-clinic', title: 'Staff flu vaccination clinic', zh: '員工流感疫苗診所', part: 'Section 2 筆記', lines: [
    ['A', 'Hello everyone. This year\'s staff flu vaccination clinic starts next Monday.'],
    ['A', 'The clinic is in the Staff Health Office on the first floor, open from 8 a.m. to 6 p.m. on weekdays.'],
    ['A', 'For night staff, we\'ll also have a mobile trolley visiting wards between midnight and 2 a.m. on Wednesdays.'],
    ['A', 'Please bring your staff card. No appointment is needed.'],
    ['A', 'Vaccination is especially important for staff working with high-risk patients, such as newborns, older people and those with weak immunity.'],
    ['A', 'Side effects are usually mild, such as a sore arm for a day or two.'],
    ['A', 'Last year, 68 percent of staff were vaccinated. This year, our target is 80 percent.']
  ], qs: [
    { q: 'Clinic location: Staff Health Office on the ______ floor', a: ['first', '1st', '1'] }, { q: 'Closing time on weekdays', a: ['6', '6pm', '6 p.m.', '18:00'] },
    { q: 'Mobile trolley day', a: ['wednesday', 'wednesdays'] }, { q: 'Bring your staff ______', a: ['card'] },
    { q: 'Appointment needed? (yes/no)', a: ['no'] }, { q: 'Common side effect: a sore ______', a: ['arm'] },
    { q: 'Last year\'s vaccination rate (%)', a: ['68'] }, { q: 'This year\'s target (%)', a: ['80'] }
  ] });

  L.push({ id: 'l-lecture-comm', title: 'Lecture: communicating with distressed families', zh: '講座：同情緒困擾嘅家屬溝通', part: 'Section 4 講座', lines: [
    ['A', 'Today we\'ll discuss how to communicate with families who are distressed, for example when a child is seriously ill.'],
    ['A', 'The first principle is to find an appropriate setting: a quiet, private room rather than a busy corridor.'],
    ['A', 'Second, begin by asking what the family already understands. This helps you avoid repeating information or giving too much at once.'],
    ['A', 'Third, give information in small amounts and pause frequently. People in shock may remember very little of what is said.'],
    ['A', 'Fourth, acknowledge emotions. Simple statements such as "I can see this is very hard" show empathy.'],
    ['A', 'Avoid false reassurance, such as "everything will be fine", if this cannot be guaranteed.'],
    ['A', 'Finally, summarise the plan and make sure the family knows who to contact with further questions.']
  ], qs: [
    { q: 'Choose a quiet, ______ room', a: ['private'] }, { q: 'First ask what the family already ______', a: ['understands', 'understand'] },
    { q: 'Give information in small amounts and ______ frequently', a: ['pause'] }, { q: 'People in ______ may remember little', a: ['shock'] },
    { q: 'Acknowledging emotions shows ______', a: ['empathy'] }, { q: 'Avoid false ______', a: ['reassurance'] },
    { q: 'Make sure the family knows who to ______', a: ['contact'] }
  ] });
})();
