// IELTS 寫作新題（三）連範文（原創）
(function () {
  const W = NE.ielts.writing, S = NE.ielts.samples;
  const add = (item, note, text) => { if (!W.some(x => x.id === item.id)) W.push(item); if (!S[item.id]) S[item.id] = { note, text }; };

  add({ id: 't1-transfusion', task: 1, type: 'process', q: 'The steps below show the process of giving a blood transfusion safely in a hospital. Summarise the information by selecting and reporting the main features.',
    steps: ['Doctor prescribes blood and obtains consent', 'Blood sample taken and labelled at the bedside', 'Laboratory cross-matches the blood', 'Nurse collects the blood from the blood bank', 'Two staff check patient identity and blood details at the bedside', 'Baseline observations recorded', 'Transfusion started; observations repeated at 15 minutes', 'Patient monitored until the transfusion is complete'] },
    'Process：開頭改寫、overview（八步，分準備、核對、輸血監察三階段）、按次序描述，多用被動式同 once / after / following this。',
`The diagram outlines the eight stages involved in safely administering a blood transfusion in a hospital, from the initial prescription to the completion of the transfusion.

Overall, the process can be divided into three main phases: preparation, checking and monitoring. A key feature is that patient identity is confirmed at more than one point to prevent errors.

The process begins when a doctor prescribes the blood and obtains the patient's consent. A blood sample is then taken and labelled at the bedside, after which it is sent to the laboratory, where the blood is cross-matched to ensure compatibility.

Once the blood is ready, a nurse collects it from the blood bank. Before it is given, two members of staff check the patient's identity and the details on the blood bag together at the bedside. Baseline observations, such as temperature, pulse and blood pressure, are also recorded at this stage.

Finally, the transfusion is started, and observations are repeated after 15 minutes, since serious reactions often occur early. The patient continues to be monitored until the transfusion has been completed.`);

  add({ id: 't1-childbmi', task: 1, type: 'table', q: 'The table below shows the percentage of children who were overweight in three age groups in one city in 2005, 2015 and 2025. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
    table: { head: ['Age group', '2005', '2015', '2025'], rows: [['6–8', '12', '15', '17'], ['9–11', '15', '19', '22'], ['12–14', '14', '18', '24']] } },
    'Table（三個年份）：overview 指出所有組別上升、12–14 歲升幅最大並成為最高；按時間順序描述變化。',
`The table shows the proportion of children who were overweight in three age groups in a city in 2005, 2015 and 2025.

Overall, the percentage of overweight children rose steadily in all three age groups over the twenty-year period. The oldest group, aged 12 to 14, experienced the largest increase and had the highest rate by 2025.

In 2005, children aged 9 to 11 had the highest rate of overweight, at 15%, slightly above the 14% recorded for those aged 12 to 14. The youngest group, aged 6 to 8, had the lowest figure, at 12%.

Over the following decade, all three groups saw increases of three to four percentage points. By 2015, the figure for 9- to 11-year-olds had reached 19%, while it rose to 18% for the oldest group and 15% for the youngest.

Between 2015 and 2025, the trend continued, but the oldest group grew most rapidly, climbing by six points to 24% and overtaking the 9–11 group, which reached 22%. The youngest children's rate increased more modestly to 17%. In total, the proportion of overweight children aged 12 to 14 rose by ten percentage points over the period.`);

  add({ id: 't2-vaccinemandatory', task: 2, type: 'opinion', q: 'Some people believe that vaccinations for children should be compulsory. To what extent do you agree or disagree?' },
    'Opinion（大致同意）：群體免疫、保護唔可以打針嘅人；但個人選擇同信任；建議：學校入學要求 + 醫療豁免 + 教育。',
`Vaccines have prevented millions of deaths from diseases such as measles, polio and diphtheria. Some people argue that childhood vaccinations should therefore be compulsory. I largely agree with this view, although I believe compulsory policies must be combined with education and reasonable exceptions.

The strongest argument for compulsory vaccination is the protection of public health. When a high proportion of the population is vaccinated, diseases cannot spread easily, a concept known as herd immunity. This protects those who cannot be vaccinated, such as newborn babies, children undergoing cancer treatment and people with certain immune conditions. If vaccination rates fall, diseases that had almost disappeared can return. Measles, for instance, is highly contagious, and outbreaks have occurred in several countries where vaccination rates declined.

Compulsory vaccination can also be seen as protecting children's rights. Young children cannot make decisions for themselves, and they deserve protection from serious, preventable diseases regardless of their parents' beliefs.

However, there are concerns about making vaccination mandatory. Some parents feel that it removes their right to make medical decisions for their children, and forcing people may increase distrust of health authorities. A small number of children also have genuine medical reasons for not receiving certain vaccines.

In my view, the most effective approach is to require vaccination for school or kindergarten entry, with exemptions only for medical reasons. At the same time, health professionals, including nurses, should take time to answer parents' questions honestly and explain the evidence, as many parents who hesitate simply need clear information and reassurance.

In conclusion, compulsory childhood vaccination is justified because it protects both individual children and the wider community, provided that it is supported by education and allows for medical exemptions.`);

  add({ id: 't2-overtime', task: 2, type: 'problem', q: 'In many hospitals, staff regularly work overtime. What problems does this cause, and what solutions can you suggest?' },
    'Problem–solution：問題（疲勞錯誤、倦怠、離職、家庭）；方法（安全人手、彈性更、科技減文書、支援）。',
`In many hospitals around the world, doctors and nurses frequently work beyond their scheduled hours, often because of staff shortages and high patient demand. This essay will examine the problems caused by regular overtime and suggest some possible solutions.

The most serious problem is the impact on patient safety. Staff who work long hours become fatigued, which affects concentration, memory and decision-making. Research has linked long shifts to a higher risk of medication errors and missed signs of patient deterioration. A second problem is the effect on staff wellbeing. Regular overtime leaves little time for rest, exercise and family life, contributing to stress, burnout and health problems. Over time, this can cause experienced staff to reduce their hours or leave the profession altogether, which worsens shortages and creates a vicious cycle. Finally, overtime is expensive for hospitals, which may pay higher rates or rely on temporary agency staff.

Several measures could help to address these problems. The most important is to ensure safe staffing levels by recruiting and retaining more staff, for example through better pay, training opportunities and flexible contracts that attract part-time workers. Hospitals could also review how work is organised. Reducing unnecessary paperwork through better electronic systems, and making use of healthcare assistants for non-clinical tasks, would allow nurses to finish their shifts on time. In addition, managers should monitor overtime and ensure that staff take their breaks. Providing support services, such as counselling and rest areas, can help staff cope with pressure.

In conclusion, regular overtime in hospitals threatens patient safety, damages staff wellbeing and increases costs. Improving staffing levels, reorganising work and supporting staff are essential steps to solve this problem.`);

  add({ id: 't2-antibiotics', task: 2, type: 'problem', q: 'Antibiotic resistance is becoming a serious global problem. What are the causes, and what measures can be taken to tackle it?' },
    'Problem–solution：原因（過度處方、病人唔食完、農業使用、新藥少）；方法（管理計劃、教育、感染控制、研發）。',
`Antibiotics have saved countless lives since their discovery, but bacteria are increasingly becoming resistant to them. This threatens to make common infections and routine surgery far more dangerous. This essay will discuss the main causes of antibiotic resistance and suggest ways to address it.

One major cause is the overuse of antibiotics in healthcare. In many places, antibiotics are prescribed for conditions such as colds and sore throats, which are usually caused by viruses and do not respond to antibiotics. Patients sometimes expect or request them, and busy doctors may feel pressure to prescribe. A second cause is incorrect use by patients, who may stop taking their medicine as soon as they feel better or keep leftover tablets for later. Both practices allow resistant bacteria to survive and spread. Another significant factor is the widespread use of antibiotics in agriculture, where they are sometimes given to healthy animals to promote growth. Finally, very few new antibiotics have been developed in recent decades, partly because they are less profitable for pharmaceutical companies.

Several measures can help to tackle this problem. Hospitals and clinics should run antimicrobial stewardship programmes to ensure antibiotics are prescribed only when necessary, at the right dose and for the right duration. Public education campaigns can explain why antibiotics do not work against viruses and why courses should be completed as instructed. Strong infection control, including hand hygiene and vaccination, reduces the number of infections needing treatment. Governments should also restrict the use of antibiotics in farming and provide incentives for research into new drugs.

In conclusion, antibiotic resistance is caused by overuse and misuse in medicine and agriculture, together with a lack of new drugs. Through careful prescribing, public education, infection prevention and investment in research, its impact can be significantly reduced.`);

  add({ id: 't2-elderlytech', task: 2, type: 'advdis', q: 'Technology such as robots and sensors is increasingly used to care for older people. Do the advantages of this outweigh the disadvantages?' },
    'Advantages vs disadvantages：安全監察、減輕照顧者、獨立生活 vs 缺乏人情、私隱、費用；結論：作為輔助利多於弊。',
`As populations age and the number of carers fails to keep up, technology is increasingly being used to support older people. Examples include sensors that detect falls, medication reminders and even robots that provide companionship. While this raises some concerns, I believe the advantages outweigh the disadvantages, as long as technology supports rather than replaces human care.

The main advantage is improved safety. Sensors and wearable alarms can detect falls or unusual inactivity and alert family members or emergency services immediately. This is particularly valuable for older people who live alone, as a fall that goes unnoticed for hours can have serious consequences. Technology can also help older people remain independent in their own homes for longer, for example through smart pill dispensers that remind them to take medicines at the correct times. In addition, it can reduce the burden on family carers and care staff, allowing them to focus on tasks that require personal attention.

However, there are disadvantages. The most significant is the risk of reduced human contact. Loneliness is already a major problem among older people, and if technology is used as a substitute for visits from family or carers, it could make this worse. A robot cannot offer the same empathy and understanding as a person. Privacy is another concern, since cameras and sensors in the home collect sensitive information. Furthermore, the cost of devices and the need for digital skills may prevent some older people from benefiting.

In my view, these problems can be managed if technology is introduced carefully, with older people's consent, and combined with regular human contact. Governments could also subsidise devices for those on low incomes.

In conclusion, although technology in elderly care raises issues of loneliness, privacy and cost, its benefits for safety, independence and supporting carers are greater, provided it complements rather than replaces human care.`);
})();
