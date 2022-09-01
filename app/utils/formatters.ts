import { getProduct, ProductId } from "@/defi";
import BigNumber from "bignumber.js";

const defaultFormat = (
  withThousandSeparator: boolean = true,
  prefix: string = "",
  suffix: string = ""
) => ({
  decimalSeparator: ".",
  groupSeparator: withThousandSeparator ? "," : "",
  groupSize: 3,
  secondaryGroupSize: 0,
  fractionGroupSeparator: " ",
  fractionGroupSize: 0,
  prefix,
  suffix,
});

interface FormatAmountOptions {
  productId?: ProductId;
  base?: number;
  prefix?: string;
  withThousandSeparator?: boolean;
}

export const formatAmount = (
  amount: BigNumber,
  {
    productId,
    base = 2,
    prefix = "",
    withThousandSeparator = true,
  }: FormatAmountOptions = {}
) => {
  if (amount.isNaN()) return "";

  const product = productId ? getProduct(productId).symbol : null;
  const suffix = product ? ` ${product}` : "";
  const formattedAmount = amount.toFormat(
    base,
    defaultFormat(withThousandSeparator, prefix, suffix)
  );

  return formattedAmount;
};

export const toFixedAmount = (amount: BigNumber, base: number = 2) => {
  return formatAmount(amount, { base, withThousandSeparator: false });
};

export const shortenAddress = (address: string | null) => {
  return address ? `${address.slice(0, 5)}...${address.slice(-3)}` : "";
};
