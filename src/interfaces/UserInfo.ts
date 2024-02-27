import type { UserRole } from '@/enums';

import type { Session } from '.';

export interface UserInfo {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  createdAt: string;
  updatedAt: string;
}

export interface UserDetail extends UserInfo {
  sessions: Session[];
}
