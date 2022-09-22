import { Theme } from "@mui/material";

export const containerStyle = (theme: Theme) => ({
  display: "flex",
  alignItems: "center",
  gap: 2,

  "& > button:last-of-type": {
    marginRight: "3rem",
  },
});
