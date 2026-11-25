// 🩺 臨床情境題（六）：原創題目（程序、兒科、新生兒、急救）
// NE.cs(科目, id, 英文情境, 中文意思, [4 個選項], 正確答案 0–3, 中文解釋, 實用英文句)

NE.cs('proc', 'pc1', 'While inserting an NG tube, the patient starts coughing and cannot speak. What should you do?',
  '插鼻胃管期間病人開始咳同講唔到嘢。點做？',
  ['Keep pushing the tube', 'Withdraw the tube immediately — it may be in the airway', 'Give water to help', 'Lie the patient flat'], 1,
  '咳、講唔到嘢或者發紺代表條喉可能入咗氣管，要即刻抽出，讓病人休息再評估。', 'I\'m taking the tube out now; it may have gone into your airway.');
NE.cs('proc', 'pc2', 'Before a wound dressing, what should you do FIRST?',
  '換症之前第一步做咩？',
  ['Open all packs', 'Explain, gain consent, offer pain relief and perform hand hygiene', 'Remove the old dressing with bare hands', 'Spray the wound with alcohol'], 1,
  '先解釋同取得同意、評估止痛需要、潔手，再用無菌技術。', 'Is it okay if I change your dressing now?');
NE.cs('proc', 'pc3', 'During catheterisation, you accidentally touch the catheter tip with a non-sterile glove. What should you do?',
  '插尿喉時你不小心用非無菌手套掂到尿喉嘴。點做？',
  ['Continue', 'Discard it and use a new sterile catheter', 'Wipe it with tissue', 'Rinse it with tap water'], 1,
  '污染咗嘅無菌用品要丟棄，換新嘅，預防導尿管相關感染。', 'The catheter is contaminated, so I\'ll get a new one.');
NE.cs('proc', 'pc4', 'A patient\'s blood pressure reading seems unexpectedly high. What should you do first?',
  '病人血壓讀數出奇咁高。第一步做咩？',
  ['Report it immediately without checking', 'Check cuff size and position, let the patient rest and repeat the measurement', 'Give antihypertensive medicine', 'Ignore it'], 1,
  '先排除技術錯誤（帶太細、手臂位置、講嘢、剛活動），休息 5 分鐘再量；仍然高就上報。', 'Let me check the cuff and repeat your blood pressure in a few minutes.');
NE.cs('proc', 'pc5', 'You are about to discharge a patient but the follow-up appointment has not been booked. What should you do?',
  '病人準備出院，但未預約覆診。點做？',
  ['Discharge anyway; they can call later', 'Arrange the appointment or give clear instructions before the patient leaves', 'Tell them to go to A&E if needed', 'Ignore it'], 1,
  '出院前要確保覆診、藥物、指導同聯絡方法清楚，避免遺漏。', 'Before you go, let me confirm your follow-up appointment.');

NE.cs('paed', 'pa41', 'A newborn is born not breathing and floppy. After drying and stimulating, there is still no breathing. What is next?',
  '新生兒出世冇呼吸、軟綿綿。抹乾同刺激後仍然冇呼吸。下一步係？',
  ['Wait for 5 minutes', 'Open the airway and give five inflation breaths, call for help', 'Give milk', 'Start chest compressions immediately without breaths'], 1,
  '新生兒復甦：保暖、抹乾刺激、打開氣道、五下充氣呼吸，再評估心跳。新生兒問題多數係呼吸。', 'No breathing — I\'m giving five inflation breaths. Call for help!');
NE.cs('paed', 'pa42', 'A breastfed baby has lost 12% of birth weight on day 4. What should you do?',
  '餵母乳 BB 第四日體重跌咗出世體重嘅 12%。點做？',
  ['Nothing; this is normal', 'Assess feeding and hydration, check jaundice, and refer for feeding support and medical review', 'Stop breastfeeding', 'Give water only'], 1,
  '頭幾日減 7–10% 以內屬常見，超過 10% 要評估餵哺、脫水同黃疸，按醫生指示可能要補充餵哺。', 'She has lost 12% of her birth weight; I\'d like a feeding review.');
NE.cs('paed', 'pa43', 'A child with nephrotic syndrome on steroids develops a fever. Why is this concerning?',
  '用緊類固醇嘅腎病綜合症小朋友發燒。點解要擔心？',
  ['It isn\'t', 'Steroids and the condition increase infection risk, e.g. peritonitis', 'Fever helps the kidneys', 'Only because of dehydration'], 1,
  '腎病綜合症同類固醇都會增加感染風險（例如腹膜炎、蜂窩組織炎），要即刻上報。', 'She\'s on steroids for nephrotic syndrome and now has a fever.');
