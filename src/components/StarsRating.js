import React from 'react';
import ReactStars from 'react-stars';

const StarsRating = ({ rating, hadleChange }) => (
  <ReactStars
    count={ 5 }
    value={ rating }
    onChange={ hadleChange }
    size={ 24 }
    color2="#ffd700"
  />
);

export default StarsRating;
