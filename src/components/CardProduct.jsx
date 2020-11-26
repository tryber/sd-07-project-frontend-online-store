import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import { Link } from 'react-router-dom';

class CardProduct extends React.Component {
  render() {
    const { item } = this.props;
    const { title, price, thumbnail } = item;
    return (
      <Link to={ { pathname: `/${title}`, product: { item: item } } } data-testid="product" className="item-card">
        <div data-testid="product-detail-link">
          <img src={ thumbnail } alt={ title } className="card-image" />
          <h4>{ title }</h4>
          <p>{ `R$ ${price}` }</p>
        </div>
      </Link>
    );
  }
}

CardProduct.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
  }).isRequired,
};

export default CardProduct;
