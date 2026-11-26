// 🩺 臨床情境題（十）：原創題目，各科
NE.cs('cardio', 'cv24', 'A patient\'s ECG monitor shows a flat line, but he is talking to you. What should you check first?',
  '病人心電監察顯示一條直線，但佢同你傾緊偈。首先檢查咩？',
  ['Start CPR', 'Check the patient and the leads/electrodes — likely a lead disconnection', 'Give adrenaline', 'Call the family'], 1, '先睇病人！有反應即係多數係導線甩咗，檢查電極同導線。', 'He\'s talking to me, so I\'ll check the leads.');
NE.cs('cardio', 'cv25', 'A patient with atrial fibrillation is started on an anticoagulant. What is the main purpose?',
  '心房顫動病人開始用抗凝血藥。主要目的係咩？',
  ['To slow the heart rate', 'To reduce the risk of stroke', 'To lower cholesterol', 'To treat pain'], 1, '房顫令心房血液積聚形成血塊，抗凝血藥減少中風風險。', 'This medicine lowers your risk of having a stroke.');
NE.cs('resp', 're18', 'A patient with COPD is on 4 L/min oxygen and becomes drowsy with a high CO2 on blood gas. What should you consider?',
  'COPD 病人用 4 公升氧氣後變得昏昏欲睡，血氣顯示二氧化碳高。要考慮咩？',
  ['Increase oxygen to 15 L', 'Oxygen-induced hypercapnia — inform the doctor; target saturations (often 88–92%) and consider NIV', 'Give a sedative', 'Ignore it'], 1, '部分 COPD 病人氧氣太多會令 CO2 積聚，按目標血氧調氧並上報，可能需要無創通氣。', 'His CO2 is rising on 4 litres; his target saturation is 88 to 92%.');
NE.cs('resp', 're19', 'How should a patient use a metered-dose inhaler with a spacer?',
  '病人點樣配合儲霧罐用定量噴霧器？',
  ['Spray several puffs at once', 'Shake, one puff into the spacer, then breathe slowly or take several breaths; repeat as prescribed', 'Breathe out into the spacer only', 'No need to shake'], 1, '搖勻、每次一噴、慢慢深吸或者吸幾下，每噴之間等一陣。', 'One puff at a time, then breathe in slowly.');
NE.cs('gi', 'gi18', 'A patient is going for a colonoscopy tomorrow. What preparation is usually needed?',
  '病人聽日照大腸鏡，通常要準備咩？',
  ['Eat a big meal tonight', 'Low-residue diet, bowel preparation as instructed and clear fluids', 'No preparation', 'Stop drinking water for two days'], 1, '低渣飲食、按指示飲瀉藥、清流質，留意脫水。', 'Please follow the bowel preparation instructions carefully.');
NE.cs('gi', 'gi19', 'A patient with a nasogastric feed starts coughing and becomes breathless during feeding. What should you do?',
  '鼻胃管餵食期間病人咳同氣促。點做？',
  ['Continue the feed faster', 'Stop the feed, sit the patient up, check vital signs and inform the doctor', 'Lie him flat', 'Flush with more water'], 1, '可能吸入或者喉管移位：停餵、坐直、評估、上報，重新確認位置。', 'I\'ve stopped the feed because he started coughing.');
NE.cs('renal', 'rn15', 'A patient\'s urine output is 15 mL/h for 3 hours (weight 70 kg). What does this suggest?',
  '病人（70 公斤）連續三個鐘尿量每小時 15 毫升。提示咩？',
  ['Normal', 'Oliguria — below 0.5 mL/kg/h; report and check for causes', 'Too much fluid', 'Diabetes'], 1, '成人少過 0.5 mL/kg/h（70 kg 即 35 mL/h）係少尿，可能急性腎損傷，要上報、檢查尿喉同水分。', 'His urine output has been 15 mL an hour for three hours.');
NE.cs('renal', 'rn16', 'A urinary catheter has drained nothing for 2 hours. What should you check first?',
  '尿喉兩個鐘冇尿流出。首先檢查咩？',
  ['Remove it', 'Check for kinks, the bag position and bladder distension', 'Give a diuretic', 'Ignore it'], 1, '先檢查喉管有冇屈曲、尿袋低過膀胱、膀胱有冇脹，再評估水分同上報。', 'Let me check the tubing isn\'t kinked.');
