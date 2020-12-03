import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ShoppingCartButton, Buy } from '../components/index';

class Details extends Component {
  render() {
    const { location: { id, title, thumbnail, price, shipping } } = this.props;
    const { free_shipping } = shipping;
    const { shoppingCard, addToCard } = this.props;
    return (
      <div>
        <div>
          <Link to="/">Return</Link>
        </div>
        <div>
          <ShoppingCartButton productsInShoppingCart={ shoppingCard } />
        </div>
        <h2 data-testid="product-detail-name">
          {`Produto ${title} - R$ ${price}`}
        </h2>
        <div>
          <img alt={ title } src={ thumbnail } />
        </div>
        {free_shipping ? <span data-testid="free-shipping">Frete Grátis</span> : false}
        <Buy
          dataTestId="product-detail-add-to-cart"
          id={ id }
          title={ title }
          price={ price }
          thumbnail={ thumbnail }
          addToCard={ addToCard }
        />
        <h4>Especificações técnicas</h4>
        <ul>
          <li>{ title }</li>
          <li>{ price }</li>
        </ul>
      </div>
    );
  }
}
Details.propTypes = {
  location: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    addToCard: PropTypes.func.isRequired,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool.isRequired,
    }).isRequired,
  }).isRequired,
  shoppingCard: PropTypes.arrayOf(PropTypes.object).isRequired,
  addToCard: PropTypes.func.isRequired,
};

export default Details;
