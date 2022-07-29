import {
  LinearProgress as MuiLinearProgress,
  LinearProgressProps as MuiLinearProgressProps,
} from "@mui/material";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SxProps, Box } from "@mui/material";

const LinearProgressStories = (props: MuiLinearProgressProps) => {
  const boxStyle: Partial<SxProps> = {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  };

  return (
    <Box sx={boxStyle}>
      <MuiLinearProgress {...props} />
    </Box>
  );
};

export default {
  title: "atoms/LinearProgress",
  component: LinearProgressStories,
} as ComponentMeta<typeof LinearProgressStories>;

const Template: ComponentStory<typeof LinearProgressStories> = (args) => (
  <LinearProgressStories {...args} />
);

export const DefaultLinearProgress = Template.bind({});
DefaultLinearProgress.args = {
  value: 40,
};
