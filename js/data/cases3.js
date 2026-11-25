// 🩺 臨床情境題（三）：原創題目，補足各科
// NE.cs(科目, id, 英文情境, 中文意思, [4 個選項], 正確答案 0–3, 中文解釋, 實用英文句)

NE.cs('skin', 'sk5', 'A pressure injury shows full-thickness skin loss with visible fat but no bone or tendon. What stage is it?',
  '壓瘡全層皮膚缺損，見到脂肪，但冇見骨或者肌腱。屬第幾期？',
  ['Stage 1', 'Stage 2', 'Stage 3', 'Stage 4'], 2,
  '第三期：全層皮膚缺損，見到皮下脂肪；見到骨、肌腱或肌肉先係第四期。', 'This is a stage 3 pressure injury on the sacrum.');
NE.cs('skin', 'sk6', 'A wound is red, hot and swollen with pus, and the patient has a fever. What should you do?',
  '傷口紅熱腫有膿，病人仲發燒。點做？',
  ['Apply more dressing and wait', 'Take a wound swab, mark the redness and inform the doctor', 'Leave it uncovered', 'Squeeze out the pus'], 1,
  '傷口感染加全身反應：做拭子、畫低紅腫範圍監察擴散、通知醫生，可能要抗生素。', 'The wound looks infected and he has a fever; I have taken a swab.');
NE.cs('skin', 'sk7', 'Which patient is at HIGHEST risk of pressure injury?',
  '邊個病人生壓瘡風險最高？',
  ['A mobile 30-year-old after day surgery', 'A malnourished, incontinent 85-year-old on bed rest', 'A child with a sprained ankle', 'A walking patient with a cold'], 1,
  '不能活動、營養不良、失禁、高齡都係壓瘡風險因素，要用柏登量表評估同預防。', 'His Braden score is 11, which is high risk.');
NE.cs('haemonc', 'ho5', 'A patient on chemotherapy has painful mouth ulcers and cannot eat. What should you do?',
  '化療病人口腔潰瘍好痛，食唔到嘢。點做？',
  ['Tell him to use a hard toothbrush', 'Assess the mouth, offer prescribed mouthwash and analgesia, and refer to the dietitian', 'Ignore it; it is normal', 'Give spicy food'], 1,
  '黏膜炎要評估、用處方漱口水同止痛、軟毛牙刷、軟凍食物，營養師跟進。', 'He has grade 3 mucositis and needs mouth care and analgesia.');
NE.cs('haemonc', 'ho6', 'A patient with a platelet count of 15 × 10⁹/L needs care. Which action should you avoid?',
  '病人血小板 15，邊樣做法要避免？',
  ['Soft toothbrush', 'Intramuscular injections', 'Checking for bleeding', 'Electric razor'], 1,
  '血小板好低出血風險高：避免肌肉注射、直腸探熱、硬牙刷；留意瘀傷同出血。', 'His platelets are 15, so no IM injections please.');
NE.cs('haemonc', 'ho7', 'A patient with lung cancer develops facial swelling, distended neck veins and breathlessness. What do you suspect?',
  '肺癌病人面腫、頸靜脈脹、氣促。你懷疑咩？',
  ['Superior vena cava obstruction', 'Allergic reaction to food', 'Normal fluid retention', 'Anxiety'], 0,
  '上腔靜脈阻塞係腫瘤科急症：坐直病人、俾氧、即刻上報。', 'She has facial swelling and distended neck veins; I suspect SVCO.');
NE.cs('obs', 'ob5', 'A new mother asks how to tell if her breastfed baby is latched correctly. What is a good sign?',
  '新手媽媽問點知 BB 含乳啱唔啱，邊個係好嘅跡象？',
  ['Nipple pain throughout the feed', 'Wide-open mouth, more areola above the top lip, and audible swallowing', 'Clicking sounds', 'Cheeks sucked in'], 1,
  '正確含乳：大口、上唇上面見多啲乳暈、聽到吞嚥聲、媽媽唔痛。痛、咔咔聲同面頰凹入係含乳唔好。', 'I can hear him swallowing — that\'s a good latch.');
