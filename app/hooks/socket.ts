import { useEffect } from "react";
import { io, Socket } from "socket.io-client";
import create from "zustand";

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

enum SocketEvents {
  connect = "connect",
  disconnect = "disconnect",
  markets = "markets",
  ammInfo = "amm_info",
  pairPrices = "pair_prices",
  userPositions = "user_positions",
  ammPositions = "amm_positions",
}

const hasReservedEvent = (channel: string) =>
  [SocketEvents.connect, SocketEvents.disconnect].includes(
    channel as SocketEvents
  );

const addChannelCommunication = (
  socket: Socket,
  channel: string,
  listener: (args: any) => void,
  param?: string
) => {
  param && socket.emit(channel, param);
  socket.on(channel, listener);

  return () => {
    !hasReservedEvent(channel) && socket.emit(channel, "STOP");
    socket.off(channel, listener);
  };
};

export const useSocketConnection = () => {
  const { socket, connected, setConnected } = useSocketStore((state) => state);
  const { setMarkets } = useStore((state) => state.markets);

  useEffect(() => {
    if (connected) return;

    return addChannelCommunication(socket, SocketEvents.connect, () =>
      setConnected(true)
    );
  }, [socket, connected, setConnected]);

  useEffect(() => {
    if (connected) return;

    return addChannelCommunication(socket, SocketEvents.disconnect, () =>
      setConnected(false)
    );
  }, [socket, connected, setConnected]);

  useEffect(() => {
    if (connected) return;

    return addChannelCommunication(socket, SocketEvents.markets, (data) =>
      setMarkets(data)
    );
  }, [socket, connected, setMarkets]);
};

export const useSocketAmmInfo = (address: string) => {
  const { socket, connected } = useSocketStore((state) => state);
  const { setAmmInfo } = useStore((state) => state.amm);
  const { pair } = useStore((state) => state.ui); // TODO: remove when ready

  useEffect(() => {
    if (!connected) return;

    return addChannelCommunication(
      socket,
      SocketEvents.ammInfo,
      setAmmInfo,
      address
    );
  }, [address, connected, socket, setAmmInfo, pair]);
};

export const useSocketPriceFeed = (feedKey: string) => {
  const { socket, connected } = useSocketStore((state) => state);
  const { setPriceFeed } = useStore((state) => state.priceHistory);
  const { pair } = useStore((state) => state.ui); // TODO: remove when ready

  useEffect(() => {
    if (!connected) return;

    return addChannelCommunication(
      socket,
      SocketEvents.pairPrices,
      setPriceFeed,
      feedKey
    );
  }, [feedKey, connected, socket, setPriceFeed, pair]);
};

export const useSocketUserPositions = (user: string) => {
  const { socket, connected } = useSocketStore((state) => state);
  const { setPositions } = useStore((state) => state.userPositions);

  useEffect(() => {
    if (!connected) return;

    return addChannelCommunication(
      socket,
      SocketEvents.userPositions,
      setPositions,
      user
    );
  }, [user, connected, socket, setPositions]);
};

export const useSocketRecentPositions = (amm: string) => {
  const { socket, connected } = useSocketStore((state) => state);
  const { setPositions } = useStore((state) => state.recentPositions);
  const { pair } = useStore((state) => state.ui); // TODO: remove when ready

  useEffect(() => {
    if (!connected) return;

    return addChannelCommunication(
      socket,
      SocketEvents.ammPositions,
      setPositions,
      amm
    );
  }, [amm, connected, socket, setPositions, pair]);
};
