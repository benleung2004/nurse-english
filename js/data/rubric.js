// IELTS 評分準則撮要（用自己文字撮寫，根據官方 public band descriptors, updated May 2023）
// AI 評分時會將呢度嘅準則放入指示，要求逐項對照
NE.rubric = {
  rules: [
    'A response must show ALL the positive features of a band to get that band; any limiting feature caps the score.',
    'Writing: each criterion is weighted equally; task score = average of the 4 criteria, rounded to the nearest 0.5. Task 2 counts more than Task 1 in the final Writing band (roughly 2:1).',
    'Writing Task 2 under 250 words (Task 1 under 150) is penalised in Task Response / Task Achievement. 20 words or fewer = Band 1. Memorised or off-topic text is not credited.',
    'Speaking: the 4 criteria are weighted equally; speaking band = average, rounded to the nearest 0.5.',
  ],
  writing2: {
    'Task Response': {
      8: 'All parts of the question answered well; clear, well-developed position; ideas relevant, extended and supported; only occasional gaps.',
      7: 'Main parts answered; clear position throughout; main ideas extended and supported, but may over-generalise or lack precise support.',
      6: 'Main parts addressed but some less fully; relevant position though conclusion may be unclear or repetitive; some ideas under-developed or support less relevant.',
      5: 'Question only partly addressed; position given but development unclear; few, limited ideas, possibly irrelevant detail or repetition.',
    },
    'Coherence and Cohesion': {
      8: 'Easy to follow; logical sequencing; cohesion well managed with only occasional lapses; paragraphing sufficient and appropriate.',
      7: 'Logically organised with clear progression; range of linking devices incl. reference/substitution used flexibly with some errors or over/under-use; paragraphs mostly effective.',
      6: 'Generally coherent with overall progression; linking devices help but can be faulty or mechanical; reference may cause repetition; paragraphing not always logical.',
      5: 'Some organisation but not fully logical; sentences not fluently linked; limited or overused linkers; repetitive; paragraphing inadequate or missing.',
    },
    'Lexical Resource': {
      8: 'Wide vocabulary used fluently and precisely; skilful less-common/idiomatic items with occasional word-choice or collocation slips; rare spelling errors.',
      7: 'Enough range for some flexibility and precision; some less-common/idiomatic items; awareness of style and collocation with some inappropriate choices; few spelling/word-form errors.',
      6: 'Adequate vocabulary; meaning clear despite restricted range or imprecise choices; some spelling/word-form errors that do not block meaning.',
      5: 'Limited but minimally adequate; simple words, little variation; frequent inappropriate choices or repetition; noticeable spelling errors that may cause difficulty.',
    },
    'Grammatical Range and Accuracy': {
      8: 'Wide range of structures used flexibly and accurately; most sentences error-free; only occasional non-systematic errors.',
      7: 'Variety of complex structures with some flexibility; grammar and punctuation generally well controlled; error-free sentences are frequent; a few errors remain.',
      6: 'Mix of simple and complex sentences but limited flexibility; complex structures less accurate; errors occur but rarely block meaning.',
      5: 'Limited, repetitive structures; complex sentences attempted but often faulty; frequent errors that may cause difficulty; punctuation may be faulty.',
    },
  },
  writing1: {
    'Task Achievement': {
      8: 'Covers all requirements appropriately and sufficiently; key features clearly presented, highlighted and illustrated; occasional omissions only.',
      7: 'Covers the requirements; a clear overview of main trends/differences/stages; key features clearly highlighted though could be more fully extended.',
      6: 'Addresses the requirements; an overview is attempted; key features adequately highlighted but some details irrelevant, inappropriate or inaccurate.',
      5: 'Generally addresses the task; recounts detail mechanically with no clear overview; key features not adequately covered; may focus on details.',
    },
  },
  speaking: {
    'Fluency and Coherence': {
      8: 'Fluent with rare repetition or self-correction; hesitation mostly to think about content; coherent, relevant development.',
      7: 'Speaks at length without noticeable effort; some hesitation/repetition/self-correction mid-sentence but coherence kept; flexible discourse markers.',
      6: 'Willing to give long turns; coherence sometimes lost through hesitation or repetition; uses linkers but not always appropriately.',
      5: 'Keeps going but relies on repetition, self-correction or slow speech; pauses to search for basic words; overuses some linkers; complex speech causes breakdowns.',
    },
    'Lexical Resource': {
      8: 'Wide resource used readily for all topics; skilful less-common and idiomatic items with occasional slips; effective paraphrase.',
      7: 'Flexible vocabulary across topics; some less-common/idiomatic items and awareness of collocation, with some inappropriate use; effective paraphrase.',
      6: 'Enough vocabulary to discuss topics at length; some inappropriate use but meaning clear; generally paraphrases successfully.',
      5: 'Can discuss familiar and unfamiliar topics but with limited flexibility; paraphrase attempted with mixed success.',
    },
    'Grammatical Range and Accuracy': {
      8: 'Wide range used flexibly; most sentences error-free; occasional non-systematic errors.',
      7: 'Range of structures used flexibly; error-free sentences frequent; simple and complex sentences effective despite some errors.',
      6: 'Mix of short and complex forms with limited flexibility; errors frequent in complex structures but rarely block meaning.',
      5: 'Basic forms fairly accurate; complex structures limited and usually contain errors; may need to rephrase.',
    },
    'Pronunciation': {
      8: 'Wide range of pronunciation features; sustained rhythm, flexible stress and intonation; easily understood; accent has minimal effect.',
      7: 'All band 6 features plus some band 8 features (better rhythm, stress, intonation over longer speech).',
      6: 'Range of features with variable control; chunking generally appropriate; some effective stress/intonation not sustained; some words mispronounced but generally understood without much effort.',
      5: 'All band 4 features plus some band 6 features; limited stress/intonation control; mispronunciations sometimes reduce clarity.',
    },
  },
};
// 將準則變成 AI 指示用嘅文字
NE.rubricText = function (set) {
  const R = NE.rubric; const parts = Array.isArray(set) ? set : [set];
  return 'OFFICIAL-STYLE BAND DESCRIPTORS (summary):\n' + parts.map(p => Object.entries(R[p]).map(([c, b]) =>
    c + ':\n' + [8, 7, 6, 5].map(n => '  Band ' + n + ': ' + b[n]).join('\n')).join('\n')).join('\n') + '\nRULES:\n- ' + R.rules.join('\n- ');
};
