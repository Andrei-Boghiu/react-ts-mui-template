import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function SidebarHeader() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        mt: "calc(var(--template-frame-height, 0px) + 4px)",
        p: 2,
        borderBottom: "1px solid",
        borderColor: "divider",
        textAlign: "center",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 600 }}>
        Website Name
      </Typography>
      <Typography variant="caption" sx={{ color: "text.secondary" }}>
        Short website cta slogan!
      </Typography>
    </Box>
  );
}
