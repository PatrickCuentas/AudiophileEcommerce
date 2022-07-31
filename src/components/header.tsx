import { Link } from 'react-router-dom';
import Button from './button';

import ImageHeaderMobile from '../../assets/home/mobile/image-header.jpg';

export default function Header() {
  return (
    <header className="relative text-center">
      <Image />
      <div className="centered-axis-x">
        <Text />
        <Link to="/products/xx99-mark-two-headphones">
          <Button
            styles={{
              backgroundColor: '#D87D4A',
              width: '160px',
              height: '48px',
            }}
          >
            <span className="text-white text-[13px] font-bold">
              SEE PRODUCT
            </span>
          </Button>
        </Link>
      </div>
    </header>
  );
}

function Image() {
  return <img src={ImageHeaderMobile} alt="" />;
}

function Text() {
  return (
    <>
      <p className="text-[14px] tracking-[10px] text-[rgba(255,255,255,0.5)]">
        NEW PRODUCT
      </p>
      <h1 className="text-[36px] text-white font-bold mt-2 mb-4">
        XX99 Mark II Headphones
      </h1>
      <p className="text-[15px] w-[35ch] text-[rgba(255,255,255,0.75)] mb-8">
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </p>
    </>
  );
}
