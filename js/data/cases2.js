// 🩺 臨床情境題（二）：原創題目
// NE.cs(科目, id, 英文情境, 中文意思, [4 個選項], 正確答案 0–3, 中文解釋, 實用英文句)

// ---- 兒科（加深）----
NE.cs('paed', 'pa11', 'A 3-year-old with croup has stridor at rest and is very anxious. What should you avoid?',
  '3 歲哮吼小朋友休息時都有喘鳴，好驚慌。你應該避免咩？',
  ['Keeping the child on the parent\'s lap', 'Examining the throat with a tongue depressor', 'Giving prescribed dexamethasone', 'Calling for senior help'], 1,
  '上氣道阻塞嘅小朋友唔好用壓舌板睇喉嚨，可能令佢哭鬧加重阻塞。保持冷靜、坐喺家長身上、按醫囑俾類固醇、上報。', 'Let\'s keep her calm on mum\'s lap while we wait for the doctor.');
NE.cs('paed', 'pa12', 'An infant\'s heart rate is 165 at rest while calm. Normal infant heart rate is about 110–160. What should you do?',
  '嬰兒安靜時心跳 165，正常大約 110–160。點做？',
  ['Ignore it; babies have fast hearts', 'Reassess for fever, pain or dehydration and calculate the PEWS', 'Give a sedative', 'Wake the baby to recheck'], 1,
  '輕微偏高要搵原因：發燒、痛、脫水、哭鬧，再計 PEWS 決定要唔要上報。兒科正常值要按年齡睇。', 'His heart rate is 165 at rest; I will recheck and calculate his PEWS.');
NE.cs('paed', 'pa13', 'Which is the safest sleep position advice for a newborn going home?',
  '新生 BB 出院，安全睡眠姿勢建議係？',
  ['On the tummy', 'On the side with pillows', 'On the back in a clear cot', 'In the parents\' bed between pillows'], 2,
  '仰睡、床上冇枕頭毛公仔、唔好同大人同床（尤其飲酒或者食煙），可以減低嬰兒猝死風險。', 'Always put your baby to sleep on her back in her own cot.');
NE.cs('paed', 'pa14', 'A 5-year-old with type 1 diabetes has vomiting, deep fast breathing and a fruity smell. What do you suspect?',
  '5 歲一型糖尿病小朋友嘔吐、呼吸又深又快、有生果味。你懷疑咩？',
  ['Hypoglycaemia', 'Diabetic ketoacidosis', 'Gastroenteritis only', 'Anxiety'], 1,
  '深快呼吸（Kussmaul）、生果味、嘔吐係糖尿病酮酸中毒，要驗血糖同血酮、即刻上報。', 'She has vomiting and Kussmaul breathing; I suspect DKA.');
NE.cs('paed', 'pa15', 'A breastfeeding mother asks how to know if her baby is getting enough milk. What is the best answer?',
  '餵母乳媽媽問點知 BB 食唔食得夠，最好點答？',
  ['If the baby cries, there is not enough milk', 'About six or more wet nappies a day, regular stools and steady weight gain', 'Baby should feed exactly every 4 hours', 'Weigh the baby before and after every feed at home'], 1,
  '出世頭一星期後，每日 6 片或以上濕尿片、有大便、體重穩定上升代表食得夠。喊唔一定係肚餓。', 'Six or more wet nappies a day is a good sign.');
NE.cs('paed', 'pa16', 'A child with nephrotic syndrome has puffy eyes and frothy urine. What should you monitor closely?',
  '腎病綜合症小朋友眼腫、尿有泡，要密切監察咩？',
  ['Daily weight, fluid balance and urine protein', 'Hair growth', 'Reading ability', 'Height only'], 0,
  '每日磅重、出入量同尿蛋白，留意水腫同感染（用類固醇期間）。', 'We will weigh him every morning and test his urine for protein.');
NE.cs('paed', 'pa17', 'A parent wants to stay with their child during cannulation. What is the best approach?',
  '家長想喺小朋友插針時陪住，最好點做？',
  ['Ask the parent to leave', 'Encourage the parent to stay and help with comfort positioning', 'Let the parent do the procedure', 'Sedate the child first'], 1,
  '以家庭為中心：家長陪伴同安撫式擺位可以減少小朋友恐懼同約束需要。', 'Would you like to hold him on your lap while we do it?');
NE.cs('paed', 'pa18', 'An adolescent asks to speak to you without her parents. What should you do?',
  '一個青少年要求唔要父母喺度同你傾，你應該點做？',
  ['Refuse; parents must always be present', 'Offer private time and explain confidentiality and its limits', 'Promise to keep every secret', 'Tell the parents everything she says'], 1,
  '提供私人時間尊重青少年，但要講明保密有限度（有傷害風險時要通知其他人）。', 'What you tell me stays private unless someone is at risk of harm.');
