import Scrollup from 'lib/components/Scrollup';
import { ReactNode } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <div className="h-[112px]"></div>
      {children}
      <Footer />
      <Scrollup />
    </>
  );
}

export default Layout;
