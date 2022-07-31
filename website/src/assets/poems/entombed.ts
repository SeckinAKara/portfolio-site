import { Full_Poem, Line, Line_Alignment, Word } from "../../app/poem/poem_classes";

let full_poem_text = [
"my bed is an asp",
"mystical in its mummifying murmurs",
"---((melancholic melatonic ginandtonic))---",
"serene in its serpentine seduction",
"---((squamous succubus squishbitch))---",
"vaguely guava, i overripen hir",
"and sink my pineal pontoon",
"into hir down-spiraling escaleator...",
"",
"blʘʘming ballʘʘn lʘʘns swʘʘn mʘʘdlessly fʘʘrward,",
"bʘʘrish gʘʘns drʘʘp thrʘʘgh delʘʘsional schʘʘlyard,",
"hʘʘlahʘʘp dʘʘdles crʘʘn tʘʘnes tʘʘ a jʘʘkbox,",
"fortʘʘitous mʘʘdswings collʘʘde to pollʘʘte thoughts:",
"Quote the raven, mangy maiden, past forgaven, future craviN,",
"Sans a haven, always chasin, hinge my teeth and slice me deeP.",
"No more blamin, shame not fadin, body gave in, puke away siN,",
"Let my past dissolve to mist, i thrice Hail Mary in my sleeP.",
"",
"...drippily flee morphinic mortuary",
"math-sounding hops breath cuts sentence with lemon juice",
"moralistic surround sound, whore emphatic on high ground",
"liquor-cup cover-up, rejuvenating sin wash",
"",
"Enjoy the day as if it’s my first.",

]

export const full_poem = new Full_Poem();
full_poem.parsePoem("entom-bed", full_poem_text, "February 2018", Line_Alignment.CENTER);
full_poem.lines[0].words[4] = new Word("asp", '', '', 'venomous snake that killed Cleopatra');
full_poem.lines[2].words[0] = new Word("melancholic", '---((', ' ', 'deeply depressed', [], [2], ['mel', '.n', 'kol', 'ik'], ['melon', 'KOL', 'ick']);
full_poem.lines[2].words[1] = new Word("melatonic", '', ' ', 'relating to melatonin', [], [2], ['mel', '.', 'ton', 'ik'], ['melluh', 'TONic']);
full_poem.lines[4].words[0] = new Word("squamous", '---((', ' ', 'scaly, skin cells without shape', [], [0], ['skwA', 'm.s'], ['squAY', 'muss']);
full_poem.lines[4].words[1] = new Word("succubus", '', ' ', 'female spirit of nighttime sexual temptation', [], [0], ['suk', 'yU', 'b.s'], ['SUCK', 'yoo', 'biss']);
full_poem.lines[5].words[4] = new Word("hir", '', ' ', 'gender-neutral ze/hir pronoun', [], [0], ['hER'], ['HEAR']);
full_poem.lines[6].words[3] = new Word("pineal", '', ' ', 'brain gland that controls sleep', [], [1], ['pI', 'nE', '.l'], ['pine', 'NEE', 'ull']);
full_poem.lines[6].words[4] = new Word("pontoon", '', ' ', 'type of boat', [], [1], ['pon', 'tUn'], ['pon', 'TOON']);
full_poem.lines[7].words[3] = new Word("escaleator", '', '...', 'escalator + scale', [], [0, 2], ['es', 'kAl', 'A', 't.R'], ['ES', 'kale', 'AY', 'ter']);
full_poem.lines[9].words[2] = new Word("lʘʘns", '', ' ', 'loon, the bird');
full_poem.lines[10].words[0] = new Word("bʘʘrish", '', ' ', 'rough, no manners', [], [0], ['bUR', "iS"], ['BOOR', 'ish']);
full_poem.lines[11].words[2] = new Word("crʘʘn", '', ' ', 'emotionally sing');
full_poem.lines[12].words[0] = new Word("fortʘʘitous", '', ' ', 'lucky, fortunate', [], [1], ['fOR', 'tU', 'i', 't.s'], ['fore', 'TOO', 'itus']);
full_poem.lines[12].words[2] = new Word("collʘʘde", '', ' ', 'collude, conspire', [], [1], ['k.l', 'lUd'], ['kul', 'LOOD']);
full_poem.lines[13].words[3] = new Word("mangy", '', ' ', 'shabby, in a bad state', [], [0], ['mAn', 'jE'], ['MANE', 'jee']);
full_poem.lines[18].words[2] = new Word("morphinic", '', ' ', 'related to morphine', [], [1], ['mOR', 'fin', 'ik'], ['more', 'FINick']);
full_poem.lines[18].words[3] = new Word("mortuary", '', '', 'funeral home', [], [0], ['mOR', 'CU', 'AR', "E"], ['MORE', 'choo', 'ary']);
full_poem.lines[19].words[1] = new Word("hops", '', ' ', 'plant used to make beer');
full_poem.lines[20].words[4] = new Word("emphatic", '', ' ', 'clearly, with emphasis', [], [1], ['em', 'fat', 'ik'], ['em', 'FAT', 'ick']);
full_poem.lines[21].words[2] = new Word("rejuvenating", '', ' ', 'making youthful', [], [1, 3], ['r.', 'jU', 'v.n', 'A', 'tiN'], ['re', 'JOOV', 'in', 'ATE', 'ing']);
