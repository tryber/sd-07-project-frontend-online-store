import React from 'react';
import PropTypes from 'prop-types';

class FilterCategory extends React.Component {
  render() {
    const { selectedCategoryId, radioHandler, category } = this.props;
    return (
      <div>
        <input
          data-testid="category"
          value={ category.id }
          type="radio"
          id={ selectedCategoryId }
          onClick={ radioHandler }
          name="test"
        />
        <label htmlFor={ selectedCategoryId }>{ category.name }</label>
      </div>
    );
  }
}

FilterCategory.propTypes = {
  selectedCategoryId: PropTypes.string.isRequired,
  radioHandler: PropTypes.func.isRequired,
  category: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default FilterCategory;
