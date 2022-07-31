import { useContext, useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import Hamburger from 'hamburger-react';
import Categories from './categories';

import { CartContext } from '../context/CartContext.jsx';
import { NavbarContext } from '../context/NavbarContext.jsx';

import Portal from '../screens/Portal.jsx';

import Logo from '../../assets/shared/desktop/logo.svg';

export default function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useContext(NavbarContext);
  const { cartProducts, setCartProducts } = useContext(CartContext);
  const [pingAnimation, setPingAnimation] = useState(false);

  useEffect(() => {
    setPingAnimation(true);
    const timer = setTimeout(() => {
      setPingAnimation(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [cartProducts, setCartProducts]);

  const paddingBottom = isNavbarOpen ? '8' : '0';
  const border = isNavbarOpen ? '1px' : '0px';

  return (
    <nav className="fixed top-0 w-full z-10">
      <div className=" bg-[#191919] py-[32px] px-[24px] border-b-[1px] border-b-[rgba(151,151,151,0.1)]">
        <div className="flex flex-wrap justify-between items-center">
          <Hamburger
            toggled={isNavbarOpen}
            toggle={setIsNavbarOpen}
            color="white"
            size={20}
            direction="right"
            distance="md"
          />
          <div>
            <Link to="/">
              <img src={Logo} width="120px" height="25px" alt="" />
            </Link>
          </div>
          {/* Portal */}
          {document && <Portal animation={pingAnimation} />}
        </div>
      </div>

      {isNavbarOpen && (
        <div
          className={`[border:${border}_solid_white] bg-white pb-${paddingBottom} animate__animated animate__slideInDown rounded-b-[8px] px-[24px] pt-[64px] pb-[32px]`}
        >
          <Categories isNavbar={true} />
        </div>
      )}
    </nav>
  );
}