NE.cs('paed', 'pa44', 'A 5-year-old needs to fast before surgery but is crying for a drink at 7 a.m.; surgery is at 11 a.m. What is usually allowed?',
  '5 歲小朋友 11 點手術，朝早 7 點喊住要飲水。通常點處理？',
  ['Nothing at all since midnight', 'Clear fluids are usually allowed up to 1–2 hours before anaesthesia — check the local policy', 'Milk and biscuits', 'A full breakfast'], 1,
  '兒童通常可以飲清水到麻醉前 1–2 小時（按醫院指引），減少口渴同脫水。', 'Let me check with the anaesthetist; he may be allowed some water.');
NE.cs('paed', 'pa45', 'A parent asks whether to give paracetamol and ibuprofen together for fever. What is a safe answer?',
  '家長問發燒可唔可以同時俾撲熱息痛同布洛芬。安全嘅答案係？',
  ['Give both at full doses every hour', 'Usually start with one; only alternate if advised, and record times to avoid overdose', 'Never give any medicine', 'Give adult doses'], 1,
  '一般先用一種；交替用藥要醫生建議，記低每劑時間同份量，避免過量。', 'Let\'s write down each dose and the time so we don\'t give too much.');
NE.cs('paed', 'pa46', 'A child has red, swollen eyelids and pain moving the eye, with fever. What might this be?',
  '小朋友眼皮紅腫、轉動眼球痛，仲發燒。可能係咩？',
  ['Simple conjunctivitis', 'Orbital cellulitis — urgent review', 'Tiredness', 'Allergy only'], 1,
  '眼眶蜂窩組織炎係急症（可以影響視力同腦部），要即刻上報，通常要靜脈抗生素。', 'He has a swollen eyelid with pain on eye movement; this needs urgent review.');
NE.cs('paed', 'pa47', 'Which feeding position is recommended for a baby with cleft palate?',
  '裂顎 BB 建議用咩姿勢餵奶？',
  ['Lying flat', 'Upright (semi-sitting) position with a special bottle', 'Upside down', 'On the tummy'], 1,
  '坐直餵可以減少奶流入鼻同誤吸，配合特別奶樽或奶嘴。', 'Let\'s feed her sitting more upright with the special bottle.');
NE.cs('paed', 'pa48', 'A child with asthma has a peak flow of 45% of her best. What does this suggest?',
  '哮喘小朋友峰流速得佢最佳嘅 45%。代表咩？',
  ['Mild symptoms', 'A severe attack needing urgent treatment', 'Normal', 'She is tired'], 1,
  '峰流速 33–50% 屬嚴重發作，要即刻治療同上報；低過 33% 屬危及生命。', 'Her peak flow is 45% of her best; this is a severe attack.');

NE.cs('er', 'er11', 'A patient has a cardiac arrest and the rhythm is asystole. What is the correct action?',
  '病人心跳停頓，心律係心搏停止。正確做法係？',
  ['Defibrillate immediately', 'Continue CPR and give adrenaline as per ALS', 'Stop CPR', 'Give a fluid bolus only'], 1,
  '心搏停止唔可以電擊：繼續 CPR、盡快俾腎上腺素，同時搵可逆原因。', 'Asystole — continue compressions and give adrenaline.');
NE.cs('er', 'er12', 'During CPR, how often should compressors swap?',
  '做 CPR 時應該幾耐換人按壓？',
  ['Every 10 minutes', 'About every 2 minutes, at rhythm checks', 'Never', 'Every 30 seconds'], 1,
  '大約每兩分鐘換人，避免疲勞令按壓質素下降。', 'Swap compressors at the next rhythm check.');
NE.cs('er', 'er13', 'A patient with a suspected neck injury is lying on the floor. What should you do?',
  '懷疑頸部受傷病人瞓喺地下。點做？',
  ['Sit them up', 'Keep the head and neck still in line and call for help', 'Turn the head to check', 'Walk them to a bed'], 1,
  '保持頭頸一直線，唔好郁，等候頸托同團隊用正確方法搬移。', 'Please don\'t move your head; I\'m going to keep it still.');

NE.cs('mh', 'mh10', 'A patient says she hears voices telling her she is worthless. What is the most important next question?',
  '病人話聽到聲話佢冇用。下一條最重要嘅問題係？',
  ['"What music do you like?"', '"Do the voices ever tell you to hurt yourself or others?"', '"Why are you lying?"', '"Can you ignore them?"'], 1,
  '評估命令性幻聽同風險最重要。', 'Do the voices ever tell you to do anything, like hurt yourself?');