NE.cs('paed', 'pa19', 'A neonate\'s axillary temperature is 35.9°C. What should you do first?',
  '新生 BB 腋溫 35.9 度，第一步做咩？',
  ['Give paracetamol', 'Skin-to-skin contact or warming, a hat, and recheck; check blood glucose', 'Bathe the baby', 'Do nothing'], 1,
  '新生兒體溫過低會引致低血糖同呼吸問題：肌膚接觸、戴帽、保暖、30 分鐘後再量，同時驗血糖。', 'Her temperature is 35.9; I have started skin-to-skin and will recheck in 30 minutes.');
NE.cs('paed', 'pa20', 'A 7-year-old needs 12 mL of an oral antibiotic. What is the best way to give it?',
  '7 歲小朋友要飲 12 毫升口服抗生素，最好點俾？',
  ['Use a kitchen spoon', 'Use an oral syringe and offer a drink afterwards', 'Mix it into a full bottle of milk', 'Inject it'], 1,
  '用口服針筒量準確；唔好溝入成樽奶，飲唔晒就唔知食咗幾多。', 'I will use an oral syringe so the dose is exact.');
NE.cs('paed', 'pa21', 'A child with asthma uses her reliever inhaler 4 times a day this week. What does this suggest?',
  '哮喘小朋友今個星期每日用舒緩噴劑 4 次。代表咩？',
  ['Asthma is well controlled', 'Asthma is poorly controlled and needs review', 'She is using it correctly', 'She no longer needs a preventer'], 1,
  '要經常用舒緩噴劑代表控制唔好，要檢討預防噴劑、技巧同誘因。', 'She is using her blue inhaler four times a day, so her asthma needs review.');
NE.cs('paed', 'pa22', 'Which immunisation question should you ask on admission of a child with fever and rash?',
  '發燒加出疹嘅小朋友入院，要問咩疫苗問題？',
  ['Whether the MMR and varicella vaccines are up to date', 'Whether the child likes vaccines', 'No need to ask', 'Only ask about flu vaccine'], 0,
  '麻疹、水痘等傳染病要問 MMR 同水痘疫苗，決定是否需要隔離。', 'Are his vaccinations up to date, including MMR?');

// ---- 心血管（加深）----
NE.cs('cardio', 'cv7', 'A patient\'s monitor shows ventricular fibrillation and he is unresponsive. What is the priority?',
  '監察器顯示心室顫動，病人冇反應。首要係？',
  ['Give oxygen and wait', 'Start CPR and defibrillate as soon as possible', 'Do a 12-lead ECG first', 'Give IV fluids'], 1,
  'VF 係可電擊心律：開始 CPR，盡快電擊，每兩分鐘評估一次。', 'VF on the monitor — start compressions and charge the defibrillator.');
NE.cs('cardio', 'cv8', 'A patient on a GTN infusion develops a headache and BP 88/50. What should you do?',
  '用緊硝酸甘油輸注嘅病人頭痛，血壓 88/50。點做？',
  ['Increase the infusion', 'Reduce or stop the infusion per protocol and inform the doctor', 'Give more GTN spray', 'Ignore the headache'], 1,
  '硝酸甘油擴張血管，會引致頭痛同低血壓。血壓低要按指引減或停，通知醫生。', 'Her BP has dropped to 88/50 on the GTN infusion.');
NE.cs('cardio', 'cv9', 'Which instruction is correct for a patient after a radial (wrist) angiogram?',
  '經手腕橈動脈做血管造影後，邊個指示正確？',
  ['Lift heavy shopping that evening', 'Avoid heavy lifting with that arm and report bleeding or a cold hand', 'Remove the wrist band immediately', 'Keep the arm below the heart all night'], 1,
  '橈動脈穿刺後要避免用嗰隻手提重物，留意出血、手凍、麻痺。', 'Please avoid lifting anything heavy with this arm for a few days.');
NE.cs('cardio', 'cv10', 'A patient with new atrial fibrillation has a heart rate of 150 and feels dizzy. What should you check first?',
  '新出現心房顫動，心跳 150，覺得頭暈。首先檢查咩？',
  ['Blood pressure and signs of shock', 'Hair and nails', 'Weight', 'Last bowel movement'], 0,
  '心跳快加頭暈要先睇血壓同有冇休克、胸痛、心衰徵狀，不穩定要即刻上報。', 'His heart rate is 150 in AF and he is dizzy; BP is 92/60.');
NE.cs('cardio', 'cv11', 'A patient asks why he must take aspirin and clopidogrel after a stent. What is the best answer?',
  '病人問點解放支架後要食阿士匹靈同氯吡格雷。最好點答？',
  ['"To lower your cholesterol."', '"To stop clots forming in the new stent; don\'t stop them without asking your doctor."', '"For pain."', '"Only for one week."'], 1,
  '雙抗血小板治療防止支架血栓，自己停藥可能引致心臟病發。', 'These tablets stop clots forming in your stent, so don\'t stop them on your own.');
NE.cs('cardio', 'cv12', 'Which finding suggests a deep vein thrombosis?',
  '以下邊樣提示深層靜脈栓塞？',
  ['Both legs cold and pale', 'One calf swollen, red, warm and painful', 'Numb toes on both feet', 'Dry skin on the shins'], 1,
  '單側小腿腫、紅、熱、痛係 DVT 典型表現，要上報，唔好按摩條腿。', 'His left calf is swollen, warm and tender.');