NE.cs('obs', 'ob6', 'A woman 3 days after a caesarean section has a painful, swollen calf. What do you suspect?',
  '剖腹產後第三日，婦女小腿腫痛。你懷疑咩？',
  ['Deep vein thrombosis', 'Normal post-operative pain', 'Muscle cramp from walking', 'Low calcium'], 0,
  '產後同手術後都係血栓高風險期，單側小腿腫痛要上報，唔好按摩。', 'She has a swollen, painful left calf three days after her caesarean.');
NE.cs('obs', 'ob7', 'Two weeks after birth, a mother says she cries all day and cannot sleep even when the baby sleeps. What should you do?',
  '產後兩星期，媽媽話成日喊，BB 瞓咗佢都瞓唔著。點做？',
  ['Tell her it is just baby blues', 'Listen, screen for postnatal depression and refer for support', 'Tell her to try harder', 'Ignore it'], 1,
  '超過兩星期嘅情緒低落唔係 baby blues，要篩查產後抑鬱、問有冇傷害自己或 BB 嘅念頭、轉介。', 'How have you been feeling in yourself since the birth?');
NE.cs('mh', 'mh5', 'A patient with depression suddenly seems calm and gives away her belongings. What should you consider?',
  '抑鬱病人突然變得平靜，仲將自己啲嘢送俾人。你應該考慮咩？',
  ['She has fully recovered', 'Increased suicide risk — reassess and inform the team', 'She is being generous', 'Discharge her today'], 1,
  '突然平靜同送嘢可能代表已經決定自殺，要即刻重新評估風險、加強觀察、上報。', 'I\'ve noticed some changes and I\'m worried; can we talk about how you are feeling?');
NE.cs('mh', 'mh6', 'A patient with alcohol dependence was admitted 2 days ago. He is sweating, shaking and seeing things. What is happening?',
  '酒精依賴病人兩日前入院，而家出汗、手震、見到嘢。發生咩事？',
  ['Alcohol withdrawal, possibly delirium tremens', 'He is cold', 'Normal anxiety', 'He drank too much water'], 0,
  '停酒 48–72 小時可能出現嚴重戒酒徵狀／震顫性譫妄：上報、按指引評分同用藥、預防抽筋同受傷。', 'He has tremor, sweating and hallucinations two days after his last drink.');
NE.cs('mh', 'mh7', 'Which communication approach is best for a patient experiencing hallucinations?',
  '病人有幻覺，最好用咩溝通方式？',
  ['Argue that the voices are not real', 'Acknowledge the experience without agreeing, and focus on reality and safety', 'Pretend to hear the voices too', 'Ignore the patient'], 1,
  '唔好爭拗亦唔好附和：承認佢嘅經歷（「聽到啲聲一定好辛苦」），帶返現實，評估安全。', 'That sounds frightening; I can\'t hear the voices, but I\'m here with you.');
NE.cs('gi', 'gi8', 'A patient with acute pancreatitis has severe abdominal pain. Which is usually part of early care?',
  '急性胰臟炎病人肚好痛，早期護理通常包括咩？',
  ['A large fatty meal', 'IV fluids, pain relief, and close monitoring of fluid balance', 'Walking 5 km', 'Restricting all fluids'], 1,
  '胰臟炎要靜脈輸液、止痛、監察出入量同血糖，必要時禁食或者調整飲食。', 'She needs IV fluids and regular pain assessment.');
NE.cs('gi', 'gi9', 'A patient has had no bowel movement for 5 days and is on regular morphine. What should you do?',
  '病人 5 日冇大便，定時用緊嗎啡。點做？',
  ['Nothing; this is normal', 'Assess the abdomen, encourage fluids and mobility, and give prescribed laxatives', 'Stop the morphine yourself', 'Restrict fluids'], 1,
  '鴉片類藥常引致便秘：評估、多飲水多活動、按處方用瀉藥，持續就上報。', 'He hasn\'t opened his bowels for five days; his laxatives need review.');
