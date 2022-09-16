import { alpha, Theme } from "@mui/material";

export const containerStyle = (theme: Theme) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "260px",

  "& .MuiTableContainer-root": {
    borderBottomLeftRadius: "0.5rem",
    borderBottomRightRadius: "0.5rem",
    borderTopRightRadius: "0.5rem",
  },
});

export const headingStyle = (theme: Theme) => ({
  display: "flex",
  justifyContent: "space-between",
});

export const rightGroupStyle = (theme: Theme) => ({
  display: "flex",
  alignItems: "center",
  gap: 4,
  marginRight: 2,
});

export const toggleButtonStyle = (theme: Theme) => ({
  "&.MuiButtonBase-root": {
    padding: 1,
    height: "2rem",
  },

  "& .MuiSvgIcon-root": {
    width: "1rem",
    height: "1rem",
  },
});

export const tabsStyle = (theme: Theme) => ({
  "& .MuiButtonBase-root:first-of-type": {
    borderTopLeftRadius: "0.5rem",
  },
  "& .MuiButtonBase-root:last-of-type": {
    borderTopRightRadius: "0.5rem",
  },
});

export const positivePnlStyle = {
  color: "alert.lemon",
};

export const negativePnlStyle = {
  color: "alert.guava",
};

export const neutralIndicatorStyle = (theme: Theme) => ({
  display: "inline-block",
  padding: 1.25,
  borderRadius: "0.5rem",
  backgroundColor: alpha(
    theme.palette.primary.ice,
    theme.custom.opacity._10percent
  ),
});
