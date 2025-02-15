import React from 'react';
import { ThemeProvider } from '@components/theme-provider';
import { basic } from '@src/types';
import Meta from '@components/Molecules/Meta';
import { SiteHeader } from '@components/Organisms/Header';
import { Toaster } from '@src/components/ui/sonner';

type LayoutType = {} & basic.BasicFCProps;

const Layout: React.FC<LayoutType> = ({ children }) => {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <SiteHeader />
        <body className="py-5 h-full max-h-screen">{children}</body>
        <Toaster />
      </ThemeProvider>
      <Meta />
    </>
  );
};

export default Layout;
