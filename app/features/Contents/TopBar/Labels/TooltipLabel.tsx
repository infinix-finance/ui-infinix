import { Box, Tooltip, Typography } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import {
  infoIconStyle,
  labelContainerStyle,
  labelStyle,
  textStyle,
  withTooltipStyle,
} from "./Labels.styles";

interface TooltipLabelProps {
  label: string;
  value: string;
}

export const TooltipLabel = ({ label, value }: TooltipLabelProps) => {
  return (
    <Box sx={labelContainerStyle}>
      <Box sx={withTooltipStyle}>
        <Typography sx={labelStyle}>{label}</Typography>
        <Tooltip title="Tooltip master here" arrow disableHoverListener>
          <InfoOutlinedIcon sx={infoIconStyle} />
        </Tooltip>
      </Box>
      <Typography sx={textStyle}>{value}</Typography>
    </Box>
  );
};
