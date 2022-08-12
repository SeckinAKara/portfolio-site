import { Full_Poem, Line_Alignment, Word } from "src/app/poem/poem_classes";

let full_poem_text = [
"you are the victims of a victimless crime",
"buzzed by an unseeing vulture",
"mugged by an unfeeling culture",
"we whirled you through quicksand",
"uncobbed you like corn",
"measured you in kilotons",
"your souls will soon bloom like mangroves",
"in some realm beyond our crosshairs",
"woven together with a trillion indescribable filaments",
"that sparkle like your eyes once did",
"instead of carpetbombed, the streets will be yarnbombed",
"and every syllable you mouth will be the loudest sound ever made",
"eventually we’ll hear you",
"i just know it",
"",
"we made you a million skeletons",
"all for you",
"",
"we made you a million skeletons",
"all of you"
]

export const full_poem = new Full_Poem();
full_poem.parsePoem("threnody for bombed children", full_poem_text, "April 16, 2018", Line_Alignment.CENTER);
full_poem.lines[6].words[6] = new Word("mangroves", '', '', 'trees that grow in salty water', [], [0], ['maN', 'grOvz'], ['MANG', 'groves']);
full_poem.lines[10].words[2] = new Word("carpetbombed", '', ' ', 'intensive bombing in war');
full_poem.lines[10].words[7] = new Word("yarnbombed", '', '', 'covering public objects in knitted yarn');

let group_1 = [[0, 3], [0, 6], [3, 4], [5, 3], [8, 4], [8, 5], [8, 6], [9, 6]];
let group_2 = [[1, 0], [2, 0]];
let group_3 = [[1, 3], [2, 3]];
let group_4 = [[1, 4], [2, 4]];
let group_5 = [[10, 2], [10, 7]];

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