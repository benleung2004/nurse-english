// 🩺 臨床情境題（四）：原創題目
// NE.cs(科目, id, 英文情境, 中文意思, [4 個選項], 正確答案 0–3, 中文解釋, 實用英文句)

NE.cs('paed', 'pa29', 'A 2-month-old has a temperature of 38.2°C but looks well. What is the correct action?',
  '2 個月大 BB 發燒 38.2 度，但睇落精神唔錯。正確做法係？',
  ['Give paracetamol and send home', 'Treat as high risk — inform the doctor promptly for full assessment', 'Wait 24 hours', 'Bathe in cold water'], 1,
  '3 個月以下嬰兒發燒 38 度或以上屬高風險，可能係嚴重細菌感染，要即刻上報做全面評估。', 'He is two months old with a temperature of 38.2; he needs an urgent review.');
NE.cs('paed', 'pa30', 'Which sign is a LATE sign of shock in a child?',
  '以下邊樣係兒童休克嘅後期徵狀？',
  ['Fast heart rate', 'Cool peripheries', 'Low blood pressure', 'Prolonged capillary refill'], 2,
  '小朋友會靠心跳加快同收窄血管維持血壓，血壓跌已經係後期，好危險。要及早留意心跳同 CRT。', 'His blood pressure is now low; this is a late sign of shock.');
NE.cs('paed', 'pa31', 'A breastfed newborn is very yellow on day 2 and sleepy, feeding poorly. What should you do?',
  '餵母乳新生 BB 第二日好黃，好渴瞓、食得差。點做？',
  ['Wait for it to settle', 'Check the bilirubin level and inform the doctor', 'Stop breastfeeding permanently', 'Put the baby in sunlight at home'], 1,
  '頭 24–48 小時明顯黃疸加食得差同渴瞓要驗膽紅素，可能要照燈。唔好叫媽媽停餵母乳。', 'She is very jaundiced and sleepy; can we check her bilirubin?');
NE.cs('paed', 'pa32', 'A child with a VP shunt has headache, vomiting and is drowsy. What might this indicate?',
  '有腦室腹腔分流管嘅小朋友頭痛、嘔吐、渴瞓。可能代表咩？',
  ['Shunt blockage or infection causing raised intracranial pressure', 'Normal growing pains', 'Hunger', 'Constipation only'], 0,
  '分流管塞咗會令顱內壓升高，係急症，要即刻上報。', 'He has a VP shunt and is vomiting and drowsy; I suspect a shunt problem.');
NE.cs('paed', 'pa33', 'A 6-year-old needs an IV cannula. What is the BEST way to reduce distress?',
  '6 歲小朋友要插靜脈針，最好點減少佢嘅不安？',
  ['Surprise the child without explanation', 'Use numbing cream, prepare the child honestly, and use distraction with a parent present', 'Hold the child down firmly by several staff without preparation', 'Tell the child they are naughty'], 1,
  '準備、麻醉膏、分散注意力、家長陪伴同安撫式擺位，盡量減少約束。', 'We\'ll put some magic cream on first, and you can watch a video.');
NE.cs('paed', 'pa34', 'A toddler swallowed a button battery 30 minutes ago and seems fine. What should you advise?',
  '學步兒 30 分鐘前吞咗粒鈕扣電池，睇落冇事。點建議？',
  ['Wait and see', 'Go to the emergency department immediately; an X-ray is needed', 'Give lots of milk and go home', 'Make the child vomit'], 1,
  '鈕扣電池卡喺食道可以幾個鐘內燒穿，就算冇徵狀都要即刻去急症照 X 光。', 'She has swallowed a button battery; this is an emergency.');

NE.cs('pharm', 'ph11', 'A patient is prescribed 0.5 mg of a drug. The tablets are 250 micrograms each. How many tablets?',
  '處方 0.5 毫克，每粒藥 250 微克。俾幾多粒？',
  ['1', '2', '4', '0.5'], 1, '0.5 mg = 500 micrograms；500 ÷ 250 = 2 粒。單位轉換要小心。', '0.5 mg is 500 micrograms, so two tablets.');
NE.cs('pharm', 'ph12', 'An IV antibiotic of 100 mL must run over 30 minutes. What pump rate do you set?',
  '100 毫升靜脈抗生素要 30 分鐘輸完，輸液泵設幾多？',
  ['100 mL/h', '200 mL/h', '50 mL/h', '300 mL/h'], 1, '100 mL ÷ 0.5 h = 200 mL/h。', 'I\'ve set the pump at 200 mL per hour.');
