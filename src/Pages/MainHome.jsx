import React, { useEffect, useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import { Link, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import Add from '../components/Add';
import FavoritesPage from '../components/FavoritesPage';
import EditRecipe from '../components/EditRecipe'; 
import { getRecipeApi } from '../../services/allApi';

function MainHome() {
  const [favoriteCount, setFavoriteCount] = useState(0);
  const [recipes, setRecipes] = useState([]);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentRecipe, setCurrentRecipe] = useState(null);

  const updateFavoriteCount = (recipe) => {
    setRecipes(prevRecipes =>
      prevRecipes.map(r =>
        r.id === recipe.id ? { ...r, isFavorite: !r.isFavorite } : r
      )
    );

    setFavoriteRecipes(prevFavorites => {
      const isFavorite = prevFavorites.some(fav => fav.id === recipe.id);
      if (isFavorite) {
        setFavoriteCount(count => Math.max(count - 1, 0));
        return prevFavorites.filter(fav => fav.id !== recipe.id);
      } else {
        setFavoriteCount(count => count + 1);
        return [...prevFavorites, { ...recipe, isFavorite: true }];
      }
    });
  };

  const addNewRecipe = (newRecipe) => {
    setRecipes(prevRecipes => [{ ...newRecipe, isFavorite: false }, ...prevRecipes]);
  };

  const setDeleteRecipeStatus = (status) => {
    if (status) {
      fetchRecipes();
    }
  };

  const fetchRecipes = async () => {
    const result = await getRecipeApi();
    if (result && result.data) {
      const recipesWithFavorite = result.data.map(recipe => ({
        ...recipe,
        isFavorite: favoriteRecipes.some(fav => fav.id === recipe.id)
      }));
      setRecipes(recipesWithFavorite);
    }
  };

  const fetchFavoriteRecipes = async () => {
    const result = await getFavoriteRecipesApi();
    if (result && result.data) {
      setFavoriteRecipes(result.data);
      setFavoriteCount(result.data.length);
    }
  };

  const openEditModal = (recipe) => {
    setCurrentRecipe(recipe);
    setIsEditModalOpen(true);
  };

  const saveUpdatedRecipe = (updatedRecipe) => {
    setRecipes(prevRecipes =>
      prevRecipes.map(r => (r.id === updatedRecipe.id ? updatedRecipe : r))
    );
  };

  useEffect(() => {
    fetchRecipes();
    fetchFavoriteRecipes();
  }, []);

  return (
    <div>
      <Header favoriteCount={favoriteCount} />
      <Routes>
        <Route path="/" element={
          <div>
            <div className='d-flex m-5'>
              <Add setAddStatus={addNewRecipe} />
              <h5 className='text-end' style={{ marginRight: '100px' }}>
                <Link to={'/category'} style={{ textDecoration: 'none', color: 'black' }}>
                  View all Categories
                </Link>
              </h5>
            </div>
            <div className='mx-5'>
              <div className="row">
                {recipes.map((recipe) => (
                  <div className="col-md-4" key={recipe.id}>
                    <RecipeCard 
                      displayRecipe={recipe} 
                      setDeleteRecipeStatus={setDeleteRecipeStatus} 
                      updateFavoriteCount={updateFavoriteCount} 
                      openEditModal={openEditModal} 
                    />
                  </div>
                ))}
              </div>
            </div>
            {isEditModalOpen && (
              <EditRecipe
                recipe={currentRecipe}
                onClose={() => setIsEditModalOpen(false)}
                onSave={saveUpdatedRecipe}
              />
            )}
          </div>
        } />
        <Route path="/favorites" element={
          <FavoritesPage 
            favoriteRecipes={favoriteRecipes} 
            setDeleteRecipeStatus={setDeleteRecipeStatus} 
            updateFavoriteCount={updateFavoriteCount} 
          />
        } />
      </Routes>
    </div>
  );
}

export default MainHome;
