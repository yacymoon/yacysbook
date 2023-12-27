import React from 'react'
import { Filter } from './Filter'

export const FilterSection = () => {

  return (
    <div id='category'>
        <div className='flex flex-col md:flex-row gap-x-12 items-center justify-center mt-14'>
            <div className='w-[85%] md:w-[35%] flex flex-col items-center justify-center text-center md:text-start mb-4 md:mb-1'>
                <h1 className='font-base font-semibold text-4xl md:text-5xl tracking-wider mb-4'>Are you craving something today?</h1>
                <p className='text-xl font-thin'>Explore and find your ideal meal using our filter, search by
                  <span className='text-green font-extralight'> ingredients</span> or <span className='text-green font-extralight'>category</span>. Start now!</p>
            </div>
            <Filter />
        </div>
    </div>
  )
}