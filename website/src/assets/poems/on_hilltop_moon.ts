import { Full_Poem, Line, Line_Alignment, Word } from "../../app/poem/poem_classes";

let full_poem_text = [
"i one night saw, on a hill, the moon",
"lifted from the heavens and",
"placed gingerly in",
"the grass, collecting dew.",
"he was the size of a cow and",
"about as fragile.",
"reaching out a hand, she",
"asked me, “have",
"you ever felt distant from yourself?”",
"i bellowed at it “yes”,",
"tears pooling in my throat,",
"the word caught clanging, tumbling",
"through fogged tree branches.",
"across that fragile face, a knowing",
"beam flashed, and back to me",
"they offered, “good,",
"i have never seen you so",
"present as while, now,",
"staring into yourself”"
]

export const full_poem = new Full_Poem();
full_poem.parsePoem("on a hilltop sat the moon, after amon tobin", full_poem_text, "February 2019", Line_Alignment.CENTER);