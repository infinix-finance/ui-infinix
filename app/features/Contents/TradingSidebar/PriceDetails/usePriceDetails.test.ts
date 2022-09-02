import { renderHook } from "@testing-library/react";

import usePriceDetails from "./usePriceDetails";

describe("usePriceDetails", () => {
  test("should return initial values", () => {
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
