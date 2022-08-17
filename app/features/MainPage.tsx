import { Box } from "@mui/material";

import { Contents } from "./Contents";
import { Heading } from "./Heading";

import { useMetamaskConnection } from "@/hooks/wallet";
import { ResolutionGuard } from "./ResolutionGuard";

import { containerStyle } from "./MainPage.styles";

export const MainPage = () => {
  useMetamaskConnection();

  return (
    <Box sx={containerStyle}>
      <Heading />
      <ResolutionGuard>
        <Contents />
      </ResolutionGuard>
    </Box>
  );
};
