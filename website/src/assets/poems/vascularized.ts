import { Full_Poem, Line_Alignment, Word } from "src/app/poem/poem_classes";

let full_poem_text = [
"i see you in the capillaries within my eyes",
"i see you in the caterpillars that squeeze me thin",
"you make your presentsce like a project",
"and your abscenssce like a disease",
"",
"when you reach out through my vision you",
"end up back before your own start",
"in this shape you so beautifully destroy",
"every day how your wakings shove waves",
"off towards the nearest of all horizons",
"",
"the space in my flesh is worn thin ly",
"and the flesh i wear you in is how spaced",
"out the letters can still me be until it",
"becomes us illegible to them our",
"observers fixed-points how they rotate through",
"th us ly",
"",
"walking in circles has never seemed so fun",
"this idolatry of the inverse is new only in text",
"these feelings you're reading have existed forever",
"in margins, perhaps even your own",
"",
"your eyes each day are squeezed into themselves",
"and yet you assume an order amongst them",
"the mirror flips you the way you wish to be torn",
"shredded",
"reborn",
"deaded",
"",
"and and or or or and and",
"it has yet to have mattered"
]

export const full_poem = new Full_Poem();
full_poem.parsePoem("vascularized", full_poem_text, "August 11, 2022", Line_Alignment.LEFT);
full_poem.lines[0].words[5] = new Word("capillaries", '', ' ', 'tiny blood vessels', [], [0], ['kap', '.', 'lAR', 'Ez'], ['CAP', 'pill', 'air', 'eez']);
full_poem.lines[2].words[3] = new Word("presentsce", '', ' ', 'presents + presence');
full_poem.lines[3].words[2] = new Word("abscenssce", '', ' ', 'abscess + absence');
full_poem.lines[19].words[1] = new Word("idolatry", '', ' ', 'idol worship', [], [1], ['I', 'dol', '.', 'trE'], ['eye', 'DOLL', 'uhtree']);

let group_1 = [[0, 5], [1, 5]];
let group_2 = [[2, 3], [3, 2]];
let group_3 = [[7, 2], [8, 1], [8, 4], [8, 6]];
let group_4 = [[11, 2], [11, 5], [11, 7], [12, 6], [12, 7], [13, 4], [13, 7], [13, 8], [14, 2], [15, 1], [25, 1], [25, 2], [25, 7]];
let group_5 = [[25, 10], [27, 0], [30, 2], [30, 3], [30, 4], [30, 5]];
let group_6 = [[26, 0], [28, 0]];
let group_7 = [[30, 0], [30, 1], [30, 5], [30, 6], [31, 1], [31, 4], [31, 5]];

for (var word of group_1) {
    full_poem.lines[word[0]].words[word[1]].sound_group = 1;
}
for (var word of group_2) {
    full_poem.lines[word[0]].words[word[1]].sound_group = 2;
}
for (var word of group_3) {
    full_poem.lines[word[0]].words[word[1]].sound_group = 3;
}
for (var word of group_4) {
    full_poem.lines[word[0]].words[word[1]].sound_group = 4;
}
for (var word of group_5) {
    full_poem.lines[word[0]].words[word[1]].sound_group = 5;
}
for (var word of group_6) {
    full_poem.lines[word[0]].words[word[1]].sound_group = 6;
}
for (var word of group_7) {
    full_poem.lines[word[0]].words[word[1]].sound_group = 7;
}