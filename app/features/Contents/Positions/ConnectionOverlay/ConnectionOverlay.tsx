import { useStore } from "@/stores/root";
import { Box, Button, Typography } from "@mui/material";
import { buttonStyle, containerStyle } from "./ConnectionOverlay.styles";

export const ConnectionOverlay = () => {
  const { activate } = useStore((store) => store.connection);

  return (
    <Box sx={containerStyle}>
      <Typography variant="body2" color="secondary.graishLavender">
        To start trading, wallet needs to be connected.
      </Typography>
      <Button
        sx={buttonStyle}
        variant="contained"
        size="small"
        onClick={activate}
      >
        Connect
      </Button>
    </Box>
  );
};
