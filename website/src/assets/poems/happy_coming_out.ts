import { Full_Poem, Line, Word } from "../../app/poem/poem_classes";

let full_poem_text = [
"This is a happy coming out story",
"Where coming out feels like a party",
"And the only explanations needed are directions to the festivities",
"",
"This story is about a boy who grew into his eyelashes",
"A boy who became an unrecognizable doppelganger",
"For whom coming out felt like finding new parts of his name",
"Appending identities like they were scoops of ice cream",
"When he opened his mouth, a new pride flag unfurled from between his teeth",
"He can’t pinpoint when “bad posture” became “thicc ass”",
"Or when he stopped crying every time he talked to his parents",
"But it took a while, so something big must've happened",
"",
"This story is about a boy who became the one in the mirror",
"Who became the one not allowed in the mirror",
"When he looked at people, he felt things he shouldn't have felt",
"He drew himself into the stars and then called glitter his home",
"He only watched cartoons because he couldn't envision himself as a real person",
"Until the world changed and he saw himself on the news",
"",
"This story is about a boy who sympathized with the grass",
"Who broke all of his own rules and settled for anarchy",
"He placed down train tracks ahead of himself as he hurtled forward",
"And set his clocks too early to beat the sun to setting",
"Too precocious to interpret his feelings",
"He wrote in cursive so everything bore his signature",
"He told people his full name so it would last longer in their mouth",
"A boy who had the ending spoiled but still went the scenic route",
"",
"This is a happy coming out story",
"Where a boy stops being one",
"And that’s okay"
]

export const happy_coming_out = new Full_Poem("a happy coming out story", full_poem_text, "2019");
happy_coming_out.lines[5].words[6] = new Word("doppelganger", '', '', 'magical clone', [], [0, 2], ['dop', '.l', 'gaN', '.R'], ["DOPple", "GANGer"]);
happy_coming_out.lines[7].words[0] = new Word("Appending", '', '', 'adding', [], [1], ['.', 'pen', 'diN'], ["uh", "PEN", "ding"]);