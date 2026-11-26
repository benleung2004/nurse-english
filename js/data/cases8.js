// 🩺 臨床情境題（八）：原創題目
NE.cs('paed', 'pa57', 'A 2-year-old has swallowed a button battery 30 minutes ago and seems well. What should happen?',
  '兩歲小朋友 30 分鐘前吞咗粒鈕扣電池，睇落冇事。應該點？',
  ['Wait for it to pass in the stool', 'Treat as an emergency: urgent X-ray and possible endoscopic removal', 'Make the child vomit', 'Give a laxative and send home'], 1,
  '鈕扣電池卡喺食道可以幾個鐘內燒穿組織，即使冇徵狀都要緊急照 X 光同處理；唔好催吐。', 'She swallowed a button battery 30 minutes ago; we need an urgent X-ray.');
NE.cs('paed', 'pa58', 'A child with asthma uses a salbutamol inhaler more than 3 times a week. What does this suggest?',
  '哮喘小朋友一星期用多過三次舒張劑。提示咩？',
  ['Asthma is well controlled', 'Asthma is poorly controlled; review preventer use and technique', 'The inhaler is empty', 'Nothing important'], 1,
  '經常要用紓緩藥代表控制唔好：檢查預防藥有冇用、吸入技巧同誘因，轉介醫生覆診。', 'He\'s using his reliever too often; let\'s check his preventer and technique.');
NE.cs('paed', 'pa59', 'Which is the safest sleeping position for a healthy infant?',
  '健康嬰兒最安全嘅瞓姿係？',
  ['On the tummy', 'On the back, in a clear cot without pillows or soft toys', 'On the side propped with pillows', 'In the parents\' bed between them'], 1,
  '仰瞓、獨立床、床上冇枕頭毛公仔，可以減低嬰兒猝死風險。', 'Always put her to sleep on her back.');
NE.cs('paed', 'pa60', 'A school-age child is very scared before a blood test. What is the most helpful approach?',
  '學齡小朋友抽血前好驚。最有幫助嘅方法係？',
  ['Hold the child down without explanation', 'Explain honestly in simple words, use numbing cream and distraction, and let a parent stay', 'Say it won\'t hurt at all', 'Threaten with an injection'], 1,
  '誠實簡單解釋、麻醉膏、分散注意力、家長陪同，可以減少恐懼同痛。', 'It might feel like a quick pinch; you can squeeze Mum\'s hand.');
NE.cs('paed', 'pa61', 'An infant on a cardiac ward feeds poorly, sweats during feeds and is not gaining weight. What might this indicate?',
  '心臟病房嬰兒食奶差、食奶時出汗、體重唔升。可能提示咩？',
  ['A healthy baby', 'Heart failure — feeding is hard work; report and monitor weight', 'Too warm a room only', 'Teething'], 1,
  '嬰兒心衰常見表現：食奶費力出汗、氣促、體重增長差。', 'He sweats and tires during feeds and his weight has plateaued.');
NE.cs('paed', 'pa62', 'A teenager on the ward asks you not to tell her parents that she is sexually active. What should you consider?',
  '病房少女叫你唔好話俾父母知佢有性行為。要考慮咩？',
  ['Tell the parents immediately', 'Respect confidentiality where appropriate, but explain its limits if there is a risk of harm', 'Refuse to talk to her', 'Post it in the notes for everyone'], 1,
  '青少年有權保密，但如果有受傷害風險（如性剝削）要按兒童保護程序；先講清楚保密界限。', 'What you tell me is confidential, unless I\'m worried you might be at risk of harm.');
NE.cs('paed', 'pa63', 'A child with nephrotic syndrome is on high-dose steroids. What should parents watch for?',
  '腎病綜合症小朋友食緊高劑量類固醇。家長要留意咩？',
  ['Nothing', 'Signs of infection, mood changes, increased appetite and weight, and not stopping steroids suddenly', 'Hair colour', 'Only temperature at night'], 1,
  '類固醇抑制免疫、影響情緒同胃口；唔可以突然停藥；留意感染同水腫。', 'Please don\'t stop the steroids suddenly, and call us if he gets a fever.');
NE.cs('paed', 'pa64', 'A baby with gastro-oesophageal reflux is happy and growing well. What advice fits best?',
  '有胃食道反流嘅 BB 開心、生長正常。最適合嘅建議係？',
  ['Stop feeding', 'Reassure; smaller, more frequent feeds and holding upright after feeds', 'Lay flat immediately after every feed', 'Start strong medicines straight away'], 1,
  '「快樂吐奶」好常見：少食多餐、食完抱直，大多數會自然改善；有危險徵狀先需要進一步處理。', 'Lots of babies bring up milk; holding her upright after feeds can help.');

