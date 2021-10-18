import { FC } from 'react';
import Header from './Header/Header';

const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
