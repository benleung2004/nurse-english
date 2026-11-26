// IELTS 閱讀擴充（十九）：4 篇（原創練習材料）
(function () {
  const R = NE.reading;
  const add = (o) => { if (!R.some(x => x.id === o.id)) R.push(o); };

  add({ id: 'r-play-outdoor', title: 'The Decline of Outdoor Play', zh: '戶外遊戲減少', mins: 18, paras: [
    'Children today spend far less time playing outdoors than previous generations. Surveys in several countries suggest that many children play outside for less than an hour a day, and some hardly at all on school days.',
    'The reasons are complex. Parents often worry about traffic and strangers, even though the risk from strangers is statistically low. Busy schedules filled with homework and tutoring leave little free time, and screens offer an attractive alternative.',
    'Researchers argue that outdoor play is important for physical development, including balance, strength and coordination. Exposure to daylight may also reduce the risk of short-sightedness, which has become extremely common among children in East Asian cities.',
    'Unstructured play, where children decide what to do without adult direction, is thought to develop creativity, problem-solving and the ability to manage risk. Some experts suggest that overprotecting children may make them more anxious later in life.',
    'Several cities have responded by creating "play streets", where roads are closed to traffic for a few hours so children can play safely, and by designing playgrounds with natural materials that encourage exploration.'
  ], qs: [
    { t: 'tfng', q: 'Some children hardly play outside on school days.', a: 'T', why: 'A 段：some hardly at all on school days。' },
    { t: 'tfng', q: 'The risk from strangers is statistically high.', a: 'F', why: 'B 段：statistically low。' },
    { t: 'tfng', q: 'Daylight exposure may reduce short-sightedness.', a: 'T', why: 'C 段：may also reduce the risk of short-sightedness。' },
    { t: 'tfng', q: 'Play streets are open to traffic all day.', a: 'F', why: 'E 段：closed to traffic for a few hours。' },
    { t: 'gap', q: 'Play without adult direction is called ______ play.', a: ['unstructured'], why: 'D 段：Unstructured play。' },
    { t: 'gap', q: 'Overprotection may make children more ______ later.', a: ['anxious'], why: 'D 段：more anxious later in life。' },
    { t: 'mcq', q: 'Which is NOT given as a reason for less outdoor play?', c: ['Worries about traffic', 'Busy schedules', 'Screens', 'Lack of parks in every city'], a: 3, why: 'B 段講交通、陌生人、時間表、屏幕，冇講所有城市冇公園。' }
  ] });

  add({ id: 'r-nurse-history', title: 'Nursing in Wartime', zh: '戰時護理', mins: 18, paras: [
    'Modern nursing owes much to developments during periods of war. In the nineteenth century, reports of terrible conditions in military hospitals led to reforms in hygiene, ventilation and nutrition, and to the idea that nursing required proper training.',
    'Record-keeping was another important legacy. By collecting statistics on causes of death, early nurse reformers showed that more soldiers died from disease than from battle wounds, a finding that helped persuade governments to improve sanitation.',
    'In the twentieth century, nurses worked in field hospitals close to the front lines, often under dangerous conditions. They developed skills in triage — deciding which patients needed treatment first — which remain central to emergency care today.',
    'Wartime also changed attitudes towards women\'s work. Large numbers of women trained as nurses, and their contribution increased recognition of nursing as a skilled profession rather than a domestic duty.',
    'Today, humanitarian nurses continue to work in conflict zones with international organisations, providing care while facing risks to their own safety. Their work highlights the enduring principles of neutrality and caring for all people regardless of background.'
  ], qs: [
    { t: 'tfng', q: 'Reforms in the nineteenth century included better ventilation.', a: 'T', why: 'A 段：hygiene, ventilation and nutrition。' },
    { t: 'tfng', q: 'More soldiers died from battle wounds than from disease.', a: 'F', why: 'B 段：more … died from disease。' },
    { t: 'tfng', q: 'Field hospitals were always far from the front lines.', a: 'F', why: 'C 段：close to the front lines。' },
    { t: 'tfng', q: 'Most humanitarian nurses today are men.', a: 'NG', why: '文章冇講性別。' },
    { t: 'gap', q: 'Statistics helped persuade governments to improve ______.', a: ['sanitation'], why: 'B 段：improve sanitation。' },
    { t: 'gap', q: 'Deciding who is treated first is called ______.', a: ['triage'], why: 'C 段：triage。' },
    { t: 'mcq', q: 'Which principle do humanitarian nurses follow?', c: ['Profit', 'Neutrality', 'Competition', 'Secrecy'], a: 1, why: 'E 段：neutrality。' }
  ] });

  add({ id: 'r-loneliness', title: 'Loneliness as a Health Issue', zh: '孤獨係健康問題', mins: 18, paras: [
    'Loneliness is not simply a feeling of sadness. Researchers now regard chronic loneliness as a public health issue, linked to higher risks of heart disease, depression, dementia and early death.',
    'Loneliness differs from social isolation. A person can live alone and have few contacts without feeling lonely, while another person may feel lonely despite being surrounded by others. Loneliness depends on the gap between the relationships someone has and those they want.',
    'Although older people are often the focus of concern, surveys suggest that young adults may report loneliness just as frequently. Moving to a new city, studying, and relying on online contact rather than face-to-face meetings may all contribute.',
    'Some health systems have introduced "social prescribing", in which doctors and nurses refer patients to community activities such as walking groups, art classes or volunteering. Early evaluations suggest improvements in wellbeing, though more research is needed.',
    'Simple actions also matter. Regular phone calls, intergenerational programmes that bring young and old together, and friendly neighbourhood spaces can help people build meaningful connections.'
  ], qs: [
    { t: 'tfng', q: 'Chronic loneliness is linked to heart disease.', a: 'T', why: 'A 段：heart disease。' },
    { t: 'tfng', q: 'Loneliness and social isolation are exactly the same.', a: 'F', why: 'B 段：differs from social isolation。' },
    { t: 'tfng', q: 'Young adults never report loneliness.', a: 'F', why: 'C 段：just as frequently。' },
    { t: 'gap', q: 'Referring patients to community activities is called social ______.', a: ['prescribing'], why: 'D 段：social prescribing。' },
    { t: 'gap', q: 'Programmes bringing young and old together are ______ programmes.', a: ['intergenerational'], why: 'E 段：intergenerational programmes。' },
    { t: 'gap', q: 'Loneliness depends on the ______ between relationships someone has and wants.', a: ['gap'], why: 'B 段：the gap between。' },
    { t: 'mcq', q: 'What do early evaluations of social prescribing suggest?', c: ['No benefit', 'Improvements in wellbeing', 'Higher costs only', 'More hospital visits'], a: 1, why: 'D 段：improvements in wellbeing。' }
  ] });

  add({ id: 'r-allergy-rise', title: 'Why Are Food Allergies Rising?', zh: '點解食物敏感愈嚟愈多？', mins: 18, paras: [
    'Food allergies among children have become more common in many countries over recent decades. Peanut, egg and milk allergies are among the most frequent, and some reactions can be life-threatening.',
    'One explanation is the "hygiene hypothesis", which suggests that reduced exposure to microbes in early life may affect how the immune system develops. Another theory focuses on vitamin D, as children who spend less time outdoors may have lower levels.',
    'For many years, parents were advised to delay giving babies allergenic foods such as peanuts. However, a major study found that introducing peanut products early, at around four to six months in high-risk infants, significantly reduced the chance of developing an allergy. Guidance in many countries has since changed.',
    'Skin health also appears important. Babies with severe eczema are more likely to develop food allergies, possibly because allergens enter through damaged skin before the baby eats them.',
    'Managing food allergies requires careful reading of labels, clear communication with schools, and training families to recognise and treat severe reactions with an adrenaline auto-injector.'
  ], qs: [
    { t: 'tfng', q: 'Some food allergy reactions can be life-threatening.', a: 'T', why: 'A 段：life-threatening。' },
    { t: 'tfng', q: 'Guidance has always recommended early introduction of peanuts.', a: 'F', why: 'C 段：For many years … delay。' },
    { t: 'tfng', q: 'All children with eczema develop food allergies.', a: 'F', why: 'D 段：more likely，唔係全部。' },
    { t: 'tfng', q: 'Food allergies are more common in boys.', a: 'NG', why: '文章冇講性別。' },
    { t: 'gap', q: 'Reduced microbe exposure is part of the ______ hypothesis.', a: ['hygiene'], why: 'B 段：hygiene hypothesis。' },
    { t: 'gap', q: 'Allergens may enter through damaged ______.', a: ['skin'], why: 'D 段：through damaged skin。' },
    { t: 'mcq', q: 'What is used to treat a severe reaction?', c: ['Antibiotics', 'An adrenaline auto-injector', 'Vitamin D', 'Eczema cream'], a: 1, why: 'E 段：adrenaline auto-injector。' }
  ] });
})();
