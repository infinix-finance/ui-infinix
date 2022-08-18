import { SnackbarProvider as NotistackSnackbarProvider } from "notistack";
import { Snackbar } from "./Snackbar";

export const AUTO_HIDE_DURATION = 6000;

export const SnackbarProvider = ({ children }: { children: JSX.Element }) => (
  <NotistackSnackbarProvider
    maxSnack={3}
    Components={{
      default: Snackbar,
    }}
    disableWindowBlurListener={true}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    autoHideDuration={AUTO_HIDE_DURATION}
  >
    {children}
  </NotistackSnackbarProvider>
);
