import { Box } from "@mui/material";
import { Meta, Story } from "@storybook/react";
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

export const Default = Template.bind({});
Default.args = {
  initialData,
};