NE.cs('renal', 'rn7', 'A patient\'s urine output is 20 mL/h for 2 hours and he weighs 80 kg. Is this adequate (target at least 0.5 mL/kg/h)?',
  '病人 80 公斤，兩個鐘每小時 20 毫升尿。夠唔夠（目標最少每公斤每小時 0.5 毫升）？',
  ['Yes, it is more than enough', 'No, it is below 40 mL/h and should be reported', 'Yes, exactly enough', 'Urine output does not matter'], 1,
  '0.5 × 80 = 40 mL/h，20 mL/h 屬少尿，要檢查尿喉、評估水分同上報。', 'His urine output is 20 mL an hour, below his target of 40.');
NE.cs('renal', 'rn8', 'Which food should a patient with high potassium limit?',
  '高血鉀病人應該少食邊樣？',
  ['Bananas and oranges', 'White rice', 'Egg whites', 'Apples'], 0,
  '香蕉、橙、薯仔、番茄、乾果含鉀高；蘋果、白飯相對低鉀。具體跟營養師建議。', 'Try to limit bananas, oranges and potatoes.');
NE.cs('neuro', 'ne7', 'A patient after a stroke has left-sided neglect. How should you arrange the bedside?',
  '中風病人有左側忽略，床邊應該點樣佈置？',
  ['Put everything on the left only', 'Approach and place items mainly on the unaffected right side, while gently encouraging attention to the left', 'Leave the call bell out of reach', 'Keep the room dark'], 1,
  '重要物品（召喚鐘、水）放喺佢留意到嘅一邊確保安全，同時逐步鼓勵佢留意受影響嗰邊。', 'I\'ve put your call bell on your right side so you can reach it.');
NE.cs('neuro', 'ne8', 'During a tonic-clonic seizure lasting over 5 minutes, what is the likely next step?',
  '強直陣攣發作超過 5 分鐘，下一步通常係？',
  ['Keep waiting', 'Call for help and give prescribed emergency anticonvulsant (e.g. buccal or IV benzodiazepine)', 'Give food', 'Hold the patient down'], 1,
  '超過 5 分鐘屬癲癇持續狀態，要按醫囑俾急救抗抽筋藥、保護氣道、俾氧、上報。', 'The seizure has lasted five minutes; please give the rescue medication.');
NE.cs('endo', 'en7', 'A patient\'s glucose is 22 mmol/L before dinner, and a sliding-scale insulin is prescribed. What should you also check?',
  '病人晚飯前血糖 22，有浮動劑量胰島素處方。仲要檢查咩？',
  ['Blood ketones and signs of DKA/HHS', 'Hair colour', 'Eye colour', 'Nothing else'], 0,
  '血糖高要驗血酮，睇有冇嘔吐、肚痛、深快呼吸等酮酸中毒徵狀，按指引俾胰島素同上報。', 'Glucose is 22 and ketones are 0.4; I have given insulin per the scale.');
NE.cs('endo', 'en8', 'Where is the best site to inject subcutaneous insulin for fast, consistent absorption?',
  '皮下注射胰島素，邊個位置吸收最快最穩定？',
  ['Abdomen, rotating sites', 'Into a muscle', 'Into a lump', 'Into a scar'], 0,
  '腹部吸收最快最穩定，要輪換位置，避開硬塊同疤痕。', 'Let\'s use a different spot on your tummy this time.');
NE.cs('ortho', 'or6', 'A patient with a new plaster cast says the cast feels tight and his fingers are swollen and cold. What should you do FIRST?',
  '新打石膏病人話石膏好緊，手指腫同凍。第一步做咩？',
  ['Elevate the limb, check neurovascular status and inform the doctor urgently', 'Give a sleeping tablet', 'Apply a heat pack', 'Tell him it\'s normal'], 0,
  '石膏太緊會壓住血管神經：抬高、檢查顏色溫度感覺活動脈搏、緊急上報，可能要剪開石膏。', 'His fingers are swollen and cold in the new cast; I need a review now.');
