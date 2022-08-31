import BigNumber from "bignumber.js";
import { useState } from "react";

import { getPair, PairId } from "@/defi";
import { formatAmount } from "@/utils/formatters";

import {
  calculateBaseAmount,
  calculateQuoteAmount,
  convertBaseToQuoteAmount,
  convertQuoteToBaseAmount,
} from "./helpers";

export default function useAssetAmount(
  pairId: PairId,
  balance: BigNumber,
  exchangeRate: BigNumber
) {
  const [baseAmount, setBaseAmount] = useState<string>("");
  const [quoteAmount, setQuoteAmount] = useState<string>("");

  const [baseProduct, quoteProduct] = getPair(pairId).productIds;
  const formattedBalance = `Balance: ${formatAmount(balance, {
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
    const baseAmount = formatAmount(balance.dividedBy(exchangeRate));
    const quoteAmount = formatAmount(balance);

    setBaseAmount(baseAmount);
    setQuoteAmount(quoteAmount);
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

    setBaseAmount(baseAmount);
    setQuoteAmount(quoteAmount);
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

    setQuoteAmount(quoteAmount);
    setBaseAmount(baseAmount);
  };

  return {
    baseAmount,
    quoteAmount,
    baseProduct,
    quoteProduct,
    formattedBalance,
    commonProps,
    handleMaxClick,
    handleBaseAmountChange,
    handleQuoteAmountChange,
  };
}
