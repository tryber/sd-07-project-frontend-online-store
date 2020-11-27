import React from 'react';
import PropTypes from 'prop-types';

class Category extends React.Component {
  mapCategories(categories) {
    return categories.map(({ id, name }) => (<p key={ id }>
      <label htmlFor={ id }>
        <input
          type="radio"
          data-testid="category"
          id={ id }
          name="category"
          value={ id }
        />
        {name}
      </label>
    </p>));
  }

  render() {
    const { categories } = this.props;
    return (
      <aside>
        {this.mapCategories(categories)}
      </aside>
    );
  }
}

Category.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Category;
