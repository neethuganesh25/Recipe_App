import React, { useState } from 'react';
import FeedUpload from '../feed/FeedUpload';
import FeedView from '../feed/FeedView';
import Header from '../components/Header';
import Footer from '../components/Footer';



function FeedBack() {
  const [addStatus, setAddStatus] = useState([]);

  return (
    <>
      <Header />
      <div className="feedback-container">
        
        <FeedUpload setAddStatus={setAddStatus} />
        <div className="feedback-view-container">
          <FeedView addStatus={addStatus} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FeedBack;
