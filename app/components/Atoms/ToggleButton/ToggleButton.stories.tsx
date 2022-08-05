import {
  ToggleButtonGroup,
  ToggleButton,
  ToggleButtonProps,
  Box,
  Typography,
} from "@mui/material";
import { Meta, Story } from "@storybook/react";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

type Colors = "standard" | "primary";

const colors: Colors[] = ["standard", "primary"];

const ButtonGroupStories = (props: ToggleButtonProps) => {
  const iconStyle = { width: "1.25rem", height: "1.25rem" };
  const buttonStyle = { width: "3rem", height: "3rem" };

  return (
    <ToggleButtonGroup value={props.value} color={props.color} exclusive>
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

export default {
  title: "atoms/ToggleButton",
  component: ToggleButtonGroup,
} as Meta<typeof ToggleButtonGroup>;

const Template: Story<typeof ButtonGroupStories> = (args) => (
  <Box display="flex" flexDirection="column" gap={2}>
    {colors.map((color) => (
      <>
        <Typography>color: {color}</Typography>
        <ButtonGroupStories {...args} value="center" color={color} />
      </>
    ))}
  </Box>
);

export const ToggleButtons = Template.bind({});
ToggleButtons.args = {};
