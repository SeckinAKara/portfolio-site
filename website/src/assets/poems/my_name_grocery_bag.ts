import { Full_Poem, Line, Word } from "../../app/poem/poem_classes";

let full_poem_text = [
"i know this as a parched land, it always",
"approaches me with fistfuls of dust and",
"deflating soccer balls; maybe a dead bird",
"would know these seasons better, we think, as",
"we gesture our way through a candy negotiation",
"",
"the air here carries sound further, probably:",
"a mosque, a shepherd, always some yelling",
"the children can only tell us “i love you”, pressed",
"to the fence, grasping with calloused fingers",
"to try and feel our T shirts",
"",
"we suck the nectar out of figs in fields bearing",
"Kurdish names",
"these monuments are foreign",
"yet kin in a way i cannot yet articulate",
"we will inject them with neon until they die",
"in our hands",
"",
"we can never return to this rogue planet,",
"where we so casually",
"chopping zeros off fortunes to make pennies",
"crushing bullets with our fingers",
"the more we learn of their language",
"the more we disappoint them with our voices."
]

export const full_poem = new Full_Poem()
full_poem.parsePoem("my name on a loose grocery bag", full_poem_text, "November 2021");
full_poem.lines[15].words[1] = new Word("kin", '', ' ', 'related by family');

let group_1 = [[0, 2], [0, 7], [1, 3], [6, 2]];
let group_2 = [[3, 2], [3, 3], [3, 5], [4, 0]];
let group_3 = [[7, 3], [7, 6], [8, 9]];
let group_4  = [[12, 6], [12, 8], [15, 1], [15, 2], [15, 8], [16, 1], [16, 2], [16, 6], [17, 0]];

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