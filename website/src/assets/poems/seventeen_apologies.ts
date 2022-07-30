import { Full_Poem, Word } from "src/app/poem/poem_classes";

let full_poem_text = [
"among my sins i often count my birth",
"so rude of me to interrupt lunch",
"i dole my sorries out in milliliters",
"my sighs are the most efficient renewable resource",
"",
"desecrated monoliths are my tribesmen",
"and together we weave costumes of shimmering memory",
"my dances are silent, secret, never sordid",
"the guest list is scattered somewhere unspeakable",
"among long-lost fairytale villains",
"bankrupt visions of malaised monster teeth",
"my middle name is alcohol or something",
"i probably smoke too much weed",
"",
"at my funeral, serve cream puffs",
"vegan, gluten-free, because the afterlife is all-inclusive",
"and even though i love chocolate, make them vanilla",
"instead of crying",
"laugh at my coffin",
"maybe that’ll finally get a rise out of me"
]

export const full_poem = new Full_Poem();
full_poem.parsePoem("seventeen apologies and a joke", full_poem_text, "March 2018");
full_poem.lines[2].words[1] = new Word("dole", '', ' ', "give out", [], [0], ['dOl'], ['DOLE']);
full_poem.lines[2].words[6] = new Word("milliliters", '', '', "1/1000th of a liter", [], [0, 2], ['mil', '.', 'lE', 't.Rz'], ['MILLuh', 'leaders']);
full_poem.lines[5].words[0] = new Word('desecrated', '', ' ', 'vandalized, violated', [], [0], ['des', '.', 'krA', 't.d'], ['DESSuh', 'crated']);
full_poem.lines[5].words[1] = new Word('monoliths', '', ' ', 'giant stone statues', [], [0], ['mon', '.', 'liTs'], ['MON', 'uh', 'liths']);
full_poem.lines[7].words[6] = new Word('sordid', '', '', 'immoral, dirty', [], [0], ['sOR', 'did'], ['SORE', 'did']);
full_poem.lines[10].words[3] = new Word('malaised', '', ' ', 'uneasy for no reason', [], [1], ['m.', 'lAzd'], ['muh', 'LAZED']);