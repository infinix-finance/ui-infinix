import { MarketId, PairId } from "@/defi";
import { useStore } from "@/stores/root";
import { getTopBarValues } from "@/stores/slices/api/amm";
import { getMostRecentPositionPrice } from "@/stores/slices/api/recentPositions";
import {
  generateMarketDropdownProps,
  generatePairDropdownProps,
} from "./utils";

const marketDropdownProps = generateMarketDropdownProps();
const pairDropdownProps = generatePairDropdownProps();

export default function useTopBar() {
  const rates = useStore((state) => state.rates);
  const mostRecentPositionPrice = useStore(getMostRecentPositionPrice);
  const priceValues = useStore(getTopBarValues);
  const priceHistory = useStore((state) => state.priceHistory);
  const amm = useStore((state) => state.amm);
  const recentPositions = useStore((state) => state.recentPositions);

  const handlePairChange = (pair: string) => {
    rates.changePair(pair as PairId);
    priceHistory.clear();
    amm.clear();
    recentPositions.clear();
  };

  const handleMarketChange = (maketId: string) => {
    const selectedMarketId = maketId as MarketId;
    const selectedPair = pairDropdownProps[selectedMarketId].options[0].value;

    rates.changeMarket(selectedMarketId);
    handlePairChange(selectedPair);
  };

  return {
    rates,
    mostRecentPositionPrice,
    priceValues,
    marketDropdownProps,
    pairDropdownProps,
    handleMarketChange,
    handlePairChange,
  };
}
