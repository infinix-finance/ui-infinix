import { Box, Typography } from "@mui/material";
import {
  extraGapStyle,
  labelContainerStyle,
  labelStyle,
  textStyle,
} from "./Labels.styles";

interface VolumeLabelProps {
  value: string;
}

export const VolumeLabel = ({ value }: VolumeLabelProps) => {
  return (
    <Box sx={[labelContainerStyle, extraGapStyle]}>
      <Typography sx={labelStyle}>24h Volume</Typography>
      <Typography sx={textStyle}>{value}</Typography>
    </Box>
  );
};
