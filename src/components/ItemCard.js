import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ItemCard extends React.Component {
  render() {
    const { id, product, title, image, price } = this.props;
    return (
      <div className="card-product">
        <span data-testi="product" className="card-title">
          { title }
        </span>
        <img
          data-testi="product"
          src={ image }
          alt="foto-produto"
          className="card-image"
        />
        <span data-testi="product" className="card-price">
          R$
          { price }
        </span>
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
