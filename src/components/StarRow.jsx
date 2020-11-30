import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
StarRow.propTypes = {
  rating: PropTypes.number.isRequired,
  ratingChange: PropTypes.func.isRequired,
  max: PropTypes.number.isRequired,
};

export default StarRow;
