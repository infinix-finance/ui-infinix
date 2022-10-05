import { Meta, Story } from "@storybook/react";
import BigNumber from "bignumber.js";

import { getInitialState, useStore } from "@/stores/root";

import { SlippageEditor } from "./SlippageEditor";

export default {
  title: "features/Contents/TradingSidebar/SlippageEditor",
  component: SlippageEditor,
} as Meta<typeof SlippageEditor>;

const createStore = (balance: number) => {
  const store = getInitialState();

  store.tradingSidebar = {
    ...store.tradingSidebar,
    slippage: 1.6,
    balance: new BigNumber(balance),
  };

  store.connection = {
    ...store.connection,
    active: true,
  };

  useStore.setState(store);
};

const Template: Story<typeof SlippageEditor> = (args) => {
  return <SlippageEditor {...args} />;
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
