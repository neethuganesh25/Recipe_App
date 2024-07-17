import { faPenToSquare, faTrash, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Card, Modal, Button } from 'react-bootstrap';
import { deleteRecipeApi } from '../../services/allApi';
import { Link } from 'react-router-dom';

function RecipeCard({ displayRecipe, setDeleteRecipeStatus, openEditModal }) {
  const [lgShow, setLgShow] = useState(false);

  const handleDelete = async (id) => {
    const result = await deleteRecipeApi(id);
    console.log(result);
    if (result.status >= 200 && result.status < 300) {
      setDeleteRecipeStatus(result.data);
    }
  };

  return (
    <>
      <Card style={{ width: '90%', height: '60vh' }} className='my-5'>
        <Card.Img
          variant="top"
          onClick={() => setLgShow(true)}
          src={displayRecipe?.RecipeImg}
          style={{ width: '100%', height: '90vh' }}
        />
        <Card.Body>
          <Card.Title>{displayRecipe?.RecipeName}</Card.Title>
          <div className='d-flex justify-content-between'>
            <Button
              variant="outline-primary"
              className='w-25'
              onClick={() => handleDelete(displayRecipe?.id)}
            >
              <FontAwesomeIcon icon={faTrash} />
            </Button>
            <Button
              variant="outline-info"
              className='w-25'
              onClick={() => openEditModal(displayRecipe)}
            >
              <FontAwesomeIcon icon={faPenToSquare} />
            </Button>
          </div>
        </Card.Body>
      </Card>

      <Card style={{ width: '90%' }} className='my-5'>
        <Card.Img
          variant="top"
          onClick={() => setLgShow(true)}
          src={displayRecipe?.RecipeImg}
          width={'100%'}
          height={'300px'}
          className='p-3 rounded '
        />
        <Card.Body>
          <Card.Title>{displayRecipe?.RecipeName}</Card.Title>
          <div className='d-flex justify-content-between'>
            <Button
              variant="outline-primary me-3 w-25"
              onClick={() => handleDelete(displayRecipe?.id)}
            >
              <FontAwesomeIcon icon={faTrash} />
            </Button>
            <Button variant="outline-info me-3 w-25">
              <Link to={`/EditRecipe/${displayRecipe?.id}`}>
                <FontAwesomeIcon icon={faPenToSquare} />
              </Link>
            </Button>
            <Button variant="outline-success w-25">
              <FontAwesomeIcon icon={faHeart} />
            </Button>
          </div>
        </Card.Body>
      </Card>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            {displayRecipe?.RecipeName}
            <p className='fs-4'>Category: {displayRecipe?.Category}</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-6">
              <img src={displayRecipe?.RecipeImg} height={'300px'} width={'100%'} />
            </div>
            <div className="col-md-6">
              <h4>Cooking Instructions:</h4>
              <p className='p-2' style={{ textAlign: 'justify' }}>
                {displayRecipe?.Description}
                <h6 className='mt-3'> Video Link: {displayRecipe?.url}</h6>
              </p>
            </div>
            <div className="col-md-12">
              <h4>Ingredients:</h4>
              <p>{displayRecipe?.Ingredients}</p>
              <iframe
                width="760"
                height="487"
                src={displayRecipe?.url}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
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
