/*
the night sky unfolds
but i’m wrong
yet it still unfolds
so i dance
*/

import { Full_Poem, Line, Line_Alignment, Pronunciation, Word } from "../../app/poem/poem_classes";
import { common_words } from "../../app/poem/common_words";

let night = new Word('night', new Pronunciation(['nIt']));
let sky = new Word('sky', new Pronunciation(['skI']));
let unfolds = new Word('unfolds', new Pronunciation(['Vn', 'fOldz'], [1]), '', '');
let wrong = new Word('wrong', new Pronunciation(['roN']), '', '');
let dance = new Word('dance', new Pronunciation(['dans']), '', '');

let line1 = new Line([common_words.the, night, sky, unfolds], Line_Alignment.LEFT);
let line2 = new Line([common_words.but, common_words["i'm"], wrong], Line_Alignment.LEFT);
let line3 = new Line([common_words.yet, common_words.it, common_words.still, unfolds], Line_Alignment.LEFT);
let line4 = new Line([common_words.so, common_words.i, dance], Line_Alignment.LEFT);

export const poem = new Full_Poem("my parents' house was once also mine", [line1, line2, line3, line4]);