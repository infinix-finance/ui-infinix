export interface Markets {
  [market: string]: {
    [pair: string]: string;
  };
}

export interface Amm {
  id: string;
  quoteAsset: string;
  priceFeedKey: string;
  fundingPeriod: number;
  dataFeedId?: string;
  price?: number;
}

export interface PriceUpdate {
  timestamp: number;
  price: string;
}

export interface PositionEvent {
  timestamp: number;
  type: string;
  margin?: string;
  size?: string;
  fee?: string;
  realizedPnl?: string;
  unrealizedPnlAfter?: string;
  amount?: string;
  fundingPayment: string;
  notification: boolean;
}

export interface PositionData {
  timestamp: number;
  trader: string;
  amm: string;
  active: boolean;
  margin: string;
  openNotional: string;
  size: string;
  tradingVolume: string;
  leverage: string;
  entryPrice: string;
  fee: string;
  realizedPnl: string;
  unrealizedPnl: string;
  badDebt: string;
  liquidationPenalty: string;
  fundingPayment: string;
  totalPnlAmount: string;
}

export interface Position {
  position: PositionData;
  history: PositionEvent[];
}
