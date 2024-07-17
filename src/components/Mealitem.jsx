import React from "react";
import { useNavigate } from "react-router-dom";
import './MeaItem.css'; 

const MealItem = ({ data }) => {
    const navigate = useNavigate();

    return (
        <>
            <div className="meal-item-container">
                {!data ? (
                    <p className="not-found">Not Found</p>
                ) : (
                    data.map(item => (
                        <div
                            className="meal-card"
                            key={item.idMeal}
                            onClick={() => navigate(`/${item.idMeal}`)}
                        >
                            <img
                                src={item.strMealThumb}
                                alt={item.strMeal}
                                className="meal-image"
                            />
                            <h3 className="meal-title">{item.strMeal}</h3>
                        </div>
                    ))
                )}
            </div>
        </>
    );
};

export default MealItem;
