import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { addFeedbackApi } from '../../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function FeedUpload({ setAddStatus }) {
  const [video, setVideo] = useState({
    name: '',
    description: '',
    rating:''

  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVideo((prevVideo) => ({ ...prevVideo, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await addFeedbackApi(video);
    if (result.status >= 200 && result.status < 300) {
      toast.info(`Feedback added successfully`);
      setAddStatus(result.data);
      handleClear();
    } else {
      toast.error(`Something went wrong`);
      handleClear();
    }
  };

  const handleClear = () => {
    setVideo({ name: '',  description: '', rating:'' });
  };

  return (
    <>
      <Container className="d-flex justify-content-center align-items-center min-vh-50 ">
        <Row className="w-100 ">
          <Col xs={12} md={8} lg={6} className="mx-auto ">
            <Card className="shadow w-100 bg-gray border" style={{ backgroundImage: `url('https://t3.ftcdn.net/jpg/06/44/53/10/360_F_644531009_yYjZ0ziQMZgJ6KB1S0lBnl5GyOUovbSR.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formRecipeName" className='fs-5 mb-3 mt-5'>
                    {/* <Form.Label>User Name</Form.Label> */}
                    <Form.Control
                      type="text"
                      name="name"
                      value={video.name}
                      onChange={handleInputChange}
                      placeholder="Enter Your Name"
                      required
                    />
                  </Form.Group>
                 
                  <Form.Group controlId="formDescription" className="mb-3 fs-5">
                    {/* <Form.Label>Feedback</Form.Label> */}
                    <Form.Control
                      as="textarea"
                      name="description"
                      value={video.description}
                      onChange={handleInputChange}
                      placeholder="Enter your feedback here"
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formDescription" className="mb-3 fs-5">
                    {/* <Form.Label>Rating </Form.Label> */}
                    <Form.Control
                      
                      name="rating"
                      value={video.rating}
                      onChange={handleInputChange}
                       placeholder="Rate out of 5 ⭐⭐⭐⭐⭐"
                      required
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Upload
                  </Button>
                  <Button
                    variant="secondary"
                    type="button"
                   
                    onClick={handleClear}
                  >
                    Clear
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <ToastContainer theme='dark' position='top-center' autoClose={2000} />
    </>
  );
}

export default FeedUpload;
