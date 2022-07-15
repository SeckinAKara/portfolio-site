import { Full_Poem, Line, Word } from "../../app/poem/poem_classes";

let full_poem_text = [
"when everything that catches your attention",
"is filamentous, botanical, even fungal",
"when the speed limit gains legibility as",
"the days go by",
"when living musicians sound as good",
"as the ones that killed themselves",
"when the kitchen becomes less intimidating",
"when the earth's diameter returns to normal",
"I think I can finish a movie now",
"there's so many to choose from"
]
export const full_poem = new Full_Poem();
full_poem.parsePoem("coming out of a depressive episode", full_poem_text, "March 2018");
full_poem.lines[1].words[1] = new Word("filamentous", '', ', ', "made of filaments", [], [2], ["fil", ".", "men", "tis"], ["fill", "uh", "MENT", "us"]);
full_poem.lines[1].words[2] = new Word("botanical", '', ', ', "having to do with plants", [], [1], ["b.", "tan", "i", "k.l"], ['buh', 'TAN', 'ickle'], );
full_poem.lines[2].words[5] = new Word("legibility", '', ' ', "readability", [], [2], ["le", "j.", "bi", "li", "tE"], ["ledge", "aBILity"]);
full_poem.lines[7].words[3] = new Word("diameter", '', ' ', 'distance between poles', [], [1], ['dI', 'am', '.', 't.R'], ["die", "AM", "itter"]);