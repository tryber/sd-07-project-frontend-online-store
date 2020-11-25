import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);

    this.addProductCart = this.addProductCart.bind(this);
  }

  addProductCart() {
    const { product, addToShoppingCart } = this.props;
    addToShoppingCart(product);
  }

  render() {
    const { product } = this.props;
    const { thumbnail, title, price } = product;
    return (
      <div data-testid="product">
        <img src={ thumbnail } alt="Imagem do produto" />
        <h4>{title}</h4>
        <h3>{price}</h3>
        <button
          type="button"
          data-testid="product-add-to-cart"
          id={ product }
          onClick={ this.addProductCart }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  addToShoppingCart: PropTypes.func.isRequired,
};

export default ProductCard;
