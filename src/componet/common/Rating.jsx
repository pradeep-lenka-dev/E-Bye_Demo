// src/Rating.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import '../../styles/Rating.css'

const Rating = ({ rating, numReviews }) => {
  return (
    <div className="rating-container">
      <div className="stars">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalfAlt} />
      </div>
      <div className="rating-number">({numReviews} reviews)</div>
    </div>
  );
};

export default Rating;
