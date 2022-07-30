import { Full_Poem, Line, Word } from "../../app/poem/poem_classes";

let full_poem_text = [
"through deep-waded mires and far-trodden ash fields,",
"they reach us.",
"out of face-hidden platitudes and didactic half-poems,",
"they race to join us in our merry sports,",
"sporting faces hidden in nine-o’clock drownings and abc ashtray dust.",
"our droll repetititions give way to their tar eyes and sinkhole mouths,",
"mouthing secrets to unwilling listeners:",
"blind ears and deaf eyes laugh behind."
]

export const full_poem = new Full_Poem();
full_poem.parsePoem("FIXED-WIDTH ASPHALT", full_poem_text, "2018");
full_poem.lines[0].words[0] = new Word("through", '  ', ' ');
full_poem.lines[0].words[1] = new Word("deep-waded", '', ' ', "deep parts walked through", [], [0, 1], ["dEp", "wA", "d.d"], ["DEEP", "WADEd"]);
full_poem.lines[0].words[2] = new Word("mires", '', ' ', "swamps/bogs", [], [0], ["mIrz"], ["MIREs"]);
full_poem.lines[0].words[4] = new Word("far-trodden", '', ' ', "approached from far away", [], [0, 1], ["faR", "tro", "d.n"], ["FAR", "TROD", "din"]);
full_poem.lines[1].words[0] = new Word("they", '  ', ' ');
full_poem.lines[2].words[3] = new Word("platitudes", '', ' ', "meaningless moral statements", [], [0], ["pla", "ti", "tUdz"], ["PLAT", "i", "tudes"]);
full_poem.lines[2].words[5] = new Word("didactic", '', ' ', "intended to teach", [], [1], ["dI", "dak", "tik"], ["die", "DAC", "tic"]);
full_poem.lines[3].words[0] = full_poem.lines[1].words[0]
full_poem.lines[4].words[0] = new Word("sporting", '  ', ' ');
full_poem.lines[5].words[1] = new Word("droll", '', ' ', "funny in a dry way", [], [0], ["drOl"], ["DROLE"]);
full_poem.lines[5].words[2] = new Word("repetititions", '', ' ', "misspelled 'repetitions'", [], [1, 3], ["r.", "pe", "t.", "tiS", ".nz"], ["ruh", "PET", "tuh", "TI", "shuns"]);
full_poem.lines[6].words[0] = new Word("mouthing", '  ', ' ');