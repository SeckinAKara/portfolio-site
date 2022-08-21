import { Full_Poem, Line, Line_Alignment, Word } from "src/app/poem/poem_classes";

let full_poem_text = [
"the eternal ash congeals like blood spread thin across a tin hospital pan, shifts with cold wind",
"small bushes                      tendrils ",
"petrified and dense                   unnamed",
"skitter about with gusts                   never seen",
"before faltering in a divet or hill       if             born after",
"like half-eaten apples                  all the catalogs",
"thrown from           there         had long burned",
"car windows                      do not waver",
"              is           stand watch",
"                         their insides",
"           rain             would’ve ",
"                          been",
"  -with the                    medic ",
"-still ness         it           ina",
"-there is                     l",
"-a hum                     ",
"-of pasts         is          motes",
"",
"                       drift",
"silent",
"",
"",
"a faraway horizon projects the veneer of solidity, the icy capstone to flatworld burnt to browns,",
"shivering with the vaguest sense of life, the heat tricking an ever-absent observer to feel company",
"its scant geometries blurred by depth, a shrink-wrapped protractor of a distance in dull tones",
"in the edgeless bounds",
"rearing up beyond the prisms",
"b            the largest thing that was ever seen            s",
"o     further away than could ever be imagined    o",
"rn twin to infinity, reared on the wings of cha",
"unchly upon the precipice of maker and destro",
"a         the beginning and end of a mythology         y",
"t                  in an indiscernible mass unable                  e",
"s                        to throb under the stress                        r",
"of attaining sentience",
"making headway towards dis",
"proving itself, rippling through",
"the atmosphere like a dead family",
"whirling beneath the wheels",
"a            s p e e d            i",
"f             bullet train             n",
"o              diametric life              g",
"all ghosts"
]

export const full_poem = new Full_Poem();
full_poem.parsePoem("hellscape infinite", full_poem_text, "May 2018", Line_Alignment.CENTER);

let group_1 = [[0, 0], [0, 1], [0, 3]];
let group_2 = [[0, 7], [0, 10], [0, 13], [0, 14], [0, 16], [3, 0], [3, 2], [4, 2], [4, 4], [4, 6]];
let group_3 = [[2, 0], [2, 2]];
let group_4 = [[22, 10], [22, 12]];
let group_5 = [[22, 13], [22, 15]];
let group_6 = [[29, 1], [29, 3], [29, 7], [30, 3], [31, 10], [32, 18], [32, 20], [35, 3], [36, 1], [36, 2]];
let group_7 = [[38, 0], [38, 3]];

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