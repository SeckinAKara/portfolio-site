import { Full_Poem, Line_Alignment, Word } from "src/app/poem/poem_classes";

let full_poem_text = [
"if our sex were a sentence, i would be the punctuation",
"                serifs of muted palpitations",
"i am the space bar",
"your fingers slide across me absentmindedly",
"                both thumbs",
"                                only ever both thumbs",
"",
"you put more weight on the pillow than in your words",
"                complimenting me with vaguities",
"like when i entered the room you couldn't memorize me fast enough",
"                to recall my face",
"                                hidden in the pillow",
"your eyes comb my back like acupuncture",
"                except you can't find any of the sweet spots",
"",
"i’m a tray of jello cumshots",
"                pick your favorite one",
"you₁ choose my hair, matted down and clingy",
"                like handlebars",
"you₂ choose my lips, gorged like two confused ticks",
"                bite them",
"you₃ choose my ass, two potatoes waiting to be mashed",
"                go ahead ",
"i’m a college-aged collagen collage",
"                your own bricolage microfiche of hodgepodged physiology",
"                a mirage from the trenches of your geriatric gyri",
"                flogged by your eggnog monologues",
"                don't acknowledge me beige",
"                your visage nods bon voyage",
"                as you plunge me, dredge me",
"                pen me eulogies, not elegies",
"                make use of me, not friends with me",
"                your words are a cacophon",
"                        y fuck, coughin",
"                                he fucks coffins",
"                                        me sucks often",
"                                                we must soften",
"                                                        please just offer me some coffee ",
"                                                        or a coffer full of laughter and then",
"                                                        after we can craft me into a snowman ",
"                                                                but only after",
"                                                                        because this maw needs thawed",
"                                                                        and could we snug before you raw?",
"",
"i am not passive",
"                i am absent",
"wholeheartedly never here",
"scattered before you first assembled me",
"i evaporate as a defense mechanism when i feel seen",
"but if my soul flees my body that just",
"                leaves more room for you",
"",
"paint me white",
"                erase me",
"                                finish me",
"                                                finish on me",
"                                                                finish in me",
"                                                                                        finished with me",
"",
"how many people do i have to fuck until i become a ",
"                                                                                                      person"
]

export const full_poem = new Full_Poem();
full_poem.parsePoem("pillow cover", full_poem_text, "April 2018", Line_Alignment.LEFT);
full_poem.lines[1].words[0] = new Word("serifs", '                ', ' ', 'decorative additions to fonts', [], [0], ['sAR', 'ifs'], ['SARE', 'ifs']);
full_poem.lines[8].words[3] = new Word("vaguities", '', ' ', 'vague things', [], [0], ['vA', 'g.', 'tEz'], ['VAGUE', 'it', 'eez']);
full_poem.lines[24].words[2] = new Word("bricolage", '', ' ', 'art made of diverse things', [], [0], ['bri', 'k.', 'laZ'], ['BRICK', 'o', 'lazh']);
full_poem.lines[24].words[3] = new Word("microfiche", '', ' ', 'tiny cards full of info', [], [0], ['mI', 'krO', 'fES'], ['MICro', 'feesh']);
full_poem.lines[25].words[7] = new Word("geriatric", '', ' ', 'elderly', [], [2], ['jAR', 'E', 'a', 'trik'], ['jerry', 'ATrick']);
full_poem.lines[25].words[8] = new Word("gyri", '', ' ', 'folds in the brain', [], [0], ['jI', 'rI'], ['JAI', 'rai']);
full_poem.lines[28].words[1] = new Word("visage", '', ' ', "face", [], [0], ['viz', 'ij'], ['VIZZ', 'ij']);
full_poem.lines[30].words[2] = new Word("eulogies", '', ' ', "positive funeral speeches", [], [0], ['yU', 'l.', 'jEz'], ['YULE', 'uh', 'jeez']);
full_poem.lines[30].words[4] = new Word("elegies", '', ' ', "sorrowful poems for the dead", [], [0], ['e', 'l.', 'jEz'], ['ELL', 'uh', 'jeez']);
full_poem.lines[32].words[4] = new Word("cacophon", '', ' ', "harsh mixture of sounds", [], [1], ['k.', 'kWf', '.', 'nE'], ['k.', 'COUGH', 'uh', 'nee']);

