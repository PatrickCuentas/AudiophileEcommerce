import { useEffect } from 'react';

function Scrollup() {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const scrollUp = document.querySelector('.scroll-up');

    if (scrollUp) {
      window.addEventListener('scroll', () => {
        if (window.pageYOffset > 200) {
          scrollUp.classList.add('fixed');
          scrollUp.classList.remove('hidden');
        } else {
          scrollUp.classList.add('hidden');
          scrollUp.classList.remove('fixed');
        }
      });
    }
  }, []);

  return (
    <div className="scroll-up bottom-0 right-0 mr-[30px] mb-[30px]">
      <button
        onClick={goToTop}
        className="rounded-full border-2 border-slate-100 bg-[hsla(0,0%,0%,1)] p-[10px] text-[#fff] shadow-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-[20px] w-[20px]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </div>
  );
}

export default Scrollup;
