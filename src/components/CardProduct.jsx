import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import { Link } from 'react-router-dom';

class CardProduct extends React.Component {
  render() {
    const { item, categoryId } = this.props;
    const { title, price, thumbnail, id } = item;
    return (
      <Link to={`/${categoryId}/${id}`} data-testid="product" className="item-card">
        <img src={ thumbnail } alt={ title } className="card-image" />
        <h4>{ title }</h4>
         <p>{ `R$ ${price}` }</p>
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
