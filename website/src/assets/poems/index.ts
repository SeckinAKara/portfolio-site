import { PoemMap, Full_Poem, poem_map, Line, Word, Pronunciation, Line_Alignment } from "src/app/poem/poem_classes";
import { coming_out_depressive } from "./coming_out_depressive";
import { parents_house_mine } from "./parents_house_mine";
import { pupas } from "./pupas";

let poem_index:poem_map = {"index": new Full_Poem("index", [new Line(0, [new Word('', new Pronunciation(['']))], Line_Alignment.LEFT)])}
poem_index['coming_out_depressive'] = coming_out_depressive;
poem_index['parents_house_mine'] = parents_house_mine;
poem_index['pupas'] = pupas;

export const all_poems:PoemMap = new PoemMap(poem_index);