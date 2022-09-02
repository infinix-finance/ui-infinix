import { Meta, Story } from "@storybook/react";

import { getInitialState, useStore } from "@/stores/root";

import { SlippageEditor } from "./SlippageEditor";

export default {
  title: "features/Contents/TradingSidebar/SlippageEditor",
  component: SlippageEditor,
} as Meta<typeof SlippageEditor>;

const createStore = () => {
  const store = getInitialState();

  store.tradingSidebar = {
    ...store.tradingSidebar,
    slippage: 1.6,
  };

  useStore.setState(store);
};

const Template: Story<typeof SlippageEditor> = (args) => {
  return <SlippageEditor {...args} />;
};

export const Default = Template.bind({});
Default.decorators = [
  (Story) => {
    createStore();
    return <Story />;
  },
];
