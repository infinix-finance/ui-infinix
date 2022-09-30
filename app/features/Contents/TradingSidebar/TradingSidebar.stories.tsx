import { Meta, Story } from "@storybook/react";
import BigNumber from "bignumber.js";

import { getInitialState, useStore } from "@/stores/root";

import { PairId } from "@/defi";
import { TradingSidebar } from "./TradingSidebar";

export default {
  title: "features/Contents/TradingSidebar",
  component: TradingSidebar,
} as Meta<typeof TradingSidebar>;

const createStore = (balance: number) => {
  const store = getInitialState();

  store.markets = {
    ...store.markets,
    pairId: PairId.ETHUSDC,
  };
  store.tradingSidebar.balance = new BigNumber(balance);
  store.tradingSidebar.slippage = 1.6;

  useStore.setState(store);
};

const Template: Story<typeof TradingSidebar> = (args) => {
  return <TradingSidebar {...args} />;
};

export const Default = Template.bind({});
Default.decorators = [
  (Story) => {
    createStore(0);
    return <Story />;
  },
];

export const WithBalance = Template.bind({});
WithBalance.decorators = [
  (Story) => {
    createStore(1000);
    return <Story />;
  },
];
