import React from 'react';

class CartItem extends React.Component {
  render() {
    const itemId = this.props.itemId;
    const item = itemId.info;
    return (
      <div data-testid="shopping-cart-product-name" className="cart-item">
        <div>
          <img alt={item.title} src={item.thumbnail} />
        </div>
        <div>
          <h3>{item.title}</h3>
          <ul>
            <li>{`R$ ${item.price}`}</li>
            <li data-testid="shopping-cart-product-quantity">
              Quantidade {itemId.quantidade}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default CartItem;
