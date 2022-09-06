export interface Markets {
  [market: string]: {
    [pair: string]: string;
  };
}

export interface Amm {
  id: string;
  priceFeedKey: string;
  fundingPeriod: number;
  dataFeedId?: string;
  price?: number;
}
