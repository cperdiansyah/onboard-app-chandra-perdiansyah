import React from 'react';
import { ThemeProvider } from '@components/theme-provider';
import { basic } from '@src/types';
import Meta from '@components/Molecules/Meta';
import { SiteHeader } from '@components/Organisms/Header';

type LayoutType = {} & basic.BasicFCProps;

const Layout: React.FC<LayoutType> = ({ children }) => {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <SiteHeader />
        {children}
      </ThemeProvider>
      <Meta />
    </>
  );
};

export default Layout;
