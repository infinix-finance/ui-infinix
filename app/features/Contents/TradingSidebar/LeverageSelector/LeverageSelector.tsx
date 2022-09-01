import { useState } from "react";
import {
  Box,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";

import useLeverageSelector from "./useLeverageSelector";

import { buyingPowerStyle, containerStyle } from "./LeverageSelector.styles";

const LEVERAGES = [1, 3, 5, 7, 10];

export const LeverageSelector = () => {
  const { leverage, buyingPowerLabel, buyingPower, handleChangeLeverage } =
    useLeverageSelector();

  return (
    <Box sx={containerStyle}>
      <Box sx={buyingPowerStyle}>
        <Typography variant="inputLabel">{buyingPowerLabel}</Typography>
        <Typography variant="inputLabel">{buyingPower}</Typography>
      </Box>
      <Box sx={buyingPowerStyle}>
        <Typography variant="inputLabel" color="secondary.graishLavender">
          Leverage
        </Typography>
        <ToggleButtonGroup
          value={leverage}
          exclusive
          color="primary"
          onChange={handleChangeLeverage}
        >
          {LEVERAGES.map((leverage) => (
            <ToggleButton key={leverage} value={leverage}>
              {leverage}X
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Box>
    </Box>
  );
};
