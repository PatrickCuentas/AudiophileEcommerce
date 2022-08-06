import { Link } from "react-router-dom";
import Button from "./button";

import speakerZx9Mobile from "../../assets/home/mobile/image-speaker-zx9.png";
import speakerZx9Tablet from "../../assets/home/tablet/image-speaker-zx9.png";
import speakerZx9Desktop from "../../assets/home/desktop/image-speaker-zx9.png";

import speakerZx7Mobile from "../../assets/home/mobile/image-speaker-zx7.jpg";
import speakerZx7Tablet from "../../assets/home/tablet/image-speaker-zx7.jpg";
import speakerZx7Desktop from "../../assets/home/desktop/image-speaker-zx7.jpg";

import earphonesYx1Mobile from "../../assets/home/mobile/image-earphones-yx1.jpg";
import earphonesYx1Tablet from "../../assets/home/tablet/image-earphones-yx1.jpg";
import earphonesYx1Desktop from "../../assets/home/desktop/image-earphones-yx1.jpg";

import { getDeviceType } from "../utils/windowSize";

const { type } = getDeviceType();

export default function Products() {
  return (
    <div className="pb-[170px] md:pb-[96px]">
      <div className="flex flex-col gap-[24px] text-center">
        <SpeakerZX9 />
        <SpeakerZX7 />
        <EarphonesYX1 />
      </div>
    </div>
  );
}

function SpeakerZX9() {
  const imgUrl =
    type === "mobile"
      ? speakerZx9Mobile
      : type === "tablet"
      ? speakerZx9Tablet
      : speakerZx9Desktop;

  return (
    <div className="h-[720] rounded-[8px] bg-[#d87d4a] px-[24px] py-[55px] lg:h-[560px]  lg:px-[100px] lg:py-0">
      <div className="flex flex-col items-center lg:h-full lg:flex-row">
        <div className="lg:mr-[20%] lg:h-[420px] lg:w-[310px] lg:flex-1 lg:self-end">
          <img
            src={imgUrl}
            alt="Speaker ZX9"
            className="h-[200px] w-[170px] object-cover lg:h-full lg:w-full lg:object-contain"
          />
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
            <Button
              styles={{ width: "160px", height: "48px" }}
              className="group border-[1px] border-black bg-transparent hover:bg-[#000]"
            >
              <span className="text-[13px] font-bold text-black group-hover:text-white">
                SEE PRODUCT
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function SpeakerZX7() {
  const imgUrl =
    type === "mobile"
      ? speakerZx7Mobile
      : type === "tablet"
      ? speakerZx7Tablet
      : speakerZx7Desktop;

  const backgroundImageDiv = {
    backgroundImage: `url(${imgUrl})`,
    backgroundSize: `${type === "mobile" ? "cover" : "100%"}`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div style={backgroundImageDiv} className="h-[320px] rounded-[8px]">
      <div className="flex h-full items-center">
        <div className="pl-[24px] text-start md:pl-[62px]">
          <h2 className="mb-[32px] text-[28px] font-bold text-black">
            ZX7 SPEAKER
          </h2>
          <Link to="/products/zx7-speaker">
            <Button
              styles={{ width: "160px", height: "48px" }}
              className="group border-[1px] border-black bg-transparent hover:bg-[#000]"
            >
              <span className="text-[13px] font-bold text-black group-hover:text-white">
                SEE PRODUCT
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function EarphonesYX1() {
  const imgUrl =
    type === "mobile"
      ? earphonesYx1Mobile
      : type === "tablet"
      ? earphonesYx1Tablet
      : earphonesYx1Desktop;

  return (
    <div className="md:flex md:gap-[11px]">
      <div className="md:flex-1">
        <img
          src={imgUrl}
          alt="earphone yx1"
          className="md-h-full h-[200px] min-w-[100%] rounded-[8px] object-cover"
        />
      </div>
      <div className="mt-[24px] h-[200px] rounded-[8px] bg-[#dcdcdc] pl-[24px] md:mt-0 md:flex-1 md:pl-[41px]">
        <div className="flex h-full items-center">
          <div className="text-start">
            <h2 className="mb-[32px] text-[28px] font-bold text-black">
              YX1 EARPHONES
            </h2>
            <Link to="/products/yx1-earphones">
              <Button
                styles={{ width: "160px", height: "48px" }}
                className="group border-[1px] border-black bg-transparent hover:bg-[#000]"
              >
                <span className="text-[13px] font-bold text-black group-hover:text-white">
                  SEE PRODUCT
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
