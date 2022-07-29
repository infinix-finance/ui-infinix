import { ComponentStory, ComponentMeta } from "@storybook/react";
import { InfoOutlined } from "@mui/icons-material";

import { LabeledSwitch } from "./LabeledSwitch";

export default {
  title: "molecules/TextAndSwitches",
  component: LabeledSwitch,
  textFirst: {
    options: [true, false],
  },
} as ComponentMeta<typeof LabeledSwitch>;

const defaultArgs = {
  label: "Text element",
};

const Template: ComponentStory<typeof LabeledSwitch> = (args) => (
  <LabeledSwitch {...args} {...defaultArgs} />
);

export const LabeledSwitches = Template.bind({});
LabeledSwitches.args = {
  textFirst: true,
};

export const LabeledSwitchesWithTooltip = Template.bind({});
LabeledSwitchesWithTooltip.args = {
  TooltipProps: {
    title: "Tooltip master here",
    children: <InfoOutlined />,
    open: true,
  },
  textFirst: true,
};
