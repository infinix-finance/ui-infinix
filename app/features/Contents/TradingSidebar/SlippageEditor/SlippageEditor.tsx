import { Box, Button, Typography } from "@mui/material";
import BigNumber from "bignumber.js";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";

import { useStore } from "@/stores/root";
import { formatNumber } from "@/utils/formatters";
import { getIsValid } from "../TradingSidebar.slice";

import {
  actionStyle,
  containerStyle,
  iconStyle,
  slippageLabelStyle,
} from "./SlippageEditor.styles";

export const SlippageEditor = () => {
  const { slippage } = useStore((state) => state.tradingSidebar);
  const isValid = useStore(getIsValid);
  const formattedSlippage = formatNumber(new BigNumber(slippage), {
    base: 1,
    suffix: "%",
  });

  return (
    <Box sx={containerStyle}>
      <Typography sx={slippageLabelStyle(isValid)} variant="inputLabel">
        Slippage
      </Typography>
      <Box sx={actionStyle}>
        <Typography sx={slippageLabelStyle(isValid)} variant="inputLabel">
          {formattedSlippage}
        </Typography>
        <Button variant="outlined" size="small">
          <CreateOutlinedIcon sx={iconStyle} />
        </Button>
      </Box>
    </Box>
  );
};
