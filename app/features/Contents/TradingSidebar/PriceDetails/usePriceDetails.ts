import { useStore } from "@/stores/root";

import { getPriceDetails } from "../TradingSidebar.slice";

export default function usePriceDetails() {
  const priceDetails = useStore(getPriceDetails);

  const dataProvider = [
    {
      label: "Entry Price",
      value: priceDetails.entry,
    },
    {
      label: "Liquidation Price (est.)",
      value: priceDetails.liquidation,
    },
    {
      label: "Price Impact",
      value: priceDetails.impact,
    },
    {
      label: "Trading Fee",
      value: priceDetails.tradingFee,
    },
  ];

  return dataProvider;
}
