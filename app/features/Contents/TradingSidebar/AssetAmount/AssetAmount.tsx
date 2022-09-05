import { Box, Typography } from "@mui/material";

import { Input } from "@/components";
import useAssetAmount from "./useAssetAmount";

import { containerStyle } from "./AssetAmount.styles";

export const AssetAmount = () => {
  const {
    base,
    quote,
    baseProduct,
    quoteProduct,
    formattedBalance,
    commonProps,
    dummyValue,
    handleMaxClick,
    handleBaseAmountChange,
    handleQuoteAmountChange,
  } = useAssetAmount();

  return (
    <Box sx={containerStyle}>
      <Input
        value={base}
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
        value={quote}
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
      <Typography>{dummyValue}</Typography>
    </Box>
  );
};
