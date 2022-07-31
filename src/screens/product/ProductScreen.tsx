import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';

import Button from '../../components/button';
import Categories from '../../components/categories';
import Testimonial from '../../components/testimonial';

//Context
import { CartContext } from '../../context/CartContext.jsx';

import {
  getCartImageBySlugName,
  getProductsBySlug,
} from '../../utils/fetchProducts';
import { getDeviceType } from '../../utils/windowSize';
import { formatPrice } from '../../utils/priceProducts';

interface DeviceType {
  type: string;
  size: number;
}

interface ItemBoxProps {
  quantity: number;
  item: string;
}

interface ImageProps {
  mobile: string;
  tablet: string;
  desktop: string;
}

interface GalleryProps {
  first: ImageProps;
  second: ImageProps;
  third: ImageProps;
}

interface OthersProps {
  slug: string;
  name: string;
  image: ImageProps;
}

interface ProductProps {
  id?: number | string;
  title?: string;
  slug?: string;
  description?: string;
  imagePath?: string;
  isNew?: boolean;
  price?: number;
  features?: string;
  includes?: Array<ItemBoxProps>;
  gallery?: GalleryProps;
  others?: Array<OthersProps>;
  quantity?: number;
}

interface CartItemProps {
  id?: number | string;
  name?: string;
  slug?: string;
  price?: number;
  image?: string;
  quantity?: number;
}

const STOCK = 10;
const INITIAL_QUANTITY = 1;

export default function ProductScreen() {
  const { productName } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState<ProductProps | null>(null);

  useEffect(() => {
    const product = getProductsBySlug(productName);
    const device = getDeviceType();
    const mappedProduct = {
      id: product?.id,
      title: product?.name,
      slug: product?.slug,
      description: product?.description,
      imagePath: product?.categoryImage[device.type],
      isNew: product?.new,
      price: product?.price,
      features: product?.features,
      includes: product?.includes,
      gallery: product?.gallery,
      others: product?.others,
    };
    setProduct(mappedProduct);
  }, [productName]);

  if (product === null) return <div />;

  return (
    <div>
      <div className="px-[24px] pt-[16px] pb-[120px]">
        <div className="flex flex-col flex-wrap gap-[88px] mb-[88px]">
          <div>
            <p
              onClick={() => navigate(-1)}
              className="mb-[24px] cursor-pointer text-[15px] font-medium leading-[25px] text-[rgba(0,0,0,0.5)]"
            >
              Go back
            </p>
            <ProductDetails product={product} productName={productName} />
          </div>
          <Features product={product} />
          <ProductComponents product={product} />
        </div>
        <div className="flex flex-col flex-wrap gap-[120px]">
          <Gallery product={product} />
          <RecommendedProducts product={product} />
          <Categories isNavbar={false} />
          <Testimonial />
        </div>
      </div>
    </div>
  );
}

const ProductDetails = (props: {
  product: ProductProps;
  productName: string | undefined;
}) => {
  const [quantity, setQuantity] = useState<number>(INITIAL_QUANTITY);
  const product = props.product;
  const productName = props.productName;
  const imageCartURL = getCartImageBySlugName(product?.slug);
  const priceFormated = formatPrice(product?.price);
  const { addProductToCart } = useContext(CartContext);

  const productCartFormat: CartItemProps = {
    id: product.id,
    name: product.title,
    price: product.price,
    image: imageCartURL,
    slug: product.slug,
    quantity: quantity ?? INITIAL_QUANTITY,
  };

  useEffect(() => {
    setQuantity(INITIAL_QUANTITY);
  }, [productName]);

  const addUnit = () => {
    //simulate stock
    if (quantity >= STOCK) return;
    setQuantity(quantity + 1);
  };

  const substractUnit = () => {
    if (quantity <= 1) return;
    setQuantity(quantity - 1);
  };

  return (
    <>
      <div className="mb-[32px]">
        <img src={product?.imagePath} alt={product?.title} />
      </div>
      <div className="flex flex-col items-start gap-[24px]">
        {product?.isNew && (
          <p className="text-[14px] text-[#D87D4A] tracking-[10px]">
            NEW PRODUCT
          </p>
        )}
        <h2 className="text-[28px] font-bold tracking-[1px]">
          {product?.title && product?.title.toUpperCase()}
        </h2>
        <p className="text-[15px] font-medium leading-[25px] text-[rgba(0,0,0,0.5)]">
          {product?.description}
        </p>
        <p className="text-[18px] font-bold tracking-[1.29px]">
          $ {priceFormated}
        </p>
      </div>
      <div className="mt-[30px] flex flex-wrap gap-[16px]">
        <div className="inline-flex flex-wrap items-center bg-[#F1F1F1] ">
          <button className="py-[12px] px-[16px]" onClick={substractUnit}>
            <span className="text-[13px] font-bold tracking-[1px] text-[rgba(0,0,0,0.25)]">
              -
            </span>
          </button>
          <div className="py-[12px] px-[16px]">
            <span className="text-[13px] font-bold tracking-[1px]">
              {quantity}
            </span>
          </div>
          <button className="py-[12px] px-[16px]" onClick={addUnit}>
            <span className="text-[13px] font-bold tracking-[1px] text-[rgba(0,0,0,0.25)]">
              +
            </span>
          </button>
        </div>
        <div>
          <Button
            styles={{
              backgroundColor: '#D87D4A',
              width: '160px',
              height: '48px',
            }}
            onClick={() => addProductToCart(productCartFormat)}
          >
            <span className="text-white text-[13px] font-bold tracking-[1px]">
              ADD TO CART
            </span>
          </Button>
        </div>
      </div>
    </>
  );
};

