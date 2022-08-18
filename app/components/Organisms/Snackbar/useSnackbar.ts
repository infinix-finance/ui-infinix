import { useSnackbar as notistackUseSnackbar } from "notistack";

import { AlertNotificationProps } from "@/components";
import { useCallback } from "react";

export const useSnackbar = () => {
  const { enqueueSnackbar: notiEnqueueSnackbar, closeSnackbar } =
    notistackUseSnackbar();

  const enqueueSnackbar = useCallback(
    (props: AlertNotificationProps) =>
      notiEnqueueSnackbar({ ...props, showProgress: true } as any),
    []
  );

  return { enqueueSnackbar, closeSnackbar };
};
