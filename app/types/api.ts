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
  fundingBufferPeriod: number;
  lastFunding: number;
  fundingRate: string;
  tradeLimitRatio: string;
  tradingVolume: string;
  underlyingPrice: string;
  dataFeedId: string;
  price: number;
  nextFunding: number;
  baseAssetReserve: string;
  quoteAssetReserve: string;
}

export interface PriceUpdate {
  timestamp: number;
  price: string;
}

export interface PositionEvent {
  timestamp: number;
  type: string;
  margin?: string;
  size: string;
  entryPrice: string;
  underlyingPrice: string;
  leverage?: string;
  fee?: string;
  realizedPnl?: string;
  unrealizedPnlAfter?: string;
  amount?: string;
  fundingPayment: string;
  notification?: boolean;
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
  underlyingPrice: string;
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
