import type { Bot, Base, FlowType } from '.';

export interface Flow extends Base {
  id: string;
  name: string;

  bot?: Bot;
  flowType?: FlowType;
}
