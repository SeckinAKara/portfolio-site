/*
queers aren't born
we're revealed
with old eyes and deep chests
enclosing each other’s wispy gasps
you meet one, you've met none
we're all different tomorrow, today
i see futures in your eyes
you'll wreck the whole damn world
just climbing your own mountains
spinning like polyhedra
lichenic
archaea
we'll live forever in half-wrote texts
queers never die
we just return
*/

import { Full_Poem, Line, Line_Alignment, Pronunciation, Word } from "../../app/poem/poem_classes";
import { common_words } from "../../app/poem/common_words";

let queers = new Word('queers', new Pronunciation(['kwERz']), '', ' ', "LGBTQ+ community");
let born = new Word("born", new Pronunciation(['bORn']), '', '');
let line1 = new Line(1, [queers, common_words["aren't"], born], Line_Alignment.LEFT);

let we_re = new Word("we're", new Pronunciation(['wER']));
let revealed = new Word("revealed", new Pronunciation(['r.', 'vEld'], [1]), '', '');
let line2 = new Line(2, [we_re, revealed], Line_Alignment.LEFT);

let old = new Word("old", new Pronunciation(['Old']));
let eyes = new Word("eyes", new Pronunciation(['Iz']));
let deep = new Word("deep", new Pronunciation(['dEp']));
let chests = new Word("chests", new Pronunciation(['Cests']), '', '');
let line3 = new Line(3, [common_words.with, old, eyes, common_words.and, deep, chests], Line_Alignment.LEFT);

let enclosing = new Word("enclosing", new Pronunciation(['.n', 'klOz', 'iN'], [1]));
let others = new Word("other's", new Pronunciation(['V', 'DRz'], [0]));
let wispy = new Word("wispy", new Pronunciation(['wis', 'pE'], [0]));
let gasps = new Word("gasps", new Pronunciation(['gasps']), '', '');
let line4 = new Line(4, [enclosing, common_words.each, others, wispy, gasps], Line_Alignment.LEFT);

let meet = new Word("meet", new Pronunciation(['mEt']));
let met = new Word("met", new Pronunciation(['met']));
let one = new Word("one", new Pronunciation(['wVn']), '', ', ');
let line5 = new Line(5, [common_words.you, meet, one, common_words["you've"], met, common_words.none.rightSeparator('')], Line_Alignment.LEFT);

let different = new Word("different", new Pronunciation(['dif', 'rint'], [0]));
let tomorrow = new Word("tomorrow", new Pronunciation(['t.', 'maR', 'O'], [1]), '', ', ');
let today = new Word("today", new Pronunciation(['t.', 'dA'], [1]), '', '');
let line6 = new Line(6, [common_words["we're"], common_words.all, different, tomorrow, today], Line_Alignment.LEFT);

let futures = new Word("futures", new Pronunciation(['fyU', 'CRz'], [0]));
let line7 = new Line(7, [common_words.i, common_words.see, futures, common_words.in, common_words.your, common_words.eyes.rightSeparator('')], Line_Alignment.LEFT);

let wreck = new Word("wreck", new Pronunciation(['rek']));
let whole = new Word("whole", new Pronunciation(['hOl']));
let damn = new Word("damn", new Pronunciation(['dam']));
let line8 = new Line(8, [common_words["you'll"], wreck, common_words.the, whole, damn, common_words.world.rightSeparator('')], Line_Alignment.LEFT);

let climbing = new Word("climbing", new Pronunciation(['klIm', 'iN'], [0]));
let mountains = new Word("mountains", new Pronunciation(['mawn', '-nz']), '', '');
let line9 = new Line(9, [common_words.just, climbing, common_words.your, common_words.own, mountains], Line_Alignment.LEFT);

let spinning = new Word("spinning", new Pronunciation(['spin', 'iN'], [0]));
let polyhedra = new Word("polyhedra", new Pronunciation(['pol', 'E', 'hE', 'dr.'], [2]), '', '', "3D shapes");
let line10 = new Line(10, [spinning, common_words.like, polyhedra], Line_Alignment.LEFT);

let lichenic = new Word("lichenic", new Pronunciation(['lI', 'ke', 'nik'], [1]), '', '', "like a lichen");
let line11 = new Line(11, [lichenic], Line_Alignment.LEFT);

let archaea = new Word("archaea", new Pronunciation(['aR', 'kE', '.'], [1]), '', '', "ancient microorganisms");
let line12 = new Line(12, [archaea], Line_Alignment.LEFT);

let live = new Word("live", new Pronunciation(["liv"]));
let forever = new Word("forever", new Pronunciation(["fOR", 'e', 'vR'], [1]));
let half_wrote = new Word("half-wrote", new Pronunciation(["haf", "rOt"], [0, 1]));
half_wrote.primary_meaning = "half-written";
let texts = new Word("texts", new Pronunciation(["teksts"]), '', '');
let line13 = new Line(13, [common_words["we'll"], live, forever, common_words.in, half_wrote, texts], Line_Alignment.LEFT);

let line14 = new Line(14, [queers, common_words.never, common_words.die.rightSeparator('')], Line_Alignment.LEFT);

let _return = new Word("return", new Pronunciation(["r.", "tRn"], [1]))
let line15 = new Line(15, [common_words.we, common_words.just, _return], Line_Alignment.LEFT);

export const pupas = new Full_Poem("pupas", [line1, line2, line3, line4, line5, line6, line7, line8, line9, line10, line11, line12, line13, line14, line15], "Aug 2018");