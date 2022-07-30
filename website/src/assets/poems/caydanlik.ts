import { Full_Poem, Line, Word } from "../../app/poem/poem_classes";

let full_poem_text = [
"aramızdaki halının üstünde",
"akşam yemeği yiyoruz.",
"bütüm ailem beraber.",
"",
"ninem çaydanlıktan çay döküyor.",
"bej kan uzun bardağın içinde oturup,",
"ayna oluşturuyor.",
"",
"herkes beklemeden lavı içerler.",
"iki küp şeker dişlerinde takırdar,",
"dilleri çay ile dans edip, hava ile ıslık çalıyor.",
"",
"şeker ile ateşi karıştırmak türklere mahsus bir şeydir,",
"ve kan damarlarının içinde, sıcak kanları",
"ağır ağır bej oluyor."
]

export const full_poem = new Full_Poem();
full_poem.parsePoem("çaydanlık", full_poem_text, "Spring 2019");