import { Full_Poem, Word } from "src/app/poem/poem_classes";

let full_poem_text = [
"we, adjacent blossoms",
"intertwined in the struggle for water",
"air, shared and twisted between us like vocabulary",
"each of us scrambling for our own atmosphere",
"choking into each other’s mouths and calling it “love”",
"we, f.gs of the same tree",
"plucked unripe by the same gnawing hands",
"living out our primes a decade too late",
"blaming each other for being too easy to digest",
"we, weeds on the same crop",
"uprooting each other before maturity",
"a bucket of crabs, a coliseum full of lions",
"we, victims of the same pesticide",
"rushing to be the last casualty",
"memorizing the odds in order to best them",
"percentages fighting for a source",
"",
"paint me a tapestry",
"a portrait of a homophobe",
"and find a mirror containing none of us"
]

export const full_poem = new Full_Poem();
full_poem.parsePoem("discourse generation", full_poem_text, "June 2019");
full_poem.lines[5].words[1] = new Word("f.gs", '', ' ', 'figs/fags');