import { Pronunciation, Word } from "./poem_classes";


let the = new Word('the', new Pronunciation(['D.']));
let but = new Word('but', new Pronunciation(['bVt']));
let yet = new Word('yet', new Pronunciation(['yet']));
let it = new Word('it', new Pronunciation(['it']));
let still = new Word('still', new Pronunciation(['stil']));
let so = new Word('so', new Pronunciation(['sO']));
let i = new Word('i', new Pronunciation(['I']));
let i_m = new Word("i'm", new Pronunciation(['Im']));
let aren_t = new Word("aren't", new Pronunciation(['aRnt']));
let _with = new Word("with", new Pronunciation(['wiT']));
let and = new Word("and", new Pronunciation(['and']));
let each = new Word("each", new Pronunciation(['EC']));
let you = new Word("you", new Pronunciation(['yU']));
let one = new Word("one", new Pronunciation(['wVn']));
let you_ve = new Word("you've", new Pronunciation(['yUv']));
let none = new Word("none", new Pronunciation(['nVn']));
let all = new Word("all", new Pronunciation(['ol']));
let see = new Word("see", new Pronunciation(['sE']));
let _in = new Word("in", new Pronunciation(['in']));
let your = new Word("your", new Pronunciation(['yR']));
let you_ll = new Word("you'll", new Pronunciation(['yul']));
let world = new Word("world", new Pronunciation(['wRld']));
let just = new Word("just", new Pronunciation(['jVst']));
let own = new Word("own", new Pronunciation(['On']));
let we_re = new Word("we're", new Pronunciation(['wER']));
let eyes = new Word("eyes", new Pronunciation(["Iz"]));
let like = new Word("like", new Pronunciation(["lIk"]));
let we_ll = new Word("we'll", new Pronunciation(['wEl']));
let we = new Word("we", new Pronunciation(['wE']));
let never = new Word("never", new Pronunciation(['ne', 'vR'], [0]));
let die = new Word("die", new Pronunciation(['dI']));
let when = new Word("when", new Pronunciation(['wen']));
let everything = new Word("everything", new Pronunciation(['ev', 'rE', 'TiN'], [0]));
let that = new Word("that", new Pronunciation(["Dat"]));
let is = new Word("is", new Pronunciation(["iz"]));
let even = new Word("even", new Pronunciation(["E", 'v.n'], [0]));
let _as = new Word("as", new Pronunciation(["az"]));
let go = new Word("go", new Pronunciation(["gO"]));
let by = new Word("by", new Pronunciation(["bI"]));
let good = new Word("good", new Pronunciation(["gud"]));
let less = new Word("less", new Pronunciation(["les"]));
let more = new Word("more", new Pronunciation(["mOr"]));
let than = new Word("than", new Pronunciation(["Dan"]));
let to = new Word("to", new Pronunciation(["tU"]));
let I = new Word("I", new Pronunciation(["I"]));
let a = new Word("a", new Pronunciation(["."]));
let from = new Word("from", new Pronunciation(["frVm"]));

export const common_words = {
    'the': the,
    'but': but,
    'yet': yet,
    'it': it,
    'still': still,
    'so': so,
    'i': i,
    "i'm": i_m,
    "aren't": aren_t,
    "with": _with,
    'and': and,
    'each': each,
    'you': you,
    'one': one,
    "you've": you_ve,
    'none': none,
    'all': all,
    'see': see,
    'in': _in,
    'your': your,
    "you'll": you_ll,
    'world': world,
    'just': just,
    'own': own,
    "we're": we_re,
    "eyes": eyes,
    "like": like,
    "we'll": we_ll,
    "we": we,
    "never": never,
    "die": die,
    "when": when,
    "everything": everything,
    "that": that,
    "is": is,
    "even": even,
    "as": _as,
    "go": go,
    "by": by,
    "good": good,
    "less": less,
    "more": more,
    "than": than,
    "to": to,
    "I": I,
    "a": a,
    "from": from


}