// 🩺 臨床情境題（一）：原創題目，按常見護理考試範圍同病房情境撰寫
// NE.cs(科目, id, 英文情境, 中文意思, [4 個選項], 正確答案 0–3, 中文解釋, 實用英文句)
NE.cases = NE.cases || [];
NE.cs = (grp, id, q, zh, choices, ans, why, key) => NE.cases.push({ grp, id, q, zh, choices, ans, why, key });

// ---- 兒科 ----
NE.cs('paed', 'pa1', 'A 9-month-old with bronchiolitis has a respiratory rate of 68, nasal flaring and SpO2 89% on room air. What is your FIRST action?',
  '9 個月大細支氣管炎 BB，呼吸率 68、鼻翼扇動，室內空氣血氧 89%。你第一步做咩？',
  ['Start oxygen and call the doctor', 'Give a feed to calm the baby', 'Recheck the observations in one hour', 'Give paracetamol'], 0,
  '血氧低過 92% 加呼吸費力係呼吸窘迫：先俾氧（Airway/Breathing 優先），同時即刻上報。餵奶會增加誤吸風險；等一個鐘太遲。', 'Her saturation is 89% on air; I have started oxygen and need you to review her now.');
NE.cs('paed', 'pa2', 'A 2-year-old has a fever of 39.5°C and a rash that does not fade when you press a glass on it. What should you do?',
  '兩歲小朋友發燒 39.5 度，紅疹用玻璃杯壓都唔褪色。你應該點做？',
  ['Give paracetamol and review later', 'Treat as an emergency and call the doctor immediately', 'Apply calamine lotion', 'Ask the parents to take a photo for the clinic'], 1,
  '發燒加壓唔褪色紅疹（non-blanching rash）可能係腦膜炎雙球菌敗血症，要即刻上報，通常一小時內俾抗生素。', 'This child has a fever with a non-blanching rash; I need an urgent review.');
NE.cs('paed', 'pa3', 'Paracetamol is prescribed at 15 mg/kg. The child weighs 14 kg. What dose do you give?',
  '撲熱息痛處方每公斤 15 毫克，小朋友 14 公斤，劑量係幾多？',
  ['140 mg', '180 mg', '210 mg', '240 mg'], 2, '15 × 14 = 210 mg。兒科藥一定要按體重計，再同另一位護士雙人核對。', 'The dose is 15 mg per kg, so 210 mg for 14 kg.');
NE.cs('paed', 'pa4', 'A child is having a febrile seizure on the bed. What is the most appropriate action?',
  '小朋友喺床上熱性抽搐，最適當嘅行動係？',
  ['Hold the child\'s arms and legs still', 'Put a spoon in the mouth', 'Place on the side, protect from injury and time the seizure', 'Give oral paracetamol immediately'], 2,
  '抽筋時唔好按住手腳，唔好塞嘢入口。令佢側臥、移開危險物件、計時；超過五分鐘要按醫囑俾止抽筋藥。', 'The seizure started at 10:05; I have placed her in the recovery position.');
NE.cs('paed', 'pa5', 'A 6-week-old baby has projectile vomiting after every feed and seems hungry afterwards. Which condition is most likely?',
  '6 週大 BB 每次食完奶都噴射狀嘔吐，嘔完又好肚餓。最可能係咩？',
  ['Gastro-oesophageal reflux', 'Pyloric stenosis', 'Intussusception', 'Constipation'], 1,
  '幽門狹窄典型係 2–8 週大、餵奶後噴射狀嘔吐、嘔完仍然肚餓，可能脫水。胃食道逆流通常係少量吐奶。', 'He has projectile vomiting after each feed and is still hungry.');
NE.cs('paed', 'pa6', 'Which pain assessment tool is most suitable for a 2-year-old who cannot describe pain?',
  '兩歲、未識形容痛嘅小朋友，最啱用邊個疼痛評估工具？',
  ['Numeric 0–10 scale', 'FLACC scale', 'Visual analogue scale', 'Asking the child to rate the pain'], 1,
  'FLACC 睇面部、腳、活動、喊同可否安撫，適合未識講嘢嘅幼兒。數字量表要大約 8 歲以上。', 'Her FLACC score is 7, so I will give the prescribed analgesia.');
NE.cs('paed', 'pa7', 'A toddler with gastroenteritis has a sunken fontanelle, dry lips and only one wet nappy in 12 hours. How would you describe this?',
  '腸胃炎學步兒囟門凹陷、嘴唇乾，12 個鐘得一片濕尿片。點樣形容？',
  ['No dehydration', 'Mild dehydration only', 'Clinical dehydration needing urgent review', 'Normal for a toddler'], 2,
  '囟門凹陷、口乾、尿量明顯減少係臨床脫水徵狀，要上報，可能要口服補液、鼻胃管或者靜脈輸液。', 'He has signs of dehydration: sunken fontanelle and reduced urine output.');
NE.cs('paed', 'pa8', 'A 10-year-old asks you if the blood test will hurt. What is the best reply?',
  '10 歲小朋友問你抽血痛唔痛，最好點答？',
  ['"No, it won\'t hurt at all."', '"It might feel like a quick scratch; you can squeeze my hand."', '"Don\'t be a baby."', '"Ask your mum."'], 1,
  '要誠實但溫和，俾應對方法。講「完全唔痛」會失去信任。', 'It might feel like a quick scratch, and then it\'s over.');
