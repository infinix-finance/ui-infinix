import { Box, Button, Typography } from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

import { Notification } from "./Notification";
import { notifications } from "./mock";

import {
  bellIconStyle,
  buttonStyle,
  containerStyle,
  emptyContainerStyle,
  listStyle,
} from "./Notifications.styles";

export const Notifications = ({
  mockEmpty = false,
}: {
  mockEmpty?: boolean;
}) => {
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
        disabled={mockEmpty}
        onClick={handleClearAllClick}
      >
        Clear all
      </Button>
      {mockEmpty && (
        <Box sx={emptyContainerStyle}>
          <NotificationsNoneOutlinedIcon sx={bellIconStyle} />
          <Typography variant="body2" color="secondary.graishLavender">
            You do not have notifications
          </Typography>
        </Box>
      )}
      {!mockEmpty && (
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
