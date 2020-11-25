import React from 'react';
import PropTypes from 'prop-types';

class ItemCategory extends React.Component {
  render() {
    const { category } = this.props;
    // console
    return (
      <div data-testid="category" key={ category.id }>
        { category.name }
      </div>
    );
  }
}

ItemCategory.propTypes = {
  category: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default ItemCategory;
