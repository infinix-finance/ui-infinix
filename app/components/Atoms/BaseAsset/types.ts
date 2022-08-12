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
  description?: string;
  LabelProps?: TypographyProps;
  DescriptionProps?: TypographyProps;
  showLabel?: boolean;
  showDescription?: boolean;
  filter?: string;
} & BoxProps;
