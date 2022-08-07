import { Full_Poem, Line_Alignment, Word } from "src/app/poem/poem_classes";

let full_poem_text = [
"my hair",
"is a velcro strap to heaven",
"a crown of muqarnas",
"and unraveled bantu knots",
"homeless and wanderlust",
"asphodel middles ",
"",
"my tongue",
"is from the land of fishhooks and snake eyes",
"where vowels harmonize",
"and consonants soften",
"under the weight of declension",
"verbs corrugate towards the horizon",
"and build a bridge to a crescent moon",
"",
"my skin",
"is a melanin factory",
"with half the workers on strike",
"the hide of an undiscovered chameleon",
"tanned under an icy star",
"like half-dollar lunchroom jerk chicken",
"baptized in ranch dressing",
"",
"my name",
"is a voynich hagiography",
"praising a god never introduced to me",
"each jaw-wrung syllable",
"unfurling itself through centuries",
"a pyrimidine skeuomorph",
"more authentic than i am",
"",
"benim babam",
"bana ülkesini hiç vermemiş",
"and my mother’s home is a fairy tale",
"i slump in my chamber of ragged mirrors",
"my vertices smudged, my tints erased",
"hiding from my fractions",
"i search for my reflection",
"and see no one."
]

export const full_poem = new Full_Poem();
full_poem.parsePoem("AUTOχθων", full_poem_text, "February 2018", Line_Alignment.CENTER);
full_poem.lines[2].words[3] = new Word("muqarnas", '', ' ', 'design in mosques (google it)', [], [1], ['mU', 'kaR', 'n.s'], ['moo', 'CAR', 'nas']);
full_poem.lines[5].words[0] = new Word("asphodel", '', ' ', 'immortal flower in Greek mythical heaven', [], [0], ['as', 'f.', 'del'], ['ASS', 'fuh', 'del']);
full_poem.lines[11].words[4] = new Word("declension", '', ' ', 'conjugation for nouns', [], [1], ['d.', 'klen', 'S.n'], ['de', 'KLEN', 'shin']);
full_poem.lines[24].words[2] = new Word("voynich", '', ' ', 'undeciphered medeival manuscript', [], [0], ['voy', 'niC'], ['VOY', 'nitch']);
full_poem.lines[24].words[3] = new Word("hagiography", '', ' ', 'written life of a saint', [], [2], ['hA', 'gE', 'a', 'gr.', 'fE'], ['hay', 'ghee', 'AWgraphy']);
full_poem.lines[28].words[1] = new Word("pyrimidine", '', ' ', 'type of chemical in DNA', [], [1], ['p.', 'ri', 'mi', 'dEn'], ['pi', 'RIM', 'uh', 'deen']);
full_poem.lines[28].words[2] = new Word("skeuomorph", '', ' ', 'obsolete feature, now ornamental', [], [0], ['skyU', '.', 'mORf'], ['SKEW', 'uh', 'morph']);