import React from 'react';
import EmptyShopCar from '../components/EmptyShopCar';
import { readItemsOnCart } from '../services/cartAPI';

class ShopPage extends React.Component {
  constructor() {
    super();
    this.renderProducts = this.renderProducts.bind(this);
  }

  renderProducts() {
    const items = readItemsOnCart();
    return (
      <div>
        {items
          .map(({ title, id }) => (
            <div data-testid="shopping-cart-product-name" key={ id }>{ title }</div>
          ))}
      </div>
    );
  }

  render() {
    const items = readItemsOnCart();
    return (
      <>
        <EmptyShopCar />
        <div data-testid="shopping-cart-product-quantity">{items.length}</div>
        {this.renderProducts()}
      </>
    );
  }
}

export default ShopPage;
