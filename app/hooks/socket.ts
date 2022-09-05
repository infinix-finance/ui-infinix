import { useCallback, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

export const socket = io(process.env.API_URL!);

const startCommunication = (
  socket: Socket,
  channel: string,
  listener: (args: any[]) => void,
  param?: string
) => {
  param && socket.emit(channel, param);
  socket.on(channel, listener);

  return () => {
    socket.off(channel, listener);
  };
};

// TODO: we need to figure out whether and how to use this
const stopCommunication = (socket: Socket, channel: string) => {
  socket.emit(channel, "STOP");
};

// TODO: States and console logs should be replaced with slices
// tmp - https://github.com/infinix-finance/ui-infinix/blob/f57d204b1df87eda60ffe97184af48ad818dd003/app/hooks/socket.ts

export const useSocketConnection = () => {
  const [connected, setConnected] = useState(false);

  const handleMarkets = useCallback((data: any) => {
    console.log(data);
  }, []);

  useEffect(() => {
    startCommunication(socket, "markets", (data) => handleMarkets(data));
    startCommunication(socket, "connect", () => setConnected(true));
    startCommunication(socket, "disconnect", () => setConnected(false));
  }, [handleMarkets]);

  return {
    socket,
    connected,
  };
};

export const useSocketAmmInfo = (address: string) => {
  const { connected, socket } = useSocketConnection();

  const handleAmmInfo = useCallback((data: any) => {
    console.log(data);
  }, []);

  useEffect(() => {
    if (connected)
      startCommunication(socket, "amm_info", handleAmmInfo, address);
  }, [address, connected, socket, handleAmmInfo]);
};
