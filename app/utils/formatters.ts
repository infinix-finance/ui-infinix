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
  num: BigNumber | number,
  {
    productId,
    base = 2,
    prefix = "",
    suffix = "",
    withThousandSeparator = true,
  }: FormatNumberOptions = {}
) => {
  const convertedNum = new BigNumber(num);

  if (convertedNum.isNaN()) return "";

  const product = productId ? getProduct(productId).symbol : null;
  const calculatedSuffix = suffix ? suffix : product ? ` ${product}` : "";
  const formattedAmount = convertedNum.toFormat(
    base,
    defaultFormat(withThousandSeparator, prefix, calculatedSuffix)
  );

  return formattedAmount;
};

export const toFixedNumber = (amount: BigNumber | number, base: number = 2) => {
  return formatNumber(amount, { base, withThousandSeparator: false });
};

export const formatUsdValue = (value: BigNumber | number, base: number = 2) => {
  return formatNumber(value, { base, prefix: "$" });
};

export const formatPercentage = (
  value: BigNumber | number,
  base: number = 0
) => {
  return formatNumber(value, { base, suffix: "%" });
};

export const formatLeverage = (value: BigNumber | number, base: number = 0) => {
  return formatNumber(value, { base, suffix: "X" });
};

export const shortenAddress = (address: string | null) => {
  return address ? `${address.slice(0, 5)}...${address.slice(-3)}` : "";
};
