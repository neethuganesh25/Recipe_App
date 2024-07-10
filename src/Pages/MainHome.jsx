import React from 'react'
import ViewCard from '../components/ViewCard'
import Add from '../components/Add'
import { faEye} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import Header from '../components/Header'





function MainHome() {
  return (
    
    <>
    <Header/>
    <div className=' d-flex m-5'>
      <Add/> 
      <h5 className='text-end' style={{marginRight:'100px'}}><Link to={'/category'} style={{textDecoration:'none',color:'black'}}> View all Category</Link></h5>
      {/* <h5 className='ms-auto fs-4 w-25'> <Link to={'/category'} style={{textDecoration:'none',color:'black'}}>View All Categories<FontAwesomeIcon icon={faEye} shake style={{color: "#0e5d62",}} size="xs" className='' /></Link> </h5> */}
    </div>
    <div className='mx-5'><ViewCard/></div>
    </>
  )
}

export default MainHome