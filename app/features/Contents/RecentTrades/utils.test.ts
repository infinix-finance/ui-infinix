import { createDataProvider } from "./utils";

describe("Recent trades utils", () => {
  it("should convert the raw data to component digestible data", () => {
    const data = [
      {
        type: "",
        timestamp: new Date("2022-09-19 21:10:00").getTime() / 1000,
        size: "1885369532428355957",
        price: "82000000000000000000",
      },
      {
        type: "",
        timestamp: new Date("2022-09-19 21:10:00").getTime() / 1000,
        size: "-1885369532428355957",
        price: "82000000000000000000",
      },
    ];
    const expected = [
      {
        direction: "Long",
        directionColor: "alert.lemon",
        price: "82.00",
        size: "1.89",
        time: "21:10:00",
      },
      {
        direction: "Short",
        directionColor: "alert.guava",
        price: "82.00",
        size: "1.89",
        time: "21:10:00",
      },
    ];

    const result = createDataProvider(data);

    expect(result).toMatchObject(expected);
  });
});
