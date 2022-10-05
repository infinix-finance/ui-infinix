import { useStore } from "@/stores/root";
import { formatNumber } from "@/utils/formatters";
import { getIsBalanceSet } from "../TradingSidebar.slice";

export default function useLeverageSelector() {
  const {
    amounts: { quoteValue },
    leverage,
    setLeverage,
  } = useStore((store) => store.tradingSidebar);
  const { active } = useStore((state) => state.connection);
  const isBalanceSet = useStore(getIsBalanceSet);
  const isValid = isBalanceSet && active;

  const buyingPowerLabel = `Buying power (${leverage}x)`;
  const buyingPower = isValid
    ? formatNumber(quoteValue.multipliedBy(leverage), { prefix: "$" })
    : "-";

  const handleChangeLeverage = (
    _: React.MouseEvent<HTMLElement>,
    value: number
  ) => {
    setLeverage(value);
  };

  return {
    isValid,
    leverage,
    buyingPowerLabel,
    buyingPower,
    handleChangeLeverage,
  };
}
