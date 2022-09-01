import { Full_Poem, Line_Alignment, Word } from "src/app/poem/poem_classes";

let full_poem_text = [
"the mirror starts to make sense",
"when you ask it the right questions",
"who did it best?",
"maybe your ghost will have better cheekbones",
"kill her with the silver leftovers you call marrow",
"shatter the black cat between your thighs",
"and end abruptly like",
"the actress who plays you gets the award named",
"after you",
"what’s a language with no pronouns?",
"extinct or cosmogenic?",
"the public will choose for you",
"",
"are you satisfied with what the lattice has given you?",
"is that shape you form new? i haven’t",
"heard the way your tongue makes that ",
"angle before",
"hurry, crunch your enamel like popcorn",
"caught in between the mailboxes you call",
"baby teeth",
"",
"an archetype stumbles down the catwalk",
"delirious and cloud-legged towards",
"the purgatory you’ve lived thousandsly",
"mountains zipper through a sky",
"jagged placentas crucified screaming into the azure",
"they will never hear you",
"but maybe they used to",
"hard to predict the past, all you have",
"is the detritus it’s strewn upon you",
"",
"i'm more real than anyone ever wanted me to be",
"call customer service, tell them i",
"want another go at them",
"one of us will die and i’ve already",
"tried. i’m no good at it."
]

export const full_poem = new Full_Poem();
full_poem.parsePoem("bordering on anorexis", full_poem_text, "August 14, 2022", Line_Alignment.CENTER);
full_poem.lines[10].words[2] = new Word("cosmogenic", '', ' ', 'origin of the universe', [], [2], ['koz', 'm.', 'jen', 'ik'], ['cosmo', 'JEN', 'ick']);
full_poem.lines[25].words[6] = new Word("azure", '', ' ', 'sky blue', [], [0], ['a', 'Z.R'], ['AH', 'zher']);
full_poem.lines[29].words[2] = new Word("detritus", '', ' ', 'loose trash', [], [1], ['d.', 'trI', 't.s'], ['de', 'TRY', 'tis']);
