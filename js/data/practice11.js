// IELTS 練習擴充（十一）：閱讀 3 篇、聽力 3 段（原創練習材料）
(function () {
  const R = NE.reading, L = NE.listening;

  R.push({ id: 'r-family-care', title: 'Family-Centred Care in Paediatrics', zh: '兒科以家庭為中心嘅護理', mins: 18, paras: [
    'In the past, parents were often allowed to visit their children in hospital for only short periods, as staff believed visits upset children and disrupted ward routines. Today, most children\'s hospitals follow a very different philosophy known as family-centred care.',
    'Family-centred care recognises parents as partners in their child\'s care. Parents are encouraged to stay with their children, including overnight, and to take part in decisions. Many also help with everyday tasks such as feeding, bathing and comforting, with support from nurses.',
    'Research suggests several benefits. Children whose parents are present tend to be less anxious and may cooperate better with procedures. Parents, in turn, feel more in control and better prepared to care for their child at home. Some studies in neonatal units have linked parental involvement to improved weight gain and shorter stays.',
    'However, putting the approach into practice is not always easy. Parents may be exhausted, have other children at home or face financial pressure from missing work. Nurses must also judge how much responsibility to share, ensuring that parents are not expected to perform tasks they feel unsure about.',
    'Experts emphasise that communication is the foundation of family-centred care. This includes sharing information honestly, inviting parents to ward rounds, and respecting cultural values. Simple practical support, such as comfortable chairs, meal vouchers and quiet rooms, can also make a significant difference.'
  ], qs: [
    { t: 'tfng', q: 'In the past, parents could stay with children in hospital at any time.', a: 'F', why: 'A 段：only short periods。' },
    { t: 'tfng', q: 'Family-centred care treats parents as partners.', a: 'T', why: 'B 段：parents as partners。' },
    { t: 'tfng', q: 'All parents prefer to stay overnight.', a: 'NG', why: '文章冇講所有家長意願。' },
    { t: 'gap', q: 'Some neonatal studies linked parental involvement to improved weight ______.', a: ['gain'], why: 'C 段：improved weight gain。' },
    { t: 'gap', q: 'Parents may face ______ pressure from missing work.', a: ['financial'], why: 'D 段：financial pressure。' },
    { t: 'gap', q: '______ is the foundation of family-centred care.', a: ['communication'], why: 'E 段：communication is the foundation。' },
    { t: 'mcq', q: 'What must nurses judge, according to paragraph D?', c: ['How long visits should last', 'How much responsibility to share with parents', 'Which parent is better', 'When to ban visitors'], a: 1, why: 'D 段：how much responsibility to share。' }
  ] });

  R.push({ id: 'r-microbiome', title: 'The Gut Microbiome', zh: '腸道微生物群', mins: 18, paras: [
    'The human gut is home to trillions of microorganisms, including bacteria, viruses and fungi, collectively known as the gut microbiome. Once largely ignored, this community is now one of the most active areas of medical research.',
    'The microbiome helps to digest certain foods, produces some vitamins and plays a role in training the immune system. Babies begin to acquire their microbes at birth, and factors such as the method of delivery, breastfeeding and early antibiotic use may influence its development.',
    'Researchers have found associations between changes in the microbiome and a range of conditions, including inflammatory bowel disease, obesity and allergies. However, it is often unclear whether these changes cause disease or are a result of it.',
    'One treatment that has shown clear benefits is faecal microbiota transplantation, in which stool from a healthy donor is transferred to a patient. It is highly effective for recurrent infection with Clostridioides difficile, a bacterium that can cause severe diarrhoea after antibiotics.',
    'Probiotic products are widely sold, but evidence for their benefits varies depending on the strain and the condition. Many scientists suggest that a diet rich in fibre, from vegetables, fruit and whole grains, is one of the most reliable ways to support a healthy microbiome.'
  ], qs: [
    { t: 'tfng', q: 'The gut microbiome includes only bacteria.', a: 'F', why: 'A 段：bacteria, viruses and fungi。' },
    { t: 'tfng', q: 'Breastfeeding may influence the development of a baby\'s microbiome.', a: 'T', why: 'B 段：breastfeeding … may influence。' },
    { t: 'tfng', q: 'Scientists have proven that the microbiome causes obesity.', a: 'F', why: 'C 段：unclear whether these changes cause disease。' },
    { t: 'tfng', q: 'Probiotics are cheaper in Asia.', a: 'NG', why: '文章冇講價錢。' },
    { t: 'gap', q: 'The microbiome helps to train the ______ system.', a: ['immune'], why: 'B 段：training the immune system。' },
    { t: 'gap', q: 'Faecal transplants are effective for recurrent C. difficile ______.', a: ['infection'], why: 'D 段：recurrent infection。' },
    { t: 'mcq', q: 'What is one of the most reliable ways to support the microbiome?', c: ['Taking any probiotic', 'Eating a diet rich in fibre', 'Using antibiotics regularly', 'Avoiding fruit'], a: 1, why: 'E 段：a diet rich in fibre。' }
  ] });

  R.push({ id: 'r-libraries', title: 'The Changing Role of Public Libraries', zh: '公共圖書館角色嘅轉變', mins: 18, paras: [
    'With so much information available online, some people predicted that public libraries would become unnecessary. Instead, many libraries have reinvented themselves as community hubs offering far more than books.',
    'Modern libraries provide free internet access, computers and printing, which are essential for people who cannot afford them at home. Staff often help residents complete online forms, apply for jobs or access government services, reducing the "digital divide".',
    'Libraries are also popular study spaces. In crowded cities, students who share small flats with their families may have nowhere quiet to work, so libraries with long opening hours and study rooms are in high demand, especially during exam periods.',
    'Many libraries run programmes for different age groups, from storytelling sessions for toddlers to technology classes for older adults. Some host health talks, language exchange groups and even lend items such as musical instruments or tools.',
    'Nevertheless, libraries face financial pressures. Budget cuts in some places have led to reduced opening hours or closures. Supporters argue that libraries are among the few public spaces where anyone can spend time without paying, making them vital for social inclusion.'
  ], qs: [
    { t: 'tfng', q: 'Public libraries have disappeared because of the internet.', a: 'F', why: 'A 段：reinvented themselves as community hubs。' },
    { t: 'tfng', q: 'Library staff may help people apply for jobs online.', a: 'T', why: 'B 段：apply for jobs。' },
    { t: 'tfng', q: 'All libraries lend musical instruments.', a: 'F', why: 'D 段：Some … lend items。' },
    { t: 'gap', q: 'Libraries help to reduce the "digital ______".', a: ['divide'], why: 'B 段："digital divide"。' },
    { t: 'gap', q: 'Libraries are in high demand during ______ periods.', a: ['exam'], why: 'C 段：exam periods。' },
    { t: 'gap', q: 'Libraries are vital for social ______.', a: ['inclusion'], why: 'E 段：social inclusion。' },
    { t: 'mcq', q: 'Why are libraries important study spaces in crowded cities?', c: ['They sell books cheaply', 'Students may have no quiet place at home', 'They have free food', 'They open only at night'], a: 1, why: 'C 段：nowhere quiet to work。' }
  ] });

  L.push({ id: 'l-pharmacy-call', title: 'Asking a pharmacist about a child\'s medicine', zh: '問藥劑師小朋友嘅藥', part: 'Section 1 填表', lines: [
    ['A', 'Good afternoon, Harbour Pharmacy.'], ['B', 'Hi, my son was prescribed an antibiotic this morning and I have a few questions.'],
    ['A', 'Of course. What\'s the name of the medicine?'], ['B', 'Amoxicillin suspension.'],
    ['A', 'And what dose is on the label?'], ['B', 'Five millilitres, three times a day.'],
    ['A', 'That\'s right. Space the doses out, roughly every eight hours, and finish the full seven-day course.'],
    ['B', 'Does it need to be kept in the fridge?'], ['A', 'Yes, once it\'s mixed. And throw away any left after the course.'],
    ['B', 'He\'s had a mild rash before with antibiotics.'], ['A', 'In that case, if he develops a rash, swelling or breathing problems, stop it and see a doctor immediately.'],
    ['B', 'Can he take it with milk?'], ['A', 'Yes, with or without food. Use the oral syringe provided, not a kitchen spoon.']
  ], qs: [
    { q: 'Medicine name', a: ['amoxicillin'] }, { q: 'Dose (mL)', a: ['5', 'five'] },
    { q: 'Times per day', a: ['3', 'three'] }, { q: 'Hours between doses (roughly)', a: ['8', 'eight'] },
    { q: 'Length of course (days)', a: ['7', 'seven'] }, { q: 'Store in the ______ once mixed', a: ['fridge', 'refrigerator'] },
    { q: 'Stop if he develops a rash, swelling or ______ problems', a: ['breathing'] }, { q: 'Measure with the oral ______', a: ['syringe'] }
  ] });

  L.push({ id: 'l-open-day', title: 'Nursing school open day', zh: '護理學院開放日', part: 'Section 2 筆記', lines: [
    ['A', 'Welcome to the School of Nursing open day. I\'ll briefly explain our part-time Bachelor of Nursing programme for enrolled nurses.'],
    ['A', 'The programme takes three years part-time, with classes on two evenings a week and some Saturdays.'],
    ['A', 'To apply, you need at least two years of work experience as an enrolled nurse and an IELTS score of 6.0 overall, with no band below 5.5.'],
    ['A', 'Clinical placements are arranged in blocks, usually four weeks each year, and we try to match them with your specialty.'],
    ['A', 'Assessment includes essays, a reflective portfolio and a final research proposal. There are no written exams in the final year.'],
    ['A', 'Applications open on the 1st of March. Scholarships are available for students with financial need.'],
    ['A', 'If you have questions, our admissions office is in Room 214, next to the library.']
  ], qs: [
    { q: 'Programme length (years)', a: ['3', 'three'] }, { q: 'Evenings per week', a: ['2', 'two'] },
    { q: 'Work experience required (years)', a: ['2', 'two'] }, { q: 'IELTS overall score required', a: ['6.0', '6'] },
    { q: 'Minimum band in any skill', a: ['5.5'] }, { q: 'Placement length each year (weeks)', a: ['4', 'four'] },
    { q: 'Final assessment: research ______', a: ['proposal'] }, { q: 'Applications open (month)', a: ['march'] },
    { q: 'Admissions office room', a: ['214'] }
  ] });

  L.push({ id: 'l-lecture-sepsis', title: 'Lecture: recognising sepsis in children', zh: '講座：識別兒童敗血症', part: 'Section 4 講座', lines: [
    ['A', 'Today we\'ll discuss sepsis in children, a condition where the body\'s response to infection damages its own organs.'],
    ['A', 'Sepsis can be difficult to spot because early signs are subtle. Children may compensate well, maintaining normal blood pressure until late.'],
    ['A', 'Key warning signs include a high or very low temperature, fast breathing, a fast heart rate, cold hands and feet, and mottled skin.'],
    ['A', 'Changes in behaviour are particularly important. A child who is unusually sleepy, floppy or irritable should be taken seriously.'],
    ['A', 'Parents\' concerns are also a red flag. If a parent says their child is "not themselves", listen carefully.'],
    ['A', 'Treatment should begin quickly: oxygen if needed, blood cultures, and antibiotics within one hour of recognition.'],
    ['A', 'Finally, low blood pressure in a child is a late and ominous sign, so do not wait for it before escalating.']
  ], qs: [
    { q: 'Children may maintain normal blood ______ until late', a: ['pressure'] }, { q: 'Skin may look ______', a: ['mottled'] },
    { q: 'A child who is unusually sleepy, floppy or ______', a: ['irritable'] }, { q: 'Parents may say the child is "not ______"', a: ['themselves'] },
    { q: 'Take blood ______ before antibiotics', a: ['cultures'] }, { q: 'Give antibiotics within ___ hour(s)', a: ['1', 'one'] },
    { q: 'Low blood pressure is a ______ sign', a: ['late'] }
  ] });
})();
