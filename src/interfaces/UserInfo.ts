import type { UserRole } from '@/enums';

import type { Base, Session } from '.';

export interface UserInfo extends Base {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

export interface UserDetail extends UserInfo {
  sessions: Session[];
}
