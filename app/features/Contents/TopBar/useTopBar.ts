import { MarketId, PairId } from "@/defi";
import { useStore } from "@/stores/root";
import { getTopBarValues } from "@/stores/slices/api/amm";
import { useEffect, useState } from "react";
import {
  generateMarketDropdownProps,
  generatePairDropdownProps,
  MarketDropdownConfig,
  PairDropdownConfig,
} from "./utils";

const defaultDropdownPayload = { searchable: false, options: [] };

export default function useTopBar() {
  const [marketsList, setMarketsList] = useState<MarketDropdownConfig>(
    defaultDropdownPayload
  );
  const [pairsList, setPairsList] = useState<PairDropdownConfig>(
    defaultDropdownPayload
  );
  const markets = useStore((state) => state.markets);
  const priceValues = useStore(getTopBarValues);
  const priceHistory = useStore((state) => state.priceHistory);
  const amm = useStore((state) => state.amm);
  const recentPositions = useStore((state) => state.recentPositions);

  useEffect(() => {
    if (!markets.ready) return;

    setMarketsList(generateMarketDropdownProps());
    setPairsList(generatePairDropdownProps(markets.marketId));
  }, [markets.ready]);

  const handlePairChange = (pair: string | PairId) => {
    markets.changePair(pair as PairId);
    priceHistory.clear();
    amm.clear();
    recentPositions.clear();
  };

  const handleMarketChange = (maketId: string) => {
    const selectedMarketId = maketId as MarketId;
    const pairs = generatePairDropdownProps(selectedMarketId);
    const selectedPair = pairs.options[0].value;

    markets.changeMarket(selectedMarketId);
    handlePairChange(selectedPair);
    setPairsList(pairs);
  };

  return {
    markets,
    priceValues,
    marketsList,
    pairsList,
    handleMarketChange,
    handlePairChange,
  };
}
