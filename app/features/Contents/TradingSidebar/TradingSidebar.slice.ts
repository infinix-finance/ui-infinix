import BigNumber from "bignumber.js";

import { Directions } from "@/defi/Directions";
import { isIndexPriceValid } from "@/stores/slices/api/amm";
import { AppState, CustomStateCreator } from "@/stores/types";
import {
  formatLeverage,
  formatPercentage,
  formatUsdValue,
} from "@/utils/formatters";

interface TradingSidebarStoreProps {
  balance: BigNumber;
  amounts: {
    base: string;
    baseValue: BigNumber;
    quote: string;
    quoteValue: BigNumber;
  };
  direction: Directions;
  slippage: number;
  leverage: number;
}

export interface TradingSidebarSlice {
  tradingSidebar: TradingSidebarStoreProps & {
    setBalance: (value: string) => void;
    setDirection: (value: Directions) => void;
    setLeverage: (value: number) => void;
    setAmounts: (base: string, quote: string) => void;
    setSlippage: (value: number) => void;
  };
}

export const createTradingSidebarSlice: CustomStateCreator<TradingSidebarSlice> =
  (set) => ({
    tradingSidebar: {
      balance: new BigNumber(0),
      amounts: {
        base: "",
        baseValue: new BigNumber(0),
        quote: "",
        quoteValue: new BigNumber(0),
      },
      direction: Directions.Long,
      slippage: 0,
      leverage: 1,

      setBalance: (value: string) =>
        set(function setBalance(state: AppState) {
          state.tradingSidebar.balance = new BigNumber(value);
        }),

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

      setSlippage: (value: number) =>
        set(function setSlippage(state: AppState) {
          state.tradingSidebar.slippage = value;
        }),
    },
  });

export const getIsBalanceSet = (state: AppState) => {
  return state.tradingSidebar.balance.isGreaterThan(0);
};

export const getIsQuoteSet = (state: AppState) => {
  return state.tradingSidebar.amounts.quoteValue.isGreaterThan(0);
};

export const isTradingSidebarEnabled = (state: AppState) => {
  return (
    getIsBalanceSet(state) &&
    getIsQuoteSet(state) &&
    state.connection.active &&
    isIndexPriceValid(state)
  );
};

export const isSidebarInputsEnabled = (state: AppState) => {
  return (
    getIsBalanceSet(state) &&
    state.connection.active &&
    isIndexPriceValid(state)
  );
};

export const getPriceDetails = (state: AppState) => {
  const EMPTY = "-";
  const isQuoteSet = getIsQuoteSet(state);

  // TODO: Needs to be replaced with proper calculations
  return {
    entry: isQuoteSet ? formatUsdValue(new BigNumber(0)) : EMPTY,
    liquidation: isQuoteSet ? formatUsdValue(new BigNumber(0)) : EMPTY,
    impact: isQuoteSet ? formatPercentage(new BigNumber(0)) : EMPTY,
    tradingFee: isQuoteSet ? formatUsdValue(new BigNumber(0)) : EMPTY,
  };
};

const calculateAccountDetails = (state: AppState) => {
  const {
    balance: balanceValue,
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
