import { IChatState, IMessage } from "../../interfaces/chat";
import { IUser } from "../../interfaces/user";
import { types } from "../../types/types";

export type Action = { type: string, payload: any}

export const ChatReducer = (state: IChatState , action: Action) => {

    switch (action.type) {
        case types.LoadedUsers:
            return {
                ...state,
                users: [ ...action.payload ]
            }

        case types.activateChat:
            if (state.activeChat === action.payload) return state;
                
            return {
                ...state,
                activeChat: action.payload,
                messages: []
            }

        case types.newMessage:
            if (state.activeChat === action.payload.from ||
                state.activeChat === action.payload.to) {
                return {
                    ...state,
                    messages: [ ...state.messages, action.payload ]
                }
            } else {
                return state;
            }

        case types.loadMessages:
            return {
                ...state,
                messages: [ ...action.payload ]
            }

        case types.closeSesion:
            return {
                uid: '',
                activeChat: null,
                users: [],
                messages: []
            }
    
        default:
            return state;
    }
}