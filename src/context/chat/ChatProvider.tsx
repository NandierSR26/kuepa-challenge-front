import React, { createContext, useReducer } from "react";
import { ChatReducer } from "./ChatReducer";
import { ChatContext } from "./chatContext";
import { IChatState } from "../../interfaces/chat";

const initialState: IChatState = {
    uid: '',
    activeChat: null, 
    users: [],
    messages: [],
}

export const ChatProvider = ({ children }: any) => {

    const [chatState, dispatch] = useReducer(ChatReducer, initialState)

    return (
        <ChatContext.Provider value={{
            chatState,
            dispatch
        }}>
            { children }
        </ChatContext.Provider>
    )
}