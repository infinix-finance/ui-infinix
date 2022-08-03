import { useState } from "react";
import { Box, SxProps } from "@mui/material";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Select } from "./Select";
import { TokenId } from "@/defi";
import { SelectProps } from "./types";

const SelectsStories = (props: SelectProps) => {
  const boxStyle: Partial<SxProps> = {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    resize: "both",
    overflow: "auto",
    padding: 2,
  };

  const [value, setValue] = useState<string>("select1");

  return (
    <Box sx={boxStyle}>
      <Select value={value} setValue={setValue} {...props} />
      <Select value="select1" {...props} disabled />
    </Box>
  );
};

export default {
  title: "molecules/Select",
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof SelectsStories> = (args) => (
  <SelectsStories {...args} />
);

export const TextOnlySelects = Template.bind({});
TextOnlySelects.args = {
  options: [
    {
      value: "select1",
      assets: [{ label: "Select 1" }],
    },
    {
      value: "select2",
      assets: [{ label: "Select 2" }],
    },
    {
      value: "select3",
      assets: [{ label: "Select 3" }],
    },
    {
      value: "select4",
      assets: [{ label: "Select 4" }],
    },
  ],
};

export const SearchableTextOnlySelects = Template.bind({});
SearchableTextOnlySelects.args = {
  searchable: true,
  options: [
    {
      value: "select1",
      assets: [{ label: "Select 1" }],
    },
    {
      value: "select2",
      assets: [{ label: "Select 2" }],
    },
    {
      value: "select3",
      assets: [{ label: "Select 3" }],
    },
    {
      value: "select4",
      assets: [{ label: "Select 4" }],
    },
  ],
};

export const SingleTokenSelects = Template.bind({});
SingleTokenSelects.args = {
  searchable: true,
  options: [
    {
      value: "select1",
      productIds: [TokenId.ftm],
    },
    {
      value: "select2",
      productIds: [TokenId.usdc],
    },
    {
      value: "select3",
      productIds: [TokenId.avax],
    },
    {
      value: "select4",
      productIds: [TokenId.chaos],
      disabled: true,
    },
  ],
};

export const MultiTokenSelects = Template.bind({});
MultiTokenSelects.args = {
  searchable: true,
  options: [
    {
      value: "select1",
      productIds: [TokenId.ftm, TokenId.usdc],
    },
    {
      value: "select3",
      productIds: [TokenId.avax, TokenId.usdc],
    },
    {
      value: "select4",
      productIds: [TokenId.chaos, TokenId.usdc],
      disabled: true,
    },
  ],
};
