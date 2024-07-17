import React, { useState } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { addFeedbackApi } from '../../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Feedback.css'; // Ensure to import your CSS

function FeedUpload({ setAddStatus }) {
    const [video, setVideo] = useState({
        name: '',
        description: '',
        rating: ''
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
        setVideo({ name: '', description: '', rating: '' });
    };

    return (
        <Container className="feedback-upload-container" >
            <Card className="feedback-form shadow" >
                <Card.Body>
                    <h2 className="text-center">Submit Your Feedback</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formRecipeName">
                            <Form.Control
                                type="text"
                                name="name"
                                value={video.name}
                                onChange={handleInputChange}
                                placeholder="Enter Your Name"
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formDescription">
                            <Form.Control
                                as="textarea"
                                name="description"
                                value={video.description}
                                onChange={handleInputChange}
                                placeholder="Enter your feedback here"
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formRating">
                            <Form.Control
                                type="number"
                                name="rating"
                                value={video.rating}
                                onChange={handleInputChange}
                                placeholder="Rate out of 5 (1-5)"
                                required
                                min="1"
                                max="5"
                            />
                        </Form.Group>
                        <div className="d-flex justify-content-between">
                            <Button variant="primary" className='w-25' type="submit">Upload</Button>
                            <Button variant="dark" className='w-25' type="button" onClick={handleClear}>Clear</Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
            <ToastContainer theme='dark' position='top-center' autoClose={2000} />
        </Container>
    );
}

export default FeedUpload;
