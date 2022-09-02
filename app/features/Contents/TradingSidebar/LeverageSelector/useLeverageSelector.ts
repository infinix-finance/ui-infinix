import { useStore } from "@/stores/root";
import { formatNumber } from "@/utils/formatters";

export default function useLeverageSelector() {
  const {
    amounts: { quoteValue },
    leverage,
    setLeverage,
  } = useStore((store) => store.tradingSidebar);

  const buyingPowerLabel = `Buying power(up to ${leverage}x)`;
  const buyingPower = formatNumber(quoteValue.multipliedBy(leverage), {
    prefix: "$",
  });

  const handleChangeLeverage = (
    _: React.MouseEvent<HTMLElement>,
    value: number
  ) => {
    setLeverage(value);
  };

  return {
    leverage,
    buyingPowerLabel,
    buyingPower,
    handleChangeLeverage,
  };
}
