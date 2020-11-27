import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FilterCategory from './FilterCategory';

class CategoryList extends Component {
  render() {
    const { categories, selectedCategoryId, radioHandler } = this.props;
    return (
      <div className="category-id">
        <h3>Categorias:</h3>
        {categories.map((category) => (
          <div key={ category.id }>
            <FilterCategory
              selectedCategoryId={ selectedCategoryId }
              radioHandler={ radioHandler }
              category={ category }
            />
          </div>
        ))}
      </div>
    );
  }
}

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedCategoryId: PropTypes.string.isRequired,
  radioHandler: PropTypes.func.isRequired,
};

export default CategoryList;
