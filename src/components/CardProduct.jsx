import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CardProduct extends React.Component {
  render() {
    const { item, categoryId } = this.props;
    const { title, price, thumbnail, id } = item;
    return (
      <Link to={`/${categoryId}/${id}`} data-testid="product">
        <h3>{ title }</h3>
        <img src={ thumbnail } alt={ title } />
        <p>{ price }</p>
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
