import MuiDrawer, { drawerClasses } from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import SidebarHeader from "./components/SidebarHeader";
import SidebarContent from "./components/SidebarContent";
import SidebarFooter from "./components/SidebarFooter";
import { SIDEBAR_WIDTH } from "./utils/globalVariables";

const Drawer = styled(MuiDrawer)({
  width: SIDEBAR_WIDTH,
  flexShrink: 0,
  boxSizing: "border-box",
  mt: 10,
  [`& .${drawerClasses.paper}`]: {
    width: SIDEBAR_WIDTH,
    boxSizing: "border-box",
  },
});

const Sidebar: React.FC = () => {
  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          [`& .${drawerClasses.paper}`]: {
            backgroundColor: "background.paper",
          },
        }}
      >
        <SidebarHeader />
        <Divider />
        <SidebarContent />
        <Divider />
        <SidebarFooter />
      </Drawer>
    </>
  );
};

export default Sidebar;
