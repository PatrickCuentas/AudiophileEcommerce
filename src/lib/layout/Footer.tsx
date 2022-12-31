import { IconContext } from 'react-icons';
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import Logo from '/assets/shared/desktop/logo.svg';

export default function Footer() {
  const goToTop = () => window.scrollTo(0, 0);
  let activeClassName = 'text-[#d87d4a]';

  return (
    <footer
      id="footer"
      className="bg-black px-[24px] py-[50px] text-center md:px-[40px] md:pl-[40px] md:pr-[96px]"
    >
      <div className="flex flex-col items-center justify-start gap-[48px] md:items-start">
        <div>
          <img src={Logo} width="120px" height="25px" alt="" />
        </div>
        <ul className="flex flex-col gap-[16px] text-[13px] tracking-[2px] text-white md:flex-row">
          <li>
            <NavLink
              onClick={goToTop}
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
              onClick={goToTop}
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
              onClick={goToTop}
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
              onClick={goToTop}
              to="/category/earphones"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              EARPHONES
            </NavLink>
          </li>
        </ul>
        <p className="text-[15px] text-[rgba(255,255,255,0.5)] md:text-start">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <div className="flex flex-col items-center justify-center gap-[48px] self-stretch md:flex-row md:justify-between md:gap-0">
          <p className="text-[15px] font-bold text-[rgba(255,255,255,0.5)]">
            Copyright 2021. All Rights Reserved
          </p>
          <div className="flex gap-[16px]">
            <IconContext.Provider value={{ className: 'react-icons-footer' }}>
              <AiFillFacebook />
            </IconContext.Provider>
            <IconContext.Provider value={{ className: 'react-icons-footer' }}>
              <AiOutlineTwitter />
            </IconContext.Provider>
            <IconContext.Provider value={{ className: 'react-icons-footer' }}>
              <AiOutlineInstagram />
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </footer>
  );
}
