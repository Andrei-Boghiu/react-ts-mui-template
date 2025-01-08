import MUI_Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useAuth } from "../context/useAuth";

export default function Avatar() {
  const { user } = useAuth();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        p: 2,
        gap: 1,
      }}
    >
      <MUI_Avatar
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
    </Box>
  );
}
