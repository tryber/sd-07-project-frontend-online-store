import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';
import ProductSpec from './ProductSpec';

class ProductDetails extends Component {
  render() {
    console.log(this.props);
    const { location } = this.props;
    const { thumbnail, title, price, attributes } = location.product;

    return (
      <div>
        <Link data-testid="shopping-cart-button" to="/carrinho">
          Carrinho
        </Link>
        <div>
          <h2 data-testid="product-detail-name">
            { ` O produto ${title} possui o preço ${price}`}
          </h2>
          <img src={ thumbnail } alt="imagem do produto" />
        </div>
        <div>
          <h3>Especificações Técnicas</h3>
          {attributes.map((attribute) => (
            <ProductSpec key={ attribute.id } spec={ attribute } />
          ))}
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: Proptypes.shape({
    product: Proptypes.shape({
      attributes: Proptypes.arrayOf(Proptypes.object).isRequired,
      thumbnail: Proptypes.string.isRequired,
      title: Proptypes.string.isRequired,
      price: Proptypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
