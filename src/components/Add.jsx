import { faBowlFood, faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addRecipeApi } from '../../services/allApi';

function Add({ setAddStatus }) {
  const [recipe, setRecipe] = useState({
    Email: "",
    RecipeName: "",
    Description: "",
    Ingredients: "",
    Category: "",
    RecipeImg: "",
    url: ""
  });

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setRecipe({
      Email: "",
      RecipeName: "",
      Description: "",
      Ingredients: "",
      Category: "",
      RecipeImg: "",
      url: ""
    });
  };

  const handleShow = () => setShow(true);

  const validateLink = (e) => {
    const link = e.target.value;
    let embedLink;

    if (link.includes('youtube.com')) {
      const yTkey = link.split('v=')[1].substring(0, 11);
      embedLink = `https://www.youtube.com/embed/${yTkey}`;
    } else if (link.includes('youtu.be')) {
      const yTkey = link.split('/').pop().substring(0, 11);
      embedLink = `https://www.youtube.com/embed/${yTkey}`;
    } else {
      embedLink = link;
    }

    setRecipe({ ...recipe, url: embedLink });
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const { Email, RecipeName, Description, Ingredients, Category, RecipeImg, url } = recipe;

    if (!Email || !RecipeName || !Description || !Ingredients || !Category || !RecipeImg || !url) {
      toast.info('Please fill out the form completely.');
    } else {
      const result = await addRecipeApi(recipe);
      if (result.status >= 200 && result.status < 300) {
        toast.success("Successfully Uploaded");
        setAddStatus(result.data); // Pass the new recipe to the parent component
        handleClose();
      } else {
        toast.error("Something went wrong");
        handleClose();
      }
    }
  };

  return (
    <>
      <div className='d-flex mx-5'>
        <h5 className=' w-100 '>Add new Recipe Here</h5>
        <button className='btn btn-light rounded border-danger ms-2 ' style={{ width: '45px', height: '45px' }} onClick={handleShow}>
          <FontAwesomeIcon  icon={faUpload} beat />
        </button>
      </div>

      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title className='text-dark fs-3'>
            Upload New Recipe <FontAwesomeIcon icon={faBowlFood} beatFade style={{ color: "#f51a0a" }} />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-transparent'>
          <p className='text-danger fs-5 fw-bold'>Please Fill the following Details</p>
          <form className='border p-3 rounded border-secondary'>
            <input type="email" placeholder='Email' className='form-control' onChange={(e) => setRecipe({ ...recipe, Email: e.target.value })} />
            <input type="text" placeholder='Recipe Name' className='form-control mt-3' onChange={(e) => setRecipe({ ...recipe, RecipeName: e.target.value })} />
            <input type="text" placeholder='Description' className='form-control mt-3' onChange={(e) => setRecipe({ ...recipe, Description: e.target.value })} />
            <textarea placeholder='Ingredients (Example: chili)' className='form-control mt-3' rows={5} onChange={(e) => setRecipe({ ...recipe, Ingredients: e.target.value })}></textarea>
            <input type="text" placeholder='Category' className='form-control mt-3' onChange={(e) => setRecipe({ ...recipe, Category: e.target.value })} />
            <input type="text" placeholder='Recipe Image' className='form-control mt-3' onChange={(e) => setRecipe({ ...recipe, RecipeImg: e.target.value })} />
            <input type="text" placeholder='Recipe Video URL' className='form-control mt-3' onChange={validateLink} />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary w-25" onClick={handleClose}>Cancel</Button>
          <Button variant="success w-25" onClick={handleUpload}>Submit Recipe</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer theme='colored' position='top-center' />
    </>
  );
}

export default Add;
