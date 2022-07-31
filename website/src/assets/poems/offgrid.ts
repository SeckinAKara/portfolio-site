import { Full_Poem, Line, Line_Alignment, Word } from "../../app/poem/poem_classes";

let full_poem_text = [
"my pronouns are plural because we are",
"i birth multitudes with every wrist flip",
"i raise armies with every hair flick",
"i write manifestos with my ten thousand middle fingers",
"i build a homeless shelter for each of my dead friends",
"",
"my consciousness can only be mapped in 3D",
"shaded in bold pinks and apologetic blues",
"separated by striations of purples and greens",
"you told me they were borders, so i made them highways",
"fashioned your whips into hair ties",
"tore your blouses into battle flags",
"contoured my face with my tears ",
"and molded my questions into my answers",
"my nail polish only chips off so i can donate it to trans girls",
"to cover up their fingers, scratched and dirtied",
"from clawing their way out of tartarus",
"i shave my beard and glue it to the battle-torn faces of trans boys",
"to hide the stretch marks around their mouths",
"from smiling under the weight of their past",
"and all of us collect stardust and weave it into our names",
"we are the unconsenting artists of self",
"painting canvases with the stones they threw at us",
"and crafting music out of the skeletons they made us",
"we are the arbiters of a revolution",
"forty-six chromosomes in the making",
"",
"the future will not be determined in boxes",
"it will be determined in a boxing ring",
"you turned the marketplace of ideas into a slave auction",
"so we turned our shackles into friendship bracelets",
"and christened them “family”",
"you deformed our cultures into diagnoses",
"and built us cages made of dictionaries",
"so we found solace in the comfort of no man’s land",
"and dyed our hair black as jets so we could fly",
"",
"misgender me",
"i am the midpoint of men and women",
"i am an omen",
"so get fuckin ready"
]

export const full_poem = new Full_Poem();
full_poem.parsePoem("offgrid", full_poem_text, "March 2018", Line_Alignment.LEFT);
full_poem.lines[1].words[2] = new Word("multitudes", '', ' ', 'crowds of people', [], [0], ['mVl', 'ti', 'tUdz'], ['MULL', 'ti', 'tudes']);
full_poem.lines[8].words[2] = new Word("striations", '', ' ', 'small parallel grooves in rock layers', [], [1], ['strI', "A", 'S.nz'], ['stry', 'Ations']);
full_poem.lines[16].words[6] = new Word("tartarus", '', '', 'bottom layer of hell in Greek mythology', [], [0], ['taR', 't.', 'r.s'], ['TAR', 'tuh', 'ris']);
full_poem.lines[21].words[3] = new Word("unconsenting", '', ' ', 'unwilling, not ready', [], [0, 2], ['Vn', 'k.n', 'sen', 'tiN'], ['UN', 'con', 'SENTing']);
full_poem.lines[24].words[3] = new Word("arbiters", '', ' ', 'decision-makers, leaders', [], [0], ['aR', 'bi', 't.Rz'], ['AR', 'bitters']);
full_poem.lines[34].words[3] = new Word("solace", '', ' ', 'comfort, relief', [], [0], ['sol', '.s'], ['SOLL', 'iss']);
full_poem.lines[37].words[0] = new Word("misgender", '', ' ', 'call someone by the wrong gender', [], [1], ['mis', 'jen', 'd.R'], ['miss', 'GENder']);