NE.cs('neuro', 'ne16', 'A patient on the ward suddenly develops slurred speech and facial droop. The onset was 20 minutes ago. What should you do?',
  '病房病人突然口齒不清、面部下垂，20 分鐘前開始。點做？',
  ['Wait and see', 'Activate the stroke pathway urgently, note the time of onset and check glucose', 'Give aspirin straight away', 'Give a drink'], 1, '時間就係腦細胞：記錄發病時間、即刻啟動中風流程、驗血糖；未排除出血唔好俾阿士匹靈；未評估吞嚥唔好飲食。', 'New facial droop and slurred speech started at 14:10.');
NE.cs('neuro', 'ne17', 'Which pupil finding after a head injury is most concerning?',
  '頭部受傷後邊種瞳孔變化最令人擔心？',
  ['Both pupils equal and reactive', 'One pupil newly dilated and slow to react', 'Both pupils small in bright light', 'Pupils reacting quickly'], 1, '單側瞳孔放大反應慢提示顱內壓升高，要緊急上報。', 'His left pupil is now larger and sluggish.');
NE.cs('endo', 'en15', 'A patient has a thyroidectomy. Which symptom after surgery should you report urgently?',
  '甲狀腺切除術後，邊個徵狀要緊急上報？',
  ['Mild sore throat', 'Tingling around the mouth and fingers', 'Feeling hungry', 'Wanting to sleep'], 1, '口周同手指麻痺提示低血鈣（副甲狀腺受損），要即刻上報；同時留意頸部腫脹同呼吸。', 'She has tingling around her mouth after the thyroidectomy.');
NE.cs('ortho', 'or13', 'A patient with a fractured femur becomes confused, breathless and has a petechial rash 2 days after injury. What do you suspect?',
  '股骨骨折兩日後病人混亂、氣促、有出血點紅疹。你懷疑咩？',
  ['Allergy', 'Fat embolism syndrome — urgent escalation', 'Anxiety', 'Normal recovery'], 1, '長骨骨折後 24–72 小時出現呼吸、神志同出血點三聯徵，要即刻上報。', 'He has new confusion, hypoxia and a petechial rash.');
NE.cs('skin', 'sk14', 'A wound has increasing redness, warmth, swelling and pus. What does this suggest?',
  '傷口愈嚟愈紅、熱、腫，有膿。提示咩？',
  ['Normal healing', 'Wound infection — swab if indicated, report and monitor for sepsis', 'Allergy to tape', 'Dry skin'], 1, '紅熱腫痛加膿係感染徵狀，按指引取樣、上報、監察敗血症。', 'The wound is red, warm and discharging pus.');
NE.cs('haemonc', 'ho13', 'A patient receiving chemotherapy has a platelet count of 15 × 10⁹/L. Which precaution is important?',
  '化療病人血小板 15。邊個預防措施重要？',
  ['Encourage contact sports', 'Bleeding precautions: soft toothbrush, avoid IM injections, monitor for bleeding', 'Give aspirin', 'Use a razor blade to shave'], 1, '血小板低要防出血：軟毛牙刷、電鬚刨、避免肌肉注射同用力排便。', 'Please use a soft toothbrush and an electric razor.');
NE.cs('obs', 'ob14', 'A woman 2 days after birth has a painful, red, swollen calf. What do you suspect?',
  '產後兩日婦女小腿紅腫痛。你懷疑咩？',
  ['Muscle cramp', 'Deep vein thrombosis — report; avoid massaging the leg', 'Normal after birth', 'Insect bite'], 1, '產後係 DVT 高危期，唔好按摩，即刻上報。', 'She has a swollen, painful left calf; I suspect a DVT.');
NE.cs('mh', 'mh15', 'A patient is pacing, shouting and clenching his fists. What is the best first step?',
  '病人踱來踱去、大叫、揸實拳頭。最好嘅第一步係？',
  ['Shout back', 'Stay calm, keep a safe distance, use a calm voice and try to de-escalate', 'Turn your back', 'Physically restrain immediately'], 1, '降溫技巧：保持冷靜同安全距離、留出口、慢慢講、聆聽，需要時求助。', 'I can see you\'re upset. Can you tell me what\'s wrong?');
