import { Fragment } from "react";
import { RiArrowDownSLine, RiCheckLine } from "react-icons/ri";

import { Menu, Transition } from "@headlessui/react";

import { useDispatch, useSelector } from 'react-redux';
import { setCategory, setIngredients, setTypeOfMeal, resetIngredients} from "../app/FilterSlice";

export const Filter = () => {
  const CATEGORY = [
    "Sweet",
    "Savory",
  ];
  const INGREDIENTS = [
    "Alcohol", "Avocado", "Bacon", "Banana", "Biscuit", "Bread", "Broccoli", "Carrot", "Cheese", "Chicken",
    "Chocolate", "Cinnamon", "Coffee", "Condensed Milk", "Corn Rice", "Cornflake", "Cornflour", "Cucumber",
    "Egg", "Flour", "Grape", "Greek Yogurt", "Gelatin", "Ham", "Kiwi", "Lettuce", "Meat", "Milk", "Milk Powder",
    "Mustard", "Noodles", "Oat", "Peanut Butter", "Pepperoni", "Potato", "Rice", "Salmon", "Sausage",
    "Shrimp", "Sour Cream", "Soy Sauce", "Spaghetti", "Strawberry", "Tomato", "Tomato Sauce", "Tortilla",
    "Whey", "Whipped Cream"
  ];

  const dispatch = useDispatch();
  const filterState = useSelector(state => state.filter);

  const handleFilterChange = (e, filterType, value) => {
    e.preventDefault();
    if (filterType === 'category') {
      dispatch(setCategory(value));
    } else if (filterType === 'ingredients') {
      dispatch(setIngredients(value));
    }
    dispatch(setTypeOfMeal(null));
  };

  const handleResetIngredients = () => {
    dispatch(resetIngredients());
  };

  return (
    <div className="sm:pt-2">
      <div className="bg-transparent py-4 lg:py-6 flex flex-col gap-y-4 place-items-center justify-between bg-slate-50 mx-2 md:mx-0 lg:mx-[3%] xl:mx-[9%]">
        <Menu
          as="div"
          className="text-left mb-2.5 sm:mb-0 sm:py-1 relative rounded-lg border border-green w-80 md:w-[230px] ring-0"
        >
          <Menu.Button className="relative cursor-pointer">
            <h6 className="text-base w-80 md:w-[215px] text-start ml-2 mt-1 font-semibold text-gray-700">
              By Category
            </h6>
            <RiArrowDownSLine className="absolute top-2 right-4 md:right-0.5 h-5 w-5 text-primary" />
            <p className="text-start mt-0 ml-2.5 text-gray-500 text-sm mb-1">
              {
                filterState.category.length === CATEGORY.length || filterState.category.length === 0
                  ? "All"
                  : filterState.category.join(", ")
              }
            </p>
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="opacity-0 translate-y-0"
            enterTo="opacity-100 translate-y-1"
            leave="transition ease-in duration-75"
            leaveFrom="opacity-100 translate-y-1"
            leaveTo="opacity-0 translate-y-0"
          >
            <Menu.Items className="z-20 bg-[#f4f4f5] origin-top-right absolute top-7 left-[-1px] w-80 md:w-[230px] rounded-b-md shadow-lg border-x border-green border-b divide-y divide-gray-100 focus:outline-none">
              <div className="py-1 gap-y-1 ml-3 flex flex-col">
              {CATEGORY.map((category) => (
                <Menu.Item key={category}>
                  <div
                    className="flex cursor-pointer gap-x-1.5"
                    onClick={(e) => handleFilterChange(e, 'category', category)}
                  >
                    <div
                      className={`relative h-3 w-3 border border-green mt-1 z-10 ${
                        filterState.category.includes(category)
                          ? "bg-green"
                          : "bg-white"
                      }`}
                    >
                      <RiCheckLine
                        className={`absolute h-3 top-[-1px] left-[-3px] z-20 ${
                          filterState.category.includes(category)
                            ? "text-white"
                            : "text-gray-300"
                        }`}
                      />
                    </div>
                    <p className="text-gray-700 text-sm">
                      {category}
                    </p>
                  </div>
                </Menu.Item>
              ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        <Menu
          as="div"
          className="text-left mb-2.5 sm:mb-0 sm:py-1 relative rounded-lg border border-green w-80 md:w-[230px] ring-0"
        >
          <Menu.Button className="relative cursor-pointer">
            <h6 className="text-base w-80 md:w-[215px] text-start ml-2 mt-1 font-semibold text-gray-700">
              By Ingredients
            </h6>
            <RiArrowDownSLine className="absolute top-2 right-4 md:right-0.5 h-5 w-5 text-primary" />
            <p className="text-start mt-0 ml-2.5 text-gray-500 text-sm mb-1">
              {
                filterState.ingredients.length > 0
                  ? (filterState.ingredients.length === 1
                      ? filterState.ingredients[0]
                      : filterState.ingredients[0] + ", " + filterState.ingredients[1] + "..."
                    )
                  : "All"
              }
            </p>
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="opacity-0 translate-y-0"
            enterTo="opacity-100 translate-y-1"
            leave="transition ease-in duration-75"
            leaveFrom="opacity-100 translate-y-1"
            leaveTo="opacity-0 translate-y-0"
          >
            <Menu.Items className="z-20 bg-[#f4f4f5] origin-top-right absolute top-7 left-[-1px] w-80 md:w-[230px] py-1 rounded-b-md shadow-lg border-x border-green border-b divide-y divide-gray-100 focus:outline-none">
              <div className="flex justify-center py-1.5" onClick={handleResetIngredients}>
                <p className="text-xs text-white text-center w-[110px] py-1 bg-green rounded-sm cursor-pointer">Clear ingredients</p>
              </div>
              <div className="py-1 ml-3 grid grid-cols-2 gap-y-1">
              {INGREDIENTS.map((ingredients) => (
                <Menu.Item key={ingredients}>
                  <div
                    className="flex cursor-pointer gap-x-1.5"
                    onClick={(e) => handleFilterChange(e, 'ingredients', ingredients)}
                  >
                    <div
                      className={`relative h-3 w-3 border border-green mt-1 z-10 ${
                        filterState.ingredients.includes(ingredients)
                          ? "bg-green"
                          : "bg-white"
                      }`}
                    >
                      <RiCheckLine
                        className={`absolute h-3 top-[-1px] left-[-3px] z-20 ${
                          filterState.ingredients.includes(ingredients)
                            ? "text-white"
                            : "text-gray-300"
                        }`}
                      />
                    </div>
                    <p className="text-gray-700 text-sm">
                      {ingredients}
                    </p>
                  </div>
                </Menu.Item>
              ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};
