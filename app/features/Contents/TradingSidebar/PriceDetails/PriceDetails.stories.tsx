import BigNumber from "bignumber.js";
import { Meta, Story } from "@storybook/react";

import { getInitialState, useStore } from "@/stores/root";

import { PriceDetails } from "./PriceDetails";

export default {
  title: "features/Contents/TradingSidebar/PriceDetails",
  component: PriceDetails,
} as Meta<typeof PriceDetails>;

const createStore = () => {
  const store = getInitialState();

  store.tradingSidebar = {
    ...store.tradingSidebar,
    leverage: 3,
    amounts: {
      ...store.tradingSidebar.amounts,
      quoteValue: new BigNumber(100),
    },
  };

  useStore.setState(store);
};

const Template: Story<typeof PriceDetails> = (args) => {
  return <PriceDetails {...args} />;
};

export const Default = Template.bind({});
Default.decorators = [
  (Story) => {
    createStore();
    return <Story />;
  },
];
