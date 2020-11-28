import React from 'react';
import PropTypes from 'prop-types';

const Category = ({ id, name, selected, handSec }) => (
  <div key={ id }>
    <label htmlFor={ id }>
      <input
        type="radio"
        name="category-option"
        id={ id }
        value={ name }
        checked={ selected === name }
        data-testid="category"
        onChange={ handSec }
      />
      { name }
    </label>
  </div>
);

export default Category;

Category.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
  handSec: PropTypes.func.isRequired,
};
