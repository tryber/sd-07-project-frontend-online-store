import React from 'react';
import PropTypes from 'prop-types';

class Category extends React.Component {
  mapCategories() {
    const { categories } = this.props;
    const lis = categories.map(
      ({ id, name }) => <li key={ id } data-testid="category" id={ id }>{name}</li>,
    );
    return lis;
  }

  render() {
    return (
      <aside>
        <ul>
          {this.mapCategories()}
        </ul>
      </aside>
    );
  }
}

Category.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Category;
