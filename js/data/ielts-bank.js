// IELTS 題庫擴充：口語 Part 1／2／3、寫作 Task 1／2（原創練習題，非官方真題）
(function () {
  const sp = NE.ielts.speaking;
  sp['1'].push(
    // 工作／讀書
    'What is the most difficult part of your job?', 'Do you prefer working in the morning or at night?', 'How do you usually get to work?',
    'Would you like to change your job in the future?', 'What did you study at school that helps you in your job?', 'Do you like working in a team?',
    // 屋企／住
    'Do you live in a house or a flat?', 'What is your favourite room in your home?', 'Would you like to move to another area in the future?', 'Is your neighbourhood a good place for children?',
    // 日常
    'What is your daily routine like?', 'Do you like to plan your day or be spontaneous?', 'How do you relax after a long day?', 'Do you cook at home often?',
    'What kind of food do you like?', 'Do you prefer eating at home or eating out?', 'Do you drink tea or coffee?',
    // 興趣
    'Do you like reading? What do you read?', 'What kind of music do you listen to?', 'Do you play any musical instruments?', 'Do you like watching films at the cinema or at home?',
    'Do you have any hobbies?', 'Did you have a hobby as a child?', 'Do you like taking photos?', 'Do you enjoy shopping?',
    // 科技
    'Which app do you use most often?', 'Do you think you spend too much time online?', 'How do you usually keep in touch with friends?', 'Do you prefer texting or calling?',
    // 天氣／自然
    'What is your favourite season?', 'Do you like rainy days?', 'Do you often go to the countryside?', 'Do you like hiking?', 'Do you like the sea?',
    // 人際
    'Do you have a big family?', 'Who are you closest to in your family?', 'How often do you see your friends?', 'Do you prefer to have a few close friends or many friends?',
    // 旅遊
    'Do you like travelling?', 'Where did you go on your last holiday?', 'Do you prefer travelling alone or with others?', 'Is there a place you would like to visit in the future?',
    // 健康
    'Do you think you have a healthy lifestyle?', 'How do you keep fit?', 'Do you think people in Hong Kong are stressed?', 'What do you do when you feel tired?',
    // 其他常見
    'Do you like wearing a watch?', 'Do you often give gifts to people?', 'Do you like going to parties?', 'Do you remember your first day at school?',
    'Do you prefer to write by hand or type?', 'Do you like learning languages?', 'Why are you learning English?', 'Do you use English in your daily life?',
    'What do you usually do at weekends?', 'Do you like your hometown?', 'Do you like art?', 'Do you like animals?', 'Have you ever had a pet?'
  );
  const p2 = (q, b, tip, v) => sp['2'].push({ q, b, tip, v });
  p2('Describe a person who has had a positive influence on you.', ['who the person is', 'how you know them', 'what they did', 'and explain how they influenced you'], '可以講一個帶你嘅資深護士或者老師。用具體例子，講佢做過咩、你學到咩。', ['look up to', 'role model', 'inspire', 'patient and supportive']);
  p2('Describe a difficult decision you made.', ['what the decision was', 'when you made it', 'what options you had', 'and explain why it was difficult'], '例如揀讀護理定其他科、轉工、讀學位。講清楚兩個選擇嘅好壞。', ['weigh up', 'pros and cons', 'in the long run', 'no regrets']);
  p2('Describe a skill you learned that is useful in your life.', ['what the skill is', 'how you learned it', 'how long it took', 'and explain why it is useful'], '可以講溝通技巧、急救、廚藝或者英文。', ['hands-on', 'trial and error', 'practice makes perfect', 'transferable']);
  p2('Describe a place in Hong Kong you like to visit.', ['where it is', 'how often you go there', 'what you do there', 'and explain why you like it'], '揀你熟悉嘅地方，例如郊野公園、海灘、舊區。加感官描寫（睇到、聽到）。', ['tranquil', 'breathtaking view', 'escape from the city', 'hidden gem']);
  p2('Describe an occasion when you were very busy.', ['when it was', 'what you had to do', 'how you managed', 'and explain how you felt'], '病房忙碌嘅一更好適合，記住唔好講病人個人資料。', ['run off my feet', 'prioritise', 'under pressure', 'a sense of achievement']);
  p2('Describe a piece of technology you find useful.', ['what it is', 'how you use it', 'how long you have had it', 'and explain why it is useful'], '例如手機、智能手錶、醫院電子系統。', ['user-friendly', 'indispensable', 'save time', 'keep track of']);
  p2('Describe a book or film that made you think.', ['what it was', 'what it was about', 'when you read or watched it', 'and explain why it made you think'], '揀你記得內容嘅，講故事大綱 + 對你嘅影響。', ['thought-provoking', 'the plot', 'moving', 'changed my perspective']);
  p2('Describe a time you received good service.', ['where it was', 'what happened', 'who served you', 'and explain why the service was good'], '可以講餐廳、診所或者網購。', ['go the extra mile', 'attentive', 'exceeded my expectations', 'courteous']);
  p2('Describe a time you had to wait for something.', ['what you waited for', 'where you waited', 'how long you waited', 'and explain how you felt'], '例如等公屋、等考試成績、等巴士。', ['seemed endless', 'kill time', 'impatient', 'worth the wait']);
  p2('Describe a goal you want to achieve in the future.', ['what the goal is', 'when you want to achieve it', 'what you need to do', 'and explain why it is important to you'], '最自然係講讀護理學位、做註冊護士或者考好 IELTS。', ['ambition', 'step by step', 'career prospects', 'dream come true']);
  p2('Describe a festival that is important in your culture.', ['what the festival is', 'when it is celebrated', 'what people do', 'and explain why it is important'], '例如農曆新年、中秋節。講傳統活動同家庭意義。', ['family reunion', 'lucky money', 'mooncakes', 'festive atmosphere']);
  p2('Describe a time you learned something from a mistake.', ['what the mistake was', 'when it happened', 'what you learned', 'and explain how it changed you'], '可以講工作上一個小錯誤同之後點改善（例如雙人核對）。', ['learn the hard way', 'double-check', 'a valuable lesson', 'more careful']);
  p2('Describe a family member you are proud of.', ['who the person is', 'what they have done', 'how you feel about them', 'and explain why you are proud of them'], '具體講佢做過嘅事同品格。', ['hard-working', 'selfless', 'overcome difficulties', 'proud of']);
  p2('Describe a time you helped someone who was ill.', ['who it was', 'what was wrong', 'how you helped', 'and explain how you felt'], '護士背景好有優勢，但唔好講病人真實資料。', ['reassure', 'comfort', 'make a difference', 'rewarding']);
  p2('Describe an interesting conversation you had with an older person.', ['who the person was', 'what you talked about', 'where it happened', 'and explain why it was interesting'], '可以講病房長者或者祖父母講以前香港嘅生活。', ['wisdom', 'in the old days', 'eye-opening', 'generation gap']);
  p2('Describe a time you used English outside the classroom.', ['when it was', 'who you spoke to', 'what happened', 'and explain how you felt'], '例如同外籍病人或者旅行時。', ['break the ice', 'nervous at first', 'confidence boost', 'get my message across']);
  p2('Describe a park or garden you enjoy visiting.', ['where it is', 'what it looks like', 'what people do there', 'and explain why you enjoy it'], '用描述性形容詞同感官細節。', ['well-maintained', 'lush green', 'peaceful', 'unwind']);
  p2('Describe a time you were late for something important.', ['what it was', 'why you were late', 'what happened', 'and explain how you felt'], '講原因、後果、之後點改善。', ['stuck in traffic', 'apologise', 'embarrassed', 'leave earlier']);
  p2('Describe a healthy habit you have.', ['what the habit is', 'when you started it', 'how you keep it up', 'and explain why it is good for you'], '例如行山、早瞓、飲水、做運動。', ['make it a routine', 'stay in shape', 'energised', 'consistency']);
  p2('Describe a time you worked in a team.', ['what the task was', 'who was in the team', 'what your role was', 'and explain whether it was successful'], '病房急救或者交更合作都係好例子。', ['cooperate', 'divide the work', 'communicate clearly', 'team spirit']);
  p2('Describe a website or app you use for learning.', ['what it is', 'how you found it', 'how you use it', 'and explain why it is helpful'], '可以講呢個 app！講功能同進步。', ['flashcards', 'track my progress', 'convenient', 'motivating']);
  p2('Describe a time you felt proud of yourself.', ['when it was', 'what you did', 'who was with you', 'and explain why you felt proud'], '例如考到護士牌、照顧到一個難搞嘅病人。', ['hard work paid off', 'accomplishment', 'over the moon', 'recognition']);
  p2('Describe a crowded place you have been to.', ['where it was', 'when you went', 'why it was crowded', 'and explain how you felt'], '香港好多例子：旺角、港鐵、年宵。', ['packed', 'jostling', 'overwhelming', 'claustrophobic']);
  p2('Describe a gift you gave to someone.', ['what the gift was', 'who you gave it to', 'why you chose it', 'and explain how the person felt'], '講揀禮物嘅原因同對方反應。', ['thoughtful', 'meaningful', 'handmade', 'touched']);
  p2('Describe a change you would like to make in your local area.', ['what the change is', 'why it is needed', 'how it could be done', 'and explain how it would help people'], '例如多啲公園、無障礙設施、單車徑。', ['improve quality of life', 'accessible', 'residents', 'long-term benefit']);
  p2('Describe a time someone gave you useful advice.', ['who gave you the advice', 'what the advice was', 'whether you followed it', 'and explain why it was useful'], '例如上司教你點樣排優先次序。', ['take advice', 'eye-opener', 'follow my instinct', 'grateful']);
  p2('Describe an important event in your life.', ['what it was', 'when it happened', 'who was there', 'and explain why it was important'], '畢業、第一日返工、考到牌。用過去式。', ['milestone', 'turning point', 'unforgettable', 'emotional']);
  p2('Describe a time you saw something interesting on social media.', ['what it was', 'where you saw it', 'why it was interesting', 'and explain how you reacted'], '講內容同你嘅反應，可以帶出對社交媒體嘅看法。', ['go viral', 'scroll through', 'eye-catching', 'share with friends']);
  p2('Describe a time you had to be patient.', ['when it was', 'what happened', 'why you had to be patient', 'and explain how you felt'], '照顧小朋友或者長者係好例子。', ['keep calm', 'take a deep breath', 'understanding', 'pay off']);
  p2('Describe a teacher who helped you.', ['who the teacher was', 'what subject they taught', 'how they helped you', 'and explain why you remember them'], '講具體一件事。', ['encouraging', 'go out of their way', 'believe in me', 'inspiring']);
  p2('Describe a time you tried a new food.', ['what the food was', 'where you tried it', 'what it tasted like', 'and explain whether you liked it'], '用味道形容詞：spicy, savoury, bland。', ['acquired taste', 'mouth-watering', 'adventurous', 'local delicacy']);
  p2('Describe a way you save money.', ['what the method is', 'how long you have used it', 'how much you save', 'and explain why it works for you'], '例如記帳、自己煮飯。', ['budget', 'cut down on', 'put aside', 'financially independent']);
  p2('Describe a time you helped a child.', ['who the child was', 'what the situation was', 'how you helped', 'and explain how you felt afterwards'], '兒科經驗最啱，記住唔好講真名。', ['calm them down', 'distract', 'gentle', 'heart-warming']);
  p2('Describe a sport or exercise you enjoy.', ['what it is', 'when you started', 'how often you do it', 'and explain why you enjoy it'], '講好處同感受。', ['work up a sweat', 'clear my mind', 'build stamina', 'stress relief']);
  sp['3'].push(
    // 教育
    'Should university education be free for everyone?', 'How has technology changed the way students learn?', 'Is it better to learn practical skills or academic knowledge?', 'What makes a good teacher?',
    // 工作
    'Why do some young people change jobs frequently?', 'Is job satisfaction more important than salary?', 'How will artificial intelligence affect jobs in the future?', 'Should people retire later?',
    // 健康
    'Why do many people find it hard to live a healthy lifestyle?', 'Should the government tax unhealthy food?', 'How can cities encourage people to exercise more?', 'Is mental health given enough attention in Hong Kong?',
    'What are the advantages of an ageing population, if any?', 'Who should be responsible for caring for older people: families or the government?',
    // 科技
    'Do you think people rely too much on smartphones?', 'How has social media changed relationships?', 'Should children have limits on screen time?', 'Is online privacy a serious problem?',
    // 環境
    'What can individuals do to protect the environment?', 'Should plastic bags be banned completely?', 'Is it the responsibility of governments or companies to reduce pollution?', 'How will climate change affect Hong Kong?',
    // 城市
    'What are the advantages and disadvantages of living in a big city?', 'Why are housing prices so high in many cities?', 'How can traffic problems be solved?', 'Should old buildings be preserved or replaced?',
    // 文化／旅遊
    'How does tourism affect local culture?', 'Why is it important to keep traditional festivals?', 'Do young people still value traditions?', 'Is it better to travel independently or on a tour?',
    // 社會
    'Why do some people prefer to live alone?', 'How has family life changed in recent years?', 'Should parents be strict with their children?', 'What makes someone a good neighbour?',
    'Is it important to help strangers?', 'Why do people volunteer?', 'How can society support people with disabilities?',
    // 媒體
    'Can we trust the news we read online?', 'Should advertising aimed at children be banned?', 'Why are celebrities so influential?',
    // 語言
    'Why is English so important internationally?', 'Is it better to learn a language at a young age?', 'Will machine translation replace language learning?',
    // 醫護
    'What qualities make a good nurse?', 'Why is there a shortage of nurses in many countries?', 'Should healthcare be completely free?', 'How might hospitals change in the next 20 years?',
    'Is it better to treat illness or prevent it?', 'Should doctors and nurses be allowed to strike?'
  );

  sp['1'] = [...new Set(sp['1'])]; sp['3'] = [...new Set(sp['3'])]; // 去除重複題目
  const W = NE.ielts.writing; const w2 = (id, type, q) => W.push({ id, task: 2, type, q });
  w2('t2-uni', 'opinion', 'Some people believe that university education should be free for all students. To what extent do you agree or disagree?');
  w2('t2-practical', 'discuss', 'Some people think schools should focus on academic subjects, while others believe practical skills such as cooking and managing money are more important. Discuss both views and give your own opinion.');
  w2('t2-ai-jobs', 'advdis', 'Artificial intelligence is increasingly used in the workplace. Do the advantages of this development outweigh the disadvantages?');
  w2('t2-salary', 'opinion', 'Some people say that job satisfaction is more important than a high salary. To what extent do you agree or disagree?');
  w2('t2-retire', 'discuss', 'Some people think the retirement age should be raised, while others believe it should stay the same. Discuss both views and give your own opinion.');
  w2('t2-sugar', 'opinion', 'Governments should introduce a tax on sugary drinks and junk food to improve public health. To what extent do you agree or disagree?');
  w2('t2-exercise', 'problem', 'Many people do not do enough physical exercise. What are the causes of this problem, and what can be done to solve it?');
  w2('t2-mental', 'problem', 'Mental health problems are increasing among young people. What are the reasons for this, and how can the problem be addressed?');
  w2('t2-elderly', 'discuss', 'Some people believe that families should look after their elderly relatives, while others think this is the responsibility of the government. Discuss both views and give your own opinion.');
  w2('t2-social', 'advdis', 'Social media has become the main way many young people communicate. Do the advantages of this outweigh the disadvantages?');
  w2('t2-screens', 'opinion', 'Parents should strictly limit the time children spend on electronic devices. To what extent do you agree or disagree?');
  w2('t2-privacy', 'discuss', 'Some people think that governments should be allowed to monitor citizens\' online activity to prevent crime, while others believe this threatens privacy. Discuss both views and give your own opinion.');
  w2('t2-plastic', 'opinion', 'Single-use plastic products should be completely banned. To what extent do you agree or disagree?');
  w2('t2-climate', 'discuss', 'Some people believe that individuals can do little to fight climate change, and that governments and large companies must take action. Others think individuals play an important role. Discuss both views and give your own opinion.');
  w2('t2-housing', 'problem', 'In many large cities, housing has become too expensive for young people. What are the causes of this problem, and what solutions can you suggest?');
  w2('t2-traffic', 'problem', 'Traffic congestion is a serious problem in many cities. What are the causes, and what measures could be taken to reduce it?');
  w2('t2-heritage', 'opinion', 'Old buildings should be protected by law, even if this limits a city\'s development. To what extent do you agree or disagree?');
  w2('t2-festival', 'advdis', 'In many countries, traditional festivals are becoming more commercial. Is this a positive or negative development?');
  w2('t2-livealone', 'advdis', 'More and more people are choosing to live alone. Do the advantages of this trend outweigh the disadvantages?');
  w2('t2-parents', 'discuss', 'Some people believe that parents should be strict with their children, while others think children should have more freedom. Discuss both views and give your own opinion.');
  w2('t2-volunteer', 'opinion', 'All young people should be required to do unpaid community work as part of their education. To what extent do you agree or disagree?');
  w2('t2-news', 'problem', 'Many people now get their news from social media rather than traditional sources. What problems can this cause, and how can they be solved?');
  w2('t2-ads-kids', 'opinion', 'Advertising aimed at children should be banned. To what extent do you agree or disagree?');
  w2('t2-celebrity', 'advdis', 'Celebrities have a strong influence on young people. Is this a positive or negative development?');
  w2('t2-english', 'advdis', 'English is becoming the dominant language of international communication. Do the advantages outweigh the disadvantages?');
  w2('t2-young-lang', 'opinion', 'Children should start learning a foreign language at primary school rather than secondary school. To what extent do you agree or disagree?');
  w2('t2-nurse-pay', 'opinion', 'Nurses and other healthcare workers should be paid more than people in other professions. To what extent do you agree or disagree?');
  w2('t2-nurse-short', 'problem', 'Many countries are facing a shortage of nurses. What are the causes of this, and what can be done to attract more people to the profession?');
  w2('t2-strike', 'discuss', 'Some people believe healthcare workers should never go on strike, while others think they should have the same right to strike as other workers. Discuss both views and give your own opinion.');
  w2('t2-space', 'opinion', 'Governments spend a lot of money on space exploration. Some people think this money should be spent on solving problems on Earth instead. To what extent do you agree or disagree?');
  w2('t2-animals', 'discuss', 'Some people think zoos are cruel and should be closed, while others believe they play an important role in protecting animals. Discuss both views and give your own opinion.');
  w2('t2-sport-funding', 'opinion', 'Governments should spend more money on public sports facilities rather than on training top athletes. To what extent do you agree or disagree?');
  w2('t2-arts', 'discuss', 'Some people think that governments should fund the arts, such as music and theatre, while others believe the money should go to more practical areas like healthcare. Discuss both views and give your own opinion.');
  w2('t2-online-shop', 'advdis', 'Online shopping is replacing shopping in traditional stores. Do the advantages of this outweigh the disadvantages?');
  w2('t2-gap-year', 'advdis', 'Some students take a year off between finishing school and starting university to work or travel. Do the advantages outweigh the disadvantages?');
  w2('t2-crime-young', 'problem', 'In some countries, more young people are committing crimes. What are the causes, and what can be done to tackle this problem?');
  w2('t2-prison', 'opinion', 'The best way to reduce crime is to give longer prison sentences. To what extent do you agree or disagree?');
  w2('t2-migration', 'advdis', 'Many skilled workers move to other countries to find better jobs. Is this a positive or negative development for their home countries?');

  const w1 = (id, q, head, rows) => W.push({ id, task: 1, type: 'table', q, table: { head, rows } });
  w1('t1-sleep', 'The table below shows the average hours of sleep per night of people in four age groups in a city in 2005 and 2025. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
    ['Age group', '2005', '2025'], [['15–24', '7.8', '6.9'], ['25–44', '7.2', '6.6'], ['45–64', '7.0', '6.8'], ['65+', '7.4', '7.5']]);
  w1('t1-waste', 'The table below shows how household waste was managed in a city in 2010 and 2025 (percentages). Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
    ['Method', '2010', '2025'], [['Landfill', '65', '42'], ['Recycling', '22', '38'], ['Incineration', '10', '15'], ['Composting', '3', '5']]);
  w1('t1-hospital-visits', 'The table below shows the number of emergency department visits (in thousands) by age group in one region in 2015 and 2025. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
    ['Age group', '2015', '2025'], [['0–14', '180', '150'], ['15–44', '420', '390'], ['45–64', '260', '300'], ['65+', '310', '470']]);
  w1('t1-transport', 'The table below shows the percentage of commuters using different types of transport in a city in 2000 and 2025. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
    ['Transport', '2000', '2025'], [['Metro', '30', '45'], ['Bus', '35', '25'], ['Private car', '25', '15'], ['Cycling / walking', '10', '15']]);
  w1('t1-spending', 'The table below shows the percentage of household spending on five categories in two countries in 2025. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
    ['Category', 'Country A', 'Country B'], [['Housing', '38', '25'], ['Food', '20', '28'], ['Transport', '12', '15'], ['Healthcare', '8', '12'], ['Leisure', '10', '9']]);
  w1('t1-language', 'The table below shows the percentage of students in a school who studied different foreign languages in 2010 and 2025. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
    ['Language', '2010', '2025'], [['English', '95', '97'], ['Japanese', '18', '25'], ['French', '12', '9'], ['Korean', '3', '16'], ['Spanish', '5', '8']]);
})();
