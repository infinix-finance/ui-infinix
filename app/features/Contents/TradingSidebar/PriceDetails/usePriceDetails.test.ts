import { getInitialState, useStore } from "@/stores/root";
import { renderHook } from "@testing-library/react";
import BigNumber from "bignumber.js";

import usePriceDetails from "./usePriceDetails";

const createStore = (amount: number) => {
  const store = getInitialState();

  store.tradingSidebar = {
    ...store.tradingSidebar,
    amounts: {
      ...store.tradingSidebar.amounts,
      quoteValue: new BigNumber(amount),
    },
  };

  store.connection = {
    ...store.connection,
    active: true,
  };

  useStore.setState(store);
};

describe("usePriceDetails", () => {
  test("should return not set values when quote is not yet set", () => {
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

  test("should return not set values when quote is not yet set", () => {
    createStore(1000);
    const { result } = renderHook(() => usePriceDetails());

    expect(result.current.dataProvider).toEqual([
      {
        label: "Entry Price",
        value: "$0.00",
      },
      {
        label: "Liquidation Price (est.)",
        value: "$0.00",
      },
      {
        label: "Price Impact",
        value: "0%",
      },
      {
        label: "Trading Fee",
        value: "$0.00",
      },
    ]);
  });
});
