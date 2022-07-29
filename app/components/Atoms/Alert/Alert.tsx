import { FC } from "react";
import { Alert as MuiAlert, AlertProps as MuiAlertProps } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { AlertTitle, Box } from "@mui/material";

export type AlertProps = {
  alertTitle?: string;
  alertText: string;
  underlined?: boolean;
} & MuiAlertProps;

export const Alert: FC<AlertProps> = ({
  severity = "info",
  alertTitle,
  alertText,
  underlined,
  action,
  ...rest
}) => {
  const theme = useTheme();

  return (
    <Box
      width="100%"
      borderBottom={
        underlined ? `2px solid ${theme.palette[severity].main}` : undefined
      }
    >
      <MuiAlert
        variant="filled"
        severity={severity}
        {...rest}
        sx={{
          width: "100%",
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          <Box>
            {alertTitle && <AlertTitle>{alertTitle}</AlertTitle>}
            <Typography
              sx={{
                color: theme.palette.common.white,
                fontFamily: theme.custom.fontFamily.primary,
              }}
              variant="body2"
            >
              {alertText}
            </Typography>
          </Box>
          {action && action}
        </Box>
      </MuiAlert>
    </Box>
  );
};
