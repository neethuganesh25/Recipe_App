import React, { useEffect } from 'react'
import { faBowlFood, faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getARecipeApi,updateRecipeApi } from '../../services/allApi'
import { useNavigate, useParams } from 'react-router-dom';


// import {addRecipeApi} from '../../services/allApi'

function EditRecipe() {
  const {id}=useParams();
  
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
  const navigate=useNavigate()

    // const [recipeDetails,setRecipeDetails]=useState([])
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
    // const handleShow = () => setShow(true);

    const getRecipe=async(e)=>{
       console.log(id);
        const result=await getARecipeApi(id)
        console.log(result.data);
        setRecipe(result.data)
       }

       useEffect(()=>{
        getRecipe()
       },[])
      //  console.log(recipeDetails);    
       
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

      const handleUpdate=async(e)=>{
        e.preventDefault()
       
        const { Email, RecipeName, Description, Ingrediants, Category, RecipeImg, url }= recipe
       

        // ||!Description||!Ingrediants||!Category||!RecipeImg||!url
       if (!Email||!RecipeName||!Description||!Ingrediants||!Category||!RecipeImg||!url)
        {
          
          toast.info('plz fill the form completely')
        }
        else
        {
          console.log('hai');
          const result = await updateRecipeApi(id,recipe)
          console.log(result);
          if (result.status >= 200 && result.status < 300) {
            toast.success("Successfully Updated")
            // setAddStatus(result.data)
            handleClose()
            navigate('/mainhome')
          }
          else {
            toast.error("Something went wrong")
            handleClose()
          }
        }

      }
  return (
   <>
   {/* <div className='d-flex mx-5'>
      <h5 className=' w-25 '>Add new Recipe Here</h5>
     
      <button className='btn btn-light rounded border-danger ms-2 ' style={{width:'45px' ,height:'45px'}} ><FontAwesomeIcon icon={faUpload} beat /></button>
    </div> */}

    
    


    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog size='lg'>
        <Modal.Header closeButton>
        <Modal.Title className='text-dark fs-3' >Update Recipe <FontAwesomeIcon icon={faBowlFood} beatFade style={{color: "#f51a0a",}} className='' /></Modal.Title >
        </Modal.Header>

        <Modal.Body className='bg-tranparent'>
      <p className='text-danger fs-5 fw-bold'>Plz Fill the following Details</p>
       <form action="" className='border p-3 rounded border-secondary'>
         <input type="Email" placeholder='Email' className='form-control' value={recipe.Email} onChange={(e)=>setRecipe({...recipe,Email:e.target.value})}  />
         <input type="text" placeholder='Recipe Name' className='form-control mt-3' value={recipe.RecipeName}  onChange={(e)=>setRecipe({...recipe,RecipeName:e.target.value})}  />
         <input type="text" placeholder='Description' className='form-control mt-3'value={recipe.Description} onChange={(e)=>setRecipe({...recipe,Description:e.target.value})}  />
         {/* <input type="text" placeholder='Ingrediants Example:chilli' className='form-control mt-3' /> */}
         <textarea type="text" placeholder='Ingrediants Example:chilli' className='form-control mt-3' rows={5}value={recipe.Ingrediants} onChange={(e)=>setRecipe({...recipe,Ingrediants:e.target.value})}  ></textarea>
         <input type="text" placeholder='Category' className='form-control mt-3' value={recipe.Category}  onChange={(e)=>setRecipe({...recipe,Category:e.target.value})}  />
         <input type="text" placeholder='Recipe Image' className='form-control mt-3'value={recipe.RecipeImg}onChange={(e)=>setRecipe({...recipe,RecipeImg:e.target.value})}   />
         <input type="text" placeholder='Recipe Video url' className='form-control mt-3' value={recipe.url}onChange={(e) => validateLink(e)}       />
       </form>
       {/* value={item.Email} */}
      </Modal.Body>
      <Modal.Footer>
      
      <Button variant="secondary w-25" onClick={handleClose}>
        Cancel
      </Button>
      <Button variant="success w-25" onClick={handleUpdate}>
        Update Recipe
      </Button>
    </Modal.Footer>
      </Modal.Dialog>
      <ToastContainer theme='colored' position='top-center' />
    </div>

    

   
   </>
  )
}

export default EditRecipe