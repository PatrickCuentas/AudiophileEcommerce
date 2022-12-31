import { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import Hamburger from 'hamburger-react';
import CartPortal from '../components/CartPortal';

import { CartContext } from '../context/CartContext.jsx';
import { NavbarContext } from '../context/NavbarContext.jsx';

import Logo from '/assets/shared/desktop/logo.svg';
import { getDeviceType } from '../utils/windowSize.js';

import headphonesXx99MarkOneRemoveBgMobile from '/assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview-removebg.png';
import speakerZx9RemoveBgMobile from '/assets/product-zx9-speaker/mobile/image-category-page-preview-removebg.png';
import earphonesYx1RemoveBgMobile from '/assets/product-yx1-earphones/mobile/image-category-page-preview-removebg.png';
import Category from '../components/Category';
import { CategoryProps } from '../interfaces/category';
import { v4 as uuidv4 } from 'uuid';

const categories = [
  {
    id: 1,
    name: 'Headphones',
    path: headphonesXx99MarkOneRemoveBgMobile,
  },
  {
    id: 2,
    name: 'Speakers',
    path: speakerZx9RemoveBgMobile,
  },
  {
    id: 3,
    name: 'Earphones',
    path: earphonesYx1RemoveBgMobile,
  },
];

export default function Navbar() {
  const { type } = getDeviceType();
  const [isNavbarOpen, setIsNavbarOpen, toggleNavbar] =
    useContext<any>(NavbarContext);
  const { cartProducts, setCartProducts } = useContext(CartContext);
  const [pingAnimation, setPingAnimation] = useState(false);

  useEffect(() => {
    if (isNavbarOpen) {
      const toogleNavbar = (e: any) => {
        if (!e.target.closest('nav')) {
          setIsNavbarOpen(false);
        }
      };
      window.addEventListener('click', toogleNavbar);
      return () => {
        window.removeEventListener('click', toogleNavbar);
      };
    }
  }, [isNavbarOpen, setIsNavbarOpen]);

  useEffect(() => {
    setPingAnimation(true);
    const timer = setTimeout(() => {
      setPingAnimation(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [cartProducts, setCartProducts]);

  const border = isNavbarOpen ? '1px' : '0px';
  const animation = 'animate__animated animate__slideInDown';
  const borderStyle = 'border-b-[1px] border-b-[rgba(151,151,151,0.1)]';
  let activeClassName = 'text-[#d87d4a]';

  return (
    <nav className="absolute top-0 z-10 w-full">
      <div
        className={`relative z-10 bg-[#191919]  px-[24px] py-[32px] ${borderStyle}`}
      >
        <div className="flex h-[48px] items-center justify-between lg:mx-auto lg:max-w-[1100px]">
          {type !== 'desktop' && (
            <Hamburger
              toggled={isNavbarOpen}
              toggle={setIsNavbarOpen}
              color="white"
              size={20}
              direction="right"
              distance="md"
            />
          )}

          <div className="flex w-full justify-center md:ml-[42px] md:justify-start lg:ml-0 lg:w-auto">
            <Link to="/">
              <img src={Logo} width="120px" height="25px" alt="logo" />
            </Link>
          </div>

          {type === 'desktop' && (
            <ul className="flex flex-col gap-[16px] text-[13px] tracking-[2px] text-white md:flex-row">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? activeClassName : undefined
                  }
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/category/headphones"
                  className={({ isActive }) =>
                    isActive ? activeClassName : undefined
                  }
                >
                  HEADPHONES
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/category/speakers"
                  className={({ isActive }) =>
                    isActive ? activeClassName : undefined
                  }
                >
                  SPEAKERS
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/category/earphones"
                  className={({ isActive }) =>
                    isActive ? activeClassName : undefined
                  }
                >
                  EARPHONES
                </NavLink>
              </li>
            </ul>
          )}
          {document && <CartPortal animation={pingAnimation} />}
        </div>
      </div>

      {isNavbarOpen && (
        <div
          className={`[border:${border}_solid_white] bg-white shadow-lg ${animation} rounded-b-[12px] px-[24px] pt-[90px] pb-[32px] md:px-[40px] md:pt-[120px] md:pb-[60px]`}
        >
          <div className="flex flex-col gap-[90px] md:flex-row md:gap-[10px]">
            {categories.map((category: CategoryProps) => (
              <Category
                key={uuidv4()}
                name={category.name}
                path={category.path}
                onClick={() => toggleNavbar()}
              />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
