/*
the way i feel kin with the darkness
is not conducive to a heartbeat how the
traffic sounds like a heart 
beat till it can't bleed when will
life give me something i need when
will necessity be something less bleak than
a hearse

no matter what i cause it will be violent
sorry for spoilers but regardless but it's my end
i will choose where my own chips are spent
legally my blood type will be
asphalt
*/

import { Full_Poem, Line, Line_Alignment, Pronunciation, Word } from "../../app/poem/poem_classes";
import { common_words } from "../../app/poem/common_words";

let way = new Word("way", ["wA"]);
let feel = new Word("feel", ["fEl"]);
let kin = new Word("kin", ["kin"]);
let darkness = new Word("darkness", ["daRk", "n.s"]);
let line1 = new Line(0, [common_words.the, way, common_words.i, feel, kin, common_words.with, common_words.the, darkness]);

let conducive = new Word("conducive", ["k.n", "dU", "siv"], [1], '', ' ', "helpful");
let heartbeat = new Word("heartbeat", ["haRt", "bEt"]);
let line2 = new Line(1, [common_words.is, common_words.not, conducive, common_words.to, common_words.a, heartbeat, common_words.how, common_words.the]);

let traffic = new Word("traffic", ["tra", "fik"]);
let sounds = new Word("sounds", ["sawndz"]);
let heart = new Word("heart", ["haRt"]);
let line3 = new Line(2, [traffic, sounds, common_words.like, common_words.a, heart]);

let beat = new Word("beat", ["bEt"]);
let till = new Word("till", ["til"]);
let can_t = new Word("can't", ["kant"]);
let bleed = new Word("bleed", ["blEd"]);
let line4 = new Line(3, [beat, till, common_words.it, can_t, bleed, common_words.when, common_words.will]);

let life = new Word("life", ["lIF"]);
let give = new Word("give", ["giv"]);
let something = new Word("something", ["sum", "TiN"]);
let need = new Word("need", ["nEd"]);
let line5 = new Line(4, [life, give, common_words.me, something, common_words.i, need, common_words.when]);

let necessity = new Word("necessity", ["n.", "se", "si", "tE"], [1]);
let bleak = new Word("bleak", ["blEk"]);
let line6 = new Line(5, [common_words.will, necessity, common_words.be, something, common_words.less, bleak, common_words.than]);

let hearse = new Word("hearse", ["h.Rs"], [0], '', '', "funeral car")
let line7 = new Line(6, [common_words.a, hearse]);

let line8 = new Line(7, []);

let matter = new Word ("matter", ["mat", ".R"]);
let cause = new Word ("cause", ["koz"]);
let violent = new Word ("violent", ["vI", "l.nt"]);
let line9 = new Line(8, [common_words.no, matter, common_words.what, common_words.i, cause, common_words.it, common_words.will, common_words.be, violent]);

let sorry = new Word("sorry", ["so", "rE"]);
let spoilers = new Word("spoilers", ["spoy", "l.Rz"]);
let regardless = new Word("regardless", ["r.", "gard", "l.s"], [1]);
let end = new Word("end", ["end"]);
let line10 = new Line(9, [sorry, common_words.for, spoilers, common_words.but, regardless, common_words.but, "it's", common_words.my, end]);

let line11 = new Line(10, [common_words.i, common_words.will, choose, common_words.where, common_words.my, common_words.own, chips, common_words.are, spent]);

let line12 = new Line(11, [legally, common_words.my, blood, type, common_words.will, common_words.be]);

let line13 = new Line(12, [asphalt]);





export const dust_bunny = new Full_Poem("dust bunny", [line1, line2, line3, line4, line5, line6, line7, line8, line9, line10, line11, line12, line13], "December 2021");