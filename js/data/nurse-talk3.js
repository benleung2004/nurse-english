// 💬 實用句子擴充：疼痛評估、家屬與安慰、交更、電話、同事、病人（原創，兒科為主）
(function () {
  const add = (d, rows) => { if (!NE.decks.some(x => x.id === d)) return;
    rows.forEach(r => { const id = d + ':' + r[0]; if (!NE.cards.some(c => c.id === id)) NE.cards.push({ id, d, en: r[0], zh: r[1], def: r[2] || '', ex: '', exZh: '', note: r[3] || '' }); }); };

  add('ph-pain', [
    ["Can you show me on this face chart how much it hurts?", "你可唔可以喺呢張笑臉圖指俾我睇有幾痛？", "Wong-Baker FACES scale (age 3+)", "3 歲以上可以用笑臉量表"],
    ["Is it a little bit sore, or a lot?", "係有少少痛，定係好痛？", "Simple question for young children"],
    ["Show me with your hands — is it this big or this big?", "用手比俾我睇——係咁大痛定係咁大痛？", "Non-verbal pain size for children"],
    ["I'm going to watch his face, legs and crying to check his pain.", "我會睇佢塊面、對腳同喊聲嚟評估佢有幾痛。", "Explaining FLACC to parents", "FLACC：Face, Legs, Activity, Cry, Consolability，用於唔識講嘢嘅小朋友"],
    ["Is he settling with cuddles, or is he still hard to comfort?", "佢攬住會唔會靜落嚟，定係仍然好難安撫？", "FLACC: consolability"],
    ["Does she usually cry like this when she's in pain?", "佢平時痛嘅時候係咪都會咁喊？", "Using parents' knowledge of the child", "家長最識分辨小朋友係咪痛"],
    ["Has the pain woken you up at night?", "有冇痛到半夜醒？", "Impact on sleep"],
    ["Is the pain stopping you from moving or taking deep breaths?", "痛唔痛到你郁唔到或者唔敢深呼吸？", "Functional assessment", "術後痛到唔敢深呼吸會增加肺炎風險"],
    ["Is this the same pain you had before, or is it different?", "呢次痛同之前一樣，定係唔同？", "Comparing with previous pain"],
    ["Does it hurt more when I press here, or when I let go?", "我㩒呢度痛啲，定係我放手嗰陣痛啲？", "Rebound tenderness check"],
    ["Is there any numbness, tingling or pins and needles?", "有冇麻痺、刺痛或者好似針刺嘅感覺？", "Neuropathic symptoms"],
    ["When you press the button, the pump gives you a small dose of pain relief.", "你㩒個掣，部機就會俾少少止痛藥你。", "Explaining PCA", "PCA = patient-controlled analgesia"],
    ["Only you should press the button, not your family.", "只可以你自己㩒個掣，家人唔可以幫你㩒。", "PCA safety", "家人代㩒可能引致過量、呼吸抑制"],
    ["It's better to take pain relief before the pain becomes severe.", "最好喺痛得好犀利之前食止痛藥。", "Regular analgesia advice"],
    ["Let's try a warm pack and a change of position as well.", "我哋試埋暖包同轉個姿勢。", "Non-drug pain relief"],
    ["We'll put some numbing cream on now so the needle hurts less later.", "我哋而家搽啲麻醉膏，等陣打針就冇咁痛。", "Preparing for a procedure", "EMLA 或者 Ametop 通常要搽 30–60 分鐘"],
    ["Blowing bubbles can help you breathe through the sore part.", "吹泡泡可以幫你呼吸，捱過痛嗰下。", "Distraction for children"],
    ["I'll come back in 30 minutes to see if the medicine is working.", "我 30 分鐘後返嚟睇下止痛藥有冇效。", "Planning reassessment", "口服止痛藥約 30–60 分鐘後再評估，靜脈約 15–30 分鐘"],
    ["Her pain score has dropped from 7 to 3 after the morphine.", "佢打完嗎啡之後，痛楚分數由 7 分跌到 3 分。", "Documenting effect"],
    ["Is he more sleepy than usual since the morphine?", "佢打完嗎啡之後係咪比平時眼瞓？", "Monitoring opioid side effects", "鴉片類藥物要留意鎮靜程度同呼吸率"],
    ["Do you feel sick or itchy since the pain medicine?", "食完止痛藥之後有冇作嘔或者痕？", "Checking side effects"],
    ["Pain is what the patient says it is.", "病人話有幾痛就係有幾痛。", "Professional principle", "唔好因為病人睇落冇事就忽略佢嘅痛"],
  ]);

  add('ph-family', [
    ["You know your child best, so please tell us if something doesn't seem right.", "你最了解你個仔，如果覺得有咩唔妥請話俾我哋知。", "Partnering with parents", "家長嘅擔心係重要嘅預警訊號"],
    ["You're welcome to stay with her during the procedure.", "做程序嗰陣你可以陪住佢。", "Family presence"],
    ["You can hold his hand and talk to him; he can still hear you.", "你可以拖住佢隻手同佢講嘢，佢仍然聽到你。", "Comforting family of an unconscious patient"],
    ["It's completely normal to feel scared.", "覺得驚係好正常嘅。", "Normalising emotions"],
    ["Have you had a chance to eat or rest today?", "你今日有冇時間食啲嘢或者休息下？", "Caring for the carer"],
    ["There's a parents' room down the hall where you can make a drink.", "走廊盡頭有間家長室，你可以沖杯嘢飲。", "Practical support"],
    ["I can see how worried you are. Would you like to sit down and talk?", "我睇得出你好擔心，不如坐低傾下？", "Responding to distress"],
    ["I don't know the answer yet, but I'll find out and come back to you.", "我暫時未知答案，但我會問清楚再話你知。", "Honesty when unsure", "唔好估，問清楚先答"],
    ["The doctor will explain the results; I'll make sure you're not left waiting too long.", "醫生會解釋報告，我會盡量唔好要你等太耐。", "Managing expectations"],
    ["What questions would you like to ask the doctor? I can write them down for you.", "你想問醫生咩問題？我可以幫你寫低。", "Preparing for a family meeting"],
    ["Would it help if I explained it again in a different way?", "我用另一個方法再解釋一次，會唔會好啲？", "Checking understanding"],
    ["Would you like an interpreter so you can ask everything you need?", "你需唔需要傳譯員，等你可以問晒想問嘅嘢？", "Offering an interpreter", "唔好用小朋友做傳譯"],
    ["I'm sorry you've had to wait. I understand it's frustrating.", "唔好意思要你等，我明白你好心急。", "Responding to an upset parent"],
    ["I can hear that you're angry. Let's find a quiet place to talk.", "我聽得出你好嬲，不如搵個靜啲嘅地方傾。", "De-escalation", "保持冷靜、聲線平和、唔好爭拗"],
    ["Is there someone who can be here with you tonight?", "今晚有冇人可以嚟陪你？", "Identifying support"],
    ["Many parents feel guilty, but this is not your fault.", "好多家長都會內疚，但呢件事唔係你嘅錯。", "Reducing parental guilt"],
    ["You can help by doing his mouth care and reading to him.", "你可以幫佢做口腔護理同讀故事俾佢聽。", "Involving parents in care"],
    ["We'll call you straight away if there is any change.", "如果有任何變化，我哋會即刻打俾你。", "Reassurance about contact"],
    ["Our social worker can help with practical worries, like time off work.", "我哋嘅社工可以幫手處理實際問題，例如請假。", "Referral to social work"],
    ["I'm so sorry. Take as much time as you need with her.", "我好遺憾。你想陪佢幾耐都得。", "After a death", "唔好催促家屬，畀私人空間"],
    ["Would you like us to contact a chaplain or religious leader for you?", "你想唔想我哋幫你聯絡院牧或者宗教人士？", "Spiritual support"],
  ]);

  add('ph-handover', [
    ["This is Ethan, 4 years old, day 2 of IV antibiotics for cellulitis of the left leg.", "呢個係 Ethan，4 歲，左腳蜂窩組織炎，靜脈抗生素第二日。", "Paediatric handover: identify"],
    ["He weighs 16 kilograms, and all doses are calculated on that weight.", "佢 16 公斤，所有劑量都係按呢個體重計。", "Stating weight in paediatrics", "兒科交更一定要講體重"],
    ["His PEWS has been 1 to 2 all shift.", "佢成更 PEWS 都係 1 至 2 分。", "Early warning score"],
    ["He's had 400 ml orally and is on IV fluids at 50 ml an hour.", "佢口服飲咗 400 毫升，靜脈輸液每小時 50 毫升。", "Fluid balance"],
    ["The cannula site is clean, with no redness or swelling.", "插針位置乾淨，冇紅冇腫。", "Cannula check"],
    ["The redness has spread past the pen marking since this morning.", "紅腫範圍今朝開始已經超出咗筆畫嘅界線。", "Reporting spreading cellulitis", "蜂窩組織炎要用筆畫界，方便比較"],
    ["Mum is staying overnight and is very involved in his care.", "媽媽今晚留院，好積極參與照顧。", "Family information"],
    ["He has a nut allergy, and his wristband is red.", "佢對果仁過敏，手帶係紅色。", "Allergy handover"],
    ["His next antibiotic dose is due at 2 p.m.", "佢下一劑抗生素兩點要俾。", "Timed medication"],
    ["The plan is to switch to oral antibiotics if he's afebrile for 24 hours.", "如果佢 24 小時冇發燒，計劃轉口服抗生素。", "Plan"],
    ["Outstanding tasks: repeat CRP in the morning and a dietitian review.", "未完成嘅工作：明朝再驗 CRP，同營養師評估。", "Outstanding tasks"],
    ["Safeguarding: there is a social work alert, so visitors must be checked.", "保護兒童：有社工提示，訪客要核對身份。", "Safeguarding handover", "敏感資料要低聲講，唔好喺床邊大聲交"],
    ["Shall we check the drug chart and the pump together at the bedside?", "我哋一齊喺床邊核對藥單同輸液泵好唔好？", "Bedside safety check"],
    ["Any questions before I go?", "我走之前你有冇問題？", "Closing handover"],
    ["Escalated to the doctor at 4:10 p.m.; review pending.", "下午 4:10 已上報醫生，等緊評估。", "Handing over an escalation"],
    ["He had a temperature spike of 38.9 at 6 a.m.; paracetamol was given and blood cultures were taken.", "佢早上 6 點發燒去到 38.9 度，已俾 paracetamol 同抽血培養。", "Reporting an event with action"],
  ]);

  add('ph-phone', [
    ["Hi, this is the EN on the paediatric ward. Who am I speaking to, please?", "你好，我係兒科病房嘅登記護士，請問你係邊位？", "Identifying the person on the phone", "記低對方姓名職級，方便記錄"],
    ["I'm calling about a 2-year-old with a PEWS of 6.", "我打嚟係關於一個 2 歲、PEWS 6 分嘅小朋友。", "Clear opening on a paediatric call"],
    ["Is this a good time, or shall I call back?", "而家方唔方便，定係我遲啲再打？", "Non-urgent calls"],
    ["I need you to come now. This is urgent.", "我需要你而家即刻嚟，好緊急。", "Being direct in an emergency", "緊急情況要講明 urgent 同時間"],
    ["Can I get your name and bleep number for the notes?", "可唔可以俾你嘅名同傳呼號碼我記錄？", "Documenting the call"],
    ["Could you hold on a moment while I get the chart?", "可唔可以等一等，我攞病歷先？", "Asking someone to wait"],
    ["Sorry, the line is bad. Could you say that again?", "唔好意思，條線唔清楚，可唔可以再講一次？", "Poor connection"],
    ["Is that fifteen, one-five, or fifty, five-zero?", "係十五，一五，定係五十，五零？", "Clarifying numbers", "fifteen/fifty 好易聽錯，要逐個數字講"],
    ["Could you text the result to the ward phone as well?", "可唔可以將結果都 send 去病房電話？", "Asking for written confirmation"],
    ["Lab, I'm calling for a critical potassium result for bed 3.", "化驗室你好，我打嚟問 3 號床嘅危急鉀報告。", "Critical result follow-up"],
    ["You've called with a critical result; can I take your name and the time?", "你通知緊危急結果，可唔可以俾你名字同時間我？", "Receiving a critical result", "收危急結果要 read back、記錄、即時通知醫生"],
    ["I'm calling to refer a child for a speech therapy swallow assessment.", "我打嚟轉介一個小朋友俾言語治療師做吞嚥評估。", "Referral call"],
    ["Is there an available cot on your ward for a transfer from ICU?", "你哋病房有冇空床，可以接 ICU 轉過嚟嘅病人？", "Bed request"],
    ["The ambulance is booked for 3 p.m.; the parents have been told.", "救護車訂咗三點，已經通知咗家長。", "Transport update"],
    ["Hello, I'm calling from the hospital to check how Mia is doing at home.", "你好，我係醫院打嚟，想問 Mia 返屋企之後點樣。", "Follow-up call to parents"],
    ["If she gets worse, please call 999 or bring her straight to A&E.", "如果佢差咗，請打 999 或者直接帶佢去急症室。", "Safety-netting on the phone"],
    ["I'll pass your message to the nurse looking after him.", "我會將你嘅訊息轉俾照顧佢嘅護士。", "Taking a message"],
  ]);

  add('ph-team', [
    ["I'm drowning a bit. Could someone take my 2 p.m. obs?", "我有啲忙唔切，有冇人可以幫我做兩點嘅生命表徵？", "Asking for help with workload"],
    ["I've finished my tasks. Does anyone need a hand?", "我做完自己嘢，有冇人要幫手？", "Offering help"],
    ["Can we pause for a second? I want to check something.", "可唔可以停一停？我想核對一樣嘢。", "Stop the line for safety", "發現唔妥即刻講，唔使驚尷尬"],
    ["I've never done this procedure before. Could you supervise me?", "我未做過呢個程序，可唔可以督導我？", "Knowing your limits"],
    ["That's outside my scope as an EN; I'll ask the RN in charge.", "呢樣超出登記護士嘅執業範圍，我會問當值註冊護士。", "Scope of practice"],
    ["Thanks for your help earlier; it made a big difference.", "多謝你頭先幫手，幫咗好大忙。", "Thanking a colleague"],
    ["Can I give you some feedback about the handover?", "我可唔可以就交更俾少少意見你？", "Giving feedback respectfully"],
    ["Let's debrief after the arrest when everyone has a moment.", "大家得閒嘅時候，我哋做一次搶救後檢討。", "Debrief after an emergency"],
    ["Who's taking the lead in this situation?", "呢個情況邊個做主導？", "Clarifying roles in an emergency"],
    ["I'll be the scribe and record the times.", "我負責記錄同記低時間。", "Taking a role in resuscitation"],
  ]);

  add('ph-patient', [
    ["Hi, I'm Amy, one of the nurses. I'll be looking after you today.", "你好，我係 Amy，係其中一個護士，今日由我照顧你。", "Introducing yourself", "介紹名字同角色，可以減少病人焦慮"],
    ["Is it OK if I check your wristband?", "我睇下你手帶得唔得？", "ID check before care"],
    ["Is there anything you'd like me to know before we start?", "開始之前有冇嘢想我知？", "Patient-centred opening"],
    ["You can say stop at any time.", "你隨時都可以叫停。", "Respecting consent"],
    ["Would you prefer the curtain closed?", "你想唔想拉埋簾？", "Privacy and dignity"],
    ["What matters most to you while you're in hospital?", "你住院期間最緊要係咩？", "What matters to you"],
  ]);
})();
