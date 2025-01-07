import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AnalyticsRoundedIcon from "@mui/icons-material/AnalyticsRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import { useLocation, useNavigate } from "react-router";
import { ReactNode } from "react";

interface SidebarContentItem {
  text: string;
  path: string;
  icon: ReactNode;
}

const mainListItems: SidebarContentItem[] = [
  { text: "Home", path: "/", icon: <HomeRoundedIcon /> },
  { text: "Profile", path: "/profile", icon: <AnalyticsRoundedIcon /> },
  { text: "Clients", path: "/clients", icon: <PeopleRoundedIcon /> },
  { text: "Tasks", path: "/tasks", icon: <AssignmentRoundedIcon /> },
];

const secondaryListItems: SidebarContentItem[] = [
  { text: "Settings", path: "/settings", icon: <SettingsRoundedIcon /> },
  { text: "About", path: "/about", icon: <InfoRoundedIcon /> },
  { text: "Feedback", path: "/feedback", icon: <HelpRoundedIcon /> },
];

export default function SidebarContent() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const handleOnClick = (item: SidebarContentItem) => navigate(item.path);

  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: "space-between" }}>
      <List>
        {mainListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => handleOnClick(item)}
              selected={location.pathname === item.path}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List>
        {secondaryListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => handleOnClick(item)}
              selected={location.pathname === item.path}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