NE.cs('pharm', 'ph13', 'Before giving furosemide, which blood result is most important to check?',
  '俾呋塞米前，最重要檢查邊個驗血結果？',
  ['Potassium', 'Cholesterol', 'Haemoglobin A1c', 'Vitamin D'], 0, '利尿劑會令鉀流失，低鉀可以引致心律不整。', 'His potassium is 3.2, so I\'ll check with the doctor before giving furosemide.');
NE.cs('pharm', 'ph14', 'A patient refuses his 8 a.m. medication. What should you do?',
  '病人拒絕食朝早 8 點嘅藥。點做？',
  ['Hide it in his food', 'Explore the reason, explain the purpose, respect his decision, document and inform the doctor', 'Mark it as given', 'Throw it away and say nothing'], 1,
  '了解原因、解釋、尊重有決定能力嘅病人、記錄拒絕同通知醫生。絕不可以記成已俾。', 'Can you tell me why you don\'t want to take it?');

NE.cs('ipc', 'ic8', 'Which item goes into the sharps container?',
  '以下邊樣要放入利器收集箱？',
  ['Used gloves', 'Used needle and syringe', 'Empty IV bag without a spike', 'Paper towel'], 1, '用過嘅針同針筒成套直接放入利器箱，唔好套蓋或者拆開。', 'Dispose of the needle and syringe together in the sharps bin.');
NE.cs('ipc', 'ic9', 'A blood spill occurs on the floor. What is the correct first step?',
  '地下有血漬，正確第一步係？',
  ['Wipe it with a dry tissue without gloves', 'Put on gloves and use the spill kit according to policy', 'Leave it for the cleaner tomorrow', 'Cover it with a newspaper'], 1,
  '戴手套等防護裝備，用溢漏處理包（含氯消毒劑）按指引清理。', 'I\'ll get the spill kit and put on gloves.');

NE.cs('lab', 'lb5', 'A diabetic patient\'s HbA1c is 10%. What does this suggest?',
  '糖尿病人糖化血紅素 10%，代表咩？',
  ['Excellent control', 'Poor blood sugar control over the past 3 months', 'Low blood sugar today', 'Kidney failure'], 1, 'HbA1c 反映三個月平均血糖，10% 屬控制差，需要檢討治療同教育。', 'Her HbA1c is 10%, so her control over the last three months has been poor.');
NE.cs('lab', 'lb6', 'Which result would make you most concerned about bleeding risk?',
  '以下邊個結果最令你擔心出血風險？',
  ['Platelets 250', 'INR 1.0', 'Platelets 18', 'Haemoglobin 135'], 2, '血小板 18 好低，出血風險高；正常大約 150–400。', 'His platelets are 18, so he is at high risk of bleeding.');

NE.cs('doc', 'dc6', 'A patient tells you something important about his allergy during the night. What should you do?',
  '夜晚病人話俾你知關於佢敏感嘅重要資料。點做？',
  ['Remember it and tell someone next week', 'Document it, update the allergy record and wristband, and inform the doctor', 'Write it on your hand', 'Ignore it'], 1,
  '敏感資料要即刻記錄、更新敏感手帶同系統、通知醫生同藥房，交更時亦要講。', 'He reports a penicillin allergy with a rash; I have updated his records.');
NE.cs('doc', 'dc7', 'Which abbreviation should be avoided because it can be misread?',
  '以下邊個縮寫應該避免，因為容易睇錯？',
  ['mg', 'U (for units)', 'mL', 'IV'], 1, '「U」可以睇成 0 或者 4，應該寫全「units」。', 'Please write "units" in full.');

NE.cs('ethics', 'et8', 'A patient asks you to keep a secret: he plans to stop his dialysis. What should you do?',
  '病人叫你保密：佢打算停止洗腎。點做？',
  ['Promise to keep it secret', 'Explain you need to share it with the team for his safety, and listen to his reasons', 'Tell his neighbours', 'Argue with him'], 1,
  '影響病人安全嘅資料唔可以承諾保密；要聆聽、了解原因，同團隊分享，尊重佢嘅自主決定同評估能力。', 'Thank you for telling me; I need to share this with your doctor so we can talk about it together.');