NE.cs('paed', 'pa9', 'You notice unexplained bruises of different colours on a 4-month-old who cannot roll yet. What should you do?',
  '你發現 4 個月大、未識翻身嘅 BB 有唔同顏色、原因不明嘅瘀傷。應該點做？',
  ['Ignore it; babies bruise easily', 'Confront the parents', 'Document objectively and report to the senior nurse per safeguarding policy', 'Post about it in a staff chat group'], 2,
  '未識郁嘅嬰兒有瘀傷係兒童保護警號。客觀記錄、按兒童保護程序上報，唔好自己質問家長。', 'I have a safeguarding concern about bruising on a non-mobile infant.');
NE.cs('paed', 'pa10', 'A baby on phototherapy for jaundice. Which nursing action is correct?',
  'BB 照燈治療黃疸，邊個護理做法正確？',
  ['Keep the eyes uncovered', 'Cover the eyes, expose as much skin as possible and monitor temperature and hydration', 'Stop feeds during treatment', 'Dress the baby fully to keep warm'], 1,
  '照燈要遮眼保護視網膜、盡量暴露皮膚、監察體溫同水分（照燈會增加水分流失），繼續餵奶。', 'Please keep the eye shields on while she is under the lights.');

// ---- 心血管 ----
NE.cs('cardio', 'cv1', 'A patient complains of central crushing chest pain and is sweating. What should you do FIRST?',
  '病人話心口中間好似被壓住咁痛，仲出汗。你第一步做咩？',
  ['Give a glass of water', 'Do a 12-lead ECG and call for help', 'Walk him to the bathroom', 'Wait for the doctor\'s ward round'], 1,
  '典型心肌梗塞徵狀：10 分鐘內做 12 導程心電圖、即刻上報，按醫囑俾氧（如血氧低）、脷底噴劑同阿士匹靈。', 'He has central chest pain and is diaphoretic; I am doing an ECG now.');
NE.cs('cardio', 'cv2', 'Before giving digoxin, you count an apical pulse of 52. What should you do?',
  '俾地高辛之前，心尖脈搏得 52。點做？',
  ['Give the dose as prescribed', 'Withhold the dose and inform the doctor', 'Give half the dose', 'Give it with food'], 1,
  '地高辛令心跳慢，一般心尖脈搏低過 60 要暫停並通知醫生，記錄原因。', 'The apical pulse is 52, so I have withheld the digoxin.');
NE.cs('cardio', 'cv3', 'A heart failure patient has gained 2.5 kg in two days and is more breathless lying flat. What does this suggest?',
  '心衰病人兩日內重咗 2.5 公斤，平躺更氣促。代表咩？',
  ['Better appetite', 'Fluid overload', 'Dehydration', 'Normal weight variation'], 1,
  '短時間體重急升加端坐呼吸代表體液積聚。要報告醫生，可能要加利尿劑、限水同監察出入量。', 'Her weight has increased by 2.5 kg in two days and she has orthopnoea.');
NE.cs('cardio', 'cv4', 'After a femoral angiogram, the patient\'s groin is swelling and he feels a warm, wet sensation. What is your FIRST action?',
  '經股動脈血管造影後，病人大髀罅腫起，感覺暖暖濕濕。第一步做咩？',
  ['Apply firm pressure above the puncture site and call for help', 'Ask him to walk', 'Remove the dressing to look', 'Raise the head of the bed to 90 degrees'], 0,
  '可能係穿刺位出血或血腫：即刻喺穿刺點上方用力按壓，同時叫人幫手、檢查生命表徵同遠端脈搏。', 'There is bleeding from the femoral site; I am applying pressure.');
NE.cs('cardio', 'cv5', 'A patient on warfarin has an INR of 6.2 and bleeding gums. What should you do?',
  '食華法林嘅病人 INR 6.2，牙肉出血。點做？',
  ['Give the next warfarin dose', 'Withhold warfarin and inform the doctor urgently', 'Tell him to brush harder', 'Ignore it; INR is always high'], 1,
  '目標 INR 通常 2–3。6.2 加出血要暫停華法林、緊急通知醫生，可能要用維他命 K。', 'His INR is 6.2 and his gums are bleeding; warfarin has been withheld.');
NE.cs('cardio', 'cv6', 'You find a patient unresponsive and not breathing normally. What do you do first?',
  '你發現病人冇反應、冇正常呼吸。第一步做咩？',
  ['Check blood sugar', 'Call for help/arrest team and start chest compressions', 'Go to find the doctor yourself', 'Give oxygen and wait'], 1,
  '冇反應加冇正常呼吸＝心跳停頓：大聲叫人、啟動急救團隊、即刻開始胸外按壓（每分鐘 100–120 下、深 5–6 厘米）。', 'Cardiac arrest in bed 4! Call the arrest team and bring the defibrillator.');

