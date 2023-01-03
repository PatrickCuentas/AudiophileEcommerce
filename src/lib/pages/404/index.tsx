import PrimaryButton from 'lib/components/PrimaryButton';
import { useNavigate } from 'react-router-dom';

const Page404 = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => navigate('/');

  return (
    <div className="grid h-screen content-center text-center">
      <h2 className="text-2xl font-bold">Page not Found</h2>

      <div className="mx-auto">
        <div className="w-[600px]">
          <img
            className="w-full"
            src="/assets/404 Error-rafiki.svg"
            alt="404 Error"
          />
        </div>
        <a
          className="text-xs"
          href="https://stories.freepik.com/web"
          target="_blank"
          rel="noreferrer"
        >
          Illustration by Freepik Stories
        </a>

        <div className="mt-4">
          <PrimaryButton
            className="group h-[48px] w-[160px] border-[1px] border-black bg-transparent hover:bg-[#000]"
            onClick={handleBackToHome}
          >
            <span className="text-[13px] font-bold text-black group-hover:text-white">
              Let&apos;s Head Back
            </span>
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Page404;
