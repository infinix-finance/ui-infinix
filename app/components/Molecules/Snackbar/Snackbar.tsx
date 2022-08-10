import { FC } from "react";
import Box from "@mui/material/Box";
import {
  Snackbar as MuiSnackbar,
  SnackbarProps as MuiSnackbarProps,
} from "@mui/material";
// import { Alert, AlertProps } from "@/components/Atoms";

export type SnackbarProps = {
  /*AlertProps: AlertProps;*/
} & MuiSnackbarProps;

export const Snackbar: FC<SnackbarProps> = ({
  /* AlertProps, */
  autoHideDuration = 6000,
  ...rest
}) => {
  return (
    <MuiSnackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      autoHideDuration={autoHideDuration}
      sx={{ width: "100%" }}
      {...rest}
    >
      <Box sx={{ width: "100%" }}>{/*<Alert {...AlertProps} />*/}</Box>
    </MuiSnackbar>
  );
};
