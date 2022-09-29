import { getInitialState, useStore } from "@/stores/root";
import { Meta, Story } from "@storybook/react";

import { Notifications } from "./Notifications";

export default {
  title: "features/Heading/Notifications",
  component: Notifications,
} as Meta<{ mockEmpty: boolean }>;

const createStore = (empty: boolean) => {
  const store = getInitialState();

  const historyEntry1 = {
    timestamp: 1654832730,
    type: "Opening",
    entryPrice: "106080000000000000043",
    underlyingPrice: "44489137202278124603",
    size: "1885369532428355957",
    fundingPayment: "0",
    leverage: "2000000000000000000",
    notification: true,
    margin: "100000000000000000000",
    fee: "0",
    realizedPnl: "0",
    unrealizedPnlAfter: "0",
  };
  const historyEntry2 = {
    timestamp: 1654832745,
    type: "Margin Changing",
    entryPrice: "82000000000000000000",
    underlyingPrice: "44489137202278124603",
    size: "-1",
    fundingPayment: "0",
  };
  const list = [
    {
      position: {
        amm: "0xe5639cbb02ec3bd65c77e128b0c7350aeefb2bd1",
      } as any,
      history: [historyEntry1, historyEntry2],
    },
  ];
  const marketsList = {
    Crypto: {
      BTCUSDC: "0x0",
      AVAXUSDC: "0xe5639cbb02ec3bd65c77e128b0c7350aeefb2bd1",
    },
  };

  store.markets.list = marketsList;
  store.markets.ready = true;
  useStore.setState(store);
  !empty && useStore.getState().userPositions.setPositions(list);
};

const Template: Story = (args) => <Notifications {...args} />;

export const Default = Template.bind({});
Default.decorators = [
  (Story) => {
    createStore(false);
    return <Story />;
  },
];

export const Empty = Template.bind({});
Empty.decorators = [
  (Story) => {
    createStore(true);
    return <Story />;
  },
];
