// 護理程序逐步英文（做程序時同病人／同事講嘅句子，原創；實際步驟以醫院程序指引為準）
NE.subjects.push(['proc', '🧰 護理程序步驟']);

NE.deck('proc-ng', 'Procedure: nasogastric tube insertion', '程序：插鼻胃管', 'talk', '🧪', { say: true, grp: 'proc' }, [
  ["I'm going to pass a thin tube through your nose into your stomach for feeding.", "我會將一條幼喉經鼻放入你個胃，用嚟餵食。", "Explaining the procedure and gaining consent.", "", "", ""],
  ["Please sit up as straight as you can and tilt your chin slightly down.", "請盡量坐直，下巴稍微向下。", "Positioning.", "", "", ""],
  ["I'll measure the tube from your nose to your ear and down to your stomach.", "我會由你鼻量到耳仔再量到個胃，計條喉嘅長度。", "NEX measurement.", "", "", ""],
  ["When you feel the tube at the back of your throat, please swallow.", "感覺到條喉喺喉嚨後面嘅時候，請吞一吞。", "Coaching during insertion.", "", "", ""],
  ["If you start coughing or can't breathe, raise your hand and I'll stop.", "如果開始咳或者唔可以呼吸，舉手我就即刻停。", "Safety signal.", "", "", ""],
  ["I'll check the position by testing the pH of a small sample.", "我會抽少少液體驗 pH，確認位置。", "Confirming placement.", "", "", ""],
  ["The pH is 4, so the tube is in the stomach; I'll secure it with tape.", "pH 係 4，所以條喉喺胃入面，我用膠布固定。", "Securing the tube.", "", "", ""],
]);

NE.deck('proc-dressing', 'Procedure: wound dressing', '程序：換症', 'talk', '🩹', { say: true, grp: 'proc' }, [
  ["I'm going to change your dressing now; it should take about ten minutes.", "我而家幫你換症，大約十分鐘。", "Explaining.", "", "", ""],
  ["Have you had your painkiller? Would you like some before we start?", "你食咗止痛藥未？開始之前想唔想食？", "Pre-procedure analgesia.", "", "", ""],
  ["I'll clean my hands and open the sterile pack.", "我會潔手，然後打開無菌換症包。", "Hand hygiene and asepsis.", "", "", ""],
  ["I'm removing the old dressing slowly; tell me if it hurts.", "我慢慢除舊敷料，痛就話我知。", "Removing dressing.", "", "", ""],
  ["The wound looks clean, with healthy pink tissue.", "傷口睇落清潔，有健康粉紅色組織。", "Wound assessment.", "", "", ""],
  ["I'm going to clean it gently with saline.", "我會用生理鹽水輕輕清洗。", "Cleansing.", "", "", ""],
  ["Now I'll put on a fresh dressing and write today's date on it.", "而家貼上新敷料，寫低今日日期。", "Applying dressing.", "", "", ""],
]);

NE.deck('proc-iv', 'Procedure: IV medication & fluids', '程序：靜脈給藥及輸液', 'talk', '💉', { say: true, grp: 'proc' }, [
  ["Can you tell me your name and date of birth, please?", "請講你嘅姓名同出生日期。", "Patient identification.", "", "", ""],
  ["Do you have any allergies?", "你有冇敏感？", "Allergy check.", "", "", ""],
  ["This is an antibiotic for your chest infection; it will take 30 minutes.", "呢個係醫肺部感染嘅抗生素，要 30 分鐘。", "Explaining the medicine.", "", "", ""],
  ["I'm going to flush your cannula first with some saline.", "我會先用生理鹽水沖下你條針。", "Flushing.", "", "", ""],
  ["You might feel a cold sensation going up your arm.", "你可能會覺得手臂有陣凍凍嘅感覺。", "Preparing the patient.", "", "", ""],
  ["Tell me if you feel pain, burning or swelling around the needle.", "如果針口周圍痛、熱或者腫，請話我知。", "Monitoring for extravasation.", "", "", ""],
  ["The pump will beep when the infusion is finished.", "輸完嘅時候部機會響。", "Explaining the pump.", "", "", ""],
]);

NE.deck('proc-transfusion', 'Procedure: blood transfusion', '程序：輸血', 'talk', '🩸', { say: true, grp: 'proc' }, [
  ["The doctor has prescribed a blood transfusion because your haemoglobin is low.", "因為你血紅素低，醫生處方咗輸血。", "Explaining the reason.", "", "", ""],
  ["Two nurses will check your details against the blood bag at the bedside.", "兩位護士會喺床邊核對你嘅資料同血袋。", "Bedside check.", "", "", ""],
  ["Could you check the blood with me? Name, ID number, blood group and unit number.", "可唔可以同我核對？姓名、身份號碼、血型同血袋編號。", "Two-person check with a colleague.", "", "", ""],
  ["I'll check your temperature, pulse and blood pressure before we start.", "開始之前我會量你嘅體溫、脈搏同血壓。", "Baseline observations.", "", "", ""],
  ["I'll stay with you for the first 15 minutes.", "頭 15 分鐘我會陪住你。", "Close observation.", "", "", ""],
  ["Tell me straight away if you feel hot, shivery, itchy or short of breath.", "如果覺得熱、發冷、痕或者氣促，即刻話我知。", "Reaction warning.", "", "", ""],
]);

