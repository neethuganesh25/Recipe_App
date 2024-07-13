import { faHeart, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { deleteRecipeApi } from '../../services/allApi';


function RecipeCard({ displayRecipe, onDelete }) {
  const [lgShow, setLgShow] = useState(false);




function RecipeCard({displayRecipe,setDeleteRecipeStatus}) {

  const [lgShow, setLgShow] = useState(false);
    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    const handleDelete=async(id)=>{
      const result=await deleteRecipeApi(id)
      console.log(result);
      if(result.status >=200 && result.status <300){
        setDeleteRecipeStatus(result.data)
      }


  const handleDelete = async (id) => {
    const result = await deleteRecipeApi(id);
    if (result.status >= 200 && result.status < 300) {
      onDelete(id);  // Call the onDelete prop to notify parent
    }
  };

  return (
    <>
      <Card style={{ width: '90%' }} className='my-5'>
        <Card.Img variant="top" onClick={() => setLgShow(true)} src={displayRecipe?.RecipeImg} width={'100%'} height={'300px'} className='p-3 rounded' />
        <Card.Body>
          <Card.Title>{displayRecipe?.RecipeName}</Card.Title>
          <div className='d-flex justify-content-between'>
            <Button variant="outline-primary me-3 w-25" onClick={() => handleDelete(displayRecipe?.id)}>
              <FontAwesomeIcon icon={faTrash} />
            </Button>
            <Button variant="outline-info me-3 w-25"><FontAwesomeIcon icon={faPenToSquare} /></Button>
            <Button variant="outline-success w-25"><FontAwesomeIcon icon={faHeart} /></Button>
          </div>
        </Card.Body>
      </Card>


      <Modal>


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
              <p className='p-2' style={{ textAlign: 'justify' }}>{displayRecipe?.Description}
                <h6 className='mt-3'> Video Link: {displayRecipe?.url}</h6>
              </p>
            </div>
            <div className="row">
              <div className="col-md-12">
                <h4>Ingredients:</h4>
                <p>{displayRecipe?.Ingrediants}</p>
                <div className='p-2 ms-4'>
                  <iframe width="866" height="487" src={displayRecipe.url} title="Recipe Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default RecipeCard;
