import { OpenInNew } from "@mui/icons-material";
import ExpandMore from "@mui/icons-material/ExpandMore";
import {
  Box,
  useTheme,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Theme,
} from "@mui/material";
import dynamic from "next/dynamic";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";

import { Logo } from "@/components/Atoms";

type MenuItem = {
  label: string;
  path: string;
  icon: React.ComponentType<any>;
  endAdornment?: React.ReactNode;
  status: "active" | "inactive";
  matches?: string[];
};

export type MenuItemType = MenuItem & {
  subItems?: Array<MenuItem>;
};

const MENU_ITEMS: MenuItemType[] = [
  {
    label: "Overview",
    path: "/",
    icon: dynamic(() => import("@mui/icons-material/HomeRounded")),
    status: "active",
    matches: [
      "/",
      "/crowdloan-rewards",
      "/crowdloan-rewards/ksm",
      "/crowdloan-rewards/stablecoin",
    ],
  },
  {
    label: "Transfers",
    path: "/transfers",
    icon: dynamic(() => import("@mui/icons-material/SwapHorizRounded")),
    status: "inactive",
  },
  {
    label: "Governance",
    path: "/governance",
    icon: dynamic(() => import("@mui/icons-material/HowToVoteRounded")),
    status: "active",
    matches: ["/governance"],
  },
  {
    label: "Stats",
    path: "/stats",
    icon: dynamic(() => import("@mui/icons-material/EqualizerRounded")),
    status: "active",
    matches: ["/stats"],
  },
  {
    label: "Treasury",
    path: "",
    icon: dynamic(() => import("@mui/icons-material/AccountBalanceRounded")),
    status: "active",
    subItems: [
      {
        label: "Dashboard",
        path: "/treasury/dashboard",
        icon: dynamic(() => import("@mui/icons-material/DashboardRounded")),
        status: "active",
        matches: ["/treasury/dashboard"],
      },
      {
        label: "Staking",
        path: "/treasury/staking",
        icon: dynamic(() => import("@mui/icons-material/TollRounded")),
        status: "active",
        matches: ["/treasury/staking"],
      },
      {
        label: "Bonding",
        path: "/treasury/bonding",
        icon: dynamic(() => import("@mui/icons-material/PaymentsRounded")),
        status: "active",
        matches: ["/treasury/bonding"],
      },
    ],
  },
  {
    label: "Pablo Exchange",
    path: "/pablo-exchange",
    icon: dynamic(() => import("@mui/icons-material/Autorenew")),
    status: "inactive",
    endAdornment: (
      <Link href="#" passHref>
        <IconButton>
          <OpenInNew />
        </IconButton>
      </Link>
    ),
  },
  {
    label: "Mosaic Bridge",
    path: "/mosaic-bridge",
    icon: dynamic(() => import("@mui/icons-material/JoinInner")),
    status: "inactive",
    endAdornment: (
      <Link href="#">
        <IconButton>
          <OpenInNew />
        </IconButton>
      </Link>
    ),
  },
];

const MenuItem = (
  router: NextRouter,
  config: MenuItemType,
  key: string,
  theme: Theme,
  isSubItem: boolean
) => {
  return (
    <ListItem
      selected={config?.matches?.includes(router.pathname)}
      button
      key={key}
      disabled={config.status === "inactive"}
      sx={{ paddingLeft: isSubItem ? "3rem" : "1.5rem" }}
    >
      <ListItemIcon>
        <config.icon />
      </ListItemIcon>
      <Link href={config.path}>
        <ListItemText primary={config.label} />
      </Link>
      {config.endAdornment && (
        <ListItemIcon sx={{ "> a": { color: theme.palette.primary.light } }}>
          {config.endAdornment}
        </ListItemIcon>
      )}
    </ListItem>
  );
};

export const NavBar: React.FC = () => {
  const theme = useTheme();
  const router = useRouter();
  return (
    <div>
      <Box
        sx={{
          padding: theme.spacing(6, 3),
          mb: theme.spacing(4),
        }}
      >
        <Logo />
      </Box>
      <List>
        {Object.entries(MENU_ITEMS).map(([key, config]) => {
          return config.subItems ? (
            <Accordion key={key}>
              <AccordionSummary
                expandIcon={
                  <ExpandMore sx={{ color: theme.palette.primary.light }} />
                }
                aria-controls={`${config.label}-content`}
                id={`${config.label}-header`}
              >
                <ListItem key={key} disabled={config.status === "inactive"}>
                  <ListItemIcon>
                    <config.icon />
                  </ListItemIcon>
                  <ListItemText primary={config.label} />
                  {config.endAdornment && (
                    <ListItemIcon
                      sx={{ "> a": { color: theme.palette.primary.light } }}
                    >
                      {config.endAdornment}
                    </ListItemIcon>
                  )}
                </ListItem>
              </AccordionSummary>
              <AccordionDetails>
                {Object.entries(config.subItems).map(([key, config]) =>
                  MenuItem(router, config, key, theme, true)
                )}
              </AccordionDetails>
            </Accordion>
          ) : (
            MenuItem(router, config, key, theme, false)
          );
        })}
      </List>
    </div>
  );
};
