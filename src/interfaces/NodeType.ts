import type { Base } from '.';

import type { NodeTypeEnum } from '@/enums';

export interface NodeType extends Base {
  id: string;
  desc: string;
  defaultX: number;
  defaultY: number;
  type: NodeTypeEnum;
}
