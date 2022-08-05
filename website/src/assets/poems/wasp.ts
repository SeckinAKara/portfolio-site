import { Full_Poem, Line, Line_Alignment, Word } from "../../app/poem/poem_classes";

let full_poem_text = [
"it’s still where you left it, you know",
"the beautiful nest of bumblebees you",
"dropped down my throat when",
"you smirked, or",
"you guffawed, or",
"you maybe just stood there",
"and i noticed a stirring in my core",
"while my hollowed-out insides dripped",
"with your honey",
"but then",
"you, white boy, or",
"you, cis boy, or",
"you, american boy, forgot your tongue was a blade",
"with barely a sentence, you sliced open my chest",
"and flung hornets into the wound",
"the gentle buzzing became a tempest",
"but you were still smirking",
"and you were still so damn handsome",
"so i plucked the innocence from my eyes and placed it in yours",
"assured you my stomach had always made this sound",
"let you taste my face to prove my tears were honey",
"and promised i’d return as i slunk away",
"so now i’m left waiting for this infestation to subside",
"but even when this hive is deserted",
"honey never spoils",
"it just hardens"
]

export const full_poem = new Full_Poem();
full_poem.parsePoem("WASP", full_poem_text, "October 15, 2019", Line_Alignment.LEFT);