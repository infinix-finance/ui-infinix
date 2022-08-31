import { Meta, Story } from "@storybook/react";

import { PairId } from "@/defi";

import { AssetAmount, AssetAmountProps } from "./AssetAmount";
import BigNumber from "bignumber.js";

export default {
  title: "features/Contents/TradingSidebar/AssetAmount",
  component: AssetAmount,
} as Meta<AssetAmountProps>;

const Template: Story<AssetAmountProps> = (args) => {
  return <AssetAmount {...args} />;
};

export const WithBalance = Template.bind({});
WithBalance.args = {
  pairId: PairId.ethusdc,
  balance: new BigNumber(22100.345),
  exchangeRate: new BigNumber(1250.123456),
};

export const WithoutBalance = Template.bind({});
WithoutBalance.args = {
  pairId: PairId.ethusdc,
  exchangeRate: new BigNumber(1250.123456),
};
