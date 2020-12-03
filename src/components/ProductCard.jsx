import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Buy from './Buy';

class ProductCard extends Component {
  getCard(title, thumbnail, price) {
    return (
      <div data-testid="product">
        <h2>{title}</h2>
        <img src={ thumbnail } alt="product" />
        <span>{price}</span>
      </div>
    );
  }

  render() {
    const { products, addToCard, shoppingCard } = this.props;
    return (
      <div>
        {products.map(({ id, title, thumbnail, price }) => (
          <div key={ id }>
            <Link
              data-testid="product-detail-link"
              to={ {
                pathname: `/details/${id}`,
                id,
                title,
                thumbnail,
                price,
                addToCard,
                shoppingCard,
              } }
            >
              {this.getCard(title, thumbnail, price)}
            </Link>
            <Buy
              dataTestId="product-add-to-cart"
              id={ id }
              title={ title }
              price={ price }
              thumbnail={ thumbnail }
              addToCard={ addToCard }
            />
          </div>
        ))}
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
