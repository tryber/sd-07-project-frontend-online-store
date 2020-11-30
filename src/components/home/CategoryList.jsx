import React from 'react';
import PropTypes from 'prop-types';

class CategoryList extends React.Component {
  render() {
    const { categories, check } = this.props;
    return (
      <div>
        <div className="category-list">
          {categories.map(({ id, name }) => (
            <div key={ id }>
              <label htmlFor={ id }>
                <input
                  data-testid="category"
                  type="radio"
                  onChange={ () => check(id) }
                  name="categories"
                />
                { name }
              </label>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  check: PropTypes.func.isRequired,
};

export default CategoryList;
