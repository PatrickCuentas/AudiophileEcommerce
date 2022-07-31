import { Link } from 'react-router-dom';
import Button from './button';

interface ProductProps {
  slug: string;
  title: string;
  description: string;
  imagePath: string;
  isNew: boolean;
}

export default function Product({
  slug,
  title = 'Titulo del producto',
  description = 'Descripción del producto',
  imagePath = '',
  isNew = false,
}: ProductProps) {
  return (
    <div>
      <div className="mb-[32px]">
        <img src={imagePath} alt="No IMAGE" />
      </div>
      <div className="flex flex-col items-center gap-[24px]">
        {isNew && (
          <p className="text-[14px] text-[#D87D4A] tracking-[10px]">
            NEW PRODUCT
          </p>
        )}
        <h2 className="text-[28px] font-bold tracking-[1px]">
          {title.toUpperCase()}
        </h2>
        <p className="text-[15px] font-medium leading-[25px] text-[rgba(0,0,0,0.5)]">
          {description}
        </p>
        <Link to={`/products/${slug}`}>
          <Button
            styles={{
              backgroundColor: '#D87D4A',
              width: '160px',
              height: '48px',
            }}
          >
            <span className="text-white text-[13px] font-bold">
              SEE PRODUCT
            </span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
