import { Full_Poem, Line_Alignment, Word } from "src/app/poem/poem_classes";

let full_poem_text = [
"i go to the piercing parlor and ask for a trepanning",
"because my brain-pulsing tar has gotten inignorably loud",
"she digs the needle through my ear three times",
"yet no spirits or demons leak out",
"the blood throughout my body rushes to fill the cavities",
"new screeching holes within my head",
"but is stopped by the surgical steel piercings",
"i am held together by my new shrapnel",
"",
"oh the dream of being an xray's worst nightmare",
"of shrouding my contents from the airport metal ",
"detector",
"of looking suspicious enough to always get a ",
"pat-down",
"i will one day contain enough steel to be deemed a ",
"weapon",
"like when i gnaw at my steering wheel with 10 ",
"trigger fingers",
"playing chicken with the guard rails to resurrect ",
"my fear of death",
"hoping to always be placated by the aesthetic kind ",
"of self-harm",
"",
"i would like to be more dangerous to others than to myself",
"so they can teach me how to keep my hands off my own throat",
"i would like to stick out of the sidewalk like an IED",
"don't touch, just gawk",
"at this twirling museum of rings and spikes",
"sprouting new knives from every ripple of cartilage",
"always the fireball microseconds after the atom bomb burst",
"when i can be hotter than the sun",
"and be called anything but useful"
]

export const full_poem = new Full_Poem();
full_poem.parsePoem("pincushion", full_poem_text, "February 2020", Line_Alignment.CENTER);
full_poem.lines[0].words[10] = new Word("trepanning", '', '', 'ancient medicine, drilling hole in skull', [], [1], ['tr.', 'pan', 'iN'], ['truh', 'PANNing']);
full_poem.lines[1].words[6] = new Word("inignorably", '', ' ', 'unable to be ignored', [], [1], ['in', 'ig', 'n.R', '.', 'blE'], ['in', 'IG', 'ner', 'ubly']);
full_poem.lines[20].words[4] = new Word("placated", '', ' ', 'satisfied, calmed', [], [0], ['pla', 'kAt', '.d'], ['PLAck', 'ated']);
full_poem.lines[25].words[11] = new Word("IED", '', ' ', 'improvised explosive device');

