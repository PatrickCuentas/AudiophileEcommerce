import bestGearSharedMobile from '/assets/shared/mobile/image-best-gear.jpg';
import bestGearSharedTablet from '/assets/shared/tablet/image-best-gear.jpg';
import bestGearSharedDesktop from '/assets/shared/desktop/image-best-gear.jpg';

export default function AboutUs() {
  return (
    <div className="mb-[70px] text-center md:mb-[100px] lg:mb-[200px] lg:flex lg:flex-row-reverse lg:items-center lg:gap-[125px]">
      <div className="mb-[63px] lg:mb-0">
        <picture>
          <source media="(min-width: 1024px)" srcSet={bestGearSharedDesktop} />
          <source media="(min-width: 768px)" srcSet={bestGearSharedTablet} />
          <img
            className="h-[320px] min-w-full rounded-[8px] object-cover lg:h-auto lg:min-w-0"
            src={bestGearSharedMobile}
            alt={'image'}
          />
        </picture>
      </div>
      <div className="lg:text-start">
        <h2 className="mx-auto max-w-[20ch] text-[28px] font-bold tracking-[1px] text-black md:text-[40px] md:leading-[44px] md:tracking-[1.43px]">
          BRINGING YOU THE <span className="text-[#D87D4A]">BEST</span> AUDIO
          GEAR
        </h2>
        <p className="mx-auto mt-[32px] text-[15px] leading-[25px] text-[rgba(0,0,0,0.5)] md:max-w-[66ch]">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
}
