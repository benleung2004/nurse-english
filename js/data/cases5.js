// 🩺 臨床情境題（五）：原創題目（溝通、上報、兒科、安全）
// NE.cs(科目, id, 英文情境, 中文意思, [4 個選項], 正確答案 0–3, 中文解釋, 實用英文句)

NE.cs('doc', 'dc8', 'Which is the BEST "Situation" statement when calling a doctor using ISBAR?',
  '用 ISBAR 打俾醫生，邊句係最好嘅「Situation」？',
  ['"Hi, I\'m a bit worried about someone."', '"I\'m calling about Mr Lam, bed 8; his BP has dropped to 82/50 and he is drowsy."', '"Mr Lam was admitted last week with many problems."', '"Can you come whenever you are free?"'], 1,
  'Situation 要即刻講清楚邊個病人、而家發生咩事、主要數據。', 'I\'m calling about Mr Lam in bed 8; his blood pressure has dropped to 82 over 50.');
NE.cs('doc', 'dc9', 'Which recommendation is most specific?',
  '邊句建議最具體？',
  ['"Please do something."', '"Can you review him within 15 minutes and consider IV fluids?"', '"He\'s not looking great."', '"Maybe check him tomorrow."'], 1,
  '好嘅建議要講明想醫生做咩同時限。', 'Could you review him within 15 minutes?');
NE.cs('prof', 'pr16', 'A senior nurse criticises you in front of patients. What is the most professional response?',
  '資深護士喺病人面前批評你。最專業嘅回應係？',
  ['Argue loudly', 'Stay calm, ensure patient safety, then ask to discuss it privately later', 'Cry and leave the ward', 'Post about it online'], 1,
  '保持冷靜、以病人為先，之後私下溝通；如有欺凌可以向主管反映。', 'Could we talk about this privately after the round?');
NE.cs('prof', 'pr17', 'You realise you forgot to give a 10:00 antibiotic; it is now 12:30. What should you do?',
  '你發現漏咗 10 點嘅抗生素，而家 12:30。點做？',
  ['Give a double dose at the next time', 'Inform the nurse in charge and doctor, follow their advice, document and report', 'Say nothing', 'Mark it as given at 10:00'], 1,
  '漏藥要誠實上報、聽醫生指示補俾或調整時間、記錄同填事故報告。絕不可以補雙倍或者改記錄。', 'I missed the 10 o\'clock antibiotic; can you advise how to proceed?');
NE.cs('prof', 'pr18', 'How should you prioritise these patients at the start of a shift?',
  '開更時應該點樣排呢幾個病人嘅優先次序？',
  ['Alphabetical order', 'Unstable or deteriorating patients first, then time-critical medicines, then routine care', 'Patients closest to the station first', 'Discharges first, always'], 1,
  '先處理不穩定同轉差嘅病人，再處理時間關鍵藥物（如胰島素、帕金遜藥），然後日常護理。', 'I\'ll see the unstable patient first, then give the time-critical medicines.');
NE.cs('prof', 'pr19', 'A patient\'s relative offers you a red packet of money to thank you. What should you do?',
  '病人家屬俾利是錢多謝你。點做？',
  ['Accept it quietly', 'Politely decline and follow the hospital policy on gifts', 'Ask for more', 'Accept and share it with colleagues secretly'], 1,
  '收受現金可能構成利益衝突，要有禮貌咁婉拒，按醫院政策處理。', 'Thank you so much, but I\'m not allowed to accept money.');

NE.cs('paed', 'pa35', 'A 3-year-old with sickle cell disease complains of severe leg pain. What is the priority?',
  '鐮狀細胞病 3 歲小朋友話腳好痛。首要做咩？',
  ['Tell the child to walk it off', 'Assess pain, give prescribed analgesia promptly, keep warm and hydrated, and monitor', 'Apply ice packs', 'Restrict fluids'], 1,
  '鐮狀細胞痛症危機要及早止痛、保暖、補水，避免冰敷（會令血管收縮）。', 'He has a pain crisis; I\'ll give his analgesia and fluids now.');
