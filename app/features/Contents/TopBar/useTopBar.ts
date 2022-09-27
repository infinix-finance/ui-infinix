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

const defaultDropdownPayload = { searchable: false, options: [] };

export default function useTopBar() {
  const [marketsList, setMarketsList] = useState<MarketDropdownConfig>(
    defaultDropdownPayload
  );
  const [pairsList, setPairsList] = useState<PairDropdownConfig>(
    defaultDropdownPayload
  );
  const ui = useStore((state) => state.ui);
  const markets = useStore((state) => state.markets);
  const mostRecentPositionPrice = useStore(getMostRecentPositionPrice);
  const priceValues = useStore(getTopBarValues);
  const priceHistory = useStore((state) => state.priceHistory);
  const amm = useStore((state) => state.amm);
  const recentPositions = useStore((state) => state.recentPositions);

  useEffect(() => {
    if (!markets.ready) return;

    setMarketsList(generateMarketDropdownProps());
    setPairsList(generatePairDropdownProps(ui.market));
  }, [markets.ready]);

  const handlePairChange = (pair: string | PairId) => {
    ui.changePair(pair as PairId);
    priceHistory.clear();
    amm.clear();
    recentPositions.clear();
  };

  const handleMarketChange = (maketId: string) => {
    const selectedMarketId = maketId as MarketId;
    const pairs = generatePairDropdownProps(selectedMarketId);
    const selectedPair = pairs.options[0].value;

    ui.changeMarket(selectedMarketId);
    handlePairChange(selectedPair);
    setPairsList(pairs);
  };

  return {
    ui,
    mostRecentPositionPrice,
    priceValues,
    marketsList,
    pairsList,
    handleMarketChange,
    handlePairChange,
  };
}
