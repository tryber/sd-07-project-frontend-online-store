import React from 'react';

class CartItem extends React.Component {
  render() {
    const itemId = this.props.itemId;
    const item = itemId.info;
    return (
      <div data-testid="shopping-cart-product-name" className="itemCart">
        <p>{item.title}</p>
        <img alt={item.title} src={item.thumbnail} />
        <p>{`R$ ${item.price}`}</p>
        <p data-testid="shopping-cart-product-quantity">
          Quantidade {itemId.quantidade}
        </p>
      </div>
    );
  }
}

export default CartItem;
