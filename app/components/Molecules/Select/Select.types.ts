import { BaseAssetEntry } from "@/components/Atoms";
import { InputProps } from "../Input/types";
import { ProductIds } from "../ProductAsset";

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