NE.cs('paed', 'pa36', 'A parent asks why her baby needs the BCG vaccine. What is the best answer?',
  '家長問點解 BB 要打卡介苗。最好點答？',
  ['It prevents measles', 'It helps protect against severe forms of tuberculosis in young children', 'It is a vitamin', 'It prevents allergies'], 1,
  '卡介苗主要預防兒童嚴重結核病（例如結核性腦膜炎）。', 'The BCG vaccine helps protect young children from serious TB.');
NE.cs('paed', 'pa37', 'A child is on high-flow nasal oxygen for bronchiolitis and cannot feed orally. What is the usual plan?',
  '細支氣管炎小朋友用高流量氧氣，唔能夠經口食奶。通常點處理？',
  ['Force oral feeds', 'Nasogastric feeds or IV fluids as prescribed, with fluid balance monitoring', 'No fluids until better', 'Only water by mouth'], 1,
  '呼吸辛苦時經口餵有誤吸風險，按醫囑用鼻胃管餵或靜脈輸液，記錄出入量。', 'She\'s too breathless to feed, so we\'ll start nasogastric feeds.');
NE.cs('paed', 'pa38', 'A teenager with type 1 diabetes keeps forgetting insulin at school. What is the best approach?',
  '一型糖尿青少年喺學校成日唔記得打胰島素。最好點處理？',
  ['Scold him', 'Explore reasons, involve him in problem-solving (reminders, school plan), and support self-management', 'Take over all his care permanently', 'Ignore it'], 1,
  '青少年要尊重同參與：了解原因（尷尬、忙），一齊諗方法（手機提示、學校護理計劃）。', 'What makes it hard to take your insulin at school?');
NE.cs('paed', 'pa39', 'A child with gastroenteritis has had 6 watery stools today but is drinking well and passing urine. What is the best advice?',
  '腸胃炎小朋友今日肚瀉 6 次，但飲到水、有小便。最好建議係？',
  ['Stop all fluids', 'Continue oral rehydration in small frequent amounts and watch for dehydration signs', 'Give anti-diarrhoea tablets', 'Only give fruit juice'], 1,
  '輕度個案繼續少量多次口服補液，教家長留意脫水徵狀；兒童唔建議用止瀉藥，果汁可能令肚瀉加重。', 'Keep giving small sips of rehydration solution and watch his wet nappies.');
NE.cs('paed', 'pa40', 'Which normal value is correct for a newborn heart rate at rest?',
  '新生嬰兒休息時心跳正常值係？',
  ['40–60', '60–80', '110–160', '180–220'], 2, '新生兒心跳大約每分鐘 110–160 次。', 'Her heart rate is 140, which is normal for a newborn.');

NE.cs('pharm', 'ph15', 'A child weighs 20 kg. Ibuprofen 10 mg/kg is prescribed. The suspension is 100 mg/5 mL. How many mL?',
  '小朋友 20 公斤，布洛芬每公斤 10 毫克，藥水係 5 毫升有 100 毫克。俾幾多毫升？',
  ['5 mL', '10 mL', '20 mL', '2 mL'], 1, '20 × 10 = 200 mg；200 ÷ 100 × 5 = 10 mL。', '200 mg is 10 mL of the 100 mg in 5 mL suspension.');
NE.cs('pharm', 'ph16', 'A patient on an opioid PCA is drowsy with a sedation score of 3 (difficult to rouse). What should you do?',
  '用鴉片類 PCA 嘅病人好渴瞓，鎮靜評分 3（難以叫醒）。點做？',
  ['Encourage him to press the button more', 'Stop the PCA, support breathing, give oxygen and call for help; naloxone may be needed', 'Leave him to sleep', 'Increase the dose'], 1,
  '鎮靜過度係呼吸抑制警號：停 PCA、俾氧、叫人、按指引俾納洛酮。', 'His sedation score is 3; I\'ve stopped the PCA and need help now.');

