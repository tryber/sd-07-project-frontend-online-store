import React from 'react';
import PropTypes from 'prop-types';
import ProductDetailsEvaluation from '../components/ProductDetailsEvaluation';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.addToLocalStorage = this.addToLocalStorage.bind(this);
    this.readLocalStorage = this.readLocalStorage.bind(this);
  }

  readLocalStorage() {
    return JSON.parse(localStorage.getItem('cartItems'));
  }

  addToLocalStorage() {
    const { location } = this.props;
    const { product } = location;
    const { item } = product;
    const cartItems = this.readLocalStorage();
    const addItem = [...cartItems, item];
    localStorage.setItem('cartItems', JSON.stringify(addItem));
    console.log(this.readLocalStorage());
  }

  render() {
    const { location: { product: { item } } } = this.props;
    // const { product } = location;
    // const { item } = product;
    return (
      <div>
        <h1 data-testid="product-detail-name">{item.title}</h1>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ this.addToLocalStorage }
        >
          Adicionar ao carrinho
        </button>
      <ProductDetailsEvaluation />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    product: PropTypes.shape({
      item: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
