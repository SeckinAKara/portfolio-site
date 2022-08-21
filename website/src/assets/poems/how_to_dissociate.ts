import { Full_Poem, Line_Alignment, Word } from "src/app/poem/poem_classes";

let full_poem_text = [
"i’ve been not myself ",
"not lately, just like, on various occasions",
"",
"sometimes i go from actor to ventriloquist",
"a hollow intercostal reverb",
"i’ve accidentally practiced astral projection",
"left myself to my own devices",
"checked out and left the car running",
"heard my muscles dictate me",
"glided like an abandoned hockey puck",
"(inertia probably)",
"",
"descartes was on some bullshit but",
"i’ve dualed myself",
"lapsed off this planet",
"like an acrophobic fight-or-flight simulator",
"with a hair trigger and no failsafe",
"i’ve inhaled weather balloons",
"and i still haven't found a ceiling",
"(interminable probably)",
"",
"my body really isn't mine",
"if i prod it enough",
"it shows me secrets",
"bemusement parks in my stomach",
"drum corpse in my brain",
"ear rings, ear wrings, tinnitus incubus ",
"a blurry, unstoppable hurricane heart",
"(indefatigable probably)",
"",
"i’ve not been myself",
"lately"
]

export const full_poem = new Full_Poem();
full_poem.parsePoem("how to dissociate completely", full_poem_text, "March 11, 2018", Line_Alignment.LEFT);
full_poem.lines[4].words[2] = new Word("intercostal", '', ' ', 'within the ribcage', [], [2], ['in', 't.R', 'kos', 't.l'], ["inter", "COST", "al"]);
full_poem.lines[12].words[0] = new Word("descartes", '', ' ', 'French philosopher', [], [1], ['dA', 'kaRt'], ["day", 'CART']);
full_poem.lines[13].words[1] = new Word("dualed", '', ' ', 'split into 2', [], [0], ['dUld'], ['DOOLD']);
full_poem.lines[15].words[2] = new Word("acrophobic", '', ' ', 'fear of heights');
full_poem.lines[19].words[0] = new Word("interminable", '(', ' ', 'neverending', [], [1], ['in', 't.R', 'min', '.', 'b.l'], ['in ', 'TERMin', 'able']);
full_poem.lines[24].words[0] = new Word("bemusement", '', ' ', 'confusion', [], [1], ['b.', 'myUz', 'm.nt'], ['be', 'MUSE', 'mint']);
full_poem.lines[26].words[4] = new Word("tinnitus", '', ' ', 'ringing sound in ears', [], [0], ['tin', 'i', 't.s'], ['TIN', 'nittis']);
full_poem.lines[26].words[5] = new Word("incubus", '', ' ', 'male spirit of nighttime sexual temptation', [], [0], ['iN', 'kyU', 'b.s'], ['ING', 'cube', 'is']);
full_poem.lines[28].words[0] = new Word("indefatigable", '(', ' ', 'never gets tired', [], [2], ['in', 'd.', 'fat', 'i', 'g.', 'b.l'], ['inde', 'FAT', 'iggable']);

let group_1 = [[4, 1], [4, 2]]; // o
let group_2 = [[3, 4], [5, 1], [5, 2], [5, 3], [14, 0], [14, 3], [15, 2], ]; // a
let group_3 = [[6, 1], [6, 3], [6, 5], [9, 0], [9, 1]] // I
let group_4 = [[7, 0], [7, 3]] // e
let group_5 = [[16, 2], [16, 6], [17, 1]] // A
let group_6 = [[26, 1], [26, 3], [26, 4], [26, 5]] // i

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