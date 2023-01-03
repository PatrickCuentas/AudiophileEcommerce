import { useLocation } from 'react-router';
import { v4 as uuidv4 } from 'uuid';
import Category from '../components/Category';
import { CategoryProps } from '../interfaces/category';
import headphonesXx99MarkOneRemoveBgMobile from '/assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview-removebg.png';
import speakerZx9RemoveBgMobile from '/assets/product-zx9-speaker/mobile/image-category-page-preview-removebg.png';
import earphonesYx1RemoveBgMobile from '/assets/product-yx1-earphones/mobile/image-category-page-preview-removebg.png';

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

function Categories() {
  const { pathname } = useLocation();

  return (
    <div
      className={`${
        pathname === '/'
          ? 'mb-[120px] mt-[200px] md:mt-[180px] md:mb-[100px] lg:mt-[200px] lg:mb-[170px]'
          : 'mt-[80px]'
      }`}
    >
      <div className="flex flex-col gap-[60px] md:flex-row md:items-center md:justify-center md:gap-[10px]">
        {categories.map((category: CategoryProps) => (
          <Category key={uuidv4()} name={category.name} path={category.path} onClick={() => window.scrollTo(0,0)} />
        ))}
      </div>
    </div>
  );
}

export default Categories;
