import { act, renderHook } from "@testing-library/react";
import BigNumber from "bignumber.js";

import { PairId } from "@/defi";

import useAssetAmount from "./useAssetAmount";
import React from "react";

describe("useAssetAmount", () => {
  test("should return initial values when no balance and exchange rate is provided", () => {
    const { result } = renderHook(() =>
      useAssetAmount(PairId.ethusdc, new BigNumber(0), new BigNumber(0))
    );

    expect(result.current).toMatchObject({
      baseAmount: "",
      quoteAmount: "",
      baseProduct: "eth",
      quoteProduct: "usdc",
      formattedBalance: "Balance: 0.00 USDC",
      commonProps: {
        disabled: true,
      },
    });
  });

  test("should return initial values when balance and exchange rate is provided", () => {
    const { result } = renderHook(() =>
      useAssetAmount(PairId.ethusdc, new BigNumber(22000), new BigNumber(1000))
    );

    expect(result.current).toMatchObject({
      baseAmount: "",
      quoteAmount: "",
      baseProduct: "eth",
      quoteProduct: "usdc",
      formattedBalance: "Balance: 22000.00 USDC",
      commonProps: {
        disabled: false,
      },
    });
  });

  test("should update both amounts when base amount is set", () => {
    const { result } = renderHook(() =>
      useAssetAmount(PairId.ethusdc, new BigNumber(22000), new BigNumber(100))
    );

    act(() => {
      result.current.handleBaseAmountChange({
        target: { value: "10" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current).toMatchObject({
      baseAmount: "10",
      quoteAmount: "1000.00",
    });
  });

  test("should update both amounts when quote amount is set", () => {
    const { result } = renderHook(() =>
      useAssetAmount(PairId.ethusdc, new BigNumber(22000), new BigNumber(100))
    );

    act(() => {
      result.current.handleQuoteAmountChange({
        target: { value: "10" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current).toMatchObject({
      baseAmount: "0.10",
      quoteAmount: "10",
    });
  });

  test("should max out both inputs when max button is clicked", () => {
    const { result } = renderHook(() =>
      useAssetAmount(PairId.ethusdc, new BigNumber(22000), new BigNumber(100))
    );

    act(() => {
      result.current.handleMaxClick();
    });

    expect(result.current).toMatchObject({
      baseAmount: "220.00",
      quoteAmount: "22000.00",
    });
  });
});
