import BigNumber from "bignumber.js";

import { AppState, CustomStateCreator } from "@/stores/types";
import {
  formatLeverage,
  formatPercentage,
  formatUsdValue,
} from "@/utils/formatters";

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

export const getIsValid = (state: AppState) => {
  return state.connection.balance.isGreaterThan(0);
};

export const getPriceDetails = (state: AppState) => {
  return {
    entry: formatUsdValue(new BigNumber(171.12)),
    liquidation: formatUsdValue(new BigNumber(90.12)),
    impact: formatPercentage(new BigNumber(2)),
    tradingFee: formatUsdValue(new BigNumber(0.05)),
  };
};

const calculateAccountDetails = (state: AppState) => {
  const { balance: balanceValue } = state.connection;
  const {
    amounts: { quoteValue },
    leverage,
  } = state.tradingSidebar;

  const isQuoteValueSet = quoteValue.isGreaterThan(0);
  const marginRatio = isQuoteValueSet
    ? quoteValue.dividedBy(balanceValue).multipliedBy(100)
    : new BigNumber(0);

  return {
    balanceValue,
    isQuoteValueSet,
    leverage,
    isValid: getIsValid(state),
    freeCollateral: balanceValue.minus(quoteValue),
    buyingPower: balanceValue.multipliedBy(leverage),
    freeBuyingPower: balanceValue.minus(quoteValue).multipliedBy(leverage),
    marginRatio,
    freeMargin: 100 - marginRatio.toNumber(),
  };
};

export const getAccountDetails = (state: AppState) => {
  const { isValid, isQuoteValueSet, freeMargin, ...details } =
    calculateAccountDetails(state);

  const balance = formatUsdValue(details.balanceValue as BigNumber);
  const freeCollateral = formatUsdValue(details.freeCollateral);
  const buyingPower = formatUsdValue(details.buyingPower);
  const freeBuyingPower = formatUsdValue(details.freeBuyingPower);
  const marginRatio = formatPercentage(details.marginRatio);
  const leverage = formatLeverage(details.leverage);
  const riskProfile =
    freeMargin <= 33 ? "High" : freeMargin >= 66 ? "Low" : "Medium";

  return {
    data: [
      {
        label: "Net USDC Value",
        value: isValid ? balance : "-",
      },
      {
        label: "Free Collateral",
        value: isValid ? balance : "-",
        value2: isQuoteValueSet ? freeCollateral : undefined,
      },
      {
        label: "Buying Power",
        value: isValid ? buyingPower : "-",
        value2: isQuoteValueSet ? freeBuyingPower : undefined,
      },
      {
        label: "Margin Ratio",
        value: isValid ? marginRatio : "-",
      },
      {
        label: "Leverage",
        value: isValid ? leverage : "-",
      },
      {
        label: "Risk Profile",
        value: isValid ? riskProfile : "-",
      },
    ],
    isValid,
    freeMargin,
  };
};
