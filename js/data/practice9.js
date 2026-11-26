// IELTS 練習擴充（九）：閱讀 3 篇、聽力 3 段（原創練習材料）
(function () {
  const R = NE.reading, L = NE.listening;

  R.push({ id: 'r-falls', title: 'Preventing Falls in Hospital', zh: '預防醫院跌倒', mins: 18, paras: [
    'Falls are among the most common safety incidents reported in hospitals. Most involve older patients, and while many cause no injury, some lead to fractures, head injuries and longer hospital stays. Even a fall without injury can make a patient fearful and less willing to move, which slows recovery.',
    'The reasons patients fall are usually complex. Illness, new medications, low blood pressure on standing, confusion and an unfamiliar environment can all play a part. Many falls happen at night, when patients try to walk to the toilet alone without their glasses or walking aids.',
    'For many years, hospitals relied heavily on risk-scoring tools to predict which patients would fall. More recent guidance suggests that these scores are not accurate enough on their own. Instead, it recommends a multifactorial assessment for older patients, looking at individual factors such as continence, vision, footwear and medicines.',
    'Interventions are then tailored to the person. These may include reviewing sedating drugs, checking lying and standing blood pressure, keeping the call bell and walking aids within reach, and arranging regular toilet visits. Bed rails are not always helpful; for some confused patients they may increase the risk of serious injury if the person tries to climb over them.',
    'Experts stress that preventing falls should not mean keeping patients in bed. Long periods of bed rest cause muscle weakness, especially in older people, and this in turn increases the risk of falling. The aim is to help patients stay safely active, involving them and their families in the plan.'
  ], qs: [
    { t: 'tfng', q: 'All hospital falls cause serious injuries.', a: 'F', why: 'A 段：many cause no injury。' },
    { t: 'tfng', q: 'Many falls occur at night when patients go to the toilet.', a: 'T', why: 'B 段：Many falls happen at night … to the toilet。' },
    { t: 'tfng', q: 'Risk scores alone are considered accurate enough.', a: 'F', why: 'C 段：not accurate enough on their own。' },
    { t: 'tfng', q: 'Falls are more common in private hospitals.', a: 'NG', why: '文章冇比較公私營醫院。' },
    { t: 'gap', q: 'Older patients should receive a ______ assessment.', a: ['multifactorial'], why: 'C 段：a multifactorial assessment。' },
    { t: 'gap', q: 'Long bed rest causes muscle ______.', a: ['weakness'], why: 'E 段：muscle weakness。' },
    { t: 'mcq', q: 'Why may bed rails be unhelpful for some patients?', c: ['They are expensive', 'Confused patients may climb over them and be injured', 'They are uncomfortable', 'Families dislike them'], a: 1, why: 'D 段：tries to climb over them。' }
  ] });

  R.push({ id: 'r-language-brain', title: 'Learning a Language as an Adult', zh: '成年人學外語', mins: 18, paras: [
    'It is often claimed that children learn languages effortlessly while adults struggle. There is some truth in this: people who start learning a language in early childhood are more likely to achieve a native-like accent. However, research shows that adults have important advantages too.',
    'Adults usually learn grammar and vocabulary faster than children in the early stages, because they can use their knowledge of their first language, understand explicit explanations and apply study strategies. In classroom studies, older learners often make quicker initial progress than younger ones.',
    'Motivation and exposure are key factors. Adults who need a language for work or study, such as healthcare workers preparing for an English test, tend to make steady progress when they practise regularly. Many researchers believe that the amount of meaningful input, such as listening and reading, matters more than age alone.',
    'Memory research has also influenced language teaching. Spaced repetition, which involves reviewing words at increasing intervals, has been shown to improve long-term retention compared with cramming. Testing yourself, rather than simply re-reading notes, is another effective strategy, known as retrieval practice.',
    'Finally, anxiety can be a major barrier for adult learners. Fear of making mistakes may stop people from speaking, which limits practice. Teachers recommend focusing on communication rather than perfection, and recording yourself speaking so that progress can be noticed over time.'
  ], qs: [
    { t: 'tfng', q: 'Children who start early are more likely to have a native-like accent.', a: 'T', why: 'A 段：more likely to achieve a native-like accent。' },
    { t: 'tfng', q: 'Adults always learn more slowly than children at the beginning.', a: 'F', why: 'B 段：older learners often make quicker initial progress。' },
    { t: 'tfng', q: 'Spaced repetition works better for Asian learners.', a: 'NG', why: '文章冇提地區。' },
    { t: 'gap', q: 'Reviewing words at increasing intervals is called spaced ______.', a: ['repetition'], why: 'D 段：Spaced repetition。' },
    { t: 'gap', q: 'Testing yourself is known as ______ practice.', a: ['retrieval'], why: 'D 段：retrieval practice。' },
    { t: 'gap', q: 'Fear of making mistakes is described as a form of ______.', a: ['anxiety'], why: 'E 段：anxiety can be a major barrier。' },
    { t: 'mcq', q: 'According to paragraph C, what may matter more than age?', c: ['Natural talent', 'The amount of meaningful input', 'Having a good teacher only', 'Living abroad'], a: 1, why: 'C 段：the amount of meaningful input … matters more than age alone。' }
  ] });

  R.push({ id: 'r-plastic-bags', title: 'Charging for Plastic Bags', zh: '膠袋收費', mins: 18, paras: [
    'In an effort to reduce waste, many governments have introduced a small charge for single-use plastic bags in shops. The idea is simple: when customers have to pay even a small amount, many choose to bring their own reusable bags.',
    'Evidence from several cities suggests that such charges can be remarkably effective. In some places, the number of plastic bags handed out by large supermarkets fell by more than 80 per cent within a year. Surveys indicate that many shoppers quickly developed the habit of carrying a bag with them.',
    'However, the policy is not without criticism. Some argue that the charge is too small to change behaviour in the long run, and that people may simply buy plastic bin liners instead of reusing shopping bags. Others point out that reusable bags made from thick plastic or cotton have a higher environmental cost to produce, so they need to be used many times to be beneficial.',
    'There are also questions about fairness. Small shops may find the rules harder to follow, and low-income households could be affected more than wealthier ones. To address this, some governments allow exemptions for certain items, such as fresh food, or use the money raised for environmental projects.',
    'Supporters argue that the greatest value of the charge lies in changing attitudes. By making people think about everyday choices, it may increase public support for wider measures, such as reducing packaging and expanding recycling.'
  ], qs: [
    { t: 'tfng', q: 'In some places, bag use fell by more than 80 per cent.', a: 'T', why: 'B 段：fell by more than 80 per cent。' },
    { t: 'tfng', q: 'Cotton bags always have a lower environmental cost than plastic bags.', a: 'F', why: 'C 段：higher environmental cost to produce。' },
    { t: 'tfng', q: 'All governments use the money for hospitals.', a: 'NG', why: '只講 environmental projects，冇講醫院。' },
    { t: 'gap', q: 'People may buy plastic bin ______ instead.', a: ['liners'], why: 'C 段：plastic bin liners。' },
    { t: 'gap', q: 'Some governments allow ______ for items such as fresh food.', a: ['exemptions'], why: 'D 段：allow exemptions。' },
    { t: 'mcq', q: 'According to supporters, the greatest value of the charge is', c: ['raising money', 'changing attitudes', 'helping small shops', 'reducing prices'], a: 1, why: 'E 段：greatest value … lies in changing attitudes。' },
    { t: 'mcq', q: 'Which concern about fairness is mentioned?', c: ['Tourists pay more', 'Low-income households may be affected more', 'Supermarkets lose money', 'Children cannot carry bags'], a: 1, why: 'D 段：low-income households could be affected more。' }
  ] });

  L.push({ id: 'l-gp-phone', title: 'Phoning a clinic about a sick child', zh: '致電診所問小朋友病情', part: 'Section 1 填表', lines: [
    ['A', 'Hello, Riverside Family Clinic. How can I help?'], ['B', 'Hi, my daughter has had a fever since last night, and I\'d like her to see a doctor.'],
    ['A', 'I\'m sorry to hear that. How old is she?'], ['B', 'She\'s four.'],
    ['A', 'What was her highest temperature?'], ['B', '38.9 degrees, at about 3 a.m.'],
    ['A', 'Is she drinking?'], ['B', 'Yes, but less than usual. She\'s had three cups of water this morning.'],
    ['A', 'Any rash or breathing problems?'], ['B', 'No, just a cough and a runny nose.'],
    ['A', 'Okay. Dr Ho has an appointment at 11:20. Can you make that?'], ['B', 'Yes. What should I bring?'],
    ['A', 'Her ID card and any medicines she\'s taken. The consultation fee is 350 dollars.'],
    ['A', 'And if she becomes very drowsy or develops a rash, go straight to A&E.']
  ], qs: [
    { q: 'Child\'s age', a: ['4', 'four'] }, { q: 'Highest temperature (°C)', a: ['38.9'] },
    { q: 'Time of highest temperature', a: ['3', '3am', '3 a.m.', '3:00'] }, { q: 'Cups of water this morning', a: ['3', 'three'] },
    { q: 'Other symptoms: cough and runny ______', a: ['nose'] }, { q: 'Doctor\'s name: Dr ______', a: ['ho'] },
    { q: 'Appointment time', a: ['11:20', '11.20'] }, { q: 'Consultation fee (dollars)', a: ['350'] },
    { q: 'Go to A&E if she becomes very drowsy or develops a ______', a: ['rash'] }
  ] });

  L.push({ id: 'l-wellness', title: 'Staff wellbeing programme', zh: '員工身心健康計劃', part: 'Section 2 筆記', lines: [
    ['A', 'Good afternoon. I\'m from the Staff Wellbeing Team, and I\'d like to introduce our new programme.'],
    ['A', 'First, we now offer free counselling. You can book up to six sessions a year, and it\'s completely confidential.'],
    ['A', 'Second, there\'s a new rest room on the fourth floor, open 24 hours, with reclining chairs for night staff.'],
    ['A', 'Third, yoga classes run every Tuesday at 5:30 in the training centre. No experience is needed.'],
    ['A', 'We\'re also starting peer support groups after difficult events, such as a patient death. These will be led by trained senior nurses.'],
    ['A', 'Finally, staff can get a 20 percent discount at the gym near the main entrance.'],
    ['A', 'To join any activity, please register on the intranet or email the wellbeing team.']
  ], qs: [
    { q: 'Counselling sessions per year (maximum)', a: ['6', 'six'] }, { q: 'Rest room floor', a: ['4', 'fourth', '4th'] },
    { q: 'Rest room has reclining ______', a: ['chairs'] }, { q: 'Yoga day', a: ['tuesday'] },
    { q: 'Yoga time', a: ['5:30', '5.30', '17:30'] }, { q: 'Peer support groups are led by trained senior ______', a: ['nurses'] },
    { q: 'Gym discount (%)', a: ['20', 'twenty'] }, { q: 'Register on the ______', a: ['intranet'] }
  ] });

  L.push({ id: 'l-lecture-pain', title: 'Lecture: assessing pain in children', zh: '講座：評估兒童痛楚', part: 'Section 4 講座', lines: [
    ['A', 'Today\'s topic is pain assessment in children, which is often more challenging than in adults.'],
    ['A', 'Young children may not have the words to describe pain, and some hide it because they are afraid of injections.'],
    ['A', 'For this reason, we use age-appropriate tools. For infants and non-verbal children, behavioural scales such as FLACC look at face, legs, activity, cry and consolability.'],
    ['A', 'From about three or four years, children can use faces scales, choosing a picture that matches how they feel.'],
    ['A', 'Older children, usually from eight, can use a numerical scale from zero to ten.'],
    ['A', 'Parents are an essential source of information, because they notice small changes in behaviour.'],
    ['A', 'Remember to reassess after giving pain relief, typically within 30 to 60 minutes, and document the score.'],
    ['A', 'Non-drug methods, such as distraction, positioning and sucrose for newborns, should be used alongside medication.']
  ], qs: [
    { q: 'Behavioural scale for infants', a: ['flacc'] }, { q: 'FLACC includes face, legs, activity, cry and ______', a: ['consolability'] },
    { q: 'Faces scales from about age three or ______', a: ['4', 'four'] }, { q: 'Numerical scales usually from age ______', a: ['8', 'eight'] },
    { q: 'Parents notice small changes in ______', a: ['behaviour', 'behavior'] }, { q: 'Reassess within 30 to ___ minutes', a: ['60', 'sixty'] },
    { q: 'Non-drug method for newborns', a: ['sucrose'] }
  ] });
})();
