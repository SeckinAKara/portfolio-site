import { PoemMap, Full_Poem, poem_map } from "src/app/poem/poem_classes";
import { full_poem as coming_out_depressive } from "./coming_out_depressive";
import { full_poem as parents_house_mine } from "./parents_house_mine";
import { full_poem as pupas } from "./pupas";
import { full_poem as airplane_tray_table } from './airplane_tray_table';
import { full_poem as dust_bunny } from './dust_bunny';
import { full_poem as happy_coming_out } from './happy_coming_out';
import { full_poem as discourse_generation } from './discourse_generation';
import { full_poem as forget_me } from './forget_me';
import { full_poem as gingerbread_covid } from './gingerbread_covid';
import { full_poem as seventeen_apologies } from './seventeen_apologies';
import { full_poem as assigned_ultimatum } from './assigned_ultimatum';

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

full_poem_index['discourse_generation'] = discourse_generation;
valid_poem_index['discourse_generation'] = discourse_generation;

full_poem_index['forget_me'] = forget_me;
valid_poem_index['forget_me'] = forget_me;

full_poem_index['gingerbread_covid'] = gingerbread_covid;
valid_poem_index['gingerbread_covid'] = gingerbread_covid;

full_poem_index['seventeen_apologies'] = seventeen_apologies;
valid_poem_index['seventeen_apologies'] = seventeen_apologies;

full_poem_index['assigned_ultimatum'] = assigned_ultimatum;
valid_poem_index['assigned_ultimatum'] = assigned_ultimatum;

export const full_poem_map:PoemMap = new PoemMap(full_poem_index);
export const valid_poem_map:PoemMap = new PoemMap(valid_poem_index);