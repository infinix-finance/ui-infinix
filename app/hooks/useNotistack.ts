import { useEffect } from "react";

import { useSnackbar } from "@/components";
import { useStore } from "@/stores/root";

export const useNotistack = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { snackbar } = useStore((store) => store.notifications);

  useEffect(() => {
    if (!snackbar.title || !snackbar.description) return;

    enqueueSnackbar({ ...snackbar, showProgress: true } as any);
  }, [snackbar.title, snackbar.description]);
};
