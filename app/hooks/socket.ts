import { useCallback, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

import { useStore } from "@/stores/root";
import {
  Markets,
  Amm,
  PriceUpdate,
  Position,
  PositionEvent,
} from "@/types/api";

export const socket = io(process.env.API_URL!);

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
  const [connected, setConnected] = useState(false);
  const { setMarkets } = useStore((state) => state.markets);

  const handleMarkets = useCallback(
    (data: Markets) => {
      setMarkets(data);
    },
    [setMarkets]
  );

  useEffect(() => {
    addChannelCommunication(socket, "markets", (data) => handleMarkets(data));
    addChannelCommunication(socket, "connect", () => setConnected(true));
    addChannelCommunication(socket, "disconnect", () => setConnected(false));
  }, [handleMarkets]);

  return {
    socket,
    connected,
  };
};

export const useSocketAmmInfo = (address: string) => {
  const { connected, socket } = useSocketConnection();
  const { setAmmInfo } = useStore((state) => state.amm);

  const handleAmmInfo = useCallback(
    (data: Amm) => {
      setAmmInfo(data);
    },
    [setAmmInfo]
  );

  useEffect(() => {
    if (connected)
      addChannelCommunication(socket, "amm_info", handleAmmInfo, address);
  }, [address, connected, socket, handleAmmInfo]);
};

export const useSocketPriceFeed = (feedKey: string) => {
  const { connected, socket } = useSocketConnection();
  const { setPriceFeed } = useStore((state) => state.priceHistory);

  const handlePriceFeed = useCallback(
    (data: { history: PriceUpdate[] }) => {
      setPriceFeed(data.history);
    },
    [setPriceFeed]
  );

  useEffect(() => {
    if (connected)
      addChannelCommunication(socket, "pair_prices", handlePriceFeed, feedKey);
  }, [feedKey, connected, socket, handlePriceFeed]);
};

export const useSocketUserPositions = (user: string) => {
  const { connected, socket } = useSocketConnection();
  const { setPositions } = useStore((state) => state.userPositions);

  const handlePositions = useCallback(
    (data: Position[]) => {
      setPositions(data);
    },
    [setPositions]
  );

  useEffect(() => {
    if (connected)
      addChannelCommunication(socket, "user_positions", handlePositions, user);
  }, [user, connected, socket, handlePositions]);
};

export const useSocketRecentPositions = (amm: string) => {
  const { connected, socket } = useSocketConnection();
  const { setPositions } = useStore((state) => state.recentPositions);

  const handlePositions = useCallback(
    (data: PositionEvent[]) => {
      setPositions(data);
    },
    [setPositions]
  );

  useEffect(() => {
    if (connected)
      addChannelCommunication(socket, "amm_positions", handlePositions, amm);
  }, [amm, connected, socket, handlePositions]);
};
