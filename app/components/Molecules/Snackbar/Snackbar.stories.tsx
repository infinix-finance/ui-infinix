import { ComponentStory, ComponentMeta } from "@storybook/react";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";

import { Snackbar } from "./Snackbar";
import { Link } from "../Link";

export default {
  title: "molecules/Snackbar",
  component: Snackbar,
} as ComponentMeta<typeof Snackbar>;

const Template: ComponentStory<typeof Snackbar> = (args) => (
  <Snackbar {...args} />
);

export const Snackbars = Template.bind({});

Snackbars.args = {
  AlertProps: {
    severity: "success",
    alertText: "I will close in 6 seconds...",
    underlined: false,
    onClose: () => {},
    action: (
      <Link href="/" target="_blank" rel="noopener">
        <OpenInNewRoundedIcon />
      </Link>
    ),
  },
  open: true,
};
