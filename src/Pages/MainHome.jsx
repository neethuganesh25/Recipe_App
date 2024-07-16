import React, { useEffect, useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import { Link, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import Add from '../components/Add';
import EditRecipe from '../components/EditRecipe'; 
import { getRecipeApi } from '../../services/allApi';

function MainHome() {
  const [recipes, setRecipes] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentRecipe, setCurrentRecipe] = useState(null);

  const addNewRecipe = (newRecipe) => {
    setRecipes(prevRecipes => [newRecipe, ...prevRecipes]);
  };

  const setDeleteRecipeStatus = (status) => {
    if (status) {
      fetchRecipes();
    }
  };

  const fetchRecipes = async () => {
    const result = await getRecipeApi();
    if (result && result.data) {
      setRecipes(result.data);
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
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={
          <div>
            <div className='d-flex m-5'>
              <Add setAddStatus={addNewRecipe} />
              <h5 className='text-end ms-auto' style={{ marginRight: '100px' }}>
                <Link to={'/category'} style={{ textDecoration: 'none', color: 'black' }}>
                  View all Categories
                </Link>
              </h5>
            </div>
            <div className='mx-5'>
              <div className="row">
                {recipes.map((recipe) => (
                  <div className="col-md-3 " key={recipe.id}>
                    <RecipeCard 
                      displayRecipe={recipe} 
                      setDeleteRecipeStatus={setDeleteRecipeStatus} 
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
      </Routes>
    </div>
  );
}

export default MainHome;
