import React from "react";
import { useSelector } from "react-redux";
import Rating from "react-rating";
import ReviwerD from "./ReviwerD";
import { FaStar, FaRegStar } from 'react-icons/fa';

const SectionReviews = () => {
  const stateReviwerds = useSelector(state => state.AllRevierwsId);
  let highestRating = 0;
  if (Array.isArray(stateReviwerds)) {
    highestRating = stateReviwerds.reduce(
      (maxRating, { rating }) => Math.max(maxRating, rating),
      0
    );
  }


  return (
    
      <div className="shadow p-4">
        <h3>Overall rating</h3>

        <div className="text-xl m-4 flex items-center">
        <FaStar className="text-yellow-500"/>
        <span className="text-xl font-bold">4.8</span>
        <span className="ml-2 text-xs" >de 130 reseñas</span>
        </div>
      </div>
    
  );
};

export default SectionReviews;
