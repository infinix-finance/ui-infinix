import { useState } from "react";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import { buttonStyle, iconStyle } from "./Heading.styles";

export const ButtonBar = () => {
  const [alignment, setAlignment] = useState<string | null>("notifications");

  const handleAlignment = (
    _: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup value={alignment} exclusive onChange={handleAlignment}>
      <ToggleButton sx={buttonStyle} value="notifications">
        <NotificationsNoneOutlinedIcon sx={iconStyle} />
      </ToggleButton>
      <ToggleButton sx={buttonStyle} value="wallet">
        <AccountBalanceWalletOutlinedIcon sx={iconStyle} />
      </ToggleButton>
      <ToggleButton sx={buttonStyle} value="menu">
        <MoreHorizIcon sx={iconStyle} />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
