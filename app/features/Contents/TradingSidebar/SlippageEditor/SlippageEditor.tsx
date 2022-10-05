import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import { Box, Button, Typography } from "@mui/material";
import BigNumber from "bignumber.js";
import { useState } from "react";

import { Modal, Select } from "@/components";

import { useStore } from "@/stores/root";
import { formatNumber } from "@/utils/formatters";
import { getIsBalanceSet } from "../TradingSidebar.slice";

import {
  actionStyle,
  containerStyle,
  dropdownContainerStyle,
  iconStyle,
  selectStyle,
  slippageLabelStyle,
} from "./SlippageEditor.styles";

export const SlippageEditor = () => {
  const [open, setOpen] = useState(false);
  const { slippage, setSlippage } = useStore((state) => state.tradingSidebar);
  const { active } = useStore((state) => state.connection);
  const [newSlippage, setNewSlippage] = useState(slippage);
  const isBalanceSet = useStore(getIsBalanceSet);
  const isValid = isBalanceSet && active;
  const formattedSlippage = formatNumber(new BigNumber(slippage), {
    base: 1,
    suffix: "%",
  });

  // TODO: Should be replaced in the future
  const slippageOptions = [
    {
      value: 0,
      assets: [{ label: "0.0%" }],
    },
    {
      value: 0.5,
      assets: [{ label: "0.5%" }],
    },
    {
      value: 1,
      assets: [{ label: "1.0%" }],
    },
    {
      value: 1.5,
      assets: [{ label: "1.5%" }],
    },
    {
      value: 2,
      assets: [{ label: "2.0%" }],
    },
  ];

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setSlippage(newSlippage);
    setOpen(false);
  };

  const handleSlippageChange = (value: string) => {
    setNewSlippage(+value);
  };

  return (
    <Box sx={containerStyle}>
      <Typography sx={slippageLabelStyle(isValid)} variant="inputLabel">
        Slippage
      </Typography>
      <Box sx={actionStyle}>
        <Typography sx={slippageLabelStyle(isValid)} variant="inputLabel">
          {formattedSlippage}
        </Typography>
        <Button variant="outlined" size="small" onClick={handleOpen}>
          <CreateOutlinedIcon sx={iconStyle} />
        </Button>
      </Box>
      <Modal open={open}>
        <Box sx={dropdownContainerStyle}>
          <Typography variant="h6" component="h2">
            Select slippage
          </Typography>
          <Box sx={actionStyle}>
            <Select
              sx={selectStyle}
              value={newSlippage}
              setValue={handleSlippageChange}
              options={slippageOptions}
            />
            <Button variant="outlined" onClick={handleClose}>
              Save slippage
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};
