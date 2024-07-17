import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { deleteRecipeApi } from '../../services/allApi';

function RecipeCard({ displayRecipe, setDeleteRecipeStatus, openEditModal }) {
  const [lgShow, setLgShow] = useState(false);

  const handleDelete = async (id) => {
    const result = await deleteRecipeApi(id);
    if (result.status >= 200 && result.status < 300) {
      setDeleteRecipeStatus(true);
    }
  };

  return (
    <>
      <Card style={{ width: '90%', height: '60vh' }} className='my-5'>
        <Card.Img variant="top" onClick={() => setLgShow(true)} src={displayRecipe?.RecipeImg} style={{ width: '100%', height: '90vh' }} />
        <Card.Body>
          <Card.Title>{displayRecipe?.RecipeName}</Card.Title>
          <div className='d-flex justify-content-between'>
            <Button variant="outline-primary" className='w-25' onClick={() => handleDelete(displayRecipe?.id)}>
              <FontAwesomeIcon icon={faTrash} />
            </Button>
            <Button variant="outline-info" className='w-25' onClick={() => openEditModal(displayRecipe)}>
              <FontAwesomeIcon icon={faPenToSquare} />
            </Button>
          </div>
        </Card.Body>
      </Card>

      <Modal size="lg" show={lgShow} onHide={() => setLgShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{displayRecipe?.RecipeName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-6">
              <img src={displayRecipe?.RecipeImg} height={'300px'} width={'100%'} />
            </div>
            <div className="col-md-6">
              <h4>Cooking Instructions:</h4>
              <p>{displayRecipe?.Description}</p>
              <h6>Video Link: {displayRecipe?.url}</h6>
            </div>
            <div className="col-md-12">
              <h4>Ingredients:</h4>
              <p>{displayRecipe?.Ingredients}</p>
              <iframe width="760" height="487" src={displayRecipe?.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setLgShow(false)} className='w-100'>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default RecipeCard;