// ---- 呼吸（加深）----
NE.cs('resp', 're6', 'A patient on a non-rebreather mask: the reservoir bag collapses with each breath. What should you do?',
  '病人戴非再呼吸面罩，儲氣袋每次吸氣都扁晒。點做？',
  ['Nothing; this is normal', 'Increase the oxygen flow so the bag stays inflated (usually 15 L/min)', 'Remove the bag', 'Lower the flow'], 1,
  '儲氣袋要保持脹起，一般需要每分鐘 15 公升；扁晒代表流量唔夠。', 'I have increased the flow to 15 litres so the bag stays inflated.');
NE.cs('resp', 're7', 'A tracheostomy patient suddenly cannot breathe and suction catheter will not pass. What is your FIRST step?',
  '氣管造口病人突然唔能夠呼吸，抽痰喉放唔入。第一步做咩？',
  ['Wait for the doctor', 'Call for help and follow the tracheostomy emergency algorithm (remove inner cannula)', 'Give a nebuliser', 'Lie the patient flat'], 1,
  '可能係造口管阻塞：叫人、俾氧、除內管、再試抽痰，必要時按流程處理。床邊要有後備管同緊急用具。', 'Tracheostomy emergency in bed 7 — I need help now.');
NE.cs('resp', 're8', 'Which position helps a breathless COPD patient the most?',
  '邊個姿勢最幫到氣促嘅慢阻肺病人？',
  ['Lying flat', 'Sitting up and leaning forward with arms supported', 'Lying on the stomach', 'Head down'], 1,
  '向前坐、手撐枱（三腳架姿勢）幫輔助呼吸肌工作，減輕氣促。', 'Try leaning forward with your arms on the table.');
NE.cs('resp', 're9', 'After thoracentesis, the patient becomes suddenly breathless with sharp chest pain. What might have happened?',
  '胸腔穿刺後病人突然氣促同胸口刺痛。可能發生咗咩？',
  ['Pneumothorax', 'Indigestion', 'Normal recovery', 'Anxiety only'], 0,
  '胸腔穿刺嘅併發症係氣胸：檢查血氧、生命表徵、即刻上報，可能要照 X 光。', 'She is suddenly short of breath after the pleural tap; I suspect a pneumothorax.');

// ---- 消化 / 營養 ----
NE.cs('gi', 'gi5', 'A patient on an enteral feed starts coughing and his SpO2 drops during the feed. What should you do FIRST?',
  '管飼期間病人開始咳同血氧下降。第一步做咩？',
  ['Speed up the feed', 'Stop the feed, sit him up and assess for aspiration', 'Flush the tube with 100 mL water', 'Ignore it'], 1,
  '可能係誤吸：即刻停餵、坐直、抽痰（如需要）、評估呼吸、上報、核對喉管位置。', 'I have stopped the feed because he is coughing and desaturating.');
NE.cs('gi', 'gi6', 'A patient after bowel surgery has not passed flatus, has a distended abdomen and is vomiting. What do you suspect?',
  '腸手術後病人未排氣、肚脹、嘔吐。你懷疑咩？',
  ['Paralytic ileus', 'Normal recovery', 'Hunger', 'Urinary tract infection'], 0,
  '術後腸蠕動停止（麻痺性腸塞）：禁食、上報，可能要鼻胃管減壓同靜脈輸液。', 'She has abdominal distension and vomiting, and has not passed flatus.');
NE.cs('gi', 'gi7', 'Which advice is correct for a patient with a new colostomy going home?',
  '新做結腸造口病人出院，邊個建議正確？',
  ['Never shower again', 'Empty the bag when one-third full and report a dark or purple stoma', 'Use a bag that is much bigger than the stoma', 'Stop eating fibre forever'], 1,
  '三分一滿就倒，避免太重甩出；造口變深色、紫色或黑色要即刻求醫。', 'Please call us if your stoma turns dark or purple.');

// ---- 腎科 ----
NE.cs('renal', 'rn5', 'A patient with a urinary catheter has cloudy, smelly urine and a fever of 38.3°C. What should you do?',
  '插尿喉病人尿液混濁有臭味，發燒 38.3 度。點做？',
  ['Flush the catheter with tap water', 'Inform the doctor, send a urine sample from the sampling port and review the need for the catheter', 'Disconnect the bag to drain', 'Ignore it; catheters always smell'], 1,
  '懷疑導尿管相關感染：通知醫生、由取樣口無菌抽尿送驗、檢討係咪仲需要尿喉。唔好斷開密閉系統。', 'I suspect a catheter-associated UTI; I have sent a sample from the port.');
NE.cs('renal', 'rn6', 'After TURP with continuous bladder irrigation, the urine becomes bright red with clots. What should you do?',
  '前列腺切除後持續膀胱沖洗，尿變鮮紅有血塊。點做？',
  ['Stop the irrigation', 'Increase the irrigation rate, check the catheter is draining and inform the doctor', 'Remove the catheter', 'Give a diuretic'], 1,
  '加快沖洗防止血塊塞喉，檢查引流暢通，記錄出入量，出血多要上報。', 'The urine is bright red with clots; I have increased the irrigation.');

