import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useAuth } from "../context/useAuth";

export default function SidebarFooter() {
  const { user } = useAuth();
  return (
    <Stack
      direction="row"
      sx={{
        p: 2,
        gap: 1,
        alignItems: "center",
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Avatar
        sizes="small"
        alt={user?.name ?? "Riley Error James"}
        // src="/path/to/img.jpg"
        sx={{ width: 36, height: 36 }}
      />
      <Box sx={{ mr: "auto" }}>
        <Typography
          variant="body2"
          sx={{ fontWeight: 500, lineHeight: "16px" }}
        >
          {user?.name ?? "Riley Error James"}
        </Typography>
        <Typography variant="caption" sx={{ color: "text.secondary" }}>
          {user?.email ?? "riley@undefined.err"}
        </Typography>
      </Box>
    </Stack>
  );
}
