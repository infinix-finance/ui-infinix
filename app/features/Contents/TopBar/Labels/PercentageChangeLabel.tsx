import { Box, Typography } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

import {
  labelContainerStyle,
  labelStyle,
  textStyle,
  withIconStyle,
} from "./Labels.styles";

export const PercentageChangeLabel = () => {
  return (
    <Box sx={labelContainerStyle}>
      <Box sx={withIconStyle}>
        <ArrowDropUpIcon />
        <Typography sx={labelStyle}>1.0%</Typography>
      </Box>
      <Typography sx={textStyle}>$175.22</Typography>
    </Box>
  );
};
