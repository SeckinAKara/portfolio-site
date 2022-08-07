import { Full_Poem, Line_Alignment, Word } from "src/app/poem/poem_classes";

let full_poem_text = [
    "dragons in the throat",
    "bass pierces sub-sentence",
    "coriolis crowd",
    "(global warming here tonight can you feel it the churning sea of bodies can you see it two glazed donuts in the putty face can you taste it the holy spirit imbibed in a fit of religious transcendence)",
    "forked tongues wave as they pass 85mph in the fast lane",
    "quick glances, seconds chances, the rush enhances it",
    "pinpoint pollock precision",
    "the floor shakes hands with the ceiling and they both turn to vomit on the street",
    "krungthep panties and cheshire boxers",
    "a sudden lack of vacancies, those",
    "(slam the door and slam the bed and rip open the drawer and rip open the package and rip off the outside and rip into the)",
    "flesh-colored crayons and pink pearl erasers",
    "symphony of crimson",
    "the page says moderato but the baton says presto",
    "the flutes crescendo and the tympani",
    "breaks---",
    "",
    "The sun rises thin and haggard,",
    "crepuscular anemia."
]

export const full_poem = new Full_Poem();
full_poem.parsePoem("bacchanal gymnopedia", full_poem_text, "April 2016", Line_Alignment.CENTER);
full_poem.lines[2].words[0] = new Word("coriolis", '', ' ', 'effect of Earth\'s rotation on currents', [], [2], ['kOR', 'E', 'O', 'lis'], ['core', 'ee', 'OLE', 'is']);
full_poem.lines[8].words[0] = new Word("krungthep", '', ' ', 'Thai name for Bangkok', [], [0], ['krUN', 'tep'], ['KROONG', 'tep']);
full_poem.lines[13].words[3] = new Word("moderato", '', ' ', 'musical term, moderate speed', [], [2], ['mo', 'd.R', 'W', 'tO'], ['modder', 'AW', 'toe']);
full_poem.lines[13].words[8] = new Word("presto", '', ' ', 'musical term, very fast');
full_poem.lines[14].words[8] = new Word("crescendo", '', ' ', 'musical term, getting louder', [], [1], ['kr.', 'Sen', 'dO'], ['kruh', 'SHEN', 'doe']);
full_poem.lines[14].words[8] = new Word("tympani", '', ' ', 'huge orchestral drum', [], [0], ['tim', 'p.', 'nE'], ['TIM', 'pun', 'nee']);
full_poem.lines[17].words[5] = new Word("haggard", '', ' ', 'exhausted and unwell', [], [0], ['hag', '.rd'], ['HAG', 'urd']);
full_poem.lines[18].words[0] = new Word("crepuscular", '', ' ', 'relating to twilight', [], [1], ['kr.', 'pus', 'kyU', 'l.R'], ['kreh', 'PUSS', 'kyoolur']);
full_poem.lines[18].words[1] = new Word("anemia", '', ' ', 'iron defficiency', [], [1], ['.', 'E', 'mE', '.'], ['uh', 'neemia']);
full_poem.lines[3].align = Line_Alignment.LEFT;
full_poem.lines[10].align = Line_Alignment.LEFT;