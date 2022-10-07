import BigNumber from "bignumber.js";

import { getPair, getProduct, PairId, ProductId } from "@/defi";

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
  showSign?: boolean;
  withThousandSeparator?: boolean;
}

export const formatNumber = (
  num: BigNumber | number,
  {
    productId,
    base = 2,
    prefix = "",
    suffix = "",
    showSign = false,
    withThousandSeparator = true,
  }: FormatNumberOptions = {}
) => {
  const convertedNum = new BigNumber(num);

  if (convertedNum.isNaN()) return "";

  const roundedNum = convertedNum.decimalPlaces(base);
  const product = productId ? getProduct(productId).symbol : null;
  const calculatedSuffix = suffix ? suffix : product ? ` ${product}` : "";
  const calculatedSign = showSign && roundedNum.gt(0) ? "+" : "";
  const formattedAmount = roundedNum.toFormat(
    base,
    defaultFormat(
      withThousandSeparator,
      calculatedSign || prefix,
      calculatedSuffix
    )
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
  base: number = 0,
  options: FormatNumberOptions = {}
) => {
  return formatNumber(value, { base, suffix: "%", ...options });
};

export const formatLeverage = (value: BigNumber | number, base: number = 0) => {
  return formatNumber(value, { base, suffix: "X" });
};

export const shortenAddress = (address: string | null) => {
  return address ? `${address.slice(0, 5)}...${address.slice(-3)}` : "";
};

export const capitalize = (value: string | null) => {
  if (!value) return "";

  return `${value.substring(0, 1).toUpperCase()}${value
    .slice(1)
    .toLowerCase()}`;
};

export const formatPair = (pairId: PairId) => {
  const pair = getPair(pairId);

  return pair.productIds.reduce((label, productId, idx) => {
    const separator = idx > 0 ? "/" : "";
    const symbol = getProduct(productId as ProductId).symbol;

    return `${label}${separator}${symbol}`;
  }, "");
};

/* Convert 10.999 to 10999000 */
export const toBaseUnit = (
  rawAmt: string | number | Nullish,
  decimals?: number
) => {
  if (!rawAmt || rawAmt === "0") return new BigNumber(0);

  const raw = new BigNumber(rawAmt);
  const base = new BigNumber(10);

  return raw.times(base.pow(decimals || 18)).integerValue();
};

/* Convert 10999000 to 10.999 */
export const toTokenUnit = (
  tokenAmount: string | number | Nullish,
  tokenDecimals?: number
) => {
  if (!tokenAmount || tokenAmount === "0") return new BigNumber(0);

  const amt = new BigNumber(tokenAmount);
  const digits = new BigNumber(10).pow(tokenDecimals || 18);

  return amt.div(digits);
};
