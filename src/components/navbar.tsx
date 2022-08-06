import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Hamburger from "hamburger-react";
import Portal from "../screens/Portal.jsx";
import { NavbarCategories } from "./categories";

import { CartContext } from "../context/CartContext.jsx";
import { NavbarContext } from "../context/NavbarContext.jsx";

import Logo from "../../assets/shared/desktop/logo.svg";
import { getDeviceType } from "../utils/windowSize.js";

export default function Navbar() {
  const { type } = getDeviceType();
  const [isNavbarOpen, setIsNavbarOpen] = useContext(NavbarContext);
  const { cartProducts, setCartProducts } = useContext(CartContext);
  const [pingAnimation, setPingAnimation] = useState(false);

  useEffect(() => {
    const mainEl = document.querySelector("main");
    const footerEl = document.querySelector("footer");

    const addBlur = () => {
      mainEl?.classList.add("blur-cart");
      footerEl?.classList.add("blur-cart");
      window.scrollTo(0, 0);
    };

    const removeBlur = () => {
      mainEl?.classList.remove("blur-cart");
      footerEl?.classList.remove("blur-cart");
    };

    if (isNavbarOpen) {
      addBlur();
    } else {
      removeBlur();
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

  const border = isNavbarOpen ? "1px" : "0px";
  const animation = "animate__animated animate__slideInDown";

  const borderStyle = "border-b-[1px] border-b-[rgba(151,151,151,0.1)]";

  return (
    <nav className="absolute top-0 z-10 w-full">
      <div
        className={`relative z-10 bg-[#191919] py-[32px] px-[24px] ${borderStyle}`}
      >
        <div className="flex h-[48px] items-center justify-between lg:mx-auto lg:max-w-[1100px]">
          {type !== "desktop" && (
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

          {type === "desktop" && (
            <ul className="flex flex-col gap-[16px] text-[13px] tracking-[2px] text-white md:flex-row">
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/category/headphones">HEADPHONES</Link>
              </li>
              <li>
                <Link to="/category/speakers">SPEAKERS</Link>
              </li>
              <li>
                <Link to="/category/earphones">EARPHONES</Link>
              </li>
            </ul>
          )}

          {/* Portal */}
          {document && <Portal animation={pingAnimation} />}
        </div>
      </div>

      {isNavbarOpen && (
        <div
          className={`[border:${border}_solid_white] bg-white ${animation} rounded-b-[8px] px-[24px] pt-[90px] pb-[32px] md:px-[40px] md:pt-[120px] md:pb-[60px]`}
        >
          <NavbarCategories />
        </div>
      )}
    </nav>
  );
}
