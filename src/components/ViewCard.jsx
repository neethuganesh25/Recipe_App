import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function ViewCard({ recipes = [], updateFavoriteStatus }) {
  return (
    <div className="row">
      {recipes.map((recipe) => (
        <div className="col-md-4" key={recipe.id}>
          <div className="card mb-4 shadow-sm">
            <img src={recipe.RecipeImg} className="card-img-top" alt={recipe.RecipeName} />
            <div className="card-body">
              <h5 className="card-title">{recipe.RecipeName}</h5>
              <p className="card-text">{recipe.Description}</p>
              <div className="d-flex justify-content-between align-items-center">
                <FontAwesomeIcon
                  icon={faHeart}
                  onClick={() => updateFavoriteStatus(recipe)}
                  className={recipe.isFavorite ? 'text-danger' : 'text-secondary'}
                />
                <small className="text-muted">{recipe.Category}</small>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ViewCard;
