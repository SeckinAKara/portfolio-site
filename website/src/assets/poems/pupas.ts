import { Full_Poem, Line, Word } from "../../app/poem/poem_classes";

let full_poem_text = [
"queers aren't born",
"we're revealed",
"with old eyes and deep chests",
"enclosing each other’s wispy gasps",
"you meet one, you've met none",
"we're all different tomorrow, today",
"i see futures in your eyes",
"you'll wreck the whole damn world",
"just climbing your own mountains",
"spinning like polyhedra",
"lichenic",
"archaea",
"we'll live forever in half-wrote texts",
"queers never die",
"we just return"
]

export const full_poem = new Full_Poem();
full_poem.parsePoem("pupas", full_poem_text, "Aug 2018");
full_poem.lines[0].words[0] = new Word('queers', '', ' ', "LGBTQ+ community");
full_poem.lines[13].words[0] = full_poem.lines[0].words[0];
full_poem.lines[9].words[2] = new Word("polyhedra", '', '', "3D shapes", [], [2], ['pol', 'E', 'hE', 'dr.'], ["polly", "HEED", "ruh"]);
full_poem.lines[10].words[0] = new Word("lichenic", '', '', "like a lichen", [], [1], ['lI', 'ke', 'nik'], ['lie', 'KEN', 'ik']);
full_poem.lines[11].words[0] = new Word("archaea", '', '', "ancient microorganisms", [], [1], ['aR', 'kE', '.'], ['arr', 'KEE', 'uh']);
full_poem.lines[12].words[4].primary_meaning = "half-written";