import React from 'react';
import PropTypes from 'prop-types';

class Category extends React.Component {
  mapCategories(categories, onClick) {
    return categories.map(({ id, name }) => (
      <p key={ id }>
        <label htmlFor={ id }>
          <input
            type="radio"
            data-testid="category"
            id={ id }
            name="categoryId"
            value={ id }
            onClick={ ({ target: { name: key, id: value } }) => onClick(key, value) }
          />
          { name }
        </label>
      </p>
    ));
  }

  render() {
    const { categories, onClick } = this.props;
    return <aside>{this.mapCategories(categories, onClick)}</aside>;
  }
}

Category.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Category;
