import { Full_Poem, Line_Alignment, Word } from "src/app/poem/poem_classes";

let full_poem_text = [
"we are every day now swimming in honey",
"they filled the whole house with it",
"a slog even just to breathe",
"the way it slows everything down even",
"the decay of our walls",
"thinking they just",
"gave up on changing the seasons",
"im losing the sense of where my arms",
"end and the ants begin",
"as will melts to can melts to didnt",
"the sun's reflection rises into the",
"crystalline amber and sets us alight",
"here is the whole world with everyone in it",
"curdling together out of reach",
"peel them away, see the ostinato",
"the past and future both burning",
"on the same cramped stove and what",
"does that make us, you, me",
"im relying mostly on scent if im being honest",
"all the burnt honey makes that kinda hard",
"the more i remember, the more i expect",
"so i each night sedate myself",
"to crawl through a dreamless sleep and",
"await the morning when i awake",
"encased in cement"
]

export const full_poem = new Full_Poem();
full_poem.parsePoem("gingerbread house for covid", full_poem_text, "April 28, 2020", Line_Alignment.CENTER);
full_poem.lines[11].words[0] = new Word("crystalline", '', '', 'made of crystals', [], [0], ['cri', 'st.', 'lin'], ['CRYSTAL', 'in']);
full_poem.lines[11].words[5] = new Word("alight", '', '', 'on fire');
full_poem.lines[14].words[5] = new Word("ostinato", '', '', 'repeating musical line', [], [2], ['o', 'sti', 'no', 'tO'], ['ah', 'stin', 'AUTO']);