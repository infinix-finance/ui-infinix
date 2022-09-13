import { Meta, Story } from "@storybook/react";

import { Notifications } from "./Notifications";

export default {
  title: "features/Heading/Notifications",
  component: Notifications,
} as Meta<{ mockEmpty: boolean }>;

const Template: Story<{ mockEmpty: boolean }> = (args) => (
  <Notifications {...args} />
);

export const Default = Template.bind({});
Default.args = {
  mockEmpty: false,
};

export const Empty = Template.bind({});
Empty.args = {
  mockEmpty: true,
};
