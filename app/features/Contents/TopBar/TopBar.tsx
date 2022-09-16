import { Box } from "@mui/material";

import { Select, useSnackbar } from "@/components";
import { getMarket, MarketId, PairId } from "@/defi";
import { useStore } from "@/stores/root";

import {
  generateMarketDropdownProps,
  generatePairDropdownProps,
} from "./utils";
import { CountdownLabel, TooltipLabel, VolumeLabel } from "./Labels";

import {
  containerStyle,
  dropdownContainerStyle,
  selectStyle,
} from "./TopBar.styles";
import { getTopBarValues } from "@/stores/slices/api/amm";
import { getMostRecentPositionPrice } from "@/stores/slices/api/recentPositions";

const marketDropdownProps = generateMarketDropdownProps();
const pairDropdownProps = generatePairDropdownProps();

export const TopBar = () => {
  const rates = useStore((state) => state.rates);
  const mostRecentPositionPrice = useStore(getMostRecentPositionPrice);
  const priceValues = useStore(getTopBarValues);

  const handleMarketChange = (maketId: string) => {
    const selectedMarketId = maketId as MarketId;
    rates.changeMarket(selectedMarketId);
    rates.changePair(pairDropdownProps[selectedMarketId].options[0].value);

    // TODO: Remove after demo
    enqueueSnackbar({
      title: "Market change",
      description:
        "You have changed the market to " + getMarket(selectedMarketId).name,
      severity: "success",
    });
    showTopNotification({
      description:
        "You have changed the market to " + getMarket(selectedMarketId).name,
      severity: "success",
    });
  };

  const handlePairChange = (pair: string) => {
    rates.changePair(pair as PairId);

    // TODO: Remove after demo
    showSnackbar({
      title: "Pair change",
      description: "You have changed the pair to " + pair,
      severity: "warning",
    });
  };

  const { enqueueSnackbar } = useSnackbar();
  const { showSnackbar, showTopNotification, hideTopNotification } = useStore(
    (store) => store.notifications
  );

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
      <TooltipLabel label="Entry Price" value={mostRecentPositionPrice} />
      <TooltipLabel label="Mark Price" value={priceValues.markPrice} />
      <TooltipLabel label="Index Price" value={priceValues.indexPrice} />
      <TooltipLabel label="Funding" value={priceValues.fundingRate} />
      <VolumeLabel value={priceValues.totalVolume} />
      <CountdownLabel startMillis={priceValues.countDownMillis} />
    </Box>
  );
};
