import { Meta, Story } from "@storybook/react";
import { MenuBar } from "./MenuBar";

export default {
  title: "features/Heading/MenuBar",
  component: MenuBar,
} as Meta<typeof MenuBar>;

const Template: Story<typeof MenuBar> = (args) => <MenuBar {...args} />;

export const Default = Template.bind({});
Default.args = {};
