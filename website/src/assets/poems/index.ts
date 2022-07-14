import { PoemMap, Full_Poem, poem_map, Line, Word, Pronunciation, Line_Alignment } from "src/app/poem/poem_classes";
import { coming_out_depressive } from "./coming_out_depressive";
import { parents_house_mine } from "./parents_house_mine";
import { pupas } from "./pupas";
import { airplane_tray_table } from './airplane_tray_table';
import { dust_bunny } from './dust_bunny';

let poem_index:poem_map = {"index": new Full_Poem()};
poem_index['coming_out_depressive'] = coming_out_depressive;
poem_index['parents_house_mine'] = parents_house_mine;
poem_index['pupas'] = pupas;
poem_index['airplane_tray_table'] = airplane_tray_table;
poem_index['dust_bunny'] = dust_bunny;

export const index:PoemMap = new PoemMap(poem_index);