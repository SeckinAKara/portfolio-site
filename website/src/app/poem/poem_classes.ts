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
  stressed_syllables: number[];
  english: boolean;

  constructor(ipa: string[], spelled: string[], stressed_syllables: number[] = [0], english: boolean = true) {
      this.ipa = ipa;
      this.spelled = spelled;
      this.stressed_syllables = stressed_syllables;
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

  full_spelling: string = '';

  constructor(
              spelling: string = '', 
              left_separator: string = "", right_separator: string = "", primary_meaning: string = '', other_meanings: string[] = [],
              stressed_syllables: number[] = [0], ascii_pronunciation: string[] = [], spelled_pronunciation: string[] = [],
              punctuation:punctuation_map = {}, capitalization:number[] = [], language: Language = Language.ENGLISH
      ) {
      this.spelling = spelling;
      this.left_separator = left_separator;
      this.right_separator = right_separator;
      this.primary_meaning = primary_meaning;
      this.other_meanings = other_meanings;
      this.pronunciation = new Pronunciation(ascii_pronunciation, spelled_pronunciation, stressed_syllables);
      this.punctuation = punctuation;
      this.capitalization = capitalization;
      this.language = language;
  }


  public fullSpelling(): string  {
    let full_spelling = this.spelling;
    for (let i=0; i < this.capitalization.length; i++) {
        full_spelling = full_spelling.substring(0, this.capitalization[i])
                             + full_spelling.substring(this.capitalization[i], this.capitalization[i]+1).toUpperCase()
                             + full_spelling.substring(this.capitalization[i]+1);
    }
    let temp_right_sep = ' ';
    if (this.right_separator != '') {
      temp_right_sep = this.right_separator;
    }
    full_spelling = this.left_separator + full_spelling + temp_right_sep;
    return full_spelling;
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
      this.left_separator,
      this.right_separator,
      this.primary_meaning,
      this.other_meanings,
      this.pronunciation.stressed_syllables, this.pronunciation.ipa, this.pronunciation.spelled,
      this.punctuation,
      this.capitalization,
      this.language
      );
    return newWord;
  }
}

export class Line {
  nth: number;
  words: Word[];
  number_of_words: number[];
  align: Line_Alignment;

  constructor(nth: number = 0, words: Word[] = [], align: Line_Alignment = Line_Alignment.LEFT){
    this.nth = nth;  
    this.words = words;
    this.number_of_words = Array(this.words.length).fill(0).map((x,i)=>i);
    this.align = align;
  }
}

export class Full_Poem {
  title: string;
  lines: Line[];
  number_of_lines: number[];
  creation_time: string;

  constructor(title: string = 'index', lines: string[] = [], creation_time = "N/A") {
    this.title = title;
    this.lines = [];
    this.number_of_lines = Array(this.lines.length).fill(0).map((x,i)=>i);
    this.creation_time = creation_time;

    let word_regex = /^(\s*)(\S*)(\s*)$/;
    for (let textline:number = 0; textline < lines.length; textline++) {
      let new_line: Line = new Line(textline, []);
      let split_line: string[] = lines[textline].split(' ');
      for (let textword:number = 0; textword < split_line.length; textword++) {
        let word = split_line[textword]
        let just_text_array = word_regex.exec(word);
        if (just_text_array !== null) {
          let new_left_separator:string = just_text_array[1];
          let just_text:string = just_text_array[2];
          let new_right_separator:string = just_text_array[3];
          let new_word = new Word(just_text, new_left_separator, new_right_separator);
          new_line.words.push(new_word);
        }
      }
      new_line.number_of_words = Array(new_line.words.length).fill(0).map((x,i)=>i);
      this.lines.push(new_line);
    }
    
  }

}

export type poem_map = {
  [key: string]: Full_Poem;
};

export class PoemMap {
  poem_map:poem_map;

  constructor(poem_map:poem_map = {"index": new Full_Poem()}) { 
    this.poem_map = poem_map;
  }
}

export class PoemSettings {
  ascii_pronunciation: boolean;
  rhyme_colors: boolean;
  hovering: number[];
  clicked: number;

  constructor(ascii_pronunciation = false, rhyme_colors = false, hovering = [], clicked = 0) {
    this.ascii_pronunciation = ascii_pronunciation;
    this.rhyme_colors = rhyme_colors;
    this.hovering = hovering;
    this.clicked = clicked;
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
