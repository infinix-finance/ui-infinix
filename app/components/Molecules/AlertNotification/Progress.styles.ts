import { Keyframes } from "@emotion/react";
import { Theme } from "@mui/material";

export const containerStyle = (inline: boolean) => (theme: Theme) => ({
  bottom: 0,
  right: 0,
  left: 0,
  position: "absolute",
  overflow: "hidden",
  height: theme.spacing(1.5),
  borderBottomLeftRadius: inline ? 0 : "0.5rem",
  borderBottomRightRadius: inline ? 0 : "0.5rem",
});

export const contentStyle = (theme: Theme) => ({
  bottom: 0,
  right: 0,
  left: 0,
  position: "absolute",
  height: theme.spacing(0.5),
});

export const progressStyle = (
  progress: Keyframes,
  duration: number,
  play: boolean
) => ({
  animation: `${progress} ${duration}ms linear`,
  animationPlayState: play ? "running" : "paused",
  animationFillMode: "forwards",
});
