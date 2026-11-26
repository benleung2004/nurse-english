// IELTS 練習擴充（十七）：閱讀 3 篇、聽力 3 段、改寫 15 句（原創）
(function () {
  const R = NE.reading, L = NE.listening, P = NE.paraphrase;

  R.push({ id: 'r-ageing-hk', title: 'Preparing for an Older Society', zh: '迎接老齡化社會', mins: 18, paras: [
    'Many cities in East Asia are ageing rapidly, as people live longer and fewer babies are born. In some places, more than a quarter of the population is expected to be aged 65 or over within the next two decades.',
    'This change brings challenges for health services. Older people are more likely to live with several chronic conditions at the same time, such as diabetes, heart disease and arthritis. Caring for these patients requires coordination between hospitals, clinics and community services.',
    'One response has been to strengthen primary care, so that problems can be managed before they become emergencies. District health centres, for example, offer screening, health education and chronic disease management close to where people live.',
    'Another priority is supporting people to age in place, meaning they remain in their own homes for as long as possible. This may involve home modifications, such as grab rails, as well as home care visits and day centres that give family carers a break.',
    'Finally, an ageing society needs a workforce with the right skills. Training more nurses, carers and therapists in elderly care, and making these careers attractive, will be essential to meet future demand.'
  ], qs: [
    { t: 'tfng', q: 'Some East Asian cities are ageing rapidly.', a: 'T', why: 'A 段：ageing rapidly。' },
    { t: 'tfng', q: 'Older people usually have only one chronic condition.', a: 'F', why: 'B 段：several chronic conditions。' },
    { t: 'tfng', q: 'District health centres are open 24 hours.', a: 'NG', why: '文章冇講開放時間。' },
    { t: 'gap', q: 'Remaining at home for as long as possible is called ageing in ______.', a: ['place'], why: 'D 段：age in place。' },
    { t: 'gap', q: 'Home modifications include grab ______.', a: ['rails'], why: 'D 段：grab rails。' },
    { t: 'gap', q: 'Strengthening ______ care helps manage problems early.', a: ['primary'], why: 'C 段：strengthen primary care。' },
    { t: 'mcq', q: 'What do day centres provide for family carers?', c: ['Money', 'A break', 'Medical training', 'Housing'], a: 1, why: 'D 段：give family carers a break。' }
  ] });

  R.push({ id: 'r-vr-pain', title: 'Virtual Reality for Pain', zh: '虛擬實境止痛', mins: 18, paras: [
    'Virtual reality (VR) headsets are best known for gaming, but they are increasingly used in hospitals to help patients cope with pain and anxiety. By immersing users in a computer-generated world, VR can draw attention away from uncomfortable procedures.',
    'Some of the strongest evidence comes from burns care, where dressing changes can be extremely painful. In several studies, patients using VR reported lower pain scores than those receiving standard care alone.',
    'In children\'s hospitals, VR has been tested during blood tests, cannula insertion and wound care. Children often find the experience enjoyable, and some studies have found reduced fear and distress. However, very young children may not tolerate wearing a headset.',
    'VR is not a replacement for pain medication. Instead, it is generally used alongside drugs as part of a combined approach. Researchers also note that some users experience motion sickness, and headsets must be cleaned carefully between patients to prevent infection.',
    'Cost and staff training remain barriers. Nevertheless, as devices become cheaper and easier to use, VR may become a routine part of distraction techniques, particularly in paediatrics.'
  ], qs: [
    { t: 'tfng', q: 'VR is used only for gaming.', a: 'F', why: 'A 段：increasingly used in hospitals。' },
    { t: 'tfng', q: 'Some burns patients using VR reported lower pain.', a: 'T', why: 'B 段：lower pain scores。' },
    { t: 'tfng', q: 'VR replaces pain medication.', a: 'F', why: 'D 段：not a replacement。' },
    { t: 'tfng', q: 'VR headsets are cheaper than tablets.', a: 'NG', why: '文章冇比較。' },
    { t: 'gap', q: 'Some users experience motion ______.', a: ['sickness'], why: 'D 段：motion sickness。' },
    { t: 'gap', q: 'Headsets must be cleaned to prevent ______.', a: ['infection'], why: 'D 段：prevent infection。' },
    { t: 'mcq', q: 'Which group may not tolerate VR headsets?', c: ['Teenagers', 'Very young children', 'Adults with burns', 'Nurses'], a: 1, why: 'C 段：very young children may not tolerate。' }
  ] });

  R.push({ id: 'r-volunteer-tourism', title: 'Volunteer Tourism', zh: '義工旅遊', mins: 18, paras: [
    'Volunteer tourism, sometimes called "voluntourism", combines travel with unpaid work such as teaching, building or caring for animals. It has become popular with students and young professionals who want a meaningful travel experience.',
    'Supporters argue that volunteers can contribute useful skills and money to communities, while gaining cultural understanding and personal growth. Some medical volunteers, for example, support health education projects in rural areas.',
    'Critics, however, raise serious concerns. Short-term volunteers without proper skills may do work that local people could be paid to do. In orphanages, repeated short visits by strangers may harm children emotionally.',
    'Experts recommend that volunteers choose projects run by local organisations, stay long enough to be useful, and use skills they genuinely have. Healthcare professionals should work only within their qualifications and follow local regulations.',
    'Ultimately, the value of volunteer tourism depends on whether it meets the needs of the community rather than the wishes of the visitor.'
  ], qs: [
    { t: 'tfng', q: 'Voluntourism involves paid work.', a: 'F', why: 'A 段：unpaid work。' },
    { t: 'tfng', q: 'Repeated short visits may harm children in orphanages.', a: 'T', why: 'C 段：may harm children emotionally。' },
    { t: 'tfng', q: 'Most volunteers are over 50.', a: 'NG', why: '只講學生同年輕專業人士受歡迎，冇講年齡比例。' },
    { t: 'gap', q: 'Choose projects run by ______ organisations.', a: ['local'], why: 'D 段：run by local organisations。' },
    { t: 'gap', q: 'Healthcare professionals should work within their ______.', a: ['qualifications'], why: 'D 段：within their qualifications。' },
    { t: 'mcq', q: 'According to the last paragraph, the value depends on', c: ['the cost of the trip', 'meeting the community\'s needs', 'the number of photos', 'the length of the flight'], a: 1, why: 'E 段：meets the needs of the community。' },
    { t: 'mcq', q: 'What is one criticism of short-term volunteers?', c: ['They stay too long', 'They may take work local people could be paid for', 'They are too skilled', 'They speak the language'], a: 1, why: 'C 段：work that local people could be paid to do。' }
  ] });

  L.push({ id: 'l-asthma-clinic', title: 'Asthma clinic follow-up call', zh: '哮喘診所覆診電話', part: 'Section 1 填表', lines: [
    ['A', 'Hello, this is the Children\'s Asthma Clinic. I\'m calling about Jayden\'s review.'], ['B', 'Oh yes, thank you.'],
    ['A', 'How often has he needed his blue inhaler this month?'], ['B', 'About twice a week, mostly when he plays football.'],
    ['A', 'And is he using his brown preventer every day?'], ['B', 'Yes, two puffs in the morning and two at night.'],
    ['A', 'Good. Does he use a spacer?'], ['B', 'Yes, the orange one.'],
    ['A', 'Has he woken at night with coughing?'], ['B', 'Only once, during a cold.'],
    ['A', 'We\'d like to see him on the 9th of April at 3:40 to check his inhaler technique and update his action plan.'],
    ['A', 'Please bring all his inhalers and his school action plan.']
  ], qs: [
    { q: 'Blue inhaler use (times per week)', a: ['2', 'two', 'twice'] }, { q: 'Uses it mostly when playing ______', a: ['football'] },
    { q: 'Preventer colour', a: ['brown'] }, { q: 'Puffs each time', a: ['2', 'two'] },
    { q: 'Spacer colour', a: ['orange'] }, { q: 'Night waking: only during a ______', a: ['cold'] },
    { q: 'Appointment date: ___ April', a: ['9', '9th'] }, { q: 'Appointment time', a: ['3:40', '3.40', '15:40'] }
  ] });

  L.push({ id: 'l-new-system', title: 'Introducing a new electronic record system', zh: '介紹新電子病歷系統', part: 'Section 2 筆記', lines: [
    ['A', 'Good morning. From the 1st of June, our ward will switch to the new electronic patient record.'],
    ['A', 'Training sessions last two hours and are held in the IT room on the third floor.'],
    ['A', 'Every nurse must complete training before the go-live date. You can book through the staff portal.'],
    ['A', 'The main change is that observations will be entered directly at the bedside using tablets.'],
    ['A', 'The system will automatically calculate the early warning score and alert the nurse in charge if it rises.'],
    ['A', 'Remember to log out every time you leave a device, to protect patient confidentiality.'],
    ['A', 'If you have problems, the IT helpdesk is available 24 hours on extension 4455.']
  ], qs: [
    { q: 'Start date: 1st of ______', a: ['june'] }, { q: 'Training length (hours)', a: ['2', 'two'] },
    { q: 'IT room floor', a: ['3', 'third', '3rd'] }, { q: 'Book training through the staff ______', a: ['portal'] },
    { q: 'Observations entered using ______', a: ['tablets'] }, { q: 'System calculates the early warning ______', a: ['score'] },
    { q: 'Always log ______ when leaving a device', a: ['out'] }, { q: 'Helpdesk extension', a: ['4455'] }
  ] });

  L.push({ id: 'l-lecture-bfeed', title: 'Lecture: supporting breastfeeding', zh: '講座：支援母乳餵哺', part: 'Section 4 講座', lines: [
    ['A', 'Today\'s lecture covers how nurses and midwives can support breastfeeding.'],
    ['A', 'International guidance recommends exclusive breastfeeding for about the first six months, with continued breastfeeding alongside solid foods after that.'],
    ['A', 'Breast milk contains antibodies that help protect babies from infections such as gastroenteritis and ear infections.'],
    ['A', 'Early skin-to-skin contact after birth helps babies to start feeding and keeps them warm.'],
    ['A', 'A good latch is essential. Signs include a wide-open mouth, more of the areola visible above the top lip, and no pain for the mother.'],
    ['A', 'Common problems include sore nipples, engorgement and concerns about milk supply. Early support prevents many mothers from stopping.'],
    ['A', 'Finally, always respect each mother\'s choice and avoid making her feel guilty if she chooses formula feeding.']
  ], qs: [
    { q: 'Exclusive breastfeeding for about ___ months', a: ['6', 'six'] }, { q: 'Breast milk contains ______', a: ['antibodies'] },
    { q: 'Early skin-to-skin helps babies start feeding and stay ______', a: ['warm'] }, { q: 'A good latch: wide-open ______', a: ['mouth'] },
    { q: 'Common problem: sore ______', a: ['nipples'] }, { q: 'Swollen, overfull breasts: ______', a: ['engorgement'] },
    { q: 'Avoid making mothers feel ______', a: ['guilty'] }
  ] });

  const p = (src, m, k, tip) => { if (!P.some(x => x.src === src)) P.push({ src, m, k, tip }); };
  p('Many people do not trust what they read online.', ['Online information is often regarded with suspicion.', 'A large number of people are sceptical about online content.'], [['do not trust', 'regarded with suspicion / sceptical']], 'not trust → be sceptical about。');
  p('Older people want to stay in their own homes.', ['Many elderly people prefer to age in place.', 'Older adults generally wish to remain in their own homes.'], [['stay in their own homes', 'age in place / remain at home']], 'age in place 係長者題好用嘅字。');
  p('Children learn languages easily.', ['Young learners acquire languages with relative ease.', 'Children tend to pick up languages quickly.'], [['learn … easily', 'acquire with ease / pick up quickly']], 'learn → acquire。');
  p('The price of houses has gone up a lot.', ['Property prices have soared.', 'Housing has become significantly more expensive.'], [['gone up a lot', 'soared / become significantly more expensive']], '動詞 soar 表示急升。');
  p('Some jobs will disappear because of robots.', ['Automation is likely to make certain jobs obsolete.', 'Some roles may be replaced by robots.'], [['disappear', 'become obsolete / be replaced'], ['because of robots', 'automation']], 'obsolete（過時、淘汰）。');
  p('Exercise is good for both the body and the mind.', ['Physical activity benefits both physical and mental health.', 'Regular exercise has a positive impact on overall wellbeing.'], [['good for', 'benefits / has a positive impact on'], ['the body and the mind', 'physical and mental health']], '具體 → 抽象。');
  p('Many students feel stressed before exams.', ['Exam-related anxiety is widespread among students.', 'A large proportion of students experience pre-exam stress.'], [['many students', 'a large proportion of students'], ['feel stressed', 'experience stress / anxiety']], '形容詞 → 名詞。');
  p('People throw away too much plastic.', ['Excessive plastic waste is a growing problem.', 'Plastic consumption and disposal are far too high.'], [['throw away too much plastic', 'excessive plastic waste']], '動詞句 → 名詞片語。');
  p('Hospitals need more money.', ['Healthcare facilities require additional funding.', 'Greater investment in hospitals is necessary.'], [['need more money', 'require additional funding / greater investment']], 'money → funding / investment。');
  p('The number of tourists dropped sharply.', ['There was a sharp decline in tourist numbers.', 'Tourist arrivals fell dramatically.'], [['dropped sharply', 'a sharp decline / fell dramatically']], 'Task 1 必用：a sharp decline。');
  p('It is difficult to find a job after graduation.', ['Graduates often struggle to secure employment.', 'Finding work after university can be challenging.'], [['find a job', 'secure employment'], ['difficult', 'challenging / struggle']], 'find a job → secure employment。');
  p('Most people agree that education is important.', ['There is a broad consensus that education is essential.', 'Education is widely recognised as vital.'], [['most people agree', 'broad consensus / widely recognised'], ['important', 'essential / vital']], 'There is a broad consensus that…');
  p('Children copy what their parents do.', ['Children tend to imitate their parents\' behaviour.', 'Parents act as role models whose behaviour children replicate.'], [['copy', 'imitate / replicate']], 'copy → imitate。');
  p('Smoking should not be allowed in public places.', ['Smoking ought to be banned in public areas.', 'Public spaces should be smoke-free.'], [['should not be allowed', 'ought to be banned'], ['public places', 'public areas / spaces']], '否定 → 正面講法（smoke-free）。');
  p('More people are working from home.', ['Remote working is on the rise.', 'There has been a growing trend towards working from home.'], [['more people are working from home', 'remote working is on the rise / a growing trend']], 'on the rise = 上升中。');
})();
