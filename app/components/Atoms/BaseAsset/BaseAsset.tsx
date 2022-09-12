import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

import {
  containerProps,
  getIconStyle,
  textContainerStyle,
} from "./BaseAsset.styles";
import { BaseAssetProps } from "./types";

const SEPARATOR = "/";

export const BaseAsset = ({
  assets,
  iconSize = 24,
  label,
  description,
  showDescription = false,
  descriptionComponent,
  LabelProps,
  DescriptionProps,
  showLabel = true,
  ...rest
}: BaseAssetProps) => {
  if (![1, 2].includes(assets.length)) {
    throw new Error("Assets array can include either 1 or 2 assets");
  }

  const iconsPresent = assets.some((asset) => Boolean(asset.icon));
  const assetLabelCreator = (prop: "label" | "description") =>
    assets
      .filter((asset) => Boolean(asset[prop]))
      .map((asset) => asset[prop])
      .join(SEPARATOR);
  const assetLabel = assetLabelCreator("label");
  const assetDescription = assetLabelCreator("description");

  return (
    <Box {...containerProps} {...rest}>
      {iconsPresent && (
        <Box display="flex" alignItems="center">
          {assets.map((asset, index) => (
            <Box
              key={index}
              display="flex"
              sx={getIconStyle(index, iconSize)}
              aria-label="Base Asset Icon"
            >
              {asset.icon && (
                <Image
                  src={asset.icon}
                  alt={asset.label}
                  width={iconSize}
                  height={iconSize}
                />
              )}
            </Box>
          ))}
        </Box>
      )}
      {showLabel && (
        <Box sx={textContainerStyle}>
          <Typography
            height={iconSize}
            variant="body2"
            color="primary.ice"
            {...LabelProps}
          >
            {label || assetLabel}
          </Typography>
          {descriptionComponent}
          {(showDescription || description) && (
            <Typography
              variant="body3"
              color="secondary.graishLavender"
              {...DescriptionProps}
            >
              {description || assetDescription}
            </Typography>
          )}
        </Box>
      )}
    </Box>
  );
};
