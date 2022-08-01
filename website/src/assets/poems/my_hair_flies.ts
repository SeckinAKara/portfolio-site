import { Full_Poem, Line, Line_Alignment, Word } from "src/app/poem/poem_classes";

let full_poem_text = [
"my hair flies",
"both wind and wing",
"both gust and mast",
"free of its birthweight",
"galactic",
"",
"my hair soars",
"unbound and unbounded",
"adorned of formlessness",
"an absorbent sort of auradescent",
"peafowl",
"",
"my hair bursts",
"a stop-motion explosion",
"modal jazz in keratin",
"dense, howling in exaltation",
"come see"
]

export const full_poem = new Full_Poem();
full_poem.parsePoem("my hair flies", full_poem_text, "July 2018", Line_Alignment.LEFT);
full_poem.lines[7].words[0] = new Word("unbound", '', ' ', "not tied up");
full_poem.lines[7].words[2] = new Word("unbounded", '', ' ', "without end");
full_poem.lines[9].words[4] = new Word("auradescent", '', '', "aura + iridescent", [], [0], ['aR', '.', 'des', '.nt'], ["AURA", "dess", "sint"]);
full_poem.lines[10].words[0] = new Word("peafowl", '', '', "peacock + peahen", [], [0], ['pE', 'fawl'], ["PEE", "foul"]);
full_poem.lines[14].words[3] = new Word("keratin", '', '', "what hair and nails are made of", [], [0], ['kAR', '.', 'tin'], ["CARE", 'uh', 'tin']);
full_poem.lines[15].words[3] = new Word("exaltation", '', '', "heavenly bliss", [], [2], ['egz', 'ol', 'tA', 'S.n'], ['eggs', 'ull', 'TAtion']);