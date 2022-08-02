import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

import { getContainerProps, getIconStyle } from "./BaseAsset.styles";
import { BaseAssetProps } from "./types";

const SEPARATOR = "/";

export const BaseAsset = ({
  assets,
  iconSize = 24,
  iconOnly = false,
  label,
  LabelProps,
  disabled = false,
  ...rest
}: BaseAssetProps) => {
  if (![1, 2].includes(assets.length)) {
    throw new Error("Assets array can include either 1 or 2 assets");
  }

  const assetLabel = assets
    .filter((asset) => Boolean(asset.label))
    .map((asset) => asset.label)
    .join(SEPARATOR);

  return (
    <Box {...getContainerProps(iconOnly)} {...rest}>
      <Box display="flex" alignItems="center">
        {assets.map((asset, index) => (
          <Box
            key={index}
            display="flex"
            sx={getIconStyle(index, iconSize, disabled)}
            aria-label="Base Asset Icon"
          >
            <Image
              src={asset.icon}
              alt={asset.label}
              width={iconSize}
              height={iconSize}
            />
          </Box>
        ))}
      </Box>
      <Typography
        variant="body2"
        color={disabled ? "secondary.graishLavender" : "primary.ice"}
        {...LabelProps}
      >
        {label || `${assetLabel}`}
      </Typography>
    </Box>
  );
};
