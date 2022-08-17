import { NetworkId, WalletId } from "@/defi";
import { getInitialState, useStore } from "@/stores/root";
import { Meta, Story } from "@storybook/react";
import { MenuBar } from "./MenuBar";

export default {
  title: "features/Heading/MenuBar",
  component: MenuBar,
} as Meta<typeof MenuBar>;

const createStore = (chainId?: NetworkId) => {
  const store = getInitialState();

  if (chainId) {
    store.connection.active = true;
    store.connection.account = "0x09f0F5035f9633c58b3493D4C4334291E643B262";
    store.connection.chainId = chainId;
    store.connection.walletId = WalletId.metamask;

    if (chainId !== NetworkId.avalanche) {
      store.notifications.sidebar = {
        severity: "error",
        visible: true,
        title: "You need to connect to Avalanche.",
        actionLabel: "Switch",
      };
    }
  }

  store.notifications.hideSidebarNotification = () => {};

  useStore.setState(store);
};

const Template: Story<typeof MenuBar> = (args) => <MenuBar {...args} />;

export const Disconnected = Template.bind({});
Disconnected.decorators = [
  (Story) => {
    createStore();
    return <Story />;
  },
];

export const ConnectedToAvalanche = Template.bind({});
ConnectedToAvalanche.decorators = [
  (Story) => {
    createStore(NetworkId.avalanche);
    return <Story />;
  },
];

export const ConnectedToOther = Template.bind({});
ConnectedToOther.decorators = [
  (Story) => {
    createStore(NetworkId.ethereum);
    return <Story />;
  },
];
