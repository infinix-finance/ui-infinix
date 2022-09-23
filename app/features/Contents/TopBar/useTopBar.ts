import { MarketId, PairId } from "@/defi";
import { useStore } from "@/stores/root";
import { getTopBarValues } from "@/stores/slices/api/amm";
import { getMostRecentPositionPrice } from "@/stores/slices/api/recentPositions";
import { useEffect, useState } from "react";
import {
  generateMarketDropdownProps,
  generatePairDropdownProps,
  MarketDropdownConfig,
  PairDropdownConfig,
} from "./utils";

export default function useTopBar() {
  const [marketsList, setMarketsList] =
    useState<MarketDropdownConfig | null>(null);
  const [pairsList, setPairsList] = useState<PairDropdownConfig | null>(null);
  const rates = useStore((state) => state.rates);
  const markets = useStore((state) => state.markets);
  const mostRecentPositionPrice = useStore(getMostRecentPositionPrice);
  const priceValues = useStore(getTopBarValues);
  const priceHistory = useStore((state) => state.priceHistory);
  const amm = useStore((state) => state.amm);
  const recentPositions = useStore((state) => state.recentPositions);

  useEffect(() => {
    if (!markets.ready) return;

    setMarketsList(generateMarketDropdownProps());
    setPairsList(generatePairDropdownProps());
  }, [markets.ready]);

  const handlePairChange = (pair: string | PairId) => {
    rates.changePair(pair as PairId);
    priceHistory.clear();
    amm.clear();
    recentPositions.clear();
  };

  const handleMarketChange = (maketId: string) => {
    const selectedMarketId = maketId as MarketId;
    const selectedPair = pairsList![selectedMarketId].options[0].value;

    rates.changeMarket(selectedMarketId);
    handlePairChange(selectedPair);
  };

  return {
    rates,
    mostRecentPositionPrice,
    priceValues,
    marketsList,
    pairsList,
    handleMarketChange,
    handlePairChange,
  };
}
