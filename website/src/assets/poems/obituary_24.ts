import { Full_Poem, Line, Line_Alignment, Word } from "src/app/poem/poem_classes";

let full_poem_text = [
"the stars fell from the sky years ago",
"they reside in the halo a wet eye",
"makes around a streetlamp",
"crowding my plans as i ",
"fly from my window",
"",
"the cure to a fear of death is a disembowling in a mirror",
"is the relief of papier-mache innards collapsing",
"from your hinged-open carapace",
"is the wave of calm as your senses rot to static",
"under the watchful eye of a sentient tv",
"the cure to a fear of death is forgetting who she is",
"",
"finding hell in a hospital feels as bad as the real thing",
"and the messages woven through your hair won't disperse",
"when the elevator’s ascent to earth gives you the bends",
"leaving the center of your own attention takes time,",
"takes everything and slams it into the hood of a car",
"",
"i've stolen all the doctors' tongues",
"i'm chewing on them",
"why don't they care",
"i've trapped my teratoma in my bedsheets",
"we're raping each other",
"why don't they care",
"guess caring is for the dead like how",
"living is for the lost",
"",
"following the veins your retinas lay on the streets",
"relearning the meanings of all the letters",
"observing independence day in a cage",
"saying goodbye just a little too late",
"having too many names",
"seeing too many colors",
"cutting ties",
"cutting",
"𝔠=ℵ₁",
"",
"they told me my charges but i was laughing too hard to hear them",
"this will be the moment they Christen me the Jungian tranny",
"fetch the stenographers as i short-circuit your god",
"fetch the professors as i rewrite their cosmogeny",
"fetch the malformed as i mend their plagues",
"fetch the notary, i’m ending this All here",
"∎    ",
]

export const full_poem = new Full_Poem();
full_poem.parsePoem("obituary for age 24", full_poem_text, "May 29, 2023", Line_Alignment.RIGHT);

for (let i = 0; i < 5; i++) {
    full_poem.lines[i].align = Line_Alignment.LEFT;
}
for (let i = 28; i < 37; i++) {
    full_poem.lines[i].align = Line_Alignment.LEFT;
}