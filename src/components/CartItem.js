import React from 'react';
import QuantifyProducts from './buttonsCart';

class CartItem extends React.Component {
  render() {
    const { itemId } = this.props;
    const item = itemId.info;
    return (
      <div data-testid="shopping-cart-product-name" className="cart-item">
        <div>
          <img data-testid="imagem-product-cart" alt={item.title} src={item.thumbnail} />
        </div>
        <div>
          <h3>{item.title}</h3>
          <ul>
            <li>{`R$ ${item.price}`}</li>
            <li data-testid="shopping-cart-product-quantity">
              Quantidade {itemId.quantidade}
              <QuantifyProducts />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default CartItem;
