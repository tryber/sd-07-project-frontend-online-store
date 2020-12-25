import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class ProductList extends React.Component {
  render() {
    const { arrayOfProducts, onAddList } = this.props;

    return (
      <div className="product-list">
        { arrayOfProducts.map((item) => (<ProductCard
          key={ item.id }
          product={ item }
          onAddCard={ onAddList }
        />))}
      </div>
    );
  }
}

export default ProductList;

ProductList.propTypes = {
  arrayOfProducts: PropTypes.arrayOf(PropTypes.object),
}.isRequired;
