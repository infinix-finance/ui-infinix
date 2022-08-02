import { BoxProps, ButtonProps, TypographyProps } from "@mui/material";

export type InputLabelProps = {
  LabelProps: {
    value: string;
    TypographyProps?: TypographyProps;
  };
  SecondaryLabelProps?: {
    value: string;
    TypographyProps?: TypographyProps;
  };
  ButtonProps?: Omit<ButtonProps, "disabled"> & {
    label: string;
  };
  disabled?: boolean;
  error?: boolean;
} & BoxProps;
