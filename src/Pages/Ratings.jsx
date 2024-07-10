
import React from 'react'
import { FaStar } from 'react-icons/fa';
function Ratings({ rating }) {
    const stars = Array(5).fill(0);
  return (
    <>
    <div className="ratings">
      <div className="star-container d-flex justify-content-center mt-3">
        {stars.map((_, index) => (
          <FaStar key={index} color={index < rating ? "gold" : "white"} size={20} />
        ))}
      </div>
       </div>
    </>
  )
}

export default Ratings