NE.cs('mh', 'mh11', 'A patient with dementia accuses you of stealing her purse. What is the best response?',
  '認知障礙病人指你偷咗佢銀包。最好點回應？',
  ['Argue that you did not', 'Stay calm, reassure her and help her look for it', 'Ignore her', 'Report her to security'], 1,
  '唔好爭拗，冷靜安撫，幫佢一齊搵，轉移注意力。', 'Let\'s look for your purse together.');

NE.cs('obs', 'ob10', 'Within one hour of birth, what is recommended for a healthy term baby and mother?',
  '健康足月 BB 出世一小時內，建議做咩？',
  ['Separate them for observation', 'Skin-to-skin contact and starting breastfeeding', 'Bathe the baby immediately', 'Give formula milk'], 1,
  '出世後即時肌膚接觸同及早開始餵母乳，有助保暖、穩定血糖同親子連繫。', 'Let\'s put your baby skin-to-skin on your chest.');

NE.cs('haemonc', 'ho10', 'A patient with leukaemia has a platelet count of 8 and starts bleeding from the gums. What should you do?',
  '白血病病人血小板 8，牙肉開始出血。點做？',
  ['Use a hard toothbrush', 'Apply gentle pressure, inform the doctor urgently — a platelet transfusion may be needed', 'Ignore it', 'Give aspirin'], 1,
  '血小板極低有自發性出血風險：輕力按壓、即刻上報、可能要輸血小板，避免阿士匹靈。', 'His platelets are 8 and his gums are bleeding; he may need platelets.');

NE.cs('cardio', 'cv16', 'A patient on bisoprolol has a heart rate of 46 and feels dizzy. What should you do?',
  '用緊比索洛爾嘅病人心跳 46，覺得頭暈。點做？',
  ['Give the next dose', 'Withhold the dose, check BP and inform the doctor', 'Ask him to exercise', 'Give coffee'], 1,
  '乙型阻斷劑可以引致心跳過慢；有徵狀要暫停、量血壓、上報。', 'His heart rate is 46 and he\'s dizzy, so I\'ve withheld the bisoprolol.');
NE.cs('cardio', 'cv17', 'After cardiac catheterisation via the femoral artery, how should the patient lie at first?',
  '經股動脈心導管檢查後，病人起初應該點樣瞓？',
  ['Sitting upright at 90 degrees', 'Flat or slightly raised with the leg straight, as per protocol', 'On the stomach', 'Walking around'], 1,
  '按指引平臥或者床頭微升、隻腳伸直，減少穿刺位出血。', 'Please keep your leg straight and lie back for now.');

NE.cs('resp', 're13', 'A patient with a chest drain needs to be transferred to X-ray. What is correct?',
  '有胸腔引流嘅病人要送去照 X 光。邊個做法正確？',
  ['Clamp the drain for the journey', 'Keep the bottle upright and below chest level; do not clamp unless instructed', 'Lift the bottle onto the bed', 'Disconnect the bottle'], 1,
  '轉送時保持水封瓶直立同低於胸口，唔好隨便夾管（可能引致張力性氣胸）。', 'Keep the drain bottle upright and below the chest during transfer.');

NE.cs('gi', 'gi12', 'A patient with suspected bowel obstruction has a distended abdomen and vomiting. What is likely to be inserted?',
  '懷疑腸塞嘅病人肚脹同嘔吐。通常會插咩？',
  ['A nasogastric tube for decompression', 'A urinary catheter only', 'A chest drain', 'A feeding PEG'], 0,
  '鼻胃管減壓排出胃內容物，配合禁食同靜脈輸液。', 'We\'ll put a tube through your nose to relieve the pressure in your stomach.');

NE.cs('neuro', 'ne11', 'Which action reduces raised intracranial pressure in a head-injured patient?',
  '邊個做法可以幫頭部受傷病人減低顱內壓？',
  ['Lying flat with the head turned to one side', 'Head of bed at 30 degrees with the head in a neutral position', 'Frequent coughing', 'Tight neck tapes'], 1,
  '床頭升高 30 度、頭保持正中、避免頸部受壓，有助靜脈回流、降低顱內壓。', 'Keep the head of the bed at 30 degrees and the head straight.');

