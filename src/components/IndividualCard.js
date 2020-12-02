import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class IndividualCard extends Component {
  render() {
    const { product, addShoppingCartItems } = this.props;
    const { price, thumbnail, title, id } = product;
    return (
      <div key={ id } data-testid="product">
        <div className="main-category-result-content">
          <h4>{ title }</h4>
          <img src={ thumbnail } alt="titulo" />
          <p>{ price }</p>
          <Link
            to={ { pathname: '/product', product } }
            data-testid="product-detail-link"
          >
            <button type="button" className="bt-det">
              Ver detalhes
            </button>
          </Link>
          <button
            type="button"
            id={ id }
            onClick={ addShoppingCartItems }
            className="bt-add"
            data-testid="product-add-to-cart"
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    );
  }
}

IndividualCard.propTypes = {
  product: PropTypes.shape({
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  addShoppingCartItems: PropTypes.func.isRequired,
};

export default IndividualCard;