NE.cs('ortho', 'or7', 'How should a patient go DOWN stairs with crutches after a leg injury (non-weight-bearing)?',
  '腳受傷唔可以負重，拐杖落樓梯點做？',
  ['Good leg first', 'Crutches first, then the good leg', 'Jump down', 'Injured leg bears weight first'], 1,
  '「上好落壞」：落樓梯先放拐杖（同受傷腳），再落好腳；上樓梯先上好腳。', 'Going down: crutches first, then your good leg.');
NE.cs('ipc', 'ic6', 'A patient has suspected influenza. Which precautions are needed?',
  '懷疑流感病人，要用咩預防措施？',
  ['Airborne precautions only', 'Droplet precautions with a surgical mask', 'No precautions', 'Only gloves'], 1,
  '流感主要經飛沫傳播：外科口罩、手部衞生、隔離床位；做產生氣霧程序時要加強防護。', 'Please wear a surgical mask; this patient is on droplet precautions.');
NE.cs('ipc', 'ic7', 'You need to access a central line. Which technique should you use?',
  '你要接駁中央靜脈導管，應該用咩技術？',
  ['Clean technique without hand hygiene', 'Aseptic non-touch technique with a scrubbed hub', 'Touch the hub to check it is clean', 'Blow on the hub to dry it'], 1,
  '無菌不觸技術：潔手、戴手套、用洗必泰酒精擦接頭並風乾，唔好掂關鍵部位。', 'I\'ll scrub the hub for 15 seconds and let it dry.');
NE.cs('doc', 'dc5', 'You need to call a doctor about a deteriorating patient at night. What should you prepare first?',
  '夜晚要打俾醫生報告病人轉差，首先準備咩？',
  ['Nothing; just call', 'Recent observations, NEWS, key history, medications and what you want (ISBAR)', 'The patient\'s favourite food', 'A long story of the whole admission'], 1,
  '準備好 ISBAR 資料，令通話簡潔清楚，醫生可以快啲決定。', 'This is Nurse Wong from 6A; I\'m calling about Mr Ho, whose NEWS is now 7.');
NE.cs('lab', 'lb3', 'A patient\'s haemoglobin falls from 120 to 85 g/L after surgery. What should you check?',
  '手術後病人血紅素由 120 跌到 85。要檢查咩？',
  ['Signs of bleeding: wound, drains, vital signs', 'Hair growth', 'Reading glasses', 'Nothing'], 0,
  '血紅素急跌要找出血源：傷口、引流、生命表徵、尿便有冇血，並上報。', 'Her Hb has dropped from 120 to 85; I am checking the drains for bleeding.');
NE.cs('lab', 'lb4', 'Which blood test best shows average blood sugar control over 3 months?',
  '邊個驗血最能反映三個月嘅平均血糖控制？',
  ['Random glucose', 'HbA1c', 'Potassium', 'CRP'], 1,
  'HbA1c（糖化血紅素）反映過去大約三個月平均血糖。', 'Her HbA1c is 7.5%, so her control has improved.');
NE.cs('geri', 'ge5', 'An older patient has not passed urine for 10 hours and is restless. What should you check first?',
  '長者 10 個鐘冇小便，好煩躁。首先檢查咩？',
  ['Bladder scan for urinary retention', 'Give a sedative', 'Restrain her', 'Turn off the lights'], 0,
  '尿瀦留係長者煩躁常見原因，先做膀胱掃描，排除之前唔好俾鎮靜藥。', 'She is restless and hasn\'t passed urine; I\'ll do a bladder scan.');
NE.cs('geri', 'ge6', 'An older woman fell but says she is fine and wants to get up. What should you do first?',
  '長者跌倒後話冇事想起身。第一步做咩？',
  ['Pull her up quickly', 'Check for injuries (head, hips, neck), observations and consciousness before moving her', 'Leave her on the floor alone', 'Give her tea'], 1,
  '跌倒後先評估：頭、頸、髖部、生命表徵、神志；有懷疑骨折或頭部受傷要用合適方法搬，再上報。', 'Please stay still while I check you for any injuries.');
