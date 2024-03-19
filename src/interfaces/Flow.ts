import type { Base, FlowType } from '.';

export interface Flow extends Base {
  id: string;
  name: string;
  flowType?: FlowType;
}
