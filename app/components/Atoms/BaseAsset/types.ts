import { BoxProps, TypographyProps } from "@mui/material";

export type BaseAssetEntry = {
  icon?: string;
  label?: string;
  description?: string;
};

export type BaseAssetProps = {
  assets: BaseAssetEntry[];
  iconSize?: number;
  label?: string;
  LabelProps?: TypographyProps;
  filter?: string;
  showDescription?: boolean;
} & BoxProps;
