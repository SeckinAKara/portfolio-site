import { Full_Poem, Word, Line_Alignment } from "src/app/poem/poem_classes";

let full_poem_text = [
"immolate",
"burn like a venutian",
"Thích Quảng Đức",
"replace your suns with daughters",
"fodder them like a canon",
"there is no heaven for those with no convictions",
"father(,) your doting dotterblotters",
"blot your blood together with an accelerant",
"fatten your dating voters",
"age your relating shooters",
"uNRwA",
"let how the burning bushwick bush",
"got kn/thrown onto itself in a fit",
"of embassadorship embaraz",
"amass ambassadors",
"knell on kneel",
"gnell on a mole",
"g.nu knew",
"u knew",
"he nu",
"k.i.a"
]

export const full_poem = new Full_Poem();
full_poem.parsePoem("when a family annihilator self immolates", full_poem_text, "March 18, 2024", Line_Alignment.CENTER);
