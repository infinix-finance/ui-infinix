import { BaseAssetProps } from "@/components/Atoms";
import { ProductIds } from "@/defi";

export interface ProductAssetProps extends Omit<BaseAssetProps, "assets"> {
  productIds?: ProductIds;
}
