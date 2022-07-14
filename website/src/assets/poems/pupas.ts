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

import { Full_Poem, Language, Line, Line_Alignment, Pronunciation, Word } from "../../app/poem/poem_classes";
import { common_words } from "../../app/poem/common_words";

let queers = new Word('queers', '', ' ', "LGBTQ+ community");
let born = new Word("born");
let line1 = new Line(1, [queers, common_words["aren't"], born]);

let we_re = new Word("we're");
let revealed = new Word("revealed", '', '');
let line2 = new Line(2, [we_re, revealed]);

let old = new Word("old");
let eyes = new Word("eyes");
let deep = new Word("deep");
let chests = new Word("chests", '', '');
let line3 = new Line(3, [common_words.with, old, eyes, common_words.and, deep, chests]);

let enclosing = new Word("enclosing");
let others = new Word("other's");
let wispy = new Word("wispy");
let gasps = new Word("gasps", '', '');
let line4 = new Line(4, [enclosing, common_words.each, others, wispy, gasps]);

let meet = new Word("meet");
let met = new Word("met");
let one = new Word("one", '', ', ');
let line5 = new Line(5, [common_words.you, meet, one, common_words["you've"], met, common_words.none.rightSeparator('')]);

let different = new Word("different");
let tomorrow = new Word("tomorrow", '', ', ');
let today = new Word("today", '', '');
let line6 = new Line(6, [common_words["we're"], common_words.all, different, tomorrow, today]);

let futures = new Word("futures");
let line7 = new Line(7, [common_words.i, common_words.see, futures, common_words.in, common_words.your, common_words.eyes.rightSeparator('')]);

let wreck = new Word("wreck");
let whole = new Word("whole");
let damn = new Word("damn");
let line8 = new Line(8, [common_words["you'll"], wreck, common_words.the, whole, damn, common_words.world.rightSeparator('')]);

let climbing = new Word("climbing");
let mountains = new Word("mountains", '', '');
let line9 = new Line(9, [common_words.just, climbing, common_words.your, common_words.own, mountains]);

let spinning = new Word("spinning");
let polyhedra = new Word("polyhedra", '', '', "3D shapes", [], [2], ['pol', 'E', 'hE', 'dr.'], ["polly", "HEED", "ruh"]);
let line10 = new Line(10, [spinning, common_words.like, polyhedra]);

let lichenic = new Word("lichenic", '', '', "like a lichen", [], [1], ['lI', 'ke', 'nik'], ['lie', 'KEN', 'ik']);
let line11 = new Line(11, [lichenic]);

let archaea = new Word("archaea", '', '', "ancient microorganisms", [], [1], ['aR', 'kE', '.'], ['arr', 'KEE', 'uh']);
let line12 = new Line(12, [archaea]);

let live = new Word("live");
let forever = new Word("forever");
let half_wrote = new Word("half-wrote");
half_wrote.primary_meaning = "half-written";
let texts = new Word("texts", '', '');
let line13 = new Line(13, [common_words["we'll"], live, forever, common_words.in, half_wrote, texts]);

let line14 = new Line(14, [queers, common_words.never, common_words.die.rightSeparator('')]);

let _return = new Word("return")
let line15 = new Line(15, [common_words.we, common_words.just, _return]);

export const pupas = new Full_Poem("pupas", [line1, line2, line3, line4, line5, line6, line7, line8, line9, line10, line11, line12, line13, line14, line15], "Aug 2018");