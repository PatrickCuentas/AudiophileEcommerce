import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router';

// Context
import { CartContext } from '../context/CartContext';

// Custom hooks
import useRadioButtons from '../hooks/useRadioButtons';

// Utils
import { getShortName } from '../utils/fetchProducts';
import { formatPrice } from '../utils/priceProducts';
import PaymentPortal from './PaymentPortal';

interface CartItemProps {
  id: number | string;
  name: string;
  slug: string;
  price: number;
  image: string;
  quantity: number;
}

export default function CheckoutScreen() {
  const navigate = useNavigate();
  const { cartProducts, totalPrice } = useContext(CartContext);
  const [paymentValue, paymentInputProps] = useRadioButtons('payment', 'money');

  useEffect(() => {
    if (cartProducts.length <= 0) {
      navigate('/');
    }

    document.body.style.background = '#F2F2F2';
    return () => {
      document.body.style.background = '#ffffff';
    };
  }, []);

  return (
    <div>
      <div className="px-[24px] pt-[16px] pb-[100px] flex flex-col gap-[32px]">
        <p
          onClick={() => navigate(-1)}
          className="cursor-pointer text-[15px] font-medium leading-[25px] text-[rgba(0,0,0,0.5)]"
        >
          Go back
        </p>
        <div className="flex flex-col gap-[32px]">
          <section className="rounded-[8px] p-[24px] bg-white">
            <h2 className="text-[28px] font-bold tracking-[1px]">CHECKOUT</h2>
            <div className="mt-[32px]">
              <form className="flex flex-col gap-[32px]">
                <div id="billingDetails">
                  <p className="text-[13px] font-bold traking-[.93px] text-[#D87D4A]">
                    BILLING DETAILS
                  </p>
                  <div className="flex flex-col gap-[24px] mt-[16px]">
                    <Input label={'Name'} placeholder="Name" />
                    <Input
                      label={'Email Address'}
                      placeholder="alexei@mail.com"
                    />
                    <Input
                      label={'Phone Number'}
                      placeholder="+1 202-555-0136"
                    />
                  </div>
                </div>
                <div id="shippingInfo">
                  <p className="text-[13px] font-bold traking-[.93px] text-[#D87D4A]">
                    SHIPPING INFO
                  </p>
                  <div className="flex flex-col gap-[24px] mt-[16px]">
                    <Input
                      label={'Your Address'}
                      placeholder="1137 Williams Avenue"
                    />
                    <Input label={'ZIP Code'} placeholder="10001" />
                    <Input label={'City'} placeholder="New York" />
                    <Input label={'Country'} placeholder="United States" />
                  </div>
                </div>
                <div id="paymentDetails">
                  <p className="text-[13px] font-bold traking-[.93px] text-[#D87D4A]">
                    PAYMENT DETAILS
                  </p>
                  <SearchResult
                    paymentValue={paymentValue}
                    paymentInputProps={paymentInputProps}
                  />
                </div>
                <div className="flex flex-col gap-[24px]">
                  <Input
                    label={'e-Money Number'}
                    placeholder="238521993"
                    disabled={paymentValue === 'delivery' ? true : false}
                  />
                  <Input
                    label={'e-Money PIN'}
                    placeholder="6851"
                    disabled={paymentValue === 'delivery' ? true : false}
                  />
                </div>
              </form>
            </div>
          </section>
          <section className="rounded-[8px] p-[24px] bg-white">
            <Summary products={cartProducts} totalPrice={totalPrice} />
          </section>
        </div>
      </div>
    </div>
  );
}

function SearchResult({ paymentValue, paymentInputProps }) {
  return (
    <>
      <div
        className={`flex gap-[21px] mt-[16px] px-[16px] py-[18px] border-[1px]  rounded-[8px] ${
          paymentValue === 'money' ? 'border-[#D87D4A]' : 'border-[#CFCFCF]'
        }`}
      >
        <input
          id="money"
          value="money"
          checked={paymentValue === 'money'}
          className="accent-[#D87D4A]"
          {...paymentInputProps}
        />
        <label
          htmlFor="money"
          className="text-[14px] font-bold leading-[-0.25px]"
        >
          e-Money
        </label>
      </div>
      <div
        className={`flex gap-[21px] mt-[16px] px-[16px] py-[18px] border-[1px]  rounded-[8px] ${
          paymentValue === 'delivery' ? 'border-[#D87D4A]' : 'border-[#CFCFCF]'
        }`}
      >
        <input
          id="delivery"
          value="delivery"
          checked={paymentValue === 'delivery'}
          className="accent-[#D87D4A]"
          {...paymentInputProps}
        />
        <label
          htmlFor="delivery"
          className="text-[14px] font-bold leading-[-0.25px]"
        >
          Cash on Delivery
        </label>
      </div>
    </>
  );
}

function Summary(props: { products: CartItemProps[]; totalPrice: number }) {
  const { products, totalPrice } = props;
  const TOTAL_PRICE = formatPrice(totalPrice);
  const SHIPPING_PRICE = 50;
  const VAT = formatPrice(parseInt(String(+totalPrice * 0.2)));
  const GRAND_TOTAL = formatPrice(
    parseInt(String(+totalPrice + SHIPPING_PRICE))
  );

  return (
    <div className="flex flex-col gap-[32px]">
      <h2 className="font-bold text-[18px] tracking-[1.29px] ">SUMMARY</h2>
      <div
        id="products"
        className="flex flex-col gap-[24px]"
        // h-[240px]
      >
        {Array.isArray(products) &&
          products.map((product: CartItemProps) => (
            <CartItem key={product.name} product={product} />
          ))}
      </div>
      <div>
        <div className="flex flex-col gap-[8px] mb-[24px]">
          <Label label="TOTAL" color="#000">
            $ {TOTAL_PRICE}
          </Label>
          <Label label="SHIPPING" color="#000">
            $ {SHIPPING_PRICE}
          </Label>
          <Label label="VAT (INCLUDED)" color="#000">
            $ {VAT}
          </Label>
        </div>
        <Label label="GRAND TOTAL" color="#D87D4A">
          $ {GRAND_TOTAL}
        </Label>
      </div>

      {document && <PaymentPortal />}
    </div>
  );
}

function Label({ label, children, ...props }) {
  return (
    <div className="flex justify-between">
      <p>{label}</p>
      <p style={props} className="text-[18px] font-bold">
        {children}
      </p>
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
            className="rounded-[8px] w-[64px] h-[64px]"
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

function Input({ label, ...props }) {
  return (
    <div className="flex flex-col gap-[9px]">
      <label className="text-[12px] font-bold leading-[-0.21px]">{label}</label>
      <input
        className="border-[1px] border-[#CFCFCF] rounded-[8px] pl-[24px] py-[25px] w-[full] h-[32px] tracking-[-0.25px] text-[14px] font-bold"
        {...props}
      />
    </div>
  );
}
