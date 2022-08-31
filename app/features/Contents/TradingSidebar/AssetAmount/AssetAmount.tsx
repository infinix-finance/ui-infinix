import { Box } from "@mui/material";
import BigNumber from "bignumber.js";

import { Input } from "@/components";
import { PairId } from "@/defi";
import useAssetAmount from "./useAssetAmount";

import { containerStyle } from "./AssetAmount.styles";

export interface AssetAmountProps {
  pairId: PairId;
  balance: BigNumber;
  exchangeRate: BigNumber;
}

export const AssetAmount = ({
  pairId,
  balance = new BigNumber(0),
  exchangeRate,
}: AssetAmountProps) => {
  const {
    baseAmount,
    quoteAmount,
    baseProduct,
    quoteProduct,
    formattedBalance,
    commonProps,
    handleMaxClick,
    handleBaseAmountChange,
    handleQuoteAmountChange,
  } = useAssetAmount(pairId, balance, exchangeRate);

  return (
    <Box sx={containerStyle}>
      <Input
        value={baseAmount}
        productIds={[baseProduct]}
        TopLabelProps={{
          LabelProps: {
            value: "Asset",
          },
          SecondaryLabelProps: {
            value: "Amount",
          },
        }}
        onChange={handleBaseAmountChange}
        {...commonProps}
      />
      <Input
        value={quoteAmount}
        productIds={[quoteProduct]}
        BottomLabelProps={{
          SecondaryLabelProps: {
            value: formattedBalance,
          },
          ButtonProps: {
            label: "Max",
            onClick: handleMaxClick,
          },
        }}
        onChange={handleQuoteAmountChange}
        {...commonProps}
      />
    </Box>
  );
};
