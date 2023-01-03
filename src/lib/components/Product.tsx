import PrimaryButton from './PrimaryButton';
import { ProductProps } from '../interfaces/product';
import { Link } from 'react-router-dom';

const PREFIX =
  import.meta.env.MODE === 'production' ? import.meta.env.VITE_PUBLIC_DNS : '';

export default function Product({ product }: { product: ProductProps }) {
  const { slug, name, description, image, isNew, position } = product;
  const flexDirection =
    position === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse';

  return (
    <div
      className={`lg:flex lg:items-center lg:justify-center lg:gap-[125px] ${flexDirection}`}
    >
      <div className="mb-[32px] lg:flex-1">
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet={PREFIX + image.desktop.url}
          />
          <source
            media="(min-width: 768px)"
            srcSet={PREFIX + image.tablet.url}
          />
          <img
            className="min-w-full rounded-[8px]"
            src={PREFIX + image.mobile.url}
            alt={product?.name + 'image'}
          />
        </picture>
      </div>
      <div className="flex flex-col items-center gap-[24px] lg:flex-1 lg:items-start lg:gap-0">
        {isNew && (
          <p className="lg:mb-[16p]x text-[14px] tracking-[10px] text-[#D87D4A]">
            NEW PRODUCT
          </p>
        )}
        <h2 className="text-[28px] font-bold tracking-[1px] md:mx-auto md:max-w-[15ch] md:text-[40px] lg:mx-0 lg:mb-[32px] lg:max-w-none">
          {name.toUpperCase()}
        </h2>
        <p className="text-[15px] font-medium leading-[25px] text-[rgba(0,0,0,0.5)] md:mx-auto md:max-w-[60ch] lg:mb-[40px]">
          {description}
        </p>
        <Link to={`/products/${slug}`}>
          <PrimaryButton className="h-[48px] w-[160px] bg-[#D87D4A] hover:bg-[#FBAF85]">
            <span className="text-[13px] font-bold text-white">
              SEE PRODUCT
            </span>
          </PrimaryButton>
        </Link>
      </div>
    </div>
  );
}
