import { Full_Poem, Line, Word } from "../../app/poem/poem_classes";

let full_poem_text = [
"the fundamental human disconnect",
"cognitive dissonance",
"the inability to see ourself in the other",
"or the inability to see the other in ourself",
"the unsquarable globe",
"between your god and their death",
"religion upliftss not the good people",
"but gives reason to the condition of the poor",
"with no solutions, a lie is better than fate",
"comminism:ecology:animism, the tyranny of numbers",
"neurotypicals' special interest is procreation",
"the godless (the heinous) lack not god",
"but a fear of God's absence",
"god is in the gödel",
"and ego is the barrier to acceptance",
"."
]

export const full_poem = new Full_Poem()
full_poem.parsePoem("ZZZZZZZZZZZZZZZZZZZZ", full_poem_text, "June 23, 2022");
full_poem.lines[9].words[0] = new Word("comminism:ecology:animism", '', ', ', 'communism, ecology, tribal religions based on nature');
full_poem.lines[10].words[0] = new Word("neurotypicals", '', ", ", 'people without intellectual/developmental disabilities');