// ---- 呼吸 ----
NE.cs('resp', 're1', 'A COPD patient\'s SpO2 is 89% on 1 L/min oxygen. His target range is 88–92%. What should you do?',
  '慢阻肺病人用 1 公升氧，血氧 89%，目標 88–92%。點做？',
  ['Increase oxygen to 15 L via non-rebreather', 'Continue current oxygen and monitor', 'Stop the oxygen', 'Call the arrest team'], 1,
  '血氧喺目標範圍內，繼續監察。慢阻肺病人俾太多氧可以令二氧化碳積聚。', 'His saturation is 89%, within his target of 88 to 92%.');
NE.cs('resp', 're2', 'A patient with a chest drain: the drain tube has disconnected from the bottle. What is your immediate action?',
  '胸腔引流管同瓶甩開咗，即刻點做？',
  ['Clamp the tube and leave it for hours', 'Put the end of the tube into sterile water and call for help', 'Pull the drain out', 'Lift the bottle above the chest'], 1,
  '即刻將管端放入無菌水（臨時水封）防止空氣入胸腔，再叫人幫手接駁新瓶。唔好長時間夾管，可能引致張力性氣胸。', 'The chest drain has disconnected; I have placed the end under sterile water.');
NE.cs('resp', 're3', 'An asthma patient can only speak in single words, and the chest sounds very quiet. What does this mean?',
  '哮喘病人淨係講到單字，聽胸好靜。代表咩？',
  ['The asthma is improving', 'Life-threatening asthma — call for urgent help', 'He is tired and needs sleep', 'Normal after a nebuliser'], 1,
  '講唔到句子加「寂靜胸」（silent chest）係危及生命嘅哮喘，代表空氣入唔到，要即刻緊急上報。', 'He has a silent chest and can only speak in single words; this is life-threatening asthma.');
NE.cs('resp', 're4', 'Which is the correct inhaler teaching for a metered-dose inhaler with a spacer?',
  '定量噴霧器加儲霧器，正確教法係？',
  ['Breathe out into the spacer after spraying', 'Shake, attach to spacer, one puff, then breathe slowly or take five breaths', 'Spray several puffs at once into the spacer', 'No need to shake'], 1,
  '搖勻、接儲霧器、每次噴一下，然後慢慢深吸或者正常呼吸五次。多下要逐下噴。', 'Shake the inhaler, press once, then take five slow breaths.');
NE.cs('resp', 're5', 'A patient with suspected pulmonary TB is admitted. Which precautions are needed?',
  '懷疑肺結核病人入院，要用咩預防措施？',
  ['Standard precautions only', 'Droplet precautions with a surgical mask', 'Airborne precautions with a negative-pressure room and N95', 'No precautions until confirmed'], 2,
  '肺結核經空氣傳播：負壓房、員工戴 N95，病人離房時戴外科口罩。', 'Please wear an N95 respirator; this patient is on airborne precautions.');

// ---- 消化 ----
NE.cs('gi', 'gi1', 'A patient vomits about 300 mL of coffee-ground fluid and his heart rate rises to 118. What should you do first?',
  '病人嘔咗大約 300 毫升咖啡渣樣液體，心跳升到 118。第一步做咩？',
  ['Give a meal to settle the stomach', 'Assess ABC, keep nil by mouth, and escalate urgently', 'Give an antiemetic and leave', 'Encourage him to walk'], 1,
  '咖啡渣樣嘔吐加心跳快提示上消化道出血同可能休克：評估 ABC、禁食、上報，準備靜脈通道同驗血配血。', 'He has haematemesis and is tachycardic at 118; I need an urgent review.');
NE.cs('gi', 'gi2', 'Before giving a feed through a nasogastric tube, how do you confirm the tube position?',
  '經鼻胃管餵食前，點樣確認喉管位置？',
  ['Listen for a whoosh of air with a stethoscope', 'Check the pH of aspirate is 5.5 or below (or X-ray)', 'Put the end in water to see bubbles', 'Ask the patient'], 1,
  '抽出液 pH ≤5.5 先確認喺胃；唔得就照 X 光。聽「噗」聲同放水睇氣泡唔可靠，已經唔建議。', 'The aspirate pH is 4, so the tube is in the stomach.');
NE.cs('gi', 'gi3', 'A new ileostomy has produced 1,800 mL in 24 hours. What is the main risk?',
  '新迴腸造口 24 小時排出 1800 毫升。主要風險係咩？',
  ['Constipation', 'Dehydration and electrolyte imbalance', 'Weight gain', 'Urinary retention'], 1,
  '迴腸造口高排出量（一般 >1.5 L/日）容易脫水同失鈉、鉀，要報告、記錄出入量、可能要補液。', 'The ileostomy output is high, 1.8 litres in 24 hours.');
NE.cs('gi', 'gi4', 'A patient with cirrhosis becomes confused and drowsy. Which medicine is often used to treat this?',
  '肝硬化病人變得混亂同渴瞓。通常用邊隻藥？',
  ['Lactulose', 'Morphine', 'Diazepam', 'Iron tablets'], 0,
  '可能係肝性腦病：乳果糖減少腸道吸收氨，目標每日兩三次軟便。避免鎮靜藥。', 'He may have hepatic encephalopathy; lactulose is prescribed.');

