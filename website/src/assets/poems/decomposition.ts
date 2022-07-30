import { Full_Poem, Line, Word } from "../../app/poem/poem_classes";

let full_poem_text = [
"i try not to remain conscious for too long now",
"there's a sickening dew perpetually lingering",
"i decay differently without sunlight",
"so many new folds i've dehydrated recently",
"in this second wave of homeliness",
"in this forever wave of desperate yearning",
"there is never a destination, only queueing",
"and a sharp resignation",
"",
"once the dreams hurt more than the living",
"is this death? is this body turned compost?",
"the distinction between a nightmare and tomorrow",
"is the legibility of the disaster headline",
"every new crack is imaginary",
"yet they hurt all the same",
"all joy now is basal, like a call for devolution",
"",
"how many lessons are left in the negative space?",
"i have lived so too many times"
]

export const full_poem = new Full_Poem();
full_poem.parsePoem("decomposition", full_poem_text, "September 4, 2020");
full_poem.lines[1].words[4] = new Word("perpetually", '', ' ', "always", [], [1], ["p.R", "peC", "yU", ".l", 'lE'], ["per", "PETCH", "you", "uh", "lee"]);
full_poem.lines[1].words[5] = new Word("lingering", '', '', "hanging around", [], [0], ["liN", "g.R", "iN"], ["LINGERing"]);
full_poem.lines[4].words[5] = new Word("homeliness", '', '', "basic, at home", [], [0], ["hOm", "lE", "n.s"], ["HOME", "lee", "niss"]);
full_poem.lines[5].words[6] = new Word("yearning", '', '', "intense desire", [], [0], ["y.R", 'niN'], ["YURR", "ning"]);
full_poem.lines[6].words[6] = new Word("queueing", '', '', 'waiting in line', [], [0], ['kyU', 'iN'], ["KYOOing"]);
full_poem.lines[12].words[2] = new Word("legibility", '', ' ', "readability", [], [2], ["le", "j.", "bi", "li", "tE"], ["ledge", "aBILity"]);
full_poem.lines[15].words[4] = new Word("basal", '', ', ', "basic", [], [0], ["bA", 'z.l'], ["BAZE", 'uhl']);
full_poem.lines[15].words[9] = new Word("devolution", '', ' ', "backwards evolution", [], [0, 2], ["dev", ".", "lU", "S.n"], ["DEVuh", "LUtion"]);