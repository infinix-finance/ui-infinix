import { BoxProps, TypographyProps } from "@mui/material";

export type BaseAssetEntry = {
  icon?: string;
  label?: string;
};

export type BaseAssetProps = {
  assets: BaseAssetEntry[];
  iconSize?: number;
  label?: string;
  LabelProps?: TypographyProps;
  disabled?: boolean;
  filter?: string;
} & BoxProps;
