import { Link } from 'react-router-dom';
import PrimaryButton from './PrimaryButton';
import speakerZx9Mobile from '/assets/home/mobile/image-speaker-zx9.png';
import speakerZx9Tablet from '/assets/home/tablet/image-speaker-zx9.png';
import speakerZx9Desktop from '/assets/home/desktop/image-speaker-zx9.png';
import speakerZx7Mobile from '/assets/home/mobile/image-speaker-zx7.jpg';
import speakerZx7Tablet from '/assets/home/tablet/image-speaker-zx7.jpg';
import speakerZx7Desktop from '/assets/home/desktop/image-speaker-zx7.jpg';
import earphonesYx1Mobile from '/assets/home/mobile/image-earphones-yx1.jpg';
import earphonesYx1Tablet from '/assets/home/tablet/image-earphones-yx1.jpg';
import earphonesYx1Desktop from '/assets/home/desktop/image-earphones-yx1.jpg';

export default function Products() {
  return (
    <div className="mb-[170px] md:mb-[100px] lg:mb-[200px]">
      <div className="flex flex-col gap-[24px] text-center">
        <SpeakerZX9 />
        <SpeakerZX7 />
        <EarphonesYX1 />
      </div>
    </div>
  );
}

function SpeakerZX9() {
  return (
    <div className="h-[720] rounded-[8px] bg-[#d87d4a] px-[24px] py-[55px] lg:h-[560px]  lg:px-[100px] lg:py-0">
      <div className="flex flex-col items-center lg:h-full lg:flex-row">
        <div className="lg:mr-[20%] lg:h-[450px] lg:w-[310px] lg:flex-1 lg:self-end">
          <picture>
            <source media="(min-width: 1024px)" srcSet={speakerZx9Desktop} />
            <source media="(min-width: 768px)" srcSet={speakerZx9Tablet} />
            <img
              className="h-[200px] w-[170px] object-cover lg:h-full lg:w-full lg:object-contain"
              src={speakerZx9Mobile}
              alt="Speaker ZX9"
            />
          </picture>
        </div>
        <div className="mt-[32px] lg:mt-0">
          <h2 className="max-w-[10ch] text-[36px] font-bold leading-[2.5rem] tracking-[1.29px] text-white md:text-[56px] md:leading-[3.5rem] md:tracking-[2px] lg:text-start">
            ZX9 SPEAKER
          </h2>
          <p className="my-[24px] text-[15px] font-medium leading-[25px] text-white md:max-w-[350px] lg:text-start">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link to="/products/zx9-speaker" className="lg:block lg:text-start">
            <PrimaryButton className="group h-[48px] w-[160px] border-[1px] border-black bg-transparent hover:bg-[#000]">
              <span className="text-[13px] font-bold text-black group-hover:text-white">
                SEE PRODUCT
              </span>
            </PrimaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
}

function SpeakerZX7() {
  return (
    <div
      className={`md:bg-[100%] h-[320px] rounded-[8px] bg-[url('/assets/home/mobile/image-speaker-zx7.jpg')] bg-cover bg-center bg-no-repeat md:bg-[url('/assets/home/tablet/image-speaker-zx7.jpg')] lg:bg-[url('/assets/home/desktop/image-speaker-zx7.jpg')]`}
    >
      <div className="flex h-full items-center">
        <div className="pl-[24px] text-start md:pl-[62px]">
          <h2 className="mb-[32px] text-[28px] font-bold text-black">
            ZX7 SPEAKER
          </h2>
          <Link to="/products/zx7-speaker">
            <PrimaryButton className="group h-[48px] w-[160px] border-[1px] border-black bg-transparent hover:bg-[#000]">
              <span className="text-[13px] font-bold text-black group-hover:text-white">
                SEE PRODUCT
              </span>
            </PrimaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
}

function EarphonesYX1() {
  return (
    <div className="md:flex md:gap-[11px]">
      <div className="md:flex-1">
        <picture>
          <source media="(min-width: 1024px)" srcSet={earphonesYx1Desktop} />
          <source media="(min-width: 768px)" srcSet={earphonesYx1Tablet} />
          <img
            className="md-h-full h-[200px] min-w-[100%]"
            src={earphonesYx1Mobile}
            alt="earphone YX1"
          />
        </picture>
      </div>
      <div className="mt-[24px] h-[200px] rounded-[8px] bg-[#dcdcdc] pl-[24px] md:mt-0 md:flex-1 md:pl-[41px]">
        <div className="flex h-full items-center">
          <div className="text-start">
            <h2 className="mb-[32px] text-[28px] font-bold text-black">
              YX1 EARPHONES
            </h2>
            <Link to="/products/yx1-earphones">
              <PrimaryButton className="group h-[48px] w-[160px]  border-[1px] border-black bg-transparent hover:bg-[#000]">
                <span className="text-[13px] font-bold text-black group-hover:text-white">
                  SEE PRODUCT
                </span>
              </PrimaryButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
