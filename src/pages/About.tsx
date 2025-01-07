import {
  Box,
  Container,
  Typography,
  Paper,
  Stack,
  Divider,
} from "@mui/material";

export default function About() {
  return (
    <Container maxWidth="lg" sx={{ py: 2 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        About Us
      </Typography>

      <Paper elevation={0} sx={{ p: 4, mb: 4, bgcolor: "background.subtle" }}>
        <Typography variant="h5" gutterBottom>
          Our Mission
        </Typography>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
      </Paper>

      <Stack spacing={4}>
        <Box>
          <Typography variant="h4" gutterBottom>
            Who We Are
          </Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
            dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed
            auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in
            nulla enim.
          </Typography>
          <Typography paragraph>
            Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec
            consectetuer ligula vulputate sem tristique cursus. Nam nulla quam,
            gravida non, commodo a, sodales sit amet, nisi.
          </Typography>
        </Box>

        <Divider />

        <Box>
          <Typography variant="h4" gutterBottom>
            Our Values
          </Typography>
          <Typography paragraph>
            Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor,
            ultrices ut, elementum vulputate, nunc. Sed adipiscing ornare risus.
            Morbi est est, blandit sit amet, sagittis vel, euismod vel, velit.
          </Typography>
          <Typography paragraph>
            Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed,
            euismod in, nibh. Quisque volutpat condimentum velit. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos.
          </Typography>
        </Box>

        <Divider />

        <Box>
          <Typography variant="h4" gutterBottom>
            Our History
          </Typography>
          <Typography paragraph>
            Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque
            adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut
            fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat
            imperdiet.
          </Typography>
          <Typography paragraph>
            Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo
            eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus
            magna.
          </Typography>
        </Box>
      </Stack>
    </Container>
  );
}
