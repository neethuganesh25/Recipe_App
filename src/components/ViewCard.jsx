import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function ViewCard({ recipes }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleCardClick = (recipe) => {
    setSelectedRecipe(recipe);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedRecipe(null);
  };

  return (
    <>
      <div className="row">
        {recipes.map((recipe) => (
          <div className="col-md-3 mb-4" key={recipe.id}>
            <Card onClick={() => handleCardClick(recipe)}>
              <Card.Img variant="top" src={recipe.RecipeImg} />
              <Card.Body>
                <Card.Title>{recipe.RecipeName}</Card.Title>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      {selectedRecipe && (
        <Modal show={showModal} onHide={handleCloseModal} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>{selectedRecipe.RecipeName}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-md-6">
                <img src={selectedRecipe.RecipeImg} height="300px" width="100%" alt={selectedRecipe.RecipeName} />
              </div>
              <div className="col-md-6">
                <h4>Cooking Instructions:</h4>
                <p>{selectedRecipe.Description}</p>
                <h6>Video Link: {selectedRecipe.url}</h6>
              </div>
              <div className="col-md-12">
                <h4>Ingredients:</h4>
                <p>{selectedRecipe.Ingredients}</p>
                <iframe width="100%" height="300" src={selectedRecipe.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}

export default ViewCard;
