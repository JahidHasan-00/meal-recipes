import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipe from '../Recipe/Recipe';

const Recipes = () => {
    const recipes = useLoaderData();
    // console.log(recipes);
    const recipeCategories = recipes.categories;
    // console.log(recipeCategories);

    return (
        <div>
            <h2>Recipes: {recipeCategories.length}</h2>
            <div className='grid grid-cols-3'>
                {
                    recipeCategories.map(recipe => <Recipe key={recipe.idCategory}
                    recipe={recipe}></Recipe>)
                }
            </div>
        </div>
    );
};

export default Recipes;