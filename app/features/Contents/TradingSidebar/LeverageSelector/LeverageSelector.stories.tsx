import BigNumber from "bignumber.js";
import { Meta, Story } from "@storybook/react";

import { getInitialState, useStore } from "@/stores/root";

import { LeverageSelector } from "./LeverageSelector";

export default {
  title: "features/Contents/TradingSidebar/LeverageSelector",
  component: LeverageSelector,
} as Meta<typeof LeverageSelector>;

const createStore = () => {
  const store = getInitialState();

  store.tradingSidebar = {
    ...store.tradingSidebar,
    leverage: 3,
  };

  store.connection = {
    ...store.connection,
    balance: new BigNumber(100),
  };

  useStore.setState(store);
};

const Template: Story<typeof LeverageSelector> = (args) => {
  return <LeverageSelector {...args} />;
};

export const Default = Template.bind({});
Default.decorators = [
  (Story) => {
    createStore();
    return <Story />;
  },
];
