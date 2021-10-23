import { FC } from 'react';
import Footer from './Footer';
import Header from './Header/Header';

const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
