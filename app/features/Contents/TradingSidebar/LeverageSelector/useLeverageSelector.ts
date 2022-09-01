import { useStore } from "@/stores/root";
import { formatAmount } from "@/utils/formatters";

export default function useLeverageSelector() {
  const { balance } = useStore((store) => store.connection);
  const { leverage, setLeverage } = useStore((store) => store.tradingSidebar);

  const buyingPowerLabel = `Buying power(up to ${leverage}x)`;
  const buyingPower = formatAmount(balance.multipliedBy(leverage), {
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
