import React from "react";
import { Box, BoxProps, Typography } from "@mui/material";
import Image from "next/image";

export type Asset = {
  icon: string;
  label?: string;
};

export type PairAssetProps = {
  assets: Asset[];
  iconSize?: number;
  iconOnly?: boolean;
  centeredLabel?: boolean;
  label?: string;
} & BoxProps;

export const PairAsset: React.FC<PairAssetProps> = ({
  assets,
  iconSize = 24,
  iconOnly,
  centeredLabel,
  label,
  ...rest
}) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent={centeredLabel ? "center" : undefined}
      position="relative"
      width="100%"
      gap={iconOnly ? 0 : 2}
      flex="none"
      {...rest}
    >
      {assets.length > 0 && (
        <Box
          display="flex"
          position={centeredLabel ? "absolute" : undefined}
          left={centeredLabel ? 0 : undefined}
          alignItems="center"
        >
          {assets.map((asset, index) => (
            <Box
              key={index}
              display="flex"
              marginLeft={index > 0 ? -1.5 : undefined}
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
      )}
      <Typography variant="body2" color="text.primary">
        {label || `${assets.map((asset) => asset.label).join("-")}`}
      </Typography>
    </Box>
  );
};
