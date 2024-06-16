import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const ShowDetails = () => {
    const singleRecipeDetails = useLoaderData();
    // console.log(singleRecipeDetails);
    const [meal] = singleRecipeDetails.meals;
    // console.log(meal);
    const {idMeal, strMeal, strCategory, strArea, strMealThumb, strInstructions} = meal;
    //
    const back = useNavigate();
    const handleBack = () =>{
        back(-1);
    }
    return (
        <div className='flex justify-center w-2/5 mx-auto m-4 px-3 py-2 border-2 rounded-lg border-blue-100'>
            <div className="card w-[465px] bg-blue-100 ">
                <figure><img src={strMealThumb} alt="recipe_image"/></figure>
                <div className="card-body space-y-4">
                    <h2 className='text-lg font-semibold'>Meal_Id: {idMeal}</h2>
                    <h2 className="text-xl font-semibold"><span className='border-b-2 border-dotted border-black'>Recipe_Name</span>: {strMeal}</h2>
                    <h2 className='text-lg font-semibold'><span className='border-b-2 border-dotted border-black'>Recipe_Category</span>: {strCategory}</h2>
                    <h2 className='text-lg font-semibold'><span className='border-b-2 border-dotted border-black'>Area</span>: {strArea}</h2>
                    <p><span className='text-base font-medium border-b-2 border-dotted border-black'>Instructions</span>: {strInstructions}</p>
                    <p><span className='text-base font-medium border-b-2 border-dotted border-black'>Source</span>: {meal?.strSource}</p>
                    <div>
                        <button onClick={handleBack} className="btn btn-neutral hover:bg-black text-xl px-7">Back</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowDetails;