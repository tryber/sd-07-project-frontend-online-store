import React from 'react';
import PropTypes from 'prop-types';

class CardProduct extends React.Component {
  render() {
    const { item } = this.props;
    const { title, price, thumbnail } = item;
    return (
      <div data-testid="product">
        <h3>{ title }</h3>
        <img src={ thumbnail } alt={ title } />
        <p>{ price }</p>
      </div>
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
