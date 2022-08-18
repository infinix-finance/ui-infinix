import { Box, Typography } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import {
  labelContainerStyle,
  labelStyle,
  textStyle,
  withIconStyle,
} from "./Labels.styles";

interface PercentageChangeLabelProps {
  change: number;
  value: string;
}

export const PercentageChangeLabel = ({
  change,
  value,
}: PercentageChangeLabelProps) => {
  const isPositiveChange = change > 0;

  return (
    <Box sx={labelContainerStyle}>
      <Box sx={withIconStyle(isPositiveChange)}>
        {isPositiveChange ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        <Typography sx={labelStyle}>{`${change.toFixed(1)}%`}</Typography>
      </Box>
      <Typography sx={textStyle}>{value}</Typography>
    </Box>
  );
};
