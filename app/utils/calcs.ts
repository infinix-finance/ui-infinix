import BigNumber from "bignumber.js";
import { WritableDraft } from "immer/dist/internal";

export const calculateChange = (
  last: BigNumber | WritableDraft<BigNumber>,
  penultimate: BigNumber | WritableDraft<BigNumber>
): BigNumber => {
  return last.minus(penultimate);
};

export const calculateChangePercentage = (
  last: BigNumber | WritableDraft<BigNumber>,
  penultimate: BigNumber | WritableDraft<BigNumber>
): BigNumber => {
  const result = calculateChange(last, penultimate)
    .div(last.abs())
    .multipliedBy(100);
  return result.isFinite() ? result : new BigNumber(0);
};
