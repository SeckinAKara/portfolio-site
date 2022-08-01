import { Full_Poem, Line, Word } from "../../app/poem/poem_classes";

let full_poem_text = [
"i know this as a parched land, it always",
"approaches me with fistfuls of dust and",
"deflating soccer balls; maybe a dead bird",
"would know these seasons better, we think, as",
"we gesture our way through a candy negotiation",
"",
"the air here carries sound further, probably:",
"a mosque, a shepherd, always some yelling",
"the children can only tell us “i love you”, pressed",
"to the fence, grasping with calloused fingers",
"to try and feel our T shirts",
"",
"we suck the nectar out of figs in fields bearing",
"Kurdish names",
"these monuments are foreign",
"yet kin in a way i cannot yet articulate",
"we will inject them with neon until they die",
"in our hands",
"",
"we can never return to this rogue planet,",
"where we so casually",
"chopping zeros off fortunes to make pennies",
"crushing bullets with our fingers",
"the more we learn of their language",
"the more we disappoint them with our voices."
]

export const full_poem = new Full_Poem()
full_poem.parsePoem("my name on a loose grocery bag", full_poem_text, "November 2021");
full_poem.lines[15].words[1] = new Word("kin", '', ' ', 'related by family');