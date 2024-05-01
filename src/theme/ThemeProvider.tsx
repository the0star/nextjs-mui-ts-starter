'use client';
import * as React from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import DARK_THEME from './dark';
import LIGHT_THEME from './light';


export const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

const ThemeProvider: React.FunctionComponent<React.PropsWithChildren> = ({ children }) => {
  const [mode, setMode] = React.useState<'light' | 'dark'>('dark');

  React.useEffect(() => {
    const savedMode = localStorage.getItem('utheme') === 'light' ? 'light' : 'dark';
    if (savedMode) {
      setMode(savedMode);
    }
  }, []);

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () => createTheme(mode === 'light' ? LIGHT_THEME : DARK_THEME),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ThemeProvider;
