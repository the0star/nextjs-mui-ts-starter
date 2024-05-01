'use client'
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { useContext, useState, useEffect, useMemo } from "react";
import { ColorModeContext } from "@/theme/ThemeProvider";

function App() {
  const theme = useTheme();
  const { toggleColorMode } = useContext(ColorModeContext);

  function onToggle() {
    window.localStorage.setItem('utheme', theme.palette.mode === "dark" ? "light" : "dark");
    toggleColorMode();
    return;
  }

  const activateName = useMemo(
    () => (theme.palette.mode === "dark" ? "Light" : "Dark"),
    [theme]
  );

  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          padding: "0px !important",
        }}
      >
        <AppBar
          position="static"
          sx={{
            padding: "0px !important",
            bgcolor: theme.palette.background.default,
          }}
        >
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              TITLE
            </Typography>
            <Button color="inherit">Login</Button>
            <Tooltip title={`Activate ${activateName} Mode`}>
              <IconButton
                onClick={onToggle}
                sx={{
                  p: 1,
                  border: `1px ${theme.palette.text.disabled} solid`,
                }}
                size="large"
                color="inherit"
              >
                {theme.palette.mode === "dark" ? (
                  <LightModeOutlined />
                ) : (
                  <DarkModeOutlined color="action" />
                )}
              </IconButton>
            </Tooltip>

          </Toolbar>
        </AppBar>
      </Container>
    </>
  );
}

export default App;