import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class ProductCard extends React.Component {
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
        <Link data-testid="product-add-to-cart"
          to={ {
            pathname: '',
            state: product,
          } }
        >
          Adicionar ao carrinho
          </Link>
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
