import { BaseAssetProps } from "@/components/Atoms";
import { MarketId, NetworkId, TokenId, WalletId } from "@/defi";

export type ProductIds = TokenId[] | MarketId[] | NetworkId[] | WalletId[];

export interface ProductAssetProps extends Omit<BaseAssetProps, "assets"> {
  productIds?: ProductIds;
}
