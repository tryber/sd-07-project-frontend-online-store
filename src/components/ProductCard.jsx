import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart() {
    const { product } = this.props;
    const { id, title, price, thumbnail } = product;
    const array = JSON.parse(localStorage.getItem('items') || '[]');
    const index = array.findIndex((elemento) => elemento.id === id);
    const negativeIndex = -1;
    if (index === negativeIndex) {
      array.push({ id, title, price, thumbnail, quantidade: 1 });
    } else {
      array[index].quantidade += 1;
    }
    localStorage.setItem('items', JSON.stringify(array));
  }

  render() {
    const { product } = this.props;
    const { title, price, thumbnail, id } = product;
    return (
      <div data-testid="product" className="product-card" key={ id }>
        <Link
          to={ {
            pathname: `/details/${id}`,
            state: product,
          } }
          data-testid="product-detail-link"
        >
          <h3>{title}</h3>
        </Link>
        <p>{`Preço: ${price}`}</p>
        <img src={ thumbnail } alt={ title } />
        <button
          type="button"
          data-testid="product-add-to-cart"
          // id={id}
          onClick={ () => this.addToCart(product) }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}
ProductCard.propTypes = {
  product: PropTypes.shape({
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};
