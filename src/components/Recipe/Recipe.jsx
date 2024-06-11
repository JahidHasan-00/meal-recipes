import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Recipe = ({recipe}) => {
    // console.log(recipe);
    const {idMeal ,strMeal, strMealThumb, strCategory} = recipe;
    // console.log(idMeal);
    return (
        <div className='m-2 p-3 border-2 rounded-lg border-yellow-400'>
            <div className="card bg-blue-100">
                    <figure><img src={strMealThumb} alt="recipe_img" /></figure>
                    <div className="card-body px-0 items-center">
                        <h2 className='text-lg font-semibold'><span className='border-b-2 border-dotted border-black'>Meal_Id</span>: {idMeal}</h2>
                        <h2 className="text-xl font-semibold"><span className='border-b-2 border-dotted border-black'>Recipe_Name</span>: <span className='text-amber-800'>{strMeal}</span></h2>
                        <h3 className='text-lg font-medium'><span className='border-b-2 border-dotted border-black'>Recipe_Category</span>: ({strCategory})</h3>
                        <div className="card-actions">
                            <Link to={`${idMeal}`}><button className="btn btn-primary">Show Details</button></Link>
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