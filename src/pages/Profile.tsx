import {
  Box,
  Container,
  Typography,
  Paper,
  Avatar,
  Chip,
  Stack,
  Card,
  CardContent,
} from "@mui/material";
import {
  EmojiEvents,
  WorkspacePremium,
  Psychology,
  Speed,
} from "@mui/icons-material";

const achievements = [
  {
    title: "First Project Completed",
    description: "Successfully completed the first project milestone",
    icon: <EmojiEvents sx={{ fontSize: 40, color: "primary.main" }} />,
    date: "Jan 2024",
  },
  {
    title: "Expert Solutions",
    description: "Provided 50+ solutions to complex problems",
    icon: <WorkspacePremium sx={{ fontSize: 40, color: "primary.main" }} />,
    date: "Feb 2024",
  },
  {
    title: "Quick Learner",
    description: "Mastered all platform features in record time",
    icon: <Psychology sx={{ fontSize: 40, color: "primary.main" }} />,
    date: "Feb 2024",
  },
  {
    title: "Speed Champion",
    description: "Consistently delivers projects ahead of schedule",
    icon: <Speed sx={{ fontSize: 40, color: "primary.main" }} />,
    date: "Mar 2024",
  },
];

const getTagColor = (tag: string) => {
  switch (tag.toLowerCase()) {
    case "new":
      return "info";
    case "experienced":
      return "success";
    case "expert":
      return "error";
    default:
      return "default";
  }
};

export default function Profile() {
  // Hardcoded user data
  const userData = {
    name: "John Doe",
    email: "john.doe@example.com",
    tag: "Expert",
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 3 }}>
        <Paper sx={{ p: 4, mb: 4 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "center", sm: "center" },
              gap: 4,
            }}
          >
            <Avatar
              //   src={userData.avatarUrl}
              alt={userData.name}
              sx={{
                width: 150,
                height: 150,
                border: 3,
                borderColor: "primary.main",
              }}
            />

            <Box sx={{ flex: 1 }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: { xs: "center", sm: "flex-start" },
                  gap: 2,
                  mb: 2,
                }}
              >
                <Typography variant="h3" component="h1">
                  {userData.name}
                </Typography>
                <Chip
                  label={userData.tag}
                  color={getTagColor(userData.tag) as any}
                  sx={{ height: 28 }}
                />
              </Box>

              <Typography
                variant="body1"
                color="text.secondary"
                alignItems={{ xs: "center", sm: "left" }}
              >
                {userData.email}
              </Typography>
            </Box>
          </Box>
        </Paper>

        {/* Achievements Section */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Achievements
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
              },
              gap: 3,
            }}
          >
            {achievements.map((achievement, index) => (
              <Card key={index}>
                <CardContent>
                  <Stack spacing={2} alignItems="center">
                    {achievement.icon}
                    <Typography variant="h6" component="h3" align="center">
                      {achievement.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      align="center"
                    >
                      {achievement.description}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{ mt: "auto" }}
                    >
                      {achievement.date}
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>

        {/* Stats Summary */}
        <Paper sx={{ p: 4 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Activity Summary
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
              },
              gap: 3,
            }}
          >
            {[
              { label: "Projects", value: "23" },
              { label: "Completed", value: "19" },
              { label: "In Progress", value: "4" },
              { label: "Success Rate", value: "95%" },
            ].map((stat, index) => (
              <Box key={index} sx={{ textAlign: "center" }}>
                <Typography variant="h4" component="div">
                  {stat.value}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}
