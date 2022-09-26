import { Directions, IndexId, PositionChangeStatuses, TokenId } from "@/defi";
import { Meta, Story } from "@storybook/react";

import { Notification, NotificationProps } from "./Notification";

export default {
  title: "features/Heading/Notification",
  component: Notification,
} as Meta<NotificationProps>;

const Template: Story<NotificationProps> = (args) => <Notification {...args} />;

export const Open = Template.bind({});
Open.args = {
  productIds: [TokenId.ETH, TokenId.FTM],
  direction: Directions.Short,
  status: PositionChangeStatuses.Open,
  rows: [
    { label: "23/08/2022", value: "12:58:06" },
    { label: "Entry Price", value: "$170.00" },
    { label: "Mark Price", value: "$155.12" },
    { label: "Position Size", value: "$100.00" },
    { label: "Liq. Price (est.)", value: "$150.00", color: "featured.grape" },
  ],
};

export const Closed = Template.bind({});
Closed.args = {
  productIds: [IndexId.GOOG, TokenId.USDC],
  direction: Directions.Long,
  status: PositionChangeStatuses.Closed,
  rows: [
    { label: "23/08/2022", value: "12:58:06" },
    { label: "PnL (ROE%)", value: "+$150.00", color: "alert.lemon" },
  ],
};

export const Liquidated = Template.bind({});
Liquidated.args = {
  productIds: [IndexId.GOOG, TokenId.USDC],
  direction: Directions.Long,
  status: PositionChangeStatuses.Liquidated,
  rows: [
    { label: "23/08/2022", value: "12:58:06" },
    { label: "PnL (ROE%)", value: "-$150.00", color: "alert.guava" },
  ],
};
