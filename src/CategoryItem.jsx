import React from 'react';
import PropTypes from 'prop-types';


class CategoryItem extends React.Component {
  render() {
    const { category: { name, id }, handleChange } = this.props;
    return (
      <div>
        <input
          data-testid="category"
          type="radio"
          id={ name }
          name="categoryId"
          value={ id }
          onChange={ handleChange }
        />
        <label htmlFor={ name }>{name}</label>
      </div>
    );
  }
}

CategoryItem.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired };

export default CategoryItem;
