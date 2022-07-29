import { Box, SxProps } from "@mui/material";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";

import { SearchInput, SearchInputProps } from "./SearchInput";

const SearchInputsStories = (props: SearchInputProps) => {
  const boxStyle: Partial<SxProps> = {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    resize: "both",
    overflow: "auto",
    padding: 2,
  };
  const [value, setValue] = useState<string>("Search Text");
  return (
    <Box sx={boxStyle}>
      <SearchInput value={value} setValue={setValue} {...props} />
      <SearchInput value="" placeholder="Placeholder text" {...props} />
      <SearchInput value="Disabled text" {...props} disabled />
    </Box>
  );
};

export default {
  title: "atoms/SearchInput",
  component: SearchInputsStories,
} as ComponentMeta<typeof SearchInputsStories>;

const Template: ComponentStory<typeof SearchInputsStories> = (args) => (
  <SearchInputsStories {...args} />
);

export const SearchInputs = Template.bind({});
