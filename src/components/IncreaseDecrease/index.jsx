import React from 'react';
import PropTypes from 'prop-types';

const IncreaseDecrease = ({ index, inc, dec, qt }) => {
  const add = () => inc(index);

  return (
    <>
      <button type="button" data-testid="product-increase-quantity" onClick={ add }>
        <i className="fas fa-plus" />
      </button>

      <button
        type="button"
        data-testid="product-decrease-quantity"
        onClick={ () => dec(index) }
        disabled={ qt === 1 }
      >
        <i className="fas fa-minus" />
      </button>
    </>
  );
};

export default IncreaseDecrease;

IncreaseDecrease.propTypes = {
  index: PropTypes.number.isRequired,
  inc: PropTypes.func.isRequired,
  dec: PropTypes.func.isRequired,
  qt: PropTypes.number.isRequired,
};
