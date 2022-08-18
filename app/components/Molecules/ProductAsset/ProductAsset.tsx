import { getProduct } from "@/defi";
import { BaseAsset } from "@/components/Atoms/BaseAsset";
import { ProductAssetProps } from "./types";

export const ProductAsset = ({ productIds, ...props }: ProductAssetProps) => {
  if (!productIds) {
    return null;
  }

  const assets = productIds.map((productId) => {
    const product = getProduct(productId);
    return {
      icon: product?.icon || "/static/unknown.svg",
      label: product?.symbol || "Unknown",
      description: product?.name || "",
    };
  });

  return <BaseAsset assets={assets} {...props} />;
};
