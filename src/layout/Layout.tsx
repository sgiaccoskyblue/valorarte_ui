import React, { FC } from 'react';
import Header from './Header';

const Layout: FC = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <main>{children}</main>
    </React.Fragment>
  );
};

export default Layout;
