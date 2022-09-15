import { useLayout } from "@/hooks/responsive";
import { useStore } from "@/stores/root";

import { getIsQuoteSet, getPriceDetails } from "../TradingSidebar.slice";

export default function usePriceDetails() {
  const priceDetails = useStore(getPriceDetails);
  const isValid = useStore(getIsQuoteSet);
  const { isSmallDesktop } = useLayout();

  const dataProvider = [
    {
      label: "Entry Price",
      value: priceDetails.entry,
    },
    {
      label: isSmallDesktop ? "Liq Price (est.)" : "Liquidation Price (est.)",
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

  return {
    dataProvider,
    isValid,
  };
}
