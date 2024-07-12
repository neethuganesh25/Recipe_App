import React from 'react';

function ViewCard({ recipe }) {
  if (!recipe) {
    return null;
  }

  const { RecipeImg, RecipeName, Description, url } = recipe;

  return (
    <div className="recipe-card">
      {RecipeImg && <img src={RecipeImg} alt={RecipeName} />}
      <h3>{RecipeName || 'No Recipe Name'}</h3>
      <p>{Description || 'No Description Available'}</p>
      {url && (
        <a href={url} target="_blank" rel="noopener noreferrer">
          Watch Recipe
        </a>
      )}
    </div>
  );
}

export default ViewCard;
