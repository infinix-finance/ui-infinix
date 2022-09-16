import { PositionChangeStatuses } from "@/defi";
import { Box, Typography } from "@mui/material";

import { containerStyle } from "./PositionStatus.styles";

export interface PositionStatusProps {
  status: PositionChangeStatuses;
  inlineBlock?: boolean;
}

export const PositionStatus = ({
  status,
  inlineBlock = false,
}: PositionStatusProps) => {
  const liquidated = PositionChangeStatuses.Liquidated === status;

  return (
    <Box sx={containerStyle(inlineBlock, liquidated)}>
      <Typography variant="body3">{status}</Typography>
    </Box>
  );
};
