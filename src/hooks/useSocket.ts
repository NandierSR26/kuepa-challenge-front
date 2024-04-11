import { useCallback, useEffect, useMemo, useState } from 'react';
import { Socket, io } from 'socket.io-client';


export const useSocket = ( serverPath: string ) => {
    
    const [socket, setSocket] = useState<Socket | null>(null)
    const [ online, setOnline ] = useState<boolean>(false);

    const conectarSocket = useCallback(() => {        
        const token = localStorage.getItem('token');
        const socketTemp = io( serverPath, {
            transports: ['websocket'],
            autoConnect: true,
            forceNew: true,
            query: {
                'token': token
            }
        })

        setSocket(socketTemp)
    }, [ serverPath ]);

    const desconectarSocket = useCallback(() => {
        socket?.disconnect();
    }, [ socket ]);

    useEffect(() => {
        setOnline( socket?.connected as boolean );
    }, [socket])

    useEffect(() => {
        socket?.on('connect', () => setOnline( true ));
    }, [ socket ])

    useEffect(() => {
        socket?.on('disconnect', () => setOnline( false ));
    }, [ socket ])

    return {
        socket,
        online,
        conectarSocket,
        desconectarSocket
    }
}
