import { faBowlFood, faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {addRecipeApi} from '../../services/allApi'




function Add({setAddStatus}) {
  //Create a state to hold data from input box
  const [recipe,setRecipe]=useState({
    Email:" ",
    RecipeName:" ",
    Description:" ",
    Ingrediants :" ",
    Category:" ",
    RecipeImg:" ",
    url:" " 
  })
  //console.log(recipe);

  const [show, setShow] = useState(false);

  const handleClose = () =>{
    setShow(false);
    setRecipe({
      Email:"",
      RecipeName:"",
      Description:"",
      Ingrediants :"",
      Category:"",
      RecipeImg:"",
      url:"" 

    })

  } 
  const handleShow = () => setShow(true);

  const validateLink=(e)=>{
    console.log(e.target.value);
    const link=e.target.value
    if (link.endsWith('?feature=shared')) {
      const yTkey = link.slice(-26, -15)
      console.log(yTkey);
      let embedLink = `https://www.youtube.com/embed/${yTkey}`
      setRecipe({ ...recipe, url: embedLink })
    }
    else if (link.endsWith('https://youtu.be')) {
      const yTkey = link.slice(-17, -28)
      console.log(yTkey);
      let embedLink = `https://youtu.be/embed/${yTkey}`
      setRecipe({ ...recipe, url: embedLink })
    }

    else {
      const yTkey = link.slice(-11)
      console.log(yTkey);
      let embedLink = `https://www.youtube.com/embed/${yTkey}`
      //https://youtu.be/0G2VxhV_gXM?si=mrjMzpEjDjtKf09o
      setRecipe({ ...recipe, url: embedLink })
    }
  }

  const handleUpload =async(e)=>{
    e.preventDefault()
    const { Email, RecipeName, Description, Ingrediants, Category, RecipeImg, url }= recipe


    // ||!Description||!Ingrediants||!Category||!RecipeImg||!url
   if (!Email||!RecipeName)
    {
      
      toast.info('plz fill the form completely')
    }
    else
    {
      const result = await addRecipeApi(recipe)
      console.log(result);
      if (result.status >= 200 && result.status < 300) {
        toast.success("Successfully Uploaded")
        setAddStatus(result.data)
        handleClose()
      }
      else {
        toast.error("Something went wrong")
        handleClose()
      }
    }
    
  }
  
  return (
    <>
    <div className='d-flex mx-5'>
      <h5 className=' w-25 '>Add new Recipe Here</h5>
     
      <button className='btn btn-light rounded border-danger ms-2 ' style={{width:'45px' ,height:'45px'}} onClick={handleShow}><FontAwesomeIcon icon={faUpload} beat /></button>
    </div>


    <Modal  show={show} onHide={handleClose} size='lg'>
      
        <Modal.Header  closeButton>
          <Modal.Title className='text-dark fs-3' >Upload New Recipe <FontAwesomeIcon icon={faBowlFood} beatFade style={{color: "#f51a0a",}} className='' /></Modal.Title >
        </Modal.Header>
        <Modal.Body className='bg-tranparent'>
        <p className='text-danger fs-5 fw-bold'>Plz Fill the following Details</p>
          <form action="" className='border p-3 rounded border-secondary'>
            <input type="Email" placeholder='Email' className='form-control' onChange={(e)=>setRecipe({...recipe,Email:e.target.value})} />
            <input type="text" placeholder='Recipe Name' className='form-control mt-3' onChange={(e)=>setRecipe({...recipe,RecipeName:e.target.value})} />
            <input type="text" placeholder='Description' className='form-control mt-3'onChange={(e)=>setRecipe({...recipe,Description:e.target.value})}  />
            {/* <input type="text" placeholder='Ingrediants Example:chilli' className='form-control mt-3' /> */}
            <textarea type="text" placeholder='Ingrediants Example:chilli' className='form-control mt-3' rows={5} onChange={(e)=>setRecipe({...recipe,Ingrediants:e.target.value})} ></textarea>
            <input type="text" placeholder='Category' className='form-control mt-3' onChange={(e)=>setRecipe({...recipe,Category:e.target.value})} />
            <input type="text" placeholder='Recipe Image' className='form-control mt-3'onChange={(e)=>setRecipe({...recipe,RecipeImg:e.target.value})}  />
            <input type="text" placeholder='Recipe Video url' className='form-control mt-3' onChange={(e) => validateLink(e)}  />
          </form>
        </Modal.Body>
        <Modal.Footer>
        
          <Button variant="secondary w-25" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success w-25" onClick={handleUpload}>
            Submit Recipe
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer theme='colored' position='top-center' />
    </>
  )
}

export default Add