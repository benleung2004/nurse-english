// IELTS 練習擴充（七）：閱讀 3 篇、聽力 3 段（原創練習材料）
(function () {
  const R = NE.reading, L = NE.listening;

  R.push({ id: 'r-handover', title: 'Getting Handover Right', zh: '做好交更', mins: 18, paras: [
    'Every time a patient\'s care passes from one nurse to another, important information must be transferred. These moments, known as handovers, happen several times a day in most hospitals. Research suggests that poor communication during handover is a leading contributor to preventable harm, from missed medications to delays in recognising deterioration.',
    'Traditionally, handovers often took place in an office away from patients, with the outgoing nurse reading from personal notes. This approach was quick, but information was sometimes incomplete, and patients had no opportunity to correct mistakes or ask questions.',
    'Many hospitals have since introduced bedside handover. Both nurses visit each patient together, check key equipment such as infusion pumps, and invite the patient or family to contribute. Studies report that patients feel more involved and that errors are detected earlier, although some nurses worry about discussing sensitive information within earshot of others.',
    'Structured tools have also become widespread. Formats such as SBAR (situation, background, assessment, recommendation) or ISBAR, which adds "identify", help nurses present information in a predictable order. Using a standard structure reduces the chance that something important is forgotten, particularly when staff are tired at the end of a long shift.',
    'Experts emphasise that tools are only part of the solution. Interruptions should be minimised, enough time should be allowed, and incoming nurses should feel comfortable asking questions. A good handover, they argue, is not a one-way report but a conversation that ensures both nurses share the same understanding of each patient.'
  ], qs: [
    { t: 'tfng', q: 'Poor handover communication can contribute to preventable harm.', a: 'T', why: 'A 段：a leading contributor to preventable harm。' },
    { t: 'tfng', q: 'Traditional office handovers allowed patients to correct mistakes.', a: 'F', why: 'B 段：patients had no opportunity to correct mistakes。' },
    { t: 'tfng', q: 'All nurses prefer bedside handover.', a: 'F', why: 'C 段：some nurses worry about discussing sensitive information。' },
    { t: 'tfng', q: 'SBAR was first developed in Hong Kong.', a: 'NG', why: '文章冇講 SBAR 起源。' },
    { t: 'gap', q: 'During bedside handover, nurses check equipment such as infusion ______.', a: ['pumps'], why: 'C 段：infusion pumps。' },
    { t: 'gap', q: 'ISBAR adds the step "______".', a: ['identify'], why: 'D 段：adds "identify"。' },
    { t: 'mcq', q: 'According to paragraph E, a good handover is', c: ['a one-way report', 'a conversation leading to shared understanding', 'as short as possible', 'done without questions'], a: 1, why: 'E 段：not a one-way report but a conversation。' }
  ] });

  R.push({ id: 'r-urban-heat', title: 'Cities and Extreme Heat', zh: '城市與極端高溫', mins: 18, paras: [
    'As global temperatures rise, heatwaves are becoming more frequent and intense. Cities are particularly affected because of the "urban heat island" effect: concrete, asphalt and buildings absorb heat during the day and release it at night, so city centres can be several degrees warmer than surrounding rural areas.',
    'Extreme heat is a serious health threat. It can cause heat exhaustion and heatstroke, and it worsens existing conditions such as heart and kidney disease. Older people, young children, outdoor workers and those living alone in poorly ventilated flats face the greatest risk. Hospital admissions typically rise during heatwaves, placing extra pressure on health services.',
    'Cities are responding in several ways. Planting trees and creating green roofs provide shade and cool the air through evaporation. Some cities have painted roofs and roads in light colours to reflect sunlight. Others open air-conditioned "cooling centres" in libraries and community halls where vulnerable residents can rest during the hottest hours.',
    'Early warning systems are another important tool. When forecasts predict dangerous heat, authorities can alert the public, remind employers to adjust outdoor work schedules, and ask social workers to check on isolated older people. Evaluations suggest that such systems can reduce heat-related deaths, especially when combined with community outreach.',
    'However, adaptation alone cannot solve the problem. Air conditioning, while life-saving, consumes energy and releases heat outdoors, which can make streets even hotter. Long-term solutions, experts argue, must combine smarter urban design with efforts to reduce greenhouse gas emissions.'
  ], qs: [
    { t: 'tfng', q: 'City centres can be warmer than nearby rural areas.', a: 'T', why: 'A 段：several degrees warmer than surrounding rural areas。' },
    { t: 'tfng', q: 'Outdoor workers face a lower risk during heatwaves.', a: 'F', why: 'B 段：outdoor workers … face the greatest risk。' },
    { t: 'tfng', q: 'Green roofs are cheaper than painting roofs white.', a: 'NG', why: '文章冇比較成本。' },
    { t: 'gap', q: 'Trees cool the air through ______.', a: ['evaporation'], why: 'C 段：cool the air through evaporation。' },
    { t: 'gap', q: 'Air-conditioned public spaces for vulnerable people are called cooling ______.', a: ['centres', 'centers'], why: 'C 段："cooling centres"。' },
    { t: 'gap', q: 'Warning systems work best when combined with community ______.', a: ['outreach'], why: 'D 段：combined with community outreach。' },
    { t: 'mcq', q: 'What problem with air conditioning is mentioned?', c: ['It is too expensive to install', 'It releases heat outdoors and uses energy', 'It causes heatstroke', 'People dislike it'], a: 1, why: 'E 段：consumes energy and releases heat outdoors。' }
  ] });

  R.push({ id: 'r-music-health', title: 'Music as Medicine', zh: '音樂與健康', mins: 18, paras: [
    'Music has been used for healing in many cultures for thousands of years, but only recently has it been studied scientifically in hospitals. Today, music is used in settings ranging from neonatal units to dementia care, and researchers are trying to understand when and how it helps.',
    'One of the clearest benefits is in reducing anxiety. Patients who listen to calming music before or during surgery often report feeling less nervous, and some studies have found lower heart rates and blood pressure. In a number of trials, patients who listened to music after surgery requested slightly less pain medication.',
    'For premature babies, carefully controlled sound, such as a parent singing softly, may help stabilise breathing and heart rate and improve feeding. However, neonatal specialists warn that volume must be kept low, because the developing ear is sensitive and noisy environments can be harmful.',
    'In dementia care, familiar songs can trigger memories and emotions even when language skills have declined. Care staff describe residents who rarely speak joining in with songs from their youth. Music sessions may also reduce agitation, although the effects often last only a short time.',
    'It is important to distinguish between music listening and music therapy. The latter is delivered by trained therapists who tailor activities to clinical goals, such as improving speech after a stroke. Researchers call for larger, high-quality studies, noting that many existing trials are small and that patients\' musical preferences strongly influence the results.'
  ], qs: [
    { t: 'tfng', q: 'Music has only recently been used for healing.', a: 'F', why: 'A 段：used for healing … for thousands of years。' },
    { t: 'tfng', q: 'Some patients needed less pain medication after listening to music.', a: 'T', why: 'B 段：requested slightly less pain medication。' },
    { t: 'tfng', q: 'Loud music is recommended for premature babies.', a: 'F', why: 'C 段：volume must be kept low。' },
    { t: 'tfng', q: 'Classical music works better than pop music in dementia care.', a: 'NG', why: '文章冇比較音樂類型。' },
    { t: 'gap', q: 'Music sessions in dementia care may reduce ______.', a: ['agitation'], why: 'D 段：may also reduce agitation。' },
    { t: 'gap', q: 'Music therapy is delivered by trained ______.', a: ['therapists'], why: 'E 段：trained therapists。' },
    { t: 'mcq', q: 'What limitation of current research is mentioned?', c: ['Studies are too expensive', 'Many trials are small and preferences affect results', 'Music has no effect at all', 'Only children were studied'], a: 1, why: 'E 段：many existing trials are small … preferences strongly influence。' }
  ] });

  L.push({ id: 'l-vaccine-call', title: 'Booking a child\'s vaccination', zh: '預約小朋友打針', part: 'Section 1 填表', lines: [
    ['A', 'Maternal and Child Health Centre, how can I help you?'], ['B', 'Hi, I\'d like to book my son\'s next vaccination.'],
    ['A', 'Of course. What\'s your son\'s name?'], ['B', 'Ethan Cheung. That\'s C-H-E-U-N-G.'],
    ['A', 'And his date of birth?'], ['B', 'The 3rd of March, last year.'],
    ['A', 'Thank you. He\'s due for his 12-month vaccines. We have a slot on Thursday at 10:15 or Friday at 2:45.'], ['B', 'Friday afternoon is better.'],
    ['A', 'Fine. Please bring his health record book and arrive fifteen minutes early.'], ['B', 'Should I give him anything before?'],
    ['A', 'No need. If he has a fever on the day, call us to rearrange. Our number is 2 5 7 0 3 3 1 8.'],
    ['B', 'Is there parking?'], ['A', 'Only a few spaces; it\'s better to take the minibus, number 47.']
  ], qs: [
    { q: 'Child\'s surname', a: ['cheung'] }, { q: 'Month of birth', a: ['march'] },
    { q: 'Age of vaccines due (months)', a: ['12', 'twelve'] }, { q: 'Appointment day', a: ['friday'] },
    { q: 'Appointment time', a: ['2:45', '2.45', '14:45'] }, { q: 'Bring his health record ______', a: ['book'] },
    { q: 'Arrive how many minutes early?', a: ['15', 'fifteen'] }, { q: 'Call to rearrange if he has a ______', a: ['fever'] },
    { q: 'Minibus number', a: ['47'] }
  ] });

  L.push({ id: 'l-parent-class', title: 'Talk: preparing your child for hospital', zh: '講座：點樣幫小朋友準備入院', part: 'Section 2 筆記', lines: [
    ['A', 'Good evening, everyone. I\'m a play specialist, and tonight I\'ll share some tips for preparing your child for a hospital stay.'],
    ['A', 'First, talk about it honestly. For children under five, mention it only two or three days before; older children can be told about a week ahead.'],
    ['A', 'Second, read a picture book about hospitals together. Our library lends them for free.'],
    ['A', 'Third, pack a comfort item, such as a favourite blanket or soft toy. Please label it with your child\'s name.'],
    ['A', 'Fourth, you\'re welcome to join our pre-admission tour, held every Wednesday at 4 p.m. It lasts about 30 minutes.'],
    ['A', 'On the ward, one parent can stay overnight. Meals for parents can be bought from the café on the ground floor.'],
    ['A', 'Finally, remember that children pick up on your feelings, so try to stay calm and positive.']
  ], qs: [
    { q: 'Tell children under five how many days before? (max)', a: ['3', 'three'] }, { q: 'Older children can be told about a ______ ahead', a: ['week'] },
    { q: 'Picture books are lent by the ______', a: ['library'] }, { q: 'Label comfort items with the child\'s ______', a: ['name'] },
    { q: 'Tour day', a: ['wednesday'] }, { q: 'Tour length (minutes)', a: ['30', 'thirty'] },
    { q: 'Parents\' meals: café on the ______ floor', a: ['ground'] }
  ] });

  L.push({ id: 'l-lecture-ams', title: 'Lecture: antibiotic stewardship', zh: '講座：抗生素管理', part: 'Section 4 講座', lines: [
    ['A', 'In today\'s lecture, I\'ll explain antimicrobial stewardship and why nurses are central to it.'],
    ['A', 'Stewardship means using antibiotics only when needed, choosing the right drug, dose and duration, and reviewing treatment regularly.'],
    ['A', 'Studies suggest that up to 30 percent of antibiotic prescriptions in hospitals may be unnecessary or inappropriate.'],
    ['A', 'Nurses contribute in several ways. First, by making sure cultures are taken before the first dose, wherever possible.'],
    ['A', 'Second, by giving doses on time, as delays reduce effectiveness, especially in sepsis.'],
    ['A', 'Third, by prompting a review at 48 to 72 hours, when results are usually available and a narrower drug may be chosen.'],
    ['A', 'Another key opportunity is switching from intravenous to oral treatment when the patient is improving, which reduces line infections and allows earlier discharge.'],
    ['A', 'Finally, nurses educate patients and parents to finish courses as prescribed and not to keep leftover antibiotics.']
  ], qs: [
    { q: 'Percentage of hospital prescriptions possibly unnecessary (up to)', a: ['30', 'thirty', '30%'] }, { q: 'Take ______ before the first dose', a: ['cultures'] },
    { q: 'Delays reduce effectiveness, especially in ______', a: ['sepsis'] }, { q: 'Review at 48 to ___ hours', a: ['72'] },
    { q: 'Switch from intravenous to ______', a: ['oral'] }, { q: 'IV-to-oral switch reduces line ______', a: ['infections'] },
    { q: 'Patients should not keep ______ antibiotics', a: ['leftover'] }
  ] });
})();
