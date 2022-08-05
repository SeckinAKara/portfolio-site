import { Full_Poem, Line, Line_Alignment, Word } from "../../app/poem/poem_classes";

let full_poem_text = [
"fuck you're so beautiful ",
"and you're so beautiful ",
"and your legs make angles nobody's ever seen before ",
"and you smile like it were illegal",
"and when you dance you kick dust into glitter",
"and your hair is millions",
"and your hair is millions ",
"and your hair is millions ",
"and i swear i’ve only ever seen you blink when you had to",
"and we only met recently but so did everyone else",
"and i don’t want to see you after you die",
"and you shouldn't have to see me after you die",
"and you'll never die",
"and we'll never die",
"and this will never die",
"and sometimes i just want to frame your eyes",
"and when you blush i hear oceans",
"and when you blush i hear mountains",
"and when you blush i hear everything i’m not supposed to",
"and i push",
"and you push ",
"and it pushes us so we push",
"and i find peace in the scriptures of your laugh lines",
"and when you laugh i write scriptures ",
"and you make me laughter",
"and i honestly only want to be laughter ",
"and when you sleep the novels write themselves",
"and when you cry i know it all",
"and when you cried i knew it all",
"and i find deserts in your scalp",
"and you cross deserts when you walk",
"and we make deserts for breakfast",
"and i just can't find your enemies ",
"and i just need you to find yourself ",
"and i just need you to find yourself",
"and i just need you to find yourself",
"and i’ll wait for you to find yourself"
]

export const full_poem = new Full_Poem();
full_poem.parsePoem("written during panic", full_poem_text, "April 30, 2018", Line_Alignment.LEFT);