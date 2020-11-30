import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CategoryItem extends Component {
  render() {
    const { category, onClick } = this.props;
    return (
      <button
        type="button"
        onClick={ onClick }
        data-testid="category"
        className="button-category"
      >
        {`> ${category.name}`}
      </button>
    );
  }
}

CategoryItem.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};