NE.cs('ipc', 'ic10', 'A patient with suspected measles arrives in the waiting room. What should you do first?',
  '懷疑麻疹病人喺候診室。第一步做咩？',
  ['Let him wait with others', 'Isolate him immediately in a negative-pressure or single room with airborne precautions', 'Send him home by bus', 'Give a surgical mask only to staff'], 1,
  '麻疹傳染力極強，經空氣傳播：即刻隔離、員工戴 N95、通知感染控制，追蹤接觸者。', 'This patient may have measles; we need an airborne isolation room now.');

NE.cs('cardio', 'cv15', 'A patient with heart failure is prescribed a 1.5 L fluid restriction but is very thirsty. What can help?',
  '心衰病人限水 1.5 公升但好口渴。咩可以幫到？',
  ['Ignore the restriction', 'Mouth care, ice chips counted in the allowance, and spreading drinks across the day', 'Give salty snacks', 'Stop all drinks'], 1,
  '口腔護理、冰粒（計入飲水量）、將飲水平均分配全日，可以減少口渴。', 'Let\'s spread your drinks across the day and keep your mouth moist.');
NE.cs('resp', 're12', 'A patient with COPD on 4 L oxygen becomes drowsy with SpO2 98%. What might be happening?',
  '慢阻肺病人用 4 公升氧，血氧 98%，但變得好渴瞓。可能發生咩事？',
  ['He is just tired', 'Carbon dioxide retention from too much oxygen — check ABG and reduce oxygen to target', 'He needs more oxygen', 'Normal response'], 1,
  '慢阻肺病人俾太多氧可以令二氧化碳積聚（type 2 呼吸衰竭），要驗血氣、調低至目標 88–92%、上報。', 'He is drowsy with sats of 98% on 4 litres; I\'m worried about CO2 retention.');
NE.cs('neuro', 'ne10', 'A patient after a stroke has difficulty swallowing and coughs when drinking. What is the risk?',
  '中風病人吞嚥困難，飲嘢時咳。有咩風險？',
  ['Aspiration pneumonia', 'High blood sugar', 'Constipation', 'Hair loss'], 0,
  '飲嘢咳嗆代表可能誤吸，引致吸入性肺炎。要停經口飲食、轉介言語治療師評估。', 'He coughs when drinking, so I\'ve made him nil by mouth until speech therapy review.');
NE.cs('endo', 'en10', 'Which symptoms suggest HYPERglycaemia rather than hypoglycaemia?',
  '以下邊組徵狀似高血糖多過低血糖？',
  ['Shaking, sweating, hunger', 'Thirst, frequent urination, tiredness', 'Sudden confusion and pale sweaty skin', 'Palpitations and tremor'], 1,
  '高血糖：口渴、多尿、疲倦、視力模糊；低血糖：手震、出汗、肚餓、混亂。', 'She\'s very thirsty and passing a lot of urine; I\'ll check her glucose.');
NE.cs('gi', 'gi11', 'A patient with liver cirrhosis has a tense, swollen abdomen and is breathless. Which procedure may be planned?',
  '肝硬化病人肚好脹、氣促。可能會安排咩程序？',
  ['Paracentesis', 'Lumbar puncture', 'Colonoscopy only', 'Tonsillectomy'], 0,
  '大量腹水壓住橫膈膜令氣促，可能要腹腔穿刺抽腹水；期間監察血壓。', 'The doctor plans a paracentesis to drain the ascites.');
NE.cs('renal', 'rn10', 'Which instruction is correct when emptying a urinary catheter bag?',
  '倒尿袋時邊個做法正確？',
  ['Touch the outlet with bare hands', 'Use gloves, a clean container for each patient, and avoid the outlet touching the container', 'Lift the bag above the bladder', 'Disconnect the bag from the catheter'], 1,
  '戴手套、每個病人用獨立乾淨容器、出口唔好掂到容器，保持密閉系統。', 'I\'ll empty your catheter bag into a clean jug.');
