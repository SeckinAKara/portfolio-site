import { Full_Poem, Line, Line_Alignment, Word } from "src/app/poem/poem_classes";

let full_poem_text = [
"i've constantly failed to fit in your storybooks",
"even with cheap-poolchlorine febreze pages",
"your tales seemed distant, bluetinted, redshifted",
"and they never resolved as i approached",
"i’d make pilgrimages to all the landmarks",
"attend the neighborhood bbqs",
"join the youth soccer teams",
"searching for the stories you would sing",
"and the life you swore was here",
"in the suburbs of York, Pennsylvania.",
"as obsolescence approached from the horizon, i diligently ignored it",
"claimed nobody really left here",
"we all would return for the quaintness",
"and the corn",
"",
"and try as i might, your hand-me-downs never fit",
"all the boats parked in driveways next to unused pools",
"all the housewives parked in mansions next to unused master’s degrees ",
"the superbowl parties",
"the beach",
"fishing",
"every failed main street business was a dent in a dream i still haven't met",
"i found the saddest vision of my future",
"at the center of colossal shimmering skeletons:",
"malls with boarded-up windows",
"drowning in a sea of fucking dippin dots",
"but now the parks are all empty",
"and you banned all the heelies",
"i went to see my old friends",
"but they were either klansmen or corpses",
"the coroner taught kindergarten gym class",
"the uhauls lugged fentanyl corpses",
"every morning the sun rose with its back turned",
"and we swung like trapeze artists",
"over a safety net made of razor wire",
"",
"you hid puritans in the school crawlspace",
"and mocked catholic schools and hicks",
"like you didn't teach out of the same history books",
"like your flag wasn't Amish-Made",
"like we didn't notice when you replaced the flag’s stripes with bars",
"when you wove our history into a cage and called it yours",
"so we, the forced observers, could never touch it",
"i heard you're forming a white student union",
"",
"the saddest part of growing up in a myth",
"is learning that there was never a moral"
]

export const full_poem = new Full_Poem();
full_poem.parsePoem("fuck your suburbs", full_poem_text, "July 2018", Line_Alignment.LEFT);
full_poem.lines[2].words[4] = new Word("bluetinted", '', ' ', "distant mountains appear blue");
full_poem.lines[2].words[5] = new Word("redshifted", '', ' ', "distant objects in outer space appear redder");
full_poem.lines[10].words[1] = new Word("obsolescence", '', ' ', "being obsolete", [], [2], ['ob', 's.', 'les', '.ns'], ['obso', 'LESS', 'ense']);