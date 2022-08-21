import { Full_Poem, Line_Alignment, Word } from "src/app/poem/poem_classes";

let full_poem_text = [
"i’ve heard the most boring people are the ones who talk about their dreams",
"but i think whoever said that just dreamed boring shit",
"there's a half-formed place somewhere seven years beyond me",
"where i go when the world wants to snap my spine",
"i never remember what i saw there",
"but sometimes it surfaces in my cereal bowl in the morning ",
"often i’m privy to death",
"his deep vacuum chest bordering my periphery",
"hunting my attention like a news cycle",
"but his stench is ubiquitous now, i’ve long acclimated",
"and when he draws near i can bear it",
"until he retreats",
"and when he draws near i can bear it",
"until he retreats",
"",
"i'm not always afraid to die",
"only on the days when it looks like i never will",
"i've memorized the feeling of death's hand within mine",
"and i yearn to echo within him once more",
"i've done it so many times before",
"and i always just wake up again",
"",
"his horses have been looking for me",
"one day i’ll be introduced to them",
"when they finally find me",
"i know they’ve been trying",
"i’ve tried as well",
"and when they bridge the chasm",
"death will be herding them",
"and though we’ve met before",
"this time he’ll taste different",
"and though he’s tried before",
"this time he’ll close me"
]

export const full_poem = new Full_Poem();
full_poem.parsePoem("path of his herd", full_poem_text, "May 2019", Line_Alignment.LEFT);
full_poem.lines[6].words[2] = new Word("privy", '', ' ', 'aware of', [], [0], ['pri', 'vE'], ['PRIV', 'vee']);
full_poem.lines[7].words[6] = new Word("periphery", '', ' ', 'outer edges', [], [1], ['p.R', 'ri', 'f.R', 'rE'], ['per', 'RIFF', 'eree']);
full_poem.lines[9].words[4] = new Word("ubiquitous", '', ' ', 'always everywhere', [], [1], ['yU','bi', 'kwi', 't.s'], ['yoo', 'BICK', 'wittis']);
full_poem.lines[9].words[8] = new Word("acclimated", '', ' ', 'gotten used to', [], [0], ['ak', 'li', 'mA', 't.d'], ['ACK', 'lim', 'ated']);