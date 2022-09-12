import { PairId, Timeframes } from "@/defi";
import { Box } from "@mui/material";
import { Meta, Story } from "@storybook/react";
import BigNumber from "bignumber.js";

import { initialData } from "./mock";

import SimpleChart, { SimpleChartProps } from "./SimpleChart";

export default {
  title: "features/Contents/SimpleChart",
  component: SimpleChart,
} as Meta<SimpleChartProps>;

const Template: Story<SimpleChartProps> = (args) => {
  return (
    <Box sx={{ height: "600px" }}>
      <SimpleChart {...args} />
    </Box>
  );
};

export const PositiveChanges = Template.bind({});
PositiveChanges.args = {
  initialData,
  timeframe: Timeframes._1m,
  pairId: PairId.btcusdc,
  price: new BigNumber(140.32),
  change: new BigNumber(0.1234),
  percentage: 12.44,
  onChange: () => {},
};

export const NegativeChanges = Template.bind({});
NegativeChanges.args = {
  initialData,
  timeframe: Timeframes._1m,
  pairId: PairId.btcusdc,
  price: new BigNumber(10.201),
  change: new BigNumber(-26.34),
  percentage: -1.77,
  onChange: () => {},
};
