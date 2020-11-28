import React from 'react';
import PropTypes from 'prop-types';

class AddToCartButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  handleAddToCart() {
    const { product } = this.props;
    const item = {
      id: product.id,
      title: product.title,
      price: product.price,
      thumbnail: product.thumbnail,
      quantity: 1,
    };

    if (!localStorage.shoppingCartItems) {
      localStorage.setItem('shoppingCartItems', JSON.stringify([item]));
    } else {
      let itemsToCart = JSON.parse(localStorage.getItem('shoppingCartItems'));
      if (!itemsToCart.find((productItem) => productItem.id === product.id)) {
        itemsToCart = [...itemsToCart, item];
        localStorage.setItem('shoppingCartItems', JSON.stringify(itemsToCart));
      }
    }
  }

  render() {
    return (
      <button
        type="button"
        onClick={ this.handleAddToCart }
        className="btn-add-to-cart"
        data-testid={ dataTestId }
      >
        Adicionar ao carrinho
      </button>
    );
  }
}

AddToCartButton.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    dataTestId: propTypes.string,
  }).isRequired,
};

export default AddToCartButton;
