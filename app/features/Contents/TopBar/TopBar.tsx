import { Box, Button } from "@mui/material";
import { useEffect } from "react";

import { Select, useSnackbar } from "@/components";
import { MarketId, PairId } from "@/defi";
import { useStore } from "@/stores/root";

import {
  generateMarketDropdownProps,
  generatePairDropdownProps,
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
const pairDropdownProps = generatePairDropdownProps();

export const TopBar = () => {
  const rates = useStore((state) => state.rates);

  const handleMarketChange = (maketId: string) => {
    const selectedMarketId = maketId as MarketId;
    rates.changeMarket(selectedMarketId);
    rates.changePair(pairDropdownProps[selectedMarketId].options[0].value);
  };

  const handlePairChange = (pair: string) => {
    rates.changePair(pair as PairId);
  };

  // TODO: Remove when connecting with real data
  useEffect(() => {
    rates.fetchDetails();
  }, []);

  const { enqueueSnackbar } = useSnackbar();
  const { showSnackbar } = useStore((store) => store.notifications);

  const handleClick = () => {
    enqueueSnackbar({
      title: "this is the title" + Math.random(),
      description: "this is the current description",
      severity: "success",
    });
  };

  const handleClick2 = () => {
    showSnackbar({
      title: "this is the title" + Math.random(),
      description: "this is the current description",
      severity: "warning",
    });
  };

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
          {...pairDropdownProps[rates.market]}
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
      <Button onClick={handleClick}>clickme</Button>
      <Button onClick={handleClick2}>clickme</Button>
    </Box>
  );
};
