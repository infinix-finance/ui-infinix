import { getPair, PairId } from "@/defi";
import { formatNumber, toFixedNumber } from "@/utils/formatters";
import { useStore } from "@/stores/root";
import { getBalance } from "@/stores/slices/connection";
import { getExchangeRate } from "@/stores/slices/rates";

import {
  calculateBaseAmount,
  calculateQuoteAmount,
  convertBaseToQuoteAmount,
  convertQuoteToBaseAmount,
} from "./helpers";
import { useSocketConnection } from "@/hooks/socket";
import { useEffect } from "react";

export default function useAssetAmount() {
  const { pair } = useStore((state) => state.rates);
  const {
    amounts: { base, quote },
    dummyValue,
    setAmounts,
    setDummy,
  } = useStore((state) => state.tradingSidebar);
  const { socket, connected } = useSocketConnection();
  const exchangeRate = useStore(getExchangeRate);
  const balance = useStore(getBalance);

  const [baseProduct, quoteProduct] = getPair(pair).productIds;
  const formattedBalance = `Balance: ${formatNumber(balance, {
    productId: quoteProduct,
  })}`;
  const isDisabled = balance.isEqualTo(0);
  const commonProps = {
    InputProps: {
      inputProps: {
        min: 0,
        max: Number.MAX_SAFE_INTEGER,
        step: 0.01,
      },
    },
    alignEnd: true,
    disabled: isDisabled,
    type: "number",
    placeholder: "0",
  };

  const handleDummy = (dummy: string) => {
    setDummy(dummy);
  };

  useEffect(() => {
    if (!connected) return;

    socket.on("DUMMY", handleDummy);
  }, [socket]);

  const handleMaxClick = () => {
    const baseAmount = toFixedNumber(balance.dividedBy(exchangeRate));
    const quoteAmount = toFixedNumber(balance);

    // Let's say we need to ask for the exchange rate of a different
    // pair when clicking this button...
    socket.emit("RATES", PairId.avaxusdc);

    // "Local" subscriptions and event handling
    socket.emit("SUBSCRIBE_DUMMY");

    setAmounts(baseAmount, quoteAmount);
  };

  const handleBaseAmountChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    const baseAmount = calculateBaseAmount(value, balance, exchangeRate);
    const quoteAmount = convertBaseToQuoteAmount(
      baseAmount,
      balance,
      exchangeRate
    );

    setAmounts(baseAmount, quoteAmount);
  };

  const handleQuoteAmountChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    const quoteAmount = calculateQuoteAmount(value, balance);
    const baseAmount = convertQuoteToBaseAmount(
      quoteAmount,
      balance,
      exchangeRate
    );

    setAmounts(baseAmount, quoteAmount);
  };

  return {
    base,
    quote,
    baseProduct,
    quoteProduct,
    formattedBalance,
    commonProps,
    dummyValue,
    handleMaxClick,
    handleBaseAmountChange,
    handleQuoteAmountChange,
  };
}
