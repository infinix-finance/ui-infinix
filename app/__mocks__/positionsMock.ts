export const historyEntry1 = {
  timestamp: 1654832730,
  type: "Opening",
  entryPrice: "106080000000000000043",
  underlyingPrice: "44489137202278124603",
  size: "1885369532428355957",
  fundingPayment: "0",
  leverage: "2000000000000000000",
  notification: true,
  margin: "100000000000000000000",
  fee: "0",
  realizedPnl: "0",
  unrealizedPnlAfter: "0",
};
export const historyEntry2 = {
  timestamp: 1654832745,
  type: "Margin Changing",
  entryPrice: "82000000000000000000",
  underlyingPrice: "44489137202278124603",
  size: "-1",
  fundingPayment: "0",
};
export const positionEntry1 = {
  amm: "0xe5639cbb02ec3bd65c77e128b0c7350aeefb2bd1",
  leverage: "2000000000000000000",
  underlyingPrice: "44489137202278124603",
  margin: "41",
  fee: "0",
  trader: "0xb9c3a80c8e903df935f1cdf9688f5bd154002b8b",
  fundingPayment: "0",
  active: true,
  tradingVolume: "400000000000000000000",
  entryPrice: "82000000000000000000",
  badDebt: "0",
  size: "-1",
  unrealizedPnl: "0",
  totalPnlAmount: "-82",
  openNotional: "82",
  realizedPnl: "-82",
  liquidationPenalty: "0",
  timestamp: 1654832745,
};
export const positions = [
  {
    position: positionEntry1,
    history: [historyEntry1, historyEntry2],
  },
];
