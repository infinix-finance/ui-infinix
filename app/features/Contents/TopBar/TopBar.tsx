import { Box } from "@mui/material";
import { useEffect, useState } from "react";

import { Select } from "@/components";
import { MarketId, PairId } from "@/defi";
import { useStore } from "@/stores/root";

import {
  generateMarketDropdownProps,
  generatePairDropdownProps,
  PairDropdownProps,
} from "./utils";
import {
  CountdownLabel,
  PercentageChangeLabel,
  TooltipLabel,
  VolumeLabel,
} from "./Labels";

import {
  containerStyle,
  dropdownContainerStyle,
  selectStyle,
} from "./TopBar.styles";

const marketDropdownProps = generateMarketDropdownProps();

export const TopBar = () => {
  const [pairProps, setPairProps] = useState<PairDropdownProps>(
    generatePairDropdownProps(MarketId.crypto)
  );
  const rates = useStore((state) => state.rates);

  const handleMarketChange = (maketId: string) => {
    const selectedMarketId = maketId as MarketId;
    rates.changeMarket(selectedMarketId);

    const pairProps = generatePairDropdownProps(selectedMarketId);
    setPairProps(pairProps);
    rates.changePair(pairProps.options[0].value);
  };

  const handlePairChange = (pair: string) => {
    rates.changePair(pair as PairId);
  };

  // TODO: Remove when connecting with real data
  useEffect(() => {
    rates.fetchDetails();
  }, []);

  return (
    <Box sx={containerStyle}>
      <Box sx={dropdownContainerStyle}>
        <Select
          sx={selectStyle}
          value={rates.market}
          setValue={handleMarketChange}
          {...marketDropdownProps}
        />
        <Select
          sx={selectStyle}
          value={rates.pair}
          setValue={handlePairChange}
          {...pairProps}
        />
      </Box>
      <PercentageChangeLabel
        change={rates.percentageChange}
        value={rates.percentageValue}
      />
      <TooltipLabel label="Mark Price" value={rates.markPrice} />
      <TooltipLabel label="Index Price" value={rates.indexPrice} />
      <TooltipLabel label="Funding" value={rates.funding} />
      <VolumeLabel value={rates.volumeValue} />
      <CountdownLabel startMillis={rates.startMillis} />
    </Box>
  );
};
