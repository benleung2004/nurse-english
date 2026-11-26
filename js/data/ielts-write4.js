// IELTS 寫作 Task 1 新題（表格同流程圖）連範文（原創，虛構數據）
(function () {
  const W = NE.ielts.writing, S = NE.ielts.samples;
  const add = (item, note, text) => { if (!W.some(x => x.id === item.id)) W.push(item); if (!S[item.id]) S[item.id] = { note, text }; };
  const T = (id, q, head, rows, note, text) => add({ id, task: 1, type: 'table', q, table: { head, rows } }, note, text);
  const Pr = (id, q, steps, note, text) => add({ id, task: 1, type: 'process', q, steps }, note, text);

  T('t1-nursegrads', 'The table below shows the number of nursing graduates (in hundreds) from three types of programmes in one region between 2010 and 2025. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
    ['Programme', '2010', '2015', '2020', '2025'], [['Degree (RN)', '8', '11', '14', '18'], ['Higher diploma (EN)', '12', '10', '9', '7'], ['Part-time top-up degree', '2', '4', '7', '10']],
    '多年份趨勢：overview 指出學位同兼讀升級課程上升、高級文憑下降；用 rose steadily / declined gradually / overtook。',
`The table illustrates how many people graduated from three kinds of nursing programmes in a region every five years from 2010 to 2025.

Overall, the number of graduates from degree programmes and part-time top-up degrees increased steadily, while graduates from higher diploma programmes declined. By the end of the period, degree programmes had become the largest source of new nurses.

In 2010, the higher diploma was the most common route, with 1,200 graduates, compared with 800 from degree programmes and only 200 from part-time top-up degrees. Over the following fifteen years, however, the number of diploma graduates fell gradually, reaching just 700 in 2025.

In contrast, degree graduates rose continuously, overtaking diploma graduates by 2015 and more than doubling to 1,800 by 2025. The most rapid relative growth was seen in part-time top-up degrees, whose graduate numbers increased fivefold, from 200 to 1,000, overtaking the diploma route in the final year.

These figures suggest a clear shift towards degree-level nursing education in the region.`);

  T('t1-wait-clinic', 'The table below shows the average waiting time (in weeks) for a first appointment at five specialist outpatient clinics in 2020 and 2025. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
    ['Clinic', '2020', '2025'], [['Orthopaedics', '60', '85'], ['Eye', '45', '70'], ['Paediatrics', '20', '18'], ['Cardiology', '30', '38'], ['Dermatology', '40', '55']],
    'Table：overview 指出大部分增加、骨科最長、兒科係唯一下降；用 rose by X weeks / the only exception。',
`The table compares the average number of weeks patients waited for their first appointment at five specialist clinics in 2020 and 2025.

Overall, waiting times increased at four of the five clinics, with orthopaedics having the longest wait in both years. Paediatrics was the only clinic where waiting times fell, and it also had the shortest waits.

In 2020, patients waited an average of 60 weeks for orthopaedics, followed by 45 weeks for the eye clinic and 40 weeks for dermatology. By 2025, these figures had risen considerably, to 85, 70 and 55 weeks respectively, meaning that the orthopaedic wait had increased by 25 weeks.

Cardiology saw a smaller rise, from 30 to 38 weeks. In contrast, the waiting time for paediatrics dropped slightly from 20 weeks to 18 weeks, making it by far the shortest wait in 2025.

In summary, most specialist services became harder to access over the five years, with the notable exception of children's clinics.`);

  T('t1-screen-age', 'The table below shows the average daily screen time (hours) of children in four age groups on weekdays and at weekends in 2025. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
    ['Age group', 'Weekdays', 'Weekends'], [['3–5', '1.5', '2.5'], ['6–9', '2.2', '3.8'], ['10–13', '3.4', '5.1'], ['14–17', '4.6', '6.3']],
    'Table（兩類比較）：overview 指出年紀越大越多、週末一定多過平日；按年齡由細到大寫。',
`The table shows how many hours per day children in four age groups spent using screens on weekdays and at weekends in 2025.

Overall, screen time increased with age, and children in every age group spent more time on screens at weekends than on weekdays. Teenagers aged 14 to 17 had the highest figures on both types of day.

The youngest children, aged 3 to 5, used screens for an average of 1.5 hours on weekdays, rising to 2.5 hours at weekends. For those aged 6 to 9, the figures were 2.2 and 3.8 hours respectively.

Screen use was considerably higher among older children. Children aged 10 to 13 averaged 3.4 hours on weekdays and just over five hours at weekends. The oldest group spent 4.6 hours a day on screens during the week and 6.3 hours at weekends, which is more than double the weekend figure for the youngest group.

The gap between weekday and weekend use was smallest for the youngest children, at one hour, and largest for the 10–13 group, at 1.7 hours.`);

  T('t1-energy', 'The table below shows the percentage of electricity generated from different sources in one country in 2005 and 2025. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
    ['Source', '2005', '2025'], [['Coal', '55', '25'], ['Natural gas', '25', '38'], ['Nuclear', '15', '17'], ['Renewables', '5', '20']],
    'Table：overview 指出煤大幅下降、天然氣變最多、再生能源增四倍；用 a dramatic fall / quadrupled。',
`The table illustrates the proportion of a country's electricity that came from four sources in 2005 and 2025.

Overall, there was a significant move away from coal towards natural gas and renewable energy over the twenty-year period. While coal was the dominant source in 2005, natural gas had become the largest by 2025.

In 2005, more than half of the country's electricity (55%) was generated from coal. Natural gas accounted for a quarter, nuclear power for 15%, and renewables for only 5%.

By 2025, the share of coal had more than halved, falling to 25%. In contrast, natural gas rose to 38%, making it the leading source. The most dramatic change was seen in renewables, whose share quadrupled to 20%, almost equal to that of coal. Nuclear power remained relatively stable, increasing only slightly to 17%.

These figures suggest that the country made considerable progress in reducing its dependence on coal.`);

  T('t1-hospital-staff', 'The table below shows the number of staff (full-time equivalent) in four groups at a children\'s hospital in 2015 and 2025. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
    ['Staff group', '2015', '2025'], [['Nurses', '620', '710'], ['Doctors', '180', '230'], ['Allied health', '90', '150'], ['Support staff', '310', '260']],
    'Table：overview 指出護士人數最多、醫生同專職醫療上升、支援人員下降；計算增幅用 by X / X%。',
`The table compares the number of full-time equivalent staff in four occupational groups at a children's hospital in 2015 and 2025.

Overall, nurses made up the largest group in both years. The numbers of nurses, doctors and allied health professionals all increased, whereas support staff numbers declined.

In 2015, the hospital employed 620 nurses, which was double the number of support staff (310). There were 180 doctors and only 90 allied health professionals, such as physiotherapists and dietitians.

By 2025, the nursing workforce had grown by 90 to 710. Doctor numbers rose by 50 to 230. The most significant proportional increase occurred among allied health professionals, whose numbers rose by two-thirds, from 90 to 150.

In contrast, the number of support staff fell by 50 to 260, which may reflect changes in how services such as cleaning and catering were provided.

In summary, the hospital expanded its clinical workforce over the decade while reducing support roles.`);

  T('t1-sport', 'The table below shows the percentage of adults in a city who took part in different types of physical activity at least once a week in 2015 and 2025. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
    ['Activity', '2015', '2025'], [['Walking / hiking', '40', '52'], ['Gym', '15', '24'], ['Swimming', '18', '14'], ['Team sports', '12', '9'], ['Cycling', '6', '11']],
    'Table：overview 指出行山最受歡迎同增加、健身室同單車上升、游水同團隊運動下降。',
`The table shows the proportion of adults in a city who participated in five types of physical activity at least weekly in 2015 and 2025.

Overall, walking and hiking was the most popular activity in both years and saw a notable increase. Participation in gym exercise and cycling also grew, whereas swimming and team sports became less popular.

In 2015, 40% of adults walked or hiked weekly, far more than any other activity. Swimming was the second most common, at 18%, followed by gym exercise at 15% and team sports at 12%. Cycling was the least popular, at just 6%.

By 2025, the proportion of walkers and hikers had risen to over half of adults (52%). Gym use increased to 24%, overtaking swimming, which fell to 14%. Cycling almost doubled to 11%, while team sports declined slightly to 9%, making it the least common activity by the end of the period.

These changes suggest a shift towards individual and flexible forms of exercise.`);

  Pr('t1-vaccine-dev', 'The steps below show how a new vaccine is developed and approved. Summarise the information by selecting and reporting the main features.',
    ['Laboratory research', 'Animal testing', 'Phase 1 trial: small group of healthy volunteers (safety)', 'Phase 2 trial: hundreds of people (dose and side effects)', 'Phase 3 trial: thousands of people (effectiveness)', 'Review by regulators', 'Approval and manufacture', 'Ongoing safety monitoring'],
    'Process：overview 指出八個階段，由實驗室到上市後監察；臨床試驗分三期、人數逐步增加。',
`The diagram outlines the eight stages involved in developing and approving a new vaccine, from initial laboratory research to monitoring after it has been introduced.

Overall, the process is lengthy and highly structured, with three phases of human trials in which the number of participants increases at each stage. Even after approval, the vaccine continues to be monitored.

The process starts with research in the laboratory, after which the vaccine is tested on animals. If these tests are successful, human trials begin. In phase 1, the vaccine is given to a small group of healthy volunteers, mainly to check its safety. Phase 2 involves hundreds of people and focuses on finding the right dose and identifying side effects. In phase 3, thousands of participants are involved, in order to confirm how effective the vaccine is.

Once the trials are complete, the results are reviewed by regulators. If the vaccine is approved, it is manufactured and distributed. Finally, its safety continues to be monitored on an ongoing basis.`);

  Pr('t1-handover-process', 'The steps below show the process of a nursing shift handover on a hospital ward. Summarise the information by selecting and reporting the main features.',
    ['Outgoing nurse updates patient notes', 'Team safety huddle at the nurses\' station', 'Bedside handover using ISBAR for each patient', 'Check equipment and infusion pumps together', 'Incoming nurse asks questions and confirms plan', 'Responsibility formally transferred', 'Incoming nurse reviews high-risk patients first'],
    'Process：overview 指出七步，分準備、床邊交更、交接後三階段；強調溝通同確認。',
`The diagram illustrates the seven stages of a nursing shift handover on a hospital ward.

Overall, the process can be divided into three main phases: preparation, bedside handover and the period after responsibility has been transferred. Communication and checking are emphasised throughout.

In preparation for handover, the outgoing nurse first updates the patients' notes. This is followed by a brief safety huddle for the whole team at the nurses' station, where key risks are discussed.

The main part of the process takes place at the bedside. For each patient, the outgoing nurse gives a structured handover using the ISBAR format, and both nurses check equipment such as infusion pumps together. The incoming nurse then has the opportunity to ask questions and confirm the plan of care.

Once this has been completed, responsibility for the patients is formally transferred. Finally, the incoming nurse prioritises their work by reviewing the patients who are at the highest risk first.`);
})();
