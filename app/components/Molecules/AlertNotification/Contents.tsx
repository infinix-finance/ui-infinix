import { Box, Typography } from "@mui/material";

import {
  containerStyle,
  descriptionStyle,
  titleStyle,
} from "./Contents.styles";

type ContentsProps = {
  title?: string;
  description?: string;
};

export const Contents = ({ title, description }: ContentsProps) => (
  <Box sx={containerStyle}>
    {title && (
      <Typography sx={titleStyle} variant="body3">
        {title}
      </Typography>
    )}
    {description && (
      <Typography sx={descriptionStyle} variant="body2">
        {description}
      </Typography>
    )}
  </Box>
);
