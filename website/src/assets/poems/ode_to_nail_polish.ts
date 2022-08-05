import { Full_Poem, Line, Line_Alignment, Word } from "../../app/poem/poem_classes";

let full_poem_text = [
"airplane traffic wands for hellos",
"like bioluminescent semaphore",
"i signal my presence with reflections",
"shining satellites dance over my surface",
"these glam-spangled lunulae",
"sketch familiar orbits like a novel",
"a wave, a point, a flick",
"speed of light in a vacuum",
"",
"cuticles like pasta makers",
"extruding my capricious insides",
"more bile than paint",
"the digital vent of the firestorm",
"brewed from my stomach",
"and whirled into my chest",
"i swear if i snap my fingers, i'll ignite",
"soft underbellies caked in soot, not dirt",
"bituminous, choleric deposits",
"filled with energy",
"dusted like galaxies",
"",
"beautify my stigmata",
"decorate my crucifix in goldleaf and tinfoil",
"my lukewarm sanguinity smeared",
"over the nails driven through my extremities",
"daring you to see me",
"daring you to take me"
]

export const full_poem = new Full_Poem();
full_poem.parsePoem("ode to nail polish", full_poem_text, "March 30, 2018", Line_Alignment.CENTER);
full_poem.lines[1].words[1] = new Word("bioluminescent", '', ' ', 'animals that glow in the dark', [], [4], ['bI', 'O', 'lUm', 'i', 'nes', '.nt'], ['bio', 'loomin', 'ESS', 'ent']);
full_poem.lines[1].words[2] = new Word("semaphore", '', ' ', 'using flags on ships to communicate', [], [0], ['sem', '.', 'fOR'], ['SEMma', 'fore']);
full_poem.lines[4].words[2] = new Word("lunulae", '', ' ', 'white part at base of fingernails', [], [0], ['lUn', 'y.', 'lA'], ['LOON', 'you', 'lay']);
full_poem.lines[10].words[2] = new Word("capricious", '', ' ', 'prone to mood swings', [], [1], ['k.', 'prE', 'S.s'], ['cuh', 'PREESH', 'ous']);
full_poem.lines[11].words[1] = new Word("bile", '', ' ', 'green-ish liquid from gallbladder');
full_poem.lines[12].words[1] = new Word("digital", '', ' ', 'relating to fingers/digits');
full_poem.lines[17].words[0] = new Word("bituminous", '', ' ', 'type of coal', [], [1], ['bi', 'CU', 'm.n', '.s'], ['bit', 'CHEW', 'min', 'iss']);
full_poem.lines[17].words[1] = new Word("choleric", '', ' ', 'bad-tempered', [], [1], ['k.', 'lAR', 'ik'], ['cuh', 'LARE', 'ik']);
full_poem.lines[21].words[2] = new Word("stigmata", '', '', "holes in hands from crucifixion", [], [1], ['stig', 'mW', 't.'], ['stig', 'MAW', 'tuh']);
full_poem.lines[23].words[2] = new Word("sanguinity", '', ' ', "cheerfully optimistic, or blood redness", [], [1], ['saN', 'gwin', 'i', 'tE'], ['sang', 'GWIN', 'ity']);

