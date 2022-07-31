import bestGearSharedMobile from '../../assets/shared/mobile/image-best-gear.jpg';

export default function Testimonial() {
  const backgroundImageDiv = {
    backgroundImage: `url(${bestGearSharedMobile})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minWidth: '100%',
    height: '300px',
    borderRadius: '8px',
  };

  return (
    <div className="text-center">
      <div style={backgroundImageDiv} className="mb-[40px]"></div>
      <h2 className="text-black max-w-[20ch] mx-auto font-bold text-[28px]">
        BRINGING YOU THE <span className="text-[#D87D4A]">BEST</span> AUDIO GEAR
      </h2>
      <p className="text-[rgba(0,0,0,0.5)] mt-[32px] text-[15px] leading-[25px]">
        Located at the heart of New York City, Audiophile is the premier store
        for high end headphones, earphones, speakers, and audio accessories. We
        have a large showroom and luxury demonstration rooms available for you
        to browse and experience a wide range of our products. Stop by our store
        to meet some of the fantastic people who make Audiophile the best place
        to buy your portable audio equipment.
      </p>
    </div>
  );
}
