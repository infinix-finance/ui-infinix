import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { NavBar } from "../Organisms";
import { alpha, Breadcrumbs, useTheme, Typography } from "@mui/material";
import { useTablet } from "@/hooks/responsive";

type DefaultLayoutProps = {
  breadcrumbs?: React.ReactNode[];
  children: React.ReactNode;
};

export const DefaultLayout: React.FC<DefaultLayoutProps> = (props) => {
  const { children, breadcrumbs } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isTablet = useTablet();
  const theme = useTheme();
  const drawerWidth = isTablet
    ? theme.custom.drawerWidth.tablet
    : theme.custom.drawerWidth.desktop;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
          px: {
            xs: "0",
            md: theme.spacing(3),
          },
          backgroundColor: alpha(
            theme.palette.primary.dark,
            theme.custom.opacity.darker
          ),
          backdropFilter: "blur(32x)",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row-reverse",
            gap: 3,
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            {/* TODO: adding other content for toolbar */}
            <Typography variant="h5">--Toolbar here--</Typography>
          </Box>
          {breadcrumbs && (
            <Breadcrumbs separator="›" aria-label="breadcrumb">
              {breadcrumbs}
            </Breadcrumbs>
          )}
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          anchor="right"
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              padding: 0,
            },
          }}
        >
          <NavBar />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { sm: "none", md: "block", xs: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              padding: 0,
            },
          }}
          open
        >
          <NavBar />
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default DefaultLayout;
