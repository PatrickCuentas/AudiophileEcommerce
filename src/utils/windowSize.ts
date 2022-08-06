const MOBILE = "mobile";
const TABLET = "tablet";
const DESKTOP = "desktop";

export const getDeviceType = () => {
  if (window.innerWidth < 768) {
    return {
      type: MOBILE,
      size: window.innerWidth,
    };
  }
  if (window.innerWidth < 1024) {
    return {
      type: TABLET,
      size: window.innerWidth,
    };
  }
  return {
    type: DESKTOP,
    size: window.innerWidth,
  };
};
