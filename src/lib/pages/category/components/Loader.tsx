import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Main from 'lib/layout/Main';

const Loader = () => {
  return (
    <>
      <div className="flex items-center justify-center ">
        <p className="text-[28px] font-bold tracking-[2px] text-white">
          <Skeleton className="w-screen" height={100} />
        </p>
      </div>
      <Main>
        <div className="flex flex-col gap-[120px] py-[64px] px-[24px] text-center lg:text-start">
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              className={`lg:flex lg:items-center lg:justify-center lg:gap-[125px] ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              <div className="mb-[32px] lg:flex-1">
                <Skeleton height={450} width={'100%'} />
              </div>
              <div className="flex flex-col items-center gap-[24px] lg:flex-1 lg:items-start lg:gap-0">
                <p className="lg:mb-[16p]x text-[14px] tracking-[10px] text-[#D87D4A]">
                  <Skeleton width={100} />
                </p>
                <h2 className="text-[28px] font-bold tracking-[1px] md:mx-auto md:max-w-[15ch] md:text-[40px] lg:mx-0 lg:mb-[32px] lg:max-w-none">
                  <Skeleton width={200} />
                </h2>
                <p className="text-[15px] font-medium leading-[25px] text-[rgba(0,0,0,0.5)]  lg:mb-[40px]">
                  <Skeleton width={300} count={5} />
                </p>
                <Skeleton width={200} />
              </div>
            </div>
          ))}
        </div>
        <div className="grid-skeleton mb-[88px] flex flex-col gap-[20px] md:grid">
          {Array.from({ length: 3 }).map((_, i) => (
            <div>
              <Skeleton height={200} />
            </div>
          ))}
        </div>

        <div className="grid-skeleton-aboutus mb-[70px] flex flex-col-reverse gap-16 text-center md:mb-[100px] lg:mb-[200px] lg:grid">
          <div
            className="lg:text-start"
            style={{
              gridArea: `one`,
            }}
          >
            <h2 className="text-[28px] font-bold tracking-[1px] text-black md:text-[40px] md:leading-[44px] md:tracking-[1.43px]">
              <Skeleton width={200} />
            </h2>
            <p className="mx-auto mt-[32px] text-[15px] leading-[25px] text-[rgba(0,0,0,0.5)] md:max-w-[66ch]">
              <Skeleton width={'100%'} count={5} />
            </p>
          </div>
          <div
            style={{
              gridArea: `two`,
            }}
          >
            <Skeleton height={200} width={'100%'} />
          </div>
        </div>
      </Main>
    </>
  );
};

export default Loader;
