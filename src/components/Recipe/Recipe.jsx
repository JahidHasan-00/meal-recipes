import React from 'react';
import PropTypes from 'prop-types';

const Recipe = ({recipe}) => {
    console.log(recipe);
    const {strCategory, strCategoryThumb} = recipe;
    return (
        <div className='m-2 p-3 border-2 rounded-lg border-yellow-400'>
            <div className="card bg-base-100">
                    <figure><img src={strCategoryThumb} alt="recipe_img" /></figure>
                    <div class="card-body items-center">
                        <h2 className="card-title">{strCategory}</h2>
                        <div className="card-actions">
                            <button className="btn btn-primary">Show Details</button>
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