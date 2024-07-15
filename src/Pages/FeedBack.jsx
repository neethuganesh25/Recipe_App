

import React, { useState } from 'react';
import FeedUpload from '../feed/FeedUpload'
import FeedView from '../feed/FeedView'
import Header from '../components/Header';
import Footer from '../components/Footer';



function FeedBack() {
  const [addStatus, setAddStatus] = useState([]);


  return (
    <>
    <Header/>
      <h1 className='text-center mt-2'>FeedBack</h1>
      <FeedUpload setAddStatus={setAddStatus}  />
      <div className="row w-100 p-4">
        <div className="col-md-12">
          <FeedView addStatus={addStatus}  />
        </div>
       
      </div>
      <Footer/>

    </>
  );
}

export default FeedBack;