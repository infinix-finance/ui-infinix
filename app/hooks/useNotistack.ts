import { useSnackbar } from "notistack";
import { useEffect } from "react";

import { useStore } from "@/stores/root";

export const useNotistack = () => {
  const snackbarProps = useStore((state) => state.notifications.snackbar);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (!snackbarProps.visible) return;

    enqueueSnackbar(snackbarProps as any);
  }, [snackbarProps]);
};
