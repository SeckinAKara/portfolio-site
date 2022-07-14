/*
Tea sipped urgently
As six torn bags of pretzels 
Slowly slide edgeways
*/
import { Full_Poem, Line, Line_Alignment, Pronunciation, Word } from "../../app/poem/poem_classes";
import { common_words } from "../../app/poem/common_words";

let Tea = new Word("Tea");
let sipped = new Word("sipped");
let urgently = new Word("urgently");
let line1 = new Line(0, [Tea, sipped, urgently], Line_Alignment.LEFT);

let As = common_words.as.capitalize([0]);
let six = new Word("six");
let torn = new Word("torn");
let bags = new Word("bags");
let pretzels = new Word("pretzels");
let line2 = new Line(1, [As, six, torn, bags, common_words.of, pretzels], Line_Alignment.LEFT);

let Slowly = new Word("Slowly");
let slide = new Word("slide");
let edgeways = new Word("edgeways", '', '', 'towards the edge', [], [0], ["ej", "wAz"], ['EDGE', 'ways']);
let line3 = new Line(2, [Slowly, slide, edgeways], Line_Alignment.LEFT);

export const airplane_tray_table = new Full_Poem("airplane tray table", [line1, line2, line3], "March 2018");