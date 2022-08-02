import { BaseAssetProps } from "@/components/Atoms";
import { MarketId, NetworkId, TokenId } from "@/defi";

export type ProductIds = TokenId[] | MarketId[] | NetworkId[];

export interface ProductAssetProps extends Omit<BaseAssetProps, "assets"> {
  productIds: ProductIds;
}
