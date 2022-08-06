import { Full_Poem, Line_Alignment, Word } from "src/app/poem/poem_classes";

let full_poem_text = [
"they say there's a self and an other",
"a u and an i ",
"but my alphabet is greedier than that",
"this body has worn more nametags than shirts",
"whittling its bones to try a new skeleton tomorrow",
"smiles like a silverware drawer",
"a garbage disposal throat for the me's i couldn't keep wearing",
"gulping down torn up skin shards choked beneath tears and mucus",
"i keep their ghosts under my fingernails",
"and just paint over them so they can't bother me",
"imperfect copies with no first attempt",
"taking on the smell of whatever is next to them in the fridge ",
"lard steeped in the signature scents of rose water or coconut oil",
"until it's hard to tell the tofu from the flesh",
"the paint from the canvas ",
"the body from the name",
"the air from the smog",
"the shame from the ridicule",
"",
"so i know there should be a u and an i ",
"but the letters on this mirror are bleeding together",
"so let's just quit and call it a draw"
]

export const full_poem = new Full_Poem();
full_poem.parsePoem("psychoanalyzing my insta selfies", full_poem_text, "Spring 2019", Line_Alignment.LEFT);