NE.cs('ortho', 'or9', 'A patient with a hip fracture is waiting for surgery and is in severe pain. What is appropriate?',
  '髖部骨折病人等緊手術，好痛。點處理先合適？',
  ['Wait until after surgery for pain relief', 'Regular pain assessment and prescribed analgesia (possibly a nerve block)', 'Ask him to walk to reduce stiffness', 'Massage the hip'], 1,
  '術前都要好好止痛（定時評估、按醫囑用藥或神經阻滯），可以減少譫妄。', 'His pain is 8 out of 10; can we consider a nerve block?');
NE.cs('skin', 'sk9', 'A frail older patient has a skin tear on the forearm. What is correct care?',
  '衰弱長者前臂皮膚撕裂。正確護理係？',
  ['Use strong adhesive tape', 'Clean gently, realign the skin flap if possible, use a non-adherent dressing and mark the direction of removal', 'Leave it open and dirty', 'Apply a hot compress'], 1,
  '皮膚撕裂：輕柔清潔、盡量拉返皮瓣、用不黏敷料、標示除敷料方向，避免強力膠布。', 'I\'ve marked an arrow on the dressing to show which way to remove it.');
NE.cs('haemonc', 'ho9', 'A patient receiving chemotherapy asks why he must avoid crowded places. What is the best explanation?',
  '化療病人問點解要避免人多地方。最好點解釋？',
  ['To avoid noise', 'Chemotherapy lowers white cells, so infections are more dangerous', 'Because chemo makes him contagious', 'There is no reason'], 1,
  '化療令白血球下降，感染風險高，要避免人多、戴口罩、注意手部衞生。', 'Your white cells will be low, so you\'re more likely to catch infections.');
NE.cs('obs', 'ob9', 'After a vaginal birth, the mother has not passed urine for 6 hours and the uterus is displaced to the right. What do you suspect?',
  '順產後媽媽 6 個鐘冇小便，子宮偏向右邊。你懷疑咩？',
  ['Full bladder (urinary retention)', 'Normal finding', 'Low blood sugar', 'Breast engorgement'], 0,
  '膀胱脹會推開子宮，影響收縮引致出血風險。要幫佢排尿或做膀胱掃描／導尿。', 'Her uterus is displaced; I think her bladder is full.');
NE.cs('mh', 'mh9', 'A patient with severe anxiety is hyperventilating and says her hands are tingling. What should you do?',
  '嚴重焦慮病人過度換氣，話手指麻痺。點做？',
  ['Leave her alone', 'Stay calm with her, coach slow breathing, and check for physical causes', 'Shout at her to stop', 'Give her coffee'], 1,
  '過度換氣會令二氧化碳過低引致麻痺。陪伴、引導慢呼吸，同時排除身體原因（如氣喘、心臟問題）。', 'Breathe in slowly with me… and out… you\'re doing well.');
NE.cs('er', 'er10', 'A patient has a sudden severe headache described as "the worst ever". What should you suspect?',
  '病人突然劇烈頭痛，形容係「人生最痛」。你應該懷疑咩？',
  ['Tension headache', 'Subarachnoid haemorrhage — escalate urgently', 'Hunger', 'Eye strain'], 1,
  '突發「霹靂樣」頭痛要懷疑蛛網膜下腔出血，即刻上報、做神經觀察、安排 CT。', 'She has a sudden thunderclap headache; she needs an urgent CT.');
NE.cs('periop', 'po8', 'On the morning of surgery, a diabetic patient\'s glucose is 3.5 mmol/L while fasting. What should you do?',
  '手術當朝糖尿病人禁食中血糖 3.5。點做？',
  ['Ignore it', 'Treat per hypoglycaemia protocol suitable for fasting (e.g. IV glucose) and inform the anaesthetist', 'Give a big breakfast', 'Give insulin'], 1,
  '禁食時低血糖要按指引處理（通常靜脈葡萄糖或清糖水，按麻醉指引），並通知麻醉科醫生。', 'Her glucose is 3.5 while fasting; I\'m informing the anaesthetist.');
