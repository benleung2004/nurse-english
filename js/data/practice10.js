// IELTS 練習擴充（十）：閱讀 3 篇、聽力 3 段（原創練習材料）
(function () {
  const R = NE.reading, L = NE.listening;

  R.push({ id: 'r-nurse-led', title: 'The Rise of Nurse-Led Clinics', zh: '護士主導診所嘅興起', mins: 18, paras: [
    'In many health systems, nurses are taking on roles that were once performed only by doctors. Nurse-led clinics, in which specially trained nurses assess patients, order tests and adjust treatment within agreed protocols, have become common for conditions such as diabetes, asthma and wound care.',
    'One reason for this change is demand. Ageing populations and rising rates of chronic disease mean that doctors cannot see every patient as often as needed. By managing stable patients with long-term conditions, nurses free doctors to focus on more complex cases.',
    'Evaluations of nurse-led clinics have generally been positive. Patients often report high satisfaction, describing nurses as approachable and good at explaining things. Several studies have found that outcomes, such as blood sugar control or asthma symptoms, are at least as good as in doctor-led care, although results vary by setting.',
    'Success depends on training and clear governance. Nurses running clinics usually complete advanced courses and must work within protocols that define when to refer a patient to a doctor. In some countries, they are also qualified to prescribe certain medicines.',
    'Critics raise concerns about workload and recognition. If experienced nurses move into clinics, wards may lose skilled staff, and some nurses feel that their extra responsibilities are not matched by pay or career progression. Supporters argue that well-designed advanced roles can, in fact, help to retain nurses by offering new professional challenges.'
  ], qs: [
    { t: 'tfng', q: 'Nurse-led clinics are used for long-term conditions such as diabetes.', a: 'T', why: 'A 段：diabetes, asthma and wound care。' },
    { t: 'tfng', q: 'Outcomes in nurse-led clinics are always better than in doctor-led care.', a: 'F', why: 'C 段：at least as good as … results vary。' },
    { t: 'tfng', q: 'All countries allow nurses to prescribe medicines.', a: 'F', why: 'D 段：In some countries。' },
    { t: 'tfng', q: 'Nurse-led clinics are cheaper than doctor-led clinics.', a: 'NG', why: '文章冇講成本。' },
    { t: 'gap', q: 'Nurses work within ______ that define when to refer.', a: ['protocols'], why: 'D 段：work within protocols。' },
    { t: 'gap', q: 'Patients describe nurses as ______ and good at explaining.', a: ['approachable'], why: 'C 段：approachable。' },
    { t: 'mcq', q: 'According to supporters in paragraph E, advanced roles may', c: ['reduce patient satisfaction', 'help retain nurses', 'replace doctors entirely', 'lower training standards'], a: 1, why: 'E 段：help to retain nurses。' }
  ] });

  R.push({ id: 'r-breakfast', title: 'Is Breakfast Really the Most Important Meal?', zh: '早餐真係最重要嗎？', mins: 18, paras: [
    'For decades, people have been told that breakfast is the most important meal of the day. Early studies found that people who ate breakfast tended to be slimmer and healthier than those who skipped it, which led to widespread advice to eat in the morning.',
    'However, many of these studies were observational: they compared groups of people but could not prove that breakfast itself caused the difference. Breakfast eaters may also be more likely to exercise, sleep well and avoid smoking, which could explain their better health.',
    'More recent controlled trials, in which participants were randomly assigned to eat or skip breakfast, have produced mixed results. In several studies, eating breakfast did not lead to weight loss, partly because people ate more calories overall.',
    'For children, the picture is somewhat different. A number of studies suggest that a nutritious breakfast can improve concentration and behaviour at school, particularly for children from low-income families who might otherwise go hungry. This is one reason why some schools offer free breakfast programmes.',
    'Nutritionists now tend to emphasise the quality of food rather than its timing. A breakfast of sugary cereal may provide little benefit, whereas whole grains, fruit and protein can keep people full for longer. For adults, the best advice may simply be to listen to hunger signals and choose healthy foods.'
  ], qs: [
    { t: 'tfng', q: 'Observational studies proved that breakfast causes better health.', a: 'F', why: 'B 段：could not prove。' },
    { t: 'tfng', q: 'In some trials, eating breakfast did not lead to weight loss.', a: 'T', why: 'C 段：did not lead to weight loss。' },
    { t: 'tfng', q: 'Free breakfast programmes exist in every country.', a: 'NG', why: '只講 some schools。' },
    { t: 'gap', q: 'A nutritious breakfast may improve children\'s ______ at school.', a: ['concentration'], why: 'D 段：improve concentration。' },
    { t: 'gap', q: 'Nutritionists emphasise the ______ of food rather than timing.', a: ['quality'], why: 'E 段：quality of food。' },
    { t: 'mcq', q: 'Why might breakfast eaters in early studies have been healthier?', c: ['Breakfast contains special vitamins', 'They may have had other healthy habits', 'They ate fewer calories at night', 'They were younger'], a: 1, why: 'B 段：more likely to exercise, sleep well and avoid smoking。' },
    { t: 'mcq', q: 'What is the best advice for adults, according to paragraph E?', c: ['Always eat breakfast', 'Never eat breakfast', 'Listen to hunger signals and choose healthy foods', 'Eat sugary cereal'], a: 2, why: 'E 段：listen to hunger signals and choose healthy foods。' }
  ] });

  R.push({ id: 'r-ai-diagnosis', title: 'Artificial Intelligence in Diagnosis', zh: '人工智能輔助診斷', mins: 18, paras: [
    'Artificial intelligence (AI) systems are increasingly being tested in healthcare to help interpret medical images, such as X-rays, eye scans and skin photographs. Trained on thousands of examples, these programs learn to recognise patterns linked to disease.',
    'In some studies, AI tools have matched or even exceeded the accuracy of specialists in detecting specific conditions, such as diabetic eye disease or certain lung abnormalities. Because they do not get tired, they could help to reduce delays when there are not enough specialists to review every image quickly.',
    'However, experts warn that results from research settings do not always translate into real-world practice. An AI system trained on images from one hospital may perform less well with different equipment or patient populations. If the training data contains few examples from certain groups, the tool may be less accurate for them, raising concerns about fairness.',
    'There are also practical and ethical questions. Clinicians need to understand how much to trust an AI recommendation and remain responsible for final decisions. Patients may want to know whether a computer was involved in their diagnosis, and their data must be protected.',
    'Most specialists see AI as a support rather than a replacement. In one common model, the AI highlights images that may be abnormal so that clinicians can prioritise them. Nurses and other staff will also need training to use these tools safely and explain them to patients.'
  ], qs: [
    { t: 'tfng', q: 'AI systems learn by studying many examples.', a: 'T', why: 'A 段：Trained on thousands of examples。' },
    { t: 'tfng', q: 'AI tools always perform equally well in every hospital.', a: 'F', why: 'C 段：may perform less well with different equipment。' },
    { t: 'tfng', q: 'Most patients refuse AI-assisted diagnosis.', a: 'NG', why: '文章冇講病人拒絕。' },
    { t: 'gap', q: 'Few examples from certain groups raise concerns about ______.', a: ['fairness'], why: 'C 段：concerns about fairness。' },
    { t: 'gap', q: 'Clinicians remain ______ for final decisions.', a: ['responsible'], why: 'D 段：remain responsible。' },
    { t: 'gap', q: 'AI can help clinicians ______ abnormal images.', a: ['prioritise', 'prioritize'], why: 'E 段：so that clinicians can prioritise them。' },
    { t: 'mcq', q: 'How do most specialists view AI?', c: ['As a replacement for doctors', 'As a support for clinicians', 'As too dangerous to use', 'As useful only for nurses'], a: 1, why: 'E 段：a support rather than a replacement。' }
  ] });

  L.push({ id: 'l-flat-rent', title: 'Renting a room near the hospital', zh: '租醫院附近嘅房', part: 'Section 1 填表', lines: [
    ['A', 'Hello, I\'m calling about the room advertised near the general hospital.'], ['B', 'Yes, it\'s still available. It\'s a single room in a three-bedroom flat.'],
    ['A', 'How much is the rent?'], ['B', 'It\'s 6,800 dollars a month, including water, but electricity is extra.'],
    ['A', 'How far is it from the hospital?'], ['B', 'About an eight-minute walk. There\'s also a bus stop right outside.'],
    ['A', 'Who are the other flatmates?'], ['B', 'Two others — a physiotherapist and a university student.'],
    ['A', 'I work night shifts. Is the flat quiet during the day?'], ['B', 'Yes, very. The room faces the back, away from the main road.'],
    ['A', 'When could I move in?'], ['B', 'From the 1st of January. We\'d need a deposit of two months\' rent.'],
    ['A', 'Can I view it this Saturday?'], ['B', 'Sure, how about 11 o\'clock? The address is 42 Garden Road, flat 15C.']
  ], qs: [
    { q: 'Monthly rent (dollars)', a: ['6800', '6,800'] }, { q: 'Rent includes ______', a: ['water'] },
    { q: 'Walking time to hospital (minutes)', a: ['8', 'eight'] }, { q: 'One flatmate is a ______', a: ['physiotherapist', 'student', 'university student'] },
    { q: 'The room faces the ______', a: ['back'] }, { q: 'Move-in month', a: ['january'] },
    { q: 'Deposit (months\' rent)', a: ['2', 'two'] }, { q: 'Viewing time on Saturday', a: ['11', '11:00', '11 o\'clock'] },
    { q: 'Flat number', a: ['15c'] }
  ] });

  L.push({ id: 'l-hand-hygiene-day', title: 'Hand hygiene campaign announcement', zh: '手部衞生活動宣佈', part: 'Section 2 筆記', lines: [
    ['A', 'Good morning, everyone. Next week is our hospital\'s Hand Hygiene Week, and I\'d like to explain what\'s planned.'],
    ['A', 'On Monday, there\'ll be a stand in the main lobby where you can test your technique using a special lotion and UV light.'],
    ['A', 'From Tuesday to Thursday, infection control nurses will visit every ward to do short audits. These are for learning, not for blame.'],
    ['A', 'On Wednesday at 1 p.m., there\'s a 30-minute talk in Lecture Theatre 2 about glove use. Many staff wear gloves when they don\'t need to.'],
    ['A', 'We\'re also running a poster competition for children on the paediatric wards. The theme is "Clean hands, happy hearts".'],
    ['A', 'The ward with the highest audit score will win a breakfast for the whole team.'],
    ['A', 'Remember the five moments: before patient contact, before a clean procedure, after body fluid exposure, after patient contact and after touching the surroundings.']
  ], qs: [
    { q: 'Monday stand location: main ______', a: ['lobby'] }, { q: 'Technique test uses lotion and ______ light', a: ['uv'] },
    { q: 'Audits are for ______, not blame', a: ['learning'] }, { q: 'Talk day', a: ['wednesday'] },
    { q: 'Talk length (minutes)', a: ['30', 'thirty'] }, { q: 'Talk topic: ______ use', a: ['glove', 'gloves'] },
    { q: 'Prize for best ward: a team ______', a: ['breakfast'] }, { q: 'Number of moments for hand hygiene', a: ['5', 'five'] }
  ] });

  L.push({ id: 'l-lecture-resilience', title: 'Lecture: resilience in nursing', zh: '講座：護士嘅抗逆力', part: 'Section 4 講座', lines: [
    ['A', 'Good afternoon. Today\'s lecture is about resilience — the ability to adapt and recover from stress — and why it matters for nurses.'],
    ['A', 'Surveys suggest that around one in three nurses experience symptoms of burnout, such as emotional exhaustion and reduced sense of achievement.'],
    ['A', 'It\'s important to say that resilience is not only an individual responsibility. Organisations must provide safe staffing and supportive leadership.'],
    ['A', 'At an individual level, research highlights several protective factors. The first is social support, from colleagues, friends and family.'],
    ['A', 'The second is reflection. Writing a short journal after difficult shifts can help nurses make sense of their experiences.'],
    ['A', 'The third is self-care: regular sleep, physical activity and setting boundaries, for example by not checking work messages on days off.'],
    ['A', 'Finally, mentoring programmes, where newer nurses are paired with experienced ones, have been shown to improve confidence and retention.']
  ], qs: [
    { q: 'Resilience is the ability to adapt and ______ from stress', a: ['recover'] }, { q: 'Proportion of nurses with burnout symptoms: one in ______', a: ['3', 'three'] },
    { q: 'Organisations must provide safe ______', a: ['staffing'] }, { q: 'First protective factor: social ______', a: ['support'] },
    { q: 'Writing a short ______ after difficult shifts', a: ['journal'] }, { q: 'Self-care includes setting ______', a: ['boundaries'] },
    { q: 'Mentoring improves confidence and ______', a: ['retention'] }
  ] });
})();
