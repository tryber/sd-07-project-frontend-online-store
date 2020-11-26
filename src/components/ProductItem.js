import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductItem extends Component {
  render() {
    const { category, onClick } = this.props;
    return (
      <div className="class-name">
        <li data-testid="category">
          <button type="button" onClick={ onClick } data-testid='category'>
            { category.name }
          </button>
        </li>
      </div>
    );
  }
}

ProductItem.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};
