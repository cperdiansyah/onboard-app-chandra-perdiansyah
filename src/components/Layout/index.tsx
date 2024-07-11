import React from 'react';
import { basicTypes } from '@/src/types';

type LayoutType = {} & basicTypes.BasicFCProps;

const Layout: React.FC<LayoutType> = ({ children }) => {
  return <>{children}</>;
};

export default Layout;
