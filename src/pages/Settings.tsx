import { useState } from "react";
import { MenuItem, Select, FormControl, Typography } from "@mui/material";

import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import LightModeIcon from "@mui/icons-material/LightModeRounded";
import DarkModeIcon from "@mui/icons-material/DarkModeRounded";
import { useColorScheme } from "@mui/material/styles";

type ThemeMode = "light" | "dark" | "system";

const Settings = () => {
  const { mode, setMode } = useColorScheme();
  const [selectedMode, setSelectedMode] = useState<ThemeMode>(mode || "system");

  const handleModeChange = (event: any) => {
    const newMode = event.target.value as ThemeMode;
    setMode(newMode);
    setSelectedMode(newMode);
  };

  const getThemeIcon = (mode: ThemeMode) => {
    if (mode === "light") return <LightModeIcon />;
    if (mode === "dark") return <DarkModeIcon />;
    return null;
  };

  return (
    <Container maxWidth="lg" sx={{ py: 2 }}>
      <Stack spacing={3}>
        <Typography variant="h2" component="h1" gutterBottom>
          Settings
        </Typography>

        <Stack spacing={2}>
          <Typography variant="h6">Theme</Typography>
          <FormControl fullWidth>
            <Select
              value={selectedMode}
              onChange={handleModeChange}
              startAdornment={getThemeIcon(selectedMode)}
              sx={{ "& .MuiSelect-startAdornment": { mr: 1 } }}
            >
              {["system", "light", "dark"].map((option) => (
                <MenuItem key={option} value={option}>
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
      </Stack>
    </Container>
  );
};
export default Settings;