// ---- 腎科 ----
NE.cs('renal', 'rn1', 'A post-operative patient has passed only 15 mL of urine per hour for 3 hours. What should you check FIRST?',
  '手術後病人連續 3 個鐘每小時只有 15 毫升尿。首先檢查咩？',
  ['Whether the catheter is blocked or kinked', 'Give a diuretic straight away', 'Remove the catheter', 'Restrict fluids'], 0,
  '少尿先排除機械原因：尿喉有冇屈曲或塞住，再評估水分狀況同生命表徵，然後上報。', 'Urine output has been 15 mL an hour for three hours; the catheter is patent.');
NE.cs('renal', 'rn2', 'Which arm must you NOT use for blood pressure in a haemodialysis patient?',
  '洗血病人邊隻手唔可以量血壓？',
  ['The arm with the AV fistula', 'The dominant arm', 'Either arm is fine', 'The left arm always'], 0,
  '有動靜脈瘻管嘅手唔可以量血壓、抽血或者打針，會損壞瘻管。', 'Please don\'t use her left arm; she has a fistula.');
NE.cs('renal', 'rn3', 'A patient\'s potassium is 6.7 mmol/L. What is the most important immediate concern?',
  '病人鉀 6.7。最重要嘅即時擔心係咩？',
  ['Constipation', 'Dangerous heart rhythms', 'Hair loss', 'Low blood sugar'], 1,
  '高血鉀可以引致致命心律不整：即刻報告、做心電圖、接心臟監察器，準備按醫囑治療。', 'Potassium is 6.7; I have done an ECG and put him on a monitor.');
NE.cs('renal', 'rn4', 'Peritoneal dialysis fluid draining out looks cloudy and the patient has abdominal pain. What might this indicate?',
  '腹膜透析流出液混濁，病人仲有肚痛。可能代表咩？',
  ['Normal drainage', 'Peritonitis', 'Dehydration', 'Constipation only'], 1,
  '混濁透析液加肚痛係腹膜炎典型徵狀，要送液體化驗培養、通知腎科，通常要用抗生素。', 'The PD fluid is cloudy and she has abdominal pain; I suspect peritonitis.');

// ---- 腦神經 ----
NE.cs('neuro', 'ne1', 'A patient suddenly develops right arm weakness and slurred speech 30 minutes ago. What is your priority?',
  '病人 30 分鐘前突然右手無力、講嘢含糊。你嘅首要做法係？',
  ['Give aspirin immediately', 'Activate the stroke pathway urgently and note the time of onset', 'Let her rest and recheck tomorrow', 'Give her lunch'], 1,
  '疑似中風：時間就係腦細胞。記低發病時間、即刻啟動中風流程，等 CT 排除出血之前唔好俾阿士匹靈，未做吞嚥評估唔好食嘢。', 'Symptoms started at 14:10; I am activating the stroke call.');
NE.cs('neuro', 'ne2', 'A head injury patient\'s GCS drops from 15 to 12 and one pupil is now larger. What should you do?',
  '頭部受傷病人 GCS 由 15 跌到 12，一邊瞳孔變大。點做？',
  ['Recheck in four hours', 'Escalate urgently — this may be raised intracranial pressure', 'Give a sleeping tablet', 'Lower the head of the bed flat'], 1,
  'GCS 跌兩分或以上加瞳孔不對稱係顱內壓上升警號，要即刻上報，可能要緊急 CT。', 'His GCS has dropped from 15 to 12 and his right pupil is dilated.');
NE.cs('neuro', 'ne3', 'A patient with Parkinson\'s disease missed his 12:00 levodopa because he was in X-ray. What should you do?',
  '帕金遜病人因為去照 X 光錯過咗 12 點嘅左旋多巴。點做？',
  ['Skip it until the next dose', 'Give it as soon as possible — it is time-critical', 'Double the next dose', 'Wait for the doctor\'s round tomorrow'], 1,
  '帕金遜藥係「時間關鍵藥物」，遲俾會令僵硬、吞嚥困難同跌倒風險增加，應盡快補俾並記錄。', 'His levodopa is time-critical; I have given it now.');

// ---- 內分泌 ----
NE.cs('endo', 'en1', 'A diabetic patient is sweaty and shaky; capillary glucose is 3.1 mmol/L. She is alert and can swallow. What do you give?',
  '糖尿病人出汗、手震，指尖血糖 3.1，清醒同吞到嘢。俾咩？',
  ['Insulin', '15–20 g fast-acting sugar, such as juice, then recheck in 15 minutes', 'Nothing; wait for lunch', 'A glass of water'], 1,
  '清醒低血糖用 15-15 規則：15–20 克快糖，15 分鐘後再驗，升返之後食啲澱粉質。', 'Her glucose is 3.1; I have given juice and will recheck in 15 minutes.');
NE.cs('endo', 'en2', 'Insulin is due at breakfast, but the patient is nil by mouth for surgery. What should you do?',
  '早餐要打胰島素，但病人因手術禁食。點做？',
  ['Give the usual mealtime insulin', 'Check the glucose and clarify the insulin plan with the doctor', 'Give double the dose', 'Give it after surgery without checking'], 1,
  '禁食時俾餐時胰島素會引致低血糖。要驗血糖，同醫生確認手術期間胰島素方案（可能保留長效或用靜脈胰島素）。', 'She is nil by mouth; can we clarify her insulin plan?');
