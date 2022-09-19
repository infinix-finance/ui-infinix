import { Meta, Story } from "@storybook/react";

import { MarketId, NetworkId, TokenId } from "@/defi";
import { ProductAsset } from "./ProductAsset";
import { ProductAssetProps } from "./types";

export default {
  title: "molecules/ProductAsset",
  component: ProductAsset,
} as Meta;

const defaultArgs = {
  iconSize: 24,
  LabelProps: {},
};

const Template: Story<ProductAssetProps> = (args) => (
  <ProductAsset {...defaultArgs} {...args} />
);

export const TokenAssets = Template.bind({});
TokenAssets.args = {
  ...defaultArgs,
  productIds: [TokenId.eth, TokenId.ftm],
};

export const TokenAssetsWithDescription = Template.bind({});
TokenAssetsWithDescription.args = {
  ...defaultArgs,
  productIds: [TokenId.eth, TokenId.ftm],
  showDescription: true,
};

export const MarketAsset = Template.bind({});
MarketAsset.args = {
  ...defaultArgs,
  productIds: [MarketId.crypto],
};

export const NetworkAsset = Template.bind({});
NetworkAsset.args = {
  ...defaultArgs,
  productIds: [NetworkId.ethereum],
};

export const UnknownAsset = Template.bind({});
UnknownAsset.args = {
  ...defaultArgs,
  productIds: ["unknown" as any],
};
