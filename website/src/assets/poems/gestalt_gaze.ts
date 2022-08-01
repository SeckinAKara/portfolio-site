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
"peony?vanilla"
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
