import { Meta, Story } from "@storybook/react";

import { InputLabel } from "./InputLabel";
import { InputLabelProps } from "./types";

export default {
  title: "molecules/Input/InputLabel",
  component: InputLabel,
} as Meta;

const Template: Story<InputLabelProps> = (args) => <InputLabel {...args} />;

export const LabelOnly = Template.bind({});
LabelOnly.args = {
  LabelProps: {
    value: "Input Label",
  },
};

export const LabelsWithButton = Template.bind({});
LabelsWithButton.args = {
  LabelProps: {
    value: "Input Label",
  },
  SecondaryLabelProps: {
    value: "Secondary Label",
  },
  ButtonProps: {
    label: "Button Label",
  },
};

export const LabelsWithDisabledButton = Template.bind({});
LabelsWithDisabledButton.args = {
  LabelProps: {
    value: "Input Label",
  },
  SecondaryLabelProps: {
    value: "Secondary Label",
  },
  ButtonProps: {
    label: "Button Label",
  },
  disabled: true,
  error: true,
};
