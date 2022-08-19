import React, { useEffect, useState } from "react";
import {
  TabsProps as MuiTabsProps,
  Tabs as MuiTabs,
  Tab as MuiTab,
} from "@mui/material";
import { tabsStyle, tabStyle } from "./Tabs.styles";

export type TabItem = {
  label: string;
  icon?: JSX.Element;
  disabled?: boolean;
  colorOverride?: string;
};

export type TabsProps = {
  items: TabItem[];
  value?: number;
  onChange: (value: number) => void;
} & Omit<MuiTabsProps, "onFocusVisible" | "onChange">;

export const Tabs: React.FC<TabsProps> = ({
  items,
  value,
  onChange,
  ...rest
}) => {
  const [selected, setSelected] = useState(value);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    onChange(newValue);
  };

  useEffect(() => {
    setSelected(value);
  }, [value]);

  return (
    <MuiTabs
      sx={tabsStyle(items[selected].colorOverride)}
      value={selected}
      onChange={handleChange}
      variant="fullWidth"
      {...rest}
    >
      {items.map((item, index) => (
        <MuiTab
          sx={tabStyle(item.colorOverride)}
          key={index}
          label={item.label}
          icon={item.icon}
          iconPosition="start"
          disabled={item.disabled}
        />
      ))}
    </MuiTabs>
  );
};
