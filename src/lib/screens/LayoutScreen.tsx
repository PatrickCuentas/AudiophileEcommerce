import { Outlet, useLocation } from 'react-router';
import Navbar from '../layout/Navbar';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Scrollup from '../components/Scrollup';
import Layout from '../layout';

export default function LayoutScreen() {
  const { pathname } = useLocation();

  return (
    <Layout>
      <Navbar />
      <div className="h-[112px]"></div>
      {pathname === '/' && <Header />}
      <Outlet />
      <Footer />
      <Scrollup />
    </Layout>
  );
}
