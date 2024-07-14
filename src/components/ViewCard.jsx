import React, { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard';
import { Col, Row } from 'react-bootstrap';
import { getRecipeApi } from '../../services/allApi';

function ViewCard({ addStatus }) {
  const [recipeDetails, setRecipeDetails] = useState([]);

  const getRecipe = async () => {
    const result = await getRecipeApi();
    setRecipeDetails(result.data);
  };

  useEffect(() => {
    getRecipe();
  }, [addStatus]);

  const handleDelete = (id) => {
    // Update the state immediately to remove the deleted recipe
    setRecipeDetails((prevRecipes) => prevRecipes.filter(recipe => recipe.id !== id));
  };

  return (
    <>
      <Row className='ms-md-0 w-100'>
        {recipeDetails.length > 0 ? (
          recipeDetails.map((item) => (
            <Col xs={12} md={6} lg={4} xl={3} className='d-flex align-items-center justify-content-center' key={item.id}>
              <RecipeCard displayRecipe={item} onDelete={handleDelete} />
            </Col>
          ))
        ) : (
          <p className='fs-3 mt-4 text-info text-center'>No Recipe Uploaded</p>
        )}
      </Row>
    </>
  );
}

export default ViewCard;