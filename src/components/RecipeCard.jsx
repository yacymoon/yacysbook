import { React, useState} from 'react';

export const RecipeCard = ({ src, title, ingredients, category }) => {

    return (
        <div className='relative bg-white w-40 lg:w-44 p-2 cursor-pointer hover:scale-110 hover:transition-all hover:duration-150 shadow-sm'>
            <p className='bg-green rounded-full text-white text-xs h-4 w-12 flex items-center justify-center focus:outline-none absolute left-3.5 top-4 sm:right-[-8px]'>
                {category}
            </p>
            <img
                src={src}
                className='w-40 h-40 lg:w-40 lg:h-40 object-cover mb-2'
            />
            <div className='flex flex-col gap-y-0.5'>
                <p className='font-alt font-medium text-gray-600 text-xs'>Difficulty:</p>
                <h3 className='font-base text-lg text-green font-semibold'>
                    {title.length > 17 ?
                        title.substring(0, 15) + '...' : title}
                </h3>
                <p className='font-alt font-medium text-gray-600 text-xs'>Ingredients: {ingredients.substring(0, 10)}...</p>
            </div>
        </div>
    )
}