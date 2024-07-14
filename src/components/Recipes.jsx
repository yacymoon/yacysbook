import { React, useState } from 'react';
import { useSelector } from 'react-redux';

import { RecipeCard } from './RecipeCard';
import { RecipePopUp } from './RecipePopUp';

import { recipes } from '../data/recipes';

export const Recipes = () => {
  const [recipeInfo, setRecipeInfo] = useState(null);
  const selectedCategories = useSelector(state => state.filter.category);
  const selectedIngredients = useSelector(state => state.filter.ingredients);
  const selectedTypeOfMeals = useSelector(state => state.filter.typeOfMeal);

  const filteredRecipes = recipes.filter(recipe => {
    const isTypeOfMealFilterActive = selectedTypeOfMeals && selectedTypeOfMeals.length > 0;

    if (isTypeOfMealFilterActive) {
      return selectedTypeOfMeals.includes(recipe.meal);
    }

    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(recipe.category);
    const ingredientMatch = selectedIngredients.length === 0 || selectedIngredients.some(ingredient => recipe.keyWords.includes(ingredient));

    return categoryMatch && ingredientMatch;
  });

  const typeOfMeal = selectedTypeOfMeals && (selectedTypeOfMeals.length > 0 ? selectedTypeOfMeals : null)

  return (
    <div id='recipes'
    className='flex flex-col items-center justify-center mt-52 md:mt-8 md:mx-[10%]'>
      <h1 className='font-base font-semibold text-3xl md:text-5xl tracking-wider mb-10'>
        {typeOfMeal && typeOfMeal.length > 1 ? ("All " + typeOfMeal) : ("All Recipes")}
      </h1>
      {filteredRecipes.length > 0 ? (
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-8 gap-x-6 md:gap-x-12'>
          {filteredRecipes.map((recipe) => (
              <RecipePopUp recipeInfo={recipeInfo} key={recipe.id}>
                <div onClick={() => setRecipeInfo(recipe)}>
                  <RecipeCard
                    src={recipe.src}
                    title={recipe.title}
                    ingredients={recipe.ingredients}
                    category={recipe.category}
                    difficulty={recipe.difficulty}
                  />
                </div>
              </RecipePopUp>
          ))}
        </div>
      ) : (
        <p className='text-xl text-gray-500 my-14 w-[70%] text-center'>Recipe not found, try to adjust your filter</p>
      )}
    </div>
  );
};
