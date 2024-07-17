<<<<<<< HEAD
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
=======
import { faHeart, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
>>>>>>> 768be9348633ce2fa4b99f86dcc0ac7dee4e2762
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { deleteRecipeApi } from '../../services/allApi';

<<<<<<< HEAD
function RecipeCard({ displayRecipe, setDeleteRecipeStatus, openEditModal }) {
=======



function RecipeCard({displayRecipe,setDeleteRecipeStatus}) {

>>>>>>> 768be9348633ce2fa4b99f86dcc0ac7dee4e2762
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

    }
<<<<<<< HEAD
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
=======

    // const PassRecipeId=(e,id)=>{
    //   console.log("clicked:",id);
    //   e.dataTransfer.setData("ID",id)
    // }
  return (
    <>
    <Card style={{ width: '90%' }} className='my-5'>
      <Card.Img variant="top" onClick={setLgShow} src={displayRecipe?.RecipeImg} width={'100%'} height={'300px'} className='p-3 rounded ' />
      <Card.Body>
        <Card.Title>{displayRecipe?.RecipeName}</Card.Title>
        <Card.Text>
       
        </Card.Text>
        <div className='d-flex justify-content-between'>
        <Button variant="outline-primary me-3 w-25" onClick={()=>handleDelete(displayRecipe?.id)}><FontAwesomeIcon icon={faTrash} /></Button>{' '}
        <Button variant="outline-info me-3 w-25"><Link to={`/EditRecipe/${displayRecipe?.id}`}><FontAwesomeIcon icon={faPenToSquare}  /></Link></Button>
        {/* <Button onClick={(e)=>PassRecipeId(e,displayRecipe?.id)} variant="outline-info me-3 w-25"><Link to={`/EditRecipe`}><FontAwesomeIcon icon={faPenToSquare}  /></Link></Button> */}
        <Button variant="outline-success w-25"><FontAwesomeIcon icon={faHeart} /></Button>{' '}
    
        </div>
        
      </Card.Body>
    </Card>
>>>>>>> 768be9348633ce2fa4b99f86dcc0ac7dee4e2762


    <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
          {displayRecipe?.RecipeName}
          <p className='fs-4'>Category:  {displayRecipe?.Category}</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-6">
              <img src={displayRecipe?.RecipeImg}  height={'300px'} width={'100%'} />
            </div>
            <div className="col-md-6">
              <h4>Cooking Instructions:</h4>
              <p className='p-2' style={{textAlign:'justify'}}>{displayRecipe?.Description}
                <h6 className='mt-3'> Video Link:{displayRecipe?.url}</h6>
              </p>
            </div>
<<<<<<< HEAD
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
=======
            <div className="row">
              <div className="col-md-12">
              <h4>Ingrediants:</h4>
              <p>
              {displayRecipe?.Ingrediants}
              </p>
              <div className='p-2 ms-4'>
              <iframe width="866" height="487" src={displayRecipe.url} title="CHICKEN TIKKA NO OVEN | CHICKEN TIKKA KEBAB ON TAWA | CHICKEN TIKKA RECIPE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

    

    </>
  )
}

export default RecipeCard
>>>>>>> 768be9348633ce2fa4b99f86dcc0ac7dee4e2762
