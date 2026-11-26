// IELTS 寫作新題（六）連範文（原創，虛構數據）
(function () {
  const W = NE.ielts.writing, S = NE.ielts.samples;
  const add = (item, note, text) => { if (!W.some(x => x.id === item.id)) W.push(item); if (!S[item.id]) S[item.id] = { note, text }; };
  const T = (id, q, head, rows, note, text) => add({ id, task: 1, type: 'table', q, table: { head, rows } }, note, text);

  T('t1-hand-audit', 'The table below shows hand hygiene compliance (%) for four staff groups at a hospital before and after an education campaign. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
    ['Staff group', 'Before', 'After'], [['Nurses', '78', '92'], ['Doctors', '62', '81'], ['Allied health', '70', '85'], ['Porters', '55', '79']],
    'Table：overview 指出所有組別都改善、護士一直最高、搬運員改善最大但仍最低。',
`The table compares the percentage of hand hygiene compliance among four groups of hospital staff before and after an education campaign.

Overall, compliance improved in all four groups following the campaign. Nurses had the highest rates both before and after, while porters had the lowest, despite showing the greatest improvement.

Before the campaign, nurses complied with hand hygiene guidelines 78% of the time, followed by allied health staff at 70%. Doctors' compliance was lower, at 62%, and porters recorded the lowest figure, at just over half (55%).

After the campaign, nurses' compliance rose to 92%, and allied health staff reached 85%. Doctors improved by 19 percentage points to 81%. The most significant increase was among porters, whose rate rose by 24 points to 79%, narrowing the gap with doctors to only two points.

These results suggest that the campaign was effective across all staff groups, particularly among those who had previously performed worst.`);

  T('t1-age-pop', 'The table below shows the population (in millions) of a city by age group in 2000, 2020 and the projected figure for 2040. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
    ['Age group', '2000', '2020', '2040 (projected)'], [['0–14', '1.1', '0.8', '0.7'], ['15–64', '4.8', '5.3', '4.6'], ['65+', '0.7', '1.4', '2.6']],
    '包含預測：overview 指出兒童減少、65+ 大幅增加；預測用 is expected to / is projected to。',
`The table shows the population of a city in three age groups in 2000 and 2020, together with projections for 2040.

Overall, the number of older people has risen sharply and is expected to continue growing, while the child population has declined. The working-age population increased between 2000 and 2020 but is projected to fall by 2040.

In 2000, there were 1.1 million children aged 0 to 14, 4.8 million people of working age and only 0.7 million people aged 65 and over. By 2020, the number of children had fallen to 0.8 million, while the working-age group had grown to 5.3 million. The number of older people doubled to 1.4 million.

Looking ahead, the population aged 65 and over is projected to reach 2.6 million in 2040, nearly four times the figure for 2000. Meanwhile, the working-age group is expected to decrease to 4.6 million, and the number of children is predicted to fall slightly further to 0.7 million.

As a result, by 2040 older people are expected to outnumber children by almost four to one.`);

  T('t1-sleep-nurses', 'The table below shows the average hours of sleep nurses reported after different types of shifts, and the percentage who reported feeling tired at work. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
    ['Shift type', 'Average sleep (hours)', 'Felt tired at work (%)'], [['Day shift', '6.9', '28'], ['Evening shift', '6.5', '35'], ['Night shift', '5.1', '67'], ['Rotating shifts', '5.6', '58']],
    '兩組數據關係：overview 指出睡得越少越多人覺得攰，夜更最差；注意講兩欄之間嘅關係。',
`The table illustrates the average number of hours nurses slept after four types of shifts and the proportion of nurses who said they felt tired while working.

Overall, there was a clear inverse relationship between the two sets of figures: the less sleep nurses got, the more likely they were to feel tired at work. Night shifts were associated with the least sleep and the highest level of tiredness.

Nurses working day shifts slept the longest, averaging 6.9 hours, and only 28% reported feeling tired. Evening shifts resulted in slightly less sleep, at 6.5 hours, with just over a third (35%) feeling tired.

The figures for night and rotating shifts were considerably worse. Nurses on rotating shifts averaged 5.6 hours of sleep, and 58% said they felt tired at work. Night shifts produced the shortest sleep duration, at just 5.1 hours, and the proportion of tired nurses rose to two-thirds (67%), more than twice the figure for day shifts.

These findings suggest that night and rotating shifts may have a significant impact on nurses' wellbeing and alertness.`);

  T('t1-online-consult', 'The table below shows the percentage of medical consultations carried out by video, telephone and in person at a group of clinics in 2019, 2021 and 2025. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
    ['Method', '2019', '2021', '2025'], [['In person', '92', '55', '70'], ['Telephone', '7', '25', '12'], ['Video', '1', '20', '18']],
    '三個年份：overview 指出 2021 遙距大增、之後面對面回升但仍低於 2019；視像保持較高。',
`The table shows the proportion of consultations at a group of clinics that took place in person, by telephone and by video in 2019, 2021 and 2025.

Overall, there was a dramatic shift towards remote consultations in 2021, followed by a partial return to in-person care by 2025. However, the share of video consultations remained much higher than before.

In 2019, the vast majority of consultations (92%) were conducted face to face, while telephone and video accounted for only 7% and 1% respectively.

By 2021, in-person appointments had fallen to just over half (55%). Telephone consultations more than tripled to 25%, and video consultations rose sharply to 20%.

In 2025, face-to-face consultations recovered to 70%, although this was still well below the 2019 level. Telephone use dropped back to 12%, whereas video consultations stayed relatively stable at 18%, suggesting that this method had become an established part of clinic services.`);

  add({ id: 't2-parentsrole', task: 2, type: 'discuss', q: 'Some people think that parents should teach children how to be good members of society, while others believe that schools are the best place to learn this. Discuss both views and give your own opinion.' },
    'Discuss both views：父母（身教、價值觀早形成）vs 學校（團體生活、多元、系統教育）；立場：父母為主、學校補充。',
`Children need to learn values such as honesty, respect and responsibility in order to become good members of society. Some people believe that this is mainly the job of parents, while others argue that schools are better placed to teach it. In my view, both have important roles, but parents have the greater influence.

Those who believe parents should take responsibility point out that children learn their earliest lessons at home. From a very young age, children copy the behaviour of their parents, such as how they speak to others, whether they keep promises and how they treat older relatives. Values learned in the family tend to be deep and long-lasting. Furthermore, parents know their children individually and can guide them in everyday situations, for example by encouraging them to apologise after an argument or to help a neighbour.

On the other hand, there are strong reasons why schools are also important. At school, children spend many hours with people from different backgrounds, and they must learn to cooperate, share and resolve conflicts. Teachers can design activities that teach citizenship, such as community service projects, group work and discussions about social issues. In addition, not all children receive good guidance at home, so schools can provide positive role models for those whose families are struggling.

In my opinion, parents should be the main teachers of social values, because their example shapes children's behaviour most strongly. However, schools play a vital supporting role by giving children opportunities to practise these values in a wider community.

In conclusion, while schools can reinforce good social behaviour, parents remain the most influential teachers. The best results are achieved when families and schools work together and send children consistent messages.`);

  add({ id: 't2-healthtax', task: 2, type: 'opinion', q: 'Some people think that governments should tax unhealthy foods and drinks to improve public health. To what extent do you agree or disagree?' },
    'Opinion（大致同意）：糖稅減少消費、收入用於健康；但對低收入家庭不公、唔夠；建議：稅 + 補貼健康食物 + 教育。',
`Rising rates of obesity, diabetes and heart disease have led many governments to consider new ways of encouraging healthier diets. One proposal is to tax unhealthy foods and drinks, such as sugary beverages and snacks. I largely agree that such taxes can improve public health, provided they are part of a wider strategy.

The main argument in favour is that price strongly influences what people buy. When unhealthy products become more expensive, consumption tends to fall, especially among young people who have limited money. Several countries that have introduced taxes on sugary drinks have reported reductions in sales, and some manufacturers have reduced the sugar content of their products to avoid the tax. In addition, the money raised can be invested in health promotion, such as school sports programmes or free drinking water in public places.

However, critics argue that these taxes can be unfair. Low-income families spend a larger share of their income on food, so they may be hit hardest. Others believe that governments should not interfere in personal choices, and that taxes alone do not address the underlying reasons for unhealthy eating, such as busy lifestyles, lack of cooking skills or limited access to fresh food.

In my view, these concerns are valid, but they can be addressed. Taxes on unhealthy products should be combined with subsidies that make fruit, vegetables and other healthy foods more affordable. Governments should also invest in nutrition education and clear food labelling, so that people understand what they are eating.

In conclusion, I believe taxing unhealthy foods and drinks is a useful tool for improving public health, as it changes buying habits and raises funds. Nevertheless, it is most effective, and fairest, when supported by measures that make healthy choices easier for everyone.`);
})();
