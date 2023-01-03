import { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { CartContext } from '../../context/CartContext.js';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import useSWR from 'swr';
import { v4 as uuidv4 } from 'uuid';
import fetcher from 'lib/swr/fetcher.js';

import PrimaryButton from '../../components/PrimaryButton';
import Categories from '../../components/Categories';
import AboutUs from '../../components/AboutUs';
import { CartItemProps } from '../../interfaces/cart';
import { ItemBoxProps } from '../../interfaces/item';
import { OthersProps } from '../../interfaces/others';
import {
  findBySlugQuery,
  getCartImageBySlugName,
  getShortName,
} from '../../utils/fetchProducts';
import { formatPrice } from '../../utils/priceProducts';
import CheckCircle from '/assets/CheckCircle.svg';
import { PUBLIC_DNS } from 'lib/globals.js';

const INITIAL_QUANTITY = 1;
const PREFIX =
  import.meta.env.MODE === 'production' ? import.meta.env.VITE_PUBLIC_DNS : '';

export default function ProductScreen() {
  const navigate = useNavigate();
  const { productName } = useParams();
  const query = findBySlugQuery(productName as string);
  const { addProduct } = useContext(CartContext);
  const [quantity, setQuantity] = useState(INITIAL_QUANTITY);
  const key = `${PUBLIC_DNS}/api/products${query}`;
  const { data, error, isLoading } = useSWR(key, fetcher);
  const product = data?.docs[0];

  const addToCart = () => {
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
    const productCartFormat: CartItemProps = {
      id: product.id,
      shortName: getShortName(product.slug),
      total: product.price,
      quantity,
      image: getCartImageBySlugName(product.slug),
    };
    addProduct(productCartFormat, quantity);
  };

  if (isLoading) return <div />;

  return (
    <main className="mx-auto max-w-[30rem] md:max-w-[68.75rem]">
      <div className="px-[24px] pt-[16px] md:px-[39px] md:pt-[33px]">
        <div className="flex flex-col flex-wrap gap-[88px] md:gap-[120px] lg:gap-[160px]">
          <div>
            <p
              onClick={() => navigate(-1)}
              className="mb-[24px] cursor-pointer text-[15px] font-medium leading-[25px] text-[rgba(0,0,0,0.5)]"
            >
              Go back
            </p>
            {/* Details */}
            <div className="flex flex-col gap-[32px] md:h-[480px] md:flex-row md:items-center md:justify-center md:gap-[69px]">
              <div className="h-full w-full self-stretch">
                <picture>
                  <source
                    media="(min-width: 1024px)"
                    srcSet={PREFIX + product?.image?.desktop?.url}
                  />
                  <source
                    media="(min-width: 768px)"
                    srcSet={PREFIX + product?.image?.tablet?.url}
                  />
                  <img
                    className="h-full w-full md:object-cover"
                    src={PREFIX + product?.image?.mobile?.url}
                    alt={product?.slug}
                  />
                </picture>
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
                    {product?.description[0]?.children[0]?.text}
                  </p>
                  <p className="text-[18px] font-bold tracking-[1.29px]">
                    $ {formatPrice(product?.price)}
                  </p>
                </div>
                <div className="mt-[30px] flex flex-wrap gap-[16px]">
                  <div className="inline-flex flex-wrap items-center bg-[#F1F1F1] ">
                    <button
                      className="group py-[12px] px-[16px]"
                      onClick={() => setQuantity(quantity - 1)}
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
                    <button
                      className="group py-[12px] px-[16px]"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <span className="text-[13px] font-bold tracking-[1px] text-[rgba(0,0,0,0.25)] group-hover:text-[#D87D4A]">
                        +
                      </span>
                    </button>
                  </div>
                  <div>
                    <div>
                      <PrimaryButton
                        className="h-[48px] w-[160px] bg-[#D87D4A] hover:bg-[#FBAF85]"
                        onClick={addToCart}
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
          </div>
          {/* Fin Details */}
          <div className="flex flex-col gap-[88px] lg:flex-row">
            {/* Features */}
            <div className="lg:flex-1">
              <h2 className="text-[24px] font-bold tracking-[0.86px] lg:text-[32px]">
                FEATURES
              </h2>
              <p className="mt-[24px] text-[15px] font-medium leading-[25px] text-[rgba(0,0,0,0.5)] lg:mt-[32px]">
                {product?.features[0]?.children[0]?.text}
              </p>
            </div>
            {/* Fin Features */}
            {/* Components */}
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
            {/* Fin Components */}
          </div>
          {/* Gallery */}
          <div className="grid-gallery flex flex-col gap-[20px] md:grid">
            {product.gallery.map((image, i) => {
              return (
                <div
                  key={uuidv4()}
                  style={{
                    gridArea: `img${i + 1}`,
                  }}
                >
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
                      className="min-h-full min-w-full rounded-[8px] object-cover"
                      src={PREFIX + image.mobile.url}
                      alt={product?.name + 'image'}
                    />
                  </picture>
                </div>
              );
            })}
          </div>
          {/* Fin Gallery */}
          {/* Recommended Products */}
          {product?.others.length > 0 && (
            <div>
              <h3 className="mb-[40px] text-center text-[24px] font-bold leading-[0.86px] md:text-[32px]">
                YOU MAY ALSO LIKE
              </h3>
              <div className="flex flex-col gap-[56px] md:flex-row md:gap-[11px]">
                {product.others.map((product: OthersProps) => {
                  return (
                    <div className="flex flex-col flex-wrap items-center gap-[32px]">
                      <div>
                        <picture>
                          <source
                            media="(min-width: 1024px)"
                            srcSet={product?.image?.desktop?.url}
                          />
                          <source
                            media="(min-width: 768px)"
                            srcSet={product?.image?.tablet?.url}
                          />
                          <img
                            className="min-w-full rounded-[8px]"
                            src={product?.image?.mobile?.url}
                            alt={product?.name + ' image'}
                          />
                        </picture>
                      </div>
                      <h3 className="text-[24px] font-bold leading-[1.71px]">
                        {product.name}
                      </h3>
                      <Link
                        to={`/products/${product.slug}`}
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <PrimaryButton className="h-[48px] w-[160px] bg-[#D87D4A] hover:bg-[#FBAF85]">
                          <span className="text-[13px] font-bold text-white">
                            SEE PRODUCT
                          </span>
                        </PrimaryButton>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {/* Fin Recommended Products */}
          <Categories />
          <AboutUs />
        </div>
      </div>
    </main>
  );
}
