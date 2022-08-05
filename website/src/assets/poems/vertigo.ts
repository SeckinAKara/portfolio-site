import { Full_Poem, Line, Line_Alignment, Word } from "../../app/poem/poem_classes";

let full_poem_text = [
"it's getting harder to tell reality from my dreams",
"i'm not sure which feels more real",
"the stakes seem higher when i'm asleep",
"how did i get to my office just now?",
"my windshield wipers stopped working",
"so when the weather gets bad, i drive behind frosted glass",
"then the haze follows me from my car",
"in my desk, a pile of melting textbooks",
"on the cover of each, my name misspelled a different way",
"i drink some water and am suddenly falling from a great height",
"or maybe i always was, and just now noticed",
"",
"everything sort of blends together",
"coffee and alcohol seem to affect me the same",
"and it's getting harder to function without either of them",
"even the ground seems unsure of itself",
"the world spins under me always",
"threatening me like a drunken carousel",
"as time's breathing grows erratic and strained",
"deadlines get delayed as the air condenses to soup",
"i often feel as though i'm about to die",
"but it only sometimes bothers me",
"",
"i expect one day to finally awaken",
"the last few years simply the result of sleeping in",
"then i will finally be able to see straight",
"the pounding in my head will cease",
"and i will remember how to play piano",
"either that, or i will find myself covered in dirt",
"lying in a field",
"surrounded by the scattered limbs of mannequins ",
"shaped like the limbs of family members",
"wondering if it was i who tore asunder the fabric of reality",
"or if i'd just always been too busy to notice its absence"
]

export const full_poem = new Full_Poem();
full_poem.parsePoem("vertigo", full_poem_text, "March 6, 2020", Line_Alignment.CENTER);