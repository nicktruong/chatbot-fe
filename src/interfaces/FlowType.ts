import type { Base } from '.';
import type { FlowTypeEnum } from '@/enums';

export interface FlowType extends Base {
  id: string;
  desc: string;
  type: FlowTypeEnum;
}
