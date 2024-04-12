export interface IUser {
  id: string;
  name: string;
  username: string;
  rol: string;
  photo?: string;
  online: boolean;
}


export interface IAuthResponse {
  success: boolean;
  data: Data;
  message: string;
}

export interface Data {
  user: IUser;
  token: string;
}

export interface ILoginData {
  username: string;
  password: string;
}

export interface IRegisterData {
  name: string;
  username: string;
  password: string;
  rol: string
  file?: File | null;
}