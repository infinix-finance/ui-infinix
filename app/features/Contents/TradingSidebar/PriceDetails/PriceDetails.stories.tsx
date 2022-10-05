import { Meta, Story } from "@storybook/react";
import BigNumber from "bignumber.js";

import { getInitialState, useStore } from "@/stores/root";

import { PriceDetails } from "./PriceDetails";

export default {
  title: "features/Contents/TradingSidebar/PriceDetails",
  component: PriceDetails,
} as Meta<typeof PriceDetails>;

const createStore = (amount: number) => {
  const store = getInitialState();

  store.tradingSidebar = {
    ...store.tradingSidebar,
    leverage: 3,
    amounts: {
      ...store.tradingSidebar.amounts,
      quoteValue: new BigNumber(amount),
    },
  };

  store.connection = {
    ...store.connection,
    active: true,
  };

  store.amm = {
    ...store.amm,
    price: 1,
  };

  useStore.setState(store);
};

const Template: Story<typeof PriceDetails> = (args) => {
  return <PriceDetails {...args} />;
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
