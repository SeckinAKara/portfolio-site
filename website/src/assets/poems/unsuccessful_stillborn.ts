import { Full_Poem, Line, Word } from "../../app/poem/poem_classes";

let full_poem_text = [
"first_born means the last of the miscarriages",
"the failure to fail to launch",
"how casper did i slide out, unmangled",
"should i have played dead, become",
"medical waste and tiny ashes",
"should i have become a neck^worn locket",
"a yearly calendar reminder",
"a birthday with no recipient",
"i've never stopped coughing up amniotic fluid",
"the most successful babies never live",
"in death their innocence keeps their mother warm",
"as she launches her heat into orbit",
"and begs for thanks for the auroras",
"the initial sin of breathing, of crying out loud",
"for a lineage of ghosts, of skeletal bare minima",
"of bulimic weight>lifters and mute attorneys",
"of void and hole and dearth and empty",
"of gone and early and not..yet and too..soon",
"of painting the nursery by swallowing a shotgun",
"every shivering organ is jockeying for the knife",
"for a family of plane crash victims",
"huddle to the dirt, burrow, die before you're killed",
"suicide is the coward's choice or a family tradition",
"this is a family of gravestones and sulfurous tears",
"this is a culture of umbilically lynched generalissimos",
"dervish the tears away, merci, shookran, fuck off",
"martyrs make better poets",
"eulogies make better diplomas",
"in death you will finally be worth your self",
"we've had your mausoleum cleaned",
"why won't you get in",
"what's left here for you",
"sleep, orphan, die, fit, meet your maker",
"show her some respect",
"bow, sink, crumple, crunch",
"i have scattered you to the wind",
"and made sure there's no god left to find you"
]

export const full_poem = new Full_Poem()
full_poem.parsePoem("unsuccessful stillborn", full_poem_text, "November 26, 2023");