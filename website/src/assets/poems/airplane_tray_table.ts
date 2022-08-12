import { Full_Poem, Line, Word } from "../../app/poem/poem_classes";

let full_poem_text = [
"Tea sipped urgently",
"As six torn bags of pretzels",
"Slowly slide edgeways"
]

export const full_poem = new Full_Poem()
full_poem.parsePoem("airplane tray table", full_poem_text, "March 2018");
full_poem.lines[2].words[2] = new Word("edgeways", '', '', 'towards the edge', [], [0, 1], ["ej", "wAz"], ['EDGE', 'ways']);

full_poem.lines[0].words[1].sound_group =
    full_poem.lines[1].words[1].sound_group =
    full_poem.lines[2].words[0].sound_group =
    full_poem.lines[2].words[1].sound_group = 1;

full_poem.lines[1].words[5].sound_group = 
    full_poem.lines[2].words[2].sound_group = 2;