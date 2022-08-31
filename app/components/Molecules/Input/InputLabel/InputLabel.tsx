import React from "react";
import { Typography, Box, Button } from "@mui/material";

import { InputLabelProps } from "./types";
import { boxStyle, inputBox } from "./InputLabel.styles";

export const InputLabel = ({
  LabelProps,
  SecondaryLabelProps,
  ButtonProps,
  disabled = false,
  error = false,
  ...boxProps
}: InputLabelProps) => {
  return (
    <Box sx={boxStyle} {...boxProps}>
      <Box display="flex" alignItems="center" gap={2}>
        {LabelProps && (
          <Typography
            variant="inputLabel"
            color={error ? "alert.guava" : "secondary.graishLavender"}
            {...LabelProps.TypographyProps}
          >
            {LabelProps.value}
          </Typography>
        )}
      </Box>
      <Box sx={inputBox}>
        {SecondaryLabelProps && (
          <Typography
            variant="inputLabel"
            color="secondary.graishLavender"
            {...SecondaryLabelProps.TypographyProps}
          >
            {SecondaryLabelProps.value}
          </Typography>
        )}
        {ButtonProps && (
          <Button
            disabled={disabled}
            variant="outlined"
            size="small"
            {...ButtonProps}
          >
            {ButtonProps.label}
          </Button>
        )}
      </Box>
    </Box>
  );
};
