import { getInitialState, useStore } from "@/stores/root";
import { Meta, Story } from "@storybook/react";
import { TopBar } from "./TopBar";

export default {
  title: "features/Contents/TopBar",
  component: TopBar,
} as Meta<typeof TopBar>;

const createStore = (initialize: boolean, positiveChange: boolean = true) => {
  const store = getInitialState();

  if (initialize) {
    store.rates = {
      ...store.rates,
      percentageChange: positiveChange ? 21.3456 : -3.567,
      percentageValue: "$101.50",
      markPrice: "$210.00",
      indexPrice: "$350.40",
      funding: "0.0123%",
      volumeValue: "$222.33",
      startMillis: 2000000,
    };
  }

  store.rates.fetchDetails = () => {};

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

export const WithPositiveChange = Template.bind({});
WithPositiveChange.decorators = [
  (Story) => {
    createStore(true);
    return <Story />;
  },
];

export const WithNegativeChange = Template.bind({});
WithNegativeChange.decorators = [
  (Story) => {
    createStore(true, false);
    return <Story />;
  },
];
