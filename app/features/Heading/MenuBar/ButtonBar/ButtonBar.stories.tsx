import { Meta, Story } from "@storybook/react";

import { NetworkId } from "@/defi";
import { ButtonBar } from "./ButtonBar";
import { ButtonBarProps, Notifications, Selections } from "./types";
import { useState } from "react";

export default {
  title: "features/Heading/ButtonBar",
  component: ButtonBar,
} as Meta<ButtonBarProps>;

const Template: Story<ButtonBarProps> = (args) => {
  const [value, setValue] = useState<Selections | null>(null);

  return <ButtonBar {...args} selected={value} onSelect={setValue} />;
};

export const WithoutNotifications = Template.bind({});
WithoutNotifications.args = {
  notification: Notifications.inactive,
};

export const WithNotifications = Template.bind({});
WithNotifications.args = {
  notification: Notifications.active,
};

export const WithUnreadNotifications = Template.bind({});
WithUnreadNotifications.args = {
  notification: Notifications.unread,
};

export const ConnectedToNetwork = Template.bind({});
ConnectedToNetwork.args = {
  networkId: NetworkId.avalanche,
};
