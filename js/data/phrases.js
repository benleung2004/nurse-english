// 實用句子：先睇中文，試下用英文講，再揭答案。[英文, 中文, 情境, '', '', 提示]
// {name} 會換成設定入面佢嘅英文名
NE.deck('ph-patient', 'Talking with patients', '同病人溝通', 'talk', '💬', { say: true }, [
  ["Hello, my name is {name}. I'm the nurse looking after you today.", "你好，我叫{name}，今天由我負責照顧你。", "Introducing yourself"],
  ["Can you tell me your full name and date of birth, please?", "請告訴我你的全名和出生日期。", "Checking patient identity", "", "", "給藥、抽血前必問"],
  ["How are you feeling today?", "你今天感覺怎樣？", "Starting a conversation"],
  ["Did you sleep well last night?", "你昨晚睡得好嗎？", "Morning check"],
  ["Have you opened your bowels today?", "你今天有沒有大便？", "Asking about bowels", "", "", "較禮貌的問法；美式可講 Have you had a bowel movement?"],
  ["Do you need to go to the toilet?", "你需要去洗手間嗎？", "Offering help"],
  ["I'm going to check your blood pressure now.", "我現在為你量血壓。", "Explaining before a task", "", "", "做任何事前先講 I'm going to…"],
  ["This might feel a little cold.", "這可能會有點冷。", "Before using a stethoscope or cleaning the skin"],
  ["You may feel a sharp scratch.", "你可能會有少少刺痛。", "Before an injection or blood test", "", "", "英澳護士習慣講 sharp scratch，避免講 pain"],
  ["Please take a deep breath in, and out.", "請深呼吸，吸氣……呼氣。", "Listening to the chest"],
  ["Could you roll onto your side for me?", "可以幫我轉向側邊嗎？", "Repositioning"],
  ["Let me help you sit up.", "讓我扶你坐起來。", "Helping the patient"],
  ["Please press the call bell if you need anything.", "如果你需要任何東西，請按叫人鐘。", "Before leaving the bedside"],
  ["Are you allergic to any medicines?", "你對任何藥物有過敏嗎？", "Checking allergies"],
  ["It's time for your medication.", "是時候吃藥了。", "Medication round"],
  ["Please swallow this tablet with some water.", "請用水把這粒藥吞下。", "Giving oral medication"],
  ["You can't eat or drink anything after midnight.", "凌晨十二點後你不可以吃或喝任何東西。", "Explaining nil by mouth"],
  ["Please don't get out of bed on your own. You might fall.", "請不要自己下床，你可能會跌倒。", "Fall prevention"],
  ["I'll be back in a few minutes.", "我幾分鐘後回來。", "Leaving the bedside"],
  ["Is there anything else I can do for you?", "還有甚麼我可以幫你嗎？", "Ending the conversation"],
  ["I need to wash my hands first.", "我要先洗手。", "Hand hygiene"],
  ["Please keep your mask on.", "請戴好口罩。", "Infection control"],
  ["The doctor will come and see you soon.", "醫生很快會來看你。", "Updating the patient"],
  ["Sorry to keep you waiting.", "抱歉要你久等。", "Apologising"],
  ["Could you speak a bit more slowly, please?", "可以說慢一點嗎？", "When you don't understand", "", "", "聽唔明唔緊要，問返就得"],
  ["Sorry, could you say that again?", "不好意思，可以再說一次嗎？", "Asking someone to repeat"]
]);

