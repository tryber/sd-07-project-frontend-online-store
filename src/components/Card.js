import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      title,
      photo,
      price,
    } = this.props.productCards;

    return (
      <div data-testid="product">
        <h3>{ title }</h3>
        <img src={ photo } alt={ title } />
        <span>{ price }</span>
      </div>
    );
  }
}

Card.propTypes = {
  productCards: PropTypes.shape({
    title: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired
}

export default Card;