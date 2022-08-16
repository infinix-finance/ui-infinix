import { Box, Typography } from "@mui/material";
import {
  extraGapStyle,
  labelContainerStyle,
  labelStyle,
  textStyle,
} from "./Labels.styles";

export const VolumeLabel = () => {
  return (
    <Box sx={[labelContainerStyle, extraGapStyle]}>
      <Typography sx={labelStyle}>24h Volume</Typography>
      <Typography sx={textStyle}>$175.22</Typography>
    </Box>
  );
};
