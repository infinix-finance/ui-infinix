import { useLayout } from "@/hooks/responsive";
import { Box } from "@mui/material";

import { Contents } from "./Contents";
import { Heading } from "./Heading";

import { containerStyle } from "./MainPage.styles";
import { ResolutionGuard } from "./ResolutionGuard";

export const MainPage = () => {
  return (
    <Box sx={containerStyle}>
      <Heading />
      <ResolutionGuard>
        <Contents />
      </ResolutionGuard>
    </Box>
  );
};