// ---- 腦神經 ----
NE.cs('neuro', 'ne4', 'Which GCS motor score describes a patient who pulls his hand away from a painful stimulus (normal flexion)?',
  '病人對痛刺激會縮手（正常屈曲），GCS 運動分數係幾多？',
  ['6', '5', '4', '3'], 2,
  '6 跟指示、5 定位痛楚、4 正常屈曲／縮開、3 異常屈曲、2 伸直、1 冇反應。', 'He withdraws from pain, so his motor score is 4.');
NE.cs('neuro', 'ne5', 'A patient with a spinal cord injury at T4 has a pounding headache and BP 190/100. What should you check FIRST?',
  'T4 脊髓損傷病人劇烈頭痛，血壓 190/100。首先檢查咩？',
  ['His bladder and catheter for a blockage', 'His hair', 'His pupils only', 'His dinner'], 0,
  '自主神經反射異常最常見誘因係膀胱脹：坐直病人、檢查尿喉、大便，同時上報。', 'He may have autonomic dysreflexia; I am checking his catheter.');
NE.cs('neuro', 'ne6', 'How should you communicate with a stroke patient who has expressive aphasia?',
  '同有表達性失語症嘅中風病人溝通，應該點做？',
  ['Speak very loudly', 'Ask yes/no questions, give time and use pictures or a communication board', 'Finish all their sentences quickly', 'Avoid talking to them'], 1,
  '佢明白但講唔出：用是非題、俾時間、用圖卡或者溝通板，唔好扮明。', 'Take your time — you can point to the picture if that\'s easier.');

// ---- 內分泌 ----
NE.cs('endo', 'en4', 'A diabetic patient is drowsy and cannot swallow safely; glucose is 2.4 mmol/L. What should you do?',
  '糖尿病人好渴瞓、吞嚥唔安全，血糖 2.4。點做？',
  ['Give orange juice by mouth', 'Call for help and give IM glucagon or IV glucose per protocol', 'Wait 15 minutes and recheck', 'Give insulin'], 1,
  '唔清醒唔可以經口俾糖（會誤吸）：按指引肌肉注射升糖素或者靜脈葡萄糖，同時上報。', 'She is drowsy with a glucose of 2.4; I am giving glucagon per protocol.');
NE.cs('endo', 'en5', 'Where should insulin in current use be stored?',
  '用緊嘅胰島素應該點儲存？',
  ['In the freezer', 'At room temperature for up to about 4 weeks, away from heat', 'In a hot car', 'In the fridge door forever'], 1,
  '未開嘅雪櫃保存；開咗用緊嘅可以室溫存放大約 4 星期（睇說明書），唔可以雪或者曬熱。', 'Keep the pen you are using at room temperature, and spare pens in the fridge.');
NE.cs('endo', 'en6', 'A patient on long-term steroids is vomiting and cannot keep tablets down. What is the main risk?',
  '長期用類固醇病人嘔吐、食唔落藥。主要風險係咩？',
  ['Adrenal crisis', 'Weight gain', 'High cholesterol', 'Hair loss'], 0,
  '長期類固醇會抑制腎上腺，突然停藥或者病咗可以引致腎上腺危象：要上報，可能要靜脈氫化可的松。', 'He is on long-term steroids and is vomiting; he may need IV hydrocortisone.');

// ---- 骨科 ----
NE.cs('ortho', 'or4', 'A patient in skeletal traction asks you to remove the weights so she can move up the bed. What should you do?',
  '骨牽引病人叫你除咗啲重物等佢可以向床頭移。點做？',
  ['Remove the weights briefly', 'Keep the weights hanging freely and get help to reposition her', 'Rest the weights on the floor', 'Let her pull herself up with the weights on the bed'], 1,
  '牽引重物要一直自由懸空，唔可以除或者放地下。需要多人協助擺位。', 'The weights must stay hanging; let me get a colleague to help you move.');
NE.cs('ortho', 'or5', 'Two days after a femur fracture, a patient becomes confused, breathless and has a petechial rash on the chest. What do you suspect?',
  '股骨骨折後兩日，病人混亂、氣促、胸口有瘀點。你懷疑咩？',
  ['Fat embolism', 'Food allergy', 'Constipation', 'Normal pain'], 0,
  '長骨骨折後 24–72 小時出現呼吸、神志同瘀點三聯徵，提示脂肪栓塞，要即刻上報同俾氧。', 'She is confused and hypoxic with a petechial rash; I suspect fat embolism.');

// ---- 傷口 ----
NE.cs('skin', 'sk3', 'A wound has heavy exudate and the surrounding skin is white and soggy. What is the best dressing approach?',
  '傷口滲液多，周圍皮膚又白又濕。最適合點處理？',
  ['Dry gauze only, changed weekly', 'An absorbent dressing (e.g. foam or alginate), protect the periwound skin and change more often', 'Leave it open to the air', 'Hydrogel to add more moisture'], 1,
  '周圍皮膚浸漬代表滲液控制唔好：用高吸收敷料、保護膜，按滲液量增加換症次數。', 'The periwound skin is macerated, so I will use a more absorbent dressing.');
