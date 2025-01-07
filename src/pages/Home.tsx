import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  Stack,
  Paper,
} from "@mui/material";
import { TrendingUp, Security, Speed, GroupAdd } from "@mui/icons-material";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
    <CardContent>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
        {icon}
      </Box>
      <Typography variant="h5" component="h3" gutterBottom align="center">
        {title}
      </Typography>
      <Typography variant="body1" color="text.secondary" align="center">
        {description}
      </Typography>
    </CardContent>
    <CardActions sx={{ mt: "auto", justifyContent: "center" }}>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
);

export default function Home() {
  const features = [
    {
      icon: <TrendingUp sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Growth",
      description:
        "Track your progress and achieve your business goals with our analytics tools.",
    },
    {
      icon: <Security sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Security",
      description:
        "Enterprise-grade security to protect your sensitive data and privacy.",
    },
    {
      icon: <Speed sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Performance",
      description:
        "Lightning-fast performance that keeps your business running smoothly.",
    },
    {
      icon: <GroupAdd sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Collaboration",
      description:
        "Work together seamlessly with your team members and clients.",
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Paper
        sx={{
          position: "relative",
          bgcolor: "grey.800",
          color: "white",
          mb: 4,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 4,
            }}
          >
            <Box sx={{ flex: "1" }}>
              <Typography
                component="h1"
                variant="h2"
                gutterBottom
                sx={{ fontWeight: "bold" }}
              >
                Welcome to Our Platform
              </Typography>
              <Typography variant="h5" paragraph>
                Streamline your workflow, boost productivity, and achieve your
                goals with our comprehensive suite of tools.
              </Typography>
              <Stack direction="row" spacing={2}>
                <Button variant="contained" size="large">
                  Get Started
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{ color: "white", borderColor: "white" }}
                >
                  Learn More
                </Button>
              </Stack>
            </Box>
            <Box sx={{ flex: "1" }} />
          </Box>
        </Container>
      </Paper>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" gutterBottom align="center">
          Our Features
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          paragraph
        >
          Everything you need to succeed in one place
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            },
            gap: 4,
            mt: 2,
          }}
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </Box>
      </Container>

      {/* CTA Section */}
      <Box
        sx={{ bgcolor: "primary.dark", color: "primary.contrastText", py: 4 }}
      >
        <Container maxWidth="lg">
          <Stack spacing={4} alignItems="center">
            <Typography variant="h4" component="h3" align="center">
              Ready to Get Started?
            </Typography>
            <Typography variant="h6" align="center" sx={{ maxWidth: "md" }}>
              Join thousands of satisfied users who have transformed their
              workflow with our platform.
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: "white",
                color: "primary.main",
                "&:hover": {
                  bgcolor: "grey.100",
                },
              }}
            >
              Start Free Trial
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Stats Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            },
            gap: 4,
            justifyItems: "center",
          }}
        >
          {[
            { number: "10K+", label: "Active Users" },
            { number: "50M+", label: "Tasks Completed" },
            { number: "99.9%", label: "Uptime" },
            { number: "24/7", label: "Support" },
          ].map((stat, index) => (
            <Stack key={index} alignItems="center" spacing={1}>
              <Typography
                variant="h3"
                component="div"
                sx={{ fontWeight: "bold" }}
              >
                {stat.number}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                {stat.label}
              </Typography>
            </Stack>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
