import { Box, SxProps } from "@mui/material";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { PairAssetProps, PairAsset } from "./PairAsset";

const PairAssetsStories = (props: PairAssetProps) => {
  const boxStyle: Partial<SxProps> = {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    resize: "both",
    overflow: "auto",
  };

  return (
    <Box sx={boxStyle}>
      <PairAsset {...props} />
    </Box>
  );
};

export default {
  title: "atoms/PairAsset",
  component: PairAsset,
} as ComponentMeta<typeof PairAsset>;

const defaultArgs = {
  assets: [
    {
      icon: "/dummy/token.svg",
      label: "Token1",
    },
    {
      icon: "/dummy/token.svg",
      label: "Token2",
    },
  ],
  iconSize: 24,
  label: "Pair Asset",
};

const Template: ComponentStory<typeof PairAsset> = (args) => (
  <PairAssetsStories {...args} />
);

export const PairAssets = Template.bind({});
PairAssets.args = defaultArgs;
