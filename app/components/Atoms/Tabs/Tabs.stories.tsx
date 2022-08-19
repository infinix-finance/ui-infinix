import React from "react";
import { Box, SxProps } from "@mui/material";
import Image from "next/image";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import { TabsProps, TabItem, Tabs } from "./Tabs";

const TabsStories = (props: TabsProps) => {
  const boxStyle: Partial<SxProps> = {
    display: "flex",
    flexDirection: "column",
    gap: 4,
    resize: "both",
    overflow: "auto",
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (value: number) => {
    setValue(value);
  };

  return (
    <Box sx={boxStyle}>
      <Tabs {...props} value={value} onChange={handleChange} />
    </Box>
  );
};

export default {
  title: "atoms/Tabs",
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

const textOnlyItems: TabItem[] = [
  {
    label: "Tab 1",
  },
  {
    label: "Tab 2",
  },
  {
    label: "Tab 3",
  },
];

const iconItems: TabItem[] = [
  {
    label: "Tab 1",
    icon: <ArrowUpwardIcon />,
  },
  {
    label: "Tab 2",
    icon: <ArrowDownwardIcon />,
  },
  {
    label: "Tab 3",
    icon: (
      <Image src="/dummy/network.svg" alt="Ethereum" width={24} height={24} />
    ),
  },
];

const overriddenColorItems: TabItem[] = [
  {
    label: "Lemon color",
    icon: <ArrowUpwardIcon />,
    colorOverride: "alert.lemon",
  },
  {
    label: "Guava color",
    icon: <ArrowDownwardIcon />,
    colorOverride: "alert.guava",
  },
  {
    label: "Default color",
    icon: (
      <Image src="/dummy/network.svg" alt="Ethereum" width={24} height={24} />
    ),
  },
];

const Template: ComponentStory<typeof TabsStories> = (args) => (
  <TabsStories {...args} />
);

export const TextOnlyTabs = Template.bind({});
TextOnlyTabs.args = {
  items: textOnlyItems,
};

export const IconTabs = Template.bind({});
IconTabs.args = {
  items: iconItems,
};

export const IconTabsWithOverriddenColors = Template.bind({});
IconTabsWithOverriddenColors.args = {
  items: overriddenColorItems,
};
