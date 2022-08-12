import { Full_Poem, Line, Line_Alignment, Word } from "../../app/poem/poem_classes";

let full_poem_text = [
"we melt when we congregate",
"singing each others’ birdsongs in unison",
"a splatter-paint watercolor of loving memories and tearful breakdowns",
"trading molars through raucous laughter",
"thrashing in our pool of bloody sweat",
"we forget our pasts and replace them with fables",
"this is where we scrape together identities from each other's trauma",
"this is where we mark down each breath on a chalkboard",
"and trade stick-and-pokes for svedka",
"did i steal my mom's makeup in high school?",
"or was that you?",
"",
"hours later and our outlines have dissolved",
"but i just know i'm in here somewhere",
"making small talk, i fish myself out",
"the future i find is now stained with your palettes",
"and my fingerprints won't unlock my phone anymore",
"foreign intonations worm from my throat",
"as a helix of pilfered phrases fishnets around my tongue",
"contorting my voice by just a semitone",
"what's your name today? ",
"who are you borrowing it from?",
"",
"it's been years since i was myself",
"but i don't miss him",
"watch me wrap linear time around my middle finger",
"academia calls this queering ",
"i call this breathing",
"show me what’s beneath your eyelids",
"is it a reflection?",
"is it a xerox?",
"or is that just how souls bend light?",
"",
"i woke up this morning with extra teeth in my mouth",
"i don't know whose they were"
]

export const full_poem = new Full_Poem();
full_poem.parsePoem("time, the alchemist", full_poem_text, "Summer 2019", Line_Alignment.LEFT);
full_poem.lines[3].words[3] = new Word("raucous", '', ' ', 'harsh, loud', [], [0], ['rW', 'k.s'], ['RAW', 'kis']);
full_poem.lines[8].words[2] = new Word("stick-and-pokes", '', ' ', 'makeshift tattoo');
full_poem.lines[8].words[4] = new Word("svedka", '', ' ', 'brand of cheap, flavored vodka');
full_poem.lines[18].words[4] = new Word("pilfered", '', ' ', 'stolen', [], [0], ['pil', 'f.Rd'], ['PILL', 'ferd']);
full_poem.lines[19].words[6] = new Word("semitone", '', ' ', 'smallest musical interval', [], [0], ['pil', 'f.Rd'], ['PILL', 'ferd']);