NE.cs('skin', 'sk4', 'What is the first aid for a hot water scald on the arm?',
  '手臂俾熱水燙傷，急救係？',
  ['Apply ice directly', 'Cool under cool running water for 20 minutes and remove jewellery', 'Apply butter or toothpaste', 'Burst the blisters'], 1,
  '流動冷水沖 20 分鐘、除首飾，再用保鮮紙鬆鬆咁蓋。唔好用冰、牛油或者牙膏，唔好篤水泡。', 'Keep your arm under cool running water for 20 minutes.');

// ---- 腫瘤 ----
NE.cs('haemonc', 'ho3', 'You are giving a vesicant chemotherapy and the patient says the IV site is burning. What is your FIRST action?',
  '你俾緊起泡性化療藥，病人話針口灼熱。第一步做咩？',
  ['Speed up to finish quickly', 'Stop the infusion immediately and follow the extravasation protocol', 'Flush with saline under pressure', 'Remove the cannula and apply heat straight away without checking'], 1,
  '懷疑外滲要即刻停止，按外滲處理流程（抽出殘液、通知醫生、標記範圍、按藥物冷敷或暖敷）。', 'I have stopped the infusion because I suspect extravasation.');
NE.cs('haemonc', 'ho4', 'Which is the most important teaching for a patient with neutropenia going home?',
  '中性白血球低病人出院，最重要嘅教育係？',
  ['Eat sushi for protein', 'Check temperature and go to hospital immediately if 38°C or above', 'Visit crowded places to build immunity', 'Stop washing hands'], 1,
  '發燒係急症：38 度或以上要即刻返醫院。同時注意手部衞生、避免生食同人多地方。', 'If your temperature is 38 or higher, come to hospital straight away.');

// ---- 產科 ----
NE.cs('obs', 'ob3', 'During labour, the CTG shows late decelerations. What should you do?',
  '產程中 CTG 顯示晚期減速。點做？',
  ['Continue as normal', 'Change the mother\'s position, check her BP, stop oxytocin if running and call the obstetrician', 'Ask her to push harder', 'Turn off the monitor'], 1,
  '晚期減速提示胎盤供氧不足：轉左側臥、檢查血壓、停催產素、俾液體／氧（按指引）、即刻通知產科醫生。', 'The CTG shows late decelerations; I have turned her onto her left side.');
NE.cs('obs', 'ob4', 'A woman on magnesium sulphate has a respiratory rate of 10 and absent knee reflexes. What do you suspect?',
  '用緊硫酸鎂嘅婦女呼吸率 10，膝反射消失。你懷疑咩？',
  ['Magnesium toxicity', 'Normal response', 'Anxiety', 'Dehydration'], 0,
  '鎂中毒：反射消失、呼吸慢。停輸注、上報，解毒劑係葡萄糖酸鈣。', 'Her reflexes are absent and her respiratory rate is 10; I have stopped the magnesium.');

// ---- 精神科 ----
NE.cs('mh', 'mh3', 'A patient on an antipsychotic develops a high fever, stiff muscles and confusion. What might this be?',
  '用抗精神病藥嘅病人高燒、肌肉僵硬、神志混亂。可能係咩？',
  ['Neuroleptic malignant syndrome', 'Common cold', 'Normal side effect', 'Dehydration only'], 0,
  '抗精神病藥惡性綜合症係急症：停藥、上報、降溫、監察生命表徵同肌酸激酶。', 'He has fever, rigidity and confusion on an antipsychotic; I suspect NMS.');
NE.cs('mh', 'mh4', 'An older inpatient is suddenly confused, picking at the sheets and seeing insects. She was normal yesterday. What is most likely?',
  '長者住院病人突然混亂、執床單、見到蟲，琴日仲正常。最可能係咩？',
  ['Delirium', 'Schizophrenia', 'Normal ageing', 'Depression'], 0,
  '突然發作、波動嘅混亂同幻覺多數係譫妄，要搵身體原因（感染、藥物、戒酒等）。', 'She has acute confusion and visual hallucinations; I suspect delirium.');

// ---- 急症 ----
NE.cs('er', 'er4', 'A patient with suspected sepsis: which action belongs in the first hour?',
  '懷疑敗血症病人，邊樣屬於第一個鐘要做嘅？',
  ['Wait for all results before antibiotics', 'Take blood cultures and give IV antibiotics', 'Give a sleeping tablet', 'Restrict all fluids'], 1,
  '敗血症六步：俾氧、抽血培養、靜脈抗生素、靜脈輸液、驗乳酸、監察尿量，一小時內完成。', 'Blood cultures are taken; antibiotics are going up now.');
