import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../App.css';

export default class Item extends React.Component {
  render() {
    const { product: { id, title, thumbnail, price } } = this.props;
    const { product } = this.props;
    return (
      <div className="items" data-testid="product" key={ id }>
        <h4>{ title }</h4>
        <img className="item-image" src={ thumbnail } alt="imagem do produto" />
        <div className="item-price">
          { `R$ ${price}` }
        </div>
        <Link
          to={ { pathname: `/product/${id}`, state: product } }
          data-testid="product-detail-link"
        >
          Ver detalhes do produto
        </Link>
      </div>
    );
  }
}

Item.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
