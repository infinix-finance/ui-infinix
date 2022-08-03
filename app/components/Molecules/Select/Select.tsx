import React from "react";
import {
  alpha,
  ListSubheader,
  MenuItem,
  useTheme,
  useMediaQuery,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

import { Input } from "../Input";
import { SearchInput } from "@/components/Atoms/SearchInput";
import { Item } from "./Item";
import { getProduct } from "@/defi";
import { Option, SelectProps } from "./types";
import { filterOptions } from "./helpers";

export const Select: React.FC<SelectProps> = ({
  value,
  options,
  noBorder,
  borderRight,
  minWidth,
  mobileWidth,
  searchable,
  centeredLabel,
  dropdownForceWidth,
  dropdownOffsetX,
  dropdownOffsetY,
  ...rest
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [keyword, setKeyword] = React.useState<string>("");
  const [open, setOpen] = React.useState<boolean>(false);

  const handleKewordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
    setKeyword("");
    !rest.disabled && setOpen(true);
  };

  return (
    <Input
      select
      value={value}
      onClick={handleClick}
      SelectProps={{
        MenuProps: {
          open: open,
          BackdropProps: {
            onClick: (e) => {
              e.stopPropagation();
              setOpen(false);
            },
            sx: {
              opacity: "0 !important",
            },
          },
          PaperProps: {
            onClick: (e) => e.stopPropagation(),
            sx: {
              width: dropdownForceWidth,
              marginLeft: dropdownOffsetX,
              marginTop: dropdownOffsetY,
              padding: 0,
              backgroundColor: theme.palette.secondary.dark,
              [theme.breakpoints.down("sm")]: {
                width: "inherit",
                marginLeft: 0,
                marginTop: 0,
                top: "0 !important",
                left: "0 !important",
                bottom: 0,
                right: 0,
                maxWidth: "100%",
              },
            },
          },
        },
        IconComponent: open ? ExpandLessIcon : ExpandMoreIcon,
        renderValue: (v: any) => {
          const option = options!.find((option: any) => option.value == v);
          return (
            option && (
              <Item productIds={option.productIds} assets={option.assets} />
            )
          );
        },
      }}
      sx={{
        borderRight: borderRight
          ? `1px solid ${alpha(
              theme.palette.common.white,
              theme.custom.opacity.main
            )}`
          : undefined,
        "& .MuiOutlinedInput-root.MuiInputBase-root": {
          borderWidth: noBorder ? 0 : undefined,
          "& .MuiOutlinedInput-notchedOutline": {
            borderWidth: noBorder ? 0 : undefined,
          },
        },
        minWidth: {
          md: minWidth,
        },
        width: {
          xs: mobileWidth,
          md: "100%",
        },
      }}
      {...rest}
    >
      {isMobile && (
        <ListSubheader>
          <Box textAlign="right">
            <CloseIcon
              sx={{
                color: theme.palette.primary.main,
              }}
              onClick={() => setOpen(false)}
            />
          </Box>
        </ListSubheader>
      )}
      {isMobile && (
        <ListSubheader>
          <Typography variant="h6" color="text.primary" textAlign="center">
            Select option
          </Typography>
        </ListSubheader>
      )}
      {searchable && (
        <ListSubheader>
          <SearchInput
            fullWidth
            value={keyword}
            setValue={setKeyword}
            onChange={handleKewordChange}
            onKeyDown={(e) => e.stopPropagation()}
            onClick={(e) => e.stopPropagation()}
          />
        </ListSubheader>
      )}
      {options &&
        filterOptions(options, value, keyword).map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
            disabled={option.disabled}
            onClick={() => setOpen(false)}
          >
            <Item productIds={option.productIds} assets={option.assets} />
            {value == option.value && (
              <CheckIcon
                sx={{
                  position: "absolute",
                  right: theme.spacing(3),
                }}
              />
            )}
          </MenuItem>
        ))}
    </Input>
  );
};
