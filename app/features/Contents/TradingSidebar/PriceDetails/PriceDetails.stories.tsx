import { Meta, Story } from "@storybook/react";
import BigNumber from "bignumber.js";

import { getInitialState, useStore } from "@/stores/root";

import { PriceDetails } from "./PriceDetails";

export default {
  title: "features/Contents/TradingSidebar/PriceDetails",
  component: PriceDetails,
} as Meta<typeof PriceDetails>;

const createStore = (baseAmount: number, quoteAmount: number) => {
  const store = getInitialState();

  store.tradingSidebar = {
    ...store.tradingSidebar,
    leverage: 3,
    amounts: {
      ...store.tradingSidebar.amounts,
      baseValue: new BigNumber(baseAmount),
      quoteValue: new BigNumber(quoteAmount),
    },
  };

  store.connection = {
    ...store.connection,
    active: true,
  };

  store.amm = {
    ...store.amm,
    underlyingPrice: "1111111111111111111",
    baseAssetReserve: "95235933160933348370",
    quoteAssetReserve: "10500238374418629152713",
  };

  store.tradingSidebar.balance = new BigNumber(1000);

  useStore.setState(store);
};

const Template: Story<typeof PriceDetails> = (args) => {
  return <PriceDetails {...args} />;
};

export const Default = Template.bind({});
Default.decorators = [
  (Story) => {
    createStore(0, 0);
    return <Story />;
  },
];

export const Valid = Template.bind({});
Valid.decorators = [
  (Story) => {
    createStore(2.28, 100);
    return <Story />;
  },
];
