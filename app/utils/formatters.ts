import { getProduct, ProductId } from "@/defi";
import BigNumber from "bignumber.js";

export const shortenAddress = (address: string | null) => {
  return address ? `${address.slice(0, 5)}...${address.slice(-3)}` : "";
};

export const formatAmount = (
  amount: BigNumber,
  { base = 2, productId }: { base?: number; productId?: ProductId } = {}
) => {
  if (amount.isNaN()) return "";

  const product = productId ? getProduct(productId) : null;
  const formattedAmount = amount.toFixed(base);

  return product ? `${formattedAmount} ${product.symbol}` : formattedAmount;
};
