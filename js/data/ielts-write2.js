// IELTS 寫作新題（醫療主題）連範文（原創）
(function () {
  const W = NE.ielts.writing, S = NE.ielts.samples;
  const add = (item, note, text) => { if (!W.some(x => x.id === item.id)) W.push(item); if (!S[item.id]) S[item.id] = { note, text }; };

  add({ id: 't2-homecare', task: 2, type: 'opinion', q: 'Some people believe that older people should be cared for at home by their families rather than in care homes. To what extent do you agree or disagree?' },
    'Opinion（部分同意）：屋企有情感支持同文化價值；但專業護理需要、照顧者壓力；結論：視乎需要，政府支援家庭照顧者。',
`As populations age, families face difficult decisions about how to care for elderly relatives. Some people argue that older people should be looked after at home by their families instead of living in care homes. I partly agree with this view, but I believe the best option depends on the individual's needs.

There are clear advantages to caring for older people at home. Living in a familiar environment, surrounded by loved ones, can provide emotional comfort and a sense of security. Older people who stay with their families are often less lonely and may feel more respected, which is particularly important in cultures such as Hong Kong, where looking after one's parents is traditionally considered a family duty. Home care can also allow grandparents to remain part of daily family life, sharing their experience with younger generations.

However, family care is not always the safest or most practical choice. Some older people have complex medical needs, such as advanced dementia, frequent falls or the need for regular injections and wound care, which require trained professionals and twenty-four-hour supervision. In addition, family carers often work full-time and may live in small flats, making it extremely difficult to provide care. Research shows that unpaid carers frequently experience exhaustion, stress and financial pressure, which can affect their own health and the quality of care they give.

In my opinion, families should be supported to care for older relatives at home whenever this is appropriate, for example through community nursing, day centres and respite services. When an older person's needs become too complex, a high-quality care home may be the best option, and this should not be seen as a failure of the family.

In conclusion, while home care by families offers emotional and cultural benefits, it is not suitable in every case. The decision should be based on the older person's needs, with strong government support for both family carers and residential services.`);

  add({ id: 't2-techhealth', task: 2, type: 'advdis', q: 'Technology is increasingly used in healthcare, for example in online consultations and wearable devices. Do the advantages of this development outweigh the disadvantages?' },
    'Advantages vs disadvantages：方便、及早發現、減輕醫院負擔 vs 數碼鴻溝、私隱、失去面對面；結論：好處較大但要確保公平。',
`Technology is changing the way healthcare is delivered. Patients can now consult doctors by video, monitor their heart rate with smartwatches and receive reminders to take medicines on their phones. While these developments raise some concerns, I believe their advantages clearly outweigh their disadvantages.

The most obvious benefit is convenience and access. Online consultations allow patients to receive advice without travelling, which saves time and is particularly helpful for people with mobility problems, parents of young children and those living far from hospitals. In addition, wearable devices and home monitoring can detect problems earlier. For example, a patient with heart failure who records their weight and blood pressure daily may be contacted by a nurse as soon as readings change, preventing a hospital admission. Technology can also reduce pressure on busy clinics by managing routine follow-ups remotely, allowing staff to focus on patients who need to be seen in person.

However, there are disadvantages. Not everyone has equal access to technology or the skills to use it. Older people and those on low incomes may be left behind, creating a "digital divide" in healthcare. Privacy is another concern, as health data collected by apps and devices could be hacked or misused. Furthermore, some aspects of care, such as physical examinations and emotional support, are difficult to provide through a screen, and important signs may be missed.

These problems can be reduced with careful planning. Health services should offer technology as an option rather than a replacement for face-to-face care, provide training and support for patients who are less confident with devices, and enforce strict data protection rules.

In conclusion, although technology in healthcare raises issues of access, privacy and the loss of personal contact, its benefits in convenience, early detection and efficiency are greater, provided it is introduced fairly and responsibly.`);

  add({ id: 't2-mentalhealth', task: 2, type: 'problem', q: 'Mental health problems among young people are increasing. What are the causes of this, and what can be done to help?' },
    'Problem–solution：原因（學業壓力、社交媒體、疫情、污名）；方法（學校輔導、早期介入、家長教育、減少污名）。',
`In many countries, including Hong Kong, the number of young people experiencing anxiety, depression and other mental health problems has risen in recent years. This essay will discuss the main causes of this trend and suggest some ways to address it.

One major cause is academic pressure. Many students face long school days, heavy homework loads and intense competition for university places, leaving little time for rest or hobbies. Constant worry about examinations can lead to stress, poor sleep and low self-esteem. A second factor is social media. Young people often compare themselves with carefully edited images of others' lives and appearances, which can make them feel inadequate. Cyberbullying is also a growing problem, as harassment can continue outside school. In addition, recent events such as the pandemic disrupted education and social life, increasing feelings of isolation. Finally, stigma means that many young people are reluctant to talk about their feelings or seek help.

Several measures could help. Schools should provide easy access to trained counsellors and teach students skills for managing stress and emotions as part of the curriculum. Early intervention is essential: teachers, school nurses and parents should be trained to recognise warning signs, such as withdrawal, changes in sleep or appetite and self-harm, so that young people can be referred quickly. Mental health services for young people should also be expanded, with shorter waiting times and youth-friendly options such as online counselling. At home, parents can help by spending time talking with their children, setting healthy limits on screen use and showing that it is acceptable to ask for help.

In conclusion, rising mental health problems among young people are linked to academic pressure, social media, isolation and stigma. With better support in schools, early intervention, improved services and open conversations at home, young people can be helped to cope and recover.`);

  add({ id: 't2-nursedegree', task: 2, type: 'discuss', q: 'Some people think nurses should be required to have a university degree, while others believe practical experience is more important. Discuss both views and give your own opinion.' },
    'Discuss both views：學位（實證、批判思考、複雜病人）vs 實際經驗（技巧、溝通、人手）；立場：兩者都要，彈性升學途徑。',
`The education of nurses has changed significantly over recent decades, and in many countries a university degree is now required to become a registered nurse. Some people support this requirement, while others believe practical experience matters more. In my view, both are essential, and the best system combines academic study with extensive clinical practice.

Those who support degree-level education argue that nursing has become far more complex. Nurses today care for patients with multiple long-term conditions, give high-risk medicines and use advanced technology. A degree provides a strong foundation in subjects such as pharmacology, physiology and research methods. It also develops critical thinking, which helps nurses to evaluate evidence, recognise when a patient is deteriorating and question unsafe instructions. Some studies have suggested that hospitals with a higher proportion of degree-educated nurses have better patient outcomes.

On the other hand, many people believe that the most important nursing skills are learned at the bedside. Communicating with frightened patients, comforting families and performing procedures confidently come mainly from experience and supervision by senior colleagues. Critics also argue that requiring a degree may discourage capable people who cannot afford several years of full-time study, which could worsen staff shortages. Many experienced nurses without degrees provide excellent, compassionate care.

In my opinion, the debate should not be about choosing one or the other. Nursing degrees should include substantial clinical placements so that graduates gain practical skills, and there should be flexible routes, such as part-time degrees, for experienced nurses and healthcare assistants who wish to upgrade their qualifications while continuing to work.

In conclusion, academic education and practical experience are both vital for safe, high-quality nursing. A system that integrates the two and offers accessible pathways to a degree is the most effective approach.`);

  add({ id: 't1-ae', task: 1, type: 'table', q: 'The table below shows the average waiting time (in minutes) at the emergency department of a hospital by triage category in 2015 and 2025. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
    table: { head: ['Triage category', '2015', '2025'], rows: [['Critical', '0', '0'], ['Emergency', '8', '12'], ['Urgent', '25', '40'], ['Semi-urgent', '95', '150'], ['Non-urgent', '140', '210']] } },
    'Table：overview 指出危急類一直即時處理、其他類別都增加，而且越唔緊急等得越耐；分「較緊急」同「較唔緊急」兩組。',
`The table compares the average time patients waited to be seen at a hospital emergency department in 2015 and 2025, according to their triage category.

Overall, waiting times increased for every category except critical patients, who were seen immediately in both years. In addition, the less urgent a patient's condition, the longer they waited, and these patients also experienced the largest increases.

Patients in the critical category had no waiting time at all in either year. For emergency cases, the average wait rose slightly from 8 to 12 minutes, while urgent patients saw a more noticeable increase, from 25 to 40 minutes.

The most significant changes occurred in the two least urgent groups. Semi-urgent patients waited 95 minutes on average in 2015, but this figure had risen to 150 minutes by 2025, an increase of almost an hour. Non-urgent patients experienced the longest waits in both years, with the average time growing from 140 minutes to 210 minutes, which is equivalent to three and a half hours.

These figures suggest that the department became much busier over the decade, although the most seriously ill patients continued to be prioritised.`);

  add({ id: 't1-vacc', task: 1, type: 'table', q: 'The table below shows the vaccination rates (%) for three childhood vaccines in four regions in 2024. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
    table: { head: ['Region', 'Measles', 'Polio', 'Hepatitis B'], rows: [['Region A', '97', '98', '96'], ['Region B', '91', '94', '89'], ['Region C', '84', '88', '80'], ['Region D', '72', '79', '68']] } },
    'Table（多欄）：overview 指出 A 最高、D 最低、小兒麻痺疫苗喺每區都最高、乙肝最低；按地區由高至低寫。',
`The table shows the percentage of children vaccinated against measles, polio and hepatitis B in four regions in 2024.

Overall, Region A had the highest vaccination rates for all three vaccines, while Region D had the lowest. In every region, polio vaccination was the most common, whereas hepatitis B had the lowest coverage.

Region A achieved very high coverage, with rates of 97% for measles, 98% for polio and 96% for hepatitis B. Region B followed with slightly lower figures, ranging from 89% for hepatitis B to 94% for polio.

Vaccination rates were considerably lower in the remaining two regions. In Region C, 88% of children had received the polio vaccine, but only 84% were vaccinated against measles and 80% against hepatitis B. Region D recorded the lowest figures of all, with just over two-thirds of children (68%) vaccinated against hepatitis B, 72% against measles and 79% against polio.

As a result, the gap between the best- and worst-performing regions was largest for hepatitis B, at 28 percentage points, and smallest for polio, at 19 points.`);
})();
