import { Full_Poem, Line, Line_Alignment, Word } from "../../app/poem/poem_classes";

let full_poem_text = [
"who knew we flowed",
"like icebergs beneath our skin",
"mode by mode, crawling through life",
"cradled in the spaces we carved out ourselves",
"rainbow skittles in warm hands",
"the shadows behind the alphabet",
"",
"we, the phase kids",
"with dumb ideas we’d already seen work",
"if only in dreams we coerced to lucidity",
"dangling from expectations",
"in a hammock made of stolen clothes",
"",
"we, the temporary kids",
"give us a crumb and we make it a culture",
"fed a diet of academic footnotes",
"under the shelter of musical theater and fiction novels",
"we were ground into salt and still never learned to dissolve",
"",
"we, the forgetful kids",
"unresolved chords played on family bones ",
"consuming but never consummating",
"recycling lists of baby names",
"changing life’s purpose more than our sheets",
"",
"we, the amorphous kids",
"told we’d grow out of it, so we built bigger shells",
"revolutionary indecisiveness",
"we cried a primordial kind of bile",
"anxious shapeshifters with asterisks for teeth",
"we fucked and fucked and fucked",
"and still couldn’t find our names"
]

export const full_poem = new Full_Poem();
full_poem.parsePoem("to the phase kids", full_poem_text, "April 2019", Line_Alignment.LEFT);
full_poem.lines[9].words[5] = new Word("coerced", '', ' ', 'convinced with force', [], [1], ['kO', '.Rsd'], ['co', 'ERSed']);
full_poem.lines[9].words[7] = new Word("lucidity", '', ' ', 'lucid dream = dream you can control', [], [1], ['lU', 'si', 'di', 'tE'], ['loo', 'SID', 'ity']);
full_poem.lines[21].words[3] = new Word("consummating", '', '', 'traditional first sex after marriage', [], [0, 2], ['kon', 's.', 'mA', 'tiN'], ['CONsum', 'MATing']);
full_poem.lines[25].words[2] = new Word("amorphous", '', ' ', 'unclear or changing in shape', [], [1], ['.', 'mOR', 'f.s'], ['uh', 'MORPH', 'us']);
full_poem.lines[27].words[1] = new Word("indecisiveness", '', '', 'inability to choose', [], [2], ['in', 'd.', 'sI', 's.v', 'n.s'], ['indi', 'SIGH', 'siv', 'ness']);
full_poem.lines[28].words[3] = new Word("primordial", '', ' ', 'from the beginning of time', [], [1], ['prI', 'mOR', 'dE', '.l'], ['pri', 'MORE', 'dee', 'ull']);
full_poem.lines[28].words[6] = new Word("bile", '', '', 'green-ish liquid from gallbladder');