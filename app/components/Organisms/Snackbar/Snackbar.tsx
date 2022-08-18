import { Box } from "@mui/material";
import { forwardRef } from "react";

import {
  AlertNotification,
  AlertNotificationProps,
} from "@/components/Molecules/AlertNotification";
import { useSnackbar } from "./useSnackbar";
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
