import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router';
import { v4 as uuidv4 } from 'uuid';
import initFormik from '../../hooks/useMyFormik';
import { CartContext } from '../../context/CartContext';
import Input from 'lib/components/Input';
import CheckoutPortal from '../../components/CheckoutPortal';
import useRadioButtons from '../../hooks/useRadioButtons';
import { CartItemProps } from 'lib/interfaces/cart';
import { formatPrice } from '../../utils/priceProducts';

export default function CheckoutScreen() {
  const navigate = useNavigate();
  const formik = initFormik();
  const { products, total } = useContext(CartContext);
  const [paymentValue, paymentInputProps] = useRadioButtons('payment', 'money');

  useEffect(() => {
    document.body.style.background = '#F2F2F2';
    return () => {
      document.body.style.background = '#ffffff';
    };
  }, []);

  return (
    <main className="mx-auto mt-[79px] mb-[141px] max-w-[30rem] md:max-w-[68.75rem]">
      <div className="flex flex-col gap-[32px]">
        <p
          onClick={() => navigate(-1)}
          className="w-autotext-[15px] cursor-pointer font-medium leading-[25px] text-[rgba(0,0,0,0.5)] hover:text-[#D87D4A]"
        >
          Go back
        </p>
        <div className="flex flex-col gap-[32px] lg:flex-row">
          <section className=" rounded-[8px] bg-white p-[24px] [flex-basis:66.66%]">
            <h2 className="text-[28px] font-bold tracking-[1px]">CHECKOUT</h2>
            <div className="mt-[32px]">
              <form
                className="flex flex-col gap-[32px]"
                onSubmit={formik.handleSubmit}
              >
                <div id="billingDetails">
                  <p className="traking-[.93px] text-[13px] font-bold text-[#D87D4A]">
                    BILLING DETAILS
                  </p>
                  <div className="mt-[16px] grid gap-y-[24px] md:grid-cols-2 md:gap-x-[16px]">
                    <Input
                      htmlFor="name"
                      id="name"
                      name="name"
                      type="text"
                      errors={formik.errors.name}
                      value={formik.values.name}
                      touched={formik.touched.name}
                      onFocus={() => formik.setFieldTouched('name', true)}
                      onChange={formik.handleChange}
                      labelTitle={'Name'}
                      placeholder="Alexei Ward"
                    />
                    <Input
                      htmlFor="email"
                      id="email"
                      name="email"
                      type="email"
                      errors={formik.errors.email}
                      value={formik.values.email}
                      touched={formik.touched.email}
                      onFocus={() => formik.setFieldTouched('email', true)}
                      onChange={formik.handleChange}
                      labelTitle={'Email Address'}
                      placeholder="alexei@mail.com"
                    />
                    <Input
                      htmlFor="phone"
                      id="phone"
                      name="phone"
                      type="tel"
                      errors={formik.errors.phone}
                      value={formik.values.phone}
                      touched={formik.touched.phone}
                      onFocus={() => formik.setFieldTouched('phone', true)}
                      onChange={formik.handleChange}
                      labelTitle={'Phone Number'}
                      placeholder="+1 202-555-0136"
                    />
                  </div>
                </div>
                <div id="shippingInfo">
                  <p className="traking-[.93px] text-[13px] font-bold text-[#D87D4A]">
                    SHIPPING INFO
                  </p>
                  <div className="mt-[16px] grid gap-y-[24px] md:grid-cols-2 md:gap-x-[16px]">
                    <div className="md:col-span-2">
                      <Input
                        htmlFor="address"
                        id="address"
                        name="address"
                        type="text"
                        errors={formik.errors.address}
                        value={formik.values.address}
                        touched={formik.touched.address}
                        onFocus={() => formik.setFieldTouched('address', true)}
                        onChange={formik.handleChange}
                        labelTitle={'Your Address'}
                        placeholder="1137 Williams Avenue"
                      />
                    </div>
                    <Input
                      htmlFor="zip"
                      id="zip"
                      name="zip"
                      type="text"
                      errors={formik.errors.zip}
                      value={formik.values.zip}
                      touched={formik.touched.zip}
                      onFocus={() => formik.setFieldTouched('zip', true)}
                      onChange={formik.handleChange}
                      labelTitle={'ZIP Code'}
                      placeholder="10001"
                    />
                    <Input
                      htmlFor="city"
                      id="city"
                      name="city"
                      type="text"
                      errors={formik.errors.city}
                      value={formik.values.city}
                      touched={formik.touched.city}
                      onFocus={() => formik.setFieldTouched('city', true)}
                      onChange={formik.handleChange}
                      labelTitle={'City'}
                      placeholder="New York"
                    />
                    <Input
                      htmlFor="country"
                      id="country"
                      name="country"
                      type="text"
                      errors={formik.errors.country}
                      value={formik.values.country}
                      touched={formik.touched.country}
                      onFocus={() => formik.setFieldTouched('country', true)}
                      onChange={formik.handleChange}
                      labelTitle={'Country'}
                      placeholder="United States"
                    />
                  </div>
                </div>
                <div id="paymentDetails">
                  <p className="traking-[.93px] mb-[16px] text-[13px] font-bold text-[#D87D4A]">
                    PAYMENT DETAILS
                  </p>
                  <div className="md:flex">
                    <p className="traking-[.93px] mb-[16px] text-[12px] font-bold text-[#000000] md:mb-0 md:flex-1">
                      Payment Method
                    </p>
                    <SearchResult
                      paymentValue={paymentValue}
                      paymentInputProps={paymentInputProps}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[24px] md:flex-row md:gap-[16px]">
                  <div className="md:flex-1">
                    <Input
                      htmlFor="eMoneyNumber"
                      id="eMoneyNumber"
                      name="eMoneyNumber"
                      type="text"
                      errors={formik.errors.eMoneyNumber}
                      value={formik.values.eMoneyNumber}
                      touched={formik.touched.eMoneyNumber}
                      onFocus={() =>
                        formik.setFieldTouched('eMoneyNumber', true)
                      }
                      onChange={formik.handleChange}
                      labelTitle={'e-Money Number'}
                      placeholder="238521993"
                      disabled={paymentValue === 'delivery' ? true : false}
                    />
                  </div>
                  <div className="md:flex-1">
                    <Input
                      htmlFor="eMoneyPin"
                      id="eMoneyPin"
                      name="eMoneyPin"
                      type="text"
                      errors={formik.errors.eMoneyPin}
                      value={formik.values.eMoneyPin}
                      touched={formik.touched.eMoneyPin}
                      onFocus={() => formik.setFieldTouched('eMoneyPin', true)}
                      onChange={formik.handleChange}
                      labelTitle={'e-Money PIN'}
                      placeholder="6851"
                      disabled={paymentValue === 'delivery' ? true : false}
                    />
                  </div>
                </div>
              </form>
            </div>
          </section>
          <section className=" rounded-[8px] bg-white p-[24px] [flex-basis:33.33%]">
            <Summary products={products} total={total} />
          </section>
        </div>
      </div>
    </main>
  );
}

