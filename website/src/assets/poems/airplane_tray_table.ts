import { Full_Poem, Line, Word } from "../../app/poem/poem_classes";

let full_poem_text = [
"Tea sipped urgently",
"As six torn bags of pretzels",
"Slowly slide edgeways"
]

export const full_poem = new Full_Poem()
full_poem.parsePoem("airplane tray table", full_poem_text, "March 2018");
full_poem.lines[2].words[2] = new Word("edgeways", '', '', 'towards the edge', [], [0, 1], ["ej", "wAz"], ['EDGE', 'ways']);

let group_1 = [[0, 1], [1, 1], [2, 0], [2, 1]];
let group_2 = [[1, 5], [2, 2]]


for (var word of group_1) {
    full_poem.lines[word[0]].words[word[1]].sound_group = 1;
}
for (var word of group_2) {
    full_poem.lines[word[0]].words[word[1]].sound_group = 2;
}