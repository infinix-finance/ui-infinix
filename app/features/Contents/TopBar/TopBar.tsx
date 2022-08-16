import { Select } from "@/components";
import { TokenId } from "@/defi";
import { Box } from "@mui/material";
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

const props = {
  searchable: true,
  options: [
    {
      value: "select1",
      productIds: [TokenId.ftm],
    },
    {
      value: "select2",
      productIds: [TokenId.usdc],
    },
    {
      value: "select3",
      productIds: [TokenId.avax],
    },
    {
      value: "select4",
      productIds: [TokenId.chaos],
      disabled: true,
    },
  ],
};

export const TopBar = () => {
  return (
    <Box sx={containerStyle}>
      <Box sx={dropdownContainerStyle}>
        <Select sx={selectStyle} value="select1" {...props} />
        <Select sx={selectStyle} value="select1" {...props} />
      </Box>
      <PercentageChangeLabel />
      <TooltipLabel label="Mark Price" />
      <TooltipLabel label="Index Price" />
      <TooltipLabel label="Funding" />
      <VolumeLabel />
      <CountdownLabel />
    </Box>
  );
};
