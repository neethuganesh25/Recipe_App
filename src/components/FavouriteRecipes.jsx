import React from 'react';
import RecipeCard from './RecipeCard';

function FavoriteRecipes({ favoriteRecipes, setDeleteRecipeStatus, updateFavoriteCount }) {
  return (
    <div className="row">
      {favoriteRecipes.map((recipe) => (
        <div className="col-md-4" key={recipe.id}>
          <RecipeCard 
            displayRecipe={recipe} 
            setDeleteRecipeStatus={setDeleteRecipeStatus} 
            updateFavoriteCount={updateFavoriteCount} 
          />
        </div>
      ))}
    </div>
  );
}

export default FavoriteRecipes;
