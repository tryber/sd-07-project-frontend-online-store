import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CategoryItem extends Component {
  render() {
    const { category } = this.props;
    return (
      <div className="class-name">
        <li data-testid="category">
          { category.name }
        </li>
      </div>
    );
  }
}

CategoryItem.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
