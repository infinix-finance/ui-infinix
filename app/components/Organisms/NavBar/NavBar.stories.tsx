import { Box } from "@mui/material";
import { ComponentStory } from "@storybook/react";

import { NavBar } from "./NavBar";

const NavBarStories = () => {
  return (
    <Box width={300}>
      <NavBar />
    </Box>
  );
};

export default {
  title: "organisms/NavBar",
  component: NavBar,
};

const Template: ComponentStory<typeof NavBar> = () => <NavBarStories />;

export const Default = Template.bind({});
Default.args = {};
