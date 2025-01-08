import Stack from "@mui/material/Stack";
import Avatar from "./Avatar";
import { useNavigate } from "react-router";

export default function SidebarFooter() {
  const navigate = useNavigate();
  return (
    <Stack
      direction="row"
      sx={{
        alignItems: "center",
        borderTop: "1px solid",
        borderColor: "divider",
        cursor: "pointer",
      }}
      onClick={() => navigate("/profile")}
    >
      <Avatar />
    </Stack>
  );
}
