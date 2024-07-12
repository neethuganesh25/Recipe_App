import React, { useEffect, useState } from 'react'
import RecipeCard from './RecipeCard'
import { Col, Row } from 'react-bootstrap'
import { getRecipeApi } from '../../services/allApi'



function ViewCard({addStatus}) {
const [recipeDetails,setRecipeDetails]=useState([])
const [deleteRecipeStatus,setDeleteRecipeStatus]=useState([])
 
const getRecipe=async()=>{
  const result=await getRecipeApi()
  // console.log(result.data);
  setRecipeDetails(result.data)
 }

 useEffect(()=>{
  getRecipe()
 },[addStatus,deleteRecipeStatus])
 console.log(recipeDetails);
  return (
    <>
    <Row className='ms-md-0 w-100'>
    {recipeDetails?.length>0?
    recipeDetails?.map((item)=>(<Col xs={12} md={6} ld={4} xl={3} className='d-flex align-items-center justify-content-center'>

      <RecipeCard displayRecipe={item} setDeleteRecipeStatus={setDeleteRecipeStatus}/>
      </Col>))
      
   :
    <p className='fs-3 mt-4 text-info text-center'>No Recipe Uploaded</p> }
    </Row>

    </>


  )
}

export default ViewCard