import { Box, Typography } from "@mui/material";
import Image from "next/image";

import { containerStyle } from "./NotFound.styles";

export const NotFound = () => {
  return (
    <Box sx={containerStyle}>
      <Image
        src="/static/notfound.svg"
        alt="Token not found"
        width={64}
        height={64}
        color="primary.plum"
      />
      <Typography variant="body2" color="secondary.graishLavender">
        Results not found
      </Typography>
    </Box>
  );
};