NE.cs('ethics', 'et9', 'A family asks you not to tell an older patient that she has cancer. What is the best response?',
  '家屬叫你唔好話俾長者病人知佢有癌症。最好點回應？',
  ['Agree and lie to the patient', 'Listen to their concerns, explain the patient\'s right to information, and involve the doctor', 'Tell the patient immediately without the doctor', 'Ignore the family'], 1,
  '要尊重病人知情權，同時理解家屬擔心（文化因素），由醫生同團隊一齊處理點樣告知。', 'I understand you want to protect her; let\'s talk with the doctor about how to share this.');

NE.cs('prof', 'pr12', 'You have just started a night shift with 8 patients. What is the BEST first step after handover?',
  '你啱啱開始夜更，有 8 個病人。交更後最好嘅第一步係？',
  ['Start the paperwork', 'Do a quick safety round of all patients and plan your shift by priority', 'Take a break', 'Restock supplies'], 1,
  '先巡一次所有病人確認安全（尤其高風險嘅），再按優先次序計劃全晚工作。', 'I\'ll do a quick safety check on everyone first.');
NE.cs('prof', 'pr13', 'A patient\'s observations are normal, but you feel "something is not right". What should you do?',
  '病人生命表徵正常，但你覺得「有啲唔對路」。點做？',
  ['Ignore the feeling', 'Reassess more closely, increase observations, and share your concern with a senior', 'Wait until the morning', 'Give a sedative'], 1,
  '護士嘅臨床直覺好重要：再仔細評估、增加觀察、同資深同事或醫生講你嘅擔心。', 'His numbers are normal, but I\'m worried; could you have a look?');
NE.cs('prof', 'pr14', 'A doctor gives you a verbal order during an emergency. What is the safest practice?',
  '急救時醫生口頭俾醫囑。最安全嘅做法係？',
  ['Do it without repeating', 'Repeat the order back, confirm, then document and get it signed later', 'Ask a student to remember it', 'Ignore it until written'], 1,
  '口頭醫囑要覆述確認（closed-loop），事後記錄同請醫生簽名。', 'Adrenaline 1 mg IV, giving now.');
NE.cs('prof', 'pr15', 'Which statement shows good teamwork during handover?',
  '以下邊句顯示交更時良好團隊合作？',
  ['"I don\'t have time to explain."', '"Here are my three main concerns, and these tasks are still pending."', '"Read the notes yourself."', '"Everything is fine" without details'], 1,
  '清楚講重點同待辦事項，令下一更可以安全接手。', 'My three main concerns tonight are…');

NE.cs('geri', 'ge7', 'An older patient is found on the floor and cannot remember what happened. Which observations are needed?',
  '長者被發現喺地下，記唔起發生咩事。需要做咩觀察？',
  ['None if no visible injury', 'Neuro observations and vital signs, and inform the doctor — especially if on anticoagulants', 'Only temperature', 'Only blood sugar next week'], 1,
  '未目睹跌倒、記唔起或者撞頭（尤其用薄血藥）要做神經觀察同上報，可能要 CT。', 'Unwitnessed fall, no memory of the event, on apixaban — I\'ve started neuro obs.');
NE.cs('geri', 'ge8', 'An older patient has lost 5 kg in 2 months without trying. What should you do?',
  '長者兩個月內非刻意減咗 5 公斤。點做？',
  ['Nothing; older people lose weight', 'Do nutritional screening, check intake and dentures, and refer to the dietitian and doctor', 'Give only water', 'Tell her to eat more and leave'], 1,
  '非刻意減重係營養不良同潛在疾病警號：篩查、記錄飲食、檢查假牙同吞嚥、轉介。', 'She has lost 5 kg in two months; could we refer her to the dietitian?');

NE.cs('obs', 'ob8', 'A pregnant woman at 32 weeks reports reduced fetal movements since yesterday. What should you advise?',
  '32 週孕婦話由琴日開始胎動減少。點建議？',
  ['Wait until next week\'s appointment', 'Come to hospital now for assessment (CTG)', 'Drink cold water and sleep', 'Count movements next month'], 1,
  '胎動減少要即日評估（CTG 等），唔好等。', 'Please come in now so we can check the baby\'s heartbeat.');
