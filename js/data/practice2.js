// IELTS 練習擴充：閱讀、聽力、文法、改寫（全部原創練習材料）
(function () {
  const R = NE.reading, L = NE.listening, G = NE.grammar, P = NE.paraphrase;

  R.push({ id: 'r-hosp-robots', title: 'Robots in the Hospital', zh: '醫院入面嘅機械人', mins: 18, paras: [
    'In hospitals across Asia and Europe, robots are no longer a futuristic idea. Small delivery robots now carry medicines, meals and laboratory samples along corridors, while larger machines help surgeons perform complex operations. Supporters argue that this technology can ease the pressure on overstretched staff, but critics warn that it may also change the nature of care itself.',
    'The most common hospital robots are not humanoid at all. Delivery robots look more like moving cabinets. They follow pre-programmed routes, use lifts by themselves and stop automatically if someone steps in front of them. One hospital in Singapore reported that its fleet of eight delivery robots saved nurses about 3,000 hours of walking in a single year — time that could be spent with patients instead.',
    'Surgical robots are more controversial. In robot-assisted surgery, the surgeon sits at a console and controls instruments through tiny incisions. Studies suggest that patients may lose less blood and go home earlier. However, the machines are extremely expensive, and some researchers note that the benefits over traditional keyhole surgery are smaller than manufacturers claim.',
    'A newer development is the social robot, designed to interact with patients. In some care homes, robots lead simple exercise sessions or remind residents to drink water. Early trials found that residents with dementia often enjoyed these interactions, and some became more talkative. Yet several ethicists question whether it is acceptable to offer machines as companions to lonely older people.',
    'Nurses themselves have mixed views. Many welcome robots that remove repetitive tasks, such as fetching supplies, but they are less comfortable with machines that monitor patients or record their conversations. Most agree on one point: technology should support human care, not replace it. As one nurse manager put it, "A robot can bring a cup of water, but it cannot hold a frightened patient\'s hand."'
  ], qs: [
    { t: 'tfng', q: 'Most hospital robots look like humans.', a: 'F', why: 'B 段：most common hospital robots are not humanoid at all → False。' },
    { t: 'tfng', q: 'Delivery robots can use lifts without help.', a: 'T', why: 'B 段：use lifts by themselves。' },
    { t: 'tfng', q: 'The Singapore hospital reduced its number of nurses after using robots.', a: 'NG', why: '文章只講節省走路時間，冇講減少護士人數 → Not Given。' },
    { t: 'tfng', q: 'Some researchers believe surgical robots are less beneficial than advertised.', a: 'T', why: 'C 段：benefits … are smaller than manufacturers claim。' },
    { t: 'gap', q: 'In robot-assisted surgery, the surgeon controls the instruments from a ______.', a: ['console'], why: 'C 段：the surgeon sits at a console。' },
    { t: 'gap', q: 'In care homes, social robots may remind residents to drink ______.', a: ['water'], why: 'D 段：remind residents to drink water。' },
    { t: 'mcq', q: 'What concern do ethicists raise about social robots?', c: ['They are too expensive', 'They may replace human companionship for lonely people', 'They break down often', 'They cannot speak clearly'], a: 1, why: 'D 段：question whether it is acceptable to offer machines as companions to lonely older people。' },
    { t: 'mcq', q: 'Which robot task are nurses MOST comfortable with?', c: ['Recording patients\' conversations', 'Monitoring patients', 'Fetching supplies', 'Making care decisions'], a: 2, why: 'E 段：welcome robots that remove repetitive tasks, such as fetching supplies。' },
  ] });

  R.push({ id: 'r-urban-green', title: 'Green Spaces and City Health', zh: '城市綠化同健康', mins: 18, paras: [
    'As more of the world\'s population moves into cities, planners are paying closer attention to the health value of parks, trees and other green spaces. What was once seen mainly as decoration is now increasingly viewed as part of a city\'s public health infrastructure.',
    'The physical benefits are well documented. People who live within walking distance of a park are more likely to exercise regularly, and trees can lower street temperatures by several degrees during hot summers. In dense cities such as Hong Kong, where summer heat is intensified by concrete and traffic, this cooling effect may reduce heat-related hospital admissions among older residents.',
    'The psychological effects are harder to measure but appear to be significant. In one study, office workers who took a twenty-minute walk in a park reported lower stress levels than those who walked along busy streets. Other research has linked a view of trees from a hospital window with faster recovery after surgery, although the number of patients in that study was small.',
    'However, green space is not shared equally. In many cities, wealthier neighbourhoods have more parks and better-maintained trees, while low-income areas are left with little greenery. Researchers call this "green inequality" and warn that it may widen existing health gaps between rich and poor.',
    'Solutions do not always require large parks. Rooftop gardens, small "pocket parks" between buildings and tree-lined streets can all add greenery where land is limited. Some cities now set targets for the percentage of residents who should live within a ten-minute walk of a green area. The challenge, experts say, is to treat greenery not as a luxury but as a basic part of a healthy city.'
  ], qs: [
    { t: 'tfng', q: 'Green spaces were always considered important for public health.', a: 'F', why: 'A 段：was once seen mainly as decoration → 以前唔係咁睇。' },
    { t: 'tfng', q: 'Trees can reduce street temperatures in summer.', a: 'T', why: 'B 段：trees can lower street temperatures by several degrees。' },
    { t: 'tfng', q: 'The hospital window study involved a large number of patients.', a: 'F', why: 'C 段：the number of patients in that study was small。' },
    { t: 'tfng', q: 'Hong Kong has more parks per person than any other city.', a: 'NG', why: '文章冇比較 → Not Given。' },
    { t: 'gap', q: 'Unequal access to parks between rich and poor areas is called "green ______".', a: ['inequality'], why: 'D 段：Researchers call this "green inequality"。' },
    { t: 'gap', q: 'Small parks between buildings are known as "______ parks".', a: ['pocket'], why: 'E 段：small "pocket parks"。' },
    { t: 'mcq', q: 'In the office-worker study, who reported lower stress?', c: ['Workers who walked along busy streets', 'Workers who walked in a park', 'Workers who stayed at their desks', 'Workers who went home early'], a: 1, why: 'C 段：a twenty-minute walk in a park reported lower stress levels。' },
    { t: 'mcq', q: 'What is the main message of paragraph E?', c: ['Cities should build only large parks', 'Greenery is a luxury', 'Small green areas can help when land is limited', 'Rooftop gardens are dangerous'], a: 2, why: 'E 段講細型綠化都可以增加綠化。' },
  ] });

  R.push({ id: 'r-bilingual', title: 'The Bilingual Brain', zh: '雙語腦袋', mins: 18, paras: [
    'For much of the twentieth century, many parents and teachers believed that learning two languages at once would confuse young children. Today, that view has largely reversed. A growing body of research suggests that speaking two languages may bring advantages that go beyond communication.',
    'One frequently cited benefit concerns "executive function" — the mental skills we use to plan, focus and switch between tasks. Because bilingual people must constantly choose one language while suppressing the other, some scientists argue that their brains get extra practice in controlling attention. In laboratory tasks, bilingual children have sometimes performed better at ignoring distractions.',
    'Not all studies agree, however. Several large studies published in the last decade found little or no difference between bilingual and monolingual adults on tests of executive function. Critics suggest that earlier positive results may have been influenced by small samples or by differences in family income and education rather than language itself.',
    'The evidence for later life is also debated. Some hospital-based studies found that bilingual patients developed symptoms of dementia several years later than monolingual patients with similar brain changes. Other researchers have not been able to repeat these findings, and the question remains open.',
    'What is less controversial is the social and economic value of speaking more than one language. Bilingual workers may have access to a wider range of jobs, and in healthcare, staff who can speak a patient\'s language can reduce misunderstandings and improve trust. Whatever the effect on the brain, most experts agree that learning another language is a worthwhile investment.'
  ], qs: [
    { t: 'tfng', q: 'In the past, many people thought learning two languages would confuse children.', a: 'T', why: 'A 段：believed that learning two languages at once would confuse young children。' },
    { t: 'tfng', q: 'All studies show that bilingual adults have better executive function.', a: 'F', why: 'C 段：several large studies found little or no difference。' },
    { t: 'tfng', q: 'Bilingual people never develop dementia.', a: 'F', why: 'D 段只講可能遲幾年出現徵狀，唔係唔會有 → False。' },
    { t: 'tfng', q: 'Bilingual nurses earn higher salaries than other nurses.', a: 'NG', why: '文章冇講人工 → Not Given。' },
    { t: 'gap', q: 'The mental skills used to plan, focus and switch tasks are called executive ______.', a: ['function'], why: 'B 段："executive function"。' },
    { t: 'gap', q: 'Critics say earlier results may have been affected by small ______.', a: ['samples'], why: 'C 段：influenced by small samples。' },
    { t: 'mcq', q: 'What does paragraph E say is less controversial?', c: ['Bilingualism prevents dementia', 'The social and economic value of being bilingual', 'Bilingual children have better memory', 'Monolingual adults focus better'], a: 1, why: 'E 段：What is less controversial is the social and economic value。' },
  ] });

  R.push({ id: 'r-food-waste', title: 'The Problem of Food Waste', zh: '廚餘問題', mins: 18, paras: [
    'Every day, Hong Kong sends more than 3,000 tonnes of food waste to its landfills. Globally, it is estimated that around one third of all food produced is lost or wasted. At the same time, millions of people do not have enough to eat. This contradiction has made food waste one of the most discussed environmental and social issues of recent years.',
    'Waste happens at every stage of the food chain. In poorer countries, much food is lost before it reaches consumers, because of poor storage or transport. In wealthier places, the largest share is wasted by households, restaurants and supermarkets. Buying too much, misunderstanding date labels and rejecting fruit and vegetables that look imperfect are common causes.',
    'Food waste has environmental costs that are often overlooked. When food rots in landfills, it produces methane, a greenhouse gas far more powerful than carbon dioxide in the short term. In addition, the water, land and energy used to grow and transport the food are wasted too.',
    'A number of solutions have been tried. Some supermarkets now sell "ugly" vegetables at lower prices, and food banks collect surplus food to give to people in need. Several cities charge households for waste by weight, encouraging them to throw away less. In Hong Kong, facilities have been built to turn food waste into energy and compost.',
    'Experts argue that the most effective changes are often the simplest: planning meals, buying only what is needed and understanding the difference between "use by" and "best before" dates. As one researcher noted, reducing waste at home does not require new technology — only new habits.'
  ], qs: [
    { t: 'tfng', q: 'About a third of food produced worldwide is lost or wasted.', a: 'T', why: 'A 段：around one third of all food produced is lost or wasted。' },
    { t: 'tfng', q: 'In poorer countries, most food is wasted by restaurants.', a: 'F', why: 'B 段：in poorer countries much food is lost before it reaches consumers。' },
    { t: 'tfng', q: 'Methane is less powerful than carbon dioxide.', a: 'F', why: 'C 段：far more powerful than carbon dioxide in the short term。' },
    { t: 'tfng', q: 'Hong Kong charges households for waste by weight.', a: 'NG', why: 'D 段講「several cities」，冇講香港 → Not Given。' },
    { t: 'gap', q: 'Organisations that collect surplus food for people in need are called food ______.', a: ['banks'], why: 'D 段：food banks collect surplus food。' },
    { t: 'gap', q: 'Rotting food in landfills produces a gas called ______.', a: ['methane'], why: 'C 段：it produces methane。' },
    { t: 'mcq', q: 'According to paragraph E, what is most needed to reduce household waste?', c: ['New technology', 'Higher food prices', 'New habits', 'More landfills'], a: 2, why: 'E 段：does not require new technology — only new habits。' },
  ] });

  L.push({ id: 'l-gym', title: 'Joining a sports centre', zh: '報名運動中心', part: 'Section 1 填表', lines: [
    ['A', 'Good afternoon, Harbour Sports Centre. How can I help you?'], ['B', 'Hi, I\'d like to become a member, please.'],
    ['A', 'Certainly. Can I have your full name?'], ['B', 'Yes, it\'s Karen Leung. That\'s L-E-U-N-G.'],
    ['A', 'Thank you. And your address?'], ['B', 'Flat 12B, 48 Cheung Sha Wan Road.'],
    ['A', 'What type of membership would you like? We have off-peak, which is weekdays before 5 p.m., or full membership.'],
    ['B', 'I work shifts, so off-peak would suit me. How much is that?'], ['A', 'Off-peak is 280 dollars a month. Full membership is 450.'],
    ['B', 'Off-peak, please. Is there a joining fee?'], ['A', 'Normally it\'s 200 dollars, but this month it\'s free.'],
    ['B', 'Great. Which classes do you have?'], ['A', 'Yoga on Tuesday mornings and swimming lessons on Thursday at 10.'],
    ['B', 'I\'d like to try yoga. Do I need to bring anything?'], ['A', 'Just a towel and a water bottle. Mats are provided.'],
    ['B', 'Perfect. Can I start next week?'], ['A', 'Yes. Your first visit will be on Monday the 3rd. Please bring your ID card.']
  ], qs: [
    { q: 'Surname', a: ['leung'] }, { q: 'Street address: 48 ______ Road', a: ['cheung sha wan'] },
    { q: 'Type of membership', a: ['off-peak', 'off peak', 'offpeak'] }, { q: 'Monthly fee ($)', a: ['280'] },
    { q: 'Joining fee this month ($)', a: ['0', 'free', 'nothing'] }, { q: 'Class chosen', a: ['yoga'] },
    { q: 'Bring a towel and a ______', a: ['water bottle', 'bottle of water'] }, { q: 'Bring this on the first visit', a: ['id card', 'id', 'identity card'] }
  ] });

  L.push({ id: 'l-volunteer', title: 'Hospital volunteer briefing', zh: '醫院義工簡介', part: 'Section 2 筆記', lines: [
    ['A', 'Welcome, everyone, to the volunteer programme at Riverside Hospital. I\'d like to explain a few important points.'],
    ['A', 'First, all volunteers must complete a two-hour training session before starting. This includes infection control and fire safety.'],
    ['A', 'Volunteers work in shifts of three hours, and we ask you to commit to at least one shift per week for six months.'],
    ['A', 'Your main duties will be guiding visitors, helping patients with meals and reading to older patients on the rehabilitation ward.'],
    ['A', 'Please note that volunteers must never give any medicine or help patients to walk without a nurse present.'],
    ['A', 'You\'ll receive a blue uniform and a name badge. Please wear them at all times on duty.'],
    ['A', 'When you arrive, sign in at the volunteer office on the ground floor, next to the main pharmacy.'],
    ['A', 'If you are unwell, especially with a cough or fever, please do not come in. Call the volunteer coordinator, Ms Ho, instead.'],
    ['A', 'Finally, we hold a thank-you dinner for all volunteers every December.']
  ], qs: [
    { q: 'Length of training session (hours)', a: ['2', 'two'] }, { q: 'Length of each shift (hours)', a: ['3', 'three'] },
    { q: 'Minimum commitment (months)', a: ['6', 'six'] }, { q: 'Volunteers read to patients on the ______ ward', a: ['rehabilitation', 'rehab'] },
    { q: 'Colour of uniform', a: ['blue'] }, { q: 'Volunteer office is next to the main ______', a: ['pharmacy'] },
    { q: 'Name of volunteer coordinator: Ms ______', a: ['ho'] }, { q: 'Month of the thank-you dinner', a: ['december'] }
  ] });

  L.push({ id: 'l-tutorial', title: 'Student project discussion', zh: '學生討論功課', part: 'Section 3 對話', lines: [
    ['A', 'So, Mia, have you decided on our topic for the health promotion project?'], ['B', 'I was thinking about sleep among university students. Lots of our classmates say they only sleep five or six hours.'],
    ['A', 'That\'s a good idea. How should we collect data?'], ['B', 'An online questionnaire would be quickest. We could aim for 150 responses.'],
    ['A', 'Should we also do interviews?'], ['B', 'Maybe ten short interviews. That would give us some quotes for the presentation.'],
    ['A', 'What about the deadline? The tutor said the report is due on the 14th of April.'], ['B', 'Then let\'s finish the questionnaire by the end of March.'],
    ['A', 'I can design the questions if you analyse the results.'], ['B', 'Deal. And for the presentation, I think we should suggest a "digital sunset" — no phones one hour before bed.'],
    ['A', 'Good, and maybe recommend shorter naps — no more than twenty minutes.']
  ], qs: [
    { q: 'Topic of the project: sleep among ______ students', a: ['university'] }, { q: 'Target number of questionnaire responses', a: ['150'] },
    { q: 'Number of interviews', a: ['10', 'ten'] }, { q: 'Report deadline: 14th of ______', a: ['april'] },
    { q: 'Questionnaire to be finished by the end of ______', a: ['march'] }, { q: 'Name of suggestion: digital ______', a: ['sunset'] },
    { q: 'Maximum nap length (minutes)', a: ['20', 'twenty'] }
  ] });

  L.push({ id: 'l-lecture', title: 'Lecture: hand hygiene history', zh: '講座：洗手嘅歷史', part: 'Section 4 講座', lines: [
    ['A', 'Today I\'d like to talk about the history of hand hygiene in hospitals.'],
    ['A', 'In the 1840s, a doctor in Vienna named Ignaz Semmelweis noticed that many more mothers died after childbirth in one clinic than in another.'],
    ['A', 'He found that doctors in the first clinic often came directly from performing autopsies.'],
    ['A', 'Semmelweis introduced hand washing with a chlorine solution, and the death rate fell dramatically.'],
    ['A', 'Sadly, many doctors at the time rejected his ideas, partly because the germ theory of disease had not yet been accepted.'],
    ['A', 'Later, Florence Nightingale also stressed cleanliness, ventilation and good nutrition in military hospitals.'],
    ['A', 'Today, the World Health Organization promotes the "five moments" for hand hygiene, and alcohol-based hand rub is the main method in most hospitals.'],
    ['A', 'However, studies still show that hand hygiene compliance is often below seventy percent, so education and reminders remain essential.']
  ], qs: [
    { q: 'Decade when Semmelweis made his observation: the 18______s', a: ['40', '1840s', '40s'] }, { q: 'City where Semmelweis worked', a: ['vienna'] },
    { q: 'Doctors often came directly from performing ______', a: ['autopsies', 'autopsy'] }, { q: 'Hand washing used a ______ solution', a: ['chlorine'] },
    { q: 'The ______ theory of disease had not yet been accepted', a: ['germ'] }, { q: 'Nightingale stressed cleanliness, ventilation and good ______', a: ['nutrition'] },
    { q: 'Hand hygiene compliance is often below ______ percent', a: ['70', 'seventy'] }
  ] });

  const g = (cat, q, c, a, why) => G.push({ cat, q, c, a, why });
  g('art', 'I visited ___ University of Hong Kong last week.', ['a', 'an', 'the', '—'], 2, '有特定名稱嘅大學用 the：the University of Hong Kong。');
  g('art', '___ honesty is important in nursing.', ['A', 'An', 'The', '—'], 3, '抽象名詞泛指時唔使冠詞：Honesty is important。');
  g('art', 'She plays ___ piano very well.', ['a', 'an', 'the', '—'], 2, '樂器前面用 the：play the piano。');
  g('art', 'He was admitted to ___ hospital yesterday.', ['a', 'an', 'the', '—'], 3, '英式英文：go to hospital / be admitted to hospital（以病人身份）唔使冠詞。');
  g('art', 'It was ___ unique experience.', ['a', 'an', 'the', '—'], 0, 'unique 讀 /juː/ 開頭（輔音音），所以用 a。');
  g('tense', 'Since 2020, the number of online shoppers ___ dramatically.', ['increases', 'increased', 'has increased', 'is increasing'], 2, 'Since + 時間點 用現在完成式。');
  g('tense', 'In 2010, only 30% of students ___ a smartphone.', ['have', 'had', 'have had', 'are having'], 1, '過去特定年份用過去式（Task 1 常用）。');
  g('tense', 'By 2050, the population ___ by 20%.', ['will increase', 'will have increased', 'increased', 'has increased'], 1, 'By + 將來時間 用將來完成式：will have increased。');
  g('tense', 'I ___ as a nurse for three years now.', ['work', 'worked', 'have been working', 'am work'], 2, '由過去持續到而家，用現在完成進行式。');
  g('tense', 'While I ___ the medication, the alarm rang.', ['prepared', 'was preparing', 'have prepared', 'prepare'], 1, '進行中嘅動作被打斷：過去進行式 + 過去式。');
  g('sva', 'The number of nurses ___ increasing.', ['is', 'are', 'were', 'have'], 0, 'The number of + 複數名詞 → 單數動詞；A number of → 複數。');
  g('sva', 'A number of patients ___ waiting outside.', ['is', 'are', 'was', 'has'], 1, 'A number of（好多）→ 複數動詞。');
  g('sva', 'Neither the doctor nor the nurses ___ aware of the allergy.', ['was', 'were', 'is', 'has'], 1, 'Neither … nor … 動詞跟最近嘅主語（nurses → were）。');
  g('sva', 'Each of the students ___ a laptop.', ['have', 'has', 'are having', 'were'], 1, 'Each of + 複數 → 單數動詞 has。');
  g('sva', 'The data ___ that sleep affects performance.', ['shows', 'show', 'showing', 'is show'], 1, '學術寫作 data 通常當複數：the data show。（the data shows 亦逐漸被接受）');
  g('count', 'We need more ___ about the new policy.', ['informations', 'information', 'an information', 'many information'], 1, 'information 係不可數名詞，冇複數。');
  g('count', 'She gave me some useful ___.', ['advices', 'advice', 'an advice', 'many advice'], 1, 'advice 不可數：some advice / a piece of advice。');
  g('count', 'There is too ___ traffic in the city centre.', ['many', 'much', 'few', 'a few'], 1, 'traffic 不可數，用 much。');
  g('count', 'Only a ___ students passed the test.', ['little', 'few', 'much', 'less'], 1, 'students 可數 → a few；不可數先用 a little。');
  g('count', 'There were ___ accidents this year than last year.', ['less', 'fewer', 'little', 'few'], 1, '可數名詞比較用 fewer；不可數用 less。');
  g('prep', 'The rate rose ___ 10% to 15%.', ['at', 'from', 'by', 'in'], 1, 'from X to Y：由 X 升到 Y。');
  g('prep', 'Prices increased ___ 5% (the size of the change).', ['to', 'by', 'at', 'of'], 1, 'by 表示變化幅度；to 表示最後數值。');
  g('prep', 'She is responsible ___ ten patients.', ['of', 'for', 'to', 'with'], 1, 'be responsible for。');
  g('prep', 'There has been a sharp rise ___ obesity.', ['of', 'in', 'on', 'at'], 1, 'a rise / increase / fall in + 名詞。');
  g('prep', 'Many people are worried ___ climate change.', ['for', 'about', 'on', 'at'], 1, 'be worried about。');
  g('comp', 'Living in the city is ___ than living in the countryside.', ['more expensive', 'expensiver', 'most expensive', 'more expensiver'], 0, '多音節形容詞用 more + adj。');
  g('comp', 'This is ___ hospital in the region.', ['the larger', 'the largest', 'larger', 'most large'], 1, '三個或以上比較用最高級：the largest。');
  g('comp', 'The figure was twice ___ high as in 2000.', ['as', 'than', 'so', 'more'], 0, 'twice as … as：係……嘅兩倍。');
  g('comp', 'The ___ you practise, the more fluent you become.', ['much', 'more', 'most', 'many'], 1, 'The more …, the more …：越……越……。');
  g('pass', 'The results ___ next week.', ['will announce', 'will be announced', 'announced', 'are announcing'], 1, '結果係被公佈 → 被動式 will be announced。');
  g('pass', 'The patient ___ to ICU last night.', ['transferred', 'was transferred', 'has transferred', 'transfers'], 1, '病人被轉送 → was transferred。');
  g('pass', 'It ___ that the policy will reduce waste.', ['believes', 'is believed', 'believed', 'has believe'], 1, 'It is believed / said / thought that …：學術寫作常用被動結構。');
  g('pass', 'Smoking should ___ in all public places.', ['ban', 'be banned', 'banned', 'banning'], 1, '情態動詞 + be + 過去分詞：should be banned。');
  g('word', 'Exercise has a positive ___ on mental health.', ['affect', 'effect', 'effective', 'affection'], 1, 'effect 係名詞（影響），affect 係動詞（影響某樣嘢）。');
  g('word', 'The new treatment was very ___.', ['effect', 'effective', 'effectively', 'efficiency'], 1, '形容詞 effective（有效）。');
  g('word', 'There is a lack of ___ between departments.', ['communicate', 'communication', 'communicative', 'communicating'], 1, 'a lack of + 名詞：communication。');
  g('word', 'The government should take ___ to reduce pollution.', ['action', 'act', 'active', 'actively'], 0, 'take action（採取行動）。');
  g('word', 'Prices rose ___ between 2010 and 2020.', ['significant', 'significantly', 'significance', 'signify'], 1, '修飾動詞 rose 要用副詞 significantly。');
  g('word', 'Young people are increasingly ___ on their phones.', ['depend', 'dependent', 'dependence', 'dependently'], 1, 'be dependent on（依賴）。');
  g('word', 'The ___ of the new hospital will take three years.', ['construct', 'construction', 'constructive', 'constructed'], 1, 'the + 名詞 construction。');

  const p = (src, m, k, tip) => P.push({ src, m, k, tip });
  p('The government should spend more money on public transport.', ['More public funding should be allocated to public transport.', 'Public transport deserves greater investment from the authorities.'], [['spend more money on', 'allocate more funding to / invest more in'], ['the government', 'the authorities']], '用 allocate funding to / invest in 代替 spend money on。');
  p('Children today spend too much time on their phones.', ['Young people nowadays devote an excessive amount of time to their smartphones.', 'Excessive smartphone use is common among today\'s children.'], [['children today', 'young people nowadays'], ['too much', 'an excessive amount of']], '轉成名詞片語做主語（Excessive smartphone use…）係高分技巧。');
  p('Many people believe that exercise is good for mental health.', ['It is widely believed that physical activity benefits psychological well-being.', 'Exercise is commonly thought to have a positive effect on mental health.'], [['many people believe', 'it is widely believed'], ['good for', 'benefits / has a positive effect on']], 'It is widely believed that … 係好用嘅被動開頭。');
  p('House prices in Hong Kong are very high.', ['Property in Hong Kong is extremely expensive.', 'Hong Kong has some of the highest housing costs in the world.'], [['house prices', 'property / housing costs'], ['very high', 'extremely expensive']], '換名詞同形容詞，或者用最高級改句式。');
  p('Pollution causes many health problems.', ['Pollution is responsible for a wide range of health issues.', 'Many health problems can be attributed to pollution.'], [['causes', 'is responsible for / can be attributed to'], ['many', 'a wide range of']], 'X causes Y = Y can be attributed to X。');
  p('The number of tourists rose sharply in 2019.', ['There was a dramatic increase in tourist numbers in 2019.', 'Tourist arrivals increased significantly in 2019.'], [['rose sharply', 'a dramatic increase / increased significantly'], ['number of tourists', 'tourist numbers / tourist arrivals']], 'Task 1 要轉換動詞同名詞形式：rose sharply ↔ a sharp rise。');
  p('Nurses often work long hours.', ['Long working hours are common in the nursing profession.', 'It is not unusual for nurses to work extended shifts.'], [['often', 'it is not unusual / common'], ['long hours', 'extended shifts / long working hours']], 'It is not unusual for … to … 係地道嘅改寫。');
  p('Technology has changed the way people communicate.', ['The way people interact has been transformed by technology.', 'Technological advances have revolutionised communication.'], [['changed', 'transformed / revolutionised'], ['communicate', 'interact / communication']], '主動轉被動，或者用更強嘅動詞。');
  p('Older people often feel lonely.', ['Loneliness is a common problem among the elderly.', 'Senior citizens frequently experience social isolation.'], [['older people', 'the elderly / senior citizens'], ['feel lonely', 'experience loneliness / social isolation']], '將形容詞（lonely）轉做名詞（loneliness）。');
  p('Students should learn practical skills at school.', ['Schools ought to equip students with practical skills.', 'Practical skills should form part of the school curriculum.'], [['should learn', 'ought to be equipped with'], ['at school', 'in the school curriculum']], 'equip somebody with something 係好用嘅學術動詞。');
  p('It is difficult for young people to find jobs.', ['Young people face considerable difficulty in securing employment.', 'Finding work has become challenging for the younger generation.'], [['difficult', 'face difficulty / challenging'], ['find jobs', 'secure employment / find work']], 'find a job → secure employment。');
  p('Fast food is bad for health.', ['Fast food has a detrimental effect on health.', 'Consuming fast food can harm people\'s well-being.'], [['bad for', 'has a detrimental effect on / harm'], ['health', 'well-being']], 'detrimental（有害）係高分字。');
  p('More people are working from home.', ['Remote working is becoming increasingly common.', 'A growing proportion of employees now work from home.'], [['more people', 'a growing proportion of employees'], ['working from home', 'remote working']], 'is becoming increasingly common 表示趨勢。');
  p('Recycling helps to protect the environment.', ['Recycling plays a key role in environmental protection.', 'The environment benefits from recycling.'], [['helps to protect', 'plays a key role in protecting'], ['environment', 'environmental protection']], 'play a key role in + 名詞／動名詞。');
  p('The hospital is too crowded.', ['The hospital is severely overcrowded.', 'There are too many patients for the hospital\'s capacity.'], [['too crowded', 'overcrowded'], ['hospital', 'the hospital\'s capacity']], '用 over- 前綴字：overcrowded, overworked。');
  p('People should eat less sugar.', ['Sugar consumption should be reduced.', 'People are advised to cut down on sugar.'], [['eat less', 'reduce consumption / cut down on'], ['people should', 'people are advised to']], '動詞轉名詞：eat → consumption。');
  p('Many young people want to study abroad.', ['Studying overseas is popular among young people.', 'An increasing number of students aspire to study abroad.'], [['want to', 'aspire to'], ['abroad', 'overseas']], 'aspire to（渴望）比 want to 更學術。');
  p('The new law reduced crime.', ['The introduction of the new legislation led to a fall in crime.', 'Crime rates declined following the new law.'], [['reduced', 'led to a fall in / declined'], ['law', 'legislation']], 'led to + 結果 係好用嘅因果表達。');
  p('Learning English is important for nurses.', ['English proficiency is essential in the nursing profession.', 'It is vital for nurses to be competent in English.'], [['important', 'essential / vital'], ['learning English', 'English proficiency']], 'It is vital for … to … 結構。');
  p('Many shops have closed because of online shopping.', ['The rise of e-commerce has forced many shops to close.', 'Numerous stores have shut down as a result of online shopping.'], [['because of', 'as a result of'], ['closed', 'shut down / been forced to close'], ['online shopping', 'e-commerce']], 'as a result of / owing to 代替 because of。');
})();
