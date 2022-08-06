import { Full_Poem, Word } from "src/app/poem/poem_classes";

let full_poem_text = [
"my skin has been starving for 20 years",
"before i knew how to spell eczema, i had to apologize for it",
"for the puzzle pieces of my skull that perched on my shoulders",
"like a flock of spare thoughts",
"for the alligator hidden in my shirt",
"that reached its hands out of my sleeves to touch the world",
"for the elbows that could scratch words on a chalkboard",
"and looked like they’d already erased fifteen others",
"but while i force fed lotion to the dead husk i was born into",
"it remained emaciated",
"",
"when i learned about touch starvation, i didn’t realize",
"that it had been months since i’d voluntarily touched another person",
"that my skin wasn’t starving, it was asphyxiating",
"choking, waiting for someone to breathe life into it again",
"waiting for someone to thaw its arctic crevices",
"waiting for something that hours spent masturbating could never satiate",
"waiting for a reminder of life beyond this dying planet",
"waiting for an embrace",
"maybe that’s why i wear such tight clothes",
"",
"growing up i always cried",
"when i messed up, i would cry while apologizing",
"and then cry while apologizing for crying while apologizing",
"my eyes leaked out all my water",
"as if just to show the world that my body only appeared to be a desert",
"leaving my cracked epidermis in my own rain shadow",
"irrigating my life force to the outside world like a party trick",
"",
"the first time i laid in bed with someone, i cried",
"the first time a boy loved me, i cried",
"i’ve never seen a raindrop as big as me",
"i've never seen a raindrop as lonely as me",
"a puddle in search of the storm that birthed it",
"the first ocean after the ice age",
"the last ocean on mars",
"",
"i wasn’t fluent in spanish until i learned how to say “i’m sorry”",
"lo siento",
"i feel it",
"i feel you, i feel you, i feel you",
"can you feel me?"
]

export const full_poem = new Full_Poem();
full_poem.parsePoem("squeeze", full_poem_text, "March 2018");
full_poem.lines[26].words[3] = new Word("epidermis", '', ' ', "outer layer of skin", [], [2], ['ep', '.', 'd.R', 'mis'], ['eppi', 'DERR', 'miss']);
full_poem.lines[25].words[11].italicized = true;