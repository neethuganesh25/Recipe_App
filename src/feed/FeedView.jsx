import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import FeedCard from '../feed/FeedCard';
import { getFeedbackApi } from '../../services/allApi';

function View({ addStatus }) {
  const [feedDetails, setFeedDetails] = useState([]);
  const [deleteFeedStatus, setDeleteFeedStatus] = useState([]);

  const getFeed = async () => {
    const result = await getFeedbackApi();
    setFeedDetails(result.data);
  };

  useEffect(() => {
    getFeed();
  }, [addStatus, deleteFeedStatus]);

  return (
    <>
          <div className="d-flex  flex-column justify-content-center align-items-center vh-10">
      {feedDetails?.length > 0 ? (
        feedDetails?.map((r) => (
          <Row key={r.id} className='w-50 mb-2 '>
            <Col>
              <FeedCard r={r} setDeleteFeedStatus={setDeleteFeedStatus} />
            </Col>
          </Row>
        ))
      ) : (
      null
      )}
    </div>

    </>
    
  );
}

export default View;
