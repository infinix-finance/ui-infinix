import { AppState } from "../types";

export const handleError = (state: AppState, response: any) => {
  if (typeof response === "string") {
    state.notifications.showSnackbar({
      severity: "error",
      title: "Error",
      description: response,
    });

    return true;
  }

  return false;
};
