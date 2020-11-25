import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { productCards } = this.props;
    const {
      title,
      thumbnail,
      price,
    } = productCards;

    return (
      <div data-testid="product">
        <h3>{ title }</h3>
        <img src={ thumbnail } alt={ title } />
        <span>{ price }</span>
      </div>
    );
  }
}

Card.propTypes = {
  productCards: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Card;
