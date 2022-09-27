import { Commodity, CommodityId } from "./types";

export const COMMODITIES: { [key in CommodityId]: Commodity } = {
  [CommodityId.XAU]: {
    id: CommodityId.XAU,
    icon: "/commodities/gold.svg",
    symbol: "XAU",
    name: "Gold",
  },
};