NE.cs('nutri', 'nu3', 'A stroke patient is on IDDSI level 2 (mildly thick) fluids. A visitor brings a can of soda. What should you do?',
  '中風病人要飲 IDDSI 第 2 級（輕度稠）液體，訪客帶咗罐汽水嚟。點做？',
  ['Let him drink it', 'Explain he needs thickened drinks to swallow safely, and offer to thicken a drink', 'Hide the can', 'Tell the visitor to leave'], 1,
  '稀液體有誤吸風險，要向家屬解釋原因，教佢點樣加凝固粉。', 'He needs his drinks thickened so he can swallow safely.');
NE.cs('nutri', 'nu4', 'Which nutrient is especially important for wound healing?',
  '邊種營養對傷口癒合特別重要？',
  ['Protein', 'Caffeine', 'Salt', 'Alcohol'], 0,
  '蛋白質、熱量、維他命 C、鋅同水分都幫助傷口癒合，蛋白質尤其重要。', 'Eating enough protein will help your wound heal.');
NE.cs('comm', 'cm4', 'A palliative patient is breathless and anxious. Which simple measure may help?',
  '紓緩病人氣促同焦慮，邊個簡單措施可能幫到？',
  ['A hand-held fan, upright positioning and calm reassurance', 'Lying flat', 'Closing all windows tightly', 'Leaving the patient alone'], 0,
  '風扇吹面、坐直、冷靜陪伴、按醫囑用低劑量嗎啡，都可以紓緩末期氣促。', 'Let me sit you up and turn the fan on.');
NE.cs('comm', 'cm5', 'At a home visit, you notice the older patient has many expired medicines and is confused about doses. What should you do?',
  '家訪時發現長者有好多過期藥，又搞亂劑量。點做？',
  ['Ignore it', 'Review medicines, remove expired ones with consent, use a pill organiser and inform the doctor/pharmacist', 'Throw everything away without asking', 'Double the doses'], 1,
  '藥物安全：同病人一齊整理、用藥盒、聯絡醫生或藥劑師覆檢，必要時安排家人或社工支援。', 'Shall we sort out your medicines together into a weekly box?');
NE.cs('ap', 'ap3', 'Which position is best for a patient who is breathless?',
  '氣促病人最適合咩姿勢？',
  ['Supine (flat)', 'High Fowler\'s (sitting upright)', 'Prone', 'Trendelenburg (head down)'], 1,
  '坐直令橫膈膜下移、肺擴張得好啲。', 'Let\'s sit you right up to help your breathing.');
NE.cs('ap', 'ap4', 'Pain in the right upper quadrant of the abdomen may involve which organ?',
  '右上腹痛可能同邊個器官有關？',
  ['Spleen', 'Gallbladder / liver', 'Sigmoid colon', 'Left kidney'], 1,
  '右上腹有肝同膽囊；脾喺左上腹；乙狀結腸喺左下腹。', 'She has right upper quadrant pain after fatty meals.');
NE.cs('eent', 'ee3', 'After cataract surgery, which advice is correct?',
  '白內障手術後，邊個建議啱？',
  ['Rub the eye if it itches', 'Wear the eye shield at night and avoid rubbing or heavy lifting', 'Swim the next day', 'Stop all eye drops'], 1,
  '夜晚戴眼罩、唔好擦眼、避免提重物同入水，按時滴眼藥水；視力突然變差或劇痛要即刻求醫。', 'Please wear the shield at night and don\'t rub your eye.');
NE.cs('pharm', 'ph9', 'A patient is prescribed 40 mg furosemide IV. The ampoule contains 20 mg in 2 mL. How much do you draw up?',
  '處方靜脈注射呋塞米 40 毫克，一支安瓿有 2 毫升 20 毫克。要抽幾多？',
  ['2 mL', '4 mL', '1 mL', '8 mL'], 1, '40 ÷ 20 × 2 = 4 mL（即兩支）。', 'I need 40 mg, which is 4 mL — two ampoules.');