NE.cs('cardio', 'cv20', 'A patient on warfarin has an INR of 6.0 and minor gum bleeding. What should you do?',
  '食華法林病人 INR 6.0，牙肉少少出血。點做？',
  ['Give the usual dose', 'Withhold the warfarin dose and inform the doctor urgently', 'Double the dose', 'Ignore minor bleeding'], 1,
  'INR 過高有出血風險：暫停劑量、即刻上報，醫生可能用維他命 K。', 'Her INR is 6.0 with gum bleeding; I\'ve held tonight\'s warfarin.');
NE.cs('cardio', 'cv21', 'Before giving digoxin, which observation must you check?',
  '俾地高辛之前一定要檢查咩？',
  ['Temperature', 'Apical pulse for a full minute', 'Blood glucose', 'Weight only'], 1, '地高辛會減慢心率，俾藥前量足一分鐘心尖脈搏，過慢（通常 <60）要暫停同上報。', 'His apical pulse is 52, so I\'ve withheld the digoxin.');
NE.cs('cardio', 'cv22', 'A patient after a cardiac catheter via the femoral artery has a growing lump at the groin. What should you do first?',
  '經股動脈心導管後，病人腹股溝有個腫塊愈嚟愈大。第一步做咩？',
  ['Massage it', 'Apply firm pressure above the site, call for help and check distal pulses', 'Ask him to walk', 'Remove the dressing and leave'], 1,
  '可能係血腫或出血：喺穿刺位上方用力壓、求助、檢查遠端脈搏同生命表徵。', 'There\'s an expanding haematoma at his groin; I\'m applying pressure.');

NE.cs('resp', 're15', 'A patient with a chest drain: the bottle has fallen over and cracked. What should you do?',
  '胸腔引流病人：水封瓶跌倒爆裂。點做？',
  ['Lift the bottle above the chest', 'Clamp briefly or place the tube end in sterile water, replace the system and inform the doctor', 'Remove the drain', 'Ignore it'], 1,
  '按程序處理：將喉管末端放入無菌水建立水封或短暫夾喉，盡快換新系統，上報。瓶要低過胸口。', 'The drain bottle cracked; I\'ve placed the tube under sterile water.');
NE.cs('resp', 're16', 'What is the main purpose of incentive spirometry after surgery?',
  '手術後用誘發性肺量計主要目的係咩？',
  ['To measure blood pressure', 'To encourage deep breathing and prevent atelectasis and pneumonia', 'To give oxygen', 'To help sleep'], 1, '鼓勵深呼吸，預防肺塌陷同肺炎。', 'Take a slow, deep breath and try to keep the ball up.');

NE.cs('gi', 'gi15', 'A patient with liver cirrhosis becomes confused and drowsy. What might this be?',
  '肝硬化病人變得混亂同昏昏欲睡。可能係咩？',
  ['Normal tiredness', 'Hepatic encephalopathy — report; check glucose and consider causes such as constipation or infection', 'Dementia', 'Low mood'], 1,
  '肝性腦病變：上報、驗血糖、搵誘因（便秘、感染、出血、藥物），常用乳果糖。', 'He\'s newly confused; I\'m concerned about hepatic encephalopathy.');
NE.cs('gi', 'gi16', 'A patient vomits bright red blood. What should you do first?',
  '病人嘔鮮紅色血。第一步做咩？',
  ['Give a drink', 'Call for urgent help, position safely, check vital signs and prepare for IV access', 'Send for a meal', 'Leave to rest'], 1,
  '上消化道出血係急症：求助、側臥防吸入、生命表徵、建立靜脈通道、準備驗血配血。', 'He has haematemesis; his heart rate is 120.');

NE.cs('renal', 'rn13', 'A haemodialysis patient asks for a blood pressure check. Which arm should you avoid?',
  '血液透析病人要量血壓，要避開邊隻手？',
  ['The arm with the AV fistula', 'Either arm is fine', 'The dominant arm', 'Both arms'], 0,
  '有動靜脈瘻管嘅手唔可以量血壓、抽血或打針，保護瘻管。', 'I won\'t use your fistula arm for the blood pressure.');
