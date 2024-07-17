import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import FeedCard from '../feed/FeedCard';
import { getFeedbackApi } from '../../services/allApi';
import './Feedback.css';

function FeedView({ addStatus }) {
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
    <div className="feedback-view">
      <Row>
        {feedDetails?.length > 0 ? (
          feedDetails.map((r) => (
            <Col key={r.id} xs={12} sm={6} md={4} className="mb-3">
              <FeedCard r={r} setDeleteFeedStatus={setDeleteFeedStatus} />
            </Col>
          ))
        ) : (
          <Col className="text-muted text-center">
            <p>No feedback available</p>
          </Col>
        )}
      </Row>
    </div>
  );
}

export default FeedView;