function SearchResult({ paymentValue, paymentInputProps }) {
  return (
    <div className="flex flex-col gap-[16px] md:flex-1">
      <div
        className={`flex gap-[21px] rounded-[8px] border-[1px] px-[16px]  py-[18px] ${
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
        className={`flex gap-[21px] rounded-[8px] border-[1px] px-[16px]  py-[18px] ${
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
    </div>
  );
}

function Summary(props: { products: CartItemProps[]; total: number }) {
  const { products, total } = props;
  const TOTAL_PRICE = formatPrice(total);
  const SHIPPING_PRICE = 50;
  const VAT = formatPrice(parseInt(String(+total * 0.2)));
  const GRAND_TOTAL = formatPrice(parseInt(String(+total + SHIPPING_PRICE)));

  return (
    <div className="flex flex-col gap-[32px]">
      <h2 className="text-[18px] font-bold tracking-[1.29px] ">SUMMARY</h2>
      <div id="products" className="flex flex-col gap-[24px]">
        {Array.isArray(products) &&
          products.map((product: CartItemProps) => (
            <CartItem key={uuidv4()} product={product} />
          ))}
      </div>
      <div>
        <div className="mb-[24px] flex flex-col gap-[8px]">
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

      {document && <CheckoutPortal />}
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

function CartItem({ product }: { product: CartItemProps }) {
  return (
    <div className="flex items-start justify-between gap-[16px]">
      <div className="flex items-center gap-[16px]">
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
            $ {product.total}
          </p>
        </div>
      </div>
      <p className="text-[15px] font-bold text-[rgba(0,0,0,0.5)]">
        x{product.quantity}
      </p>
    </div>
  );
}
