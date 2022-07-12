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

let catches = new Word("catches", new Pronunciation(["kaC", ".z"], [0]));
let attention = new Word("attention", new Pronunciation([".", "ten", "C.n"], [1]), '', '');
let line1 = new Line([common_words.when, common_words.everything, common_words.that, catches, common_words.your, attention], Line_Alignment.LEFT);

let filamentous = new Word("filamentous", new Pronunciation(["fil", ".", "men", "tis"], [2]), '', ', ');
let botanical = new Word("botanical", new Pronunciation(["b.", "tan", "i", "k.l"], [1]), '', ', ');
let fungal = new Word("fungal", new Pronunciation(["fuN", "g.l"], [0]), '', '');
let line2 = new Line([common_words.is, filamentous, botanical, common_words.even, fungal], Line_Alignment.LEFT);

let speed = new Word("speed", new Pronunciation(["spEd"]));
let limit = new Word("limit", new Pronunciation(["li", "mit"], [0]));
let gains = new Word("gains", new Pronunciation(["gAnz"]));
let legibility = new Word("legibility", new Pronunciation(["le", "j.", "bi", "li", "tE"], [2]));
let line3 = new Line([common_words.when, common_words.the, speed, limit, gains, legibility, common_words.as.rightSeparator('')], Line_Alignment.LEFT);

let days = new Word("days", new Pronunciation(['dAz']));
let line4 = new Line([common_words.the, days, common_words.go, common_words.by], Line_Alignment.LEFT);

let living = new Word("living", new Pronunciation(['liv', 'iN'], [0]));
let musicians = new Word("musicians", new Pronunciation(['myU', 'zi', 'S.nz'], [1]));
let sound = new Word("sound", new Pronunciation(['sawnd']));
let line5 = new Line([common_words.when, living, musicians, sound, common_words.as, common_words.good], Line_Alignment.LEFT);

let ones = new Word("ones", new Pronunciation(["wVnz"]));
let killed = new Word("killed", new Pronunciation(['kild']));
let themselves = new Word("themselves", new Pronunciation(["Dem", "selvs"], [1]));
let line6 = new Line([common_words.as, common_words.the, ones, common_words.that, killed, themselves], Line_Alignment.LEFT);

let kitchen = new Word("kitchen", new Pronunciation(['ki', 'C.n'], [0]));
let becomes = new Word("becomes", new Pronunciation(['bE', 'kVmz'], [1]));
let intimidating = new Word("intimidating", new Pronunciation(['in', 'tim', '.', 'dA', 'tiN'], [1]));
let line7 = new Line([common_words.when, common_words.the, kitchen, becomes, common_words.less, intimidating], Line_Alignment.LEFT);

let earth_s = new Word("earth's", new Pronunciation(['RTs']));
let diameter = new Word("diameter", new Pronunciation(['dI', 'am', '.', 'tR'], [1]));
let returns = new Word("returns", new Pronunciation(['r.', 'tRnz'], [1]));
let normal = new Word("normal", new Pronunciation(['nOR', 'm.l'], [0]));
let line8 = new Line([common_words.when, common_words.the, earth_s, diameter, returns, common_words.to, normal], Line_Alignment.LEFT);

let think = new Word("think", new Pronunciation(["TiNk"]));
let can = new Word("can", new Pronunciation(["kan"]));
let finish = new Word("finish", new Pronunciation(["fin", "iS"], [0]));
let movie = new Word("movie", new Pronunciation(["mU", "vE"], [0]));
let now = new Word("now", new Pronunciation(["naw"]));
let line9 = new Line([common_words.I, think, common_words.I, can, finish, common_words.a, movie, now], Line_Alignment.LEFT);

let there_s = new Word("there's", new Pronunciation(["DARz"]));
let many = new Word("many", new Pronunciation(["me", "nE"], [0]));
let choose = new Word("choose", new Pronunciation(["CUz"]));
let line10 = new Line([there_s, common_words.so, many, common_words.to, choose, common_words.from], Line_Alignment.LEFT);

export const coming_out_depressive = new Full_Poem("coming out of a depressive episode", [line1, line2, line3, line4, line5, line6, line7, line8, line9, line10], "Christmas 2021");