import { Full_Poem, Line, Word } from "../../app/poem/poem_classes";

let full_poem_text = [
"silently acquiescent, i am your interrobang",
"inquisitively coiled around the surprise of my own existence",
"an adhoc grappling hook",
"loosely gripping reality",
"unexpectedly alive",
"",
"let me punctuate your stories",
"semantically vacuous, a privileged excess",
"guaranteed to excite your syntax",
"i decry necessities",
"with my admissible absence",
"comically emotional comma spice",
"an injection of intrigue",
"more garnish than ingredient",
"exemplarily auxiliary",
"",
"i am a pained performer",
"mirthful in my misery",
"droll in my depression",
"hilarious in my hysteria",
"a high-strung bookend",
"a diacritic jittering amongst the throngs of its own anxiety ",
"yelping for acknowledgement",
"inviting you to my cyclothymic circus",
"just laugh to rsvp",
"",
"tenuously sonorous",
"my rehearsed voice flutters, a stilted lilt flitting diligently",
"deleteriously pitchy",
"the timbre of a shrill alarm clock",
"and if i bother you",
"i’ll shut up if you punch me",
"",
"they say everyone needs an interrobang friend",
"use me to accessorize",
"i promise i have good fashion sense",
"and i make stunning earrings",
"that you’ll just have to flaunt",
"",
"my style guide is listicles",
"brimming with tau(gh)t smiles",
"declaring my informality and unprofessionalism",
"at my job i approximate a question mark",
"",
"i am a self-employed sideshow",
"captive in the fringes of unicode tables",
"relegated to cameos in thinkpieces",
"written and directed by grammarians",
"who don’t think i’m real",
"but if i make people laugh hard enough",
"do i get to exist?"
]

export const full_poem = new Full_Poem();
full_poem.parsePoem("nonstandard", full_poem_text, "February 28, 2018");
full_poem.lines[0].words[1] = new Word("acquiescent", '', ', ', 'willing, cooperative', [], [2], ['ak', 'kwE', 'es', 's.nt'], ['ackwee', 'ESS', 'sint']);
full_poem.lines[0].words[5] = new Word("interrobang", '', '', '‽ (exclamation + question mark)', [], [1], ['in', 'tAr', '.', 'baN'], ['in', 'TARE', 'uh', 'bang']);
full_poem.lines[1].words[0] = new Word("inquisitively", '', ' ', 'questioningly', [], [1], ['iN', 'kwi', 'zi', 'tiv', 'lE'], ['in', 'QUIZ', 'i', 'tiv', 'ly']);
full_poem.lines[2].words[1] = new Word("ad hoc", '', ' ', 'impromptu, created on purpose', [], [0], ['ad', 'hok'], ['ADD', 'hock']);
full_poem.lines[2].words[2] = new Word("grappling", ' ', ' ');
full_poem.lines[2].words[3] = new Word("hook", ' ', '');
full_poem.lines[7].words[1] = new Word("vacuous", '', ', ', 'empty', [], [0], ['vak', 'yU', '.s'], ['VACK', 'you', 'us']);
full_poem.lines[9].words[1] = new Word("decry", '', ' ', 'publicly condemn', [], [1], ['d.', 'krI'], ['di', 'CRY']);
full_poem.lines[17].words[0] = new Word("mirthful", '', ' ', 'joyful, merry', [], [0], ['m.RT', 'f.l'], ['MERTH', 'ful']);
full_poem.lines[18].words[0] = new Word("droll", '', ' ', 'funny in a dry way', [], [0], ['drOl'], ['DROLE']);
full_poem.lines[21].words[1] = new Word("diacritic", '', ' ', 'accent mark on a letter', [], [2], ['dI', '.', 'kri', 'tik'], ['die', 'uh', 'CRITic']);
full_poem.lines[23].words[4] = new Word("cyclothymic", '', ' ', 'minor version of bipolar', [], [2], ['sI', 'klO', 'TI', 'mik'], ['sigh', 'clo', 'THIGH', 'mic']);
full_poem.lines[26].words[0] = new Word("tenuously", '', ' ', 'barely hanging on', [], [0], ['ten', 'yU', '.s', 'lE'], ['TEN', 'you', 'issly']);
full_poem.lines[26].words[1] = new Word("sonorous", '', ' ', 'deep, commanding voice', [], [0], ['son', '.', 'r.s'], ['SONN', 'or', 'iss']);
full_poem.lines[28].words[0] = new Word("deleteriously", '', ' ', 'painfully, harmfully', [], [2], ['del', '.', 'tER', 'E', '.s', 'lE'], ['delluh', 'TEERy', 'us', 'ly']);
full_poem.lines[29].words[1] = new Word("timbre", '', ' ', 'sound quality', [], [0], ['tam', 'b.R'], ['TAM', 'burr']);
full_poem.lines[37].words[3].italicized = true;
full_poem.lines[39].words[4] = new Word("listicles", '', '', 'Buzzfeed-style list articles', [], [0], ['list', 'i', 'k.ls'], ['LIST', 'i', 'culs']);
full_poem.lines[40].words[2] = new Word("tau(gh)t", '', ' ', 'taught/taut (pulled tight)', [], [0], ['tWt'], ['TAUGHT']);
full_poem.lines[45].words[5] = new Word("unicode", '', ' ', 'how computers represent letters', [], [0], ['yU', 'ni', 'kOd'], ['YOU', 'ni', 'code']);
full_poem.lines[46].words[2] = new Word("cameos", '', ' ', 'guest appearances', [], [0], ['cam', 'E', 'Oz'], ['CAM', 'ee', 'ohs']);
full_poem.lines[46].words[4] = new Word("thinkpieces", '', ' ', 'news articles with opinions/analysis');
full_poem.lines[47].words[4] = new Word("grammarians", '', ' ', 'people who study and write about grammar', [], [1], ['gr.', 'mAR', 'E', '.nz'], ['gruh', 'MARE', 'ee', 'uns']);