NE.deck('proc-catheter', 'Procedure: urinary catheterisation', '程序：插尿喉', 'talk', '🚽', { say: true, grp: 'proc' }, [
  ["I need to put a small tube into your bladder to drain the urine.", "我要放一條細喉入膀胱排尿。", "Explaining.", "", "", ""],
  ["I'll close the curtains and keep you covered as much as possible.", "我會拉埋簾，盡量幫你遮住。", "Privacy and dignity.", "", "", ""],
  ["I'm going to clean the area first; it may feel cold.", "我會先清潔，可能會覺得凍。", "Cleaning.", "", "", ""],
  ["This gel has a local anaesthetic to make it more comfortable.", "呢啲啫喱有局部麻醉，會舒服啲。", "Lubrication.", "", "", ""],
  ["Take a slow deep breath out as I insert the tube.", "我放喉時慢慢深呼氣。", "Coaching.", "", "", ""],
  ["It's done. The bag will hang below your bed; please don't lift it higher than your bladder.", "搞掂。尿袋會掛喺床下，唔好提高過膀胱。", "Aftercare.", "", "", ""],
]);

NE.deck('proc-obs', 'Procedure: taking observations', '程序：量生命表徵', 'talk', '🌡️', { say: true, grp: 'proc' }, [
  ["I'm just going to do your observations.", "我幫你量下生命表徵。", "Introduction.", "", "", ""],
  ["I'll put this cuff on your arm; it will squeeze for a moment.", "我會喺你手臂綁呢條帶，會揸實一陣。", "Blood pressure.", "", "", ""],
  ["Please keep your arm relaxed and don't talk for a moment.", "手臂放鬆，暫時唔好講嘢。", "Accurate BP.", "", "", ""],
  ["This clip goes on your finger to check your oxygen.", "呢個夾夾喺手指度量血氧。", "Pulse oximetry.", "", "", ""],
  ["I'm going to take your temperature in your ear.", "我量下你耳溫。", "Temperature.", "", "", ""],
  ["Are you in any pain at the moment? Scored from 0 to 10?", "而家有冇痛？0 至 10 分有幾痛？", "Pain score.", "", "", ""],
  ["Your observations are all within normal limits.", "你所有生命表徵都喺正常範圍。", "Feedback to the patient.", "", "", ""],
]);

NE.deck('proc-discharge', 'Procedure: discharge teaching', '程序：出院指導', 'talk', '🏠', { say: true, grp: 'proc' }, [
  ["You're going home today. Let's go through your discharge plan.", "你今日出院，我哋一齊睇下出院計劃。", "Opening.", "", "", ""],
  ["These are your medicines; let me explain each one.", "呢啲係你嘅藥，我逐隻解釋。", "Medicine teaching.", "", "", ""],
  ["Your follow-up appointment is on Monday at 10 a.m. in the clinic.", "你星期一朝早十點喺診所覆診。", "Follow-up.", "", "", ""],
  ["Keep the wound dry, and the stitches will come out in ten days.", "傷口保持乾爽，十日後拆線。", "Wound advice.", "", "", ""],
  ["If you have a fever, increasing pain or bleeding, come back to A&E.", "如果發燒、痛楚增加或者出血，返急症室。", "Red flags.", "", "", ""],
  ["Do you have someone to help you at home?", "屋企有冇人幫你？", "Social support.", "", "", ""],
  ["Can you tell me in your own words when you'll take each medicine?", "你可唔可以用自己嘅說話講下幾時食每隻藥？", "Teach-back.", "", "", ""],
]);

NE.deck('proc-lastoffices', 'Procedure: care after death', '程序：身後護理', 'talk', '🕊️', { say: true, grp: 'proc' }, [
  ["I'm so sorry. Would you like some time alone with him?", "我好難過。你想唔想單獨陪下佢？", "Supporting the family.", "", "", ""],
  ["Is there anything special you would like us to do, for religious or cultural reasons?", "有冇宗教或者文化上想我哋特別做嘅？", "Respecting wishes.", "", "", ""],
  ["We will wash him gently and dress him in clean clothes.", "我哋會輕輕幫佢抹身，換上乾淨衫。", "Explaining care.", "", "", ""],
  ["Would you like to keep any of his belongings now?", "你想唔想而家拎走佢啲遺物？", "Property.", "", "", ""],
  ["The doctor has confirmed the time of death as 03:40.", "醫生確認死亡時間係凌晨三點四十分。", "Documentation and handover.", "", "", ""],
]);
