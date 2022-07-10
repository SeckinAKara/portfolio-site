import { Full_Poem, poem_map } from '../../app/poem/poem_classes';
import { poem as parents_house_mine} from './parents_house_mine';
import { poem as pupas} from './pupas';

export const all_poems:poem_map  = {
    '': new Full_Poem('', []),
    'parents_house_mine': parents_house_mine,
    'pupas': pupas
}