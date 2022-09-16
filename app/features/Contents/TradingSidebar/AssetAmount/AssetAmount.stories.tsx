import { Meta, Story } from "@storybook/react";
import BigNumber from "bignumber.js";

import { PairId } from "@/defi";

import { AssetAmount } from "./AssetAmount";

import { getInitialState, useStore } from "@/stores/root";

export default {
  title: "features/Contents/TradingSidebar/AssetAmount",
  component: AssetAmount,
} as Meta<typeof AssetAmount>;

const createStore = (balance: number, exchangeRate: number) => {
  const store = getInitialState();

  store.tradingSidebar = {
    ...store.tradingSidebar,
    amounts: {
      base: "",
      baseValue: new BigNumber(0),
      quote: "",
      quoteValue: new BigNumber(0),
    },
    balance: new BigNumber(balance),
  };

  store.rates = {
    ...store.rates,
    pair: PairId.ethusdc,
    exchangeRate: new BigNumber(exchangeRate),
  };

  useStore.setState(store);
};

const Template: Story<typeof AssetAmount> = (args) => {
  return <AssetAmount {...args} />;
};

export const WithBalance = Template.bind({});
WithBalance.decorators = [
  (Story) => {
    createStore(22100.345, 1250.123456);
    return <Story />;
  },
];

export const WithoutBalance = Template.bind({});
WithoutBalance.decorators = [
  (Story) => {
    createStore(0, 1250.123456);
    return <Story />;
  },
];
