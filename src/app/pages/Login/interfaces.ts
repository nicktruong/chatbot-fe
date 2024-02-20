export interface UserInfo {
  id: string;
  name: string;
  role: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface LoginResponse {
  userInfo: UserInfo;
  accessToken: string;
  refreshToken: string;
}
