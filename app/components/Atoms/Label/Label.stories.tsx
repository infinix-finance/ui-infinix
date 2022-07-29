import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Label } from "./Label";

export default {
  title: "atoms/Label",
  component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const TooltipLabels = Template.bind({});

TooltipLabels.args = {
  label: "Label master here",
  TypographyProps: {},
  TooltipProps: {
    title: "Tooltip master here",
    children: <></>,
  },
};

export const TooltipLabelsWithBalance = Template.bind({});

TooltipLabelsWithBalance.args = {
  label: "Amount",
  TypographyProps: {},
  BalanceProps: {
    title: "Balance ",
    balance: "435",
  },
};
