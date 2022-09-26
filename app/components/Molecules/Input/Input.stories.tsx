import { TokenId } from "@/defi";
import { Box, SxProps } from "@mui/material";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Input } from "./Input";
import { InputProps } from "./types";

const InputsStories = (props: InputProps) => {
  const boxStyle: Partial<SxProps> = {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    resize: "both",
    overflow: "auto",
    padding: 2,
  };

  return (
    <Box sx={boxStyle}>
      <Input value="Input text" {...props} />
      <Input placeholder="Placeholder text" {...props} />
      <Input value="Disabled text" {...props} disabled />
      <Input value="Error text" {...props} error />
      <Input value="Alert text" {...props} alert />
    </Box>
  );
};
export default {
  title: "molecules/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof InputsStories> = (args) => (
  <InputsStories {...args} />
);

const labelProps = {
  LabelProps: {
    value: "Text Input Label",
  },
  SecondaryLabelProps: {
    value: "Secondary Input Label",
  },
  ButtonProps: {
    label: "Input Button",
  },
};

export const InputAlone = Template.bind({});
InputAlone.args = {};

export const InputWithProducts = Template.bind({});
InputWithProducts.args = {
  productIds: [TokenId.USDC],
};

export const InputWithEndAndornment = Template.bind({});
InputWithEndAndornment.args = {
  trailingText: "static text",
};

export const RightAlignedInputWithProducts = Template.bind({});
RightAlignedInputWithProducts.args = {
  productIds: [TokenId.USDC],
  alignEnd: true,
};

export const InputWithTopLabel = Template.bind({});
InputWithTopLabel.args = {
  TopLabelProps: labelProps,
};

export const InputWithBottomLabel = Template.bind({});
InputWithBottomLabel.args = {
  BottomLabelProps: labelProps,
};
