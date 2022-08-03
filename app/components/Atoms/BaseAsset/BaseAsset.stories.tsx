import { Box, SxProps } from "@mui/material";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { BaseAsset } from "./BaseAsset";
import { BaseAssetProps } from "./types";

const BaseAssetStories = (props: BaseAssetProps) => {
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

const singleAsset = (withLabel: boolean = true, withIcon: boolean = true) => ({
  assets: [
    {
      icon: withIcon ? "/dummy/token.svg" : undefined,
      label: withLabel ? "Token1" : undefined,
    },
  ],
  iconSize: 24,
});

const pairAssets = (withLabel: boolean = true, withIcon: boolean = true) => ({
  assets: [
    {
      icon: withIcon ? "/dummy/token.svg" : undefined,
      label: withLabel ? "Token1" : undefined,
    },
    {
      icon: withIcon ? "/dummy/token.svg" : undefined,
      label: withLabel ? "Token2" : undefined,
    },
  ],
  iconSize: 24,
});

const Template: ComponentStory<typeof BaseAsset> = (args) => (
  <BaseAssetStories {...args} />
);

export const SingleAsset = Template.bind({});
SingleAsset.args = singleAsset();

export const SingleAssetWithOverrideLabel = Template.bind({});
SingleAssetWithOverrideLabel.args = {
  ...singleAsset(true),
  label: "Single Asset",
};

export const SingleAssetWithoutLabel = Template.bind({});
SingleAssetWithoutLabel.args = singleAsset(false);

export const SingleAssetWithoutIcon = Template.bind({});
SingleAssetWithoutIcon.args = singleAsset(true, false);

export const PairAssets = Template.bind({});
PairAssets.args = pairAssets();

export const PairAssetsWithOverrideLabel = Template.bind({});
PairAssetsWithOverrideLabel.args = { ...pairAssets(), label: "Pair Assets" };

export const PairAssetsWithoutLabel = Template.bind({});
PairAssetsWithoutLabel.args = pairAssets(false);

export const PairAssetCustomSize = Template.bind({});
PairAssetCustomSize.args = {
  ...pairAssets(),
  iconSize: 48,
  LabelProps: {
    variant: "h6",
  },
};

export const DisabledPairAssets = Template.bind({});
DisabledPairAssets.args = { ...pairAssets(), disabled: true };