NE.cs('er', 'er5', 'An adult is choking and cannot speak or cough. What should you do?',
  '成年人哽塞，講唔到嘢亦咳唔到。點做？',
  ['Give water', 'Give up to 5 back blows, then up to 5 abdominal thrusts', 'Lie them down and wait', 'Put fingers blindly into the mouth'], 1,
  '嚴重哽塞：最多 5 下背部拍擊，再最多 5 下腹部衝擊，交替進行；失去知覺就開始 CPR。', 'Are you choking? I\'m going to help you.');
NE.cs('er', 'er6', 'A patient is found with a respiratory rate of 6 and pinpoint pupils after taking heroin. What is the antidote?',
  '病人吸食海洛英後呼吸率 6，瞳孔針尖咁細。解毒劑係咩？',
  ['Naloxone', 'Flumazenil', 'Activated charcoal', 'Atropine'], 0,
  '鴉片類藥過量用納洛酮；同時支持呼吸。氟馬西尼係苯二氮平類藥解毒劑。', 'Opioid overdose suspected — naloxone please.');

// ---- 藥理 ----
NE.cs('pharm', 'ph5', '1,000 mL of saline must run over 8 hours using a pump. What rate do you set?',
  '1000 毫升生理鹽水要用 8 個鐘輸完，輸液泵設幾多？',
  ['100 mL/h', '125 mL/h', '150 mL/h', '80 mL/h'], 1, '1000 ÷ 8 = 125 mL/h。', 'I have set the pump at 125 mL per hour.');
NE.cs('pharm', 'ph6', 'A patient says, "That\'s not the colour of my usual tablet." What should you do?',
  '病人話：「呢粒藥唔係我平時嗰隻顏色。」點做？',
  ['Tell him to take it anyway', 'Stop and recheck the prescription and the drug before giving it', 'Give two tablets', 'Throw it away'], 1,
  '病人質疑時一定要停低再核對，可能係藥物轉牌子，亦可能係錯藥。', 'Let me double-check this before you take it.');
NE.cs('pharm', 'ph7', 'Which tablet should NOT be crushed for a patient with an NG tube?',
  '邊種藥丸唔可以磨碎經鼻胃管俾？',
  ['Paracetamol tablet', 'Modified-release (MR) tablet', 'Plain vitamin tablet', 'Folic acid tablet'], 1,
  '緩釋藥磨碎會一次過釋放大量藥，可能中毒。要問藥劑師轉做其他劑型。', 'This is a modified-release tablet; I\'ll ask the pharmacist for a liquid form.');
NE.cs('pharm', 'ph8', 'Before giving IV vancomycin, which level may need to be checked?',
  '俾靜脈萬古霉素之前，可能要檢查咩濃度？',
  ['Trough level', 'Blood glucose', 'Haemoglobin', 'Cholesterol'], 0,
  '萬古霉素治療窗窄，下一劑前抽谷濃度，避免腎毒性。', 'The vancomycin trough level is due before this dose.');

// ---- 感染控制 ----
NE.cs('ipc', 'ic4', 'Which is one of the "five moments" for hand hygiene?',
  '以下邊樣係潔手「五個時刻」之一？',
  ['Before touching a patient', 'Before reading the newspaper', 'Only at the end of the shift', 'Only after using the toilet'], 0,
  '五個時刻：接觸病人前、無菌程序前、接觸體液後、接觸病人後、接觸病人周圍環境後。', 'I always clean my hands before touching a patient.');
NE.cs('ipc', 'ic5', 'A visitor with a cough wants to visit a patient in protective isolation. What should you advise?',
  '有咳嘅訪客想探保護性隔離病人，點建議？',
  ['Visit freely', 'Postpone the visit, or wear a mask and clean hands if the visit is essential and allowed', 'Hug the patient', 'Share the patient\'s food'], 1,
  '免疫力低嘅病人要避免接觸有病徵人士；必要時要戴口罩、潔手，按病房規定。', 'It\'s best to visit when your cough is better, to protect him.');

// ---- 記錄 / 交更 ----
NE.cs('doc', 'dc3', 'You forgot to document a medication you gave 2 hours ago. What should you do?',
  '你兩個鐘前俾咗藥但未記錄。點做？',
  ['Write it with the original time and no note', 'Document it now, clearly marked as a late entry with the current time', 'Ask a colleague to sign it', 'Leave it'], 1,
  '補記要清楚標明係 late entry，寫實際記錄時間同俾藥時間，唔可以扮即時寫。', 'Late entry 16:30: paracetamol 1 g given at 14:30.');
NE.cs('doc', 'dc4', 'During handover, which information is MOST important to share?',
  '交更時邊樣資料最重要？',
  ['The patient\'s favourite TV show', 'Deteriorating observations, pending results and safety risks', 'What you ate for lunch', 'The weather'], 1,
  '交更要集中講安全同臨床重點：轉差嘅徵狀、待辦事項、風險（跌倒、敏感、DNACPR）。', 'Key concerns: his NEWS is rising and his blood results are pending.');

