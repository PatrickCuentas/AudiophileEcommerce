import { useLocation } from 'react-router';
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

function Categories() {
  const { pathname } = useLocation();

  return (
    <div
      className={`${
        !pathname.includes('category') && 'pt-[90px] pb-[120px] md:pt-[140px]'
      }`}
    >
      <div className="flex flex-col gap-[60px] md:flex-row md:items-center md:justify-center md:gap-[10px]">
        {categories.map((category: CategoryProps) => (
          <Category key={uuidv4()} name={category.name} path={category.path} />
        ))}
      </div>
    </div>
  );
}

export default Categories;
