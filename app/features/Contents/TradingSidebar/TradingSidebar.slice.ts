import BigNumber from "bignumber.js";

import { AppState, CustomStateCreator } from "@/stores/types";
import {
  formatLeverage,
  formatPercentage,
  formatUsdValue,
} from "@/utils/formatters";
import { Directions } from "@/defi/Directions";

interface TradingSidebarStoreProps {
  amounts: {
    base: string;
    baseValue: BigNumber;
    quote: string;
    quoteValue: BigNumber;
  };
  direction: Directions;
  slippage: number;
  leverage: number;
  dummyValue: string;
}

export interface TradingSidebarSlice {
  tradingSidebar: TradingSidebarStoreProps & {
    setDirection: (value: Directions) => void;
    setLeverage: (value: number) => void;
    setAmounts: (base: string, quote: string) => void;
    setDummy: (value: string) => void;
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
      direction: Directions.Long,
      slippage: 0,
      leverage: 10,
      dummyValue: "",

      setDirection: (value: Directions) =>
        set(function setDirection(state: AppState) {
          state.tradingSidebar.direction = value;
        }),

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

      setDummy: (value: string) =>
        set(function setDummy(state: AppState) {
          state.tradingSidebar.dummyValue = value;
        }),
    },
  });

export const getIsBalanceSet = (state: AppState) => {
  return state.connection.balance.isGreaterThan(0);
};

export const getIsQuoteSet = (state: AppState) => {
  return state.tradingSidebar.amounts.quoteValue.isGreaterThan(0);
};

export const getPriceDetails = (state: AppState) => {
  const isBalanceSet = getIsBalanceSet(state);

  return {
    entry: isBalanceSet ? formatUsdValue(new BigNumber(171.12)) : "-",
    liquidation: isBalanceSet ? formatUsdValue(new BigNumber(90.12)) : "-",
    impact: isBalanceSet ? formatPercentage(new BigNumber(2)) : "-",
    tradingFee: isBalanceSet ? formatUsdValue(new BigNumber(0.05)) : "-",
  };
};

const calculateAccountDetails = (state: AppState) => {
  const { balance: balanceValue } = state.connection;
  const {
    amounts: { quoteValue },
    leverage,
  } = state.tradingSidebar;

  const isQuoteValueSet = getIsQuoteSet(state);
  const marginRatio = isQuoteValueSet
    ? quoteValue.dividedBy(balanceValue).multipliedBy(100)
    : new BigNumber(0);

  return {
    balanceValue,
    isQuoteValueSet,
    leverage,
    isBalanceSet: getIsBalanceSet(state),
    freeCollateral: balanceValue.minus(quoteValue),
    buyingPower: balanceValue.multipliedBy(leverage),
    freeBuyingPower: balanceValue.minus(quoteValue).multipliedBy(leverage),
    marginRatio,
    freeMargin: 100 - marginRatio.toNumber(),
  };
};

export const getAccountDetails = (state: AppState) => {
  const { isBalanceSet, isQuoteValueSet, freeMargin, ...details } =
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
        value: isBalanceSet ? balance : "-",
      },
      {
        label: "Free Collateral",
        value: isBalanceSet ? balance : "-",
        value2: isQuoteValueSet ? freeCollateral : undefined,
      },
      {
        label: "Buying Power",
        value: isBalanceSet ? buyingPower : "-",
        value2: isQuoteValueSet ? freeBuyingPower : undefined,
      },
      {
        label: "Margin Ratio",
        value: isBalanceSet ? marginRatio : "-",
      },
      {
        label: "Leverage",
        value: isBalanceSet ? leverage : "-",
      },
      {
        label: "Risk Profile",
        value: isBalanceSet ? riskProfile : "-",
      },
    ],
    isBalanceSet,
    freeMargin,
  };
};
