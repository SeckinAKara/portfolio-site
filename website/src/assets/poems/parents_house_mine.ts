import { Full_Poem, Line, Word } from "../../app/poem/poem_classes";

let full_poem_text = [
"the night sky unfolds",
"but i’m wrong",
"yet it still unfolds",
"so i dance"
]
export const full_poem = new Full_Poem();
full_poem.parsePoem("my parents' house was once also mine", full_poem_text, "May 2019");