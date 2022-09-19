import { getInitialState, useStore } from "@/stores/root";
import { Meta, Story } from "@storybook/react";
import { TopBar } from "./TopBar";

export default {
  title: "features/Contents/TopBar",
  component: TopBar,
} as Meta<typeof TopBar>;

const createStore = (initialize: boolean) => {
  const store = getInitialState();

  if (initialize) {
    store.amm = {
      ...store.amm,
      underlyingPrice: "44249911500751726257",
      price: 16.69214589,
      tradingVolume: "600000000000000000000",
      fundingRate: "56299630959179571",
      nextFunding: new Date().getTime() / 1000 + 605.1, // 10 minutes 5 seconds
    };

    store.recentPositions.list = [
      {
        price: "82000000000000000000",
        timestamp: 1654832745,
        type: "Changing",
      },
    ];
  }

  store.rates.fetchDetails = () => {};
  store.rates.changeMarket = () => {};
  store.rates.changePair = () => {};

  useStore.setState(store);
};

const Template: Story<typeof TopBar> = (args) => {
  return <TopBar {...args} />;
};

export const WithoutData = Template.bind({});
WithoutData.decorators = [
  (Story) => {
    createStore(false);
    return <Story />;
  },
];

export const WithData = Template.bind({});
WithData.decorators = [
  (Story) => {
    createStore(true);
    return <Story />;
  },
];
