import { createContext } from "react";
import { Socket } from "socket.io-client";

interface SocketContextProps {
  socket: Socket | null;
  online: boolean
}

export const SocketContext = createContext({} as SocketContextProps);
