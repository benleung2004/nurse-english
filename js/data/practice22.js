// IELTS 聽力擴充（二十二）：Section 3 兩段、Section 4 三段（原創）
(function () {
  const L = NE.listening;
  const add = (o) => { if (!L.some(x => x.id === o.id)) L.push(o); };

  add({ id: 'l-s3-literature', title: 'Planning a literature review', zh: '計劃文獻回顧', part: 'Section 3 對話', lines: [
    ['A', 'Have you started searching for articles on family-centred care?'], ['B', 'Yes, I used CINAHL and PubMed. I found about 300 results.'],
    ['A', 'That\'s too many. Did you use inclusion criteria?'], ['B', 'Not yet. I think we should only include studies from the last ten years.'],
    ['A', 'Agreed, and only studies in children\'s hospitals. Adult wards are quite different.'], ['B', 'What about language?'],
    ['A', 'English only, because we can\'t translate others accurately.'], ['B', 'After screening the titles, I\'d guess we\'ll have around 25 papers.'],
    ['A', 'Then we\'ll appraise them using the CASP checklist.'], ['B', 'Shall we each take half?'],
    ['A', 'Yes, and we\'ll meet again in a fortnight to compare notes.']
  ], qs: [
    { q: 'Topic: family-______ care', a: ['centred', 'centered'] }, { q: 'Number of initial results', a: ['300'] },
    { q: 'Include studies from the last ___ years', a: ['10', 'ten'] }, { q: 'Setting: children\'s ______', a: ['hospitals', 'hospital'] },
    { q: 'Language: ______ only', a: ['english'] }, { q: 'Expected number of papers', a: ['25'] },
    { q: 'Appraisal tool: ______ checklist', a: ['casp'] }, { q: 'Meet again in a ______', a: ['fortnight'] }
  ] });

  add({ id: 'l-s3-mentoring', title: 'Mentor meeting with a student nurse', zh: '導師同護理學生會面', part: 'Section 3 對話', lines: [
    ['A', 'How are you finding the paediatric placement so far?'], ['B', 'I enjoy it, but drug calculations make me nervous.'],
    ['A', 'That\'s very common. Let\'s set that as a learning goal. Practise ten calculations a day using the workbook.'],
    ['B', 'Okay. Should I ask to give medicines under supervision?'], ['A', 'Yes. Start with oral medicines, then move on to IV once you\'re confident.'],
    ['B', 'I also want to improve my communication with parents.'], ['A', 'Good. Try leading the discharge explanation for one family this week, and I\'ll observe.'],
    ['A', 'Your mid-placement review is on the 12th. Bring your reflective log.'], ['B', 'How many reflections do I need?'],
    ['A', 'At least three by then.']
  ], qs: [
    { q: 'Student\'s worry: drug ______', a: ['calculations'] }, { q: 'Practise how many calculations a day?', a: ['10', 'ten'] },
    { q: 'Start with ______ medicines', a: ['oral'] }, { q: 'Communication goal: lead a discharge ______', a: ['explanation'] },
    { q: 'Mid-placement review date: the ___', a: ['12', '12th'] }, { q: 'Bring your reflective ______', a: ['log'] },
    { q: 'Minimum reflections', a: ['3', 'three'] }
  ] });

  add({ id: 'l-lecture-dev', title: 'Lecture: child development and hospital care', zh: '講座：兒童發展與住院護理', part: 'Section 4 講座', lines: [
    ['A', 'Today we\'ll consider how understanding child development improves hospital care.'],
    ['A', 'Infants under one year depend on routine and parental closeness, so keeping feeding and sleep routines is important.'],
    ['A', 'Toddlers often experience separation anxiety. Allowing parents to stay and bringing familiar objects can reduce distress.'],
    ['A', 'Preschool children may believe illness is a punishment. Simple, reassuring explanations are essential.'],
    ['A', 'School-age children want to understand what is happening and benefit from being given small responsibilities, like holding the plaster.'],
    ['A', 'Adolescents value privacy and independence. Offer them time alone with staff and involve them in decisions.'],
    ['A', 'In summary, adapting communication to developmental stage builds trust and cooperation.']
  ], qs: [
    { q: 'Infants depend on routine and parental ______', a: ['closeness'] }, { q: 'Toddlers often experience ______ anxiety', a: ['separation'] },
    { q: 'Bring familiar ______', a: ['objects'] }, { q: 'Preschoolers may see illness as a ______', a: ['punishment'] },
    { q: 'School-age children benefit from small ______', a: ['responsibilities'] }, { q: 'Adolescents value privacy and ______', a: ['independence'] },
    { q: 'Adapting communication builds trust and ______', a: ['cooperation'] }
  ] });

  add({ id: 'l-lecture-meds', title: 'Lecture: medication safety in children', zh: '講座：兒童用藥安全', part: 'Section 4 講座', lines: [
    ['A', 'Medication errors are more common in children than in adults, mainly because doses are based on weight.'],
    ['A', 'A tenfold error, often caused by a misplaced decimal point, can be fatal. Always write "0.5 mg", never ".5 mg".'],
    ['A', 'Children\'s medicines often come in different strengths, so check the concentration carefully.'],
    ['A', 'Use oral syringes for liquid medicines, and never use intravenous syringes for oral doses.'],
    ['A', 'Independent double-checking by two nurses is recommended for high-risk medicines, such as insulin and opioids.'],
    ['A', 'Involve parents. They often notice if a medicine looks different from usual.'],
    ['A', 'Finally, report all errors and near misses, as this helps the whole system learn.']
  ], qs: [
    { q: 'Doses in children are based on ______', a: ['weight'] }, { q: 'A misplaced decimal point can cause a ______ error', a: ['tenfold'] },
    { q: 'Always write a ______ before the decimal point', a: ['zero', '0'] }, { q: 'Check the ______ carefully', a: ['concentration', 'strength'] },
    { q: 'Use ______ syringes for liquid medicines', a: ['oral'] }, { q: 'High-risk medicine example', a: ['insulin', 'opioids'] },
    { q: 'Report all errors and near ______', a: ['misses'] }
  ] });

  add({ id: 'l-lecture-ipc', title: 'Lecture: the chain of infection', zh: '講座：感染鏈', part: 'Section 4 講座', lines: [
    ['A', 'Infection control is based on understanding the chain of infection, which has six links.'],
    ['A', 'The first is the infectious agent, such as a bacterium or virus.'],
    ['A', 'The second is the reservoir, where the organism lives, for example a person, water or equipment.'],
    ['A', 'Next comes the portal of exit, such as coughing, and then the mode of transmission — contact, droplet or airborne.'],
    ['A', 'The fifth link is the portal of entry, such as a wound or a cannula, and the last is the susceptible host.'],
    ['A', 'Breaking any link prevents infection. Hand hygiene, for instance, interrupts transmission.'],
    ['A', 'Vaccination strengthens the host, while cleaning equipment removes the reservoir.']
  ], qs: [
    { q: 'Number of links in the chain', a: ['6', 'six'] }, { q: 'First link: infectious ______', a: ['agent'] },
    { q: 'Where the organism lives: the ______', a: ['reservoir'] }, { q: 'Transmission modes: contact, droplet or ______', a: ['airborne'] },
    { q: 'Portal of entry example: a wound or a ______', a: ['cannula'] }, { q: 'Last link: the susceptible ______', a: ['host'] },
    { q: 'Hand hygiene interrupts ______', a: ['transmission'] }
  ] });
})();
