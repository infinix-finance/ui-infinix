import { act, renderHook } from "@testing-library/react";
import BigNumber from "bignumber.js";

import { getInitialState, useStore } from "@/stores/root";
import React from "react";
import useAssetAmount from "./useAssetAmount";

const createStore = (balance: number, exchangeRate: number) => {
  const store = getInitialState();

  store.tradingSidebar = {
    ...store.tradingSidebar,
    amounts: {
      base: "",
      baseValue: new BigNumber(0),
      quote: "",
      quoteValue: new BigNumber(0),
    },
    balance: new BigNumber(balance),
  };

  store.amm = {
    ...store.amm,
    price: exchangeRate,
  };

  useStore.setState(store);
};

describe("useAssetAmount", () => {
  test("should return initial values when no balance and exchange rate is provided", () => {
    createStore(0, 0);
    const { result } = renderHook(useAssetAmount);

    expect(result.current).toMatchObject({
      base: "",
      quote: "",
      baseProduct: "AVAX",
      quoteProduct: "USDC",
      formattedBalance: "Balance: 0.00 USDC",
      commonProps: {
        disabled: true,
      },
    });
  });

  test("should return initial values when balance and exchange rate is provided", () => {
    createStore(22000, 1000);
    const { result } = renderHook(useAssetAmount);

    expect(result.current).toMatchObject({
      base: "",
      quote: "",
      baseProduct: "AVAX",
      quoteProduct: "USDC",
      formattedBalance: "Balance: 22,000.00 USDC",
      commonProps: {
        disabled: false,
      },
    });
  });

  test("should update both amounts when base amount is set", () => {
    createStore(22000, 100);
    const { result } = renderHook(useAssetAmount);

    act(() => {
      result.current.handleBaseAmountChange({
        target: { value: "10" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current).toMatchObject({
      base: "10",
      quote: "1000.00",
    });
  });

  test("should update both amounts when quote amount is set", () => {
    createStore(22000, 100);
    const { result } = renderHook(useAssetAmount);

    act(() => {
      result.current.handleQuoteAmountChange({
        target: { value: "10" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current).toMatchObject({
      base: "0.10",
      quote: "10",
    });
  });

  test("should max out both inputs when max button is clicked", () => {
    createStore(22000, 100);
    const { result } = renderHook(useAssetAmount);

    act(() => {
      result.current.handleMaxClick();
    });

    expect(result.current).toMatchObject({
      base: "220.00",
      quote: "22000.00",
    });
  });
});
