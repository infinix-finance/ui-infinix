import { useLayout } from "@/hooks/responsive";
import { useStore } from "@/stores/root";

import {
  getPriceDetails,
  isTradingSidebarEnabled,
} from "../TradingSidebar.slice";

export default function usePriceDetails() {
  const priceDetails = useStore(getPriceDetails);
  const tradingSidebarEnabled = useStore(isTradingSidebarEnabled);
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
    tradingSidebarEnabled,
  };
}
