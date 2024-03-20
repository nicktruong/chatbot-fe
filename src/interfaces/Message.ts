import type { Base } from './Base';

export interface Message extends Base {
  value: string;
  sender: string;
  receiver: string;
  clientId: string;
}
