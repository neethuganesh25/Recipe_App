import React, { useEffect, useState } from 'react';
import ViewCard from './ViewCard';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import Header from './Header';
import Footer from './Footer';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategoryApi, allCategoryApi, deleteCategoryApi, getRecipeApi } from '../../services/allApi';

function Category() {
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const [allCategory, setAllCategory] = useState([]);
  const [addStatus, setAddStatus] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [favoriteCount, setFavoriteCount] = useState(0);

  const handleClose = () => {
    setShow(false);
    setCategoryName('');
  };

  const handleShow = () => setShow(true);

  const addCategory = async () => {
    if (categoryName) {
      const reqBody = {
        categoryName,
        allRecipe: []
      };
      const result = await addCategoryApi(reqBody);
      if (result.status >= 200 && result.status < 300) {
        handleClose();
        setAddStatus(true);
        toast.success('Category Added Successfully');
      } else {
        console.log(result);
      }
    } else {
      toast.info('Please add the category name');
    }
  };

  const getAllCategory = async () => {
    const result = await allCategoryApi();
    if (result.status >= 200 && result.status < 300) {
      setAllCategory(result.data);
    }
  };

  const deleteCategory = async (id) => {
    const result = await deleteCategoryApi(id);
    if (result.status >= 200 && result.status < 300) {
      toast.success('Category Deleted Successfully');
      getAllCategory();
    }
  };

  const fetchRecipes = async () => {
    const result = await getRecipeApi();
    if (result && result.data) {
      const recipesWithFavorites = result.data.map(recipe => ({
        ...recipe,
        isFavorite: false
      }));
      setRecipes(recipesWithFavorites);
    }
  };

  useEffect(() => {
    setAddStatus(false);
    getAllCategory();
    fetchRecipes();
  }, [addStatus]);

  const filterRecipesByCategory = (categoryName) => {
    return recipes.filter(recipe => recipe.Category === categoryName);
  };

  const updateFavoriteStatus = (recipe) => {
    setRecipes(prevRecipes =>
      prevRecipes.map(r =>
        r.id === recipe.id
          ? { ...r, isFavorite: !r.isFavorite }
          : r
      )
    );

    if (recipe.isFavorite) {
      setFavoriteRecipes(prevFavorites =>
        prevFavorites.filter(r => r.id !== recipe.id)
      );
    } else {
      setFavoriteRecipes(prevFavorites => [...prevFavorites, recipe]);
    }

    setFavoriteCount(prevCount => recipe.isFavorite ? prevCount - 1 : prevCount + 1);
  };

  return (
    <>
      <Header favoriteCount={favoriteCount} />
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <div className='text-center mt-5 w-100 mb-5'>
            <Button variant='info rounded border-danger ms-3 w-25' onClick={handleShow}>
              <h5>Add New Category</h5> 
              <FontAwesomeIcon icon={faSquarePlus} shake size="lg" className='ms-4' /> 
            </Button>
          </div>

          {allCategory?.length > 0 ?
            allCategory.map((item) => (
              <div className='mt-2 p-3' key={item.id}>
                <div className='d-flex mt-4'>
                  <h3 className='mt-3 ms-5'>{item.categoryName}</h3>
                  <Button variant="outline-primary me-3" style={{ width: '80px', height: '50px' }} onClick={() => deleteCategory(item.id)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </Button>
                </div>
                <hr />
                <div className='mx-5'>
                  <ViewCard recipes={filterRecipesByCategory(item.categoryName)} updateFavoriteStatus={updateFavoriteStatus} />
                </div>
              </div>
            ))
            : null
          }
        </div>
        <div className="col-md-1"></div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
          <form action="">
            <input type="text" placeholder='Category Name' className='form-control' onChange={(e) => setCategoryName(e.target.value)} />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary w-25" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary w-25" onClick={addCategory}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer theme='colored' position='top-center' />
      <Footer />
    </>
  );
}

export default Category;
