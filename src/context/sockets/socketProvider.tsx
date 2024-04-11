import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { SocketContext } from './socketContext';
import { useSocket } from '../../hooks/useSocket';


export const SocketProvider = ({ children }: any) => {

    const { socket, online, conectarSocket, desconectarSocket } = useSocket(import.meta.env.VITE_API_URL_SOCKETS);
    const { logged } = useContext(AuthContext);
    // const { dispatch } = useContext(ChatContext);

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

    return (
        <SocketContext.Provider value={{
            socket, 
            online
        }}>
            { children }
        </SocketContext.Provider>
    )
}