NE.cs('endo', 'en3', 'After a thyroidectomy, the patient reports tingling around her mouth and fingers. What might this be?',
  '甲狀腺切除後，病人話口周圍同手指麻痺刺痛。可能係咩？',
  ['Hypocalcaemia', 'Hyperglycaemia', 'Normal anaesthetic effect', 'Allergy to the dressing'], 0,
  '手術可能影響副甲狀腺，引致低血鈣：口周同手指麻痺、抽筋。要即刻報告同驗血鈣。', 'She has perioral tingling; I am worried about low calcium.');

// ---- 骨科 ----
NE.cs('ortho', 'or1', 'A patient with a new forearm cast has pain not relieved by morphine and pain on moving the fingers. What do you suspect?',
  '新打石膏嘅病人，打完嗎啡都仲好痛，郁手指都痛。你懷疑咩？',
  ['Normal post-fracture pain', 'Compartment syndrome', 'Allergy to the cast', 'Anxiety'], 1,
  '同傷勢唔成比例、止痛藥都止唔到、被動伸展痛係腔室綜合症早期徵狀，要即刻上報，可能要剪開石膏。', 'His pain is out of proportion and not relieved by morphine; I suspect compartment syndrome.');
NE.cs('ortho', 'or2', 'After a total hip replacement, which movement should the patient avoid?',
  '全髖置換後，病人應該避免邊個動作？',
  ['Straightening the leg', 'Bending the hip beyond 90 degrees or crossing the legs', 'Moving the toes', 'Deep breathing'], 1,
  '後入路髖關節置換要避免屈髖超過 90 度、翹腳同向內轉，預防脫臼。', 'Please don\'t cross your legs or bend your hip past 90 degrees.');
NE.cs('ortho', 'or3', 'An older patient fell. Her right leg is shortened and externally rotated. What is most likely?',
  '長者跌倒後右腳縮短同向外轉。最可能係咩？',
  ['Ankle sprain', 'Neck of femur fracture', 'Knee dislocation', 'Muscle cramp'], 1,
  '腳縮短加外旋係股骨頸骨折典型表現。唔好叫佢企，止痛、上報、安排 X 光。', 'Her right leg is shortened and externally rotated after a fall.');

// ---- 傷口 ----
NE.cs('skin', 'sk1', 'You find non-blanching redness over the sacrum of a bed-bound patient. What stage is this?',
  '臥床病人骶骨位有壓唔褪色嘅發紅。屬第幾期壓瘡？',
  ['Stage 1', 'Stage 2', 'Stage 3', 'Unstageable'], 0,
  '皮膚完整但壓唔褪色嘅紅斑係第一期。要即刻減壓、轉身、評估同記錄。', 'There is a stage 1 pressure injury on the sacrum.');
NE.cs('skin', 'sk2', 'Which is the BEST way to prevent pressure injuries in an immobile patient?',
  '預防不能活動病人生壓瘡，最好嘅方法係？',
  ['Massage red areas hard', 'Regular repositioning, pressure-relieving surfaces and skin checks', 'Donut-shaped cushions', 'Keep the skin wet'], 1,
  '定時轉身、減壓床褥、檢查皮膚、保持乾爽同營養係重點。大力按摩同冬甩墊會增加損傷。', 'We will reposition him every two hours and check his skin.');

// ---- 腫瘤 ----
NE.cs('haemonc', 'ho1', 'A patient 10 days after chemotherapy has a temperature of 38.4°C. What should you do?',
  '化療後第 10 日病人發燒 38.4 度。點做？',
  ['Give paracetamol and observe', 'Treat as possible neutropenic sepsis — escalate and give antibiotics within one hour', 'Wait until the temperature reaches 39', 'Tell him to drink more water'], 1,
  '化療後 7–14 日係血球最低點，發燒要當中性白血球低敗血症處理：即刻上報、抽血培養、一小時內俾抗生素。', 'He is day 10 post-chemotherapy with a temperature of 38.4; this may be neutropenic sepsis.');
NE.cs('haemonc', 'ho2', 'Fifteen minutes into a blood transfusion, the patient develops fever, back pain and breathlessness. What is your FIRST action?',
  '輸血 15 分鐘後病人發燒、背痛同氣促。第一步做咩？',
  ['Slow the transfusion', 'Stop the transfusion immediately and call for help', 'Give paracetamol and continue', 'Finish the unit quickly'], 1,
  '可能係急性溶血反應：即刻停輸血、保持靜脈通道、叫醫生、監察生命表徵、保留血袋。', 'I have stopped the transfusion; he has fever, back pain and dyspnoea.');

// ---- 產科 ----
NE.cs('obs', 'ob1', 'After birth, a woman has heavy vaginal bleeding and her uterus feels soft and boggy. What is your FIRST action?',
  '產後婦女陰道大量出血，子宮摸落軟綿綿。第一步做咩？',
  ['Massage the uterine fundus and call for help', 'Give her a drink', 'Encourage her to walk', 'Change the sheets and observe'], 0,
  '子宮收縮乏力係產後大出血最常見原因：即刻按摩宮底、叫人幫手，準備宮縮藥同靜脈輸液。', 'She has a postpartum haemorrhage with a boggy uterus; I am massaging the fundus.');
