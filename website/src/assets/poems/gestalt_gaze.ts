import { Full_Poem, Line, Line_Alignment, Word } from "src/app/poem/poem_classes";

let full_poem_text = [
"Has an eloquent face,",
"A chiseled voice,",
"A glittering shadow.",
"Speaks with an air of soaring complexity,",
"Cuneiform manifolds, ",
"Ruminations on enigma lost.",
"Swings with indulgent wisdom,",
"Lithe movements of a whipcrack",
"Suspended in dance.",
"Seems vaguely worldly,",
"Sahelian scalp, Andean eyes,",
"Mekong mouth.",
"Shines in cloth,",
"Off-color conformity,",
"Exiled from an empire of sewing machines.",
"Imbibes from piquant,",
"Piquing peeks from the",
"Peckish peakcocks of the periphery.",
"Looks at",
"",
"[you,",
"[with flitting nares and flaring eyes,",
"[knitting knots to cover your nape,",
"[your more morose tongue rose,",
"[marched steadfastly through revolving-door teeth,",
"[lip-forth petal scroll of rose unrolls,",
"[swiftly scattered tantric mosaic,",
"[a small pop to start the silence,",
"[muffled by the indelible pain of ineffable solipsism]",
"",
"them.",
"",
"Departs,",
"A wake of tepid emptiness,",
"peony vanilla"
]

export const full_poem = new Full_Poem();
full_poem.parsePoem("gestalt gaze", full_poem_text, "February 2017", Line_Alignment.CENTER);
full_poem.lines[4].words[0] = new Word("Cuneiform", '', ' ', "ancient Mesopotamian writing", [], [1], ['kyU', 'nA', '.', 'fORm'], ['kyoo', 'NAY', 'iform']);
full_poem.lines[4].words[1] = new Word("manifolds", '', ',', "multi-dimensional shape", [], [0], ['man', 'i', 'fOldz'], ['MAN', 'i', 'folds']);
full_poem.lines[5].words[0] = new Word("Ruminations", '', ' ', "deeply considered thoughts", [], [2], ['rUm', 'i', 'nA', 'S.nz'], ['room', 'i', 'NATions']);
full_poem.lines[5].words[2] = new Word("enigma", '', ' ', "mysterious thing", [], [1], ['.', 'nig', 'm.'], ['uh', 'NIGma']);
full_poem.lines[7].words[0] = new Word("Lithe", '', ' ', "thin, graceful", [], [0], ['lID'], ['LIEth']);
full_poem.lines[10].words[0] = new Word("Sahelian", '', ' ', "southern edge of the Sahara", [], [1], ['s.', 'hel', 'E', '.n'], ['suh', 'HELLian']);
full_poem.lines[10].words[2] = new Word("Andean", '', ' ', "Andes mountains in South America", [], [0], ['an', 'dE', '.n'], ['AND', 'ian']);
full_poem.lines[11].words[0] = new Word("Mekong", '', ' ', "river in Burma", [], [0], ['mA', 'koN'], ['MAY', 'kong']);
full_poem.lines[15].words[0] = new Word("Imbibes", '', ' ', "drinks", [], [1], ['im', 'bIbz'], ['im', 'BIBEs']);
full_poem.lines[15].words[2] = new Word("Piquant", '', ' ', "sour like wine", [], [0], ['pE', 'k.nt'], ['PEE', 'kint']);
full_poem.lines[16].words[0] = new Word("Piquing", '', ' ', "drawing attention", [], [0], ['pE', 'kiN'], ['PEE', 'king']);
full_poem.lines[17].words[0] = new Word("Peckish", '', ' ', "hungry");
full_poem.lines[17].words[1] = new Word("peakcocks", '', ' ', "peak + peacocks", [], [0], ['pEk', 'koks'], ['PEEK', 'cocks']);
full_poem.lines[17].words[4] = new Word("periphery", '', '', "around the edges", [], [1], ['p.', 'ri', 'f.', 'rE'], ['per', 'RIFFery']);
full_poem.lines[21].words[1] = new Word("flitting", '', ' ', "darting around like eyes");
full_poem.lines[21].words[2] = new Word("nares", '', ' ', "noseholes");
full_poem.lines[22].words[5] = new Word("nape", '', '', "back of the neck");
full_poem.lines[23].words[2] = new Word("morose", '', ' ', "deeply sad", [], [1], ['m.', 'rOs'], ['muh', 'ROSE']);
full_poem.lines[26].words[2] = new Word("tantric", '', ' ', "google 'sand mandala'", [], [0], ['tan', 'trik'], ['TAN', 'trick']);
full_poem.lines[28].words[3] = new Word("indelible", '', ' ', "impossible to destroy", [], [1], ['in', 'del', '.', 'b.l'], ['in', 'DELLible']);
full_poem.lines[28].words[6] = new Word("ineffable", '', ' ', "too extreme for words", [], [1], ['in', 'ef', '.', 'b.l'], ['in', 'EFF', 'able']);
full_poem.lines[28].words[7] = new Word("solipsism", '', '', "theory that you are the only sentient human", [], [0, 2], ['sol', 'ip', 'si', 'z.m'], ['SOLLip', 'SIZuhm']);
full_poem.lines[33].words[3] = new Word("tepid", '', ' ', "lukewarm", [], [0], ['tep', 'id'], ['TEPPid']);
full_poem.lines[34].words[0] = new Word("peony", '', '?', "pretty flower", [], [0], ['pE', '.', 'nE'], ['PEE', 'uh', 'nee']);
