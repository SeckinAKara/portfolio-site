import { PoemMap, Full_Poem, poem_map } from "src/app/poem/poem_classes";
import { full_poem as coming_out_depressive } from "./coming_out_depressive";
import { full_poem as parents_house_mine } from "./parents_house_mine";
import { full_poem as pupas } from "./pupas";
import { full_poem as airplane_tray_table } from './airplane_tray_table';
import { full_poem as dust_bunny } from './dust_bunny';
import { full_poem as happy_coming_out } from './happy_coming_out';

let full_poem_index: poem_map = {'all_poems':  new Full_Poem()};
let valid_poem_index: poem_map = {};
full_poem_index['coming_out_depressive'] = coming_out_depressive;
valid_poem_index['coming_out_depressive'] = coming_out_depressive;

full_poem_index['parents_house_mine'] = parents_house_mine;
valid_poem_index['parents_house_mine'] = parents_house_mine;

full_poem_index['pupas'] = pupas;
valid_poem_index['pupas'] = pupas;

full_poem_index['airplane_tray_table'] = airplane_tray_table;
valid_poem_index['airplane_tray_table'] = airplane_tray_table;

full_poem_index['dust_bunny'] = dust_bunny;
valid_poem_index['dust_bunny'] = dust_bunny;

full_poem_index['happy_coming_out'] = happy_coming_out;
valid_poem_index['happy_coming_out'] = happy_coming_out;

export const full_poem_map:PoemMap = new PoemMap(full_poem_index);
export const valid_poem_map:PoemMap = new PoemMap(valid_poem_index);