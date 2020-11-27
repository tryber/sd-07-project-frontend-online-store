import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import { Link } from 'react-router-dom';

class CardProduct extends React.Component {
  constructor() {
    super();
    this.addToLocalStorage = this.addToLocalStorage.bind(this);
  }

  addToLocalStorage() {
    const { item } = this.props;
    const { id } = item;
    localStorage.setItem(id, JSON.stringify(item));
  }

  render() {
    const { item } = this.props;
    const { title, price, thumbnail } = item;
    return (
      <div>
        <Link
          to={ { pathname: `/${title}`, product: { item } } }
          data-testid="product"
          className="item-card"
        >
          <div data-testid="product-detail-link">
            <img src={ thumbnail } alt={ title } className="card-image" />
            <h4>{title}</h4>
            <p>{`R$ ${price}`}</p>
          </div>
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ this.addToLocalStorage }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

CardProduct.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
  }).isRequired,
};

export default CardProduct;
