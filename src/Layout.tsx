import Box from "@mui/material/Box";
import Sidebar from "./Sidebar";
import { useTheme } from "@mui/material/styles";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          margin: 0,
          p: 0,
          backgroundColor: theme.palette.background.default, // Use theme's default background
          color: theme.palette.text.primary, // Use theme's text color
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
