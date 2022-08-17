import { formatTime } from "@/utils/date";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import {
  countdownLabelContainerStyle,
  countdownTextStyle,
  extraGapStyle,
  labelContainerStyle,
  labelStyle,
  textStyle,
} from "./Labels.styles";

interface CountdownLabelProps {
  startMillis?: number;
}

export const CountdownLabel = ({ startMillis = 0 }: CountdownLabelProps) => {
  const [time, setTime] = useState(startMillis);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime((time) => {
        const isZero = time === 0;
        isZero && clearInterval(timerId);
        return isZero ? 0 : time - 1000;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <Box
      sx={[labelContainerStyle, countdownLabelContainerStyle, extraGapStyle]}
    >
      <Typography sx={labelStyle}>Countdown</Typography>
      <Typography sx={[textStyle, countdownTextStyle]}>
        {formatTime(time)}
      </Typography>
    </Box>
  );
};
