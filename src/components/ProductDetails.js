import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductDetails extends Component {
  render() {
    return (
      <div>
        <Link to="/shopping-cart" data-testid="shopping-cart-button">
          Carrinho de compras
        </Link>
      </div>
    );
  }
}

export default ProductDetails;
