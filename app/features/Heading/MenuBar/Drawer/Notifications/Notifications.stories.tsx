import { Meta, Story } from "@storybook/react";

import { Notifications } from "./Notifications";

export default {
  title: "features/Heading/Notifications",
  component: Notifications,
} as Meta<typeof Notifications>;

const Template: Story<typeof Notifications> = (args) => (
  <Notifications {...args} />
);

export const Default = Template.bind({});
Default.args = {};
