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

interface FeedbackFormData {
  name: string;
  email: string;
  feedback: string;
  rating: number | null;
}

export default function Feedback() {
  // name and email should be fetched from the auth provider
  const [formData, setFormData] = useState<FeedbackFormData>({
    name: "",
    email: "",
    feedback: "",
    rating: 0,
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRatingChange = (newValue: number | null) => {
    setFormData((prev) => ({
      ...prev,
      rating: newValue,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form data:", formData);
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

      <Box component="form" onSubmit={handleSubmit} noValidate>
        <Stack spacing={4}>
          <Box>
            <Typography variant="h6" gutterBottom>
              Rate Your Experience
            </Typography>
            <Rating
              name="rating"
              value={formData.rating}
              onChange={(_, newValue) => handleRatingChange(newValue)}
              size="large"
            />
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
              value={formData.feedback}
              onChange={handleChange}
            />
          </Box>

          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{ minWidth: 200 }}
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
