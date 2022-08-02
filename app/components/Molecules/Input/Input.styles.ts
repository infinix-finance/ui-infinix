import { Theme } from "@mui/material";

export const inputStyle =
  (alert: boolean, alignEnd: boolean) => (theme: Theme) =>
    ({
      "& .MuiOutlinedInput-root": {
        color: alert ? theme.palette.warning.main : undefined,
        "& .MuiOutlinedInput-notchedOutline": {
          borderWidth: 1,
          borderColor: alert
            ? `${theme.palette.warning.main} !important`
            : undefined,
        },
        "& .MuiOutlinedInput-input": {
          textAlign: alignEnd ? "end" : "start",
        },
      },
    } as const);
