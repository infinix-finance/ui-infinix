import {
  CommodityId,
  Directions,
  IndexId,
  PositionChangeStatuses,
  TokenId,
} from "@/defi";

export const notifications = [
  {
    direction: Directions.Long,
    productIds: [IndexId.goog, TokenId.usdc],
    status: PositionChangeStatuses.Open,
    rows: [
      { label: "23/08/2022", value: "12:44:55" },
      { label: "Entry Price", value: "$170.00" },
      { label: "Mark Price", value: "$155.12" },
      { label: "Position Size", value: "$100.00" },
      {
        label: "Liq. Price (est.)",
        value: "$150.00",
        color: "featured.grape",
      },
    ],
  },
  {
    productIds: [CommodityId.gold, TokenId.usdc],
    direction: Directions.Short,
    status: PositionChangeStatuses.Closed,
    rows: [
      { label: "23/08/2022", value: "12:58:06" },
      { label: "PnL (ROE%)", value: "+$150.00", color: "alert.lemon" },
    ],
  },
  {
    productIds: [TokenId.btc, TokenId.usdc],
    direction: Directions.Long,
    status: PositionChangeStatuses.Liquidated,
    rows: [
      { label: "23/08/2022", value: "12:58:06" },
      { label: "PnL (ROE%)", value: "-$150.00", color: "alert.guava" },
    ],
  },
  {
    direction: Directions.Long,
    productIds: [TokenId.avax, TokenId.usdc],
    status: PositionChangeStatuses.Open,
    rows: [
      { label: "23/08/2022", value: "12:44:55" },
      { label: "Entry Price", value: "$170.00" },
      { label: "Mark Price", value: "$155.12" },
      { label: "Position Size", value: "$100.00" },
      {
        label: "Liq. Price (est.)",
        value: "$150.00",
        color: "featured.grape",
      },
    ],
  },
  {
    productIds: [TokenId.chaos, TokenId.usdc],
    direction: Directions.Short,
    status: PositionChangeStatuses.Closed,
    rows: [
      { label: "23/08/2022", value: "12:58:06" },
      { label: "PnL (ROE%)", value: "+$150.00", color: "alert.lemon" },
    ],
  },
  {
    productIds: [TokenId.ftm, TokenId.usdc],
    direction: Directions.Long,
    status: PositionChangeStatuses.Liquidated,
    rows: [
      { label: "23/08/2022", value: "12:58:06" },
      { label: "PnL (ROE%)", value: "-$150.00", color: "alert.guava" },
    ],
  },
];
