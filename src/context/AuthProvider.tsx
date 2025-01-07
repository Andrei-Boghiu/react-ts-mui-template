import React, { createContext, useState, useEffect, ReactNode } from "react";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import wait from "../utils/wait";
import { AuthContextType, User } from "../types";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fakeAuthLoader = async () => {
    try {
      setLoading(true);
      setError(null);

      wait(1700); // fake loader

      if (Math.random() < 0.3) {
        throw new Error("Fake error haha!");
      }

      setUser({
        id: "123",
        name: "John Doe",
        email: "john.doe@example.com",
      });
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fakeAuthLoader();

    const retryInterval = setInterval(() => {
      if (error) {
        fakeAuthLoader();
      }
    }, 30000);

    return () => clearInterval(retryInterval);
  }, [error]);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return (
      <Box sx={{ margin: "auto" }}>
        <Typography component="h1">
          Error: {error}. <br />
        </Typography>
        <Typography variant="caption" sx={{ color: "text.secondary" }}>
          Retrying in 30 seconds...
        </Typography>
      </Box>
    );
  }

  return (
    <AuthContext.Provider value={{ user, loading, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
