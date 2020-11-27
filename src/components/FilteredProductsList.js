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
            <span className="fontzero">Digite algum termo de pesquisa ou escolha uma categoria.</span>
          </ul>
        </div>
      );
    }
    return (
      <div  className="main-category-result-container">
        <h1 className="main-category-title">Resultado da pesquisa</h1>
        {allProducts.map((product) => (
          <IndividualCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.thumbnail}
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
