import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import { useState } from "react";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export const ButtonBar = () => {
  const [alignment, setAlignment] = useState<string | null>("left");

  const iconStyle = { width: "1.25rem", height: "1.25rem" };
  const buttonStyle = { width: "3rem", height: "3rem" };

  const handleAlignment = (
    _: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup value={alignment} exclusive onChange={handleAlignment}>
      <ToggleButton sx={buttonStyle} value="left">
        <NotificationsNoneOutlinedIcon sx={iconStyle} />
      </ToggleButton>
      <ToggleButton sx={buttonStyle} value="center">
        <AccountBalanceWalletOutlinedIcon sx={iconStyle} />
      </ToggleButton>
      <ToggleButton sx={buttonStyle} value="right">
        <MoreHorizIcon sx={iconStyle} />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
