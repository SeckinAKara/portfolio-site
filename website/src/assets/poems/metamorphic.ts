import { Full_Poem, Line_Alignment, Word } from "src/app/poem/poem_classes";

let full_poem_text = [
"finite leering feldspar glaciers",
"hurtling forward rap",
"idl",
"y head-heel exchange rate",
"the rushing wind brittle",
"i can’t breathe",
"but will",
"",
"infinite deceptive talcum hills",
"spinning through sl ow l",
"y face-back look-forward",
"the starlight dimming",
"i don’t breathe",
"i won’t"
]

export const full_poem = new Full_Poem();
full_poem.parsePoem("metamorphic", full_poem_text, "February 5, 2018", Line_Alignment.LEFT);
full_poem.lines[0].words[1] = new Word("leering", '', ' ', 'staring in an uncomfortable way');
full_poem.lines[0].words[2] = new Word("feldspar", '', ' ', 'common hard mineral');
full_poem.lines[8].words[2] = new Word("talcum", '', ' ', 'very soft mineral');