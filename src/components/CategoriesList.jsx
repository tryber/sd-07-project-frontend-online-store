import React from 'react';
import PropTypes from 'prop-types';

class Categories extends React.Component {
  render() {
    const { handleChange, arrayOfCategories } = this.props;
    return (
      <div className="container">
        <div className="categories-list">
          {arrayOfCategories.map(
            ({ id, name }) => (
              <label key={ id } htmlFor={ name } name="category">
                <input
                  data-testid="category"
                  type="radio"
                  id={ name }
                  name="categoryId"
                  value={ id }
                  onChange={ handleChange }
                />
                { name }
                <br />
              </label>
            ),
          )}
        </div>
      </div>
    );
  }
}

export default Categories;

Categories.propTypes = {
  arrayOfCategories:
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      }),
    ).isRequired,
  handleChange: PropTypes.func,
}.isRequired;
