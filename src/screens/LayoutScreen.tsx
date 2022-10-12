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
      <main
        id="main"
        className="mx-auto max-w-[480px] px-[24px] pb-[70px] md:max-w-[1100px] md:pb-[120px]"
      >
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
