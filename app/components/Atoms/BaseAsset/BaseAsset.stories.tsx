import { Box, SxProps } from "@mui/material";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { BaseAssetProps, BaseAsset } from "./BaseAsset";

const BaseAssetsStories = (props: BaseAssetProps) => {
  const boxStyle: Partial<SxProps> = {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    resize: "both",
    overflow: "auto",
  };

  return (
    <Box sx={boxStyle}>
      <BaseAsset {...props} />
    </Box>
  );
};
export default {
  title: "atoms/BaseAsset",
  component: BaseAsset,
} as ComponentMeta<typeof BaseAsset>;

const defaultArgs = {
  icon: "/dummy/token.svg",
  label: "ETH",
  iconSize: 24,
};

const Template: ComponentStory<typeof BaseAssetsStories> = (args) => (
  <BaseAssetsStories {...defaultArgs} {...args} />
);

export const DefaultBaseAsset = Template.bind({});
DefaultBaseAsset.args = defaultArgs;