NE.cs('pharm', 'ph10', 'A patient on an ACE inhibitor develops a persistent dry cough. What should you do?',
  '用緊 ACE 抑制劑嘅病人持續乾咳。點做？',
  ['Tell him to stop it himself', 'Report it to the doctor as a possible side effect', 'Double the dose', 'Ignore it'], 1,
  '乾咳係 ACE 抑制劑常見副作用，報告醫生考慮換藥，唔好自行停藥。', 'He has a dry cough, which may be a side effect of his ACE inhibitor.');
NE.cs('prof', 'pr10', 'A new nurse is unsure how to use an infusion pump. What is the best action?',
  '新護士唔肯定點用輸液泵，最好點做？',
  ['Guess the settings', 'Ask a senior to demonstrate and check, and complete the device training', 'Use a gravity drip instead without telling anyone', 'Avoid the patient'], 1,
  '唔熟悉儀器就要求示範同督導，完成培訓，絕對唔好估。', 'Could you show me how to program this pump?');
NE.cs('prof', 'pr11', 'You notice a colleague often smells of alcohol on duty. What should you do?',
  '你發現同事返工時經常有酒味。點做？',
  ['Ignore it', 'Raise the concern with the nurse in charge or manager confidentially', 'Post about it online', 'Confront them publicly'], 1,
  '病人安全優先，亦要照顧同事：保密咁向主管反映，由管理層跟進支援。', 'I have a concern about a colleague\'s fitness to work that I need to share privately.');
NE.cs('ethics', 'et7', 'A patient with dementia refuses her medicine and spits it out. What should you NOT do?',
  '認知障礙病人拒絕食藥，仲吐出嚟。你唔應該做咩？',
  ['Try again later in a calm way', 'Hide the medicine in food without a proper decision and documentation', 'Ask the doctor about another form', 'Assess why she is refusing'], 1,
  '偷偷將藥收埋喺食物（covert administration）要經醫生、家屬同藥劑師按決定能力程序決定同記錄，唔可以自己做。', 'Shall we try again a little later?');
NE.cs('er', 'er7', 'A trauma patient has a pelvic fracture and BP 85/50. Which item may be applied to reduce bleeding?',
  '創傷病人盆骨骨折，血壓 85/50。可以用咩減少出血？',
  ['A pelvic binder', 'A neck collar', 'A sling', 'A cold drink'], 0,
  '盆骨固定帶穩定骨盆，減少出血；同時兩條大口徑靜脈通道、輸血、上報。', 'Apply the pelvic binder at the level of the greater trochanters.');
NE.cs('periop', 'po5', 'A patient returns from theatre drowsy with snoring respirations. What should you do first?',
  '病人由手術室返嚟，好渴瞓，呼吸有鼻鼾聲。第一步做咩？',
  ['Open the airway (jaw thrust/head tilt) and give oxygen', 'Let him sleep', 'Give him water', 'Sit him in a chair'], 0,
  '鼻鼾聲表示氣道部分阻塞：打開氣道、俾氧、監察血氧，必要時用口咽通氣道同求助。', 'His airway is partially obstructed; I am doing a jaw thrust.');
NE.cs('periop', 'po6', 'Why should post-operative patients do deep breathing exercises?',
  '點解手術後病人要做深呼吸練習？',
  ['To prevent chest infection and atelectasis', 'To reduce appetite', 'To make them sleepy', 'To increase pain'], 0,
  '麻醉同痛會令呼吸淺，深呼吸同咳嗽預防肺塌陷同肺炎。', 'Take ten deep breaths every hour while you\'re awake.');
NE.cs('cardio', 'cv13', 'A patient\'s BP is 210/120 with headache and blurred vision. What should you do?',
  '病人血壓 210/120，頭痛同視力模糊。點做？',
  ['Recheck next week', 'Report urgently — this may be a hypertensive emergency', 'Give a sleeping tablet', 'Ask him to walk around'], 1,
  '極高血壓加器官受損徵狀（頭痛、視力）屬高血壓急症，要即刻上報。', 'His BP is 210 over 120 with headache and blurred vision.');
