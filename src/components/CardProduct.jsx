import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class CardProduct extends React.Component {
  render() {
    const { item } = this.props;
    const { title, price, thumbnail } = item;
    return (
      <div
        data-testid="product"
        className="item-card"
      >
        <img src={ thumbnail } alt={ title } className="card-image" />
        <h4>{ title }</h4>
        <p>{ `R$ ${price}` }</p>
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
