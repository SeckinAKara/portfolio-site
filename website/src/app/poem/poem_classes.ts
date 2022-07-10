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

export class Word {
  spelling: string;
  pronunciation: Pronunciation;
  primary_meaning: string;
  other_meanings: string[];
  language: Language;
  left_separator: string;
  right_separator: string;

  constructor(
              spelling: string, pronunciation: Pronunciation, left_separator: string = "", right_separator: string = " ", 
              primary_meaning: string = '', other_meanings: string[] = [], language: Language = Language.ENGLISH
      ) {
      this.spelling = spelling;
      this.pronunciation = pronunciation;
      this.primary_meaning = primary_meaning;
      this.other_meanings = other_meanings;
      this.language = language;
      this.left_separator = left_separator;
      this.right_separator = right_separator;
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

  constructor(title: string, lines: Line[]) {
    this.title = title;
    this.lines = lines;
  }
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

export type poem_map = {
    [key: string]: Full_Poem
}
