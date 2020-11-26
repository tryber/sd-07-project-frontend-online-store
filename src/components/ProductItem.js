import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductItem extends Component {
  render() {
    const { category, onClick } = this.props;
    return (
      <button type="button" onClick={ onClick } data-testid="category">
        { category.name }
      </button>
    );
  }
}

ProductItem.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};
