import { render } from '@testing-library/react';
import React from 'react';
import ReactStars from 'react-stars';

class StarsRating extends React.Component {
  constructor() {
    super();

    this.ratingChanged = this.ratingChanged.bind(this);

    this.state = {
      rating: 0,
    }
  }  

  ratingChanged(newRating) {
    this.setState({ rating: newRating });
  }
}

render() {
  const { rating } = this.state;

  return (
    <div>
      <ReactStars
        count={ 5 }
        onChange={ this.ratingChanged }
        size={ 24 }
        color2="#ffd700"
        half={ false }
        value={ rating }
      />
    </div>
  )
}

export default StarsRating;


