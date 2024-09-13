import React, { FC, ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <main className="px-4">
      {children}
    </main>
  );
};

export default Layout;