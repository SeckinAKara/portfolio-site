import { Full_Poem, Line, Line_Alignment, Word } from "../../app/poem/poem_classes";

let full_poem_text = [
"when my grandmother died",
"illiterate",
"in a turkish hospital",
"we had never had a conversation",
"us two",
"i don't know when she last thought of me",
"if her memories of me were swallowed by the atlantic",
"if her name was taken from my bag in customs",
"but i hope when i die, i remember her",
"the weight of her eyes on me when i boarded the plane to depart",
"the incomprehensible blessings she murmured around the dinner rug",
"how she brought me water from the hajj",
"and how the only response i could formulate was “this water is very good”",
"i wonder if she knew my grandfather would follow her the next year",
"i wonder if she was finished",
"",
"i think when we're born, we know everything",
"we spend 9 months twisting our umbilical cord into arcane cursive",
"transcribing knowledge we never had to learn",
"a looped and twirled chronology of to be",
"and when the doctor cuts us free",
"we forget",
"maybe that's why babies cry",
"having hit “new game” instead of “continue”",
"but maybe it's more fun this way",
"",
"when i tried to kill myself",
"my laundry was in the washer",
"the clothes had 34 minutes left",
"i whispered to the knife",
"“so do i”",
"with 28 minutes left i put it back in the drawer",
"i’ve always been impatient",
"",
"if you listen when it rains",
"you can hear the droplets applauding you",
"it's our party",
"open invite",
"and hey, even with all the traffic",
"you made it",
"i’m so proud",
"."    
]

export const full_poem = new Full_Poem();
full_poem.parsePoem("musings on immaculate", full_poem_text, "March 2018", Line_Alignment.CENTER);
full_poem.lines[17].words[9] = new Word("arcane", '', '', 'mysterious, ancient', [], [1], ['aR', 'kAn'], ["ar", "CANE"]);
full_poem.lines[18].words[0] = new Word("transcribing", '', '', 'writing down', [], [1], ['tran', 'skrI', 'biN'], ['trans', 'SCRIBE', 'ing']);
full_poem.lines[19].words[4] = new Word("chronology", '', '', 'timeline', [], [1], ['krO', 'nol', 'o', 'jE'], ['crone', 'OLogy']);
