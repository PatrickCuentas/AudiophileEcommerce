import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Loader = () => {
  return (
    <main className="mx-auto max-w-[30rem] md:max-w-[68.75rem]">
      <div className="px-[24px] pt-[16px] md:px-[39px] md:pt-[33px]">
        <div className="flex flex-col flex-wrap gap-[88px] md:gap-[120px] lg:gap-[160px]">
          <div>
            <p className="mb-[24px] cursor-pointer text-[15px] font-medium leading-[25px] text-[rgba(0,0,0,0.5)]">
              <Skeleton width={100} />
            </p>
            <div className="flex flex-col gap-[32px] md:h-[480px] md:flex-row md:items-center md:justify-center md:gap-[69px]">
              <div className="h-full w-full self-stretch">
                <Skeleton height={450} />
              </div>
              <div>
                <div className="flex w-[340px] flex-col items-start gap-[24px] lg:gap-0">
                  <p className="text-[14px] tracking-[10px] text-[#D87D4A] lg:mb-[16px]">
                    <Skeleton width={100} />
                  </p>
                  <h2 className="text-[28px] font-bold tracking-[1px] lg:text-[40px]">
                    <Skeleton width={200} />
                  </h2>
                  <p className="text-[15px] font-medium leading-[25px] text-[rgba(0,0,0,0.5)] lg:my-[32px]">
                    <Skeleton width={300} count={3} />
                  </p>
                  <p className="text-[18px] font-bold tracking-[1.29px]">
                    <Skeleton width={100} />
                  </p>
                </div>
                <div className="mt-[30px] flex flex-wrap gap-[16px]">
                  <div className="inline-flex flex-wrap items-center bg-[#F1F1F1] ">
                    <button className="group py-[12px] px-[16px]">
                      <span className="text-[13px] font-bold tracking-[1px] text-[rgba(0,0,0,0.25)] group-hover:text-[#D87D4A]">
                        <Skeleton width={10} />
                      </span>
                    </button>
                    <div className="py-[12px] px-[16px]">
                      <span className="text-[13px] font-bold tracking-[1px]">
                        <Skeleton width={10} />
                      </span>
                    </div>
                    <button className="group py-[12px] px-[16px]">
                      <span className="text-[13px] font-bold tracking-[1px] text-[rgba(0,0,0,0.25)] group-hover:text-[#D87D4A]">
                        <Skeleton width={10} />
                      </span>
                    </button>
                  </div>
                  <div className="inline-flex flex-wrap items-center bg-[#F1F1F1] ">
                    <button className="group py-[12px] px-[16px]">
                      <span className="text-[13px] font-bold tracking-[1px] text-[rgba(0,0,0,0.25)] group-hover:text-[#D87D4A]">
                        <Skeleton width={10} />
                      </span>
                    </button>
                    <div className="py-[12px] px-[16px]">
                      <span className="text-[13px] font-bold tracking-[1px]">
                        <Skeleton width={10} />
                      </span>
                    </div>
                    <button className="group py-[12px] px-[16px]">
                      <span className="text-[13px] font-bold tracking-[1px] text-[rgba(0,0,0,0.25)] group-hover:text-[#D87D4A]">
                        <Skeleton width={10} />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[88px] lg:flex-row">
            <div className="lg:flex-1">
              <h2 className="text-[24px] font-bold tracking-[0.86px] lg:text-[32px]">
                <Skeleton width={100} />
              </h2>
              <p className="mt-[24px] text-[15px] font-medium leading-[25px] text-[rgba(0,0,0,0.5)] lg:mt-[32px]">
                <Skeleton width={'100%'} count={5} />
              </p>
            </div>
            <div className="lg:flex-1">
              <div className="md:flex lg:flex-col">
                <h2 className="text-[24px] font-bold tracking-[0.86px] md:flex-1 md:text-[32px] md:tracking-[1.14px]">
                  <Skeleton width={100} />
                </h2>
                <ul className="mt-[24px] flex flex-col flex-wrap gap-[8px] md:mt-0 md:flex-1 lg:mt-[32px]">
                  <Skeleton width={200} count={5} />
                </ul>
              </div>
            </div>
          </div>
          <div className="grid-gallery flex flex-col gap-[20px] md:grid">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                style={{
                  gridArea: `img${i + 1}`,
                }}
              >
                {i === 2 ? (
                  <Skeleton height={'100%'} />
                ) : (
                  <Skeleton height={200} />
                )}
              </div>
            ))}
          </div>
          <div className="grid-skeleton flex flex-col gap-[20px] md:grid">
            {Array.from({ length: 3 }).map((_, i) => (
              <div>
                <Skeleton height={200} />
              </div>
            ))}
          </div>

          <div className="grid-skeleton flex flex-col gap-[20px] md:grid">
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
        </div>
      </div>
    </main>
  );
};

export default Loader;
