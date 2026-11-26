// IELTS 寫作 Task 1 新題（二）連範文（原創，虛構數據）
(function () {
  const W = NE.ielts.writing, S = NE.ielts.samples;
  const add = (item, note, text) => { if (!W.some(x => x.id === item.id)) W.push(item); if (!S[item.id]) S[item.id] = { note, text }; };
  const T = (id, q, head, rows, note, text) => add({ id, task: 1, type: 'table', q, table: { head, rows } }, note, text);
  const Pr = (id, q, steps, note, text) => add({ id, task: 1, type: 'process', q, steps }, note, text);

  T('t1-flu-month', 'The table below shows the number of children admitted to a hospital with influenza each month from October to March in two winters. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
    ['Month', '2023–24', '2024–25'], [['October', '12', '18'], ['November', '35', '42'], ['December', '80', '65'], ['January', '120', '150'], ['February', '90', '110'], ['March', '30', '45']],
    '月份趨勢：overview 指出兩季都喺一月見頂、第二季大部分月份較多；描述上升、見頂、回落。',
`The table compares the monthly number of children admitted to a hospital with influenza between October and March in the winters of 2023–24 and 2024–25.

Overall, admissions in both winters followed a similar pattern, rising steadily to a peak in January before falling. In most months, admissions were higher in the second winter.

In 2023–24, only 12 children were admitted in October, but this figure rose sharply to 80 by December and peaked at 120 in January. Admissions then declined to 90 in February and dropped to 30 in March.

The 2024–25 season began with slightly more admissions, at 18 in October and 42 in November. Interestingly, December saw fewer admissions than the previous year, at 65. However, January reached a higher peak of 150, and the figures for February and March, at 110 and 45 respectively, were also higher than in the first winter.

In total, the second winter was more severe, particularly from January onwards.`);

  T('t1-diet-countries', 'The table below shows the average daily consumption of sugar (grams) by children in four countries in 2010 and 2025. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
    ['Country', '2010', '2025'], [['Country A', '85', '62'], ['Country B', '70', '68'], ['Country C', '45', '58'], ['Country D', '60', '40']],
    'Table：overview 指出三國下降一國上升（C），A 一直最高但跌幅最大之一；比較排名變化。',
`The table shows the average number of grams of sugar consumed per day by children in four countries in 2010 and 2025.

Overall, sugar consumption among children fell in three of the four countries over the period, with Country C being the only exception. Although Country A had the highest figure in both years, it also saw one of the largest decreases.

In 2010, children in Country A consumed an average of 85 grams of sugar daily, followed by those in Country B at 70 grams and Country D at 60 grams. Children in Country C had the lowest intake, at 45 grams.

By 2025, consumption in Country A had fallen by 23 grams to 62 grams, while Country D saw a similar drop of 20 grams, to 40 grams, making it the lowest of the four. The figure for Country B remained almost unchanged, at 68 grams, which meant it overtook Country A as the highest.

In contrast, sugar consumption in Country C rose by 13 grams to 58 grams, the only increase among the four countries.`);

  T('t1-elderly-care', 'The table below shows where people aged 80 and over lived in one city in 2005 and 2025 (percentage). Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
    ['Living arrangement', '2005', '2025'], [['With family', '58', '41'], ['Alone', '12', '22'], ['With spouse only', '15', '20'], ['Residential care home', '15', '17']],
    'Table：overview 指出同家人住大幅下降、獨居幾乎倍增；其他輕微上升。',
`The table shows the living arrangements of people aged 80 and above in a city in 2005 and 2025.

Overall, the proportion of very old people living with their families declined significantly, while the percentage living alone almost doubled. Living with a spouse only and in care homes both became slightly more common.

In 2005, more than half of people aged 80 and over (58%) lived with their families. Fifteen percent lived with only their husband or wife, the same proportion as those in residential care homes, while 12% lived alone.

By 2025, the share living with family had fallen by 17 percentage points to 41%, although this remained the most common arrangement. The most notable increase was in the proportion living alone, which rose to 22%. The figures for those living with a spouse only and in care homes increased modestly, to 20% and 17% respectively.

These changes suggest that more older people were living independently, which may increase the need for community support services.`);

  T('t1-ielts-scores', 'The table below shows the average IELTS band scores of nursing applicants from one training centre in four skills in 2020 and 2025. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
    ['Skill', '2020', '2025'], [['Listening', '6.5', '7.0'], ['Reading', '6.0', '6.5'], ['Writing', '5.5', '6.0'], ['Speaking', '5.5', '6.5']],
    'Table：overview 指出所有技能都進步、聽力最高、寫作最低、口語進步最大。',
`The table compares the average IELTS band scores achieved by nursing applicants from a training centre in listening, reading, writing and speaking in 2020 and 2025.

Overall, average scores improved in all four skills over the five-year period. Listening was the strongest skill in both years, whereas writing remained the weakest in 2025.

In 2020, applicants scored an average of 6.5 in listening and 6.0 in reading. Their productive skills were weaker, with both writing and speaking averaging 5.5.

By 2025, listening had risen to 7.0, and reading and writing had both increased by half a band, to 6.5 and 6.0 respectively. The most significant improvement was in speaking, which rose by a full band to 6.5, bringing it level with reading.

As a result, writing was the only skill in which the average score remained at 6.0, suggesting that this area may need further attention in training, for example through more practice with academic essay structure.`);

  Pr('t1-wastewater', 'The steps below show how wastewater is treated before being released into the sea. Summarise the information by selecting and reporting the main features.',
    ['Wastewater collected from homes and hospitals', 'Screening removes large objects', 'Grit chamber removes sand and stones', 'Primary settlement tank: solids sink as sludge', 'Biological treatment: bacteria break down organic matter', 'Final settlement tank', 'Disinfection with UV light', 'Treated water released into the sea; sludge processed separately'],
    'Process（人造流程）：overview 指出八步、由收集到排放，分物理處理、生物處理同消毒；用被動式。',
`The diagram illustrates the stages involved in treating wastewater before it is discharged into the sea.

Overall, the process consists of eight stages and can be divided into three main phases: physical treatment, biological treatment and disinfection. In addition, solid waste is separated and processed independently.

First, wastewater is collected from sources such as homes and hospitals. It then passes through screens, which remove large objects, before flowing into a grit chamber, where sand and small stones are removed. Next, the water enters a primary settlement tank, where heavier solids sink to the bottom and form sludge.

In the biological stage, bacteria are used to break down organic matter in the water. The water is then transferred to a final settlement tank, where any remaining particles settle.

Finally, the water is disinfected using ultraviolet light to kill harmful microorganisms. The treated water is then released into the sea, while the sludge collected during the process is treated separately.`);

  Pr('t1-sepsis-pathway', 'The steps below show a hospital pathway for children with suspected sepsis. Summarise the information by selecting and reporting the main features.',
    ['Nurse identifies warning signs (e.g. high PEWS)', 'Escalate to senior doctor within 15 minutes', 'Senior review and decision', 'Blood cultures and lactate taken', 'IV or IO access obtained', 'Antibiotics given within 1 hour', 'Fluid bolus if signs of shock', 'Reassess and consider transfer to intensive care'],
    'Process（臨床流程）：overview 指出八步、重點係時限（15 分鐘、1 小時）；分識別、處理、再評估三階段。',
`The diagram shows the eight-step pathway followed in a hospital when a child is suspected of having sepsis.

Overall, the process moves from recognition to rapid treatment and reassessment, and it places strong emphasis on time limits, particularly for escalation and the administration of antibiotics.

The pathway begins when a nurse identifies warning signs, such as a high paediatric early warning score. The nurse must then escalate the concern to a senior doctor within 15 minutes, after which the child is reviewed and a decision about treatment is made.

Once sepsis is suspected, blood cultures and a lactate sample are taken, and intravenous or intraosseous access is obtained. Antibiotics should be given within one hour of recognition. If the child shows signs of shock, a fluid bolus is also administered.

In the final stage, the child is reassessed, and transfer to an intensive care unit is considered if their condition does not improve.`);
})();
