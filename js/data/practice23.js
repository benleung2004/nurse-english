// IELTS 練習擴充（二十三）：文法 20 題、改寫 12 句（原創，醫護同 IELTS 情境）
(function () {
  const G = NE.grammar, P = NE.paraphrase;
  const g = (cat, q, c, a, why) => { if (!G.some(x => x.q === q)) G.push({ cat, q, c, a, why }); };
  g('art', '___ elderly need more support in the community.', ['The', 'An', 'A', '–'], 0, 'the + 形容詞 = 一類人（the elderly, the poor）。');
  g('art', 'She plays ___ piano, and her brother plays ___ football.', ['the / –', '– / the', 'a / a', 'the / the'], 0, '樂器用 the；運動唔使冠詞。');
  g('art', 'The table shows ___ number of nurses in five countries.', ['a', 'the', 'an', '–'], 1, 'the number of（數目）；a number of（好多）。');
  g('count', 'We need to buy ___ new equipment for the ward.', ['a', 'some', 'many', 'an'], 1, 'equipment 不可數，用 some。');
  g('count', 'There were ___ patients waiting than yesterday.', ['less', 'fewer', 'little', 'much'], 1, 'patients 可數，用 fewer。');
  g('count', 'Could you give me a piece of ___?', ['advices', 'advice', 'an advice', 'advicing'], 1, 'a piece of advice（不可數名詞量詞）。');
  g('sva', 'The data ___ that waiting times have increased.', ['show', 'showing', 'is show', 'has show'], 0, 'IELTS 寫作 data 常作複數（show），亦接受單數；選 show 最安全。');
  g('sva', 'Neither of the treatments ___ been effective.', ['have', 'has', 'are', 'were'], 1, 'Neither of + 複數名詞，正式寫作用單數動詞。');
  g('sva', 'There ___ a number of reasons for this trend.', ['is', 'are', 'was', 'has'], 1, 'a number of + 複數 → are。');
  g('word', 'The nurse explained the procedure ___.', ['clear', 'clearly', 'clarity', 'clearer'], 1, '修飾動詞用副詞 clearly。');
  g('word', 'There has been a significant ___ in obesity.', ['increase', 'increasing', 'increased', 'increasingly'], 0, 'a + 形容詞 + 名詞：a significant increase。');
  g('word', 'The figures rose ___ between 2010 and 2020.', ['steady', 'steadily', 'steadiness', 'steadier'], 1, '修飾動詞 rose 用副詞 steadily。');
  g('tense', 'Since 2015, the number of graduates ___ steadily.', ['rises', 'has risen', 'rose', 'is rising'], 1, 'Since + 時間點，用現在完成式。');
  g('tense', 'In 2040, the elderly population ___ to reach 2.6 million.', ['expects', 'is expected', 'expected', 'has expected'], 1, '預測：is expected / projected to…');
  g('tense', 'Between 2000 and 2010, car use ___ by 20%.', ['falls', 'fell', 'has fallen', 'is falling'], 1, '完結嘅過去時段用過去式。');
  g('prep', 'The figure rose ___ 10% ___ 25%.', ['from / to', 'at / by', 'in / on', 'by / at'], 0, 'rise from X to Y。');
  g('prep', 'Sales increased ___ 15% (the size of the change).', ['to', 'by', 'at', 'of'], 1, 'increase by + 變化幅度；increase to + 最終數值。');
  g('prep', 'There was a sharp rise ___ the number of admissions.', ['of', 'in', 'at', 'on'], 1, 'a rise in + 名詞。');
  g('struct', 'Not until the results came back ___ the cause.', ['we knew', 'did we know', 'we did know', 'knew we'], 1, 'Not until … 放句首要倒裝。');
  g('struct', '___ more time, I would have finished the essay.', ['If I have', 'Had I had', 'If I had have', 'Have I had'], 1, '倒裝第三條件句：Had I had…');

  const p = (src, m, k, tip) => { if (!P.some(x => x.src === src)) P.push({ src, m, k, tip }); };
  p('The graph shows how many people used public transport.', ['The graph illustrates the number of public transport users.', 'The chart depicts public transport usage.'], [['shows', 'illustrates / depicts'], ['how many people used', 'the number of users / usage']], 'Task 1 開頭必改寫：shows → illustrates。');
  p('The number of cars went down a little.', ['There was a slight decrease in the number of cars.', 'Car numbers fell marginally.'], [['went down a little', 'a slight decrease / fell marginally']], 'a little → slight / marginal。');
  p('Prices stayed the same.', ['Prices remained stable.', 'Prices levelled off.'], [['stayed the same', 'remained stable / levelled off']], 'Task 1 平穩：remain stable / plateau。');
  p('The figure reached its highest point in 2020.', ['The figure peaked in 2020.', 'The figure hit a peak in 2020.'], [['reached its highest point', 'peaked / hit a peak']], 'peak 做動詞好簡潔。');
  p('About half of the students studied English.', ['Approximately 50% of students studied English.', 'Roughly one in two students studied English.'], [['about half', 'approximately 50% / roughly one in two']], '比例改寫：half → one in two / 50%。');
  p('Nurses are very important in hospitals.', ['Nurses play a vital role in hospitals.', 'Hospitals rely heavily on nurses.'], [['very important', 'play a vital role / rely heavily on']], 'very important → play a vital role。');
  p('People have different opinions about this.', ['Opinions on this issue are divided.', 'This is a controversial issue.'], [['people have different opinions', 'opinions are divided / controversial']], 'Task 2 開頭：opinions are divided。');
  p('This problem is getting worse.', ['This problem is escalating.', 'The situation is deteriorating.'], [['getting worse', 'escalating / deteriorating']], 'get worse → deteriorate。');
  p('Children should be taught about healthy eating.', ['Nutrition education should be provided for children.', 'Young people ought to learn about healthy diets.'], [['taught about healthy eating', 'nutrition education / learn about healthy diets']], '名詞化：nutrition education。');
  p('Many people cannot see a doctor quickly.', ['Many patients face long waiting times.', 'Access to timely medical care is limited for many people.'], [['cannot see a doctor quickly', 'face long waiting times / limited access to timely care']], 'quickly → timely。');
  p('The government should pay for more hospitals.', ['The government should fund additional hospitals.', 'Greater public investment in hospitals is needed.'], [['pay for', 'fund / invest in'], ['more', 'additional / greater']], 'pay for → fund。');
  p('The results were surprising.', ['The findings were unexpected.', 'The outcome was contrary to expectations.'], [['results', 'findings / outcome'], ['surprising', 'unexpected / contrary to expectations']], '學術寫作：results → findings。');
})();
