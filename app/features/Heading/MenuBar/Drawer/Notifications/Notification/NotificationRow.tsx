import { Box, Typography } from "@mui/material";
import { rowStyle } from "./NotificationRow.style";

export interface NotificationRowProps {
  label: string;
  value: string;
  color?: string;
}

export const NotificationRow = ({
  label,
  value,
  color = "primary.ice",
}: NotificationRowProps) => {
  return (
    <Box sx={rowStyle}>
      <Typography variant="body3">{label}</Typography>
      <Typography variant="body3" color={color}>
        {value}
      </Typography>
    </Box>
  );
};
