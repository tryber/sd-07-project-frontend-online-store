import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ItemCard extends React.Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
  }
  addToCart() {
    const { title, price } = this.props;
    localStorage.setItem(title, price);
  }

  render() {
    const { id, product, title, image, price } = this.props;
    return (
      <div className="card-product" data-testid="product">
        <span className="card-title">
          { title }
        </span>
        <img
          src={ image }
          alt="foto-produto"
          className="card-image"
        />
        <span className="card-price">
          R$
          { price }
        </span>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ this.addToCart }
        >
          Adicionar ao Carrinho
        </button>
        <Link
          data-testid="product-detail-link"
          to={ { pathname: `detailsProduct/${id}`, state: { product } } }
          className="card-price"
        >
          Detalhes
        </Link>
      </div>
    );
  }
}

export default ItemCard;

ItemCard.propTypes = {
  id: PropTypes.string,
  product: PropTypes.shape({}),
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
};

ItemCard.defaultProps = {
  id: PropTypes.string,
  product: PropTypes.shape({}),
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
};
