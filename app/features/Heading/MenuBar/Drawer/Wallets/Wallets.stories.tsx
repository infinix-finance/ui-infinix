import { getNetwork, NetworkId, WalletId } from "@/defi";
import { getInitialState, useStore } from "@/stores/root";
import { Box } from "@mui/material";
import { Meta, Story } from "@storybook/react";

import { Wallets } from "./Wallets";

export default {
  title: "features/Heading/Wallets",
  component: Wallets,
} as Meta<typeof Wallets>;

const createStore = (networkId?: NetworkId) => {
  const store = getInitialState();

  if (networkId) {
    store.connection.connected = true;
    store.connection.accounts = ["0x09f0F5035f9633c58b3493D4C4334291E643B262"];
    store.connection.wallet = {
      networkId,
      walletId: WalletId.metamask,
    };
  }

  store.connection.connect = () => {};
  store.connection.disconnect = () => {};

  useStore.setState(store);
};

const Template: Story<typeof Wallets> = (args) => (
  <Box sx={{ height: "90vh" }}>
    <Wallets {...args} />
  </Box>
);

export const Disconnected = Template.bind({});
Disconnected.decorators = [
  (Story) => {
    createStore();
    return <Story />;
  },
];

export const ConnectedWithAvalanche = Template.bind({});
ConnectedWithAvalanche.decorators = [
  (Story) => {
    createStore(NetworkId.avalanche);
    return <Story />;
  },
];

export const ConnectedWithOther = Template.bind({});
ConnectedWithOther.decorators = [
  (Story) => {
    createStore(NetworkId.arbitrum);
    return <Story />;
  },
];
