// IELTS 練習擴充（六）：閱讀 3 篇、聽力 3 段（原創練習材料）
(function () {
  const R = NE.reading, L = NE.listening;

  R.push({ id: 'r-vaccine-hist', title: 'The Long Road to Vaccination', zh: '疫苗嘅發展歷史', mins: 18, paras: [
    'Long before modern science, people noticed that those who survived certain diseases rarely caught them again. In parts of Asia and Africa, a practice called variolation involved deliberately exposing healthy people to material from smallpox sores. It was risky, since some people developed severe illness, but it usually produced a milder infection and lasting protection.',
    'In the late eighteenth century, an English doctor observed that milkmaids who had caught cowpox, a mild disease from cattle, seemed protected from smallpox. He tested this idea by inoculating a boy with cowpox material and later exposing him to smallpox; the boy did not become ill. The word "vaccine" comes from the Latin word for cow.',
    'Progress was slow for almost a century, until scientists understood that germs cause disease. Researchers then learned to weaken or kill microbes in the laboratory to create safer vaccines, leading to protection against rabies, diphtheria and, later, polio. Mass vaccination campaigns in the twentieth century dramatically reduced childhood deaths in many countries.',
    'The greatest success came in 1980, when smallpox was officially declared eradicated after a worldwide programme. This achievement depended not only on an effective vaccine but also on careful surveillance: health workers tracked every new case and vaccinated people around it, a strategy known as ring vaccination.',
    'Today, vaccines face a different challenge. Because many diseases have become rare, some parents underestimate their danger and worry more about side effects. Health professionals, including nurses, play a vital role in answering questions honestly and building trust, as falling vaccination rates can allow diseases such as measles to return.'
  ], qs: [
    { t: 'tfng', q: 'Variolation was completely safe.', a: 'F', why: 'A 段：It was risky … some people developed severe illness。' },
    { t: 'tfng', q: 'The word "vaccine" is related to the Latin word for cow.', a: 'T', why: 'B 段：comes from the Latin word for cow。' },
    { t: 'tfng', q: 'The boy in the experiment later became a doctor.', a: 'NG', why: '文章冇講個男仔之後做咩。' },
    { t: 'tfng', q: 'Smallpox was declared eradicated in 1980.', a: 'T', why: 'D 段：in 1980 … officially declared eradicated。' },
    { t: 'gap', q: 'Vaccinating people around each new case is called ______ vaccination.', a: ['ring'], why: 'D 段：ring vaccination。' },
    { t: 'gap', q: 'Scientists learned to weaken or kill ______ to make safer vaccines.', a: ['microbes'], why: 'C 段：weaken or kill microbes。' },
    { t: 'mcq', q: 'According to paragraph E, why do some parents hesitate about vaccines today?', c: ['Vaccines are too expensive', 'Diseases have become rare, so they underestimate the danger', 'Nurses refuse to answer questions', 'Vaccines no longer work'], a: 1, why: 'E 段：many diseases have become rare … underestimate their danger。' }
  ] });

  R.push({ id: 'r-play-therapy', title: 'Play in Children\'s Hospitals', zh: '兒童醫院入面嘅遊戲', mins: 18, paras: [
    'For a young child, being admitted to hospital can be frightening. Unfamiliar surroundings, painful procedures and separation from home can cause anxiety that affects sleep, appetite and even recovery. Many children\'s hospitals therefore employ specialists who use play to help children cope.',
    'Play is the natural way children express feelings and make sense of the world. In hospital, "normal" play, such as drawing or building blocks, gives children a sense of control and routine. It also allows staff to observe how a child is feeling, since a child who suddenly stops playing may be in pain or becoming unwell.',
    'A more structured approach is preparation play. Before an operation or a blood test, a specialist may use dolls, real equipment and simple pictures to explain what will happen. Studies suggest that well-prepared children show less distress and may need less sedation, and their parents also report feeling calmer.',
    'Distraction is another key technique during procedures. Bubbles, videos, counting games or virtual reality headsets can shift a child\'s attention away from discomfort. The method chosen depends on the child\'s age and preferences, and it works best when it is planned in advance rather than introduced at the last minute.',
    'Despite the evidence, play services are sometimes seen as a luxury and are among the first to be reduced when budgets are tight. Advocates argue that this is a false economy, because anxious children may need longer procedures, more staff and more medication. Nurses can support play even without a specialist, for example by explaining honestly and letting children make small choices.'
  ], qs: [
    { t: 'tfng', q: 'Hospital admission can affect a child\'s recovery.', a: 'T', why: 'A 段：anxiety that affects … even recovery。' },
    { t: 'tfng', q: 'A child who stops playing is always just tired.', a: 'F', why: 'B 段：may be in pain or becoming unwell。' },
    { t: 'tfng', q: 'Virtual reality is the most effective distraction for all ages.', a: 'NG', why: 'D 段只話視乎年齡同喜好，冇講 VR 最有效。' },
    { t: 'gap', q: 'Using dolls and real equipment to explain a procedure is called ______ play.', a: ['preparation'], why: 'C 段：preparation play。' },
    { t: 'gap', q: 'Well-prepared children may need less ______.', a: ['sedation'], why: 'C 段：may need less sedation。' },
    { t: 'gap', q: 'Cutting play services is described as a false ______.', a: ['economy'], why: 'E 段：a false economy。' },
    { t: 'mcq', q: 'According to paragraph D, distraction works best when it is', c: ['introduced at the last minute', 'planned in advance', 'the same for every child', 'used only with videos'], a: 1, why: 'D 段：planned in advance。' }
  ] });

  R.push({ id: 'r-four-day', title: 'The Four-Day Working Week', zh: '四天工作週', mins: 18, paras: [
    'In recent years, a number of companies and governments have experimented with a four-day working week, in which employees work fewer hours for the same pay. Supporters claim it improves wellbeing without reducing output, while critics doubt that it can work in every industry.',
    'Several large trials have reported encouraging results. Employees described lower stress, better sleep and more time for family and exercise. Many organisations found that productivity stayed the same or even rose, partly because staff cut unnecessary meetings and focused on essential tasks. Most companies in these trials chose to continue the arrangement afterwards.',
    'However, the trials mainly involved office-based businesses that volunteered to take part, which may have been especially suited to the change. Services that must operate around the clock, such as hospitals, transport and policing, face different challenges. Reducing hours there usually means employing more staff, which raises costs.',
    'Some hospitals have tried alternative models, such as offering staff more flexible rosters or compressed hours, where the same total hours are worked over fewer, longer shifts. Results are mixed: some nurses appreciate the extra days off, while others find long shifts exhausting, which could affect patient safety.',
    'Economists suggest that the four-day week is unlikely to be a single solution for all workplaces. Instead, they argue, the debate has drawn attention to a broader question: how work can be organised to protect workers\' health while maintaining the quality of services.'
  ], qs: [
    { t: 'tfng', q: 'In a four-day week, employees usually receive lower pay.', a: 'F', why: 'A 段：for the same pay。' },
    { t: 'tfng', q: 'Most companies in the trials continued the four-day week.', a: 'T', why: 'B 段：Most companies … chose to continue。' },
    { t: 'tfng', q: 'Every hospital that tried compressed hours reported improved safety.', a: 'F', why: 'D 段：Results are mixed … could affect patient safety。' },
    { t: 'tfng', q: 'The trials included more women than men.', a: 'NG', why: '文章冇講性別比例。' },
    { t: 'gap', q: 'Productivity improved partly because staff reduced unnecessary ______.', a: ['meetings'], why: 'B 段：cut unnecessary meetings。' },
    { t: 'gap', q: 'Working the same total hours over fewer days is called ______ hours.', a: ['compressed'], why: 'D 段：compressed hours。' },
    { t: 'mcq', q: 'Why might the trial results not apply to all industries?', c: ['The trials were too short', 'They mainly involved office businesses that volunteered', 'Workers disliked the change', 'Productivity fell sharply'], a: 1, why: 'C 段：mainly involved office-based businesses that volunteered。' }
  ] });

  L.push({ id: 'l-cpr-course', title: 'Booking a first aid course', zh: '報讀急救課程', part: 'Section 1 填表', lines: [
    ['A', 'Good morning, Community First Aid Centre. How can I help?'], ['B', 'Hi, I\'d like to book a place on the paediatric first aid course.'],
    ['A', 'Sure. The next one is on Saturday the 14th of December. It runs from 9:30 to 4:30.'], ['B', 'Great. How much is it?'],
    ['A', 'It\'s 680 dollars, but there\'s a 10 percent discount for healthcare workers.'], ['B', 'Oh, I\'m a nurse, so that helps.'],
    ['A', 'Could I have your surname, please?'], ['B', 'It\'s Lam, L-A-M.'],
    ['A', 'And a contact number?'], ['B', '6 2 3 8 4 1 9 0.'],
    ['A', 'The course is held in Room 5 on the second floor. Please bring a packed lunch, as there\'s no canteen.'],
    ['B', 'Will I get a certificate?'], ['A', 'Yes, it\'s valid for three years.']
  ], qs: [
    { q: 'Date of the course: Saturday ___ December', a: ['14', '14th', 'fourteenth'] }, { q: 'Finishing time', a: ['4:30', '4.30', '16:30'] },
    { q: 'Full price (dollars)', a: ['680'] }, { q: 'Discount for healthcare workers (%)', a: ['10', 'ten'] },
    { q: 'Surname', a: ['lam'] }, { q: 'Phone number', a: ['62384190'] },
    { q: 'Room number', a: ['5', 'five'] }, { q: 'Bring a packed ______', a: ['lunch'] },
    { q: 'Certificate valid for (years)', a: ['3', 'three'] }
  ] });

  L.push({ id: 'l-ward-tour', title: 'Orientation talk for new ward staff', zh: '新同事病房導覽', part: 'Section 2 筆記', lines: [
    ['A', 'Welcome to the children\'s medical ward. I\'m the ward manager, and I\'ll give you a quick overview before your first shift.'],
    ['A', 'The ward has 28 beds, including four isolation rooms at the far end, near the fire exit.'],
    ['A', 'The resuscitation trolley is kept opposite the nurses\' station. It\'s checked every morning, and the checklist is on the side.'],
    ['A', 'Handover takes place at 7:30 in the morning and 7:30 in the evening, in the meeting room behind the station. Please arrive ten minutes early.'],
    ['A', 'All medicines are stored in the treatment room, which needs your staff card to open. Controlled drugs must be checked by two nurses.'],
    ['A', 'Parents can stay overnight; fold-out beds are kept in the store room next to the kitchen.'],
    ['A', 'Finally, if you have any questions during your first month, your mentor is your main contact. Don\'t hesitate to ask.']
  ], qs: [
    { q: 'Number of beds', a: ['28', 'twenty-eight'] }, { q: 'Number of isolation rooms', a: ['4', 'four'] },
    { q: 'The resuscitation trolley is opposite the nurses\' ______', a: ['station'] }, { q: 'Morning handover time', a: ['7:30', '7.30'] },
    { q: 'Arrive how many minutes early?', a: ['10', 'ten'] }, { q: 'Treatment room opens with your staff ______', a: ['card'] },
    { q: 'Controlled drugs are checked by how many nurses?', a: ['2', 'two'] }, { q: 'Fold-out beds are next to the ______', a: ['kitchen'] },
    { q: 'Main contact in your first month', a: ['mentor', 'your mentor'] }
  ] });

  L.push({ id: 'l-lecture-sleep', title: 'Lecture: sleep and shift work', zh: '講座：睡眠與輪班工作', part: 'Section 4 講座', lines: [
    ['A', 'Today we\'ll look at how shift work affects sleep and health, and what workers can do about it.'],
    ['A', 'Our body clock, or circadian rhythm, is controlled mainly by light. When people work at night, this rhythm is disrupted, and daytime sleep is usually shorter and lighter.'],
    ['A', 'Studies of night workers show an average of one to two hours less sleep per day than day workers. Over time, this is linked to obesity, digestive problems and a higher risk of accidents.'],
    ['A', 'So what helps? First, consistency. Keeping a regular sleep time, even on days off, makes adjustment easier.'],
    ['A', 'Second, darkness. Blackout curtains and an eye mask can make daytime sleep deeper. Wearing sunglasses on the way home also reduces exposure to morning light.'],
    ['A', 'Third, caffeine. It can help alertness early in a shift, but should be avoided in the last four hours before sleep.'],
    ['A', 'Finally, a short nap of about 20 minutes before a night shift can improve performance without causing grogginess.']
  ], qs: [
    { q: 'The body clock is controlled mainly by ______', a: ['light'] }, { q: 'Night workers sleep up to how many hours less per day?', a: ['2', 'two'] },
    { q: 'First strategy: ______', a: ['consistency'] }, { q: 'Wear ______ on the way home', a: ['sunglasses'] },
    { q: 'Avoid caffeine in the last ___ hours before sleep', a: ['4', 'four'] }, { q: 'Ideal nap length (minutes)', a: ['20', 'twenty'] },
    { q: 'Daytime sleep is usually shorter and ______', a: ['lighter'] }
  ] });
})();
