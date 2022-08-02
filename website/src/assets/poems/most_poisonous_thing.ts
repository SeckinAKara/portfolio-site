import { Full_Poem, Line_Alignment, Word } from "src/app/poem/poem_classes";

let full_poem_text = [
"eventually we used to have a trampoline ",
"it was the flattest thing i’d ever seen",
"dent devoid, gravitationally unaffectable",
"while we slept it flew with birds",
"it must've weighed ounces",
"and when we woke up it was covered in bird shit ",
"",
"one time a hurricane bumped into us",
"showered our dream yard filled with impossible rigamarole",
"the trampoline skittered about",
"like a moribund daddy long legs",
"and dove into the swampy reeds at the foot of the hill",
"i don't remember if we ever recovered its corpse ",
"",
"i was a boy then",
"now i’m not so sure",
"i wonder if painting my nails will get me shot"
]

export const full_poem = new Full_Poem();
full_poem.parsePoem("the most poisonous thing that can't pierce the skin", full_poem_text, "March 2, 2018", Line_Alignment.LEFT);
full_poem.lines[8].words[7] = new Word("rigamarole", '', '', 'nonsense talk', [], [0], ['rig', '.', 'm.', 'rOl'], ['RIG', 'uh', 'muh', 'role']);
full_poem.lines[10].words[2] = new Word("moribund", '', ' ', 'on the verge of death', [], [0], ['mOR', 'i', 'bund'], ['MORE', 'i', 'bund']);