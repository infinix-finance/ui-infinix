import React from "react";
import { MenuItem } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

import { Input } from "../Input";
import { Item } from "./Item";
import { SelectProps, Option } from "./Select.types";
import { filterOptions, findText } from "./Select.helpers";
import { Header } from "./Header";

import { selectBackdropStyle, selectPaperStyle } from "./Select.styles";
import { NotFound } from "./NotFound";

const renderValue = (options: Option[]) => (value: any) => {
  const option = options!.find((option: any) => option.value == value);
  return (
    option && (
      <Item
        productIds={option.productIds}
        assets={option.assets}
        showDescription={false}
      />
    )
  );
};

export const Select = ({
  value,
  options,
  searchable,
  maxHeight = 57,
  ...rest
}: SelectProps) => {
  const [keyword, setKeyword] = React.useState<string>("");
  const [open, setOpen] = React.useState<boolean>(false);
  const notFoundItem = !findText(options, keyword);

  const handleKewordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  const handleClick = () => {
    setKeyword("");
    !rest.disabled && setOpen(true);
  };

  const handleClose = (event: React.MouseEvent<any>) => {
    event.stopPropagation();
    setOpen(false);
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
            onClick: handleClose,
            sx: selectBackdropStyle,
          },
          PaperProps: {
            onClick: (e) => e.stopPropagation(),
            sx: selectPaperStyle(maxHeight),
          },
        },
        IconComponent: open ? ExpandLessIcon : ExpandMoreIcon,
        renderValue: renderValue(options),
      }}
      {...rest}
    >
      <Header
        searchable={searchable}
        keyword={keyword}
        setKeyword={setKeyword}
        onClose={handleClose}
        onKewordChange={handleKewordChange}
      />
      {filterOptions(options, keyword, value).map((option) => (
        <MenuItem
          key={option.value}
          value={option.value}
          disabled={option.disabled}
          onClick={handleClose}
        >
          <Item
            productIds={option.productIds}
            assets={option.assets}
            showDescription={Boolean(option.productIds)}
          />
        </MenuItem>
      ))}
      {notFoundItem && <NotFound />}
    </Input>
  );
};
