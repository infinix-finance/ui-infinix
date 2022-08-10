import { Close, OpenInNew } from "@mui/icons-material";
import { Box, Button, Link } from "@mui/material";

import { containerStyle, rightButtonStyle } from "./Action.styles";

type MessageActionProps = {
  url?: string;
  actionLabel?: string;
  onAction?: () => void;
  onClose?: () => void;
};

export const MessageAction = ({
  url,
  actionLabel,
  onAction,
  onClose,
}: MessageActionProps) => (
  <Box sx={containerStyle}>
    {onAction && actionLabel && (
      <Button variant="dark" size="small" onClick={onAction}>
        {actionLabel}
      </Button>
    )}
    {url && (
      <Button sx={rightButtonStyle} variant="dark" size="small">
        <Link href={url} target="_blank" rel="noopener noreferrer">
          <OpenInNew fontSize="small" />
        </Link>
      </Button>
    )}
    {onClose && (
      <Button
        sx={rightButtonStyle}
        variant="dark"
        size="small"
        onClick={onClose}
      >
        <Close fontSize="small" />
      </Button>
    )}
  </Box>
);
