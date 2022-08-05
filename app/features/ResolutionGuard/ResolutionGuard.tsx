import { Box, Typography } from "@mui/material";
import TabletIcon from "@mui/icons-material/Tablet";

import {
  containerStyle,
  contentStyle,
  iconStyle,
  messageStyle,
} from "./ResolutionGuard.styles";
import { useLayout } from "@/hooks/responsive";

interface UnsupportedResolutionProps {
  children: React.ReactNode;
}

export const ResolutionGuard = ({ children }: UnsupportedResolutionProps) => {
  const { unsupportedResolution, flippable } = useLayout();

  if (!unsupportedResolution) {
    return <>{children}</>;
  }

  return (
    <Box sx={containerStyle}>
      <Box sx={contentStyle}>
        {!flippable && (
          <Typography sx={messageStyle} variant="body2">
            Unsupported screen resolution. Your device has to support at least
            1024 * 700
          </Typography>
        )}
        {flippable && (
          <>
            <TabletIcon sx={iconStyle} />
            <Typography sx={messageStyle} variant="body2">
              Switch to Landscape view to reveal the content.
            </Typography>
          </>
        )}
      </Box>
    </Box>
  );
};
