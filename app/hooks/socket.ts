import socketio from "socket.io-client";
import BigNumber from "bignumber.js";
import { useCallback, useEffect, useState } from "react";

import { useStore } from "@/stores/root";

export const socket = socketio("URL");

export const useSocketConnection = () => {
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    socket.on("connect", () => setConnected(true));
    socket.on("disconnect", () => setConnected(false));

    return () => {
      socket.off("connect", () => setConnected(true));
      socket.off("disconnect", () => setConnected(false));
    };
  }, []);

  return {
    socket,
    connected,
  };
};

export const useSocketMessages = () => {
  const { connected, socket } = useSocketConnection();
  const { updateExchangeRate } = useStore((state) => state.rates);
  const { updateBalance } = useStore((state) => state.connection);

  const handleRates = useCallback((rate: BigNumber) => {
    updateExchangeRate(rate);
  }, []);

  const handleNotifications = useCallback((balance: BigNumber) => {
    updateBalance(balance);
  }, []);

  useEffect(() => {
    if (!connected) return;

    // We would handle general messages here, if we wanted to
    // listen to other messages that only a specific feature needs
    // then we could do it next to the feature's custom hook
    socket.on("RATES", handleRates);
    socket.on("NOTIFICATIONS", handleNotifications);

    return () => {
      socket.off("RATES", handleRates);
      socket.off("NOTIFICATIONS", handleNotifications);
    };
  }, [connected]);
};
