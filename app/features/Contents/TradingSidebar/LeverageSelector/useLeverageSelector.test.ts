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

  useStore.setState(store);
};

describe("useLeverageSelector", () => {
  test("should return initial values", () => {
    createStore(0);
    const { result } = renderHook(() => useLeverageSelector());

    expect(result.current).toMatchObject({
      leverage: 3,
      buyingPowerLabel: "Buying power (3x)",
      buyingPower: "-",
    });
  });

  test("should return initial values", () => {
    createStore(100);
    const { result } = renderHook(() => useLeverageSelector());

    expect(result.current).toMatchObject({
      leverage: 3,
      buyingPowerLabel: "Buying power (3x)",
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
      buyingPowerLabel: "Buying power (7x)",
      buyingPower: "$700.00",
    });
  });
});
