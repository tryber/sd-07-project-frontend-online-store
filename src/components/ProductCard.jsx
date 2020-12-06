import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Buy from './Buy';
import packageImage from '../images/packageImage.svg';
import './ProductCard.css';

class ProductCard extends Component {
  getFreeShipping() {
    return (
      <div data-testid="free-shipping">
        Frete Grátis
        <img className="packageImage" src={ packageImage } alt="Frete grátis" />
      </div>
    );
  }

  getCard(title, thumbnail, price, shipping) {
    return (
      <div data-testid="product">
        <h2>{ title }</h2>
        <img src={ thumbnail } alt="product" />

        <div className="divShipping">
          {
            shipping.free_shipping ? this.getFreeShipping() : false
          }
        </div>
        <br />
        <span>{ price }</span>
      </div>
    );
  }

  render() {
    const { products, addToCard, shoppingCard } = this.props;
    // const { availableQuantity } = products;
    // console.log(products[0].availableQuantity)
    return (
      <div>
        {products.map(
          ({
            id,
            title,
            thumbnail,
            price,
            available_quantity: availableQuantity,
            shipping,
          }) => (
            <div key={ id }>
              <Link
                data-testid="product-detail-link"
                to={ {
                  pathname: `/details/${id}`,
                  id,
                  title,
                  thumbnail,
                  price,
                  availableQuantity,
                  addToCard,
                  shoppingCard,
                  shipping,
                } }
              >
                {this.getCard(title, thumbnail, price, shipping))}
              </Link>
              <Buy
                dataTestId="product-add-to-cart"
                id={ id }
                title={ title }
                price={ price }
                availableQuantity={ availableQuantity }
                thumbnail={ thumbnail }
                addToCard={ addToCard }
              />
            </div>
          ),
        )}
      </div>
    );
  }
}

ProductCard.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  shoppingCard: PropTypes.arrayOf(PropTypes.object).isRequired,
  addToCard: PropTypes.func.isRequired,
};

export default ProductCard;
