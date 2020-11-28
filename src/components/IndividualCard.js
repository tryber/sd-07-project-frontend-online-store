import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class IndividualCard extends Component {
  render() {
    const { key, price, image, title, id, addShoppingCartItems } = this.props;
    return (
      <div key={ key } data-testid="product">
        <div className="main-category-result-content">
          <h4>{ title }</h4>
          <img src={ image } alt="titulo" />
          <p>{ price }</p>
          <Link to={ `/product/${id}` } data-testid="product-detail-link">
            <button type="button" className="bt-det">
              Ver detalhes
            </button>
          </Link>
          <button
            type="button"
            id={ id }
            onClick={ addShoppingCartItems }
            className="bt-add"
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    );
  }
}

IndividualCard.propTypes = {
  key: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  addShoppingCartItems: PropTypes.func.isRequired,
};

export default IndividualCard;