NE.cs('endo', 'en11', 'A patient with type 1 diabetes is going for an operation. Why must insulin never be stopped completely?',
  '一型糖尿病人要做手術。點解胰島素唔可以完全停？',
  ['It is not important', 'Without insulin, type 1 patients can develop DKA quickly', 'It causes weight gain', 'Surgery needs insulin to start'], 1,
  '一型糖尿病人自己唔製造胰島素，完全停會好快出現酮酸中毒，要按手術期間方案繼續俾（例如靜脈胰島素）。', 'She has type 1 diabetes, so she needs basal insulin even while fasting.');

NE.cs('renal', 'rn11', 'A patient with CKD asks why he must limit phosphate. What is the best explanation?',
  '慢性腎病病人問點解要限制磷。最好點解釋？',
  ['It causes hair loss', 'Damaged kidneys cannot remove phosphate, which can weaken bones and harm blood vessels', 'It is only for taste', 'There is no reason'], 1,
  '腎功能差令磷積聚，影響骨骼同血管鈣化，所以要限磷同用磷結合劑。', 'Your kidneys can\'t remove phosphate well, so we need to limit it.');

NE.cs('ortho', 'or10', 'A patient with an external fixator has redness and pus at a pin site. What should you do?',
  '外固定架病人針口紅腫有膿。點做？',
  ['Ignore it', 'Take a swab, clean per protocol and inform the doctor', 'Pull the pin out', 'Cover it with tape'], 1,
  '針口感染要做拭子、按指引清潔、通知醫生，可能要抗生素。', 'There\'s pus at the pin site; I\'ve taken a swab.');

NE.cs('ipc', 'ic11', 'Which hand hygiene method is preferred when hands are visibly soiled?',
  '手有明顯污漬時，應該用咩方法潔手？',
  ['Alcohol hand rub', 'Soap and water', 'Wiping on a towel only', 'Gloves without cleaning'], 1,
  '手有明顯污漬或接觸艱難梭菌、諾如病毒時要用梘液同水。', 'My hands are visibly soiled, so I\'ll wash them with soap and water.');

NE.cs('pharm', 'ph17', 'Insulin glargine (long-acting) is due at 22:00, but the patient\'s glucose is 5.2 and she has eaten little. What should you do?',
  '長效胰島素 glargine 晚上十點要打，病人血糖 5.2，食得少。點做？',
  ['Withhold all insulin forever', 'Do not skip basal insulin without advice — contact the doctor to review the dose', 'Double the dose', 'Give rapid-acting insulin instead'], 1,
  '基礎胰島素通常唔應該隨便停（尤其一型），但食得少要同醫生確認劑量，避免低血糖。', 'Her glucose is 5.2 and she ate little; could you review her glargine dose?');

NE.cs('doc', 'dc10', 'A colleague asks you to sign that you witnessed a controlled drug that you did not see given. What should you do?',
  '同事叫你簽名證明你見證咗俾危險藥物，但你冇睇到。點做？',
  ['Sign to help', 'Refuse politely and only sign for what you actually witnessed', 'Sign later', 'Ask a student to sign'], 1,
  '簽名代表你親眼見證，冇見到就唔可以簽，否則屬專業失當。', 'I\'m sorry, I can only sign if I witness it myself.');

NE.cs('ethics', 'et11', 'A patient asks to see his own medical records. What is correct?',
  '病人要求睇自己嘅醫療記錄。邊個做法正確？',
  ['Refuse — records are only for staff', 'Explain the hospital\'s data access request process', 'Give him all other patients\' records too', 'Photocopy them yourself immediately without process'], 1,
  '病人有權查閱自己資料，要按《私隱條例》同醫院程序提出查閱資料要求。', 'You can request a copy of your records through the hospital\'s data access process.');

NE.cs('prof', 'pr20', 'You disagree with a doctor\'s plan because you think it may harm the patient. What is the best way to raise this?',
  '你唔同意醫生嘅計劃，覺得可能傷害病人。最好點提出？',
  ['Say nothing', 'Raise it respectfully with clear reasons and evidence, and escalate if still concerned', 'Change the order yourself', 'Complain to the family'], 1,
  '以病人安全為先：有禮貌咁講清楚理由，仍然擔心就向上級或資深醫生反映並記錄。', 'I\'m concerned about this plan because his potassium is high; can we discuss it?');
NE.cs('prof', 'pr21', 'What is the BEST way to learn a new skill safely on the ward?',
  '喺病房學新技能，最安全嘅方法係？',
  ['Try it alone on a patient', 'Learn the theory, watch a demonstration, practise under supervision, then be assessed', 'Watch a video once', 'Skip it'], 1,
  '理論 → 示範 → 督導下練習 → 評估，確保能力同病人安全。', 'Could you supervise me the first time I do this?');

