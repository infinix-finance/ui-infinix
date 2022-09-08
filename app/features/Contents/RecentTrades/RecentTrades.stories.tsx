import { Meta, Story } from "@storybook/react";

import { RecentTrades } from "./RecentTrades";

export default {
  title: "features/Contents/RecentTrades",
  component: RecentTrades,
} as Meta<typeof RecentTrades>;

const Template: Story<typeof RecentTrades> = (args) => {
  return <RecentTrades {...args} />;
};

export const Default = Template.bind({});
