import { AlertColor, Box, keyframes, LinearProgress } from "@mui/material";
import { useRef } from "react";

import { containerStyle, contentStyle, progressStyle } from "./Progress.styles";

const progress = keyframes([
  {
    from: {
      width: "100%",
    },
    to: {
      width: "0",
    },
  },
]);

interface ProgressProps {
  playAnimation: boolean;
  duration: number;
  severity: AlertColor;
  inline: boolean;
  onProgressEnd?: () => void;
}

export const Progress = ({
  playAnimation,
  duration,
  severity,
  inline,
  onProgressEnd,
}: ProgressProps) => {
  const linearProgressRef = useRef(null);

  return (
    <Box sx={containerStyle(inline)} data-testid="progressBar">
      <Box sx={contentStyle}>
        <LinearProgress
          ref={linearProgressRef}
          sx={progressStyle(progress, duration, playAnimation)}
          value={100}
          variant="determinate"
          color={severity}
          onAnimationEnd={onProgressEnd}
        />
      </Box>
    </Box>
  );
};
