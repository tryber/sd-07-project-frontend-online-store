import React from 'react';
import PropTypes from 'prop-types';

class Categories extends React.Component {
  render() {
    const { categories, handlerSelectCategory } = this.props;
    return (
      <div>
        {categories.map((category) => (
          <label htmlFor={ category.name } key={ category.id }>
            <input
              id={ category.name }
              name="category"
              type="radio"
              value={ category.name }
              data-testid="category"
              onClick={ () => handlerSelectCategory(category.id) }
            />
            {category.name}
          </label>
        ))}
      </div>
    );
  }
}

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  handlerSelectCategory: PropTypes.func.isRequired,
};

export default Categories;
