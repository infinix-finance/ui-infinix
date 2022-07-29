import React from "react";
import { Switch, Box, BoxProps, TooltipProps } from "@mui/material";

import { Label } from "@/components/Atoms";

export type LabeledSwitchProps = {
  label: string;
  TooltipProps?: TooltipProps;
  textFirst?: boolean;
} & BoxProps;

export const LabeledSwitch: React.FC<LabeledSwitchProps> = ({
  label,
  TooltipProps,
  textFirst = true,
}) => {
  return (
    <Box
      display="flex"
      flexDirection={textFirst ? "row" : "row-reverse"}
      justifyContent={"space-between"}
      alignItems={"center"}
      sx={{ width: "fit-content" }}
      component="div"
      gap={2}
    >
      <Label label={label} TooltipProps={TooltipProps} mb={0} />
      <Switch />
    </Box>
  );
};
