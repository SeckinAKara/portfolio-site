import { Full_Poem, Line_Alignment, Word } from "../../app/poem/poem_classes";

let full_poem_text = [
"katamari, kalahari",
"dac-i-a and thrac-i-a",
"pay-to-vomit, mincemeat skin",
"first ironic soccer win",
"portmanteau and dick-shampoo",
"enchantée and montmartr(u)e",
"tempestine, philustrious",
"pallywood, crepusculous",
"mini-ice-cream, cripple-rot",
"child-beheading parking lot",
"tony hawk's pro skater 5",
"grand theft auto suicide",
"cumberbatch gay porno rite",
"finasteride, malachite",
"hypnopompic dogma shift",
"forced psychiatric imprisonment",
"spongebob dildo, cumbrained scheme",
"faggot dead at 23",
"isis-style cum laude vid",
"martyr me an abbasid",
]

export const full_poem = new Full_Poem()
full_poem.parsePoem("how to catalogue your daemons", full_poem_text, "January 20, 2024", Line_Alignment.CENTER);