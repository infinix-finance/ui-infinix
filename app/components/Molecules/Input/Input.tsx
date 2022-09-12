import React, { useRef } from "react";
import { TextField, Box, InputAdornment, Typography } from "@mui/material";

import { InputLabel } from "./InputLabel";
import { inputStyle } from "./Input.styles";
import { InputProps } from "./types";
import { ProductAsset } from "../ProductAsset";

export const Input: React.FC<InputProps> = ({
  TopLabelProps,
  BottomLabelProps,
  productIds,
  trailingText,
  alignEnd = false,
  alert,
  setValue,
  InputProps,
  ...rest
}) => {
  const ref = useRef<HTMLInputElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue && setValue(event.target.value);
  };

  const handleFocus = () => {
    if (!ref.current || !alignEnd) return;

    const input = ref.current.querySelector("input")!;

    if (rest.type === "number") return;

    input.selectionStart = input.value.length;
    input.selectionEnd = input.value.length;
  };

  return (
    <Box display="flex" flexDirection="column" gap={1.5}>
      {TopLabelProps && (
        <InputLabel
          error={rest.error}
          disabled={rest.disabled}
          {...TopLabelProps}
        />
      )}
      <TextField
        sx={inputStyle(alert || false, alignEnd)}
        fullWidth
        onChange={handleChange}
        onFocus={handleFocus}
        InputProps={{
          ...InputProps,
          ref,
          startAdornment: productIds && (
            <InputAdornment position="start">
              <ProductAsset productIds={productIds} />
            </InputAdornment>
          ),
          endAdornment: trailingText && (
            <InputAdornment position="end">
              <Typography
                color={
                  rest.disabled ? "secondary.graishLavender" : "primary.ice"
                }
              >
                {trailingText}
              </Typography>
            </InputAdornment>
          ),
        }}
        {...rest}
      />
      {BottomLabelProps && (
        <InputLabel
          error={rest.error}
          disabled={rest.disabled}
          {...BottomLabelProps}
        />
      )}
    </Box>
  );
};
