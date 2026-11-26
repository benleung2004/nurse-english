// IELTS 練習擴充（十三）：閱讀 3 篇、聽力 3 段（原創練習材料）
(function () {
  const R = NE.reading, L = NE.listening;

  R.push({ id: 'r-checklists', title: 'The Power of Checklists', zh: '清單嘅力量', mins: 18, paras: [
    'Pilots have used checklists for decades to make sure that critical steps are not forgotten. In the early 2000s, researchers began to ask whether a similar approach could reduce errors in healthcare, where procedures are complex and staff are often busy and interrupted.',
    'One of the best-known examples is the surgical safety checklist. Before anaesthesia, before the first incision and before the patient leaves the operating room, the team pauses to confirm key information, such as the patient\'s identity, the planned procedure and any allergies.',
    'Early studies in several countries reported reductions in complications and deaths after the checklist was introduced. However, later research showed that results depended heavily on how it was used. Where staff simply ticked boxes without discussion, the benefits were much smaller.',
    'Supporters argue that checklists also improve teamwork. By introducing themselves and speaking during the pause, junior members of the team may feel more confident to raise concerns. Critics, in contrast, warn of "checklist fatigue" when too many forms are added to daily work.',
    'Experts conclude that checklists are tools, not solutions in themselves. They work best when they are short, designed with frontline staff, and supported by leaders who encourage open communication.'
  ], qs: [
    { t: 'tfng', q: 'Checklists were first used in aviation.', a: 'T', why: 'A 段：Pilots have used checklists for decades。' },
    { t: 'tfng', q: 'The surgical checklist is used only after surgery.', a: 'F', why: 'B 段：before anaesthesia, before the first incision and before the patient leaves。' },
    { t: 'tfng', q: 'Ticking boxes without discussion produced the same benefits.', a: 'F', why: 'C 段：the benefits were much smaller。' },
    { t: 'tfng', q: 'The checklist reduced hospital costs by 50%.', a: 'NG', why: '文章冇講成本。' },
    { t: 'gap', q: 'Too many forms may cause checklist ______.', a: ['fatigue'], why: 'D 段："checklist fatigue"。' },
    { t: 'gap', q: 'Checklists work best when designed with ______ staff.', a: ['frontline'], why: 'E 段：designed with frontline staff。' },
    { t: 'mcq', q: 'How can checklists improve teamwork?', c: ['By replacing communication', 'By giving junior staff more confidence to speak up', 'By shortening operations', 'By removing leaders'], a: 1, why: 'D 段：junior members … more confident to raise concerns。' }
  ] });

  R.push({ id: 'r-urban-farming', title: 'Farming in the City', zh: '城市耕種', mins: 18, paras: [
    'As cities grow, interest in producing food within urban areas has increased. Urban farming ranges from small community gardens and rooftop vegetable plots to high-tech indoor farms where crops grow in stacked layers under artificial light.',
    'Supporters highlight several benefits. Growing food close to consumers can reduce transport distances and packaging, and fresh produce may be more appealing than imported vegetables. Community gardens also bring neighbours together and offer opportunities for exercise and relaxation.',
    'Indoor vertical farms can produce crops all year round, unaffected by weather, and often use much less water than traditional farming because water is recycled. However, they require large amounts of electricity for lighting and climate control, which can make them expensive and, depending on the energy source, less environmentally friendly.',
    'Space is another limitation. In dense cities, land is extremely valuable, so most urban farms are small and cannot replace rural agriculture. They are most suitable for leafy greens and herbs rather than staple crops such as rice or wheat.',
    'Some health researchers believe urban farming can improve diets, particularly in low-income neighbourhoods with limited access to fresh food. Schools that run gardening projects report that children become more willing to try vegetables they have grown themselves.'
  ], qs: [
    { t: 'tfng', q: 'Urban farming includes rooftop gardens.', a: 'T', why: 'A 段：rooftop vegetable plots。' },
    { t: 'tfng', q: 'Vertical farms are affected by bad weather.', a: 'F', why: 'C 段：unaffected by weather。' },
    { t: 'tfng', q: 'Urban farms can easily replace rural farming.', a: 'F', why: 'D 段：cannot replace rural agriculture。' },
    { t: 'tfng', q: 'Hong Kong has the largest number of vertical farms.', a: 'NG', why: '文章冇講香港。' },
    { t: 'gap', q: 'Vertical farms need a lot of ______ for lighting.', a: ['electricity'], why: 'C 段：large amounts of electricity。' },
    { t: 'gap', q: 'Urban farms suit leafy greens and ______.', a: ['herbs'], why: 'D 段：leafy greens and herbs。' },
    { t: 'mcq', q: 'What happens when children grow vegetables at school?', c: ['They eat fewer vegetables', 'They are more willing to try them', 'They stop eating meat', 'They lose interest in school'], a: 1, why: 'E 段：more willing to try vegetables。' }
  ] });

  R.push({ id: 'r-screen-sleep', title: 'Screens and Children\'s Sleep', zh: '屏幕同兒童睡眠', mins: 18, paras: [
    'Many parents worry that phones and tablets are keeping their children awake. Surveys in several countries show that a majority of teenagers use a device in bed, and many report feeling tired at school.',
    'There are several ways screens might affect sleep. The most obvious is time displacement: hours spent online may replace hours of sleep. Content can also be stimulating, whether it is an exciting game or an upsetting message, making it harder to relax.',
    'Light is another factor. Screens emit blue light, which can suppress melatonin, a hormone that helps regulate sleep. However, some researchers argue that the effect of light from devices is relatively small compared with the effects of the content and the time spent.',
    'Evidence suggests that the hour before bed is particularly important. Children who stop using devices at least an hour before sleep tend to fall asleep faster and sleep longer. Keeping devices out of the bedroom overnight also reduces night-time waking caused by notifications.',
    'Experts recommend that families create simple routines, such as a regular bedtime, a "charging station" outside bedrooms and calming activities like reading. Parents who model good habits themselves are more likely to see their children follow them.'
  ], qs: [
    { t: 'tfng', q: 'Most teenagers in some surveys use devices in bed.', a: 'T', why: 'A 段：a majority of teenagers use a device in bed。' },
    { t: 'tfng', q: 'Blue light increases melatonin.', a: 'F', why: 'C 段：can suppress melatonin。' },
    { t: 'tfng', q: 'All researchers agree that light is the main problem.', a: 'F', why: 'C 段：some researchers argue … relatively small。' },
    { t: 'gap', q: 'Online time replacing sleep is called time ______.', a: ['displacement'], why: 'B 段：time displacement。' },
    { t: 'gap', q: 'Stop using devices at least an ______ before sleep.', a: ['hour'], why: 'D 段：at least an hour before sleep。' },
    { t: 'gap', q: 'Families can set up a charging ______ outside bedrooms.', a: ['station'], why: 'E 段："charging station"。' },
    { t: 'mcq', q: 'What makes children more likely to follow good habits?', c: ['Strict punishments', 'Parents modelling the habits themselves', 'New devices', 'Later bedtimes'], a: 1, why: 'E 段：Parents who model good habits。' }
  ] });

  L.push({ id: 'l-volunteer-call', title: 'Signing up to volunteer at a children\'s charity', zh: '報名做兒童慈善義工', part: 'Section 1 填表', lines: [
    ['A', 'Hello, Little Stars Children\'s Charity. How can I help?'], ['B', 'Hi, I\'m a nurse and I\'d like to volunteer at your weekend activities.'],
    ['A', 'Wonderful. Can I take your full name?'], ['B', 'Yes, it\'s Mandy Kwok. K-W-O-K.'],
    ['A', 'Which activities interest you?'], ['B', 'Probably the arts and crafts sessions for children in hospital.'],
    ['A', 'Those run on Sunday afternoons, from 2 to 4.'], ['B', 'That\'s perfect.'],
    ['A', 'You\'ll need to attend a three-hour training session first, on the 18th of January.'],
    ['A', 'We also need a copy of your nursing licence and two references.'],
    ['B', 'How often would I need to come?'], ['A', 'At least twice a month, for a minimum of six months.']
  ], qs: [
    { q: 'Volunteer\'s surname', a: ['kwok'] }, { q: 'Preferred activity: arts and ______', a: ['crafts'] },
    { q: 'Day of sessions', a: ['sunday'] }, { q: 'Session finishing time', a: ['4', '4pm', '4 p.m.', '16:00'] },
    { q: 'Training length (hours)', a: ['3', 'three'] }, { q: 'Training date: ___ January', a: ['18', '18th'] },
    { q: 'Number of references needed', a: ['2', 'two'] }, { q: 'Minimum commitment (months)', a: ['6', 'six'] }
  ] });

  L.push({ id: 'l-discharge-talk', title: 'Discharge talk for parents of a newborn', zh: '新生 BB 出院講解', part: 'Section 2 筆記', lines: [
    ['A', 'Congratulations on your new baby. Before you go home, I\'ll go through some key information.'],
    ['A', 'Feeding: most newborns feed 8 to 12 times in 24 hours. Wake her if she sleeps longer than four hours in the first week.'],
    ['A', 'Nappies: by day five, expect at least six heavy wet nappies a day, and yellow stools.'],
    ['A', 'Sleep: always place her on her back, in her own cot, with no pillows or soft toys.'],
    ['A', 'Jaundice: if her skin or eyes look more yellow, or she becomes very sleepy, call the ward.'],
    ['A', 'The community midwife will visit you on day three, and your baby\'s first check at the Maternal and Child Health Centre is at four weeks.'],
    ['A', 'Finally, if she has a temperature of 38 degrees or above, take her to the emergency department straight away.']
  ], qs: [
    { q: 'Feeds in 24 hours: 8 to ___', a: ['12', 'twelve'] }, { q: 'Wake if sleeping longer than ___ hours', a: ['4', 'four'] },
    { q: 'Wet nappies by day five (at least)', a: ['6', 'six'] }, { q: 'Stool colour', a: ['yellow'] },
    { q: 'Sleep position: on her ______', a: ['back'] }, { q: 'Midwife visit day', a: ['3', 'three', 'day three'] },
    { q: 'First check at the centre (weeks)', a: ['4', 'four'] }, { q: 'Go to A&E if temperature is ___ °C or above', a: ['38'] }
  ] });

  L.push({ id: 'l-lecture-ethics', title: 'Lecture: consent in children', zh: '講座：兒童嘅同意權', part: 'Section 4 講座', lines: [
    ['A', 'Today\'s lecture focuses on consent in children and young people, an area that often causes confusion.'],
    ['A', 'For young children, consent is usually given by a person with parental responsibility.'],
    ['A', 'However, children should still be involved as much as possible. Seeking their agreement, sometimes called assent, shows respect and builds trust.'],
    ['A', 'As children grow, they may gain the maturity to make some decisions themselves. In many jurisdictions, the key concept is whether the young person understands the nature, purpose and risks of the treatment.'],
    ['A', 'Confidentiality also matters. Teenagers are more likely to seek help if they believe their information will be kept private.'],
    ['A', 'But confidentiality has limits: if there is a risk of serious harm, information must be shared to protect the young person.'],
    ['A', 'In practice, always document discussions carefully and involve senior colleagues when you are unsure.']
  ], qs: [
    { q: 'For young children, consent comes from a person with parental ______', a: ['responsibility'] }, { q: 'A child\'s agreement is called ______', a: ['assent'] },
    { q: 'Seeking agreement builds ______', a: ['trust'] }, { q: 'Young people must understand the nature, purpose and ______', a: ['risks'] },
    { q: 'Teenagers seek help more if information is kept ______', a: ['private'] }, { q: 'Share information if there is risk of serious ______', a: ['harm'] },
    { q: 'Always ______ discussions carefully', a: ['document'] }
  ] });
})();
