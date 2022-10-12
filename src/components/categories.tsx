import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { NavbarContext } from '../context/NavbarContext.jsx';
import { IconContext } from 'react-icons';
import { IoIosArrowForward } from 'react-icons/io';

// interfaces
import { CategoryProps } from '../interfaces/category/index.js';

import headphonesXx99MarkOneRemoveBgMobile from '../../assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview-removebg.png';
import speakerZx9RemoveBgMobile from '../../assets/product-zx9-speaker/mobile/image-category-page-preview-removebg.png';
import earphonesYx1RemoveBgMobile from '../../assets/product-yx1-earphones/mobile/image-category-page-preview-removebg.png';

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

const Oval = () => {
  return (
    <div className="absolute bottom-0">
      <svg width="500" height="140">
        <ellipse
          cx="250"
          cy="110"
          rx="60"
          ry="9"
          style={{ fill: 'rgba(0,0,0,0.5)', filter: 'blur(15px)' }}
        />
      </svg>
    </div>
  );
};

export default function Categories() {
  const { pathname } = useLocation();

  return (
    <div
      className={`${
        !pathname.includes('category') && 'pt-[90px] pb-[120px] md:pt-[140px]'
      }`}
    >
      <div className="flex flex-col gap-[60px] md:flex-row md:items-center md:justify-center md:gap-[10px]">
        {categories.map((category: CategoryProps, i) => (
          <Category
            key={category.id}
            name={category.name}
            path={category.path}
            position={+i}
          />
        ))}
      </div>
    </div>
  );
}

export const NavbarCategories = () => {
  const [toggleNavbar] = useContext(NavbarContext);
  return (
    <div className="flex flex-col gap-[60px] md:flex-row md:gap-[10px]">
      {categories.map((category: CategoryProps, i) => (
        <Category
          key={category.id}
          name={category.name}
          path={category.path}
          onClick={() => toggleNavbar()}
        />
      ))}
    </div>
  );
};

function Category({ name, path, onClick }: CategoryProps) {
  return (
    <div className="relative bg-bg_primary px-[10px] pt-[10px] pb-[20px] text-center md:flex-1">
      <div className="flex h-full flex-col items-center rounded-[8px]">
        <div className="relative mb-[20px] flex justify-center">
          <img
            src={path}
            alt="No IMAGE"
            className="h-full w-[120px] min-w-full rounded-[8px]"
          />
          <Oval />
        </div>
        <p className="mb-[8px] text-[15px] font-bold text-black">
          {name.toUpperCase()}
        </p>
        <div onClick={onClick}>
          <Link
            to={`/category/${name.toLocaleLowerCase()}`}
            className="flex flex-wrap items-center justify-center gap-1"
          >
            <span className="text-gray-500">SHOP</span>
            <IconContext.Provider value={{ style: { color: 'orange' } }}>
              <IoIosArrowForward className="text-gray-500" />
            </IconContext.Provider>
          </Link>
        </div>
      </div>
    </div>
  );
}
