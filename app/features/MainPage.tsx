/* istanbul ignore file */
import { Box } from "@mui/material";

import { Contents } from "./Contents";
import { Heading } from "./Heading";

import { useMetamaskConnection } from "@/hooks/wallet";

import { containerStyle, notificationStyle } from "./MainPage.styles";
import { useNotistack } from "@/hooks/useNotistack";
import { AlertNotification } from "@/components";
import { useStore } from "@/stores/root";

export const MainPage = () => {
  const { top: notification, hideTopNotification } = useStore(
    (store) => store.notifications
  );
  useMetamaskConnection();
  useNotistack();

  return (
    <Box sx={containerStyle}>
      <Heading />
      {notification.visible && (
        <AlertNotification
          sx={notificationStyle}
          {...notification}
          onClose={hideTopNotification}
          inline
        />
      )}
      <Contents />
    </Box>
  );
};
