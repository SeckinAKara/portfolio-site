import { Full_Poem, Line_Alignment, Word } from "src/app/poem/poem_classes";

let full_poem_text = [
"volando estaba, sobre el suelo plano.",
"él se sentía el viento, pero el bicho",
"no se dio cuenta del cielo tan llano.",
"decidió aterrizar por un capricho.",
"",
"echó una mirada a un lago a su lado.",
"vio a un bicho nadando, vio alas plegadas.",
"qué triste sería vivir mojado.",
"despegó con patas secas, tapadas.",
"",
"orgulloso, nadaba todavía",
"el bicho acuático. no comprendía",
"el cielo. qué vacío era, qué seco.",
"",
"el bicho bajó, moviéndose tal",
"y como el bicho detrás del cristal.",
"ambos seguían flotando en sus huecos."
]

export const full_poem = new Full_Poem();
full_poem.parsePoem("espejo", full_poem_text, "March 5, 2018", Line_Alignment.CENTER);