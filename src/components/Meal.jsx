import React, { useState, useEffect } from "react";
import RecipeIndex from "./RecipeIndex";
import MealItem from '../components/Mealitem';
//import './Meal.css'; // Import CSS for styling

const Meal = () => {
    const [search, setSearch] = useState("");
    const [show, setShow] = useState(false);
    const [items, setItems] = useState([]);
    const [url, setUrl] = useState("https://www.themealdb.com/api/json/v1/1/search.php?f=a");

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setItems(data.meals || []);
                setShow(true);
            });
    }, [url]);

    const searchRecipe = (evt) => {
        if (evt.key === "Enter") {
            setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        }
    };

    const setIndex = (alpha) => {
        setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`);
    };

    return (
        <>
            <div className="main">
                <div className="heading text-center">
                    <h1 className="mt-5 text-danger">Search Your Food Recipe</h1>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
                </div>
                <div className="searchBox text-center">
                    <input
                        type="search"
                        className="search-bar  bg-success text-white"
                        placeholder="Type a recipe name..."
                        onChange={e => setSearch(e.target.value)}
                        onKeyPress={searchRecipe}

                    />
                </div>
                <div className="container">
                    {show ? <MealItem data={items} /> : <p className="not-found">Not Found</p>}
                </div>
                <div className="indexContainer">
                    <RecipeIndex alphaIndex={(alpha) => setIndex(alpha)} />
                </div>
            </div>
        </>
    );
}

export default Meal;
