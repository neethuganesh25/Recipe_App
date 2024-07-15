import React from 'react';
import FavoriteRecipes from '../components/FavouriteRecipes';

function FavoritesPage({ favoriteRecipes = [], setDeleteRecipeStatus, updateFavoriteCount }) {
  console.log("FavoritesPage - favoriteRecipes: ", favoriteRecipes); // Debugging log

  return (
    <>
   
    <div className="container">
      <h2>Favorite Recipes</h2>
      {favoriteRecipes.length > 0 ? (
       
        <FavoriteRecipes 
          favoriteRecipes={favoriteRecipes} 
          setDeleteRecipeStatus={setDeleteRecipeStatus} 
          updateFavoriteCount={updateFavoriteCount} 
        />
      ) : (
        <p className='mt-5'>No favorite recipes added yet.</p>
      )}
    </div>
    </>  
  );
}

export default FavoritesPage;