NE.cs('comm', 'cm8', 'A patient going home on warfarin asks what to do if he has a nosebleed that won\'t stop. What is the best advice?',
  '食華法林出院嘅病人問流鼻血止唔到點算。最好建議係？',
  ['Ignore it', 'Apply pressure for 10–15 minutes; if it doesn\'t stop, seek urgent medical help', 'Take an extra warfarin', 'Lie flat'], 1,
  '向前傾、捏鼻翼 10–15 分鐘；止唔到要即刻求醫，可能要驗 INR。', 'Pinch your nose for 15 minutes, and come to A&E if it doesn\'t stop.');
NE.cs('geri', 'ge9', 'An older patient with dementia is refusing to eat. What should you check first?',
  '認知障礙長者拒絕食嘢。首先檢查咩？',
  ['Nothing; force-feed', 'Mouth pain, dentures, swallowing, constipation, mood and food preferences', 'Only weight next month', 'Give a sleeping pill'], 1,
  '拒食可能有原因：口痛、假牙唔啱、吞嚥問題、便秘、抑鬱或者唔鍾意食物。', 'Let me check whether her dentures are hurting her.');
NE.cs('nutri', 'nu6', 'A patient on a low-salt diet asks which food to avoid. Which is HIGHEST in salt?',
  '低鹽飲食病人問應該避免咩。以下邊樣最鹹？',
  ['Fresh fruit', 'Instant noodles with the seasoning packet', 'Plain rice', 'Steamed fish without sauce'], 1,
  '即食麵調味包含大量鈉；鹹魚、鹹蛋、豉油、加工肉都要避免。', 'Instant noodle seasoning is very high in salt.');
NE.cs('lab', 'lb7', 'A blood glucose meter reads "HI". What should you do?',
  '血糖機顯示「HI」。點做？',
  ['Assume the meter is broken and ignore it', 'Treat as very high glucose: check ketones, inform the doctor, and send a lab glucose', 'Give glucose tablets', 'Wait until tomorrow'], 1,
  '「HI」代表超出儀器上限（極高血糖），要驗血酮、送化驗室血糖、即刻上報。', 'The meter reads HI; I\'ve checked ketones and I\'m sending a lab sample.');
NE.cs('ethics', 'et10', 'A 15-year-old asks for contraception advice and does not want her parents to know. What is appropriate?',
  '15 歲少女要避孕建議，唔想父母知。點樣先恰當？',
  ['Refuse and call her parents', 'Provide confidential, non-judgemental support while assessing maturity and any safeguarding risks', 'Tell her teacher', 'Ignore her request'], 1,
  '尊重青少年私隱，評估成熟程度同有冇被侵害風險；有安全風險先按程序處理。', 'This conversation is confidential unless I\'m worried about your safety.');
NE.cs('ap', 'ap6', 'Which organ produces insulin?',
  '邊個器官製造胰島素？',
  ['Liver', 'Pancreas', 'Kidney', 'Stomach'], 1, '胰臟嘅胰島 β 細胞製造胰島素。', 'Insulin is made by the pancreas.');
NE.cs('eent', 'ee5', 'Which instruction is correct for giving ear drops to an adult?',
  '幫成人滴耳藥水，邊個做法正確？',
  ['Pull the ear down and back', 'Pull the ear up and back, then keep the head tilted for a few minutes', 'Insert the dropper deep into the ear', 'Use cold drops straight from the fridge'], 1,
  '成人拉耳朵向上向後（三歲以下小朋友向下向後），滴後保持側頭幾分鐘；藥水最好室溫。', 'Tilt your head and stay like this for a few minutes.');
