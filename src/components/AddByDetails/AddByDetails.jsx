import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import ShoppingCart from '../../pages/ShoppingCart';

class AddByDetails extends Component {
  render() {
    const { id } = this.props;
    return (
      <div>
        <Link
          to="/shoppingcart"
          data-testid="product-detail-add-to-cart"
        >
          Adicionar ao carrinho
          { id }
        </Link>
      </div>
    );
  }
}
export default AddByDetails;
