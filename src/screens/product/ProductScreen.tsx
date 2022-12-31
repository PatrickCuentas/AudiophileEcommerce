import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import PrimaryButton from '../../components/PrimaryButton';
import Categories from '../../components/Categories';
import AboutUs from '../../components/AboutUs';
import { DeviceType } from '../../interfaces/device';
import { ProductFullProps } from '../../interfaces/product';
import { CartItemProps } from '../../interfaces/cart';
import { ItemBoxProps } from '../../interfaces/item';
import { OthersProps } from '../../interfaces/others';
import { CartContext } from '../../context/CartContext.jsx';
import CheckCircle from '../../../assets/CheckCircle.svg';

import {
  getCartImageBySlugName,
  getProductImageBySlugName,
  getProductsBySlug,
} from '../../utils/fetchProducts';
import { getDeviceType } from '../../utils/windowSize';
import { formatPrice } from '../../utils/priceProducts';
import Main from '../../layout/Main';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const INITIAL_QUANTITY = 1;

export default function ProductScreen() {
  const { productName } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState<ProductFullProps | null>(null);

  useEffect(() => {
    const product = getProductsBySlug(productName);
    const device = getDeviceType();
    const mappedProduct = {
      id: product?.id,
      name: product?.name,
      slug: product?.slug,
      description: product?.description,
      imagePath: product?.categoryImage[device.type],
      new: product?.new,
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
    <Main>
      <div className="px-[24px] pt-[16px] md:px-[39px] md:pt-[33px]">
        <div className="mb-[88px] flex flex-col flex-wrap gap-[88px]">
          <div>
            <p
              onClick={() => navigate(-1)}
              className="mb-[24px] cursor-pointer text-[15px] font-medium leading-[25px] text-[rgba(0,0,0,0.5)]"
            >
              Go back
            </p>
            <ProductDetails product={product} productName={productName} />
          </div>
          <div className="flex flex-col gap-[88px] lg:flex-row">
            <Features product={product} />
            <ProductComponents product={product} />
          </div>
        </div>
        <div className="flex flex-col flex-wrap gap-[120px]">
          <Gallery product={product} />
          <RecommendedProducts product={product} />
          <Categories />
          <AboutUs />
        </div>
      </div>
    </Main>
  );
}

const ProductDetails = (props: {
  product: ProductFullProps;
  productName: string | undefined;
}) => {
  const { type } = getDeviceType();
  const [quantity, setQuantity] = useState<number>(INITIAL_QUANTITY);

  const product = props.product;
  const productName = props.productName;
  const productImages = getProductImageBySlugName(product?.slug);
  const cartImage = getCartImageBySlugName(product?.slug);
  const priceFormated = formatPrice(product?.price);

  const { addProductToCart, getProductStock } = useContext(CartContext);

  const productCartFormat: CartItemProps = {
    id: product.id,
    name: product.name,
    price: product.price,
    image: cartImage,
    slug: product.slug,
  };

  useEffect(() => {
    setQuantity(INITIAL_QUANTITY);
  }, [productName]);

  const addUnit = () => {
    const stock = getProductStock(product.id);
    if (quantity >= stock) return;
    setQuantity(quantity + 1);
  };

  const substractUnit = () => {
    if (quantity <= 1) return;
    setQuantity(quantity - 1);
  };

  return (
    <div className="flex flex-col gap-[32px] md:h-[480px] md:flex-row md:items-center md:justify-center md:gap-[69px]">
      <div className="h-full w-full self-stretch">
        <img
          src={productImages[type]}
          alt={product?.name}
          className="h-full w-full md:object-cover"
        />
      </div>
      <div>
        <div className="flex w-[340px] flex-col items-start gap-[24px] lg:gap-0">
          {product?.new && (
            <p className="text-[14px] tracking-[10px] text-[#D87D4A] lg:mb-[16px]">
              NEW PRODUCT
            </p>
          )}
          <h2 className="text-[28px] font-bold tracking-[1px] lg:text-[40px]">
            {product?.name?.toUpperCase()}
          </h2>
          <p className="text-[15px] font-medium leading-[25px] text-[rgba(0,0,0,0.5)] lg:my-[32px]">
            {product?.description}
          </p>
          <p className="text-[18px] font-bold tracking-[1.29px]">
            $ {priceFormated}
          </p>
        </div>
        <div className="mt-[30px] flex flex-wrap gap-[16px]">
          <div className="inline-flex flex-wrap items-center bg-[#F1F1F1] ">
            <button
              className="group py-[12px] px-[16px]"
              onClick={substractUnit}
            >
              <span className="text-[13px] font-bold tracking-[1px] text-[rgba(0,0,0,0.25)] group-hover:text-[#D87D4A]">
                -
              </span>
            </button>
            <div className="py-[12px] px-[16px]">
              <span className="text-[13px] font-bold tracking-[1px]">
                {quantity}
              </span>
            </div>
            <button className="group py-[12px] px-[16px]" onClick={addUnit}>
              <span className="text-[13px] font-bold tracking-[1px] text-[rgba(0,0,0,0.25)] group-hover:text-[#D87D4A]">
                +
              </span>
            </button>
          </div>
          <div>
            <div>
              <PrimaryButton
                className="h-[48px] w-[160px] bg-[#D87D4A] hover:bg-[#FBAF85]"
                onClick={() => {
                  toast(
                    (t) => {
                      return (
                        <div
                          className="flex cursor-pointer items-center gap-[16px]"
                          onClick={() => toast.dismiss(t.id)}
                        >
                          <img
                            src={CheckCircle}
                            alt="checked"
                            className="h-[32px] w-[32px]"
                          />
                          <p className="text-[18px] font-bold tracking-[1.29px] text-[#D87D4A]">
                            Product added to cart
                          </p>
                        </div>
                      );
                    },
                    {
                      position: 'top-right',
                      duration: 3000,
                    }
                  );
                  addProductToCart(productCartFormat, quantity);
                }}
              >
                <span className="text-[13px] font-bold tracking-[1px] text-white">
                  ADD TO CART
                </span>
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Features = (props: { product: ProductFullProps }) => {
  const product = props.product;
  return (
    <div className="lg:flex-1">
      <h2 className="text-[24px] font-bold tracking-[0.86px] lg:text-[32px]">
        FEATURES
      </h2>
      <p className="mt-[24px] text-[15px] font-medium leading-[25px] text-[rgba(0,0,0,0.5)] lg:mt-[32px]">
        {product.features}
      </p>
    </div>
  );
};

const ProductComponents = (props: { product: ProductFullProps }) => {
  const product = props.product;

  if (product.includes === undefined) return <div />;

  return (
    <div className="lg:flex-1">
      <div className="md:flex lg:flex-col">
        <h2 className="text-[24px] font-bold tracking-[0.86px] md:flex-1 md:text-[32px] md:tracking-[1.14px]">
          IN THE BOX
        </h2>
        <ul className="mt-[24px] flex flex-col flex-wrap gap-[8px] md:mt-0 md:flex-1 lg:mt-[32px]">
          {product?.includes.map((itemBox: ItemBoxProps) => {
            return (
              <li key={itemBox.item} className="flex flex-wrap">
                <span className="text-[15px] font-bold text-[#D87D4A]">
                  {itemBox.quantity}x
                </span>
                <p className="ml-[24px] text-[15px] font-medium text-[rgba(0,0,0,0.5)]">
                  {itemBox.item}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const Gallery = (props: { product: ProductFullProps }) => {
  const product = props.product;
  const device: DeviceType = getDeviceType();

  const galleryEntries = Object.entries(product.gallery ?? []);

  const paths = galleryEntries.map(([key, value]: any) => {
    const path = value[device.type];
    return path;
  });

  return (
    <div className="grid-gallery flex flex-col gap-[20px] md:grid">
      {paths.map((path, i) => {
        return (
          <div
            key={path}
            style={{
              gridArea: `img${i + 1}`,
            }}
          >
            <img
              src={path}
              alt=""
              className="min-h-full min-w-full rounded-[8px] object-cover"
            />
          </div>
        );
      })}
    </div>
  );
};

const RecommendedProducts = ({ product }: { product: ProductFullProps }) => {
  const device: DeviceType = getDeviceType();

  const products = product?.others?.map((item: OthersProps) => {
    return {
      ...item,
      image: item.image[device.type],
    };
  });

  return (
    <div className="text-center">
      <h3 className="mb-[40px] text-[24px] font-bold leading-[0.86px] md:text-[32px]">
        YOU MAY ALSO LIKE
      </h3>
      <div className="flex flex-col gap-[56px] md:flex-row md:gap-[11px]">
        {products?.map((product: OthersProps) => {
          return <LikedProduct key={product.name} product={product} />;
        })}
      </div>
    </div>
  );
};

const LikedProduct = ({ product }: { product: OthersProps }) => {
  return (
    <div className="flex flex-col flex-wrap items-center gap-[32px]">
      <div>
        <img
          src={product?.image}
          alt={product?.name}
          className="min-w-full rounded-[8px]"
        />
      </div>
      <h3 className="text-[24px] font-bold leading-[1.71px]">{product.name}</h3>
      <Link
        to={`/products/${product.slug}`}
        onClick={() => window.scrollTo(0, 0)}
      >
        <PrimaryButton className="h-[48px] w-[160px] bg-[#D87D4A] hover:bg-[#FBAF85]">
          <span className="text-[13px] font-bold text-white">SEE PRODUCT</span>
        </PrimaryButton>
      </Link>
    </div>
  );
};
