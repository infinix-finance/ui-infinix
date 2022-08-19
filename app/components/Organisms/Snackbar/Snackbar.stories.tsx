import { AlertColor, Box, Button } from "@mui/material";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Snackbar } from "./Snackbar";
import { SnackbarProvider } from "./SnackbarProvider";
import { useSnackbar } from "./useSnackbar";

export default {
  title: "organisms/Snackbar",
  component: Snackbar,
} as ComponentMeta<typeof Snackbar>;

const SnackbarDisplay = () => {
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = (severity: AlertColor) => () => {
    enqueueSnackbar({
      title: "Snackbar title",
      description: "This is the longer description",
      severity,
    });
  };

  return (
    <Box display="flex" gap={2}>
      <Button onClick={handleClick("success")} variant="contained">
        Show success snackbar
      </Button>
      <Button onClick={handleClick("error")} variant="contained">
        Show error snackbar
      </Button>
    </Box>
  );
};

const Template: ComponentStory<typeof Snackbar> = (args) => (
  <SnackbarProvider>
    <SnackbarDisplay />
  </SnackbarProvider>
);

export const Snackbars = Template.bind({});
Snackbars.args = {};
