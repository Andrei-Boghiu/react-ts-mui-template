import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Rating,
  Stack,
  Alert,
  Snackbar,
} from "@mui/material";
import { useState, FormEvent } from "react";
import Avatar from "../components/Avatar";
import { useAuth } from "../context/useAuth";

export default function Feedback() {
  const { user } = useAuth();

  const [rating, setRating] = useState<number>(0);
  const [text, setText] = useState<string>("");

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form data:", {
      name: user?.name,
      email: user?.email,
      rating,
      text,
    });
    setOpenSnackbar(true);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 2 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Feedback
      </Typography>

      <Typography variant="subtitle1" sx={{ mb: 4 }}>
        We value your feedback! Please take a moment to share your thoughts with
        us.
      </Typography>

      <Box component="form" onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography variant="h6" gutterBottom>
                Rate Your Experience
              </Typography>
              <Rating
                name="rating"
                value={rating}
                onChange={(_, newValue) => setRating(newValue ?? 0)}
                size="large"
              />
            </Box>
            <Avatar />
          </Box>

          <Box>
            <Typography variant="h6" gutterBottom>
              Detailed Feedback
            </Typography>
            <TextField
              required
              fullWidth
              id="feedback"
              name="feedback"
              label="Please share your feedback"
              multiline
              rows={8}
              variant="outlined"
              value={text}
              onChange={(newValue) => setText(newValue.target.value ?? 0)}
            />
          </Box>

          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{ minWidth: 200 }}
              disabled={rating === 0 || !text}
            >
              Submit Feedback
            </Button>
          </Box>
        </Stack>
      </Box>

      {/* Success Message */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
          variant="filled"
        >
          Thank you for your feedback!
        </Alert>
      </Snackbar>
    </Container>
  );
}