NE.cs('mh', 'mh8', 'A patient with mania has not slept for 3 days and is spending money wildly. What is a priority?',
  '躁狂病人三日冇瞓，亂咁花錢。優先處理咩？',
  ['Encourage more activity', 'Safety, reducing stimulation, ensuring rest, food and fluids, and medication as prescribed', 'Give him his credit card', 'Leave him alone'], 1,
  '躁狂期要照顧基本需要（睡眠、飲食）、減少刺激、保障安全同財產、按醫囑用藥。', 'Let\'s find a quiet room where you can rest.');

NE.cs('er', 'er8', 'At triage, which patient should be seen FIRST?',
  '分流時，邊個病人應該最先睇？',
  ['A man with a sprained ankle', 'A woman with chest pain and sweating', 'A child with a mild cold', 'A patient needing a sick certificate'], 1,
  '胸痛加出汗可能係心肌梗塞，屬危急，最優先。', 'She has chest pain with diaphoresis; she needs to be seen immediately.');
NE.cs('er', 'er9', 'A patient has a deep cut on the forearm that is bleeding heavily. What is the FIRST action?',
  '病人前臂深切口大量出血。第一步做咩？',
  ['Look for a plaster', 'Apply firm direct pressure and elevate the arm', 'Wash it under the tap for 10 minutes', 'Apply a tourniquet first in all cases'], 1,
  '直接用力按壓同抬高係止血第一步；危及生命而直接按壓無效先考慮止血帶。', 'Keep firm pressure on the wound and raise your arm.');

NE.cs('periop', 'po7', 'Which item must be removed before a patient goes to theatre?',
  '病人入手術室前要除咩？',
  ['Identity wristband', 'Jewellery and nail polish', 'Hospital gown', 'Compression stockings (if prescribed)'], 1,
  '首飾（電刀灼傷風險）同甲油（影響血氧計）要除；手帶同處方壓力襪要保留。', 'Please remove your rings and nail polish before the operation.');

NE.cs('comm', 'cm6', 'A patient with dementia lives alone and keeps forgetting to eat. What community support might help?',
  '獨居認知障礙病人成日唔記得食飯。咩社區支援可能幫到？',
  ['None', 'Meal delivery service, home help and a referral to the social worker', 'Lock the fridge', 'Tell her to try harder'], 1,
  '送飯服務、家務助理、社工跟進、家人支援，必要時考慮日間中心或院舍。', 'We can arrange meal delivery and ask the social worker to visit.');
NE.cs('comm', 'cm7', 'A patient in palliative care asks, "Am I dying?" What is the best initial response?',
  '紓緩治療病人問：「我係咪就快死？」最好嘅初步回應係？',
  ['"Of course not!"', '"What makes you ask that?" — listen and explore his understanding', 'Change the subject quickly', 'Leave the room'], 1,
  '先探索佢嘅理解同擔心，聆聽，再按情況誠實回應或者請醫生一齊傾。', 'That\'s an important question. What makes you ask?');

NE.cs('nutri', 'nu5', 'Which patient needs a fluid restriction most?',
  '邊個病人最需要限水？',
  ['A patient with severe heart failure and oedema', 'A patient with dehydration', 'A patient with a UTI', 'A patient after gastroenteritis'], 0,
  '嚴重心衰同水腫要限水；脫水、尿道炎、腸胃炎反而要補水。', 'His fluid restriction is 1.5 litres a day because of heart failure.');
NE.cs('ap', 'ap5', 'Where would you feel the radial pulse?',
  '橈動脈脈搏喺邊度摸？',
  ['On the neck', 'On the thumb side of the wrist', 'Behind the knee', 'On top of the foot'], 1,
  '橈動脈喺手腕拇指嗰邊；頸係頸動脈，膝後係膕動脈，腳背係足背動脈。', 'I\'ll feel your pulse at your wrist.');
NE.cs('eent', 'ee4', 'How should you speak to a patient with hearing loss?',
  '同聽力受損嘅病人講嘢，應該點做？',
  ['Shout from behind', 'Face the patient, speak clearly at a normal pace, reduce background noise', 'Speak very fast', 'Cover your mouth'], 1,
  '面對面（方便讀唇）、講清楚、減少背景噪音、確認助聽器有開。', 'I\'ll sit in front of you so you can see my face.');
