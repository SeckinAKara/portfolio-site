import { Full_Poem, Line_Alignment, Word } from "src/app/poem/poem_classes";

let full_poem_text = [
"no way, you too?!",
"I thought it was just me down here",
"holding up the whole world",
"clearly nobody else is trying too hard",
"while I tie down the earth with chains and rope",
"just to keep it from jittering so much",
"damn, see I thought nobody else was listening ",
"glad there was someone else in the forest hearing those bodies fall",
"though it echoed in me all the same",
"",
"fuck, we really did make it here",
"the end of the road",
"those disaster movie boyfriends, that's us",
"straddling this",
"this confluence of rubber paths that feel oddly like skin",
"all of those tree branches and none of them held us back",
"those pregnancies terminated with error codes?",
"graves decorated with kindergarten diplomas",
"bones melting out of the ground where we gingerly placed them",
"this arrhythmia in my soul ",
"it accompanies the sunrise every morning ",
"so I usually sleep til noon",
"",
"drugs help",
"a hell of a lot, honestly",
"no hard shit, though",
"I'm probably smoking weed right now",
"this caffeine is nice, but it's a bit confrontational",
"it sets me going, body ticking like a clock",
"I don't need to be reminded about life's lack of a pause button",
"we really don't have much left to plan for",
"",
"I think I'm just gonna get really weird",
"why not? at this point? in this economy?",
"fuck it, let's be it all",
"be indelible ",
"if you look at the night sky, how many copies of yourself do you see?",
"make the stars remember you",
"they've seen so much",
"so you'll have to really stand out",
"better be every nook and cranny of yourself",
"",
"damn, isn't it tragic",
"how soon the world ends",
"go get the molly"
]

export const full_poem = new Full_Poem();
full_poem.parsePoem("love in the times of climate change", full_poem_text, "November 2018", Line_Alignment.LEFT);
full_poem.lines[5].words[5].italicized = true;
full_poem.lines[14].words[1] = new Word("confluence", '', ' ', 'junction of rivers', [], [0], ['kon', 'flU', '.ns'], ['CON', 'floo', 'ince']);
full_poem.lines[19].words[1] = new Word("arrhythmia", '', ' ', 'irregular heartbeat', [], [1], ['.', 'riD', 'mE', '.'], ['uh', 'RITH', 'mia']);
full_poem.lines[35].words[1] = new Word("indelible", '', ' ', 'impossible to delete', [], [1], ['in', 'del', 'i', 'b.l'], ['in', 'DELL', 'ible']);
full_poem.lines[44].words[3] = new Word("molly", '', ' ', 'MDMA/ecstasy');
