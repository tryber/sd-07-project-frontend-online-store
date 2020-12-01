import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IndividualCard from './IndividualCard';

class FilteredProductsList extends Component {
  render() {
    const { allProducts, addShoppingCartItems } = this.props;

    const comparNumber = 0;

    if (allProducts.length === comparNumber) {
      return (
        <div>
          <ul data-testid="home-initial-message">
            <span className="fontzero">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </span>
          </ul>
        </div>
      );
    }
    return (
      <div className="main-category-result-container">
        <h1 className="main-category-title">Resultado da pesquisa</h1>
        {allProducts.map((product) => (
          <IndividualCard
            key={ product.id }
            id={ product.id }
            title={ product.title }
            price={ product.price }
            image={ product.thumbnail }
            addShoppingCartItems={ addShoppingCartItems }
          />
        ))}
      </div>
    );
  }
}

FilteredProductsList.propTypes = {
  allProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
  addShoppingCartItems: PropTypes.func.isRequired,
};

export default FilteredProductsList;
