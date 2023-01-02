import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router';
import CheckoutPortal from '../components/CheckoutPortal';

import { CartContext } from '../context/CartContext';

import useRadioButtons from '../hooks/useRadioButtons';

import { getShortName } from '../utils/fetchProducts';
import { formatPrice } from '../utils/priceProducts';

import { useFormik } from 'formik';
import * as Yup from 'yup';

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

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      address: '',
      zip: '',
      city: '',
      country: '',
      eMoneyNumber: '',
      eMoneyPin: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Wrong format').required('Email is required'),
      phone: Yup.string().required('Phone is required'),
      address: Yup.string().required('Address is required'),
      zip: Yup.string().required('Zip is required'),
      city: Yup.string().required('City is required'),
      country: Yup.string().required('Country is required'),
    }),
    onSubmit: (values) => {
      new Promise((resolve) => setTimeout(resolve, 1000))
        .then((res) => {})
        .catch((err) => {})
        .finally(() => {
          formik.resetForm();
          formik.setTouched({});
          formik.setErrors({});
          formik.setSubmitting(false);
        });
    },
  });

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
            <Summary products={cartProducts} totalPrice={totalPrice} />
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
      <h2 className="text-[18px] font-bold tracking-[1.29px] ">SUMMARY</h2>
      <div id="products" className="flex flex-col gap-[24px]">
        {Array.isArray(products) &&
          products.map((product: CartItemProps) => (
            <CartItem key={product.name} product={product} />
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
            className="h-[64px] w-[64px] rounded-[8px]"
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

function Input({ htmlFor, labelTitle, errors, touched, ...props }) {
  return (
    <div className="flex flex-col gap-[9px]">
      <div className="flex justify-between">
        <label
          htmlFor={htmlFor}
          className={`text-[12px] font-bold leading-[-0.21px] ${
            errors && touched ? 'text-[#CD2C2C]' : 'text-[#000]'
          }`}
        >
          {labelTitle}
        </label>
        {errors && touched && (
          <p className="text-[12px] font-bold text-[#CD2C2C]">{errors}</p>
        )}
      </div>
      <input
        className={`h-[32px] w-[full] rounded-[8px] border-[1px] border-[#CFCFCF]  py-[25px] pl-[24px] text-[14px] font-bold tracking-[-0.25px]  ${
          errors
            ? 'focus:border-[#CD2C2C] focus:outline-none active:border-[#CD2C2C]'
            : 'focus:border-[#D87D4A] focus:outline-none active:border-[#D87D4A]'
        }`}
        {...props}
      />
    </div>
  );
}
