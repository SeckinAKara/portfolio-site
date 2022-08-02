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
full_poem.lines[10].words[3] = new Word("carpetbombed", '', ' ', 'intensive bombing in war');
full_poem.lines[10].words[7] = new Word("yarnbombed", '', '', 'covering public objects in knitted yarn');

