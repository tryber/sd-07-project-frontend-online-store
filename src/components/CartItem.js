import React from 'react';
import QuantifyProducts from './buttonsCart';

class CartItem extends React.Component {
  render() {
    const { itemId } = this.props;
    const item = itemId.info;
    return (
      <div data-testid="shopping-cart-product-name" className="itemCart">

        <img
          data-testid="imagem-product-cart"
          alt={ item.title }
          src={ item.thumbnail }
        />
        <span data-testid="title-product-cart">{ item.title }</span>

        <span data-testid="shopping-cart-product-quantity">
          <QuantifyProducts />
        </span>

        <span data-testid="price-product-cart">{ `R$ ${item.price}` }</span>
      </div>
    );
  }
}

export default CartItem;
