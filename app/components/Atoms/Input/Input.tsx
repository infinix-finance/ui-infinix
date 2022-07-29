import React from "react";
import {
  Button,
  ButtonProps as MuiButtonProps,
  InputAdornment,
  TextField,
  TextFieldProps,
  Typography,
  useTheme,
  Box,
} from "@mui/material";
import { BaseAsset } from "../BaseAsset";
import { Label, LabelProps } from "../Label";

export type InputProps = {
  LabelProps?: LabelProps;
  alert?: boolean;
  startAdornmentAsset?: {
    icon?: string;
    label?: string;
  };
  tokenDescription?: boolean;
  buttonLabel?: string;
  ButtonProps?: MuiButtonProps;
  referenceText?: string;
  setValue?: React.Dispatch<React.SetStateAction<any>>;
  noBorder?: boolean;
} & Omit<TextFieldProps, "label">;

export const Input: React.FC<InputProps> = ({
  LabelProps,
  alert,
  startAdornmentAsset,
  buttonLabel,
  ButtonProps,
  referenceText,
  setValue,
  children,
  noBorder,
  InputProps,
  ...rest
}) => {
  const theme = useTheme();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue && setValue(event.target.value);
  };
  return (
    <Box>
      {LabelProps && <Label {...LabelProps} />}
      <TextField
        fullWidth
        onChange={handleChange}
        InputProps={{
          ...InputProps,
          startAdornment: startAdornmentAsset && (
            <InputAdornment position="start">
              <BaseAsset
                icon={startAdornmentAsset.icon}
                label={startAdornmentAsset.label}
              />
            </InputAdornment>
          ),
          endAdornment: buttonLabel ? (
            <Button size="small" disabled={rest.disabled} {...ButtonProps}>
              {buttonLabel}
            </Button>
          ) : (
            referenceText && (
              <Typography
                variant="body2"
                color={rest.disabled ? "secondary.light" : "text.secondary"}
                whiteSpace="nowrap"
              >
                {referenceText}
              </Typography>
            )
          ),
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            color: alert ? theme.palette.warning.main : undefined,
            "& .MuiOutlinedInput-notchedOutline": {
              borderWidth: noBorder ? 0 : 1,
              borderColor: alert ? `${theme.palette.warning.main}` : undefined,
            },
          },
        }}
        {...rest}
      >
        {children}
      </TextField>
    </Box>
  );
};
