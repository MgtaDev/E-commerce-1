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
    
      <div className="shadow w-[400px] p-4 mt-2">
        <h3 className="font-bold text-center text-xl text-gray-700">Calificacion</h3>

        <div className="text-xl m-1 flex items-center">
        <FaStar className="text-yellow-500"/>
        <span className="text-xl font-bold">{highestRating}.0</span>
        <span className="ml-2 text-xs" >con 1 reseña</span>
        </div>
      </div>
    
  );
};

export default SectionReviews;
