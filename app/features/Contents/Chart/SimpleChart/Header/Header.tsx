/* istanbul ignore file */
import {
  Box,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import BigNumber from "bignumber.js";
import FilterVintageOutlinedIcon from "@mui/icons-material/FilterVintageOutlined";

import { ProductAsset } from "@/components";
import { getPair, getProduct, PairId, Timeframes, TokenId } from "@/defi";
import { formatNumber, formatPercentage } from "@/utils/formatters";

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

export interface HeaderProps {
  timeframe?: Timeframes;
  pairId?: PairId;
  price?: BigNumber;
  change?: BigNumber;
  percentage?: number;
  onChange?: (event: React.MouseEvent<HTMLElement>, value: Timeframes) => void;
}

export const Header = ({
  timeframe = Timeframes._1d,
  pairId = PairId.btcusdc,
  price = new BigNumber(140.32),
  change = new BigNumber(0.1234),
  percentage = 12.44,
  onChange = () => {},
}: HeaderProps) => {
  const [baseProductId, quoteProductId] = getPair(pairId).productIds;
  const baseProduct = getProduct(baseProductId);
  const quoteProduct = getProduct(quoteProductId);
  const changeValue = formatNumber(change, { showSign: true });
  const changePercentage = formatPercentage(percentage, 2, { showSign: true });
  const changeColor = change.gt(0) ? "alert.lemon" : "alert.guava";

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
              {baseProduct.name}
            </Typography>
            <Button sx={productButtonStyle} variant="outlined" size="small">
              <FilterVintageOutlinedIcon />
            </Button>
          </Box>

          <Box sx={priceAndDetailsStyle}>
            <Typography variant="h5" color="primary.ice">
              {formatNumber(price)}
            </Typography>
            <Box sx={detailsContainerStyle}>
              <Typography variant="body1" color="featured.grape">
                D
              </Typography>
              <Box sx={detailsStyle}>
                <Typography variant="body3" color="secondary.graishLavender">
                  {quoteProduct.symbol}
                </Typography>
                <Typography variant="body1" color={changeColor}>
                  {changeValue}
                </Typography>
                <Typography variant="body1" color={changeColor}>
                  {changePercentage}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <ToggleButtonGroup
        sx={buttonGroupStyle}
        value={timeframe}
        exclusive
        color="primary"
        disabled={false}
        onChange={onChange}
      >
        {Object.values(Timeframes).map((timeframe) => (
          <ToggleButton key={timeframe} value={timeframe}>
            {timeframe.toUpperCase()}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Box>
  );
};