NE.cs('obs', 'ob2', 'A woman at 34 weeks has a severe headache, visual disturbance and BP 168/112. What might this be?',
  '34 週孕婦嚴重頭痛、視力模糊、血壓 168/112。可能係咩？',
  ['Normal pregnancy symptoms', 'Severe pre-eclampsia', 'Migraine only', 'Dehydration'], 1,
  '高血壓加頭痛、視力問題係嚴重妊娠毒血症，有子癇風險，要即刻上報。', 'Her BP is 168 over 112 with headache and visual disturbance.');

// ---- 精神科 ----
NE.cs('mh', 'mh1', 'A patient tells you, "I don\'t see the point in living anymore." What is the best response?',
  '病人同你講：「我覺得冇乜意思再生存落去。」最好點回應？',
  ['"Don\'t say that, you\'ll be fine."', '"Are you having thoughts of ending your life?"', 'Change the subject', '"Everyone feels like that sometimes."'], 1,
  '直接、冷靜咁問自殺念頭唔會增加風險，反而幫你評估。之後評估計劃同方法、唔好留佢一個人、上報。', 'Are you having thoughts of ending your life?');
NE.cs('mh', 'mh2', 'An agitated patient is shouting in the corridor. What is the FIRST approach?',
  '一個激動病人喺走廊大嗌。第一個做法係？',
  ['Physical restraint immediately', 'Calm verbal de-escalation with a safe distance', 'Shout back to be heard', 'Ignore him'], 1,
  '先用降溫技巧：保持安全距離、語氣平靜、聆聽、提供選擇。約束同快速鎮靜係最後手段。', 'I can see you\'re upset. Let\'s talk somewhere quieter.');

// ---- 急症 ----
NE.cs('er', 'er1', 'A patient develops lip swelling, wheeze and a BP of 80/50 after an IV antibiotic. What should you give FIRST?',
  '病人打完靜脈抗生素後嘴唇腫、喘鳴、血壓 80/50。首先俾咩？',
  ['Oral antihistamine', 'IM adrenaline 0.5 mg (1:1000) and stop the drug', 'Paracetamol', 'A nebuliser only'], 1,
  '過敏性休克：停藥、叫人、大腿外側肌肉注射腎上腺素 0.5 mg（成人），5 分鐘後可重複，再處理氣道同輸液。', 'This is anaphylaxis; I am giving IM adrenaline now.');
NE.cs('er', 'er2', 'Using the ABCDE approach, what do you assess FIRST?',
  '用 ABCDE 評估法，首先評估咩？',
  ['Blood pressure', 'Airway', 'Blood glucose', 'Temperature'], 1,
  'A 係 Airway 氣道：病人講到嘢即係氣道暢通。跟住 Breathing、Circulation、Disability、Exposure。', 'Airway is clear; he is talking in full sentences.');
NE.cs('er', 'er3', 'A patient\'s NEWS score has risen to 7. What is the correct response?',
  '病人 NEWS 升到 7 分，正確回應係？',
  ['Recheck in 12 hours', 'Urgent review by the medical team or critical care outreach', 'Tell the next shift', 'Give a sleeping tablet'], 1,
  'NEWS 7 分或以上屬高風險，要緊急上報醫生／危重病團隊，增加觀察次數。', 'His NEWS is 7; I need an urgent review please.');

// ---- 藥理 ----
NE.cs('pharm', 'ph1', 'You are asked to give 125 mg of a drug. The stock is 250 mg in 5 mL. How many mL do you give?',
  '要俾 125 毫克，存貨係 5 毫升有 250 毫克。要俾幾多毫升？',
  ['1.25 mL', '2.5 mL', '5 mL', '10 mL'], 1, '所需 ÷ 存貨 × 體積 = 125 ÷ 250 × 5 = 2.5 mL。', 'I need 125 mg; the stock is 250 mg in 5 mL, so I will give 2.5 mL.');
NE.cs('pharm', 'ph2', 'Which of these is a HIGH-ALERT medication that needs an independent double-check?',
  '以下邊樣係需要獨立雙人核對嘅高警示藥物？',
  ['Vitamin C tablets', 'Insulin', 'Saline nasal spray', 'Emollient cream'], 1,
  '胰島素、肝素、濃縮鉀、鴉片類藥等出錯會造成嚴重傷害，屬高警示藥物。', 'Could you do an independent double-check of this insulin with me?');
NE.cs('pharm', 'ph3', 'A prescription reads "Insulin 10U". What is the safety problem?',
  '處方寫「Insulin 10U」，有咩安全問題？',
  ['Nothing is wrong', '"U" can be misread as 0, making it 100 units', 'Insulin is never given in units', 'The dose is too low'], 1,
  '「U」可以睇錯成「0」，變咗 100 單位。應該寫全「units」。發現要同醫生澄清。', 'Could you rewrite this as "10 units" in full, please?');
NE.cs('pharm', 'ph4', 'A patient on morphine is very drowsy, with a respiratory rate of 7 and pinpoint pupils. Which drug may be needed?',
  '用緊嗎啡嘅病人好渴瞓，呼吸率 7，瞳孔針尖咁細。可能需要邊隻藥？',
  ['Naloxone', 'More morphine', 'Furosemide', 'Insulin'], 0,
  '鴉片類藥中毒（呼吸抑制）：停藥、叫醒、俾氧、上報，按醫囑俾納洛酮。', 'His respiratory rate is 7 with pinpoint pupils; I suspect opioid toxicity.');

