import { Alert, AlertColor } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";

import { MessageAction } from "./Action";
import { Contents } from "./Contents";
import { Progress } from "./Progress";
import { useState } from "react";
import { containerStyle } from "./AlertNotification.styles";

const ANIMATION_DURATION = 4000;

export type AlertNotificationProps = {
  severity?: AlertColor;
  title?: string;
  description?: string;
  url?: string;
  showProgress?: boolean;
  inline?: boolean;
  actionLabel?: string;
  onClose?: () => void;
  onAction?: () => void;
};

export const iconMapping = {
  success: <CheckCircleOutlinedIcon fontSize="medium" />,
  warning: <WarningAmberOutlinedIcon fontSize="medium" />,
  error: <ErrorOutlineOutlinedIcon fontSize="medium" />,
  info: <InfoOutlinedIcon fontSize="medium" />,
};

export const AlertNotification = ({
  severity = "error",
  title,
  description,
  url,
  showProgress = false,
  inline = false,
  actionLabel = "",
  onClose,
  onAction,
}: AlertNotificationProps) => {
  const [playing, setPlaying] = useState(true);

  return (
    <Alert
      sx={containerStyle(inline)}
      variant="filled"
      color={severity}
      icon={iconMapping[severity]}
      onClose={onClose}
      onMouseEnter={() => setPlaying(false)}
      onMouseLeave={() => setPlaying(true)}
      action={
        <MessageAction
          actionLabel={actionLabel}
          url={url}
          onClose={onClose}
          onAction={onAction}
        />
      }
    >
      <Contents title={title} description={description} />
      {showProgress && (
        <Progress
          severity={severity}
          playAnimation={playing}
          inline={inline}
          duration={ANIMATION_DURATION}
          onProgressEnd={onClose}
        />
      )}
    </Alert>
  );
};
