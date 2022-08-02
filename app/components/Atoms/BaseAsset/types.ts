import { BoxProps, TypographyProps } from "@mui/material";

export type Asset = {
  icon: string;
  label?: string;
};

export type BaseAssetProps = {
  assets: Asset[];
  iconSize?: number;
  iconOnly?: boolean;
  label?: string;
  LabelProps?: TypographyProps;
  disabled?: boolean;
} & BoxProps;
