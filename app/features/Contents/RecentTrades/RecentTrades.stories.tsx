import { getInitialState, useStore } from "@/stores/root";
import { Meta, Story } from "@storybook/react";

import { RecentTrades } from "./RecentTrades";

export default {
  title: "features/Contents/RecentTrades",
  component: RecentTrades,
} as Meta<typeof RecentTrades>;

const createStore = () => {
  const store = getInitialState();

  store.recentPositions.list = [
    {
      entryPrice: "82000000000000000000",
      underlyingPrice: "",
      leverage: "",
      timestamp: 1654832745,
      size: "3453625431243266457",
      type: "Changing",
    },
    {
      entryPrice: "82000000000000000000",
      underlyingPrice: "",
      leverage: "",
      timestamp: 1654832745,
      size: "-3453625431243266457",
      type: "Changing",
    },
  ];

  useStore.setState(store);
};

const Template: Story<typeof RecentTrades> = (args) => {
  return <RecentTrades {...args} />;
};

export const Default = Template.bind({});
Default.decorators = [
  (Story) => {
    createStore();
    return <Story />;
  },
];
