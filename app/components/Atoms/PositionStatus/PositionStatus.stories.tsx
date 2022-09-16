import React from "react";

import { Meta, Story } from "@storybook/react";

import { PositionStatus, PositionStatusProps } from "./PositionStatus";
import { Box } from "@mui/material";
import { PositionChangeStatuses } from "@/defi";

export default {
  title: "atoms/PositionStatus",
  component: PositionStatus,
} as Meta<PositionStatusProps>;

const Template: Story<PositionStatusProps> = () => (
  <Box display="flex" flexDirection="column" gap={2}>
    <PositionStatus status={PositionChangeStatuses.Open} />
    <PositionStatus status={PositionChangeStatuses.Closed} />
    <PositionStatus status={PositionChangeStatuses.Liquidated} />
  </Box>
);

export const Default = Template.bind({});
Default.args = {};
