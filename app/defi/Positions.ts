export enum PositionChangeStatuses {
  Open = "Open",
  Closed = "Closed",
  Liquidated = "Liquidated",
}

enum OriginalPositionChangeStatuses {
  Open = "Opening",
  Close = "Closing",
  Chng = "Changing",
  Mgn = "Margin Changing",
  Liq = "Liquidating",
  None = "Invalid",
}

export const mapOriginalPositionStatus = (
  status: OriginalPositionChangeStatuses
) => {
  const openStatuses = [
    OriginalPositionChangeStatuses.Open,
    OriginalPositionChangeStatuses.Chng,
    OriginalPositionChangeStatuses.Mgn,
  ];

  return openStatuses.includes(status)
    ? PositionChangeStatuses.Open
    : OriginalPositionChangeStatuses.Close === status
    ? PositionChangeStatuses.Closed
    : PositionChangeStatuses.Liquidated;
};
