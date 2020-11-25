import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IndividualCard from './IndividualCard';

class FilteredProductsList extends Component {
  render() {
    const { allProducts } = this.props;

    if (allProducts === undefined) {
      return (
        <div>
          <ul data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </ul>
        </div>
      );
    }
    return (
      <div>
        {allProducts.map((product) => (
          <IndividualCard
            key={ product.id }
            title={ product.title }
            price={ product.price }
            image={ product.thumbnail }
          />
        ))}
      </div>
    );
  }
}

FilteredProductsList.propTypes = {
  allProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FilteredProductsList;
