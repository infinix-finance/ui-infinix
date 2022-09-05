import { getInitialState, useStore } from "@/stores/root";
import { renderHook } from "@testing-library/react";
import BigNumber from "bignumber.js";

import usePriceDetails from "./usePriceDetails";

const createStore = (amount: number) => {
  const store = getInitialState();

  store.connection = {
    ...store.connection,
    balance: new BigNumber(amount),
  };

  useStore.setState(store);
};

describe("usePriceDetails", () => {
  test("should return not set values when balance is not yet set", () => {
    createStore(0);
    const { result } = renderHook(() => usePriceDetails());

    expect(result.current.dataProvider).toEqual([
      {
        label: "Entry Price",
        value: "-",
      },
      {
        label: "Liquidation Price (est.)",
        value: "-",
      },
      {
        label: "Price Impact",
        value: "-",
      },
      {
        label: "Trading Fee",
        value: "-",
      },
    ]);
  });

  test("should return not set values when balance is not yet set", () => {
    createStore(1000);
    const { result } = renderHook(() => usePriceDetails());

    expect(result.current.dataProvider).toEqual([
      {
        label: "Entry Price",
        value: "$171.12",
      },
      {
        label: "Liquidation Price (est.)",
        value: "$90.12",
      },
      {
        label: "Price Impact",
        value: "2%",
      },
      {
        label: "Trading Fee",
        value: "$0.05",
      },
    ]);
  });
});
