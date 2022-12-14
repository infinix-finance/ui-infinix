import { alpha, Theme } from "@mui/material";

export const containerStyle = (theme: Theme) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  flex: 1,
  maxHeight: "345px",
  overflow: "hidden",
  backgroundColor: theme.palette.secondary.deepBlackberry,
  borderBottomRightRadius: "0.5rem",
  borderBottomLeftRadius: "0.5rem",

  "& .MuiTableContainer-root": {
    height: "100%",
    borderBottomRightRadius: "0.5rem",
    borderBottomLeftRadius: "0.5rem",
  },
});

export const headingStyle = (theme: Theme) => ({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: theme.palette.secondary.deeperBlackberry,
});

export const rightGroupStyle = (_theme: Theme) => ({
  display: "flex",
  alignItems: "center",
  gap: 4,
  marginRight: 2,
});

export const toggleButtonStyle = (_theme: Theme) => ({
  "&.MuiButtonBase-root": {
    padding: 1,
    height: "2rem",
  },

  "& .MuiSvgIcon-root": {
    width: "1rem",
    height: "1rem",
  },
});

export const tabsStyle = (_theme: Theme) => ({
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
