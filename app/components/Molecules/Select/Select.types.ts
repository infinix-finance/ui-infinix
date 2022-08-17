import { BaseAssetEntry } from "@/components/Atoms";
import { ProductIds } from "@/defi";
import { InputProps } from "../Input/types";

export type Option = {
  value: any;
  productIds?: ProductIds;
  assets?: BaseAssetEntry[];
  disabled?: boolean;
};

export type SelectProps = {
  value?: any;
  options: Option[];
  searchable?: boolean;
  maxHeight?: number;
} & InputProps;
