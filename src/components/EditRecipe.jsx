import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { updateRecipeApi } from '../../services/allApi'; // Import your API function

function EditRecipe({ recipe, onClose, onSave }) {
  const [formData, setFormData] = useState({
    RecipeName: '',
    RecipeImg: '',
    Description: '',
    Ingredients: '',
    url: ''
  });

  useEffect(() => {
    if (recipe) {
      setFormData(recipe);
    }
  }, [recipe]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await updateRecipeApi(formData.id, formData);
    if (result.status >= 200 && result.status < 300) {
      onSave(formData); // Update the state in MainHome
      onClose(); // Close the modal
    } else {
      console.error('Failed to update recipe', result);
    }
  };

  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Recipe</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formRecipeName">
            <Form.Label>Recipe Name</Form.Label>
            <Form.Control
              type="text"
              name="RecipeName"
              value={formData.RecipeName}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formRecipeImg">
            <Form.Label>Recipe Image URL</Form.Label>
            <Form.Control
              type="text"
              name="RecipeImg"
              value={formData.RecipeImg}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              name="Description"
              value={formData.Description}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formIngredients">
            <Form.Label>Ingredients</Form.Label>
            <Form.Control
              as="textarea"
              name="Ingredients"
              value={formData.Ingredients}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formUrl">
            <Form.Label>Video URL</Form.Label>
            <Form.Control
              type="text"
              name="url"
              value={formData.url}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default EditRecipe;
