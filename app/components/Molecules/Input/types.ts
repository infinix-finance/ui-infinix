import { TextFieldProps } from "@mui/material";

import { ProductIds } from "../ProductAsset";
import { InputLabelProps } from "./InputLabel";

export type InputProps = {
  TopLabelProps?: InputLabelProps;
  BottomLabelProps?: InputLabelProps;
  productIds?: ProductIds;
  trailingText?: string;
  alignEnd?: boolean;
  alert?: boolean;
  setValue?: (value: string) => void;
} & Omit<TextFieldProps, "label" | "startAdornment">;
