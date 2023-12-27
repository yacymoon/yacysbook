import { PiForkKnifeThin } from  'react-icons/pi'
import { BsArrowUpCircle } from 'react-icons/bs'

export const Footer = () => {

    const year = new Date().getFullYear();
    const handleGoToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    return (
      <div className="relative mt-24 bg-green">
        <svg
          className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-green"
          preserveAspectRatio="none"
          viewBox="0 0 1240 54"
        >
          <path
            fill="currentColor"
            d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
          />
        </svg>
        <div className="px-4 pt-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="flex justify-between">
            <div className="md:max-w-md mb-3">
              <a
                href="#home"
                aria-label="Go home"
                title="Company"
                className="inline-flex items-center"
              >
                <PiForkKnifeThin  className='text-gray-100 text-3xl absolute'/>
                <span className="ml-9 text-xl font-bold tracking-wide text-gray-100 uppercase">
                  YACY'S BOOK
                </span>
              </a>
            </div>
            <div onClick={handleGoToTop}>
                <p className="flex cursor-pointer hover:animate-bounce font-light tracking-wide text-gray-100">
                <BsArrowUpCircle className='mt-1 mr-2 text-gray-100'/>
                Go to top
                </p>
            </div>
          </div>
          <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
            <p className="text-sm text-gray-100">
              © Copyright {year}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    );
};