// ---- 法律及操守 ----
NE.cs('ethics', 'et4', 'A competent patient refuses a blood transfusion for religious reasons. What should you do?',
  '有決定能力嘅病人因宗教原因拒絕輸血。點做？',
  ['Give it anyway while she sleeps', 'Respect the decision, inform the doctor and document', 'Ask the family to force her', 'Ignore her and say nothing'], 1,
  '有決定能力嘅成年人有權拒絕治療。尊重、確保佢明白後果、通知醫生、記錄，提供其他選擇。', 'I respect your decision; I will let the doctor know so we can discuss other options.');
NE.cs('ethics', 'et5', 'A colleague posts a ward photo online with a patient visible in the background. What should you do?',
  '同事喺網上貼咗病房相，背景見到病人。你應該點做？',
  ['Like the photo', 'Ask the colleague to remove it and report per policy', 'Share it', 'Do nothing'], 1,
  '侵犯病人私隱違反私隱條例同專業守則，要叫佢即刻刪除，按政策上報。', 'Please take that photo down; a patient can be seen in it.');
NE.cs('ethics', 'et6', 'Which principle means "do no harm"?',
  '邊個原則係「不傷害」？',
  ['Autonomy', 'Beneficence', 'Non-maleficence', 'Justice'], 2,
  'Non-maleficence = 不傷害；Beneficence = 行善；Autonomy = 自主；Justice = 公平。', 'Non-maleficence means avoiding harm to the patient.');

// ---- 專業技巧 ----
NE.cs('prof', 'pr5', 'You have four tasks. Which should you do FIRST?',
  '你有四件事，應該先做邊樣？',
  ['Update the care plan', 'Respond to a patient whose oxygen alarm shows SpO2 85%', 'Restock the dressing trolley', 'Answer a relative\'s phone call about visiting hours'], 1,
  '危及生命嘅情況（血氧 85%）最優先，行政工作可以遲啲。', 'I need to see bed 2 first — her saturation is 85%.');
NE.cs('prof', 'pr6', 'A healthcare assistant reports that a patient\'s BP is 82/48. What is your responsibility?',
  '健康服務助理報告病人血壓 82/48。你嘅責任係咩？',
  ['Tell the assistant to recheck tomorrow', 'Assess the patient yourself immediately and escalate as needed', 'Document only', 'Assume the machine is wrong'], 1,
  '委派咗觀察，但評估同跟進仍然係護士責任：即刻親自評估、再量、上報。', 'Thank you for telling me; I\'ll come and assess him now.');
NE.cs('prof', 'pr7', 'You are overwhelmed with six patients and one is deteriorating. What is the best action?',
  '你有六個病人應付唔到，其中一個轉差。最好點做？',
  ['Keep going alone and skip breaks', 'Tell the nurse in charge, ask for help and prioritise the deteriorating patient', 'Ignore the deteriorating patient until later', 'Leave the ward'], 1,
  '工作量過大要及早話俾主管知同求助；病人安全最重要。', 'I\'m struggling with my workload and bed 5 is deteriorating; can someone help?');
NE.cs('prof', 'pr8', 'A patient\'s family member is angry about waiting times. What is the best first response?',
  '病人家屬因為等太耐好嬲。最好嘅第一句回應係？',
  ['"It\'s not my fault."', '"I can see you\'re frustrated; let me find out what\'s happening."', '"Calm down!"', 'Walk away'], 1,
  '先認同對方感受，再提供資訊或者行動，可以降溫同建立信任。', 'I can see you\'re frustrated; let me find out what is happening.');
NE.cs('prof', 'pr9', 'What should you do at the end of a difficult shift where a patient died?',
  '有病人離世嘅辛苦更之後，你應該點做？',
  ['Keep it to yourself forever', 'Take part in a debrief, talk to a colleague and use support services if needed', 'Work extra shifts to forget', 'Post about it online'], 1,
  '事後解說、同事支援同員工輔導服務幫助處理情緒，預防同理心疲勞同職業倦怠。', 'Could we have a quick debrief after this shift?');

// ---- 老人 / 社康 ----
NE.cs('geri', 'ge3', 'An older patient with dementia keeps trying to leave the ward in the evening. What is the best first approach?',
  '認知障礙長者每晚都想離開病房。最好嘅第一步係？',
  ['Use physical restraints', 'Look for causes (pain, toilet, hunger), reassure, distract and walk with her', 'Give a strong sedative straight away', 'Lock her in a room'], 1,
  '先搵未滿足嘅需要同誘因，用安撫、轉移注意力、陪佢行。約束同鎮靜藥係最後手段。', 'Shall we take a walk together and get a cup of tea?');
NE.cs('geri', 'ge4', 'An older patient is on 11 regular medicines and has had two falls. What might help?',
  '長者定時食 11 種藥，跌咗兩次。咩可能幫到？',
  ['Add a sleeping tablet', 'Request a medication review with the doctor and pharmacist', 'Stop all medicines yourself', 'Restrict her to bed'], 1,
  '多重用藥增加跌倒風險（例如降血壓藥、安眠藥），應安排藥物覆檢，考慮減藥。', 'Could we review her medicines? She has had two falls.');
