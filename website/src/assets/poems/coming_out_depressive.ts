/*
when everything that catches your attention
is filamentous, botanical, even fungal
when the speed limit gains legibility as
the days go by
when living musicians sound as good
as the ones that killed themselves
when the kitchen becomes less intimidating
when the earth's diameter returns to normal
I think I can finish a movie now
there's so many to choose from
*/

import { Full_Poem, Line, Line_Alignment, Pronunciation, Word } from "../../app/poem/poem_classes";
import { common_words } from "../../app/poem/common_words";

let catches = new Word("catches");
let attention = new Word("attention", '', '');
let line1 = new Line(0, [common_words.when, common_words.everything, common_words.that, catches, common_words.your, attention]);

let filamentous = new Word("filamentous", '', ', ', "made of filaments", [], [2], ["fil", ".", "men", "tis"], ["fill", "uh", "MENT", "us"]);
let botanical = new Word("botanical", '', ', ', "having to do with plants", [], [1], ["b.", "tan", "i", "k.l"], ['buh', 'TAN', 'ickle'], );
let fungal = new Word("fungal", '', '');
let line2 = new Line(1, [common_words.is, filamentous, botanical, common_words.even, fungal]);

let speed = new Word("speed");
let limit = new Word("limit");
let gains = new Word("gains");
let legibility = new Word("legibility", '', ' ', "readability", [], [2], ["le", "j.", "bi", "li", "tE"], ["ledge", "aBILity"]);
let line3 = new Line(2, [common_words.when, common_words.the, speed, limit, gains, legibility, common_words.as.rightSeparator('')]);

let days = new Word("days");
let line4 = new Line(3, [common_words.the, days, common_words.go, common_words.by]);

let living = new Word("living");
let musicians = new Word("musicians");
let sound = new Word("sound");
let line5 = new Line(4, [common_words.when, living, musicians, sound, common_words.as, common_words.good]);

let ones = new Word("ones");
let killed = new Word("killed");
let themselves = new Word("themselves");
let line6 = new Line(5, [common_words.as, common_words.the, ones, common_words.that, killed, themselves]);

let kitchen = new Word("kitchen");
let becomes = new Word("becomes");
let intimidating = new Word("intimidating");
let line7 = new Line(6, [common_words.when, common_words.the, kitchen, becomes, common_words.less, intimidating]);

let earth_s = new Word("earth's");
let diameter = new Word("diameter", '', '', 'distance between poles', [], [1], ['dI', 'am', '.', 't.R'], ["die", "AM", "itter"]);
let returns = new Word("returns");
let normal = new Word("normal");
let line8 = new Line(7, [common_words.when, common_words.the, earth_s, diameter, returns, common_words.to, normal]);

let think = new Word("think");
let can = new Word("can");
let finish = new Word("finish");
let movie = new Word("movie");
let now = new Word("now");
let line9 = new Line(8, [common_words.I, think, common_words.I, can, finish, common_words.a, movie, now]);

let there_s = new Word("there's");
let many = new Word("many");
let choose = new Word("choose");
let line10 = new Line(9, [there_s, common_words.so, many, common_words.to, choose, common_words.from]);

export const coming_out_depressive = new Full_Poem("coming out of a depressive episode", [line1, line2, line3, line4, line5, line6, line7, line8, line9, line10], "Christmas 2021");