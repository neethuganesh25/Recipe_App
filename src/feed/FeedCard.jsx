import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { deleteFeedbackApi } from '../../services/allApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,  faTrash } from '@fortawesome/free-solid-svg-icons';



function VideoCard({ r, setDeleteFeedStatus }) {


  const handleDelete = async (id) => {
    const result = await deleteFeedbackApi(id);
    setDeleteFeedStatus(result.data);
  };

  function formatDate(date) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
  }

  return (
    <>
  


      <Card  className='w-100 border shadow' >
      <Card.Body >
        <Card.Text style={{fontSize: '20px', fontWeight: '500'}}>👤 {r?.name}  <span className="ms-2 text-muted">({formatDate(Date.now())})</span></Card.Text>
        

        <Card.Text>
        {r?.description}
        </Card.Text>
        
        <Card.Text style={{ display: 'flex', alignItems: 'center', fontSize: '20px', fontWeight: '500', marginTop: '10px' }}>
            Rating:
            {[...Array(5)].map((_, i) => (
              <FontAwesomeIcon 
                key={i} 
                icon={faStar} 
                className={i < r?.rating ? 'text-warning' : 'text-muted'} 
                style={{ marginLeft: '3px' }} 
              />
            ))}
        
        </Card.Text>
      
        <Button variant="secondary" className='w-25'  type='button' onClick={() => handleDelete(r?.id)} style={{ flexShrink: 0 }}>
              <FontAwesomeIcon icon={faTrash} />
            </Button>
      </Card.Body>
    </Card>

     
    </>
  );
}

export default VideoCard;