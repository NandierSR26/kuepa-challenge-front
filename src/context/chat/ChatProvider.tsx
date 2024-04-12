import { useCallback, useReducer } from "react";
import { ChatReducer } from "./ChatReducer";
import { ChatContext } from "./chatContext";
import { IChatResponse, IChatState } from "../../interfaces/chat";
import axios from "axios";
import { types } from "../../types/types";
import { scrollToBottom } from "../../utils/scroll";


const initialState: IChatState = {
    uid: '',
    activeChat: null,
    users: [],
    messages: [],
}

export const ChatProvider = ({ children }: any) => {

    const [chatState, dispatch] = useReducer(ChatReducer, initialState);

    const getGroupChat = useCallback(async() => {
        try {
            const token = localStorage.getItem('token');
            const { data: { data, message, success } } = await axios.get<IChatResponse>(`${import.meta.env.VITE_API_URL}/chat/group`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (success) {
                dispatch({
                    type: types.loadMessages,
                    payload: data
                })
                scrollToBottom()
            }
            
        } catch (error) {
            console.log(error)
        }
    }, [ dispatch ]);

    return (
        <ChatContext.Provider value={{
            chatState,
            dispatch,
            getGroupChat
        }}>
            {children}
        </ChatContext.Provider>
    )
}