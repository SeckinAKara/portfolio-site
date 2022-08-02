import { Full_Poem, Line_Alignment, Word } from "src/app/poem/poem_classes";

let full_poem_text = [
"if you stand under a raindrop, you can hold its shadow forever",
"cradle the tiny gap it left in the sunlight",
"give this void room to grow",
"eventually the darkness may outweigh the original drop",
"",
"there are a million cracks in me along which i can snap",
"but the sketch they trace out is too beautiful for me to erase them",
"so instead i've learned to let them flourish",
"their paths crisscross my face like streams",
"reminding you where the clouds in my eyes once raked their tendrils",
"my chest is covered in lightning scars",
"blinked into me before i heard my own thunderous gasps",
"the cracks grow like weeds from my legs",
"but weeds just look like flowers if you’re optimistic",
"",
"walking down the street in one piece has a learning curve",
"it's a matter of turning your frisbee heart into a boomerang",
"so even when you lose your grip, you know it's only a temporary separation",
"i know exactly how many letters it takes to break me",
"so my conversations sometimes have word counts",
"and i can read my own forecast each day",
"in case i need to issue myself a flood warning",
"",
"my shadow weighs more than i do",
"but you can’t see the cracks in a shadow",
"if i fall too far, i hope you'll stand beneath me",
"look at how gently you hold me still",
"you won't need to do it forever",
"just until i get all my pieces back together",
"thanks in advance"
]

export const full_poem = new Full_Poem();
full_poem.parsePoem("st(r)atus quo", full_poem_text, "October 2018", Line_Alignment.LEFT);