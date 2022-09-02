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

interface FormatNumberOptions {
  productId?: ProductId;
  base?: number;
  prefix?: string;
  suffix?: string;
  withThousandSeparator?: boolean;
}

export const formatNumber = (
  amount: BigNumber,
  {
    productId,
    base = 2,
    prefix = "",
    suffix = "",
    withThousandSeparator = true,
  }: FormatNumberOptions = {}
) => {
  if (amount.isNaN()) return "";

  const product = productId ? getProduct(productId).symbol : null;
  const calculatedSuffix = suffix ? suffix : product ? ` ${product}` : "";
  const formattedAmount = amount.toFormat(
    base,
    defaultFormat(withThousandSeparator, prefix, calculatedSuffix)
  );

  return formattedAmount;
};

export const toFixedNumber = (amount: BigNumber, base: number = 2) => {
  return formatNumber(amount, { base, withThousandSeparator: false });
};

export const shortenAddress = (address: string | null) => {
  return address ? `${address.slice(0, 5)}...${address.slice(-3)}` : "";
};
