import { useEffect, useState, useContext } from 'react';
import { IconContext } from 'react-icons';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';
import { Modal } from 'react-overlays';
import { CartContext } from '../context/CartContext';
import PrimaryButton from './PrimaryButton';
import { CartItemProps } from '../interfaces/cart';
import { formatPrice } from '../utils/priceProducts';

function CartPortal({ animation }) {
  const [show, setShow] = useState(false);

  const renderBackdrop = (props: any) => (
    <div
      {...props}
      style={{
        ...props.style,
        position: 'fixed',
        zIndex: 1040,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#000',
        opacity: 0.5,
      }}
    />
  );

  return (
    <div>
      <IconContext.Provider value={{ className: 'react-icons' }}>
        <div onClick={() => setShow(true)} className="relative cursor-pointer">
          <AiOutlineShoppingCart />
          {animation && (
            <span className="absolute -right-[5px] -top-[5px] flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D87D4A] opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-[#E45B0E]"></span>
            </span>
          )}
        </div>
      </IconContext.Provider>

      <Modal
        style={{
          position: 'fixed',
          zIndex: 1040,
          top: '0%',
          border: '1px solid #e5e5e5',
          backgroundColor: 'white',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5)',
          marginTop: '150px',
        }}
        className="centered-axis-cart md:right-axis-cart"
        show={show}
        renderBackdrop={renderBackdrop}
        onHide={() => setShow(false)}
        aria-labelledby="modal-label"
      >
        <Cart setShow={setShow} />
      </Modal>
    </div>
  );
}

function Cart({ setShow }) {
  const { products, setProducts, removeAll, getTotal, total, setTotal } =
    useContext(CartContext);

  useEffect(() => {
    const totalProductsPrice = getTotal();
    setTotal(totalProductsPrice);
  }, [products, setProducts]);

  const beforeCheckout = () => {
    if (products?.length === 0) {
      toast.error(
        (t) => {
          return (
            <div
              className="flex cursor-pointer items-center gap-[16px]"
              onClick={() => toast.dismiss(t.id)}
            >
              <p className="text-[18px] font-bold tracking-[1.29px] text-[#D87D4A]">
                Your cart is empty
              </p>
            </div>
          );
        },
        {
          position: 'top-right',
          duration: 3000,
        }
      );
    }
    setShow(false);
  };

  return (
    <div className="flex h-[490px] min-w-[330px] flex-col gap-[32px] rounded-[8px] bg-white px-[28px] py-[32px] shadow-2xl md:min-w-[380px]">
      <div className="flex justify-between">
        <h3 className="text-[18px] font-bold tracking-[1.29px]">
          CART ({products?.length})
        </h3>
        <button onClick={removeAll}>
          <span className="text-[15px] font-medium text-[rgba(0,0,0,0.5)] underline decoration-[rgba(0,0,0,0.5)]">
            Remove all
          </span>
        </button>
      </div>
      <div
        id="products"
        className="flex h-[240px] flex-col gap-[24px] overflow-auto"
      >
        {Array.isArray(products) &&
          products.map((product: CartItemProps) => (
            <CartItem key={uuidv4()} product={product} />
          ))}
      </div>
      <div className="min-h-[100px]">
        <div className="mb-[24px] flex justify-between">
          <p className="text-[15px] font-medium text-[rgba(0,0,0,0.5)]">
            TOTAL
          </p>
          <p className="text-[18px] font-bold">$ {formatPrice(total)}</p>
        </div>
        <ConditionalLink to="/checkout" condition={products?.length > 0}>
          <PrimaryButton
            className="h-[48px] w-full bg-[#D87D4A]"
            onClick={beforeCheckout}
          >
            <span className="text-[13px] font-bold text-white">CHECKOUT</span>
          </PrimaryButton>
        </ConditionalLink>
      </div>
    </div>
  );
}

function ConditionalLink({ children, condition, ...props }) {
  return !!condition && props.to ? (
    <Link to={props.to} {...props}>
      {children}
    </Link>
  ) : (
    <>{children}</>
  );
}

function CartItem(props: { product: CartItemProps }) {
  const product: CartItemProps = props.product;
  const { setProduct } = useContext(CartContext);

  return (
    <div className="flex items-center justify-between gap-[16px] pr-[10px]">
      <div>
        <img
          src={product?.image}
          alt="no image"
          className="h-[64px] w-[64px] rounded-[8px]"
        />
      </div>
      <div className="min-w-[75px]">
        <p className="text-[15px] font-bold">{product.shortName}</p>
        <p className="text-[14px] font-bold text-[rgba(0,0,0,0.5)]">
          $ {formatPrice(product.total)}
        </p>
      </div>
      <div className="inline-flex items-center bg-[#F1F1F1]">
        <button
          className="py-[6px] px-[12px]"
          onClick={() => setProduct(product, '-')}
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
          onClick={() => setProduct(product, '+')}
        >
          <span className="text-[13px] font-bold tracking-[1px] text-[rgba(0,0,0,0.25)]">
            +
          </span>
        </button>
      </div>
    </div>
  );
}

export default CartPortal;
