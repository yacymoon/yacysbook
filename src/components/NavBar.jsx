import React, { useEffect, useState } from 'react'

export const NavBar = () => {

    const [navState, setNavState] = useState(false);

    const onNavScroll = () => {
        if(window.scrollY > 30) {
            setNavState(true);
        } else {
            setNavState(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', onNavScroll)

        return () => {
            window.removeEventListener('scroll', onNavScroll)
        }
    }, []);

  return (
    <>
        <header className={!navState ? 'absolute text-white top-8 left-0 right-0 opacity-100 z-50' : 'fixed text-black top-0 left-0 right-0 h-[8vh] flex flex-col justify-center opacity-100 z-[200] blur-effect-theme'}>
            <nav className='flex items-center justify-between md:w-11/12 mx-[5%] md:m-auto'>
                <div className='flex items-center md:ml-10'>
                    <a href='#home'>
                        <p className='font-logo uppercase font-bold text-xl md:text-2xl cursor-pointer'>YACY'S BOOK</p>
                    </a>
                </div>
                <ul className='flex items-center font-extralight justify-center gap-5 text-lg md:mr-10'>
                   <a href='#recipes'>
                    <li className='grid items-center'>
                        <p className='hover:scale-105 hover:transition-all hover:duration-150 hover:font-light cursor-pointer'>Recipes</p>
                    </li>
                    </a>
                    <p>|</p>
                   <a href='#category'>
                    <li className='grid items-center'>
                        <p className='hover:scale-105 hover:transition-all hover:duration-150 hover:font-light cursor-pointer'>Categories</p>
                    </li>
                    </a>
                </ul>
            </nav>
        </header>
    </>
  )
}