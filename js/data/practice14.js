// IELTS 練習擴充（十四）：閱讀 3 篇、聽力 3 段（原創練習材料）
(function () {
  const R = NE.reading, L = NE.listening;

  R.push({ id: 'r-dementia-friendly', title: 'Dementia-Friendly Hospitals', zh: '認知障礙友善醫院', mins: 18, paras: [
    'People with dementia are admitted to hospital for many reasons, from falls to infections. For them, the hospital environment can be confusing and frightening, and a stay may lead to increased confusion, loss of independence and longer admissions.',
    'Many hospitals have introduced changes to make wards more "dementia-friendly". These include clear signs with pictures, contrasting colours for toilet doors and seats, and large clocks showing the date. Such features help patients find their way and stay oriented.',
    'A widely used tool is a personal information form completed with families, often called "This is me". It records the patient\'s preferred name, routines, likes and dislikes, and what helps them feel calm. Staff can use this to provide more personalised care.',
    'Flexible visiting is another important change. When family members can stay for longer periods, they can help with meals and reassure the patient, which may reduce distress and the need for sedative medication.',
    'Training staff is essential. Studies show that when nurses understand dementia, they are more likely to recognise pain or delirium in patients who cannot clearly express themselves, and less likely to view challenging behaviour as deliberate.'
  ], qs: [
    { t: 'tfng', q: 'Hospital stays can increase confusion in people with dementia.', a: 'T', why: 'A 段：may lead to increased confusion。' },
    { t: 'tfng', q: 'Dementia-friendly wards use colours that blend together.', a: 'F', why: 'B 段：contrasting colours。' },
    { t: 'tfng', q: '"This is me" forms are completed only by doctors.', a: 'F', why: 'C 段：completed with families。' },
    { t: 'tfng', q: 'All hospitals now have unlimited visiting hours.', a: 'NG', why: '文章冇講所有醫院。' },
    { t: 'gap', q: 'Large clocks help patients stay ______.', a: ['oriented', 'orientated'], why: 'B 段：stay oriented。' },
    { t: 'gap', q: 'Family presence may reduce the need for ______ medication.', a: ['sedative'], why: 'D 段：sedative medication。' },
    { t: 'mcq', q: 'What do trained nurses become better at?', c: ['Avoiding families', 'Recognising pain or delirium', 'Giving more sedatives', 'Shortening visits'], a: 1, why: 'E 段：recognise pain or delirium。' }
  ] });

  R.push({ id: 'r-remote-work', title: 'The Remote Work Revolution', zh: '遙距工作革命', mins: 18, paras: [
    'Before 2020, working from home was relatively rare in many countries. The pandemic forced millions of office workers to work remotely almost overnight, and many organisations have since adopted hybrid arrangements that combine home and office work.',
    'Supporters point to several advantages. Employees save time and money on commuting and often report a better work–life balance. Some companies have found that productivity remains stable or improves, and they can recruit talent from a wider geographical area.',
    'However, remote work also brings challenges. Some employees feel isolated and miss informal conversations with colleagues. Younger workers in particular may lose opportunities to learn by observing experienced staff. Boundaries between work and home can blur, leading some people to work longer hours.',
    'The impact on cities is also significant. Reduced commuting has affected businesses such as cafés and shops in central business districts, while some suburban areas have seen increased activity.',
    'It is important to note that remote work is not possible for everyone. Healthcare workers, retail staff and many manual workers must be physically present, which has raised concerns about a new form of inequality between those who can and cannot work from home.'
  ], qs: [
    { t: 'tfng', q: 'Working from home was common in most countries before 2020.', a: 'F', why: 'A 段：relatively rare。' },
    { t: 'tfng', q: 'Some companies found productivity stayed the same or improved.', a: 'T', why: 'B 段：productivity remains stable or improves。' },
    { t: 'tfng', q: 'Remote workers always work fewer hours.', a: 'F', why: 'C 段：leading some people to work longer hours。' },
    { t: 'gap', q: 'Many organisations now use ______ arrangements.', a: ['hybrid'], why: 'A 段：hybrid arrangements。' },
    { t: 'gap', q: 'Some employees feel ______ when working remotely.', a: ['isolated'], why: 'C 段：feel isolated。' },
    { t: 'gap', q: 'Healthcare workers must be physically ______.', a: ['present'], why: 'E 段：physically present。' },
    { t: 'mcq', q: 'Which group may lose learning opportunities?', c: ['Managers', 'Younger workers', 'Retired people', 'Shop owners'], a: 1, why: 'C 段：Younger workers in particular。' }
  ] });

  R.push({ id: 'r-plain-language', title: 'Speaking Plainly to Patients', zh: '用淺白語言同病人溝通', mins: 18, paras: [
    'Healthcare professionals use a large amount of technical vocabulary, much of which is unfamiliar to patients. Words such as "benign", "negative result" or "nil by mouth" can be easily misunderstood, sometimes with serious consequences.',
    'Health literacy refers to a person\'s ability to find, understand and use health information. Studies suggest that a significant proportion of adults have limited health literacy, which is linked to poorer understanding of medicines and higher rates of hospital readmission.',
    'One recommended approach is to use plain language: short sentences, everyday words and one main idea at a time. For example, instead of "hypertension", a nurse might say "high blood pressure". Visual aids, such as diagrams, can also support understanding.',
    'Another widely recommended technique is "teach-back". After explaining something, the professional asks the patient to explain it in their own words. This is not a test of the patient but a check of how well the information was communicated.',
    'Plain language is particularly important when working with children, older people and those who speak a different first language. In these cases, professional interpreters should be used for important discussions, rather than relying on family members.'
  ], qs: [
    { t: 'tfng', q: 'Some medical words are easily misunderstood.', a: 'T', why: 'A 段：can be easily misunderstood。' },
    { t: 'tfng', q: 'Limited health literacy is linked to fewer readmissions.', a: 'F', why: 'B 段：higher rates of hospital readmission。' },
    { t: 'tfng', q: 'Teach-back is designed to test the patient\'s intelligence.', a: 'F', why: 'D 段：not a test of the patient。' },
    { t: 'tfng', q: 'Plain language has been made compulsory by law.', a: 'NG', why: '文章冇講法律。' },
    { t: 'gap', q: 'Instead of "hypertension", say "high blood ______".', a: ['pressure'], why: 'C 段：high blood pressure。' },
    { t: 'gap', q: 'The ability to understand health information is called health ______.', a: ['literacy'], why: 'B 段：Health literacy。' },
    { t: 'mcq', q: 'For important discussions with patients who speak another language, staff should use', c: ['family members', 'professional interpreters', 'translation apps only', 'gestures only'], a: 1, why: 'E 段：professional interpreters should be used。' }
  ] });

  L.push({ id: 'l-ielts-booking', title: 'Booking an IELTS test', zh: '報考 IELTS', part: 'Section 1 填表', lines: [
    ['A', 'Good morning, Test Centre. How can I help?'], ['B', 'Hi, I\'d like to book the IELTS Academic test.'],
    ['A', 'Certainly. Would you prefer the computer-delivered or paper-based test?'], ['B', 'Computer-delivered, please.'],
    ['A', 'We have dates on the 7th and the 21st of February.'], ['B', 'The 21st, please. That gives me more time to prepare.'],
    ['A', 'The speaking test can be on the same day or within a week before or after. Do you have a preference?'], ['B', 'The same day, if possible.'],
    ['A', 'Fine. Please bring your passport or ID card. You\'ll need to arrive 30 minutes early for registration.'],
    ['B', 'When will I get my results?'], ['A', 'Usually within three to five days for the computer test.'],
    ['B', 'And how much is the fee?'], ['A', 'It\'s 2,700 dollars. You can pay online by credit card.']
  ], qs: [
    { q: 'Test type: IELTS ______', a: ['academic'] }, { q: 'Format: ______-delivered', a: ['computer'] },
    { q: 'Test date: ___ February', a: ['21', '21st'] }, { q: 'Speaking test: on the same ______', a: ['day'] },
    { q: 'Arrive how many minutes early?', a: ['30', 'thirty'] }, { q: 'Results within 3 to ___ days', a: ['5', 'five'] },
    { q: 'Fee (dollars)', a: ['2700', '2,700'] }, { q: 'Payment method: credit ______', a: ['card'] }
  ] });

  L.push({ id: 'l-ward-safety', title: 'Safety briefing on a children\'s ward', zh: '兒科病房安全簡報', part: 'Section 2 筆記', lines: [
    ['A', 'Good morning, team. Here\'s today\'s safety huddle.'],
    ['A', 'We have 26 patients. Two children are at high risk of falls: bed 4 and bed 11. Please keep cot sides up.'],
    ['A', 'Bed 9 has a new nut allergy; the red band is on and catering has been informed.'],
    ['A', 'There are three children on oxygen. Remember to check the cylinders on the trolley; one was nearly empty yesterday.'],
    ['A', 'The infusion pump in room 2 has been reported faulty. Don\'t use it; a replacement is coming at 11.'],
    ['A', 'We\'re short of one nurse until 10 a.m., so please ask for help early.'],
    ['A', 'Finally, the fire drill is planned for 2:30 this afternoon. Thanks, everyone.']
  ], qs: [
    { q: 'Number of patients', a: ['26'] }, { q: 'High fall risk beds: 4 and ___', a: ['11', 'eleven'] },
    { q: 'Bed 9 has a new ______ allergy', a: ['nut'] }, { q: 'Children on oxygen', a: ['3', 'three'] },
    { q: 'Faulty equipment: infusion ______', a: ['pump'] }, { q: 'Replacement arrives at', a: ['11', '11:00', '11am'] },
    { q: 'Short of one nurse until', a: ['10', '10am', '10 a.m.', '10:00'] }, { q: 'Fire drill time', a: ['2:30', '2.30', '14:30'] }
  ] });

  L.push({ id: 'l-lecture-obesity', title: 'Lecture: childhood obesity prevention', zh: '講座：預防兒童肥胖', part: 'Section 4 講座', lines: [
    ['A', 'Today we\'ll look at evidence-based strategies for preventing childhood obesity.'],
    ['A', 'First, early life matters. Breastfeeding and responsive feeding, where parents respond to hunger and fullness cues, may help children regulate their appetite.'],
    ['A', 'Second, sugary drinks are a major source of excess calories. Replacing them with water or milk is one of the simplest changes families can make.'],
    ['A', 'Third, physical activity. Guidelines recommend at least 60 minutes of moderate to vigorous activity per day for school-age children.'],
    ['A', 'Fourth, sleep. Short sleep duration has been linked to higher risk of obesity, possibly through effects on appetite hormones.'],
    ['A', 'Finally, approaches that involve the whole family are more effective than focusing on the child alone. Nurses should avoid blaming language and focus on healthy habits rather than weight.']
  ], qs: [
    { q: 'Responsive feeding responds to hunger and ______ cues', a: ['fullness'] }, { q: 'Replace sugary drinks with water or ______', a: ['milk'] },
    { q: 'Recommended daily activity (minutes)', a: ['60', 'sixty'] }, { q: 'Short ______ is linked to obesity risk', a: ['sleep'] },
    { q: 'Sleep may affect appetite ______', a: ['hormones'] }, { q: 'Most effective: involve the whole ______', a: ['family'] },
    { q: 'Focus on healthy habits rather than ______', a: ['weight'] }
  ] });
})();
