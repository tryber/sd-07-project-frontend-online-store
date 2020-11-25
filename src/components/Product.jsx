import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    const { title, price, thumbnail, id, filterId } = this.props;
    return (
      <div data-testid="product" className="product-card">
        <p>{title}</p>
        <img src={ thumbnail } alt="" />
        <p>
          R$
          {price}
        </p>
        <Link to={ `/${id}&${filterId}` } data-testid="product-detail-link">
          Mais detalhes
        </Link>
      </div>
    );
  }
}

Product.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  filterId: PropTypes.string.isRequired,
};

export default Product;
