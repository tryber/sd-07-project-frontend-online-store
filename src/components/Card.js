import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Card extends React.Component {
  render() {
    const { productCards } = this.props;
    const {
      id,
      title,
      thumbnail,
      price,
    } = productCards;

    return (
      <div data-testid="product">
        <Link to={ `/card/${id}` } data-testid="product-detail-link">
          <h3>{ title }</h3>
          <img src={ thumbnail } alt={ title } />
          <span>{ price }</span>
        </Link>
      </div>
    );
  }
}

Card.propTypes = {
  productCards: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Card;
