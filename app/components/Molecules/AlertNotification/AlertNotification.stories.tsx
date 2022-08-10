import { Box } from "@mui/material";
import { Story, Meta } from "@storybook/react";

import { AlertNotification, AlertNotificationProps } from "./AlertNotification";

export default {
  title: "molecules/AlertNotification",
  component: AlertNotification,
} as Meta<AlertNotificationProps>;

const Template: Story<AlertNotificationProps> = (args) => (
  <Box display="flex" flexDirection="column" gap={2}>
    <AlertNotification {...args} severity="info" />
    <AlertNotification {...args} severity="success" />
    <AlertNotification {...args} severity="warning" />
    <AlertNotification {...args} severity="error" />
  </Box>
);

export const WithDescription = Template.bind({});
WithDescription.args = {
  description: "Description only",
  onClose: undefined,
};

export const WithTitleDescription = Template.bind({});
WithTitleDescription.args = {
  title: "Title",
  description: "This is a longer text",
  onClose: () => {},
};

export const WithProgress = Template.bind({});
WithProgress.args = {
  title: "Title",
  description: "This is a longer text",
  showProgress: true,
  onClose: () => {},
};

export const WithLinkAndAction = Template.bind({});
WithLinkAndAction.args = {
  title: "Title",
  description: "This is a longer text",
  url: "https://coinmarketcap.com",
  actionLabel: "Hello there",
  onClose: () => {},
  onAction: () => {},
};

export const Inline = Template.bind({});
Inline.args = {
  description: "Description only",
  onClose: undefined,
  inline: true,
};

export const InlineWithProgress = Template.bind({});
InlineWithProgress.args = {
  description: "Description only",
  onClose: undefined,
  inline: true,
  showProgress: true,
};
