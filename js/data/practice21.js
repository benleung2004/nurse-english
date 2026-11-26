// IELTS 閱讀擴充（二十一）：4 篇（原創練習材料）
(function () {
  const R = NE.reading;
  const add = (o) => { if (!R.some(x => x.id === o.id)) R.push(o); };

  add({ id: 'r-myopia', title: 'The Myopia Epidemic', zh: '近視潮', mins: 18, paras: [
    'Short-sightedness, or myopia, has become extremely common among children in East Asian cities. In some places, the majority of secondary school students are myopic, compared with a much smaller proportion a few decades ago.',
    'Genetics plays a role, as children with short-sighted parents are more likely to develop the condition. However, the rapid increase in recent generations suggests that environmental factors are more important.',
    'One leading theory is that children spend too little time outdoors. Studies in several countries have found that children who spend more time outside are less likely to become short-sighted, possibly because bright daylight affects how the eye grows.',
    'Intensive close work, such as reading and using screens for long periods, may also contribute. Some schools have introduced extra outdoor breaks, and eye specialists recommend the "20-20-20 rule": every 20 minutes, look at something 20 feet away for 20 seconds.',
    'Early detection is important because high myopia increases the risk of serious eye problems later in life. Regular eye checks, special lenses and eye drops are among the options used to slow its progression in children.'
  ], qs: [
    { t: 'tfng', q: 'Myopia is common among East Asian schoolchildren.', a: 'T', why: 'A 段：extremely common。' },
    { t: 'tfng', q: 'Genetics is the only cause of myopia.', a: 'F', why: 'B 段：environmental factors are more important。' },
    { t: 'tfng', q: 'Time outdoors may reduce the risk of myopia.', a: 'T', why: 'C 段：less likely to become short-sighted。' },
    { t: 'tfng', q: 'Eye drops completely cure myopia.', a: 'NG', why: '文章只講減慢進展。' },
    { t: 'gap', q: 'The ______ rule involves looking 20 feet away every 20 minutes.', a: ['20-20-20'], why: 'D 段："20-20-20 rule"。' },
    { t: 'gap', q: 'Reading and screen use are examples of close ______.', a: ['work'], why: 'D 段：Intensive close work。' },
    { t: 'mcq', q: 'Why is early detection important?', c: ['Glasses are cheaper', 'High myopia increases the risk of serious eye problems', 'Children like eye tests', 'It is required by law'], a: 1, why: 'E 段：increases the risk of serious eye problems。' }
  ] });

  add({ id: 'r-burnout', title: 'Understanding Burnout', zh: '認識職業倦怠', mins: 18, paras: [
    'Burnout is a state of physical and emotional exhaustion caused by long-term work stress. It is often described as having three main features: exhaustion, a sense of detachment or cynicism towards work, and reduced feelings of achievement.',
    'Healthcare workers are particularly at risk. Long hours, heavy workloads, emotional demands and frequent exposure to suffering can gradually wear people down. Surveys during and after the pandemic reported high levels of burnout among nurses in many countries.',
    'Burnout affects not only individuals but also patient care. Exhausted staff may be more likely to make errors, have less patience with patients and take more sick leave. Some leave the profession altogether, increasing pressure on those who remain.',
    'Individual strategies, such as regular exercise, adequate sleep and mindfulness, can help. However, researchers emphasise that burnout is mainly an organisational problem. Safe staffing, fair rosters, supportive leadership and opportunities for staff to have a say in decisions are considered the most effective solutions.',
    'Recognising early warning signs is important. These include feeling constantly tired, dreading work, becoming irritable with colleagues and losing interest in activities outside work.'
  ], qs: [
    { t: 'tfng', q: 'Burnout has three main features.', a: 'T', why: 'A 段：three main features。' },
    { t: 'tfng', q: 'Burnout has no effect on patient care.', a: 'F', why: 'C 段：affects … patient care。' },
    { t: 'tfng', q: 'Researchers say burnout is mainly an individual problem.', a: 'F', why: 'D 段：mainly an organisational problem。' },
    { t: 'tfng', q: 'Burnout is more common in doctors than nurses.', a: 'NG', why: '文章冇比較。' },
    { t: 'gap', q: 'A sense of detachment towards work is also called ______.', a: ['cynicism'], why: 'A 段：detachment or cynicism。' },
    { t: 'gap', q: 'One individual strategy is ______.', a: ['mindfulness', 'exercise', 'sleep'], why: 'D 段：exercise, adequate sleep and mindfulness。' },
    { t: 'mcq', q: 'Which is an early warning sign of burnout?', c: ['Feeling excited about work', 'Dreading work', 'Sleeping well', 'More hobbies'], a: 1, why: 'E 段：dreading work。' }
  ] });

  add({ id: 'r-microloans', title: 'Small Loans, Big Changes?', zh: '小額貸款', mins: 18, paras: [
    'Microfinance involves providing small loans to people who cannot access traditional banking, often in low-income countries. The idea became popular in the late twentieth century as a way to help people start small businesses and escape poverty.',
    'Early reports were very positive. Many borrowers, especially women, used loans to buy livestock, sewing machines or stock for small shops, and repayment rates were high.',
    'However, later research produced more mixed results. Large studies found that while microloans gave some families more flexibility, they did not, on average, lead to dramatic increases in income. In some places, borrowers took several loans and fell into debt.',
    'Supporters argue that microfinance works best when combined with other services, such as savings accounts, business training and health insurance. A sudden illness in the family, for example, can force borrowers to spend their loan on medical bills.',
    'Today, many experts see microfinance as a useful tool rather than a complete solution to poverty, and they emphasise the importance of fair interest rates and protecting borrowers.'
  ], qs: [
    { t: 'tfng', q: 'Microfinance provides small loans to people without access to banks.', a: 'T', why: 'A 段。' },
    { t: 'tfng', q: 'Later studies showed large income increases on average.', a: 'F', why: 'C 段：did not … lead to dramatic increases。' },
    { t: 'tfng', q: 'Some borrowers fell into debt.', a: 'T', why: 'C 段：fell into debt。' },
    { t: 'gap', q: 'Many early borrowers were ______.', a: ['women'], why: 'B 段：especially women。' },
    { t: 'gap', q: 'Illness may force borrowers to spend loans on medical ______.', a: ['bills'], why: 'D 段：medical bills。' },
    { t: 'gap', q: 'Experts emphasise fair ______ rates.', a: ['interest'], why: 'E 段：fair interest rates。' },
    { t: 'mcq', q: 'How do many experts now view microfinance?', c: ['A complete solution', 'A useful tool but not a complete solution', 'Completely useless', 'Only for rich countries'], a: 1, why: 'E 段：useful tool rather than a complete solution。' }
  ] });

  add({ id: 'r-simulation', title: 'Learning Through Simulation', zh: '模擬訓練', mins: 18, paras: [
    'Simulation has become a central part of nursing education. Using high-tech mannequins that can breathe, speak and show changes in vital signs, students practise responding to emergencies in a safe environment.',
    'The main advantage is that mistakes can be made without harming real patients. Students can repeat scenarios, such as a child having a seizure or a patient going into shock, until they feel confident.',
    'Simulation also develops teamwork and communication. Many scenarios involve students from different professions, such as nursing and medicine, working together, which reflects real clinical practice.',
    'A key part of simulation is the debrief afterwards. Facilitators guide participants to reflect on what happened, what went well and what could be improved. Research suggests that much of the learning takes place during this discussion.',
    'Simulation equipment is expensive, and some students find it stressful to be observed. Nevertheless, evidence indicates that simulation improves skills and confidence, and some regulators allow a proportion of clinical placement hours to be replaced by simulation.'
  ], qs: [
    { t: 'tfng', q: 'Simulation mannequins can show changes in vital signs.', a: 'T', why: 'A 段。' },
    { t: 'tfng', q: 'Mistakes in simulation harm real patients.', a: 'F', why: 'B 段：without harming real patients。' },
    { t: 'tfng', q: 'All regulators allow simulation to replace placements completely.', a: 'F', why: 'E 段：some … a proportion。' },
    { t: 'gap', q: 'Discussion after a scenario is called the ______.', a: ['debrief'], why: 'D 段：debrief。' },
    { t: 'gap', q: 'Some students find being ______ stressful.', a: ['observed'], why: 'E 段：stressful to be observed。' },
    { t: 'mcq', q: 'Where does much of the learning take place, according to research?', c: ['Before the scenario', 'During the debrief', 'At home', 'During lectures'], a: 1, why: 'D 段：during this discussion。' },
    { t: 'mcq', q: 'What does interprofessional simulation reflect?', c: ['Exam conditions', 'Real clinical practice', 'Online learning', 'Research methods'], a: 1, why: 'C 段：reflects real clinical practice。' }
  ] });
})();
