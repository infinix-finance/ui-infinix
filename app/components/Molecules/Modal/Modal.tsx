import {
  IconButton,
  Dialog,
  DialogProps,
  Box,
  useTheme,
  alpha,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export type ModalProps = DialogProps & {
  dismissible?: boolean;
};

export const Modal: React.FC<ModalProps> = ({
  dismissible = false,
  children,
  open,
  maxWidth,
  onClose,
  ...props
}) => {
  const theme = useTheme();
  return (
    <Dialog maxWidth="xl" open={open} onClose={onClose} fullScreen {...props}>
      {dismissible && (
        <IconButton
          sx={{
            position: "absolute",
            top: theme.spacing(9),
            right: theme.spacing(9),
            color: "primary.light",
            borderRadius: 1,
            "&:hover": {
              backgroundColor: alpha(theme.palette.primary.light, theme.custom.opacity.light),
              color: 'secondary.main',
            },
          }}
          onClick={() => onClose?.({}, 'backdropClick')}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
      )}
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }} p={4}>
        <Box sx={{
          width: theme.breakpoints.values[maxWidth || 'sm'],
        }}>
        {children}
        </Box>
      </Box>
    </Dialog>
  );
};
