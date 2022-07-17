import { Full_Poem, Word } from "src/app/poem/poem_classes";

let full_poem_text = [
"our soul is a little dvd of our lives",
"labeled with our name on the front in sharpie on duct tape",
"burned anew each day with every moment we append",
"glimmering iridescence packaged in a floppy beanbag",
"",
"a body’s loss of control is death",
"sear the skin, lacerate the tendons, smash the bones",
"tear apart its pieces and spray them asunder",
"a soul’s loss of control is torture",
"scatter its scenes, its moments, its episodes",
"sneeringly trace its outline onto a thousand paper airplanes",
"lock its past in a vault and give the key to only the shadows",
"",
"a soul is its own hamartia",
"turn every mirror into a theatre screen",
"airing its worst holiday special",
"its accidentally offensive episode",
"the scene that got it banned for a season",
"and made two of the lead actors quit in protest",
"turn every job interview into a reminder",
"of the time the camera ran too long",
"and the lead actor swore on live tv",
"thinking they had gotten a reprieve",
"a moment of privacy",
"swap every highlight reel with bloopers",
"make every promotional poster the nip slip",
"turn the writers into backseat drivers",
"strapped in",
"hurtling towards an oncoming train",
"",
"the death of a soul is not through deletion",
"but through eternal, disjoint preservation"
]

export const full_poem = new Full_Poem();
full_poem.parsePoem("forget me", full_poem_text, "March 2018");
full_poem.lines[13].words[5] = new Word("hamartia", '', '', 'fatal flaw', [], [1], ['h.', 'maR', 'S.'], ['huh', 'MARSH', 'uh']);