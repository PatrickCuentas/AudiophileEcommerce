import { IconContext } from 'react-icons';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

import { CategoryProps } from '../interfaces/category';

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

function Category({ name, path, onClick }: CategoryProps) {
  return (
    <div className="relative h-[165px] bg-bg_primary  text-center md:flex-1">
      <div className="flex h-full flex-col items-center rounded-[8px]">
        <div className="relative bottom-[80px] flex justify-center">
          <img
            src={path}
            alt="No IMAGE"
            className="h-full w-[165px] min-w-full rounded-[8px]"
          />
          <Oval />
        </div>
        <div className="relative bottom-[90px]">
          <p className="mb-[8px] text-[15px] font-bold text-black">
            {name?.toUpperCase()}
          </p>
          <div>
            <Link
              onClick={onClick}
              to={`/category/${name?.toLocaleLowerCase()}`}
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
    </div>
  );
}

export default Category;
