import type { UserInfo } from '.';

export interface LoginResponse {
  userInfo: UserInfo;
  accessToken: string;
  refreshToken: string;
}
