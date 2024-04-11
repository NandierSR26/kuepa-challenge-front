import { IUser } from "./user";

export interface IMessage {
  from: string;
  to: string;
  text: string;
  file: string;
  createdAt: string;
  updatedAt: string
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