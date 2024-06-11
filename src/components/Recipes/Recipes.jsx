import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipe from '../Recipe/Recipe';

const Recipes = () => {
    const recipes = useLoaderData();
    // console.log(recipes);
    const recipeMeals = recipes.meals;
    // console.log(recipeMeals);

    return (
        <div>
            <h2>Recipes: {recipeMeals.length}</h2>
            <div className='grid grid-cols-3'>
                {
                    recipeMeals.map(recipe => <Recipe key={recipe.idMeal}
                    recipe={recipe}></Recipe>)
                }
            </div>
        </div>
    );
};

export default Recipes;