import { Outlet, useLocation } from 'react-router';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Header from '../components/header';

export default function LayoutScreen() {
  const { pathname } = useLocation();

  return (
    <>
      <Navbar />
      <div className="h-[112px]"></div>
      {pathname === '/' ? <Header /> : null}
      <Outlet />
      <Footer />
    </>
  );
}
