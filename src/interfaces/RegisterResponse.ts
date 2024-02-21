import type { UserRole } from 'enums';

interface Data {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  createdAt: string;
  updatedAt: string;
}

export interface RegisterResponse {
  data: Data;
}
