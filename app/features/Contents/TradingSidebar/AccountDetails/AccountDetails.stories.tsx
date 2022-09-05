import BigNumber from "bignumber.js";
import { Meta, Story } from "@storybook/react";

import { getInitialState, useStore } from "@/stores/root";

import { AccountDetails } from "./AccountDetails";

export default {
  title: "features/Contents/TradingSidebar/AccountDetails",
  component: AccountDetails,
} as Meta<typeof AccountDetails>;

const createStore = (balance: number, quoteValue: number) => {
  const store = getInitialState();

  store.tradingSidebar = {
    ...store.tradingSidebar,
    leverage: 3,
    amounts: {
      ...store.tradingSidebar.amounts,
      quoteValue: new BigNumber(quoteValue),
    },
  };

  store.connection = {
    ...store.connection,
    balance: new BigNumber(balance),
  };

  useStore.setState(store);
};

const Template: Story<typeof AccountDetails> = (args) => {
  return <AccountDetails {...args} />;
};

export const WithoutBalance = Template.bind({});
WithoutBalance.decorators = [
  (Story) => {
    createStore(0, 0);
    return <Story />;
  },
];

export const WithBalance = Template.bind({});
WithBalance.decorators = [
  (Story) => {
    createStore(1000, 0);
    return <Story />;
  },
];

export const LowRiskProfile = Template.bind({});
LowRiskProfile.decorators = [
  (Story) => {
    createStore(1000, 200);
    return <Story />;
  },
];

export const MediumRiskProfile = Template.bind({});
MediumRiskProfile.decorators = [
  (Story) => {
    createStore(1000, 500);
    return <Story />;
  },
];

export const HighRiskProfile = Template.bind({});
HighRiskProfile.decorators = [
  (Story) => {
    createStore(1000, 800);
    return <Story />;
  },
];
