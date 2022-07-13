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

let catches = new Word("catches", ["kaC", ".z"]);
let attention = new Word("attention", [".", "ten", "C.n"], [1], '', '');
let line1 = new Line(0, [common_words.when, common_words.everything, common_words.that, catches, common_words.your, attention]);

let filamentous = new Word("filamentous", ["fil", ".", "men", "tis"], [2], '', ', ', "made of filaments");
let botanical = new Word("botanical", ["b.", "tan", "i", "k.l"], [1], '', ', ', "having to do with plants");
let fungal = new Word("fungal", ["fuN", "g.l"], [0], '', '');
let line2 = new Line(1, [common_words.is, filamentous, botanical, common_words.even, fungal]);

let speed = new Word("speed", ["spEd"]);
let limit = new Word("limit", ["li", "mit"]);
let gains = new Word("gains", ["gAnz"]);
let legibility = new Word("legibility", ["le", "j.", "bi", "li", "tE"], [2]);
legibility.primary_meaning = "readability"
let line3 = new Line(2, [common_words.when, common_words.the, speed, limit, gains, legibility, common_words.as.rightSeparator('')]);

let days = new Word("days", ['dAz']);
let line4 = new Line(3, [common_words.the, days, common_words.go, common_words.by]);

let living = new Word("living", ['liv', 'iN']);
let musicians = new Word("musicians", ['myU', 'zi', 'S.nz'], [1]);
let sound = new Word("sound", ['sawnd']);
let line5 = new Line(4, [common_words.when, living, musicians, sound, common_words.as, common_words.good]);

let ones = new Word("ones", ["wVnz"]);
let killed = new Word("killed", ['kild']);
let themselves = new Word("themselves", ["Dem", "selvs"], [1]);
let line6 = new Line(5, [common_words.as, common_words.the, ones, common_words.that, killed, themselves]);

let kitchen = new Word("kitchen", ['ki', 'C.n']);
let becomes = new Word("becomes", ['bE', 'kVmz'], [1]);
let intimidating = new Word("intimidating", ['in', 'tim', '.', 'dA', 'tiN'], [1]);
let line7 = new Line(6, [common_words.when, common_words.the, kitchen, becomes, common_words.less, intimidating]);

let earth_s = new Word("earth's", ['.RTs']);
let diameter = new Word("diameter", ['dI', 'am', '.', 't.R'], [1]);
let returns = new Word("returns", ['r.', 't.Rnz'], [1]);
let normal = new Word("normal", ['nOR', 'm.l']);
let line8 = new Line(7, [common_words.when, common_words.the, earth_s, diameter, returns, common_words.to, normal]);

let think = new Word("think", ["TiNk"]);
let can = new Word("can", ["kan"]);
let finish = new Word("finish", ["fin", "iS"]);
let movie = new Word("movie", ["mU", "vE"]);
let now = new Word("now", ["naw"]);
let line9 = new Line(8, [common_words.I, think, common_words.I, can, finish, common_words.a, movie, now]);

let there_s = new Word("there's", ["DARz"]);
let many = new Word("many", ["me", "nE"]);
let choose = new Word("choose", ["CUz"]);
let line10 = new Line(9, [there_s, common_words.so, many, common_words.to, choose, common_words.from]);

export const coming_out_depressive = new Full_Poem("coming out of a depressive episode", [line1, line2, line3, line4, line5, line6, line7, line8, line9, line10], "Christmas 2021");