import { Box } from "@mui/material";

import { Contents } from "./Contents";
import { Heading } from "./Heading";

import { containerStyle } from "./MainPage.styles";
import { ResolutionGuard } from "./ResolutionGuard";
import useConnection from "@/hooks/useConnection";

export const MainPage = () => {
  useConnection();

  return (
    <Box sx={containerStyle}>
      <Heading />
      <ResolutionGuard>
        <Contents />
      </ResolutionGuard>
    </Box>
  );
};
