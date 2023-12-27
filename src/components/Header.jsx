import React from 'react'

const Header = () => {
  return (
    <>
    <div className='w-full h-[90vh] relative' id='home'>
        <div className='absolute inset-0 bg-black/50'></div>
        <img src='https://plus.unsplash.com/premium_photo-1663852297514-2211cfb8ae9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' alt='/' className='w-full h-full object-cover' />
        <div className="absolute inset-x-0 bottom-0">
          <svg
            viewBox="0 0 224 12"
            fill="currentColor"
            className="w-full -mb-1 text-grey"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
          </svg>
        </div>
    </div>
    <div className='text-center flex items-center justify-center'>
        <div className='absolute top-[24%] md:top-[26%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
            <h1 className='font-playfair uppercase font-thin text-4xl md:text-5xl'>Recipes for every mood</h1>
            <h2 className='text-3xl md:text-4xl py-4 font-light italic'>Eat Well, Live Well</h2>
            <p className='font-extralight text-sm md:text-base'>Unleash your inner chef and elevate your meals. Discover the joy of balance flavors in every bite, bringing comfort to your dinner table.</p>
            <a href='#recipes'
              className='font-playfair font-thin uppercase flex justify-center items-center border-[1px] border-white/80 mx-auto mt-8 w-28 h-10 hover:bg-white hover:text-black hover:scale-110 hover:transition-all hover:duration-150'>
                See More
            </a>
        </div>
    </div>
    </>
  );
}

export default Header