NE.cs('skin', 'sk8', 'A patient with incontinence has red, sore skin on the buttocks without a wound. What is the best care?',
  '失禁病人臀部皮膚紅痛但冇傷口。最好嘅護理係？',
  ['Use soap and hot water often', 'Gentle pH-balanced cleanser, pat dry, apply a barrier cream and change pads promptly', 'Leave the pad on longer', 'Use talcum powder heavily'], 1,
  '失禁相關皮炎：溫和清潔、輕拍乾、保護膏、及時更換尿片。', 'I\'ll clean gently and apply barrier cream.');
NE.cs('haemonc', 'ho8', 'Before a blood transfusion, which check is essential?',
  '輸血前邊項核對係必要？',
  ['Patient\'s favourite food', 'Two-person bedside check of patient ID, blood group and unit against the prescription', 'Room temperature only', 'Checking the patient\'s phone'], 1,
  '床邊雙人核對病人身份、血型、血袋編號同處方，係預防輸錯血嘅關鍵。', 'Can you check this blood with me at the bedside?');
NE.cs('neuro', 'ne9', 'A patient with a new stroke has a blood pressure of 175/95 and is waiting for a CT. What should you avoid?',
  '新中風病人血壓 175/95，等緊照 CT。要避免咩？',
  ['Giving food or drink before a swallow screen', 'Monitoring neuro obs', 'Keeping the patient safe', 'Recording the time of onset'], 0,
  '未做吞嚥篩查唔好俾食物飲品，防止誤吸。血壓處理按醫生指示。', 'Nil by mouth until the swallow screen is done.');
NE.cs('endo', 'en9', 'A patient with diabetes has a small cut on the foot. What advice is best?',
  '糖尿病人腳有細傷口。最好嘅建議係？',
  ['Ignore it', 'Clean and cover it, check daily and seek help early if red, swollen or not healing', 'Walk barefoot to let it breathe', 'Use a hot water bottle'], 1,
  '糖尿腳感覺差、癒合慢：清潔、包紮、每日檢查，有感染徵狀即刻求醫。', 'Check your foot every day and see us if it gets red or swollen.');
NE.cs('cardio', 'cv14', 'A patient with chest pain has an ECG showing ST elevation. What is the likely urgent treatment?',
  '胸痛病人心電圖顯示 ST 段上升，可能嘅緊急治療係？',
  ['Physiotherapy', 'Emergency coronary reperfusion (PCI or thrombolysis)', 'Discharge home', 'A sleeping tablet'], 1,
  'STEMI 要盡快再灌注：通波仔（PCI）或者溶栓，時間愈快愈好。', 'The ECG shows ST elevation; we need to activate the cath lab.');
NE.cs('resp', 're11', 'A patient using home oxygen wants to cook with a gas stove. What is the safety advice?',
  '用家居氧氣嘅病人想用煤氣煮飯。安全建議係？',
  ['It is safe', 'Keep oxygen away from open flames and never smoke near it', 'Turn up the oxygen while cooking', 'Hang the tubing over the stove'], 1,
  '氧氣助燃，要遠離明火同煙，否則有火警風險。', 'Please keep your oxygen at least two metres away from the stove.');
NE.cs('gi', 'gi10', 'A patient with a PEG tube: which practice is correct?',
  '有胃造口（PEG）嘅病人，邊個做法正確？',
  ['Lie flat during feeds', 'Flush before and after feeds and medicines, and keep the head raised during and after feeding', 'Never flush the tube', 'Crush modified-release tablets into it'], 1,
  '餵食同俾藥前後要沖管防塞，餵食時同之後頭部抬高預防誤吸。', 'I\'ll flush the tube with 30 mL of water first.');
NE.cs('renal', 'rn9', 'A patient on haemodialysis feels dizzy and his BP drops during dialysis. What is a likely cause?',
  '洗血病人洗緊血時頭暈、血壓下降。可能原因係？',
  ['Too much fluid removed too quickly', 'Eating too much salt yesterday', 'Normal response', 'High potassium'], 0,
  '透析期間脫水太快會引致低血壓：通知透析護士、調整、平臥抬腳等。', 'His BP has dropped to 85/50 during dialysis and he feels dizzy.');
NE.cs('ortho', 'or8', 'Why is early mobilisation important after hip surgery in older patients?',
  '點解長者髖部手術後要及早下床？',
  ['It is not important', 'It reduces the risk of pneumonia, DVT, pressure injuries and loss of function', 'It increases pain', 'It delays discharge'], 1,
  '及早活動減少肺炎、血栓、壓瘡同功能衰退，加快康復。', 'Let\'s get you sitting out of bed today with the physio.');
