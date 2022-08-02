import {
  getMarket,
  getNetwork,
  getToken,
  isMarket,
  isToken,
  MarketId,
  NetworkId,
  TokenId,
} from "@/defi";
import { BaseAsset } from "@/components/Atoms/BaseAsset";
import { ProductAssetProps } from "./types";

export const ProductAsset = ({ productIds, ...props }: ProductAssetProps) => {
  const tokens = productIds.map((productId) => {
    const product =
      (isToken(productId) && getToken(productId as TokenId)) ||
      (isMarket(productId) && getMarket(productId as MarketId)) ||
      getNetwork(productId as NetworkId);

    return {
      icon: product.icon,
      label: product.symbol,
    };
  });

  return <BaseAsset assets={tokens} {...props} />;
};
