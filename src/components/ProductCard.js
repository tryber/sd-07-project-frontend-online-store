import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  constructor() {
    super();

    this.state = {
      product: this.props,
      quantity: 0,
    };
  }

  addToCart() {

  }

  render() {
    // const { product } = this.props;
    const { product: { title, thumbnail, price } } = this.props;

    return (
      <div>
        <article data-testid="product">
          <header>
            <h2>{title}</h2>
          </header>
          <main>
            <img alt="product thumbnail" src={ thumbnail } />
          </main>
          <footer>
            <p>{`R$ ${price}`}</p>
          </footer>
          <button type="button" onClick={this.addToCart} data-testid="product-detail-add-to-cart">Adicionar ao carrinho</button>
        </article>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
