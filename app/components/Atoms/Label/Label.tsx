import React from "react";
import {
  Typography,
  useTheme,
  TooltipProps,
  TypographyProps,
  Box,
  BoxProps,
  Tooltip,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

export type LabelProps = {
  label: string;
  TypographyProps?: TypographyProps;
  TooltipProps?: TooltipProps;
  BalanceProps?: {
    title?: string;
    TitleTypographyProps?: TypographyProps;
    balance?: string;
    BalanceTypographyProps?: TypographyProps;
  };
} & BoxProps;

export const Label: React.FC<LabelProps> = ({
  label,
  TypographyProps,
  TooltipProps,
  BalanceProps,
  ...boxProps
}) => {
  const theme = useTheme();
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      mb={1.5}
      {...boxProps}
    >
      {
        <Box display="flex" alignItems="center" gap={1.75}>
          <Typography variant="body2" color="text.primary" {...TypographyProps}>
            {label}
          </Typography>
          {TooltipProps && TooltipProps.title && (
            <Tooltip {...TooltipProps} arrow>
              <InfoOutlinedIcon
                sx={{
                  color: theme.palette.primary.light,
                  "&:hover": {
                    color: theme.palette.secondary.main,
                  },
                }}
              />
            </Tooltip>
          )}
        </Box>
      }
      {BalanceProps && (BalanceProps.title || BalanceProps.balance) && (
        <Box display="flex">
          <Typography
            variant="body2"
            color="text.secondary"
            {...BalanceProps.TitleTypographyProps}
          >
            {BalanceProps.title}
          </Typography>
          <Typography
            variant="body2"
            ml={0.5}
            {...BalanceProps.BalanceTypographyProps}
          >
            {BalanceProps.balance}
          </Typography>
        </Box>
      )}
    </Box>
  );
};
