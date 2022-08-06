import { Outlet } from "react-router";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function LayoutScreen() {
  return (
    <>
      <Navbar />
      <main id="main" className="mt-[113px]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
