import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { SocketContext } from './socketContext';
import { useSocket } from '../../hooks/useSocket';
import { ChatContext } from '../chat/chatContext';
import { types } from '../../types/types';


export const SocketProvider = ({ children }: any) => {
    console.log('socket provider')

    const { socket, online, conectarSocket, desconectarSocket } = useSocket(import.meta.env.VITE_API_URL_SOCKETS);
    const { logged } = useContext(AuthContext);
    const { dispatch, getGroupChat } = useContext(ChatContext);

    useEffect(() => {
        if (logged === "yes") {
            conectarSocket();
        }
    }, [logged, conectarSocket])

    useEffect(() => {
        if (logged === 'no') {
            desconectarSocket();
        }
    }, [logged, desconectarSocket])

    // escuchar los cambios en los usuarios conectados
    useEffect(() => {
        socket?.on('list-users', (users) => {
            dispatch({
                type: types.LoadedUsers,
                payload: users
            })
        })
    }, [socket, dispatch])

    useEffect(() => {
        socket?.on('message-to-group', (message) => {
            dispatch({
                type: types.newMessage,
                payload: message
            })
            getGroupChat();
        })
    }, [socket, dispatch])

    return (
        <SocketContext.Provider value={{
            socket,
            online
        }}>
            {children}
        </SocketContext.Provider>
    )
}