// ---- 感染控制 ----
NE.cs('ipc', 'ic1', 'A patient has diarrhoea and Clostridioides difficile is suspected. How should you clean your hands after care?',
  '懷疑艱難梭菌肚瀉病人，照顧後應該點潔手？',
  ['Alcohol hand rub only', 'Soap and water', 'No need if you wore gloves', 'Wipe hands on the uniform'], 1,
  '艱難梭菌孢子唔怕酒精，要用梘液同水洗手，並用接觸性隔離同含氯消毒劑清潔環境。', 'Please wash your hands with soap and water after leaving this room.');
NE.cs('ipc', 'ic2', 'What is the correct order for REMOVING PPE (general guidance)?',
  '除 PPE 嘅正確次序（一般指引）係？',
  ['Mask, gloves, gown', 'Gloves, gown, hand hygiene, goggles/face shield, mask, hand hygiene', 'Goggles first, then gloves', 'Any order is fine'], 1,
  '最污染嘅手套先除，跟住保護衣，再潔手，然後除眼罩、口罩，最後再潔手。（以醫院指引為準）', 'I will remove my gloves and gown first, then clean my hands.');
NE.cs('ipc', 'ic3', 'You get a needlestick injury from a used needle. What is your FIRST action?',
  '你俾用過嘅針拮親，第一步做咩？',
  ['Finish your work first', 'Encourage bleeding, wash with running water, then report immediately', 'Suck the wound', 'Apply alcohol and ignore it'], 1,
  '擠出血、用流動水同肥皂沖洗、即刻報告，盡快評估是否需要暴露後預防治療。', 'I had a needlestick injury and need to report it now.');

// ---- 記錄 ----
NE.cs('doc', 'dc1', 'Which nursing note is written correctly?',
  '邊句護理記錄寫得啱？',
  ['"Patient seems fine."', '"02:15 RR 28, SpO2 90% on air, c/o SOB. Dr Lee informed, O2 2 L started."', '"Patient was difficult as usual."', '"Obs OK."'], 1,
  '記錄要客觀、有時間、有數據、寫埋採取咗咩行動同通知咗邊個。避免主觀批評同含糊字眼。', 'At 02:15 the respiratory rate was 28 and I informed Dr Lee.');
NE.cs('doc', 'dc2', 'In ISBAR, what does the "R" stand for?',
  'ISBAR 入面「R」代表咩？',
  ['Reason', 'Recommendation (what you want)', 'Result', 'Record'], 1,
  'R = Recommendation：清楚講你想醫生做咩，例如「請你 30 分鐘內嚟睇」。', 'I would like you to review him within 30 minutes.');

// ---- 法律及操守 ----
NE.cs('ethics', 'et1', 'A relative phones and asks for a patient\'s test results. What should you do?',
  '有親屬打電話嚟問病人嘅化驗結果。點做？',
  ['Read out all results', 'Confirm identity and the patient\'s consent before sharing any information', 'Hang up', 'Tell them to look online'], 1,
  '保密原則：要確認對方身份同病人同意先可以透露資料，最好由醫生解釋結果。', 'I\'m sorry, I need to confirm your identity and the patient\'s consent first.');
NE.cs('ethics', 'et2', 'You gave a medicine at the wrong time. No harm occurred. What should you do?',
  '你俾錯時間派藥，冇造成傷害。應該點做？',
  ['Say nothing because no harm occurred', 'Check the patient, inform the senior nurse and doctor, and report the incident', 'Change the time on the chart', 'Ask a colleague to cover for you'], 1,
  '坦誠責任：評估病人、上報、填事故報告。改記錄係嚴重違規。報告幫助改善系統。', 'I gave the medicine at the wrong time; I have checked the patient and I am reporting it.');
NE.cs('ethics', 'et3', 'A senior asks you to do a procedure you have never been trained to do. What is the best action?',
  '上司叫你做一個你從未受訓嘅程序。最好點做？',
  ['Do it anyway', 'Explain you are not trained and ask for supervision or someone competent', 'Watch a video and try', 'Ask the patient to do it'], 1,
  '只做自己能力同執業範圍內嘅事。講明未受訓，要求督導或者由合資格同事做。', 'I haven\'t been trained to do this yet; could you supervise me?');

// ---- 專業技巧 ----
NE.cs('prof', 'pr1', 'At the start of your shift, which patient should you see FIRST?',
  '開更時，你應該最先睇邊個病人？',
  ['A stable patient waiting for discharge papers', 'A patient with new chest pain', 'A patient asking for a newspaper', 'A patient due for a 10:00 dressing'], 1,
  '用 ABC 同急迫性排優先：新胸痛可能危及生命，要最先處理。', 'I will see bed 3 first because he has new chest pain.');
NE.cs('prof', 'pr2', 'Which task is appropriate to delegate to a healthcare assistant?',
  '邊項工作適合委派俾健康服務助理？',
  ['Assessing a deteriorating patient', 'Helping a stable patient with washing', 'Giving IV antibiotics', 'Talking to the doctor about results'], 1,
  '可以委派穩定、可預測、喺佢能力範圍內嘅工作，例如協助梳洗。評估同靜脈給藥屬護士職責。', 'Could you help Mr Lam with his wash and tell me if anything changes?');
