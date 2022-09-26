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
    productIds: [IndexId.GOOG, TokenId.USDC],
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
    productIds: [CommodityId.XAU, TokenId.USDC],
    direction: Directions.Short,
    status: PositionChangeStatuses.Closed,
    rows: [
      { label: "23/08/2022", value: "12:58:06" },
      { label: "PnL (ROE%)", value: "+$150.00", color: "alert.lemon" },
    ],
  },
  {
    productIds: [TokenId.BTC, TokenId.USDC],
    direction: Directions.Long,
    status: PositionChangeStatuses.Liquidated,
    rows: [
      { label: "23/08/2022", value: "12:58:06" },
      { label: "PnL (ROE%)", value: "-$150.00", color: "alert.guava" },
    ],
  },
  {
    direction: Directions.Long,
    productIds: [TokenId.AVAX, TokenId.USDC],
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
    productIds: [TokenId.CHAOS, TokenId.USDC],
    direction: Directions.Short,
    status: PositionChangeStatuses.Closed,
    rows: [
      { label: "23/08/2022", value: "12:58:06" },
      { label: "PnL (ROE%)", value: "+$150.00", color: "alert.lemon" },
    ],
  },
  {
    productIds: [TokenId.FTM, TokenId.USDC],
    direction: Directions.Long,
    status: PositionChangeStatuses.Liquidated,
    rows: [
      { label: "23/08/2022", value: "12:58:06" },
      { label: "PnL (ROE%)", value: "-$150.00", color: "alert.guava" },
    ],
  },
];
