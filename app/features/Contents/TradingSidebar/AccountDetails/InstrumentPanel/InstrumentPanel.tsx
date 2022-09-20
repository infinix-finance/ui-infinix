import { Box, Typography } from "@mui/material";

import {
  alertLevelStyle,
  containerStyle,
  indicatorStyle,
  indicatorTextStyle,
  mediumLevelStyle,
  safeLevelStyle,
} from "./InstrumentPanel.styles";

export interface InstrumentPanelProps {
  percentage: number;
}

export const InstrumentPanel = ({ percentage }: InstrumentPanelProps) => {
  return (
    <Box sx={containerStyle}>
      <Box sx={indicatorStyle(percentage)} />
      <Typography
        sx={indicatorTextStyle(percentage)}
        variant="body3"
        color="secondary.graishLavender"
      >
        {percentage}%
      </Typography>
      <Box sx={alertLevelStyle} />
      <Box sx={mediumLevelStyle} />
      <Box sx={safeLevelStyle} />
    </Box>
  );
};
