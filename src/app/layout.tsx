"use client";

import { AppBar, Box, Toolbar, Typography, CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ReactNode } from "react";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1a1a2e",
    },
    secondary: {
      main: "#e94560",
    },
    background: {
      default: "#f5f5f5",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
  },
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppBar position="sticky" elevation={0}>
            <Toolbar>
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, letterSpacing: 1 }}
              >
                🗂 Multi-Category Catalog
              </Typography>
            </Toolbar>
          </AppBar>
          <Box
            sx={{
              minHeight: "100vh",
              bgcolor: "background.default",
              py: 4,
              px: 2,
            }}
          >
            {children}
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