NE.cs('er', 'er17', 'A patient has a deep cut on the forearm that is bleeding heavily. What is the first action?',
  '病人前臂深切傷大量出血。第一步做咩？',
  ['Wash it under the tap', 'Apply direct firm pressure with a dressing and elevate if possible', 'Apply a cream', 'Remove clots repeatedly'], 1, '直接用力壓住、抬高，持續出血加敷料唔好拎走第一塊，求助。', 'I\'m applying firm pressure to stop the bleeding.');
NE.cs('er', 'er18', 'At triage, which patient should be seen first?',
  '分流時邊個病人應該最先睇？',
  ['Sprained ankle, pain 5/10', 'Chest pain with sweating, BP 88/50', 'Sore throat for 3 days', 'Request for sick leave'], 1, '胸痛加出汗、低血壓可能係心臟急症，最優先。', 'He has chest pain with low BP; he needs to be seen immediately.');
NE.cs('periop', 'po12', 'Why is the WHO Surgical Safety Checklist "time out" performed?',
  '點解要做世衞手術安全清單嘅「time out」？',
  ['To give staff a break', 'To confirm the correct patient, procedure and site before the incision', 'To count the visitors', 'To choose music'], 1, '下刀前全隊確認病人、手術、部位、過敏同準備，預防錯誤。', 'Let\'s do the time out before we start.');
NE.cs('periop', 'po13', 'After abdominal surgery, a patient\'s wound suddenly opens and bowel is visible. What should you do?',
  '腹部手術後傷口突然裂開見到腸。點做？',
  ['Push the bowel back in', 'Call for help, cover with sterile saline-soaked dressing, keep the patient still and nil by mouth', 'Leave it uncovered', 'Ask him to walk'], 1, '傷口裂開內臟外露：唔好推返入去，用濕生理鹽水敷料蓋住、屈膝減張力、禁食、緊急求助。', 'The wound has dehisced; I\'ve covered it with saline-soaked gauze.');
NE.cs('comm', 'cm11', 'An older patient at home has many medicines and is confused about when to take them. What could help?',
  '屋企有好多藥嘅長者唔記得幾時食。咩可以幫到？',
  ['Tell him to guess', 'A medication review, a pill organiser or blister pack, and a simple chart', 'Stop all medicines', 'Give all at once'], 1, '藥物覆檢、藥盒或泡罩包裝、簡單時間表、家人或社區支援。', 'Let\'s ask the pharmacist to review your medicines.');
NE.cs('pharm', 'ph24', 'A patient on gentamicin needs a level checked. Why?',
  '用緊慶大黴素嘅病人要驗血藥濃度。點解？',
  ['To check the colour', 'It can damage the kidneys and hearing if levels are too high', 'It makes the patient hungry', 'No reason'], 1, '氨基糖苷類有腎毒性同耳毒性，要監察濃度同腎功能。', 'We need a gentamicin level before the next dose.');
NE.cs('pharm', 'ph25', 'Which medicine needs a second nurse to check before giving in most hospitals?',
  '大部分醫院邊種藥要第二位護士核對先可以俾？',
  ['Paracetamol tablet', 'Intravenous insulin or a controlled drug such as morphine', 'Multivitamin', 'Moisturiser'], 1, '高警示藥物（胰島素、鴉片類、靜脈鉀）同管制藥物通常要雙人核對。', 'Could you double-check this morphine with me?');
NE.cs('ipc', 'ic15', 'You sustain a needlestick injury from a used needle. What should you do first?',
  '你被用過嘅針刺傷。第一步做咩？',
  ['Suck the wound', 'Encourage bleeding, wash with soap and running water, report immediately and seek assessment', 'Ignore it', 'Apply bleach'], 1, '擠出血、梘液流水沖洗、即刻報告、盡快接受評估（可能要暴露後預防）。', 'I\'ve had a needlestick injury and need to report it.');
NE.cs('lab', 'lb12', 'A patient\'s blood culture result shows growth of bacteria. What should you do?',
  '病人血液培養有細菌生長。點做？',
  ['File it', 'Inform the doctor promptly so antibiotics can be reviewed', 'Tell the patient it\'s nothing', 'Wait for the next shift'], 1, '血培養陽性要即刻通知醫生，按藥敏調整抗生素。', 'The blood culture is positive; can you review his antibiotics?');
NE.cs('doc', 'dc14', 'What is the main purpose of an incident report?',
  '事故報告主要目的係咩？',
  ['To punish staff', 'To learn and improve safety by identifying what went wrong', 'To hide mistakes', 'To fill paperwork'], 1, '事故報告係用嚟學習同改善系統，唔係懲罰；要客觀記錄事實。', 'I\'ll complete an incident report so we can learn from this.');
