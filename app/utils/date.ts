import { intervalToDuration } from "date-fns";

const zeroPad = (num?: number) => String(num || 0).padStart(2, "0");

export const formatTime = (millis: number): string => {
  const { hours, minutes, seconds } = intervalToDuration({
    start: 0,
    end: millis,
  });
  return `${zeroPad(hours)}:${zeroPad(minutes)}:${zeroPad(seconds)}`;
};
