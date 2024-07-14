import { React, useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { RiCheckLine } from "react-icons/ri";
import { TfiClose } from "react-icons/tfi";

export const RecipePopUp = ({ children, recipeInfo }) => {

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const [filter, setFilter] = useState([]);

  const handleClick = (e, value) => {
    e.preventDefault();
    let updatedFilter = [...filter];

    if (updatedFilter.includes(value)) {
      updatedFilter = updatedFilter.filter(
        (item) => item !== value
      );
    } else {
      updatedFilter = [...updatedFilter, value];
    }
    setFilter(updatedFilter);
  };

  return (
    <>
      <div onClick={() => setOpen(true)}>{children}</div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as='div'
          className='relative z-20 w-10 h-10'
          onClose={handleClose}
        >
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity ' />
          </Transition.Child>

          <div className='fixed inset-0 z-10 overflow-y-auto mx-0 sm:mx-12 md:mx-20 hide-scrollbar'>
            <div className='flex h-full justify-center lg:p-4 text-center items-end sm:pt-0 sm:items-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                enterTo='opacity-100 translate-y-0 sm:scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              >
                <div className='h-[80%] relative'>
                  <button onClick={handleClose}
                    className='bg-green rounded-full text-white h-9 w-9 flex items-center justify-center focus:outline-none absolute right-1.5 top-1.5 sm:right-[-8px] sm:top-5 z-50'>
                      <TfiClose className=''/>
                  </button>
                  <Dialog.Panel className='relative h-full overflow-y-auto transform hide-scrollbar rounded-t-3xl sm:rounded-2xl bg-white text-left shadow-xl transition-all px-4 sm:px-7 py-2 mt-[5%] w-full lg:w-[700px]'>
                    {recipeInfo &&
                      <div className='my-0 z-10'>
                        <p className='pb-6 pt-5 text-green font-semibold font-base text-5xl border-b border-b-gray-500'>{recipeInfo.title}</p>
                        <div className='relative'>
                          <p className='bg-green rounded-full text-white text-sm absolute left-2 top-3 w-[100px] h-6 flex justify-center items-center'>Difficulty: {recipeInfo.difficulty}</p>
                          <img alt={recipeInfo.title}
                              src={recipeInfo.src}
                              className='w-full h-64 sm:h-52 object-cover my-6 rounded-xl'
                          />
                        </div>
                        <div className='my-4 flex flex-col gap-y-3 text-left sm:w-full h-full'>
                          <div>
                            <p className='font-alt font-medium text-lg text-green mb-2'>
                              Ingredients:
                            </p>
                            <ul className='grid grid-cols-2 gap-y-0.5'>
                              {recipeInfo.ingredients.split(', ').map((ingredient, index) => (
                                <li key={index} className='text-gray-600 text-lg flex'>
                                  <div
                                    onClick={(e) => handleClick(e, ingredient)}
                                    className={`relative cursor-pointer h-3.5 w-3.5 border border-gray-300 mr-1.5 mt-[0.45rem] z-10
                                    ${filter.includes(ingredient) ? "bg-green" : "bg-white" }`}>
                                    <RiCheckLine
                                      className={`absolute h-4 top-[-2px] left-[-3px] z-20
                                      ${filter.includes(ingredient) ? "text-white" : "text-gray-400" }`}
                                    />
                                  </div>
                                  <label htmlFor={`ingredient-${index}`}>{ingredient}</label>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <p className='font-alt font-medium text-gray-600 text-lg pt-1'>- {recipeInfo.recipe}</p>
                          <a href={recipeInfo.link} target="_blank" rel="noopener noreferrer" className='text-green font-light pt-2'>
                            Click here to see the recipe video
                          </a>
                        </div>
                      </div>
                    }
                  </Dialog.Panel>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};
