import React from 'react'
import ViewCard from '../components/ViewCard'
import Add from '../components/Add'


function MainHome() {
  return (
    <>
    <div className=' d-flex m-5'>
      <Add/>
   
    </div>
    <div className='mx-5'><ViewCard/></div>
    </>
  )
}

export default MainHome