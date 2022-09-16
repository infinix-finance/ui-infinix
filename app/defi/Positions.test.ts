import {
  mapOriginalPositionStatus,
  OriginalPositionChangeStatuses,
  PositionChangeStatuses,
} from "./Positions";

describe("Positions", () => {
  test("should return Open for 'Opening', 'Changing', 'Margin Changing' statuses", () => {
    expect(
      mapOriginalPositionStatus(OriginalPositionChangeStatuses.Open)
    ).toEqual(PositionChangeStatuses.Open);

    expect(
      mapOriginalPositionStatus(OriginalPositionChangeStatuses.Chng)
    ).toEqual(PositionChangeStatuses.Open);

    expect(
      mapOriginalPositionStatus(OriginalPositionChangeStatuses.Mgn)
    ).toEqual(PositionChangeStatuses.Open);
  });

  test("should return Closed for 'Closing' status", () => {
    expect(
      mapOriginalPositionStatus(OriginalPositionChangeStatuses.Close)
    ).toEqual(PositionChangeStatuses.Closed);
  });

  test("should return Liquidated for 'Liquidating' status", () => {
    expect(
      mapOriginalPositionStatus(OriginalPositionChangeStatuses.Liq)
    ).toEqual(PositionChangeStatuses.Liquidated);
  });
});
