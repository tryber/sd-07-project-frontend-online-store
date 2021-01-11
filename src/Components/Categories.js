import React from 'react';
import PropTypes from 'prop-types';

class Categories extends React.Component {
  render() {
    const { categories, handlerSelectCategory } = this.props;
    return (
      <div className="categories">
        <div className="categories-content">
          <h2 className="categories-title">Categorias</h2>
          {categories.map((category) => (
            <label htmlFor={ category.name } key={ category.id }>
              <input
                id={ category.name }
                name="category"
                type="radio"
                value={ category.name }
                data-testid="category"
                onClick={ () => handlerSelectCategory(category.id) }
                className="categories-input"
              />
              {category.name}
            </label>
          ))}
        </div>
      </div>
    );
  }
}

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  handlerSelectCategory: PropTypes.func.isRequired,
};

export default Categories;
