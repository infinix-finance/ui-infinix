import { Box, Typography } from "@mui/material";
import Image from "next/image";

export const NotFound = () => {
  return (
    <Box
      sx={{
        margin: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.5rem",
      }}
    >
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
