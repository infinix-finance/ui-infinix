import { AlertNotification, AlertNotificationProps } from "@/components";
import { Box, Drawer as MuiDrawer, Typography } from "@mui/material";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

import { containerStyle, iconStyle, titleStyle } from "./Drawer.styles";
import { Selections } from "../ButtonBar/types";
import Image from "next/image";
import { Wallets } from "./Wallets";

const titleMapping = {
  [Selections.notifications]: "Notifications",
  [Selections.wallet]: "Wallets",
  [Selections.menu]: "Infinix",
};

const iconMapping = {
  [Selections.notifications]: NotificationsNoneOutlinedIcon,
  [Selections.wallet]: AccountBalanceWalletOutlinedIcon,
  [Selections.menu]: () => (
    <Image
      src="/static/infinix.svg"
      width={49}
      height={24}
      alt="Infinix Logo"
    />
  ),
};

interface DrawerProps {
  selected: Selections | null;
  AlertNotificationProps: {
    visible: boolean;
  } & AlertNotificationProps;
  onClose: () => void;
}

export const Drawer = ({
  selected,
  AlertNotificationProps,
  onClose,
}: DrawerProps) => {
  const IconComponent = selected ? iconMapping[selected] : () => <></>;
  const showNotification = AlertNotificationProps.visible;
  const title = selected ? titleMapping[selected] : "";

  return (
    <MuiDrawer
      sx={containerStyle}
      anchor="right"
      open={Boolean(selected)}
      onClose={onClose}
    >
      {showNotification && (
        <AlertNotification {...AlertNotificationProps} inline />
      )}
      <Box sx={titleStyle(showNotification)}>
        <IconComponent sx={iconStyle} />
        <Typography variant="h6">{title}</Typography>
      </Box>
      {selected === Selections.wallet && <Wallets />}
    </MuiDrawer>
  );
};
