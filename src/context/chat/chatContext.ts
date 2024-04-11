import { createContext } from "react";
import { IChatState } from "../../interfaces/chat";
import { Action } from "./ChatReducer";

interface ChatContextProps {
  chatState: IChatState,
  dispatch: React.Dispatch<Action>
}

export const ChatContext = createContext({} as ChatContextProps);