NE.cs('ethics', 'et15', 'A patient asks you to post a photo of him on the ward\'s social media. What should you do?',
  '病人叫你將佢嘅相放上病房社交媒體。點做？',
  ['Post it straight away', 'Follow the hospital\'s social media and consent policy; never use your personal accounts', 'Post it on your own account', 'Ask a friend to post it'], 1, '要按醫院政策同書面同意，唔好用私人帳戶發佈病人資料或相片。', 'I\'ll need to check our hospital\'s policy first.');
NE.cs('prof', 'pr26', 'Two tasks are due now: a patient in pain asking for analgesia and a routine bed change. What do you do first?',
  '兩件事同時要做：病人好痛要止痛藥，同埋例行換床單。先做邊樣？',
  ['Bed change', 'Assess and treat the pain first; delegate or delay the bed change', 'Neither', 'Documentation'], 1, '按優先次序：病人需要（痛）先於例行工作，可以分配俾助理。', 'I\'ll get your pain relief first.');
NE.cs('prof', 'pr27', 'Which task can usually be delegated to a healthcare assistant?',
  '邊樣工作通常可以分配俾健康服務助理？',
  ['Assessing a deteriorating patient', 'Assisting a stable patient with washing', 'Giving IV medication', 'Making a care plan'], 1, '可以分配穩定病人嘅基本護理，但評估、靜脈藥物同計劃要護士負責。', 'Could you help Mr Lee with his wash, please?');
NE.cs('geri', 'ge13', 'An older patient becomes acutely confused overnight. What should you assess?',
  '長者一夜之間突然混亂。要評估咩？',
  ['Nothing; it is dementia', 'Possible delirium causes: infection, pain, retention, constipation, medicines, hypoxia, low glucose', 'Only hair', 'Only appetite'], 1, '急性混亂多數係譫妄，要搵原因：感染、痛、尿瀦留、便秘、藥物、缺氧、低血糖。', 'She\'s acutely confused; I\'m checking for causes of delirium.');
NE.cs('nutri', 'nu11', 'A patient with dysphagia is prescribed "thickened fluids". Why?',
  '吞嚥困難病人處方「加稠流質」。點解？',
  ['To taste better', 'To slow the flow and reduce aspiration risk', 'To give more calories only', 'To keep the drink warm'], 1, '加稠令流質流得慢，減低吸入風險；要跟言語治療師建議嘅稠度。', 'Your drinks will be thickened to make swallowing safer.');
NE.cs('ap', 'ap10', 'Which organ produces insulin?',
  '邊個器官製造胰島素？',
  ['Liver', 'Pancreas', 'Kidney', 'Spleen'], 1, '胰臟嘅 β 細胞製造胰島素。', 'Insulin is made in the pancreas.');
NE.cs('eent', 'ee9', 'After cataract surgery, what should the patient avoid?',
  '白內障手術後病人要避免咩？',
  ['Wearing the eye shield at night', 'Rubbing the eye and heavy lifting', 'Using eye drops', 'Walking'], 1, '唔好擦眼、避免搬重嘢同彎腰，晚間戴眼罩，按時滴眼藥。', 'Try not to rub your eye, and wear the shield at night.');
NE.cs('proc', 'pc9', 'Which order is correct when removing PPE after caring for a patient in isolation (common practice)?',
  '照顧隔離病人後除個人防護裝備，常見正確次序係？',
  ['Mask, gown, gloves', 'Gloves, gown, hand hygiene, then eye protection and mask (outside the room), hand hygiene', 'Mask first, then gloves', 'Any order'], 1, '最污染嘅先除：手套、保護衣，手部衞生，再除眼罩、口罩，最後再洗手（按醫院指引）。', 'Gloves and gown off first, then hand hygiene.');
NE.cs('proc', 'pc10', 'Before giving an IV push medicine, what should you check about the cannula?',
  '經靜脈推藥之前，要檢查導管咩？',
  ['Its colour only', 'Patency and signs of phlebitis or infiltration; flush with saline', 'Nothing', 'Whether the patient likes it'], 1, '確認通暢、冇靜脈炎或滲漏，先用生理鹽水沖管。', 'The cannula flushes well with no redness.');
