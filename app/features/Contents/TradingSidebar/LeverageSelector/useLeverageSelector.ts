import { useStore } from "@/stores/root";
import { formatNumber } from "@/utils/formatters";
import { isTradingSidebarEnabled } from "../TradingSidebar.slice";

export default function useLeverageSelector() {
  const {
    amounts: { quoteValue },
    leverage,
    setLeverage,
  } = useStore((store) => store.tradingSidebar);
  const tradingSidebarEnabled = useStore(isTradingSidebarEnabled);

  const buyingPowerLabel = `Buying power (${leverage}x)`;
  const buyingPower = tradingSidebarEnabled
    ? formatNumber(quoteValue.multipliedBy(leverage), { prefix: "$" })
    : "-";

  const handleChangeLeverage = (
    _: React.MouseEvent<HTMLElement>,
    value: number
  ) => {
    setLeverage(value);
  };

  return {
    tradingSidebarEnabled,
    leverage,
    buyingPowerLabel,
    buyingPower,
    handleChangeLeverage,
  };
}
