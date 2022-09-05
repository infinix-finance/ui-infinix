import BigNumber from "bignumber.js";
import { Meta, Story } from "@storybook/react";

import { getInitialState, useStore } from "@/stores/root";

import { Positions } from "./Positions";
import { PairId } from "@/defi";

export default {
  title: "features/Contents/Positions",
  component: Positions,
} as Meta<typeof Positions>;

/* const createStore = (balance: number) => {
  const store = getInitialState();

  store.rates = {
    ...store.rates,
    pair: PairId.ethusdc,
    exchangeRate: new BigNumber(100),
  };
  store.connection.balance = new BigNumber(balance);
  store.tradingSidebar.slippage = 1.6;

  useStore.setState(store);
}; */

const Template: Story<typeof Positions> = (args) => {
  return <Positions {...args} />;
};

export const Default = Template.bind({});
