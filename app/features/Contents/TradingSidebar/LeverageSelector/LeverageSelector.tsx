import { useState } from "react";
import {
  Box,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";

import { useLayout } from "@/hooks/responsive";

import useLeverageSelector from "./useLeverageSelector";

import {
  buyingPowerLabelStyle,
  buyingPowerStyle,
  containerStyle,
} from "./LeverageSelector.styles";

const LEVERAGES = [1, 3, 5, 7, 10];

export const LeverageSelector = () => {
  const {
    isValid,
    leverage,
    buyingPowerLabel,
    buyingPower,
    handleChangeLeverage,
  } = useLeverageSelector();
  const { isSmallDesktop } = useLayout();

  return (
    <Box sx={containerStyle}>
      <Box sx={buyingPowerStyle}>
        <Typography sx={buyingPowerLabelStyle(isValid)} variant="inputLabel">
          {buyingPowerLabel}
        </Typography>
        <Typography sx={buyingPowerLabelStyle(isValid)} variant="inputLabel">
          {buyingPower}
        </Typography>
      </Box>
      <Box sx={buyingPowerStyle}>
        {!isSmallDesktop && (
          <Typography variant="inputLabel" color="secondary.graishLavender">
            Leverage
          </Typography>
        )}
        <ToggleButtonGroup
          value={leverage}
          exclusive
          color="primary"
          disabled={!isValid}
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
