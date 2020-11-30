import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ShoppingCartButton, Buy,  Assessment } from '../components/index';

class Details extends Component {
  render() {
    const { location: { id, title, thumbnail, price } } = this.props;
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
        <Assessment />
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
  }).isRequired,
  shoppingCard: PropTypes.arrayOf(PropTypes.object).isRequired,
  addToCard: PropTypes.func.isRequired,
};

export default Details;
