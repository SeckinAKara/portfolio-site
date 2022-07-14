/*
the night sky unfolds
but i’m wrong
yet it still unfolds
so i dance
*/

import { Full_Poem, Line, Line_Alignment, Pronunciation, Word } from "../../app/poem/poem_classes";
import { common_words } from "../../app/poem/common_words";

let night = new Word('night');
let sky = new Word('sky');
let unfolds = new Word('unfolds', '', '');
let wrong = new Word('wrong', '', '');
let dance = new Word('dance', '', '');

let line1 = new Line(1, [common_words.the, night, sky, unfolds]);
let line2 = new Line(2, [common_words.but, common_words["i'm"], wrong]);
let line3 = new Line(3, [common_words.yet, common_words.it, common_words.still, unfolds]);
let line4 = new Line(4, [common_words.so, common_words.i, dance]);

export const parents_house_mine = new Full_Poem("my parents' house was once also mine", [line1, line2, line3, line4], "May 2019");