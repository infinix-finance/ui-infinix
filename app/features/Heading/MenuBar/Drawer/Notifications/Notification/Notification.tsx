import { Box, Typography } from "@mui/material";

import { ProductAsset } from "@/components";
import { NotificationRow, NotificationRowProps } from "./NotificationRow";

import {
  containerStyle,
  headingStyle,
  productStyle,
} from "./Notification.styles";
import { Directions, PositionChangeStatuses, ProductIds } from "@/defi";
import { capitalize } from "@/utils/formatters";
import { PositionStatus } from "@/components/Atoms/PositionStatus";

export interface NotificationProps {
  productIds: ProductIds;
  direction: Directions;
  status: PositionChangeStatuses;
  rows: NotificationRowProps[];
}

export const Notification = ({
  productIds,
  direction,
  status,
  rows,
}: NotificationProps) => {
  const directionColor =
    direction === Directions.Long ? "alert.lemon" : "alert.guava";

  return (
    <Box sx={containerStyle}>
      <Box sx={headingStyle}>
        <ProductAsset
          sx={productStyle}
          productIds={productIds}
          descriptionComponent={
            <Typography variant="body3" color={directionColor}>
              {capitalize(direction)}
            </Typography>
          }
        />
        <PositionStatus status={status} />
      </Box>
      {rows.map(({ label, value, color }) => (
        <NotificationRow label={label} value={value} color={color} />
      ))}
    </Box>
  );
};
