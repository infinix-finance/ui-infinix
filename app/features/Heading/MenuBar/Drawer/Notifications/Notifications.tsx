import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { Box, Button, Typography } from "@mui/material";

import { Notification } from "./Notification";

import { useStore } from "@/stores/root";
import {
  bellIconStyle,
  buttonStyle,
  containerStyle,
  emptyContainerStyle,
  listStyle,
} from "./Notifications.styles";

export const Notifications = () => {
  const { getNotificationsHistoryData } = useStore(
    (state) => state.userPositions
  );
  const notifications = getNotificationsHistoryData();
  const isEmpty = !notifications.length;

  const handleClearAllClick = () => {
    console.log("clear all");
  };

  return (
    <Box sx={containerStyle}>
      <Button
        sx={buttonStyle}
        color="primary"
        variant="outlined"
        fullWidth={false}
        disabled={isEmpty}
        onClick={handleClearAllClick}
      >
        Clear all
      </Button>
      {isEmpty && (
        <Box sx={emptyContainerStyle}>
          <NotificationsNoneOutlinedIcon sx={bellIconStyle} />
          <Typography variant="body2" color="secondary.graishLavender">
            You do not have notifications
          </Typography>
        </Box>
      )}
      {!isEmpty && (
        <Box sx={listStyle}>
          {notifications.map((notification, idx) => (
            <Notification
              key={idx}
              direction={notification.direction}
              productIds={notification.productIds}
              status={notification.status}
              rows={notification.rows}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};
