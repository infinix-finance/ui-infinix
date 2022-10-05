import { getInitialState, useStore } from "@/stores/root";
import { Typography } from "@mui/material";
import { Meta, Story } from "@storybook/react";

import { Loader } from "./Loader";

export default {
  title: "features/Loader",
  component: Loader,
} as Meta<typeof Loader>;

const createStore = (ready: boolean) => {
  const store = getInitialState();

  store.markets = {
    ...store.markets,
    ready,
  };

  useStore.setState(store);
};

const Template: Story<typeof Loader> = (args) => {
  return (
    <Loader>
      <Typography>Page loaded mock</Typography>
    </Loader>
  );
};

export const LoadingState = Template.bind({});
LoadingState.decorators = [
  (Story) => {
    createStore(false);
    return <Story />;
  },
];

export const CompleteState = Template.bind({});
CompleteState.decorators = [
  (Story) => {
    createStore(true);
    return <Story />;
  },
];
