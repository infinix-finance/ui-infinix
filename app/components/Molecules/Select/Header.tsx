import { Box, ListSubheader, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { useLayout } from "@/hooks/responsive";
import { SearchInput } from "@/components/Atoms";
import React from "react";

const closeIconStyle = {
  color: "primary.main",
};

interface HeaderProps {
  searchable?: boolean;
  keyword?: string;
  setKeyword: (value: string) => void;
  onKewordChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClose: (event: React.MouseEvent<any>) => void;
}

export const Header = ({
  searchable,
  keyword,
  setKeyword,
  onKewordChange,
  onClose,
}: HeaderProps) => {
  const { unsupportedWidth } = useLayout();

  return (
    <>
      {unsupportedWidth && (
        <ListSubheader>
          <Box textAlign="right">
            <CloseIcon sx={closeIconStyle} onClick={onClose} />
          </Box>
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
            onChange={onKewordChange}
            onKeyDown={(e) => e.stopPropagation()}
            onClick={(e) => e.stopPropagation()}
          />
        </ListSubheader>
      )}
    </>
  );
};
