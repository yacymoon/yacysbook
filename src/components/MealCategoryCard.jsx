import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { RiCheckLine } from "react-icons/ri";
import { VscDebugRestart } from "react-icons/vsc";

export const MealCategoryCard = ({ src, category }) => {

    const [hover, setHover] = useState(false);
    const selectedTypeOfMeals = useSelector(state => state.filter.typeOfMeal);
    const isCategorySelected = selectedTypeOfMeals === category;

    return (
        <>
            <div
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className='bg-gray-200/80 w-40 relative text-center cursor-pointer pb-0.5'>
                <img
                    src={src}
                    className={`w-32 h-32 object-cover shadow-lg rounded-full absolute top-[-70px] right-3.5 border-[6px] border-white ${hover && 'scale-110 transition-all duration-150'}`}
                />
                {isCategorySelected && <div
                    className={`flex justify-center items-center w-[116px] h-[116px] bg-green text-white opacity-60 rounded-full absolute top-[-64px] right-5 ${hover && 'scale-110 transition-all duration-150'}`}>
                    <VscDebugRestart className='text-4xl'/>
                </div>}
                <div className='h-16'></div>
                <h3 className='font-alt font-medium text-gray-600 text-lg mt-1'>{category}</h3>
                <p className='font-alt font-thin mb-3 text-green'>See All</p>
            </div>
        </>
    );
}
