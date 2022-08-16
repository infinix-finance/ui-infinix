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
}

export const TooltipLabel = ({ label }: TooltipLabelProps) => {
  return (
    <Box sx={labelContainerStyle}>
      <Box sx={withTooltipStyle}>
        <Typography sx={labelStyle}>{label}</Typography>
        <Tooltip title="Tooltip master here" arrow>
          <InfoOutlinedIcon sx={infoIconStyle} />
        </Tooltip>
      </Box>
      <Typography sx={textStyle}>$175.22</Typography>
    </Box>
  );
};
