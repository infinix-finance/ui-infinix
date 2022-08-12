import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import { ProductAsset } from "@/components";
import { ButtonBarProps, Notifications, Selections } from "./types";

import {
  buttonStyle,
  iconStyle,
  notificationButtonStyle,
  walletButtonStyle,
} from "./ButtonBar.styles";

export const ButtonBar = ({
  selected = null,
  notification = Notifications.inactive,
  networkId = null,
  onSelect,
}: ButtonBarProps) => {
  const handleSelect = (
    _: React.MouseEvent<HTMLElement>,
    value: string | null
  ) => {
    onSelect(value as Selections);
  };

  return (
    <ToggleButtonGroup value={selected} exclusive onChange={handleSelect}>
      <ToggleButton
        sx={[buttonStyle, notificationButtonStyle(notification)]}
        value="notifications"
      >
        <NotificationsNoneOutlinedIcon sx={iconStyle} />
      </ToggleButton>
      <ToggleButton
        sx={[buttonStyle, walletButtonStyle(Boolean(networkId))]}
        value="wallet"
      >
        <AccountBalanceWalletOutlinedIcon sx={iconStyle} />
        {networkId && (
          <ProductAsset
            productIds={[networkId]}
            showLabel={false}
            iconSize={20}
          />
        )}
      </ToggleButton>
      <ToggleButton sx={buttonStyle} value="menu">
        <MoreHorizIcon sx={iconStyle} />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
