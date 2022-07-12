  // See ipa-guide.ts for ASCII phonetic layout

export enum Language {
  ENGLISH = 1,
  SPANISH,
  JAPANESE,
  TURKISH,
  FRENCH,
  GERMAN,
  CHINESE,
  PICTOGRAPH
}

export enum Relationship_Type {
  SOUND = 1,
  VISUAL,
  GRAMMATICAL,
  MEANING,
  LANGUAGE,
  REFERENCE
}

export enum Line_Alignment {
  LEFT = 1,
  CENTER,
  RIGHT,
  JUSTIFY,
  FREEFORM
}

export class Pronunciation {
  ipa: string[];
  spelled: string[];
  english: boolean;
  stressed_syllables: number[];

  constructor(ipa: string[], stressed_syllables: number[] = [0], spelled: string[] = [], english: boolean = true) {
      this.ipa = ipa;
      this.stressed_syllables = stressed_syllables;
      this.spelled = spelled;
      this.english = english;
  }
}


export type punctuation_map = {
  [key: string]: number[]
}

export class Word {
  spelling: string;
  pronunciation: Pronunciation;
  left_separator: string;
  right_separator: string;
  primary_meaning: string;
  other_meanings: string[];
  language: Language;
  punctuation: punctuation_map;
  capitalization: number[];

  constructor(
              spelling: string, pronunciation: Pronunciation, left_separator: string = "", right_separator: string = " ", 
              primary_meaning: string = '', other_meanings: string[] = [], language: Language = Language.ENGLISH,
              punctuation:punctuation_map = {}, capitalization:number[] = []
      ) {
      this.spelling = spelling;
      this.pronunciation = pronunciation;
      this.primary_meaning = primary_meaning;
      this.other_meanings = other_meanings;
      this.language = language;
      this.left_separator = left_separator;
      this.right_separator = right_separator;
      this.punctuation = punctuation;
      this.capitalization = capitalization;
  }

  public rightSeparator(char: string): Word {
      let return_word = this.copyWord();
      return_word.right_separator = char;
      return return_word;
  }
  public leftSeparator(char: string): Word {
      let return_word = this.copyWord();
      return_word.left_separator = char;
      return return_word;
  }
  public capitalize(indices: number[]): Word {
    let return_word = this.copyWord();
    indices.forEach(i => {
      return_word.spelling = 
                              return_word.spelling.substring(0, i)
                            + return_word.spelling.substring(i, i+1).toUpperCase()
                            + return_word.spelling.substring(i+1)
    });
    return return_word;
  }

  public copyWord(): Word {
    let newWord = new Word(
      this.spelling,
      this.pronunciation,
      this.left_separator,
      this.right_separator,
      this.primary_meaning,
      this.other_meanings,
      this.language,
      this.punctuation,
      this.capitalization
      );
    return newWord;
  }
}

export class Line {
  words: Word[];
  align: Line_Alignment;

  constructor(words: Word[], align: Line_Alignment){
      this.words = words;
      this.align = align;
  }
}

export class Full_Poem {
  title: string;
  lines: Line[];
  creation_time: string;

  constructor(title: string, lines: Line[], creation_time = "N/A") {
    this.title = title;
    this.lines = lines;
    this.creation_time = creation_time;
  }
}

export type poem_map {
  [key: String]: Full_Poem[];
}

export class PoemMap {
  poem_map:poem_map = {"index": new Full_Poem("index", [new Line([new Word('', new Pronunciation(['']))], Line_Alignment.LEFT)])};

  constructor() { }
}

export class Relationship {
  members: Word[];
  strong: boolean;
  type: Relationship_Type;

  constructor(members: Word[], strong: boolean, type: Relationship_Type) {
      this.members = members;
      this.strong = strong;
      this.type = type;
  }
}
