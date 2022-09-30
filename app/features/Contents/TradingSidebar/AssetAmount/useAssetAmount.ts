import BigNumber from "bignumber.js";

import { getPair } from "@/defi";
import { useStore } from "@/stores/root";
import { formatNumber, toFixedNumber } from "@/utils/formatters";

import {
  calculateBaseAmount,
  calculateQuoteAmount,
  convertBaseToQuoteAmount,
  convertQuoteToBaseAmount,
} from "./helpers";

export default function useAssetAmount() {
  const { active } = useStore((state) => state.connection);
  const { pairId } = useStore((state) => state.markets);
  const {
    balance: balanceValue,
    amounts: { base, quote },
    setAmounts,
  } = useStore((state) => state.tradingSidebar);
  const { price } = useStore((state) => state.amm);

  // TODO: We need to confirm if it should not be underlyingPrice instead
  const exchangeRate = price;

  const balance = <BigNumber>balanceValue;
  const [baseProduct, quoteProduct] = getPair(pairId).productIds;
  const formattedBalance = `Balance: ${formatNumber(balance, {
    productId: quoteProduct,
  })}`;
  const isDisabled = balance.isEqualTo(0) || !active;
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
