import { Box, Typography } from "@mui/material";
import {
  countdownLabelContainerStyle,
  countdownTextStyle,
  extraGapStyle,
  labelContainerStyle,
  labelStyle,
  textStyle,
} from "./Labels.styles";

export const CountdownLabel = () => {
  return (
    <Box
      sx={[labelContainerStyle, countdownLabelContainerStyle, extraGapStyle]}
    >
      <Typography sx={labelStyle}>Countdown</Typography>
      <Typography sx={[textStyle, countdownTextStyle]}>06:23:45</Typography>
    </Box>
  );
};
