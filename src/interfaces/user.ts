export interface IUser {
  id: string;
  name: string; 
  username: string;
  rol: string;
  photo?: string;
  online: boolean;
}


export interface ILoginResponse {
  success: boolean;
  data:    Data;
  message: string;
}

export interface Data {
  user:  IUser;
  token: string;
}

export interface ILoginData {
  username: string;
  password: string;
}