import BigNumber from "bignumber.js";

import { AppState, CustomStateCreator } from "@/stores/types";
import { formatNumber } from "@/utils/formatters";

interface TradingSidebarStoreProps {
  amounts: {
    base: string;
    baseValue: BigNumber;
    quote: string;
    quoteValue: BigNumber;
  };
  slippage: number;
  leverage: number;
}

export interface TradingSidebarSlice {
  tradingSidebar: TradingSidebarStoreProps & {
    setLeverage: (value: number) => void;
    setAmounts: (base: string, quote: string) => void;
  };
}

export const createTradingSidebarSlice: CustomStateCreator<TradingSidebarSlice> =
  (set) => ({
    tradingSidebar: {
      amounts: {
        base: "",
        baseValue: new BigNumber(0),
        quote: "",
        quoteValue: new BigNumber(0),
      },
      slippage: 0,
      leverage: 10,

      setLeverage: (value: number) =>
        set(function setLeverage(state: AppState) {
          state.tradingSidebar.leverage = value;
        }),

      setAmounts: (base: string, quote: string) =>
        set(function setAmounts(state: AppState) {
          state.tradingSidebar.amounts = {
            base,
            baseValue: new BigNumber(base),
            quote,
            quoteValue: new BigNumber(quote),
          };
        }),
    },
  });

export const getPriceDetails = (state: AppState) => {
  return {
    entry: formatNumber(new BigNumber(171.12), { prefix: "$" }),
    liquidation: formatNumber(new BigNumber(90.12), { prefix: "$" }),
    impact: formatNumber(new BigNumber(2), { base: 0, suffix: "%" }),
    tradingFee: formatNumber(new BigNumber(0.05), { prefix: "$" }),
  };
};
