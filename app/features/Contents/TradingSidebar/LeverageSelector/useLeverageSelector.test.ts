import { getInitialState, useStore } from "@/stores/root";
import { act, renderHook } from "@testing-library/react";
import BigNumber from "bignumber.js";

import useLeverageSelector from "./useLeverageSelector";

const createStore = (balance: number) => {
  const store = getInitialState();

  store.tradingSidebar = {
    ...store.tradingSidebar,
    leverage: 3,
    amounts: {
      ...store.tradingSidebar.amounts,
      quoteValue: new BigNumber(100),
    },
    balance: new BigNumber(balance),
  };

  store.connection = {
    ...store.connection,
    active: true,
  };

  store.amm = {
    ...store.amm,
    underlyingPrice: "1000000000000000000",
  };

  useStore.setState(store);
};

describe("useLeverageSelector", () => {
  test("should return initial values", () => {
    createStore(0);
    const { result } = renderHook(() => useLeverageSelector());

    expect(result.current).toMatchObject({
      leverage: 3,
      buyingPower: "-",
    });
  });

  test("should return initial values", () => {
    createStore(100);
    const { result } = renderHook(() => useLeverageSelector());

    expect(result.current).toMatchObject({
      leverage: 3,
      buyingPower: "$300.00",
    });
  });

  test("should update values when user changes leverage", () => {
    createStore(100);
    const { result } = renderHook(() => useLeverageSelector());

    act(() => {
      result.current.handleChangeLeverage(
        {} as React.MouseEvent<HTMLElement>,
        7
      );
    });

    expect(result.current).toMatchObject({
      leverage: 7,
      buyingPower: "$700.00",
    });
  });
});
