import { Full_Poem, Line, Word } from "../../app/poem/poem_classes";

let full_poem_text = [
"sorry i cried when the sun blew me away",
"sorry that when the world ended i wept for myself and not for you",
"it came in a flash, a silent syringe of fire in the afternoon sky",
"i hadn’t prepared yet, so i cried",
"",
"sorry i cried when we had but one day left",
"sorry that as the warmth faded my eyes welled up ",
"though honestly they had been welling up for years and i’d just learned to ignore it",
"it all came so fast, so i cried",
"",
"sorry i’ll cry at your funeral",
"sorry that i won’t know what to say for your eulogy",
"there was always warmth there but i never know how to fit it into words",
"i hadn’t truly met you, so i cried"
]

export const full_poem = new Full_Poem();
full_poem.parsePoem("apology to my father for everything i never said", full_poem_text, "July 4, 2018");
full_poem.lines[2].words[7] = new Word("syringe", '', '', 'medical needle', [], [1], ['s.', 'rinj'], ["suh", "RINJ"]);
full_poem.lines[11].words[10] = new Word("eulogy", '', '', 'funeral speech', [], [0], ['yUl', '.', 'jE'], ["YULE", 'uh', 'jee']);