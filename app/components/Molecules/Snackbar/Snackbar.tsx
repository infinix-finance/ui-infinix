import { Box } from "@mui/material";
import { useSnackbar } from "notistack";
import { forwardRef } from "react";
import {
  AlertNotification,
  AlertNotificationProps,
} from "../AlertNotification";
import { AUTO_HIDE_DURATION } from "./SnackbarProvider";

export interface SnackbarProps extends AlertNotificationProps {
  id: number;
}

export const Snackbar = forwardRef<HTMLDivElement, SnackbarProps>(
  ({ id, ...rest }, forwardedRef) => {
    const { closeSnackbar } = useSnackbar();

    return (
      <Box ref={forwardedRef}>
        <AlertNotification
          duration={AUTO_HIDE_DURATION}
          {...rest}
          onClose={() => closeSnackbar(id)}
        />
      </Box>
    );
  }
);
