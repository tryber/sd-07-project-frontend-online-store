import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);
  }

  addToCart() {
    const { product } = this.props;
    const initialQuantity = 1;
    if (localStorage.getItem(product.title)) {
      const value = localStorage.getItem(product.title);
      localStorage.setItem(product.title, parseInt(value, 10) + 1);
    } else {
      localStorage.setItem(product.title, initialQuantity);
    }
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
          <button type="button" onClick={ this.addToCart }>ADICIONAR AO CARRINHO</button>
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
