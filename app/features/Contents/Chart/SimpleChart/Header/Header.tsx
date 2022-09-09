import {
  Box,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import FilterVintageOutlinedIcon from "@mui/icons-material/FilterVintageOutlined";

import { ProductAsset } from "@/components";
import { TokenId } from "@/defi";

import {
  topStyle,
  detailsStyle,
  detailsContainerStyle,
  contentStyle,
  containerStyle,
  buttonGroupStyle,
  productButtonStyle,
  productStyle,
  priceAndDetailsStyle,
} from "./Header.styles";

const TIMEFRAMES = ["1d", "1m", "3m", "1y", "5y", "all"];

export const Header = () => {
  return (
    <Box sx={containerStyle}>
      <Box sx={topStyle}>
        <ProductAsset
          productIds={[TokenId.btc]}
          showLabel={false}
          iconSize={48}
        />

        <Box sx={contentStyle}>
          <Box sx={productStyle}>
            <Typography variant="body1" color="secondary.graishLavender">
              Bitcoint Inc.
            </Typography>
            <Button sx={productButtonStyle} variant="outlined" size="small">
              <FilterVintageOutlinedIcon />
            </Button>
          </Box>

          <Box sx={priceAndDetailsStyle}>
            <Typography variant="h5" color="primary.ice">
              170.00
            </Typography>
            <Box sx={detailsContainerStyle}>
              <Typography variant="body1" color="featured.grape">
                D
              </Typography>
              <Box sx={detailsStyle}>
                <Typography variant="body3" color="secondary.graishLavender">
                  USDC
                </Typography>
                <Typography variant="body1" color="alert.lemon">
                  +2.21
                </Typography>
                <Typography variant="body1" color="alert.lemon">
                  +4.10%
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <ToggleButtonGroup
        sx={buttonGroupStyle}
        value={"1d"}
        exclusive
        color="primary"
        disabled={false}
        onChange={() => {}}
      >
        {TIMEFRAMES.map((timeframe) => (
          <ToggleButton key={timeframe} value={timeframe}>
            {timeframe.toUpperCase()}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Box>
  );
};