NE.cs('renal', 'rn14', 'How do you check that an AV fistula is working?',
  '點樣檢查動靜脈瘻管仲運作緊？',
  ['Look at the colour of the nails', 'Feel for a thrill and listen for a bruit', 'Check the temperature', 'Ask the patient to squeeze hard'], 1, '摸到震顫（thrill）、聽到雜音（bruit）代表通暢；冇咗要即刻上報。', 'I can feel a good thrill over the fistula.');

NE.cs('neuro', 'ne13', 'A patient\'s GCS drops from 14 to 11 after a head injury. What should you do?',
  '頭部受傷病人 GCS 由 14 跌到 11。點做？',
  ['Recheck tomorrow', 'Escalate urgently — a drop of 2 or more is significant; check pupils and vital signs', 'Give a sleeping tablet', 'Encourage him to sleep'], 1,
  'GCS 跌兩分或以上要緊急上報，可能顱內壓升高；同時檢查瞳孔、生命表徵。', 'His GCS has dropped from 14 to 11 and his right pupil is sluggish.');
NE.cs('neuro', 'ne14', 'A patient is having a seizure in bed. What should you NOT do?',
  '病人喺床上抽筋。唔應該做咩？',
  ['Time the seizure', 'Put something in the mouth', 'Protect from injury', 'Give oxygen when possible'], 1,
  '唔好放任何嘢入口；計時、保護、抽完之後復甦姿勢；超過 5 分鐘按指引用藥。', 'The seizure started at 10:32; I\'m protecting his head.');

NE.cs('endo', 'en13', 'A patient with type 1 diabetes is vomiting and cannot eat. What is important about insulin?',
  '一型糖尿病病人嘔吐食唔到嘢。關於胰島素重要嘅係？',
  ['Stop all insulin', 'Do not stop basal insulin; check glucose and ketones often and seek medical advice', 'Double all insulin', 'Ignore ketones'], 1,
  '病日規則：唔好停基礎胰島素，驗血糖同酮，補水，有酮或持續嘔吐要求醫，以防 DKA。', 'Even if you can\'t eat, please don\'t stop your long-acting insulin.');

NE.cs('ortho', 'or12', 'After a hip replacement (posterior approach), which movement should the patient avoid?',
  '人工髖關節置換（後入路）後，病人要避免咩動作？',
  ['Lying on the back', 'Bending the hip beyond 90°, crossing the legs and twisting inwards', 'Ankle exercises', 'Deep breathing'], 1,
  '後入路要防脫位：唔好屈髖多過 90 度、交叉腳、向內扭。', 'Please don\'t cross your legs or sit on a low chair.');

NE.cs('skin', 'sk12', 'A burn on the hand is red, blistered and very painful. What depth is it most likely?',
  '手燒傷：紅、起水泡、好痛。最可能係咩深度？',
  ['Superficial (epidermal)', 'Partial thickness', 'Full thickness', 'No burn'], 1, '起水泡同劇痛通常係部分皮層燒傷；全皮層燒傷可能唔痛、皮膚白或焦。', 'It\'s a partial-thickness burn with blisters.');
NE.cs('skin', 'sk13', 'What is the correct first aid for a scald?',
  '燙傷正確急救係？',
  ['Apply butter or toothpaste', 'Cool under running water for 20 minutes, remove jewellery and cover loosely', 'Use ice directly', 'Pop the blisters'], 1, '流動清水沖 20 分鐘、除首飾、用保鮮紙或乾淨敷料鬆鬆蓋住；唔好用冰或塗嘢。', 'Keep it under cool running water for 20 minutes.');

NE.cs('haemonc', 'ho12', 'A patient is receiving a chemotherapy infusion and complains of burning at the cannula site. What should you do?',
  '病人輸緊化療，話靜脈針位置有灼熱感。點做？',
  ['Speed up the infusion', 'Stop the infusion immediately and follow the extravasation protocol', 'Apply a hot pack and continue', 'Ignore it'], 1,
  '可能係藥物外滲：即刻停、唔好拔針前先按程序抽回、上報、按藥物指引處理。', 'I\'ve stopped the infusion because she has burning at the site.');

NE.cs('obs', 'ob13', 'A pregnant woman at 34 weeks has a severe headache, visual disturbance and BP 165/110. What do you suspect?',
  '懷孕 34 週婦女劇烈頭痛、視力模糊、血壓 165/110。你懷疑咩？',
  ['Migraine only', 'Severe pre-eclampsia — urgent escalation', 'Normal pregnancy', 'Dehydration'], 1, '嚴重妊娠毒血症，有子癇抽搐風險，要緊急上報。', 'Her BP is 165 over 110 with headache and visual changes.');

NE.cs('mh', 'mh13', 'A patient tells you he has been hearing voices telling him to harm himself. What is the priority?',
  '病人話聽到聲音叫佢傷害自己。首要做咩？',
  ['Tell him the voices aren\'t real and leave', 'Assess immediate risk, ensure safety, stay with him and inform the team', 'Ignore it', 'Laugh it off'], 1,
  '命令性幻聽係高風險：評估即時風險、確保安全、陪伴、通知醫生同團隊。', 'Thank you for telling me. Are you thinking of acting on what the voices say?');

NE.cs('er', 'er15', 'A patient is stung by a bee and develops wheezing, swollen lips and low blood pressure. What is the first drug?',
  '病人俾蜜蜂叮咗之後喘鳴、嘴唇腫、血壓低。首選藥係？',
  ['Oral antihistamine', 'Intramuscular adrenaline', 'Paracetamol', 'Oral steroid only'], 1, '過敏性休克：即刻肌肉注射腎上腺素，求助、俾氧、輸液。', 'This is anaphylaxis; give IM adrenaline now.');

NE.cs('periop', 'po11', 'In recovery, a patient after general anaesthesia has snoring breathing and SpO2 90%. What should you do first?',
  '恢復室全身麻醉後病人呼吸有鼻鼾聲、血氧 90%。第一步做咩？',
  ['Let him sleep', 'Open the airway with head tilt/jaw thrust, give oxygen and call the anaesthetist if needed', 'Give a drink', 'Sit him in a chair'], 1, '鼻鼾聲提示上氣道部分阻塞：打開氣道、俾氧、有需要通知麻醉科。', 'His airway is partially obstructed; I\'m doing a jaw thrust.');

NE.cs('pharm', 'ph21', 'A child weighs 12 kg. Paracetamol is 15 mg/kg. The syrup is 120 mg/5 mL. How many mL?',
  '小朋友 12 公斤，撲熱息痛每公斤 15 毫克，藥水 120 毫克／5 毫升。要俾幾多毫升？',
  ['5 mL', '7.5 mL', '10 mL', '15 mL'], 1, '15 × 12 = 180 mg；180 ÷ 120 × 5 = 7.5 mL。', 'The dose is 180 mg, which is 7.5 mL.');
NE.cs('pharm', 'ph22', 'Why should you not crush a modified-release tablet?',
  '點解唔可以磨碎緩釋藥？',
  ['It tastes bad', 'It may release the whole dose at once and cause toxicity', 'It becomes inactive', 'It is too hard'], 1, '緩釋藥磨碎會一次過釋放全部劑量，可能中毒；有吞嚥困難要問藥劑師換劑型。', 'This is a slow-release tablet, so I\'ll ask the pharmacist for a liquid.');

NE.cs('ipc', 'ic13', 'A patient has Clostridioides difficile diarrhoea. Which hand hygiene is best after care?',
  '病人有難辨梭菌腹瀉。護理後最好用咩手部衞生？',
  ['Alcohol hand rub only', 'Soap and water', 'No need if gloves were worn', 'Wipe hands on apron'], 1, '芽孢唔怕酒精，要用梘液同水洗手；加上隔離同漂白水清潔。', 'For C. diff, I\'ll wash my hands with soap and water.');

NE.cs('lab', 'lb10', 'A patient\'s sodium is 125 mmol/L and he is confused. What should you do?',
  '病人鈉 125，神志混亂。點做？',
  ['Give lots of plain water', 'Report urgently; check fluid balance and follow the doctor\'s plan', 'Ignore it', 'Restrict salt'], 1, '低鈉加神志改變要緊急上報；矯正要慢，按醫生計劃。', 'His sodium is 125 and he\'s newly confused.');

NE.cs('doc', 'dc12', 'You notice you documented a wrong time in yesterday\'s notes. What is correct?',
  '你發現尋日記錄寫錯時間。正確做法係？',
  ['Use correction fluid', 'Draw a single line through it, write the correction, date, time and sign', 'Tear out the page', 'Leave it'], 1, '單線刪除、保持可讀、寫更正、日期時間同簽名（電子記錄用修訂功能）。', 'I\'ve corrected the time with a single line and initialled it.');

