import BigNumber from "bignumber.js";
import { Meta, Story } from "@storybook/react";

import { getInitialState, useStore } from "@/stores/root";

import { DataGrid } from "./DataGrid";

export default {
  title: "features/Contents/Positions/DataGrid",
  component: DataGrid,
} as Meta<typeof DataGrid>;

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

const Template: Story<typeof DataGrid> = (args) => {
  return <DataGrid {...args} />;
};

export const Default = Template.bind({});
