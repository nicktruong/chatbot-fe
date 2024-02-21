import type { UserRole } from 'enums';

export interface UserInfo {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  createdAt: string;
  updatedAt: string;
}
