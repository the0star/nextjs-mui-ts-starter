import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { cookies } from 'next/headers'

import ThemeProvider from '@/theme/ThemeProvider';
import MyApp from '@/components/AppBar'


export default function RootLayout(props: { children: React.ReactNode }) {
  const cookieStore = cookies();
  const theme = cookieStore.get('utheme')?.value === 'light' ? 'light' : 'dark';

  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider value={theme}>
            <MyApp />
            {props.children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
