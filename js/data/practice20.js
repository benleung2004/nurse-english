// IELTS 聽力擴充（二十）：Section 1 同 Section 2 各 3 段（原創）
(function () {
  const L = NE.listening;
  const add = (o) => { if (!L.some(x => x.id === o.id)) L.push(o); };

  add({ id: 'l-s1-gym', title: 'Joining a hospital staff gym', zh: '加入醫院員工健身室', part: 'Section 1 填表', lines: [
    ['A', 'Hello, I\'d like to join the staff gym.'], ['B', 'Sure. Can I have your staff number?'], ['A', 'It\'s N 4 0 2 7 1.'],
    ['B', 'And your department?'], ['A', 'Paediatrics, ward 7B.'],
    ['B', 'Membership is 150 dollars a month, or 1,500 for a full year.'], ['A', 'I\'ll take the yearly option.'],
    ['B', 'The gym is open 24 hours, but classes run from 6 to 9 p.m.'], ['A', 'Do you have yoga?'],
    ['B', 'Yes, on Tuesdays and Saturdays. You need to book through the app.'], ['A', 'Is there a locker?'],
    ['B', 'Yes, bring your own padlock. And please complete a health questionnaire before your first session.']
  ], qs: [
    { q: 'Staff number', a: ['n40271'] }, { q: 'Ward', a: ['7b'] },
    { q: 'Yearly fee (dollars)', a: ['1500', '1,500'] }, { q: 'Classes finish at', a: ['9', '9pm', '9 p.m.', '21:00'] },
    { q: 'Yoga days: Tuesdays and ______', a: ['saturdays', 'saturday'] }, { q: 'Book classes through the ______', a: ['app'] },
    { q: 'Bring your own ______', a: ['padlock'] }, { q: 'Complete a health ______ first', a: ['questionnaire'] }
  ] });

  add({ id: 'l-s1-childcare', title: 'Enquiring about a childcare centre', zh: '查詢幼兒中心', part: 'Section 1 填表', lines: [
    ['A', 'Good morning, Rainbow Childcare Centre.'], ['B', 'Hi, I\'m a nurse working shifts, and I\'m looking for childcare for my daughter.'],
    ['A', 'How old is she?'], ['B', 'Two and a half.'],
    ['A', 'We open from 7 a.m. to 8 p.m., Monday to Saturday.'], ['B', 'That would cover most of my day shifts.'],
    ['A', 'The full-time fee is 6,200 dollars a month, including lunch and two snacks.'], ['B', 'Do you have a waiting list?'],
    ['A', 'Yes, about three months. You\'ll need her birth certificate and vaccination record to register.'],
    ['B', 'Can I visit first?'], ['A', 'Of course. Our open session is every Friday at 10:30.']
  ], qs: [
    { q: 'Child\'s age (years)', a: ['2.5', '2 and a half', 'two and a half'] }, { q: 'Opening time', a: ['7', '7am', '7 a.m.', '7:00'] },
    { q: 'Closing time', a: ['8', '8pm', '8 p.m.', '20:00'] }, { q: 'Open Monday to ______', a: ['saturday'] },
    { q: 'Monthly fee (dollars)', a: ['6200', '6,200'] }, { q: 'Waiting list (months)', a: ['3', 'three'] },
    { q: 'Documents: birth certificate and ______ record', a: ['vaccination'] }, { q: 'Open session day', a: ['friday'] }
  ] });

  add({ id: 'l-s1-course', title: 'Registering for a paediatric life support course', zh: '報讀兒科急救課程', part: 'Section 1 填表', lines: [
    ['A', 'Training department, how can I help?'], ['B', 'I\'d like to register for the paediatric life support course.'],
    ['A', 'The next course is on the 22nd and 23rd of May. It\'s two full days.'], ['B', 'Where is it held?'],
    ['A', 'In the Simulation Centre, Block C, level 4.'], ['B', 'Is there any preparation?'],
    ['A', 'Yes, you must complete an online module before attending. It takes about three hours.'],
    ['B', 'Is there an assessment?'], ['A', 'Yes, a written test and a practical scenario. The pass mark for the written test is 84 percent.'],
    ['B', 'How long is the certificate valid?'], ['A', 'Four years.']
  ], qs: [
    { q: 'Course dates: 22nd and ___ May', a: ['23', '23rd'] }, { q: 'Length (days)', a: ['2', 'two'] },
    { q: 'Location: Simulation Centre, Block ___', a: ['c'] }, { q: 'Level', a: ['4', 'four'] },
    { q: 'Online module length (hours)', a: ['3', 'three'] }, { q: 'Assessment: written test and practical ______', a: ['scenario'] },
    { q: 'Pass mark (%)', a: ['84'] }, { q: 'Certificate valid (years)', a: ['4', 'four'] }
  ] });

  add({ id: 'l-s2-tour', title: 'Tour of a new children\'s hospital', zh: '新兒童醫院導覽', part: 'Section 2 筆記', lines: [
    ['A', 'Welcome to the new children\'s hospital. Let me give you an overview before we walk around.'],
    ['A', 'The emergency department is on the ground floor, with a separate entrance for ambulances at the back.'],
    ['A', 'The outpatient clinics are on the first floor, and there\'s a playground on the roof garden.'],
    ['A', 'Inpatient wards are on floors three to six. Each room has a fold-out bed for one parent.'],
    ['A', 'The hospital school is on the second floor, so children staying more than a week can continue their lessons.'],
    ['A', 'Parents can buy meals in the café next to the main lobby, open until 9 p.m.'],
    ['A', 'Finally, free Wi-Fi is available throughout the building. The password is on the back of your visitor card.']
  ], qs: [
    { q: 'Emergency department floor', a: ['ground'] }, { q: 'Ambulance entrance at the ______', a: ['back'] },
    { q: 'Playground location: roof ______', a: ['garden'] }, { q: 'Inpatient wards: floors three to ___', a: ['6', 'six'] },
    { q: 'Each room has a fold-out ______', a: ['bed'] }, { q: 'Hospital school floor', a: ['2', 'second', '2nd'] },
    { q: 'Café closes at', a: ['9', '9pm', '9 p.m.', '21:00'] }, { q: 'Wi-Fi password is on the visitor ______', a: ['card'] }
  ] });

  add({ id: 'l-s2-radio', title: 'Radio talk: keeping children safe in summer', zh: '電台講座：夏天兒童安全', part: 'Section 2 筆記', lines: [
    ['A', 'Good afternoon. As summer arrives, I\'d like to share some safety tips for families.'],
    ['A', 'First, sun protection. Use sunscreen with SPF 30 or higher, and reapply every two hours.'],
    ['A', 'Children under six months should be kept out of direct sunlight completely.'],
    ['A', 'Second, hydration. Offer water regularly, even if children don\'t ask for it.'],
    ['A', 'Third, water safety. Always supervise children near water; drowning can happen in less than a minute and is often silent.'],
    ['A', 'Fourth, never leave a child in a parked car, even for a short time.'],
    ['A', 'Finally, watch for signs of heat exhaustion, such as headache, tiredness and heavy sweating.']
  ], qs: [
    { q: 'Minimum SPF', a: ['30'] }, { q: 'Reapply every ___ hours', a: ['2', 'two'] },
    { q: 'Keep babies under ___ months out of direct sun', a: ['6', 'six'] }, { q: 'Offer ______ regularly', a: ['water'] },
    { q: 'Drowning can happen in less than a ______', a: ['minute'] }, { q: 'Drowning is often ______', a: ['silent'] },
    { q: 'Never leave a child in a parked ______', a: ['car'] }, { q: 'Signs of heat exhaustion: headache, tiredness and heavy ______', a: ['sweating'] }
  ] });

  add({ id: 'l-s2-volunteers', title: 'Briefing for hospital volunteers', zh: '醫院義工簡介', part: 'Section 2 筆記', lines: [
    ['A', 'Thank you all for volunteering with us. Here\'s some key information.'],
    ['A', 'Volunteers usually work shifts of three hours, at least once a week.'],
    ['A', 'Your main roles are reading to children, helping in the playroom and guiding visitors at the information desk.'],
    ['A', 'Please don\'t help children eat or drink unless a nurse says it\'s safe, as some children have special diets or are fasting.'],
    ['A', 'Always wear your green lanyard so staff can identify you.'],
    ['A', 'If you feel unwell, especially with a cough or fever, please stay at home.'],
    ['A', 'Your coordinator is Mrs Ho, and her office is next to the chapel.']
  ], qs: [
    { q: 'Shift length (hours)', a: ['3', 'three'] }, { q: 'Minimum: once a ______', a: ['week'] },
    { q: 'Roles include reading to children and helping in the ______', a: ['playroom'] }, { q: 'Guide visitors at the information ______', a: ['desk'] },
    { q: 'Don\'t help children eat unless a ______ says it\'s safe', a: ['nurse'] }, { q: 'Lanyard colour', a: ['green'] },
    { q: 'Coordinator\'s name: Mrs ______', a: ['ho'] }, { q: 'Office next to the ______', a: ['chapel'] }
  ] });
})();
