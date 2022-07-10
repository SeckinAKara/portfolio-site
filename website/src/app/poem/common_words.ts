import { Pronunciation, Word } from "./poem_classes";


let the = new Word('the', new Pronunciation(['D.']));
let but = new Word('but', new Pronunciation(['bVt']));
let yet = new Word('yet', new Pronunciation(['yet']));
let it = new Word('it', new Pronunciation(['it']));
let still = new Word('still', new Pronunciation(['stil']));
let so = new Word('so', new Pronunciation(['sO']));
let i = new Word('i', new Pronunciation(['I']));
let i_m = new Word("i'm", new Pronunciation(['Im']));

export const common_words = {
    'the': the,
    'but': but,
    'yet': yet,
    'it': it,
    'still': still,
    'so': so,
    'i': i,
    "i'm": i_m
}