NE.cs('resp', 're10', 'A patient\'s SpO2 reading is 80% but she looks well, is talking and her hands are very cold. What should you do first?',
  '病人血氧讀數 80%，但睇落冇事、講到嘢，雙手好凍。第一步做咩？',
  ['Call the arrest team', 'Check the probe position, warm the hands or try another site, and assess the patient', 'Ignore the reading', 'Give 15 L oxygen and leave'], 1,
  '先評估病人同檢查儀器：手凍會令讀數唔準，換位置（例如耳垂）再量，同時留意徵狀。', 'Her hands are cold; let me recheck the saturation on her ear.');
NE.cs('paed', 'pa23', 'A 4-year-old\'s respiratory rate is 22 at rest. Normal for age is about 20–30. What is this?',
  '4 歲小朋友休息時呼吸率 22，正常大約 20–30。屬於咩？',
  ['Within normal range', 'Severe tachypnoea', 'Bradypnoea needing CPR', 'Apnoea'], 0,
  '兒童正常值按年齡唔同：4 歲大約 20–30 次，22 屬正常。', 'His respiratory rate is 22, within normal range for his age.');
NE.cs('paed', 'pa24', 'A child with suspected meningitis needs a lumbar puncture. How do you help position the child?',
  '懷疑腦膜炎嘅小朋友要做腰椎穿刺，點樣幫手擺位？',
  ['Sitting straight with the back arched backwards', 'Lying on the side curled up with knees to chest, or sitting bent forward', 'Lying flat on the back', 'Standing'], 1,
  '捲曲姿勢令脊椎間隙打開；要溫柔固定、留意氣道同呼吸。', 'Can you curl up into a little ball like a hedgehog?');
NE.cs('paed', 'pa25', 'A baby with gastro-oesophageal reflux brings up small amounts after feeds but is gaining weight well. What advice is appropriate?',
  'BB 有胃食道逆流，食完奶吐少少，但體重增加正常。適合咩建議？',
  ['Stop feeding', 'Reassure, hold upright after feeds and use small frequent feeds', 'Put to sleep on the tummy', 'Give adult antacids'], 1,
  '體重正常增長嘅逆流多數會自行好轉：餵後抱直、少食多餐；仍然要仰睡。有警號（體重唔增、嘔血）就要求醫。', 'Hold him upright for 20 minutes after each feed.');
NE.cs('paed', 'pa26', 'A child with leukaemia has chickenpox exposure at school. Why is this important?',
  '白血病小朋友喺學校接觸過水痘。點解重要？',
  ['It is not important', 'Immunocompromised children can get severe chickenpox and may need preventive treatment', 'It improves immunity', 'Only adults get severe chickenpox'], 1,
  '免疫力低嘅小朋友感染水痘可以好嚴重，要即刻通知醫生考慮預防性免疫球蛋白或抗病毒藥。', 'He was exposed to chickenpox at school; I need to inform the oncology team.');
NE.cs('paed', 'pa27', 'A parent asks if they can give honey to their 8-month-old for a cough. What is the correct advice?',
  '家長問可唔可以俾 8 個月大 BB 食蜜糖止咳，正確建議係？',
  ['Yes, any amount', 'No — honey should not be given under 1 year due to the risk of infant botulism', 'Only with milk', 'Only at night'], 1,
  '一歲以下唔好食蜜糖，有嬰兒肉毒桿菌中毒風險。', 'Please don\'t give honey until she is over one year old.');
NE.cs('paed', 'pa28', 'A school-age child is anxious about surgery tomorrow. What is the best preparation?',
  '學齡小朋友對聽日手術好緊張，最好點準備？',
  ['Say nothing to avoid worry', 'Use age-appropriate explanations, pictures or dolls, and let them ask questions', 'Tell them it will not hurt at all', 'Tell them to be brave and stop crying'], 1,
  '按年齡用簡單誠實嘅解釋、圖片或者遊戲幫佢準備，俾佢發問，減少焦慮。', 'Would you like to see a picture of where you\'ll go tomorrow?');
