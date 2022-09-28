import { useStore } from "@/stores/root";
import { Box, CircularProgress, Typography } from "@mui/material";

import { containerStyle, loaderContainerStyle } from "./Loader.styles";

interface LoaderProps {
  children: React.ReactNode;
}

export const Loader = ({ children }: LoaderProps) => {
  const { ready } = useStore((state) => state.markets);

  if (!ready) {
    return (
      <Box sx={loaderContainerStyle}>
        <CircularProgress />
        <Typography variant="body2" color="secondary.graishLavender">
          Loading initial data
        </Typography>
      </Box>
    );
  }

  return <Box sx={containerStyle}>{children}</Box>;
};
