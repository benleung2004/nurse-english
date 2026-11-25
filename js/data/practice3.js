// IELTS 練習擴充（三）：閱讀 4 篇、聽力 4 段（原創練習材料）
(function () {
  const R = NE.reading, L = NE.listening;

  R.push({ id: 'r-nightingale', title: 'The Lady with the Lamp', zh: '提燈天使南丁格爾', mins: 18, paras: [
    'Florence Nightingale is often remembered as a kind nurse who walked through hospital wards at night carrying a lamp. While this image is accurate, it hides a less well-known side of her work: she was also a pioneering statistician whose use of data changed public health.',
    'In 1854, Nightingale led a group of nurses to a British military hospital in Scutari, in present-day Turkey, during the Crimean War. She found overcrowded wards, poor sanitation and a shortage of basic supplies. More soldiers were dying from infections such as cholera and typhus than from battle wounds.',
    'Nightingale and her team cleaned the wards, organised laundry and improved food. Death rates fell, although historians still debate how much of this was due to her work and how much to a sanitary commission that repaired the hospital\'s drains around the same time.',
    'After returning to Britain, Nightingale used statistics to persuade the government to reform military hospitals. She designed a type of chart, sometimes called a "rose diagram", which showed clearly that preventable diseases had killed far more soldiers than injuries. Politicians who would not read long reports could understand her diagrams at a glance.',
    'In 1860, she founded a nursing school at St Thomas\' Hospital in London, helping to turn nursing into a respected, trained profession. Today, International Nurses Day is celebrated on 12 May, her birthday, as a reminder that good nursing combines compassion with evidence.'
  ], qs: [
    { t: 'tfng', q: 'Nightingale was also skilled in statistics.', a: 'T', why: 'A 段：she was also a pioneering statistician。' },
    { t: 'tfng', q: 'Most soldiers in the hospital died from battle wounds.', a: 'F', why: 'B 段：more soldiers were dying from infections … than from battle wounds。' },
    { t: 'tfng', q: 'Historians agree that Nightingale alone reduced the death rate.', a: 'F', why: 'C 段：historians still debate … sanitary commission。' },
    { t: 'tfng', q: 'Nightingale personally repaired the hospital drains.', a: 'NG', why: '文章講衞生委員會修理渠務，冇講佢親手做 → Not Given。' },
    { t: 'gap', q: 'Nightingale\'s chart is sometimes called a "______ diagram".', a: ['rose'], why: 'D 段："rose diagram"。' },
    { t: 'gap', q: 'Her nursing school opened in the year ______.', a: ['1860'], why: 'E 段：In 1860, she founded a nursing school。' },
    { t: 'mcq', q: 'Why were her diagrams effective?', c: ['They were very long', 'Politicians could understand them quickly', 'They were secret', 'They used only words'], a: 1, why: 'D 段：Politicians … could understand her diagrams at a glance。' },
    { t: 'mcq', q: 'International Nurses Day is held on…', c: ['1 May', '12 May', '12 December', '1 January'], a: 1, why: 'E 段：12 May, her birthday。' },
  ] });

  R.push({ id: 'r-ageing', title: 'Ageing Societies', zh: '人口老化社會', mins: 18, paras: [
    'Across East Asia, populations are ageing faster than almost anywhere else in history. In Hong Kong, the proportion of residents aged 65 or above is expected to rise from about one fifth today to more than one third by the 2040s. Similar changes are taking place in Japan, South Korea and mainland China.',
    'Two main factors drive this shift. First, people are living longer thanks to better healthcare, nutrition and living conditions. Second, birth rates have fallen sharply, as couples marry later, housing is expensive and many people choose to have fewer children or none at all.',
    'An ageing population brings real challenges. Demand for healthcare and long-term care rises, while the number of working-age people who pay taxes may fall. Hospitals already report long waiting times, and many care homes struggle to recruit enough staff.',
    'However, some researchers argue that the picture is not entirely negative. Many older people remain healthy and active well into their seventies. They contribute as volunteers, grandparents who provide childcare, and consumers in a growing "silver economy" of products and services designed for older adults.',
    'Policy responses vary. Some governments encourage people to work longer, others invest in community care so that older people can stay at home, and several are using technology such as remote monitoring. Experts agree that preparing early — through health promotion, age-friendly housing and training more carers — is far less costly than reacting to a crisis later.'
  ], qs: [
    { t: 'tfng', q: 'Over a third of Hong Kong residents are already aged 65 or above.', a: 'F', why: 'A 段：今日大約五分一，預計 2040 年代超過三分一。' },
    { t: 'tfng', q: 'Falling birth rates are one reason for population ageing.', a: 'T', why: 'B 段：birth rates have fallen sharply。' },
    { t: 'tfng', q: 'All care homes in Hong Kong have enough staff.', a: 'F', why: 'C 段：many care homes struggle to recruit enough staff。' },
    { t: 'tfng', q: 'The silver economy is larger than the tourism industry.', a: 'NG', why: '文章冇比較 → Not Given。' },
    { t: 'gap', q: 'Products and services for older adults are part of the "______ economy".', a: ['silver'], why: 'D 段："silver economy"。' },
    { t: 'gap', q: 'Some governments use technology such as remote ______.', a: ['monitoring'], why: 'E 段：remote monitoring。' },
    { t: 'mcq', q: 'What do experts say about preparing early?', c: ['It is too expensive', 'It costs less than reacting to a crisis later', 'It is unnecessary', 'It only helps young people'], a: 1, why: 'E 段：far less costly than reacting to a crisis later。' },
  ] });

  R.push({ id: 'r-sleep-teens', title: 'Why Teenagers Sleep Late', zh: '點解青少年遲瞓', mins: 18, paras: [
    'Parents often complain that teenagers stay up late and struggle to get up in the morning. While late-night phone use plays a part, scientists say there is also a biological explanation: during puberty, the body clock shifts later by up to two hours.',
    'This shift is linked to the hormone melatonin, which makes us feel sleepy. In adolescents, melatonin is released later in the evening than in children or adults. As a result, many teenagers simply do not feel tired until around 11 p.m. or later, even if they go to bed earlier.',
    'Most experts recommend that teenagers sleep eight to ten hours a night. However, surveys in Hong Kong and other cities suggest that many secondary school students sleep fewer than seven hours on school nights. Lack of sleep has been linked to poor concentration, low mood and even a higher risk of accidents.',
    'Some schools overseas have experimented with starting lessons later in the morning. In several studies, students at schools that started 30 to 60 minutes later slept longer, were less sleepy in class and had better attendance. Critics, however, point out that later start times can be difficult for working parents and for school transport.',
    'Screens make the problem worse. Blue light from phones and tablets can delay the release of melatonin further, and social media keeps the brain alert. Doctors suggest a "screen curfew" an hour before bed, keeping phones out of the bedroom, and getting morning daylight to help reset the body clock.'
  ], qs: [
    { t: 'tfng', q: 'Teenagers\' body clocks shift later during puberty.', a: 'T', why: 'A 段：the body clock shifts later by up to two hours。' },
    { t: 'tfng', q: 'Melatonin is released earlier in teenagers than in adults.', a: 'F', why: 'B 段：released later in the evening。' },
    { t: 'tfng', q: 'Many Hong Kong secondary students sleep fewer than seven hours on school nights.', a: 'T', why: 'C 段：many … sleep fewer than seven hours on school nights。' },
    { t: 'tfng', q: 'All schools in Hong Kong have changed their start times.', a: 'NG', why: '文章講海外學校試驗，冇講香港全部學校 → Not Given。' },
    { t: 'gap', q: 'Experts recommend that teenagers sleep eight to ______ hours a night.', a: ['ten', '10'], why: 'C 段：eight to ten hours。' },
    { t: 'gap', q: 'Doctors suggest a screen ______ an hour before bed.', a: ['curfew'], why: 'E 段："screen curfew"。' },
    { t: 'mcq', q: 'What is one criticism of later school start times?', c: ['Students sleep less', 'They can be difficult for working parents and transport', 'They reduce attendance', 'They increase screen time'], a: 1, why: 'D 段：difficult for working parents and for school transport。' },
  ] });

  R.push({ id: 'r-antibiotics', title: 'The Threat of Antibiotic Resistance', zh: '抗生素耐藥性嘅威脅', mins: 18, paras: [
    'When penicillin became widely available in the 1940s, it transformed medicine. Infections that had once been deadly could suddenly be cured within days. Yet Alexander Fleming, who discovered penicillin, warned that misuse could lead bacteria to become resistant. His warning has proved correct.',
    'Antibiotic resistance occurs when bacteria change so that medicines no longer kill them. Every time antibiotics are used, sensitive bacteria die, but a few resistant ones may survive and multiply. Overuse speeds up this process, for example when antibiotics are taken for viral infections such as colds, against which they have no effect.',
    'Agriculture is another major factor. In many countries, large amounts of antibiotics are given to healthy farm animals to make them grow faster or to prevent disease. Resistant bacteria can then spread to humans through food, water and the environment.',
    'The consequences are serious. Common operations and cancer treatments rely on effective antibiotics to prevent infection. Health organisations warn that, without action, drug-resistant infections could cause millions of deaths each year by 2050.',
    'Solutions require action at many levels. Doctors are encouraged to prescribe antibiotics only when necessary, and patients are told to finish the course as directed and never share antibiotics. Hospitals use strict infection control and "antibiotic stewardship" programmes. Meanwhile, governments are offering incentives to drug companies to develop new antibiotics, a field that has attracted little investment for decades.'
  ], qs: [
    { t: 'tfng', q: 'Fleming warned that bacteria could become resistant.', a: 'T', why: 'A 段：Fleming … warned that misuse could lead bacteria to become resistant。' },
    { t: 'tfng', q: 'Antibiotics are effective against colds.', a: 'F', why: 'B 段：viral infections such as colds, against which they have no effect。' },
    { t: 'tfng', q: 'In some countries, healthy farm animals are given antibiotics.', a: 'T', why: 'C 段：given to healthy farm animals。' },
    { t: 'tfng', q: 'Hong Kong has banned antibiotics in farming.', a: 'NG', why: '文章冇講香港 → Not Given。' },
    { t: 'gap', q: 'Hospital programmes to use antibiotics wisely are called antibiotic ______.', a: ['stewardship'], why: 'E 段："antibiotic stewardship"。' },
    { t: 'gap', q: 'Drug-resistant infections could cause millions of deaths a year by ______.', a: ['2050'], why: 'D 段：by 2050。' },
    { t: 'mcq', q: 'Why are governments offering incentives to drug companies?', c: ['To lower prices', 'Because developing new antibiotics has attracted little investment', 'To stop research', 'To export medicines'], a: 1, why: 'E 段：a field that has attracted little investment for decades。' },
  ] });

  L.push({ id: 'l-appointment', title: 'Changing a clinic appointment', zh: '改診所預約', part: 'Section 1 填表', lines: [
    ['A', 'Good morning, Kowloon Family Clinic.'], ['B', 'Hi, I need to change my appointment, please.'],
    ['A', 'Sure. What\'s your name?'], ['B', 'Mandy Chow. That\'s C-H-O-W.'], ['A', 'And your date of birth?'], ['B', 'The 9th of July, 1999.'],
    ['A', 'I see you\'re booked for Wednesday at 3:30. When would you prefer?'], ['B', 'I\'m on a late shift on Wednesday. Could I come on Friday morning instead?'],
    ['A', 'Friday at 9:15 is available with Dr Patel.'], ['B', 'That\'s perfect.'],
    ['A', 'Is the appointment still for your knee pain?'], ['B', 'Yes, but it\'s also a bit swollen now.'],
    ['A', 'OK, I\'ll note that. Please bring your previous X-ray if you have it.'], ['B', 'Sure. Is there parking nearby?'],
    ['A', 'There\'s a car park on Nathan Road, but the MTR exit B2 is closer.'], ['B', 'Thanks. And what\'s your phone number in case I need to call?'], ['A', 'It\'s 2381 4460.']
  ], qs: [
    { q: 'Surname', a: ['chow'] }, { q: 'Date of birth: 9th of ______ 1999', a: ['july'] },
    { q: 'New appointment day', a: ['friday'] }, { q: 'New appointment time', a: ['9:15', '9.15', '0915'] },
    { q: 'Doctor\'s name: Dr ______', a: ['patel'] }, { q: 'Problem: pain and swelling in the ______', a: ['knee'] },
    { q: 'Bring the previous ______', a: ['x-ray', 'xray', 'x ray'] }, { q: 'Nearest MTR exit', a: ['b2'] }
  ] });

  L.push({ id: 'l-museum', title: 'Museum tour information', zh: '博物館導賞介紹', part: 'Section 2 筆記', lines: [
    ['A', 'Welcome to the City Museum of Medical History. The building opened in 1906 as a bacteriology institute.'],
    ['A', 'The tour today will last about 45 minutes, and we\'ll visit three galleries.'],
    ['A', 'We start in the Plague Gallery, which explains how the city fought the outbreak of 1894.'],
    ['A', 'Next is the Traditional Chinese Medicine room, where you can see over 200 herbal specimens.'],
    ['A', 'Finally, we\'ll visit the Nursing Gallery, which displays uniforms from the 1920s to today.'],
    ['A', 'Please do not touch the exhibits, and photography without flash is allowed.'],
    ['A', 'The gift shop is on the ground floor and closes at 5 p.m.'],
    ['A', 'Students with a valid card can enter for half price, and entry is free on Wednesdays.']
  ], qs: [
    { q: 'Year the building opened', a: ['1906'] }, { q: 'Length of the tour (minutes)', a: ['45', 'forty-five'] },
    { q: 'First gallery: the ______ Gallery', a: ['plague'] }, { q: 'Number of herbal specimens: over ______', a: ['200'] },
    { q: 'The Nursing Gallery shows uniforms from the ______ to today', a: ['1920s'] }, { q: 'Photography is allowed without ______', a: ['flash'] },
    { q: 'Gift shop closing time', a: ['5', '5pm', '5 p.m.', '5:00'] }, { q: 'Day with free entry', a: ['wednesday', 'wednesdays'] }
  ] });

  L.push({ id: 'l-placement', title: 'Discussing a clinical placement', zh: '討論臨床實習', part: 'Section 3 對話', lines: [
    ['A', 'Hi Jason, how was your first week on the paediatric placement?'], ['B', 'Busy! The ward has 28 beds, and most patients are under five.'],
    ['A', 'What did you find most difficult?'], ['B', 'Calculating drug doses. Everything is by weight, so I always ask my mentor to double-check.'],
    ['A', 'That\'s sensible. What about communication?'], ['B', 'Talking to anxious parents was harder than I expected. I\'m learning to explain things simply.'],
    ['A', 'Our assignment is a reflective essay of 2,000 words, isn\'t it?'], ['B', 'Yes, using Gibbs\' reflective cycle. It\'s due at the end of the placement, in week six.'],
    ['A', 'Have you chosen your incident to reflect on?'], ['B', 'I think I\'ll write about a child who was scared of a blood test and how play helped.'],
    ['A', 'Great idea. Remember to keep it anonymous — no real names.']
  ], qs: [
    { q: 'Number of beds on the ward', a: ['28'] }, { q: 'Most patients are under ______', a: ['five', '5'] },
    { q: 'Drug doses are calculated by ______', a: ['weight'] }, { q: 'Hard to talk to anxious ______', a: ['parents'] },
    { q: 'Length of essay (words)', a: ['2000', '2,000'] }, { q: 'Reflective model: ______\'s cycle', a: ['gibbs'] },
    { q: 'Deadline: week ______', a: ['six', '6'] }, { q: 'What helped the scared child', a: ['play'] }
  ] });

  L.push({ id: 'l-lecture2', title: 'Lecture: the science of stress', zh: '講座：壓力嘅科學', part: 'Section 4 講座', lines: [
    ['A', 'Today\'s lecture looks at what happens in the body when we experience stress.'],
    ['A', 'The stress response begins in the brain, in an area called the hypothalamus.'],
    ['A', 'It activates the adrenal glands, which release adrenaline and cortisol.'],
    ['A', 'Adrenaline increases heart rate and blood pressure, preparing the body for "fight or flight".'],
    ['A', 'In the short term, this response is helpful, for example in an emergency.'],
    ['A', 'However, when stress is chronic, high cortisol levels can weaken the immune system and disturb sleep.'],
    ['A', 'Research with healthcare workers shows that night shifts and heavy workloads are major sources of chronic stress.'],
    ['A', 'Effective strategies include regular exercise, social support and techniques such as mindfulness, which reduced stress scores by about 30 percent in one study of nurses.']
  ], qs: [
    { q: 'The stress response begins in the ______', a: ['hypothalamus'] }, { q: 'The adrenal glands release adrenaline and ______', a: ['cortisol'] },
    { q: 'Adrenaline prepares the body for "fight or ______"', a: ['flight'] }, { q: 'Chronic stress can weaken the ______ system', a: ['immune'] },
    { q: 'Major sources of stress for healthcare workers: night shifts and heavy ______', a: ['workloads', 'workload'] },
    { q: 'Technique that reduced stress scores', a: ['mindfulness'] }, { q: 'Reduction in stress scores (percent)', a: ['30', 'thirty'] }
  ] });
})();
