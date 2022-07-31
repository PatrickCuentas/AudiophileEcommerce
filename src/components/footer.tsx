import { IconContext } from 'react-icons';
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Logo from '../../assets/shared/desktop/logo.svg';

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-black text-center pt-[52px] pb-[38px] px-[24px]"
    >
      <div className="flex flex-col gap-[48px] justify-start items-center">
        <div>
          <img src={Logo} width="120px" height="25px" alt="" />
        </div>
        <ul className="flex flex-col gap-[16px] text-white text-[13px] tracking-[2px]">
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
        <p className="text-[15px] text-[rgba(255,255,255,0.5)]">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <p className="text-[15px] text-[rgba(255,255,255,0.5)] font-bold">
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
    </footer>
  );
}