NE.cs('geri', 'ge10', 'An older patient is on bed rest after a fall. Which complication should you actively prevent?',
  '跌倒後臥床嘅長者，要主動預防咩併發症？',
  ['Hair loss', 'Pressure injuries, pneumonia, DVT and deconditioning', 'Weight gain', 'Eye infection'], 1,
  '臥床會引致壓瘡、肺炎、血栓同機能衰退；要轉身、深呼吸、預防血栓、盡早活動。', 'We\'ll help you move and do breathing exercises to prevent complications.');

NE.cs('comm', 'cm9', 'A family is upset that their dying father is no longer eating. What is the best explanation?',
  '家屬因為臨終爸爸唔再食嘢而傷心。最好點解釋？',
  ['"He\'s giving up."', '"Near the end of life, the body needs less food; we will keep his mouth moist and him comfortable."', '"We will force-feed him."', '"It\'s your fault."'], 1,
  '臨終時食慾自然減少，強迫餵食可能增加不適或誤吸；重點係口腔護理同舒適。', 'It\'s natural for appetite to fade near the end of life.');

NE.cs('nutri', 'nu7', 'A patient on warfarin wants to start eating lots of spinach and kale every day. What advice is best?',
  '食華法林嘅病人想開始每日食大量菠菜同羽衣甘藍。最好嘅建議係？',
  ['Never eat green vegetables', 'Keep vitamin K intake consistent rather than suddenly changing it, and tell the clinic', 'Stop warfarin', 'Eat as much as possible'], 1,
  '維他命 K 會影響華法林效果，重點係攝取量穩定；大改飲食要通知診所監察 INR。', 'Try to keep the amount of green vegetables steady from day to day.');

NE.cs('lab', 'lb8', 'A sodium level of 122 mmol/L is reported. Which symptom should you watch for?',
  '報告鈉 122。要留意咩徵狀？',
  ['Hair loss', 'Confusion, headache and seizures', 'Itchy skin', 'Toothache'], 1,
  '低血鈉可以引致腦水腫：混亂、頭痛、作嘔、抽筋，要上報同監察神志。', 'Her sodium is 122; I\'ll monitor her for confusion.');

NE.cs('ap', 'ap7', 'Which blood vessel carries oxygenated blood from the lungs to the heart?',
  '邊條血管將含氧血由肺帶返心臟？',
  ['Pulmonary artery', 'Pulmonary vein', 'Vena cava', 'Aorta'], 1,
  '肺靜脈係唯一運送含氧血嘅靜脈；肺動脈將缺氧血送去肺。', 'The pulmonary veins carry oxygenated blood to the left atrium.');
NE.cs('eent', 'ee6', 'A patient gets a chemical splash in the eye. What is the FIRST action?',
  '病人眼入咗化學品，第一步做咩？',
  ['Rub the eye', 'Irrigate the eye with plenty of water immediately', 'Cover it and wait', 'Apply eye ointment'], 1,
  '即刻用大量清水沖洗至少 15–20 分鐘，然後求醫。', 'Let\'s rinse your eye with water straight away.');
NE.cs('skin', 'sk10', 'Which is the correct first aid for a minor burn with a blister?',
  '輕微燒傷有水泡，正確急救係？',
  ['Pop the blister', 'Cool with running water and cover loosely with a clean non-stick dressing', 'Apply butter', 'Apply ice directly'], 1,
  '冷水沖 20 分鐘、唔好篤水泡、用乾淨不黏敷料輕輕覆蓋。', 'Please don\'t pop the blister; I\'ll cover it loosely.');
NE.cs('periop', 'po9', 'A patient returns from surgery with a urinary catheter and wound drain. What should be recorded hourly at first?',
  '病人手術後返嚟，有尿喉同傷口引流。起初每小時要記錄咩？',
  ['Only the meal', 'Vital signs, urine output, drain output and wound check', 'Only temperature once a day', 'Nothing'], 1,
  '術後初期密切監察生命表徵、尿量、引流量同傷口，及早發現出血或併發症。', 'I\'ll record his obs, urine output and drain output every hour.');
NE.cs('obs', 'ob11', 'A pregnant woman at 28 weeks has painless bright red vaginal bleeding. What should you avoid?',
  '28 週孕婦有無痛鮮紅色陰道出血。要避免咩？',
  ['Monitoring vital signs', 'Vaginal examination before placenta praevia is excluded', 'Calling the obstetrician', 'Checking fetal heart'], 1,
  '無痛出血可能係前置胎盤，未排除前唔好做陰道檢查（可能引致大出血）。', 'Please don\'t do a vaginal examination until the scan excludes placenta praevia.');
