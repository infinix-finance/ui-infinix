import { useEffect } from "react";
import { Box } from "@mui/material";

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
    updateBalance,
    handleMaxClick,
    handleBaseAmountChange,
    handleQuoteAmountChange,
  } = useAssetAmount();

  useEffect(() => {
    updateBalance();
  }, [updateBalance]);

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
    </Box>
  );
};
