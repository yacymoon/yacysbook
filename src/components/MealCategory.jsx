import React from 'react'
import { useDispatch } from 'react-redux';
import { setTypeOfMeal } from "../app/FilterSlice";

import { MealCategoryCard } from './MealCategoryCard';

export const MealCategory = () => {

    const dispatch = useDispatch();
    const handleMealCategory = (e, typeOfMeal) => {
        e.preventDefault();
        dispatch(setTypeOfMeal(typeOfMeal));
    }

    return (
        <div>
            <div className='h-56 grid grid-cols-2 md:grid-cols-4 place-items-center md:mx-[10%] gap-y-28 mt-[90px] md:mt-20'>
                <div onClick={(e) => handleMealCategory(e, 'Desserts')}>
                    <MealCategoryCard src={'https://img.elo7.com.br/product/zoom/3BA98FB/bombom-de-morango-bombons.jpg'} category={'Desserts'}/>
                </div>
                <div onClick={(e) => handleMealCategory(e, 'Lunchs')}>
                    <MealCategoryCard src={'https://images.unsplash.com/photo-1570549986390-6bd150ac3515?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1256&q=80'} category={'Lunchs'}/>
                </div>
                <div onClick={(e) => handleMealCategory(e, 'Snacks')}>
                    <MealCategoryCard src={'https://t1.uc.ltmcdn.com/pt/posts/6/6/5/como_fazer_esfiha_aberta_11566_600_square.jpg'} category={'Snacks'}/>
                </div>
                <div onClick={(e) => handleMealCategory(e, 'Drinks')}>
                    <MealCategoryCard src={'https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80'} category={'Drinks'}/>
                </div>
            </div>
        </div>
    );
}
