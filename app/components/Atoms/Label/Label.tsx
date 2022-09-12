import React from "react";
import {
  Typography,
  TooltipProps,
  TypographyProps,
  Box,
  BoxProps,
  Tooltip,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import { containerStyle, infoIconStyle } from "./Label.styles";

export type LabelProps = {
  label: string;
  TypographyProps?: TypographyProps;
  TooltipProps?: TooltipProps;
} & BoxProps;

export const Label: React.FC<LabelProps> = ({
  label,
  TypographyProps,
  TooltipProps,
  ...boxProps
}) => {
  return (
    <Box sx={containerStyle} {...boxProps}>
      <Box display="flex" alignItems="center" gap={1.75}>
        <Typography variant="body2" color="primary.ice" {...TypographyProps}>
          {label}
        </Typography>
        {TooltipProps && (
          <Tooltip {...TooltipProps} arrow>
            <InfoOutlinedIcon sx={infoIconStyle} />
          </Tooltip>
        )}
      </Box>
    </Box>
  );
};
