import { Theme } from "@mui/material";

export const containerStyle = (inline: boolean) => (_theme: Theme) =>
  ({
    position: "relative",
    borderRadius: inline ? 0 : undefined,
    width: inline ? undefined : "480px",
  } as const);
