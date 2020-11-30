import React from 'react';
import PropTypes from 'prop-types';

class ButtonAddShoppingCart extends React.Component {
  constructor(props) {
    super(props);

    this.addInCart = this.addInCart.bind(this);
  }

  addInCart(title) {
    if (localStorage.getItem(title)) {
      const sum = JSON.parse(localStorage.getItem(title)) + 1;
      localStorage.setItem(title, sum);
    } else {
      localStorage.setItem(title, 1);
    }
  }

  render() {
    const { productSelected } = this.props;
    const { title } = productSelected;

    return (
      <div>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => this.addInCart(title) }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

ButtonAddShoppingCart.propTypes = {
  productSelected: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ButtonAddShoppingCart;
