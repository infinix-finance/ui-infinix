import create from "zustand";
import { useEffect } from "react";
import { io, Socket } from "socket.io-client";

import { useStore } from "@/stores/root";

interface SocketStore {
  socket: Socket;
  connected: boolean;
  setConnected: (connected: boolean) => void;
}

const useSocketStore = create<SocketStore>((set) => ({
  socket: io(process.env.API_URL!),
  connected: false,
  setConnected: (connected: boolean) => set(() => ({ connected })),
}));

const addChannelCommunication = (
  socket: Socket,
  channel: string,
  listener: (args: any) => void,
  param?: string
) => {
  param && socket.emit(channel, param);
  socket.on(channel, listener);

  return () => {
    socket.emit(channel, "STOP");
    socket.off(channel, listener);
  };
};

export const useSocketConnection = () => {
  const { socket, connected, setConnected } = useSocketStore((state) => state);
  const { setMarkets } = useStore((state) => state.markets);

  useEffect(() => {
    if (connected) return;
    addChannelCommunication(socket, "connect", () => setConnected(true));
    addChannelCommunication(socket, "disconnect", () => setConnected(false));
    addChannelCommunication(socket, "markets", (data) => setMarkets(data));
  }, [socket, connected, setConnected, setMarkets]);
};

export const useSocketAmmInfo = (address: string) => {
  const { socket, connected } = useSocketStore((state) => state);
  const { setAmmInfo } = useStore((state) => state.amm);

  useEffect(() => {
    if (!connected) return;
    addChannelCommunication(socket, "amm_info", setAmmInfo, address);
  }, [address, connected, socket, setAmmInfo]);
};

export const useSocketPriceFeed = (feedKey: string) => {
  const { socket, connected } = useSocketStore((state) => state);
  const { setPriceFeed } = useStore((state) => state.priceHistory);

  useEffect(() => {
    if (!connected) return;
    addChannelCommunication(socket, "pair_prices", setPriceFeed, feedKey);
  }, [feedKey, connected, socket, setPriceFeed]);
};

export const useSocketUserPositions = (user: string) => {
  const { socket, connected } = useSocketStore((state) => state);
  const { setPositions } = useStore((state) => state.userPositions);

  useEffect(() => {
    if (!connected) return;
    addChannelCommunication(socket, "user_positions", setPositions, user);
  }, [user, connected, socket, setPositions]);
};

export const useSocketRecentPositions = (amm: string) => {
  const { socket, connected } = useSocketStore((state) => state);
  const { setPositions } = useStore((state) => state.recentPositions);

  useEffect(() => {
    if (!connected) return;
    addChannelCommunication(socket, "amm_positions", setPositions, amm);
  }, [amm, connected, socket, setPositions]);
};
