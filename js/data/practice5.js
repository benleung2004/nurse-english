// IELTS 練習擴充（五）：閱讀 3 篇、聽力 3 段（原創練習材料）
(function () {
  const R = NE.reading, L = NE.listening;

  R.push({ id: 'r-microplastics', title: 'Microplastics in Our Bodies', zh: '身體入面嘅微塑膠', mins: 18, paras: [
    'Microplastics are tiny pieces of plastic smaller than five millimetres. They come from larger plastic items that break down over time, as well as from synthetic clothing, car tyres and some cosmetics. Once thought to be mainly an ocean problem, they have now been found almost everywhere, from mountain snow to drinking water.',
    'In recent years, scientists have detected microplastics in human blood, lungs and even placentas. People are exposed mainly by eating and breathing: seafood, salt and bottled water can contain particles, and indoor air carries fibres from carpets and clothing. One estimate suggests that an average person may swallow tens of thousands of particles each year.',
    'What this means for health is still unclear. Laboratory studies show that very small particles can enter cells and may cause inflammation, but these experiments often use higher doses than people normally encounter. Researchers stress that it is too early to say whether everyday exposure causes disease.',
    'Measuring microplastics is itself a challenge. Particles vary in size, shape and chemical make-up, and samples are easily contaminated by plastic equipment in laboratories. As a result, different studies report very different numbers, making comparisons difficult.',
    'Despite the uncertainty, many experts recommend reducing exposure where possible: choosing tap water over bottled water when it is safe, avoiding heating food in plastic containers, and ventilating homes. On a larger scale, they argue that the most effective solution is to produce and throw away less plastic in the first place.'
  ], qs: [
    { t: 'tfng', q: 'Microplastics are larger than five millimetres.', a: 'F', why: 'A 段：smaller than five millimetres。' },
    { t: 'tfng', q: 'Microplastics have been found in human placentas.', a: 'T', why: 'B 段：even placentas。' },
    { t: 'tfng', q: 'Scientists have proven that microplastics cause cancer.', a: 'F', why: 'C 段：too early to say whether everyday exposure causes disease。' },
    { t: 'tfng', q: 'Bottled water contains more microplastics in Hong Kong than elsewhere.', a: 'NG', why: '文章冇講香港 → Not Given。' },
    { t: 'gap', q: 'Different studies report different numbers because samples are easily ______.', a: ['contaminated'], why: 'D 段：samples are easily contaminated。' },
    { t: 'gap', q: 'Experts suggest avoiding heating food in plastic ______.', a: ['containers'], why: 'E 段：heating food in plastic containers。' },
    { t: 'mcq', q: 'What do experts say is the most effective solution?', c: ['Better laboratory tests', 'Producing and throwing away less plastic', 'Drinking only bottled water', 'Eating more seafood'], a: 1, why: 'E 段：produce and throw away less plastic。' },
  ] });

  R.push({ id: 'r-volunteering', title: 'The Benefits of Volunteering', zh: '做義工嘅好處', mins: 18, paras: [
    'Volunteering is usually seen as a way to help others, but a growing body of research suggests that volunteers themselves may benefit just as much. Studies in several countries have linked regular volunteering with better mental health, stronger social networks and even longer life.',
    'One explanation is the sense of purpose that volunteering provides. Retired people in particular may lose the structure and identity that work once gave them. Helping at a hospital, school or community centre can restore a feeling of being useful, which is closely linked to well-being.',
    'Volunteering also builds social connections. Loneliness is increasingly recognised as a health risk, comparable to smoking or physical inactivity. By meeting people with shared interests, volunteers expand their networks, and these relationships often continue outside the volunteering role.',
    'For young people, volunteering can develop skills that are valued by employers, such as teamwork, communication and problem-solving. Some universities consider volunteering experience when selecting students for competitive programmes like nursing and medicine.',
    'However, researchers caution that not all volunteering is equally beneficial. People who volunteer mainly to help others tend to gain more than those who do it only to improve their CV. In addition, volunteering too many hours can lead to stress, so a moderate commitment of a few hours a week appears to be ideal.'
  ], qs: [
    { t: 'tfng', q: 'Research suggests volunteers may benefit as much as the people they help.', a: 'T', why: 'A 段：volunteers themselves may benefit just as much。' },
    { t: 'tfng', q: 'Loneliness is considered harmless to health.', a: 'F', why: 'C 段：loneliness is increasingly recognised as a health risk。' },
    { t: 'tfng', q: 'All universities require volunteering experience for nursing.', a: 'F', why: 'D 段：some universities consider … 唔係全部要求。' },
    { t: 'tfng', q: 'Hong Kong has the highest volunteering rate in Asia.', a: 'NG', why: '文章冇講 → Not Given。' },
    { t: 'gap', q: 'Volunteering gives retired people a sense of ______.', a: ['purpose'], why: 'B 段：the sense of purpose。' },
    { t: 'gap', q: 'Volunteering too many hours can lead to ______.', a: ['stress'], why: 'E 段：can lead to stress。' },
    { t: 'mcq', q: 'Who gains most from volunteering, according to paragraph E?', c: ['People who want to improve their CV', 'People who volunteer mainly to help others', 'People who volunteer every day', 'People who are paid'], a: 1, why: 'E 段：People who volunteer mainly to help others tend to gain more。' },
  ] });

  R.push({ id: 'r-telehealth', title: 'Telehealth After the Pandemic', zh: '疫情後嘅遙距醫療', mins: 18, paras: [
    'Before 2020, video consultations were a small part of healthcare in most places. During the pandemic, however, they became essential almost overnight, as clinics tried to reduce face-to-face contact. Now that restrictions have ended, health systems are asking which parts of telehealth are worth keeping.',
    'Patients often value the convenience. People with long-term conditions can attend follow-up appointments without taking a day off work or travelling across the city. For older patients with limited mobility, a short video call can replace a tiring journey to hospital.',
    'Clinicians report that telehealth works well for some tasks but not others. Reviewing test results, adjusting medication and providing mental health support can often be done remotely. In contrast, many physical examinations, such as listening to the chest or examining a child\'s ears, still require an in-person visit.',
    'There are also concerns about equity. Patients without reliable internet access, private space at home or digital skills may be left behind. Some studies have found that older adults and people from low-income households are less likely to use video consultations, even when they are offered.',
    'Most experts now favour a "hybrid" model, in which patients and clinicians choose the format that best suits each appointment. Nurses are expected to play a growing role, for example by running remote monitoring programmes for patients with heart failure or diabetes and helping patients learn to use the technology.'
  ], qs: [
    { t: 'tfng', q: 'Video consultations were common in most places before 2020.', a: 'F', why: 'A 段：a small part of healthcare in most places。' },
    { t: 'tfng', q: 'Telehealth can help patients avoid taking a day off work.', a: 'T', why: 'B 段：without taking a day off work。' },
    { t: 'tfng', q: 'All physical examinations can be done by video.', a: 'F', why: 'C 段：many physical examinations still require an in-person visit。' },
    { t: 'tfng', q: 'Hospitals in Hong Kong have stopped all video consultations.', a: 'NG', why: '文章冇講香港 → Not Given。' },
    { t: 'gap', q: 'Most experts favour a "______" model combining video and in-person care.', a: ['hybrid'], why: 'E 段："hybrid" model。' },
    { t: 'gap', q: 'Nurses may run remote ______ programmes for heart failure patients.', a: ['monitoring'], why: 'E 段：remote monitoring programmes。' },
    { t: 'mcq', q: 'Which concern is raised in paragraph D?', c: ['Cost to hospitals', 'Some groups may be left behind', 'Doctors dislike computers', 'Video calls are too long'], a: 1, why: 'D 段：concerns about equity … may be left behind。' },
  ] });

  L.push({ id: 'l-library', title: 'Registering at a university library', zh: '大學圖書館登記', part: 'Section 1 填表', lines: [
    ['A', 'Hi, welcome to the Health Sciences Library. Are you registering for a card?'], ['B', 'Yes, I\'ve just started the part-time nursing degree.'],
    ['A', 'Great. What\'s your student number?'], ['B', 'It\'s 2 0 7 4 5 5 1 3.'],
    ['A', 'Thanks. And your email?'], ['B', 'It\'s my university email: s20745513 at the university domain.'],
    ['A', 'Part-time students can borrow up to eight books for 21 days.'], ['B', 'Can I renew them online?'],
    ['A', 'Yes, twice, unless someone has reserved the book.'], ['B', 'What are the opening hours?'],
    ['A', 'Monday to Friday, 8 a.m. to 10 p.m., and 9 to 5 on Saturdays. We\'re closed on Sundays.'],
    ['B', 'Is there a quiet study room?'], ['A', 'Yes, on the third floor. You can book group rooms on the second floor using the app.'],
    ['B', 'And how do I access journals from home?'], ['A', 'Log in through the library website with your student account.']
  ], qs: [
    { q: 'Student number', a: ['20745513'] }, { q: 'Maximum number of books', a: ['8', 'eight'] },
    { q: 'Loan period (days)', a: ['21', 'twenty-one'] }, { q: 'Number of online renewals', a: ['2', 'two', 'twice'] },
    { q: 'Weekday closing time', a: ['10', '10pm', '10 p.m.', '22:00'] }, { q: 'Day the library is closed', a: ['sunday', 'sundays'] },
    { q: 'Quiet study room floor', a: ['3', 'third', '3rd'] }, { q: 'Group rooms are booked using the ______', a: ['app'] }
  ] });

  L.push({ id: 'l-fair', title: 'Health fair announcement', zh: '健康展覽介紹', part: 'Section 2 筆記', lines: [
    ['A', 'Good morning, everyone, and welcome to the Community Health Fair.'],
    ['A', 'Free blood pressure and blood sugar checks are available at Booth 4, run by our nursing students.'],
    ['A', 'At 11 o\'clock, a dietitian will give a talk on healthy eating for families in the main hall.'],
    ['A', 'Children can join the hand-washing game at the yellow tent, and everyone who finishes gets a small prize.'],
    ['A', 'The flu vaccination station is next to the entrance. Please bring your ID card.'],
    ['A', 'If you would like to learn CPR, sessions start every 45 minutes in Room B.'],
    ['A', 'Lunch boxes are available from 12:30, and all packaging is recyclable.'],
    ['A', 'The fair closes at 4 p.m. Thank you for coming, and please fill in a feedback form on your way out.']
  ], qs: [
    { q: 'Booth number for blood pressure checks', a: ['4', 'four'] }, { q: 'Time of the dietitian\'s talk', a: ['11', '11:00', '11 am', '11 a.m.'] },
    { q: 'Children\'s game takes place at the ______ tent', a: ['yellow'] }, { q: 'Bring your ______ for the flu vaccine', a: ['id card', 'id', 'identity card'] },
    { q: 'CPR sessions start every ______ minutes', a: ['45', 'forty-five'] }, { q: 'CPR sessions are in Room ______', a: ['b'] },
    { q: 'Closing time', a: ['4', '4pm', '4 p.m.', '16:00'] }
  ] });

  L.push({ id: 'l-lecture3', title: 'Lecture: the history of vaccination', zh: '講座：疫苗歷史', part: 'Section 4 講座', lines: [
    ['A', 'In today\'s lecture, we\'ll look at how vaccination developed.'],
    ['A', 'In 1796, Edward Jenner tested the idea that infection with cowpox could protect against smallpox.'],
    ['A', 'The word "vaccine" actually comes from the Latin word for cow, "vacca".'],
    ['A', 'In the late nineteenth century, Louis Pasteur developed vaccines against rabies and anthrax.'],
    ['A', 'A major global campaign led to smallpox being declared eradicated in 1980.'],
    ['A', 'Today, vaccines prevent millions of deaths every year, yet vaccine hesitancy remains a challenge, often fuelled by misinformation online.'],
    ['A', 'Nurses play a key role by giving clear, honest information and answering parents\' questions with patience.']
  ], qs: [
    { q: 'Year of Jenner\'s experiment', a: ['1796'] }, { q: 'Jenner used infection with ______ to protect against smallpox', a: ['cowpox'] },
    { q: 'Latin word meaning cow', a: ['vacca'] }, { q: 'Pasteur developed vaccines against rabies and ______', a: ['anthrax'] },
    { q: 'Year smallpox was declared eradicated', a: ['1980'] }, { q: 'Reluctance to vaccinate is called vaccine ______', a: ['hesitancy'] },
    { q: 'This problem is often fuelled by ______ online', a: ['misinformation'] }
  ] });
})();
