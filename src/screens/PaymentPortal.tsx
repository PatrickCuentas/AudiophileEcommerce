import CheckCircle from '../../assets/CheckCircle.svg';

// React-portal
import { PortalWithState } from 'react-portal';
import Button from '../components/button';
import { getShortName } from '../utils/fetchProducts';
import { formatPrice } from '../utils/priceProducts';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';

interface CartItemProps {
  id: number | string;
  name: string;
  slug: string;
  price: number;
  image: string;
  quantity: number;
}

export default function PaymentPortal() {
  const mainEl = document.querySelector('main');
  const footerEl = document.querySelector('footer');

  const addBlur = () => {
    mainEl?.classList.add('blur-cart');
    footerEl?.classList.add('blur-cart');
    window.scrollTo(0, 0);
  };

  const removeBlur = () => {
    mainEl?.classList.remove('blur-cart');
    footerEl?.classList.remove('blur-cart');
  };

  return (
    <PortalWithState closeOnOutsideClick closeOnEsc>
      {({ openPortal, closePortal, isOpen, portal }) => {
        isOpen ? addBlur() : removeBlur();

        return (
          <>
            <Button
              styles={{
                backgroundColor: '#D87D4A',
                width: '100%',
                height: '48px',
              }}
              onClick={openPortal}
            >
              <span className="text-white text-[13px] font-bold">
                CONTINUE & PAY
              </span>
            </Button>
            {isOpen && portal(<Modal />)}
          </>
        );
      }}
    </PortalWithState>
  );
}

function Modal() {
  const { cartProducts, totalPrice } = useContext(CartContext);
  const firstProduct = cartProducts[0];
  const SHIPPING_PRICE = 50;
  const GRAND_TOTAL = formatPrice(
    parseInt(String(+totalPrice + SHIPPING_PRICE))
  );

  return (
    <div className="centered-axis-payment">
      <div className="bg-white p-[32px] min-w-[330px] rounded-[8px] shadow-2xl flex flex-col gap-[24px]">
        <img
          src={CheckCircle}
          alt="check circle icon"
          className="react-icons-payment"
        />
        <div>
          <h3 className="font-bold text-[24px] tracking-[0.86px]">
            THANK YOU FOR YOUR ORDER
          </h3>
          <p className="font-medium text-[15px] mt-[16px] text-[rgba(0,0,0,0.5)]">
            You will receive an email confirmation shortly.
          </p>
        </div>
        <div>
          <div className="pl-[35px] pr-[24px] py-[24px] bg-[#F1F1F1] rounded-[8px] h-[140px] flex flex-col gap-[12px] text-center">
            <CartItem product={firstProduct} />
            <hr className="h-[2px] w-full bg-[rgba(0,0,0,0.08)] mt-[12px]" />
            <p className="font-bold text-[12px] tracking-[-0.21px] text-[rgba(0,0,0,0.5)]">
              and {cartProducts.length - 1} other item(s)
            </p>
          </div>
          <div className="bg-[#000000] h-[90px] rounded-b-[8px] pl-[24px] pt-[15px] pb-[19px]">
            <p className="font-medium text-[15px] text-[#7f7f7f] mb-[8px]">
              GRAND TOTAL
            </p>
            <p className="font-bold text-[18px] text-white">$ {GRAND_TOTAL}</p>
          </div>
        </div>
        <Button
          styles={{
            backgroundColor: '#D87D4A',
            width: '100%',
            padding: '15px 0',
          }}
        >
          <span className="text-white text-[13px] font-bold tracking-[1px]">
            CHECKOUT
          </span>
        </Button>
      </div>
    </div>
  );
}

function CartItem(props: { product: CartItemProps }) {
  const product: CartItemProps = props.product;

  const shortName = getShortName(product.slug);
  const priceFormated = formatPrice(product.price);

  return (
    <div className="flex items-start justify-between gap-[16px]">
      <div className="flex items-center gap-[16px]">
        <div>
          <img
            src={product?.image}
            alt="no image"
            className="rounded-[8px] w-[40px] h-[44px] min-w-full"
          />
        </div>
        <div className="min-w-[75px]">
          <p className="text-[15px] font-bold">{shortName}</p>
          <p className="text-[14px] font-bold text-[rgba(0,0,0,0.5)]">
            $ {priceFormated}
          </p>
        </div>
      </div>
      <p className="font-bold text-[15px] text-[rgba(0,0,0,0.5)]">
        x{product?.quantity}
      </p>
    </div>
  );
}
