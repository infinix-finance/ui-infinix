import { Box } from "@mui/material";
import { Meta, Story } from "@storybook/react";

import { InstrumentPanel, InstrumentPanelProps } from "./InstrumentPanel";

export default {
  title: "features/Contents/TradingSidebar/InstrumentPanel",
  component: InstrumentPanel,
} as Meta<InstrumentPanelProps>;

const Template: Story<InstrumentPanelProps> = (args) => {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      {[0, 1, 2, 3, 33, 50, 66, 95, 96, 97, 98, 99, 100].map((percentage) => (
        <InstrumentPanel {...args} key={percentage} percentage={percentage} />
      ))}
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {};
