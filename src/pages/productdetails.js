import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ButtonCart from '../components/ButtonCart';
import ButtonBuy from '../components/ButtonBuy';
import EvalueProducts from '../components/EvalueProducts';

class ProductDetails extends React.Component {
  render() {
    const { location } = this.props;
    const { product, addToCart, productsCart } = location;
    const { title, thumbnail, price } = product;
    return (
      <div>

        <Link to="/">
          <button type="button">
            Home
          </button>
        </Link>

        <ButtonCart productsCart={ productsCart } />

        <img src={ thumbnail } alt={ title } />
        <h2 data-testid="product-detail-name">{title}</h2>
        <h3>{price}</h3>

        <ButtonBuy
          testid="product-detail-add-to-cart"
          addToCart={ addToCart }
          product={ product }
        />

        <br />

        <EvalueProducts />

      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    addToCart: PropTypes.func.isRequired,
    productsCart: PropTypes.arrayOf(PropTypes.object).isRequired,
    product: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      quantity: PropTypes.number,
      price: PropTypes.number.isRequired,
      thumbnail: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default ProductDetails;
