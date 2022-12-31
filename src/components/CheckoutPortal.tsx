import { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Modal } from 'react-overlays';
import { CartItemProps } from '../interfaces/cart';
import PrimaryButton from './PrimaryButton';
import { formatPrice } from '../utils/priceProducts';
import { getShortName } from '../utils/fetchProducts';
import CheckCircle from '/assets/CheckCircle.svg';

function CheckoutPortal() {
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
      <PrimaryButton
        type="submit"
        className="h-[48px] w-full bg-[#D87D4A]"
        onClick={() => {
          window.scrollTo(0, 0);
          setShow(true);
        }}
      >
        <span className="text-[13px] font-bold text-white">CONTINUE & PAY</span>
      </PrimaryButton>

      <Modal
        style={{
          position: 'fixed',
          zIndex: 1040,
          top: '0%',
          border: '1px solid #e5e5e5',
          backgroundColor: 'white',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5)',
          marginTop: '300px',
        }}
        className="centered-axis-payment"
        show={show}
        renderBackdrop={renderBackdrop}
        onHide={() => setShow(false)}
        aria-labelledby="modal-label"
      >
        <Container />
      </Modal>
    </div>
  );
}

function Container() {
  const { cartProducts, totalPrice } = useContext(CartContext);
  const firstProduct = cartProducts[0];
  const SHIPPING_PRICE = 50;
  const GRAND_TOTAL = formatPrice(
    parseInt(String(+totalPrice + SHIPPING_PRICE))
  );

  return (
    <div className="flex min-w-[330px] flex-col gap-[24px] rounded-[8px] bg-white p-[32px] shadow-2xl md:min-w-[540px] md:p-[48px]">
      <img
        src={CheckCircle}
        alt="check circle icon"
        className="react-icons-payment"
      />
      <div>
        <h3 className="text-[24px] font-bold tracking-[0.86px] md:text-[32px]">
          THANK YOU FOR YOUR ORDER
        </h3>
        <p className="mt-[16px] text-[15px] font-medium text-[rgba(0,0,0,0.5)]">
          You will receive an email confirmation shortly.
        </p>
      </div>
      <div className="md:flex">
        <div className="flex h-[140px] flex-col items-center justify-center gap-[12px] rounded-[8px] bg-[#F1F1F1] pl-[35px] pr-[24px] pt-[24px] text-center md:flex-[1.1] md:pl-[24px]">
          <CartItem product={firstProduct} />
          <hr className="mt-[12px] h-[2px] w-full bg-[rgba(0,0,0,0.08)] " />
          <p className="text-[12px] font-bold tracking-[-0.21px] text-[rgba(0,0,0,0.5)]">
            and {cartProducts.length - 1} other item(s)
          </p>
        </div>
        <div className="h-[90px] rounded-b-[8px] bg-[#000000] pl-[24px] pt-[15px] pb-[19px] md:flex md:h-[140px] md:flex-1 md:flex-col md:items-start md:justify-center md:pt-0">
          <p className="mb-[8px] text-[15px] font-medium text-[#7f7f7f]">
            GRAND TOTAL
          </p>
          <p className="text-[18px] font-bold text-white">$ {GRAND_TOTAL}</p>
        </div>
      </div>
      <a href="/">
        <PrimaryButton className="h-[48px] w-full bg-[#D87D4A] py-[15px]">
          <span className="text-[13px] font-bold tracking-[1px] text-white">
            GO HOME
          </span>
        </PrimaryButton>
      </a>
    </div>
  );
}

function CartItem(props: { product: CartItemProps }) {
  const product: CartItemProps = props.product;

  const shortName = getShortName(product.slug || '');
  const priceFormated = formatPrice(product.price);

  return (
    <div className="flex items-start justify-between gap-[16px]">
      <div className="flex items-center gap-[16px]">
        <div>
          <img
            src={product?.image}
            alt="no image"
            className="h-[44px] w-[40px] min-w-full rounded-[8px]"
          />
        </div>
        <div className="min-w-[75px]">
          <p className="text-[15px] font-bold">{shortName}</p>
          <p className="text-[14px] font-bold text-[rgba(0,0,0,0.5)]">
            $ {priceFormated}
          </p>
        </div>
      </div>
      <p className="text-[15px] font-bold text-[rgba(0,0,0,0.5)]">
        x{product?.quantity}
      </p>
    </div>
  );
}

export default CheckoutPortal;
