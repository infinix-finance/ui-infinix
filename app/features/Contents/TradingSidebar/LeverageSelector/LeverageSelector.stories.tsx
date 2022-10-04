import { Meta, Story } from "@storybook/react";
import BigNumber from "bignumber.js";

import { getInitialState, useStore } from "@/stores/root";

import { LeverageSelector } from "./LeverageSelector";

export default {
  title: "features/Contents/TradingSidebar/LeverageSelector",
  component: LeverageSelector,
} as Meta<typeof LeverageSelector>;

const createStore = (balance: number) => {
  const store = getInitialState();

  store.tradingSidebar = {
    ...store.tradingSidebar,
    leverage: 3,
    amounts: {
      ...store.tradingSidebar.amounts,
      quoteValue: new BigNumber(100),
    },
    balance: new BigNumber(balance),
  };

  store.connection = {
    ...store.connection,
    active: true,
  };

  useStore.setState(store);
};

const Template: Story<typeof LeverageSelector> = (args) => {
  return <LeverageSelector {...args} />;
};

export const Default = Template.bind({});
Default.decorators = [
  (Story) => {
    createStore(0);
    return <Story />;
  },
];

export const Valid = Template.bind({});
Valid.decorators = [
  (Story) => {
    createStore(1000);
    return <Story />;
  },
];