NE.deck('ph-pain', 'Pain assessment', '疼痛評估', 'talk', '🩹', { say: true }, [
  ["Where does it hurt?", "哪裏痛？", "Location"],
  ["Can you point to where it hurts?", "你可以指出哪裏痛嗎？", "Location"],
  ["On a scale of 0 to 10, with 10 being the worst pain you can imagine, how bad is your pain?", "由0到10分，10分是最痛，你有多痛？", "Pain score"],
  ["When did the pain start?", "甚麼時候開始痛？", "Onset"],
  ["Is it a sharp pain, a dull ache, or a burning feeling?", "是刺痛、隱痛還是灼熱的感覺？", "Character"],
  ["Does the pain go anywhere else?", "痛楚有沒有傳到其他地方？", "Radiation"],
  ["Is it there all the time, or does it come and go?", "是一直痛，還是時痛時不痛？", "Pattern"],
  ["What makes it better or worse?", "甚麼會令它好轉或變差？", "Relieving and aggravating factors"],
  ["Have you taken anything for the pain?", "你有沒有吃過甚麼止痛？", "Previous treatment"],
  ["I'll ask the doctor about some pain relief for you.", "我會問醫生給你一些止痛藥。", "Action"],
  ["Please let me know if the pain gets worse.", "如果痛楚加劇請告訴我。", "Safety net"],
  ["Is the pain any better since you had the medicine?", "吃藥之後痛楚有沒有好些？", "Re-assessment", "", "", "記住止痛後要 re-assess 同記錄"]
]);

NE.deck('ph-handover', 'Handover & reporting (ISBAR)', '交更與報告', 'talk', '📋', { say: true }, [
  ["Hi, this is {name}, the nurse on Ward 5. I'm calling about Mr Chan in bed 12.", "你好，我是5號病房的護士{name}，我打來是關於12號床的陳先生。", "I – Identify yourself and the patient"],
  ["I'm calling because his blood pressure has dropped to 85 over 50.", "我打來是因為他的血壓跌至85/50。", "S – Situation", "", "", "85 over 50 = 85/50"],
  ["He was admitted yesterday with pneumonia.", "他昨天因肺炎入院。", "B – Background"],
  ["His oxygen saturation is 89% on 2 litres of oxygen.", "他用2公升氧氣，血氧是89%。", "A – Assessment"],
  ["He is more drowsy than he was earlier.", "他比之前更昏昏欲睡。", "A – Assessment"],
  ["I'm worried that he is deteriorating.", "我擔心他的情況正在惡化。", "A – Your concern"],
  ["Could you please come and review him?", "可以請你來評估一下他嗎？", "R – Recommendation"],
  ["Would you like me to increase his oxygen?", "需要我增加他的氧氣嗎？", "R – Asking for orders"],
  ["Can I just read that back to you?", "我可以覆述一次給你聽嗎？", "Confirming a phone order", "", "", "收口頭醫囑一定要 read back"],
  ["She had a fall at 3 a.m., but there was no obvious injury.", "她凌晨3點跌倒，但沒有明顯受傷。", "Handover"],
  ["He has been eating and drinking well.", "他飲食正常。", "Handover"],
  ["Her wound is clean and dry.", "她的傷口乾淨及乾爽。", "Handover"],
  ["He passed 200 ml of urine this shift.", "他這一更排尿200毫升。", "Handover"],
  ["She refused her medication this morning.", "她今早拒絕服藥。", "Handover"],
  ["Bed 5 is nil by mouth for surgery tomorrow.", "5號床病人明天做手術，現在禁食。", "Handover"],
  ["The family has been informed.", "已經通知家屬。", "Handover"]
]);

NE.deck('ph-family', 'Family & comfort', '家屬與安慰', 'talk', '🤝', { say: true }, [
  ["Don't worry, we'll take good care of her.", "別擔心，我們會好好照顧她。", "Reassuring family"],
  ["I understand this must be very hard for you.", "我明白這對你來說一定很難受。", "Showing empathy"],
  ["I'm not able to give you that information, but I'll ask the doctor to speak with you.", "我不能給你這個資料，但我會請醫生跟你談。", "When you can't answer", "", "", "病情診斷由醫生解釋，EN 用呢句好穩陣"],
  ["Would you like me to call your family?", "需要我打電話給你的家人嗎？", "Offering help"],
  ["Take your time. There's no rush.", "慢慢來，不用急。", "Being patient"],
  ["You're doing really well.", "你做得很好。", "Encouraging a patient"],
  ["Please tell us if you notice any changes.", "如果你發現任何變化，請告訴我們。", "Asking family to help"],
  ["Let me explain what will happen next.", "讓我解釋接下來會發生甚麼。", "Explaining"],
  ["Is there anything worrying you?", "有沒有甚麼令你擔心？", "Open question"],
  ["We'll keep you updated.", "我們會隨時通知你最新情況。", "Ending a conversation with family"]
]);