NE.cs('prof', 'pr3', 'You are worried about a patient, but the doctor says "He\'s fine" over the phone. What should you do?',
  '你擔心某個病人，但醫生喺電話講「佢冇事」。你應該點做？',
  ['Accept it and stop worrying', 'Clearly restate your concern using CUS words and escalate further if needed', 'Shout at the doctor', 'Wait until morning'], 1,
  '相信自己嘅臨床判斷：用 CUS（I am Concerned / Uncomfortable / Safety issue）再講清楚，有需要就向更高層上報並記錄。', 'I am concerned; this is a safety issue and I would like you to come and see him.');
NE.cs('prof', 'pr4', 'What is the best way to check that a patient understood your discharge teaching?',
  '點樣最有效確認病人明白出院指導？',
  ['Ask "Do you understand?"', 'Use teach-back: ask them to explain it in their own words', 'Give a leaflet only', 'Speak louder'], 1,
  '回教法（teach-back）令你知道佢真係明白，問「明唔明」通常淨係得到「明」。', 'Can you tell me in your own words when you will take this medicine?');

// ---- 老人科 ----
NE.cs('geri', 'ge1', 'An 85-year-old becomes suddenly confused overnight. What is the MOST likely cause to look for?',
  '85 歲長者一晚之間突然神志混亂。最應該搵咩原因？',
  ['Normal ageing', 'Delirium from infection, pain, constipation, retention or drugs', 'Dementia getting worse slowly', 'Laziness'], 1,
  '突然混亂係譫妄，通常有可處理嘅原因：感染、痛、便秘、尿瀦留、脫水、藥物。要評估同上報。', 'She has acute confusion; I am checking for infection, retention and constipation.');
NE.cs('geri', 'ge2', 'Which is the best way to reduce falls at night for an older patient?',
  '點樣最有效減少長者夜晚跌倒？',
  ['Use bed rails for everyone', 'Night light, call bell in reach, regular toileting and non-slip footwear', 'Give sleeping tablets', 'Tell the patient not to get up'], 1,
  '環境同習慣措施最有效。床欄可能令人爬出更易跌；安眠藥增加跌倒。', 'I have put the call bell within reach and turned on the night light.');

// ---- 營養 ----
NE.cs('nutri', 'nu1', 'A stroke patient has not had a swallowing assessment yet and asks for water. What should you do?',
  '中風病人未做吞嚥評估，問你要水飲。點做？',
  ['Give a small cup of water', 'Keep nil by mouth until the swallow screen is done, and give mouth care', 'Give thick soup instead', 'Give water through a straw'], 1,
  '未評估吞嚥前任何食物飲品都可能誤吸。保持禁食、做口腔護理，盡快安排吞嚥篩查。', 'I\'m sorry, we need to check your swallowing before you drink.');

// ---- 手術 ----
NE.cs('periop', 'po1', 'During the pre-operative check, the consent form states the left knee, but the patient says it is the right knee. What do you do?',
  '術前核對時同意書寫左膝，病人話係右膝。點做？',
  ['Follow the consent form', 'Stop and inform the surgeon before the patient goes to theatre', 'Mark the right knee yourself', 'Ignore it; the surgeon will know'], 1,
  '任何身份、部位不一致都要停止並通知外科醫生，避免做錯部位手術（警訊事件）。', 'There is a discrepancy in the operation site; I need the surgeon to check before we proceed.');
NE.cs('periop', 'po2', 'Two hours after surgery, the patient\'s heart rate rises from 80 to 120 and BP falls to 90/60. What might this suggest?',
  '手術後兩個鐘，病人心跳由 80 升到 120，血壓跌到 90/60。可能代表咩？',
  ['Good recovery', 'Bleeding / hypovolaemic shock', 'Hunger', 'Normal anaesthetic effect'], 1,
  '心跳上升加血壓下降係出血或者低血容量嘅警號：檢查傷口同引流、上報、準備輸液。', 'His heart rate has risen to 120 and BP is 90/60; I suspect bleeding.');

// ---- 社康及紓緩 ----
NE.cs('comm', 'cm1', 'A dying patient\'s family is upset by the noisy breathing. What is the best explanation?',
  '臨終病人呼吸有痰聲，家屬好擔心。最好點解釋？',
  ['"He is choking; we must suction him all the time."', '"This is common near the end of life and usually does not distress him; we can reposition him."', '"There is nothing we can do."', '"He is getting better."'], 1,
  '臨終喉鳴好常見，病人通常唔辛苦。可以轉身、按醫囑用藥減少分泌，唔建議頻密深抽痰。', 'This noisy breathing is common, and we will keep him comfortable.');
NE.cs('comm', 'cm2', 'A carer looks exhausted and says she cannot cope with her husband at home. What should you do?',
  '照顧者好疲倦，話喺屋企應付唔到佢丈夫。點做？',
  ['Tell her to try harder', 'Listen, assess carer stress and refer to the social worker for support such as respite', 'Ignore it; she is not the patient', 'Discharge the patient faster'], 1,
  '照顧者壓力會影響病人安全。聆聽、評估、轉介社工安排暫托、家居支援同照顧者培訓。', 'It sounds really tiring; can I ask the social worker to talk about support?');
