import React from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

const Recipe = ({recipe}) => {
    // console.log(recipe);
    const {idMeal ,strMeal, strMealThumb, strCategory} = recipe;
    // console.log(idMeal);
    const navigate = useNavigate();

    const handleShowDetails = () =>{
        navigate(`/recipes/${idMeal}`);
    }

    return (
        <div className='m-2 p-3 border-2 rounded-lg border-blue-100'>
            <div className="card bg-blue-100 h-[600px]">
                    <figure><img src={strMealThumb} alt="recipe_img" /></figure>
                    <div className="card-body px-0 items-center space-y-4">
                        <h2 className='text-lg font-semibold'><span className='border-b-2 border-dotted border-black'>Meal_Id</span>: {idMeal}</h2>
                        <h2 className="text-xl font-semibold"><span className='border-b-2 border-dotted border-black'>Recipe_Name</span>: <span className='text-amber-800'>{strMeal}</span></h2>
                        <h3 className='text-lg font-medium'><span className='border-b-2 border-dotted border-black'>Recipe_Category</span>: ({strCategory})</h3>
                        <div className="card-actions flex-col items-center">
                            <button onClick={handleShowDetails} className='btn btn-primary'>Click to show details</button>
                        </div>
                    </div>
            </div>
        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired
};

export default Recipe;