NE.cs('comm', 'cm3', 'A terminally ill patient tells you he wants to die at home. What should you do?',
  '末期病人話想喺屋企離世。你應該點做？',
  ['Tell him it\'s impossible', 'Listen, document his wishes and inform the team to plan support', 'Change the subject', 'Tell only his family'], 1,
  '尊重病人意願：記錄、通知團隊，討論預設照顧計劃同家居支援。', 'Thank you for telling me; I will share your wishes with the team.');
NE.cs('nutri', 'nu2', 'A malnourished patient starts nasogastric feeding after a week of poor intake. Which blood level must be watched closely?',
  '營養不良病人一星期冇食嘢之後開始鼻胃管餵食，要密切監察邊個血液指標？',
  ['Phosphate', 'Cholesterol', 'Haemoglobin A1c', 'Vitamin C'], 0,
  '再餵食綜合症會令磷、鉀、鎂急跌，要慢慢加量同每日驗血。', 'We need to monitor her phosphate because of the refeeding risk.');
NE.cs('periop', 'po3', 'A patient after spinal anaesthesia cannot move his legs 2 hours later and has not passed urine. What should you check?',
  '半身麻醉後兩個鐘，病人腳仲郁唔到，亦未小便。要檢查咩？',
  ['Sensory/motor recovery and bladder (scan for retention), and report if not improving as expected', 'Nothing; it lasts days', 'Give a laxative', 'Ask him to walk'], 0,
  '記錄麻醉平面恢復進度、膀胱掃描檢查尿瀦留；恢復比預期慢要上報（可能有硬膜外血腫等）。', 'His legs are still numb two hours after the spinal; I will bladder scan and inform the anaesthetist.');
NE.cs('periop', 'po4', 'A post-operative patient says pain is 8/10 but refuses morphine because she fears addiction. What is the best response?',
  '手術後病人痛到 8 分，但怕上癮拒絕嗎啡。最好點回應？',
  ['Force her to take it', 'Explain that short-term use for surgical pain rarely causes addiction and good pain control helps recovery', 'Say nothing', 'Tell her pain is normal and to cope'], 1,
  '解釋短期術後用藥上癮風險低，止痛好有助深呼吸、下床同康復；尊重佢決定，亦可以提供其他止痛選擇。', 'Good pain control helps you breathe deeply and get moving.');
NE.cs('ap', 'ap1', 'A patient is lying on her back. Which term describes this position?',
  '病人仰面瞓喺床，呢個姿勢叫咩？',
  ['Prone', 'Supine', 'Lateral', 'Fowler\'s'], 1, 'Supine = 仰臥；prone = 俯臥；lateral = 側臥；Fowler\'s = 半坐臥。', 'Please lie supine for the examination.');
NE.cs('ap', 'ap2', 'Which term means "closer to the trunk"?',
  '邊個字解「靠近身軀」？',
  ['Distal', 'Lateral', 'Proximal', 'Inferior'], 2, 'Proximal = 近端；distal = 遠端。例如手肘係手腕嘅近端。', 'The fracture is in the proximal humerus.');
NE.cs('eent', 'ee1', 'A patient has a nosebleed. What is the correct first aid?',
  '病人流鼻血，正確急救係？',
  ['Tilt the head back', 'Sit forward and pinch the soft part of the nose for 10–15 minutes', 'Lie flat', 'Blow the nose hard'], 1,
  '向前傾防止血流入喉，捏住鼻翼軟骨 10–15 分鐘。仰頭會吞血引致嘔吐。', 'Lean forward and pinch the soft part of your nose.');
NE.cs('eent', 'ee2', 'After a tonsillectomy, a child is swallowing frequently. What might this indicate?',
  '扁桃腺切除後小朋友頻密吞嚥，可能代表咩？',
  ['Hunger', 'Bleeding from the operation site', 'Normal recovery', 'Boredom'], 1,
  '頻密吞嚥可能係吞緊血，要檢查喉嚨、生命表徵，即刻上報。', 'He is swallowing frequently; I am worried about bleeding.');
NE.cs('lab', 'lb1', 'The lab phones a critical potassium of 2.6 mmol/L. What should you do?',
  '化驗室致電報告危急值鉀 2.6。點做？',
  ['Wait until the morning round', 'Read back the result, inform the doctor immediately and document', 'Ignore it', 'Give a banana and forget it'], 1,
  '危急值要覆述確認、即刻通知醫生、記錄通知時間。低血鉀可以引致心律不整。', 'Potassium 2.6, read back and confirmed; I am informing Dr Chan now.');
NE.cs('lab', 'lb2', 'A potassium result of 6.9 comes back, but the sample was haemolysed. What should you do?',
  '鉀報告 6.9，但樣本溶血。點做？',
  ['Treat it as definitely high and give insulin without checking', 'Inform the doctor and arrange a repeat sample urgently; check an ECG if concerned', 'Ignore it', 'Change the result'], 1,
  '溶血可以令鉀假性偏高，但唔可以假設冇事：通知醫生、盡快再抽，擔心就做心電圖。', 'The sample was haemolysed; can we repeat it urgently?');
