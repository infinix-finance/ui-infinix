import { Meta, Story } from "@storybook/react";

import { Positions } from "./Positions";

export default {
  title: "features/Contents/Positions",
  component: Positions,
} as Meta<typeof Positions>;

const Template: Story<typeof Positions> = (args) => {
  return <Positions {...args} />;
};

export const Default = Template.bind({});
