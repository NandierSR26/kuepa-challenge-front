import { IUser } from "./user";

export interface IMessage {
  from:             IUser;
  to:               string[] | string;
  text:             string;
  file:             string;
  destination_type: string;
  createdAt:        string;
  updatedAt:        string;
  id:               string;
}

export interface IChatState {
  uid: string;
  activeChat: string | null,
  users: IUser[],
  messages: IMessage[],
}

export interface IChatTypes {
  LoadedUsers: string;
  activateChat: string;
  newMessage: string;
  loadMessages: string;
  closeSesion: string;
}

export interface IChatResponse {
  success: boolean;
  data:    IMessage[];
  message: string;
}
