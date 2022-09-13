import BigNumber from "bignumber.js";

import { getPair } from "@/defi";
import { formatNumber, toFixedNumber } from "@/utils/formatters";
import { useStore } from "@/stores/root";
import { getExchangeRate } from "@/stores/slices/rates";

import {
  calculateBaseAmount,
  calculateQuoteAmount,
  convertBaseToQuoteAmount,
  convertQuoteToBaseAmount,
} from "./helpers";

export default function useAssetAmount() {
  const { pair } = useStore((state) => state.rates);
  const {
    balance: balanceValue,
    amounts: { base, quote },
    setAmounts,
  } = useStore((state) => state.tradingSidebar);
  const exchangeRate = useStore(getExchangeRate);

  const balance = <BigNumber>balanceValue;
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

  const handleMaxClick = () => {
    const baseAmount = toFixedNumber(balance.dividedBy(exchangeRate));
    const quoteAmount = toFixedNumber(balance);

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
    balance,
    baseProduct,
    quoteProduct,
    formattedBalance,
    commonProps,
    handleMaxClick,
    handleBaseAmountChange,
    handleQuoteAmountChange,
  };
}
