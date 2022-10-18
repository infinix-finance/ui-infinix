import { getInitialState, useStore } from "@/stores/root";
import { renderHook } from "@testing-library/react";
import BigNumber from "bignumber.js";

import usePriceDetails from "./usePriceDetails";

const createStore = (baseAmount: number, quoteAmount: number) => {
  const store = getInitialState();

  store.tradingSidebar = {
    ...store.tradingSidebar,
    leverage: 3,
    amounts: {
      ...store.tradingSidebar.amounts,
      baseValue: new BigNumber(baseAmount),
      quoteValue: new BigNumber(quoteAmount),
    },
  };

  store.connection = {
    ...store.connection,
    active: true,
  };

  store.amm = {
    ...store.amm,
    underlyingPrice: "1111111111111111111",
    baseAssetReserve: "95235933160933348370",
    quoteAssetReserve: "10500238374418629152713",
  };

  store.tradingSidebar.balance = new BigNumber(1000);

  useStore.setState(store);
};

describe("usePriceDetails", () => {
  test("should return not set values when quote is not yet set", () => {
    createStore(0, 0);
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
    createStore(2.28, 100);
    const { result } = renderHook(() => usePriceDetails());

    expect(result.current.dataProvider).toEqual([
      {
        label: "Entry Price",
        value: "$108.70",
      },
      {
        label: "Liquidation Price (est.)",
        value: "$1.25",
      },
      {
        label: "Price Impact",
        value: "1.4%",
      },
      {
        label: "Trading Fee",
        value: "$0.10",
      },
    ]);
  });
});
