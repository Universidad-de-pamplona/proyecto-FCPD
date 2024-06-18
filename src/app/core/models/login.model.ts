export interface LoginData {

  email: string;
  password: string

}
export interface  LoginResponse  {

  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
  name: string;
  userId: number;
}
