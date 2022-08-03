import { BaseAsset, BaseAssetEntry } from "@/components/Atoms";
import { ProductAsset, ProductIds } from "../ProductAsset";

interface ItemProps {
  productIds?: ProductIds;
  assets?: BaseAssetEntry[];
  showDescription?: boolean;
}

export const Item = ({
  productIds,
  assets,
  showDescription = false,
}: ItemProps) => {
  return productIds ? (
    <ProductAsset productIds={productIds} showDescription={showDescription} />
  ) : (
    <BaseAsset assets={assets!} showDescription={showDescription} />
  );
};
