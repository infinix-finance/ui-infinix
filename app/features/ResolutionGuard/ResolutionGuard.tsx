import { Box, Typography } from "@mui/material";
import ScreenRotationIcon from "@mui/icons-material/ScreenRotation";
import DesktopAccessDisabledIcon from "@mui/icons-material/DesktopAccessDisabled";

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

  const IconComponent = flippable
    ? ScreenRotationIcon
    : DesktopAccessDisabledIcon;
  const message = flippable
    ? "Switch to Landscape view to reveal the content."
    : "Switch to 1024x768 resolution or above to reveal the content.";

  return (
    <Box sx={containerStyle}>
      <Box sx={contentStyle}>
        <IconComponent sx={iconStyle} />
        <Typography sx={messageStyle} variant="body2">
          Unsupported screen resolution.
        </Typography>
        <Typography sx={messageStyle} variant="body2">
          {message}
        </Typography>
      </Box>
    </Box>
  );
};
