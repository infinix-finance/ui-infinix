import { BaseAsset, BaseAssetEntry } from "@/components/Atoms";
import { ProductAsset, ProductIds } from "../ProductAsset";

interface ItemProps {
  productIds?: ProductIds;
  assets?: BaseAssetEntry[];
}

export const Item = ({ productIds, assets }: ItemProps) => {
  return productIds ? (
    <ProductAsset productIds={productIds} />
  ) : (
    <BaseAsset assets={assets!} />
  );
};
