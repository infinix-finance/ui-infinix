import { Commodity, CommodityId } from "./types";

export const COMMODITIES: { [key in CommodityId]: Commodity } = {
  [CommodityId.gold]: {
    id: CommodityId.gold,
    icon: "/commodities/gold.svg",
    symbol: "XAU",
    name: "Gold",
  },
};
