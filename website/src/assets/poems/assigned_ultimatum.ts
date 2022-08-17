import { Full_Poem, Line, Line_Alignment, Word } from "src/app/poem/poem_classes";

let full_poem_text = [
"look for me in your eyelids",
"find my imprints within your",
"self-inflicted stigmata",
"eat me for breakfast just to see",
"how long your intestines survive this ",
"withering of form and mind",
"observe how i rob your poison",
"and sip it pomplessly",
"seek within me your inverse and find only",
"a lens, convex in its concavities",
"spit my ice back as though fire",
"rape my visage and call the hole",
"Glory.",
"read my phone number backwards",
"but call my name collect",
"Ask yourself: where is your prayer",
"And Whom be the Prey?"
]

export const full_poem = new Full_Poem();
full_poem.parsePoem("assigned ultimatum at birth", full_poem_text, "July 27, 2022", Line_Alignment.LEFT);
full_poem.lines[2].words[1] = new Word("stigmata", '', '', "holes in hands from crucifixion", [], [1], ['stig', 'mW', 't.'], ['stig', 'MAW', 'tuh']);
full_poem.lines[7].words[3] = new Word("pomplessly", '', '', "casually, carelessly", [], [0], ['pomp', 'l.s', 'lE'], ['POMP', 'less', 'lee']);
full_poem.lines[9].words[5] = new Word("concavities", '', '', "indentations", [], [1], ['kon', 'kav', 'i', 'tEz'], ['con', 'CAV', 'it', 'eez']);
full_poem.lines[11].words[2] = new Word("visage", '', ' ', "face", [], [0], ['viz', 'ij'], ['VIZZ', 'ij']);
full_poem.lines[14].words[4] = new Word("Prey", '', '', "animal that gets eaten", [], [0], ['prA'], ['pray']);