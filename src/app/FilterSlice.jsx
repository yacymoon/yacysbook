import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    category: [],
    ingredients: [],
    typeOfMeal: null,
};

const FilterSlice = createSlice({
    initialState,
    name: "filter",
    reducers: {
        setCategory: (state, action) => {
          const categoryIndex = state.category.indexOf(action.payload);
            if (categoryIndex >= 0) {
                state.category.splice(categoryIndex, 1);
            } else {
                state.category.push(action.payload);
            }
        },
        setIngredients: (state, action) => {
          const ingredientsIndex = state.ingredients.indexOf(action.payload);
          if (ingredientsIndex >= 0) {
              state.ingredients.splice(ingredientsIndex, 1);
          } else {
              state.ingredients.push(action.payload);
          }
        },
        setTypeOfMeal: (state, action) => {
            if (state.typeOfMeal === action.payload) {
                state.typeOfMeal = null;
            } else {
                state.typeOfMeal = action.payload;
            }
        },
        resetIngredients: (state) => {
            state.ingredients = [];
        },
    }
});

export const {
    setCategory,
    setIngredients,
    setTypeOfMeal,
    resetIngredients,
  } = FilterSlice.actions;

export default FilterSlice.reducer;