NE.cs('ethics', 'et13', 'A relative calls the ward asking for test results of a patient. What should you do?',
  '有親屬打電話嚟病房問病人嘅檢驗結果。點做？',
  ['Read out the results', 'Check identity and the patient\'s consent before sharing any information', 'Give results to anyone who asks', 'Hang up rudely'], 1, '保護私隱：確認身份同病人同意先透露，否則禮貌拒絕。', 'I\'m sorry, I need to check with the patient before I can share any information.');

NE.cs('prof', 'pr24', 'You feel exhausted after several night shifts and make small errors. What is the most professional step?',
  '連續幾晚夜更你好攰、開始出小錯。最專業嘅做法係？',
  ['Hide it and keep going', 'Tell your manager, ask for support, and look after your rest and wellbeing', 'Drink lots of energy drinks', 'Quit immediately'], 1, '疲勞影響病人安全：主動講、尋求支援、調整更表、照顧好自己。', 'I\'m very tired and I\'m worried about making mistakes; can we talk about my roster?');

NE.cs('geri', 'ge12', 'An older patient has had two falls at home. Which assessment is most useful?',
  '長者喺屋企跌咗兩次。邊個評估最有用？',
  ['Hair check', 'Multifactorial falls assessment: medicines, vision, BP lying/standing, mobility and home hazards', 'Only blood glucose', 'None'], 1, '多因素跌倒評估可以搵到可改善嘅原因。', 'Let\'s check your lying and standing blood pressure.');

NE.cs('nutri', 'nu9', 'Which patient is at highest risk of refeeding syndrome?',
  '邊個病人最高風險有再餵食綜合症？',
  ['A healthy adult after one skipped meal', 'A patient who has eaten very little for over 10 days', 'A child who ate breakfast', 'An athlete'], 1, '長時間少食再開始營養會令磷、鉀、鎂急跌；要慢慢加量、監察電解質。', 'She\'s barely eaten for two weeks, so we\'ll start feeds slowly.');

NE.cs('ap', 'ap9', 'Where does gas exchange take place in the lungs?',
  '肺部邊度進行氣體交換？',
  ['Trachea', 'Alveoli', 'Bronchi', 'Pleura'], 1, '肺泡同微絲血管之間進行氧氣同二氧化碳交換。', 'Gas exchange happens in the alveoli.');
NE.cs('eent', 'ee8', 'A patient has a chemical splash in the eye. What is the first action?',
  '病人眼入咗化學品。第一步做咩？',
  ['Rub the eye', 'Irrigate immediately with plenty of water or saline', 'Cover and wait', 'Apply ointment'], 1, '即刻大量清水或生理鹽水沖洗至少 15–20 分鐘，再求醫。', 'Keep your eye open; I\'m going to wash it with saline.');
NE.cs('proc', 'pc7', 'Before inserting a nasogastric tube, how is the length usually estimated?',
  '插鼻胃管前，通常點樣估計長度？',
  ['Random length', 'Nose to earlobe to xiphisternum (NEX)', 'Mouth to chin', 'Height in cm'], 1, 'NEX：鼻尖到耳垂再到劍突。插完要用 pH 或 X 光確認位置。', 'I\'ll measure from your nose to your ear and down to here.');
NE.cs('proc', 'pc8', 'How do you confirm an NG tube is in the stomach before feeding?',
  '餵食前點樣確認鼻胃管喺胃？',
  ['Listen for a "whoosh" of air', 'Aspirate and check pH (≤5.5) or confirm with X-ray', 'Ask the patient', 'Look at the tube colour'], 1, '「打氣聽聲」唔可靠；用抽出液 pH ≤5.5 或 X 光確認。', 'The aspirate pH is 4, so it\'s safe to feed.');
NE.cs('degree', 'dg5', 'Which statement is correctly hedged for academic writing?',
  '邊句屬於學術寫作嘅適當保留語氣？',
  ['This proves that all nurses are stressed.', 'These findings suggest that many nurses may experience stress.', 'Everyone knows nurses are stressed.', 'Nurses are always stressed.'], 1, '學術寫作用 suggest、may、appear 避免絕對化。', 'These findings suggest that…');
NE.cs('degree', 'dg6', 'What is the main difference between qualitative and quantitative research?',
  '質性同量性研究主要分別係？',
  ['There is no difference', 'Qualitative explores experiences in words; quantitative measures with numbers', 'Quantitative uses interviews only', 'Qualitative uses only statistics'], 1, '質性探索經驗同意義（訪談），量性用數字同統計量度。', 'This qualitative study used interviews to explore parents\' experiences.');