const Features = (props: { product: ProductProps }) => {
  const product = props.product;
  return (
    <div>
      <h2 className="text-[24px] font-bold tracking-[0.86px]">FEATURES</h2>
      <p className="mt-[24px] leading-[25px] text-[15px] font-medium text-[rgba(0,0,0,0.5)]">
        {product.features}
      </p>
    </div>
  );
};

const ProductComponents = (props: { product: ProductProps }) => {
  const product = props.product;

  if (product.includes === undefined) return <div />;

  return (
    <div>
      <h2 className="text-[24px] font-bold tracking-[0.86px]">IN THE BOX</h2>
      <ul className="mt-[24px] flex flex-wrap flex-col gap-[8px]">
        {product?.includes.map((itemBox: ItemBoxProps) => {
          return (
            <li key={itemBox.item} className="flex flex-wrap">
              <span className="font-bold text-[15px] text-[#D87D4A]">
                {itemBox.quantity}x
              </span>
              <p className="text-[15px] font-medium ml-[24px] text-[rgba(0,0,0,0.5)]">
                {itemBox.item}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Gallery = (props: { product: ProductProps }) => {
  const product = props.product;
  const device: DeviceType = getDeviceType();

  const galleryEntries = Object.entries(product.gallery ?? []);

  const paths = galleryEntries.map(([key, value]: any) => {
    const path = value[device.type];
    return path;
  });

  return (
    <div className="flex flex-col gap-[20px]">
      {paths.map((path) => {
        return (
          <div key={path}>
            <img src={path} alt="" className="min-w-full rounded-[8px]" />
          </div>
        );
      })}
    </div>
  );
};

const RecommendedProducts = ({ product }) => {
  const device: DeviceType = getDeviceType();

  const products = product.others.map((item: OthersProps) => {
    return {
      ...item,
      image: item.image[device.type],
    };
  });

  return (
    <div className="text-center">
      <h3 className="text-[24px] font-bold leading-[0.86px] mb-[40px]">
        YOU MAY ALSO LIKE
      </h3>
      <div className="flex flex-col flex-wrap gap-[56px]">
        {products.map((product: OthersProps) => {
          return <LikedProduct key={product.name} product={product} />;
        })}
      </div>
    </div>
  );
};

const LikedProduct = ({ product }) => {
  return (
    <div className="flex flex-wrap flex-col gap-[32px] items-center">
      <div>
        <img
          src={product.image}
          alt={product.title}
          className="min-w-full rounded-[8px]"
        />
      </div>
      <h3 className="text-[24px] font-bold leading-[1.71px]">{product.name}</h3>
      <Link to={`/products/${product.slug}`}>
        <Button
          styles={{
            backgroundColor: '#D87D4A',
            width: '160px',
            height: '48px',
          }}
        >
          <span className="text-white text-[13px] font-bold">SEE PRODUCT</span>
        </Button>
      </Link>
    </div>
  );
};

// const ButtonCustom = () => {
// 	return (
// 		// <button className='w-[160'>

// 		// </button>
// 	)
// }
