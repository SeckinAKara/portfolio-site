import { Full_Poem, Line, Line_Alignment, Word } from "src/app/poem/poem_classes";

let full_poem_text = [
"《i texas hold you down",
"and my poker hand draws a spade,",
"so i full your house. ",
"my coordinated trawler dives",
"deep down, deep left,",
"deep brown, deep red.",
"floating in patella chowder,",
"i get lost and only my movements remain.",
"the moods of your today on my tongue,",
"you olfactorily awaken me.",
"j’ouvre mes yeux et j’peux pas t’voir.",
"",
"you drive me",
"and i sleep back and forth.",
"silently you open me, feast upon me,",
"nary a memory nor an airy reply.",
"i obligatorily cavernous,",
"you enter upon my invitation",
"and steal my couch.",
"you encapsulate me",
"in your disposable hospitality.",
"i swallow your alimony.",
"j’ferme mes yeux et j’peux pas t’sentir.》",
"",
"",
"",
"we feel each other",
"as KY flings from our lidded eyes.",
"my tongue licks your dry air.",
"breathless miserycordia.",
"though you are threaded amongst",
"my beaded pores,",
"you have long departed",
"from my null embrace.",
"every night we fuck, my eyes are dead mansions.",
"(you                             (am)                               i)",
"                                and ",
"                neither                                    of ",
"                                                us",
" were                             ⠀ ",
"ever ",
"",
"here."
]

export const full_poem = new Full_Poem();
full_poem.parsePoem("ménage à froid", full_poem_text, "February 21, 2018", Line_Alignment.LEFT);
full_poem.lines[3].words[2] = new Word("trawler", '', ' ', 'fishing boat');
full_poem.lines[6].words[2] = new Word("patella", '', ' ', 'kneecap', [], [1], ['p.', 'tel', '.'], ['puh', 'TELL', 'uh']);
full_poem.lines[9].words[1] = new Word("olfactorily", '', ' ', 'regarding smell', [], [1], ['p.', 'tel', '.'], ['puh', 'TELL', 'uh']);
full_poem.lines[27].words[1] = new Word("KY", '', ' ', 'water-based lube brand');
full_poem.lines[29].words[1] = new Word("miserycordia", '', ' ', 'charity');

for (let i = 12; i < 25; i++) {
    full_poem.lines[i].align = Line_Alignment.RIGHT;
}
for (let i = 26; i < 43; i++) {
    full_poem.lines[i].align = Line_Alignment.CENTER;
}
full_poem.lines[36].align = full_poem.lines[38].align = Line_Alignment.LEFT;
full_poem.lines[39].align = full_poem.lines[40].align = Line_Alignment.RIGHT;