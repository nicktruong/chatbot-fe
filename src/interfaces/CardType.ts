import { CardTypeEnum, GroupTypeEnum } from '@/enums';

import { Base } from './Base';

export interface CardType extends Base {
  name: string;
  desc: string;
  type: CardTypeEnum;
  groupType: GroupTypeEnum;
}
