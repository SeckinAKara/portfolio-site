import { Full_Poem, Line, Word } from "../../app/poem/poem_classes";

let full_poem_text = [
"the way i feel kin with the darkness",
"is not conducive to a heartbeat how the",
"traffic sounds like a heart ",
"beat till it can't bleed when will",
"life give me something i need when",
"will necessity be something less bleak than",
"a hearse",
"",
"no matter what i cause it will be violent",
"sorry for spoilers but regardless but it's my end",
"i will choose where my own chips are spent",
"legally my blood type will be",
"asphalt"
]

export const full_poem = new Full_Poem();
full_poem.parsePoem("dust bunny", full_poem_text, "December 2021");
full_poem.lines[0].words[4] = new Word("kin", '', ' ', 'related to');
full_poem.lines[1].words[2] = new Word("conducive", '', ' ', "helpful", [], [1], ["k.n", "dU", "siv"], ["kun", "DOO", "siv"]);
full_poem.lines[3].words[0] = new Word("beat", '', ' ', 'beaten');
full_poem.lines[3].words[1] = new Word("till", '', ' ', "until");
full_poem.lines[6].words[1] = new Word("hearse", '', '', 'funeral car', [], [0], ["h.Rs"], ["herss"]);
full_poem.lines[9].words[2] = new Word("spoilers", '', ' ', 'revealing ending too soon');
full_poem.lines[12].words[0] = new Word("asphalt", '', '', 'pavement');