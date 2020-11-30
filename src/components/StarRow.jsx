import React, { Component } from 'react';
import StarButton from './StarButton';

class StarRow extends Component {
  render() {
    const { rating, ratingChange, max } = this.props;
    const arr = Array.from(Array(max).keys());

    return (
      <div id="rating">
        {arr
          .map((i) => (<StarButton
            key={ i }
            ratingChange={ () => ratingChange(i + 1) }
            active={ i < rating }
          />))}
      </div>
    );
  }
}

export default StarRow;
