import { Box } from "@mui/material";

import { Select } from "@/components";
import { CountdownLabel, TooltipLabel, VolumeLabel } from "./Labels";

import useTopBar from "./useTopBar";

import {
  containerStyle,
  dropdownContainerStyle,
  selectStyle,
} from "./TopBar.styles";

export const TopBar = () => {
  const {
    ui,
    mostRecentPositionPrice,
    priceValues,
    marketsList,
    pairsList,
    handleMarketChange,
    handlePairChange,
  } = useTopBar();

  return (
    <Box sx={containerStyle}>
      <Box sx={dropdownContainerStyle}>
        <Select
          sx={selectStyle}
          value={marketsList.options.length ? ui.market : ""}
          showDescription={false}
          setValue={handleMarketChange}
          {...marketsList}
        />
        <Select
          sx={selectStyle}
          value={pairsList.options.length ? ui.pair : ""}
          setValue={handlePairChange}
          {...pairsList}
        />
      </Box>
      <TooltipLabel label="Entry Price" value={mostRecentPositionPrice} />
      <TooltipLabel label="Mark Price" value={priceValues.markPrice} />
      <TooltipLabel label="Index Price" value={priceValues.indexPrice} />
      <TooltipLabel label="Funding" value={priceValues.fundingRate} />
      <VolumeLabel value={priceValues.totalVolume} />
      <CountdownLabel startMillis={priceValues.countDownMillis} />
    </Box>
  );
};
