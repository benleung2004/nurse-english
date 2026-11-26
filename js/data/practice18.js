// IELTS 聽力 Section 3（學術討論）6 段（原創）
(function () {
  const L = NE.listening;
  const add = (o) => { if (!L.some(x => x.id === o.id)) L.push(o); };

  add({ id: 'l-s3-poster', title: 'Planning a conference poster', zh: '計劃學術海報', part: 'Section 3 對話', lines: [
    ['A', 'Dr Chan, could we discuss our poster on hand hygiene compliance?'], ['B', 'Of course. Remind me of your main finding.'],
    ['A', 'Compliance on our ward rose from 71 to 89 percent after we introduced reminder posters and monthly feedback.'],
    ['B', 'Good. Put that result at the top, in large font. Judges spend less than a minute on each poster.'],
    ['C', 'Should we include all our audit data?'], ['B', 'No, choose one clear chart. A bar chart comparing before and after works best.'],
    ['A', 'What about the limitations?'], ['B', 'Mention that it was a single ward and that staff knew they were being observed — that\'s called the Hawthorne effect.'],
    ['C', 'How big should the poster be?'], ['B', 'The conference requires A0 size, portrait orientation.'],
    ['B', 'And send me a draft by the 15th so I can give feedback.']
  ], qs: [
    { q: 'Compliance after the project (%)', a: ['89'] }, { q: 'Judges spend less than a ______ on each poster', a: ['minute'] },
    { q: 'Recommended chart type', a: ['bar', 'bar chart'] }, { q: 'Limitation: only a single ______', a: ['ward'] },
    { q: 'Effect of knowing you are observed: the ______ effect', a: ['hawthorne'] }, { q: 'Poster size', a: ['a0'] },
    { q: 'Orientation', a: ['portrait'] }, { q: 'Send draft by the ___', a: ['15', '15th'] }
  ] });

  add({ id: 'l-s3-placement', title: 'Discussing a clinical placement', zh: '討論臨床實習', part: 'Section 3 對話', lines: [
    ['A', 'So, Kelly, how did your community placement go?'], ['B', 'Really well. I spent four weeks with the community children\'s nursing team.'],
    ['A', 'What was the most valuable experience?'], ['B', 'Visiting families at home. I saw how much the home environment affects a child\'s health.'],
    ['A', 'Did anything surprise you?'], ['B', 'How much time nurses spend coordinating with schools and social workers — almost a third of the day.'],
    ['A', 'And what was challenging?'], ['B', 'Working more independently. In hospital, help is always nearby.'],
    ['A', 'For your reflective essay, I\'d suggest using Gibbs\' cycle and focusing on one specific visit.'],
    ['B', 'How long should it be?'], ['A', '2,000 words, and you need at least eight references.']
  ], qs: [
    { q: 'Placement length (weeks)', a: ['4', 'four'] }, { q: 'Team: community children\'s ______ team', a: ['nursing'] },
    { q: 'Most valuable: visiting families at ______', a: ['home'] }, { q: 'Time spent coordinating: almost a ______ of the day', a: ['third'] },
    { q: 'Challenge: working more ______', a: ['independently'] }, { q: 'Reflective model', a: ['gibbs', 'gibbs\' cycle', 'gibbs cycle'] },
    { q: 'Essay length (words)', a: ['2000', '2,000'] }, { q: 'Minimum references', a: ['8', 'eight'] }
  ] });

  add({ id: 'l-s3-survey', title: 'Designing a questionnaire', zh: '設計問卷', part: 'Section 3 對話', lines: [
    ['A', 'Our research question is about how parents feel about bedside handover.'], ['B', 'Right. Should we use open or closed questions?'],
    ['A', 'Mostly closed questions with a five-point scale, from strongly agree to strongly disagree. They\'re easier to analyse.'],
    ['B', 'But let\'s add one open question at the end, so parents can comment freely.'], ['A', 'Good idea.'],
    ['B', 'How many parents should we survey?'], ['A', 'Our tutor suggested at least 60, across two wards.'],
    ['B', 'We\'ll need translations too. Many parents prefer Chinese.'], ['A', 'Yes, and we should pilot it with five parents first to check it\'s clear.'],
    ['B', 'And ethics approval?'], ['A', 'We submit the form next Monday. Approval usually takes three weeks.']
  ], qs: [
    { q: 'Topic: parents\' views of bedside ______', a: ['handover'] }, { q: 'Scale points', a: ['5', 'five'] },
    { q: 'Number of open questions', a: ['1', 'one'] }, { q: 'Minimum number of parents', a: ['60', 'sixty'] },
    { q: 'Number of wards', a: ['2', 'two'] }, { q: 'Pilot with how many parents?', a: ['5', 'five'] },
    { q: 'Ethics form submitted next ______', a: ['monday'] }, { q: 'Approval time (weeks)', a: ['3', 'three'] }
  ] });

  add({ id: 'l-s3-presentation', title: 'Preparing a group presentation', zh: '準備小組匯報', part: 'Section 3 對話', lines: [
    ['A', 'Our presentation on childhood obesity is in two weeks. How shall we divide it?'], ['B', 'I can do the introduction and statistics.'],
    ['C', 'I\'ll cover the causes — diet, screen time and sleep.'], ['A', 'Then I\'ll talk about nursing interventions in schools.'],
    ['B', 'We have 15 minutes in total, plus five for questions.'], ['C', 'So about four minutes each, and a short conclusion.'],
    ['A', 'Let\'s avoid too much text on slides. No more than six lines per slide.'], ['B', 'Should we include a video?'],
    ['C', 'Maybe a 30-second clip, but we need a backup in case the internet fails.'], ['A', 'Let\'s rehearse on Thursday in the library group room.']
  ], qs: [
    { q: 'Topic: childhood ______', a: ['obesity'] }, { q: 'Presentation time (minutes)', a: ['15', 'fifteen'] },
    { q: 'Question time (minutes)', a: ['5', 'five'] }, { q: 'Each speaker: about ___ minutes', a: ['4', 'four'] },
    { q: 'Maximum lines per slide', a: ['6', 'six'] }, { q: 'Video length (seconds)', a: ['30', 'thirty'] },
    { q: 'Rehearsal day', a: ['thursday'] }, { q: 'Rehearsal place: library group ______', a: ['room'] }
  ] });

  add({ id: 'l-s3-feedback', title: 'Tutor feedback on an essay', zh: '導師對文章嘅意見', part: 'Section 3 對話', lines: [
    ['A', 'I\'ve read your essay on pain assessment in children. Overall, it\'s a solid pass.'], ['B', 'Thank you. What could I improve?'],
    ['A', 'Your description is good, but you need more critical analysis. Don\'t just say what tools exist — compare their strengths and weaknesses.'],
    ['B', 'For example, FLACC versus the faces scale?'], ['A', 'Exactly. And support your points with recent evidence, ideally from the last five years.'],
    ['A', 'Your referencing has some errors. Check the APA guide for journal articles.'],
    ['B', 'And the structure?'], ['A', 'The conclusion introduces new ideas. A conclusion should only summarise your argument.'],
    ['A', 'Resubmissions are due within ten working days.']
  ], qs: [
    { q: 'Essay topic: pain assessment in ______', a: ['children'] }, { q: 'Grade: a solid ______', a: ['pass'] },
    { q: 'Needs more critical ______', a: ['analysis'] }, { q: 'Evidence ideally from the last ___ years', a: ['5', 'five'] },
    { q: 'Referencing style', a: ['apa'] }, { q: 'Problem: conclusion introduces new ______', a: ['ideas'] },
    { q: 'Resubmission due within ___ working days', a: ['10', 'ten'] }
  ] });

  add({ id: 'l-s3-qi', title: 'Discussing a ward improvement project', zh: '討論病房改善計劃', part: 'Section 3 對話', lines: [
    ['A', 'We\'ve noticed medication rounds are interrupted a lot. Shall we make that our improvement project?'], ['B', 'Yes. Last week I counted an average of seven interruptions per round.'],
    ['A', 'What intervention should we test first?'], ['B', 'Red "do not disturb" tabards. Other hospitals have used them successfully.'],
    ['A', 'And a sign at the treatment room door.'], ['B', 'We should use a PDSA cycle and run the first test for two weeks.'],
    ['A', 'How will we measure success?'], ['B', 'Count interruptions again, and also look at medication errors reported.'],
    ['A', 'We should involve the healthcare assistants too, since they often need to ask questions during rounds.'],
    ['B', 'Agreed. Let\'s present the plan at Friday\'s team meeting.']
  ], qs: [
    { q: 'Average interruptions per round', a: ['7', 'seven'] }, { q: 'Tabard colour', a: ['red'] },
    { q: 'Sign placed at the treatment room ______', a: ['door'] }, { q: 'Improvement method: ______ cycle', a: ['pdsa'] },
    { q: 'First test length (weeks)', a: ['2', 'two'] }, { q: 'Also measure medication ______', a: ['errors'] },
    { q: 'Staff group to involve: healthcare ______', a: ['assistants'] }, { q: 'Meeting day', a: ['friday'] }
  ] });
})();
