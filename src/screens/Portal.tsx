import { useContext, useEffect, useState } from 'react';

// React-portal
import { PortalWithState } from 'react-portal';

// Components
import Button from '../components/button';

// Context
import { IconContext } from 'react-icons';
import { CartContext } from '../context/CartContext';

// Icons
import { AiOutlineShoppingCart } from 'react-icons/ai';

// Utils
import { getShortName } from '../utils/fetchProducts';
import { formatPrice } from '../utils/priceProducts';
import { Link } from 'react-router-dom';

interface CartItemProps {
  id: number | string;
  name: string;
  slug: string;
  price: number;
  image: string;
  quantity: number;
}

export default function Portal({ animation }) {
  const mainEl = document.getElementById('main');
  const footerEl = document.getElementById('footer');

  const addBlur = () => {
    mainEl
      ? mainEl?.classList.add('blur-cart')
      : document.querySelector('main')?.classList.add('blur-cart');

    footerEl
      ? footerEl?.classList.add('blur-cart')
      : document.querySelector('footer')?.classList.add('blur-cart');

    window.scrollTo(0, 0);
  };

  const removeBlur = () => {
    mainEl
      ? mainEl?.classList.remove('blur-cart')
      : document.querySelector('main')?.classList.remove('blur-cart');

    footerEl
      ? footerEl?.classList.remove('blur-cart')
      : document.querySelector('footer')?.classList.remove('blur-cart');
  };

  return (
    <PortalWithState closeOnOutsideClick closeOnEsc>
      {({ openPortal, closePortal, isOpen, portal }) => {
        isOpen ? addBlur() : removeBlur();

        return (
          <>
            <IconContext.Provider value={{ className: 'react-icons' }}>
              <div onClick={openPortal} className="cursor-pointer relative">
                <AiOutlineShoppingCart />
                {animation && (
                  <span className="absolute -right-[5px] -top-[5px] flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D87D4A] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#E45B0E]"></span>
                  </span>
                )}
              </div>
            </IconContext.Provider>
            {isOpen && portal(<Cart closePortal={closePortal} />)}
          </>
        );
      }}
    </PortalWithState>
  );
}

function Cart(props: { closePortal: () => void }) {
  const { closePortal } = props;
  const {
    cartProducts,
    setCartProducts,
    removeAllProducts,
    getTotalPrice,
    totalPrice,
    setTotalPrice,
  } = useContext(CartContext);

  useEffect(() => {
    const totalProductsPrice = getTotalPrice();
    setTotalPrice(totalProductsPrice);
  }, [cartProducts, setCartProducts]);

  return (
    <div className="centered-axis-cart">
      <div className="bg-white px-[28px] py-[32px] min-w-[330px] h-[490px] rounded-[8px] shadow-2xl flex flex-col gap-[32px]">
        {/* OPTIONS */}
        <div className="flex justify-between ">
          <h3 className="text-[18px] font-bold tracking-[1.29px]">
            CART ({cartProducts?.length})
          </h3>
          <button onClick={removeAllProducts}>
            <span className="text-[15px] font-medium text-[rgba(0,0,0,0.5)] underline decoration-[rgba(0,0,0,0.5)]">
              Remove all
            </span>
          </button>
        </div>
        {/* PRODUCTS */}
        <div
          id="products"
          className="flex flex-col gap-[24px] overflow-x-hidden overflow-y-scroll h-[240px]"
        >
          {Array.isArray(cartProducts) &&
            cartProducts.map((product: CartItemProps) => (
              <CartItem key={product.name} product={product} />
            ))}
        </div>
        {/* CALCULATED PRODUCTS */}
        <div className="min-h-[100px]">
          <div className="flex justify-between mb-[24px]">
            <p className="text-[15px] font-medium text-[rgba(0,0,0,0.5)]">
              TOTAL
            </p>
            <p className="text-[18px] font-bold">$ {formatPrice(totalPrice)}</p>
          </div>
          <Link
            to="/checkout"
            className={`${!cartProducts.length && 'pointer-events-none'}`}
          >
            <Button
              styles={{ backgroundColor: '#D87D4A', width: '100%' }}
              onClick={closePortal}
            >
              <span className="text-white text-[13px] font-bold">CHECKOUT</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function CartItem(props: { product: CartItemProps }) {
  const product: CartItemProps = props.product;
  const { changeCartItemQuantity } = useContext(CartContext);

  const shortName = getShortName(product.slug);
  const priceFormated = formatPrice(product.price);

  return (
    <div className="flex items-center justify-between gap-[16px]">
      <div>
        <img
          src={product?.image}
          alt="no image"
          className="rounded-[8px] w-[64px] h-[64px]"
        />
      </div>
      <div className="min-w-[75px]">
        <p className="text-[15px] font-bold">{shortName}</p>
        <p className="text-[14px] font-bold text-[rgba(0,0,0,0.5)]">
          $ {priceFormated}
        </p>
      </div>
      <div className="inline-flex items-center bg-[#F1F1F1]">
        <button
          className="py-[6px] px-[12px]"
          onClick={() => changeCartItemQuantity(product, '-')}
        >
          <span className="text-[13px] font-bold tracking-[1px] text-[rgba(0,0,0,0.25)]">
            -
          </span>
        </button>
        <div className="py-[6px] px-[12px]">
          <span className="text-[13px] font-bold tracking-[1px]">
            {product?.quantity}
          </span>
        </div>
        <button
          className="py-[6px] px-[12px]"
          onClick={() => changeCartItemQuantity(product, '+')}
        >
          <span className="text-[13px] font-bold tracking-[1px] text-[rgba(0,0,0,0.25)]">
            +
          </span>
        </button>
      </div>
    </div>
  );
}
