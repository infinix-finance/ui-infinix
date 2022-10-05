import { getInitialState, useStore } from "@/stores/root";
import { Meta, Story } from "@storybook/react";

import { Notifications } from "./Notifications";

import { positions } from "@/__mocks__/positionsMock";

export default {
  title: "features/Heading/Notifications",
  component: Notifications,
} as Meta<{ mockEmpty: boolean }>;

const createStore = (empty: boolean) => {
  const store = getInitialState();

  const marketsList = {
    Crypto: {
      BTCUSDC: "0x0",
      AVAXUSDC: "0xe5639cbb02ec3bd65c77e128b0c7350aeefb2bd1",
    },
  };

  store.markets.list = marketsList;
  store.markets.ready = true;
  store.connection = {
    ...store.connection,
    active: true,
  };
  useStore.setState(store);
  !empty && useStore.getState().userPositions.setPositions(positions);
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
