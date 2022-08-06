import { Link } from "react-router-dom";
import Button from "./button";

import { DeviceType } from "../interfaces/device";

import ImageHeaderMobile from "../../assets/home/mobile/image-header.jpg";
import ImageHeaderTablet from "../../assets/home/tablet/image-header.jpg";
import ImageHeaderDesktop from "../../assets/home/desktop/image-hero.jpg";

import { getDeviceType } from "../utils/windowSize";

export default function Header() {
  const { type }: DeviceType = getDeviceType();

  const path =
    type === "mobile"
      ? ImageHeaderMobile
      : type === "tablet"
      ? ImageHeaderTablet
      : ImageHeaderDesktop;

  const divImage = {
    backgroundImage: `url("${path}")`,
    backgroundSize: "cover",
    backgroundPosition: "center bottom",
    backgroundRepeat: "no-repeat",
    minWidth: "100%",
    height: "650px",
  };

  return (
    <header style={divImage}>
      <div className="h-full lg:m-auto lg:flex lg:max-w-[1100px] lg:items-center">
        <div className="flex h-full flex-col items-center justify-center text-center  lg:max-w-[380px] lg:items-start lg:text-start">
          <Text />
          <Link to="/products/xx99-mark-two-headphones">
            <Button
              styles={{
                width: "160px",
                height: "48px",
              }}
              className="bg-[#D87D4A] hover:bg-[#FBAF85]"
            >
              <span className="text-[13px] font-bold text-white">
                SEE PRODUCT
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

function Text() {
  return (
    <>
      <p className="text-[14px] tracking-[10px] text-[rgba(255,255,255,0.5)]">
        NEW PRODUCT
      </p>
      <h1 className="mx-auto mt-2 mb-[24px] max-w-[15ch] text-[36px] font-bold text-white lg:mx-0 lg:max-w-none lg:text-[56px]">
        XX99 Mark II Headphones
      </h1>
      <p className="mx-auto mb-[28px] max-w-[35ch] text-[15px] text-[rgba(255,255,255,0.75)] md:mb-[40px] lg:mx-0 lg:max-w-none">
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </p>
    </>
  );
}
